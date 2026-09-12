# Panduan Deployment & Kesiapan Produksi (Production Deployment Readiness) - MI Darul Falah

Dokumen ini adalah panduan resmi untuk melakukan deployment Sistem Informasi Terpadu Madrasah Ibtidaiyah Darul Falah ke lingkungan produksi (Ubuntu LTS + Nginx + PHP-FPM + MySQL/MariaDB).

## 1. Spesifikasi Stack Produksi
- **OS**: Ubuntu 22.04 / 24.04 LTS
- **Web Server**: Nginx
- **PHP**: PHP 8.2+ dengan ekstensi (`bcmath`, `ctype`, `fileinfo`, `intl`, `json`, `mbstring`, `openssl`, `pdo`, `pdo_mysql`, `tokenizer`, `xml`, `gd`, `zip`)
- **Database**: MySQL 8.0+ / MariaDB 10.6+
- **Process Manager**: Supervisor (untuk queue worker / scheduler jika diperlukan)

---

## 2. Konfigurasi Nginx
Letakkan konfigurasi pada `/etc/nginx/sites-available/midarulfalah`. Pastikan web root mengarah ke direktori `/public` aplikasi Laravel.

```nginx
server {
    listen 80;
    server_name portal.midarulfalah.sch.id;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name portal.midarulfalah.sch.id;

    root /var/www/mi-darul-falah/public;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Content-Type-Options "nosniff";

    index index.php;

    charset utf-8;

    ssl_certificate /etc/letsencrypt/live/portal.midarulfalah.sch.id/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/portal.midarulfalah.sch.id/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
        fastcgi_hide_header X-Powered-By;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```

---

## 3. Konfigurasi Environment Produksi (`.env`)
Salin `.env.example` ke `.env` dan pastikan parameter berikut dikonfigurasi dengan benar:

```env
APP_NAME="MI Darul Falah"
APP_ENV=production
APP_KEY=base64:GENERATE_UNIQUE_KEY_VIA_ARTISAN
APP_DEBUG=false
APP_TIMEZONE=Asia/Jakarta
APP_URL=https://portal.midarulfalah.sch.id

LOG_CHANNEL=stack
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=error

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=midarulfalah_prod
DB_USERNAME=db_user_secure
DB_PASSWORD=strong_database_password_here

BROADCAST_CONNECTION=log
CACHE_STORE=file
FILESYSTEM_DISK=public
QUEUE_CONNECTION=sync
SESSION_DRIVER=file
SESSION_LIFETIME=120

SESSION_SECURE_COOKIE=true
```

---

## 4. Prosedur Deployment & Optimasi
Jalankan perintah berikut di server produksi secara berurutan:

1. **Masuk ke direktori aplikasi & tarik kode terbaru**:
   ```bash
   cd /var/www/mi-darul-falah
   git pull origin main
   ```
2. **Install dependensi composer (tanpa dev)**:
   ```bash
   composer install --no-dev --optimize-autoloader --no-interaction
   ```
3. **Jalankan migrasi database produksi (WAJIB menggunakan `--force`, JANGAN `migrate:fresh`)**:
   ```bash
   php artisan migrate --force
   ```
4. **Link Storage Public**:
   ```bash
   php artisan storage:link
   ```
5. **Optimasi Cache Laravel**:
   ```bash
   php artisan config:cache
   php artisan route:cache
   php artisan view:cache
   ```
6. **Pengaturan Hak Akses (Permissions)**:
   ```bash
   sudo chown -R www-data:www-data /var/www/mi-darul-falah
   sudo find /var/www/mi-darul-falah -type f -exec chmod 644 {} \;
   sudo find /var/www/mi-darul-falah -type d -exec chmod 755 {} \;
   sudo chmod -R 775 /var/www/mi-darul-falah/storage /var/www/mi-darul-falah/bootstrap/cache
   ```

---

## 5. Prosedur Maintenance & Rollback
- **Masuk ke Mode Pemeliharaan**:
  ```bash
  php artisan down --secret="bypass-token-123"
  ```
- **Keluar dari Mode Pemeliharaan**:
  ```bash
  php artisan up
  ```
- **Rollback Versi**:
  ```bash
  git checkout <previous_stable_commit>
  composer install --no-dev
  php artisan config:cache
  ```

---

## 6. Backup & Restore (MySQL / MariaDB)
- **Backup Manual**:
  ```bash
  mysqldump -u db_user_secure -p midarulfalah_prod | gzip > /var/backups/midarulfalah_$(date +%F).sql.gz
  ```
- **Restore Database**:
  ```bash
  gunzip < /var/backups/midarulfalah_YYYY-MM-DD.sql.gz | mysql -u db_user_secure -p midarulfalah_prod
  ```
