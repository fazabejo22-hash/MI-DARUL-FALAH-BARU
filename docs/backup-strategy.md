# Strategi Backup & Pemulihan (Backup & Disaster Recovery Strategy) - MI Darul Falah

Dokumen ini mendefinisikan prosedur dan kebijakan backup operasional untuk Sistem Informasi Terpadu Madrasah Ibtidaiyah Darul Falah (Stack: MySQL / MariaDB).

## 1. Lingkup Data yang Di-backup
- **Database (MySQL / MariaDB)**: Seluruh data relasional termasuk akun pengguna, data akademik (siswa, guru, kelas, absensi, nilai, rapor), serta modul CMS & PPDB.
- **File Upload / Storage (`storage/app/public`)**: Dokumen pendaftaran PPDB, foto profil, dan dokumen lampiran madrasah.

## 2. Jadwal & Retensi Backup
- **Backup Database Harian (Daily Backup)**: Dijalankan setiap pukul 01:00 WIB secara otomatis via skrip cron job `mysqldump`. Retensi penyimpanan: 30 hari.
- **Backup Full Storage Mingguan (Weekly Full Backup)**: Dijalankan setiap hari Minggu pukul 02:00 WIB untuk arsip dokumen dan storage publik. Retensi penyimpanan: 90 hari.

## 3. Skrip Backup Otomatis Database (MySQL / MariaDB)
```bash
#!/bin/bash
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_DIR="/var/backups/mi-darul-falah"
DB_NAME="${DB_DATABASE}"
DB_USER="${DB_USERNAME}"
DB_PASS="${DB_PASSWORD}"
DB_HOST="${DB_HOST:-127.0.0.1}"

mkdir -p $BACKUP_DIR

# Dump MySQL / MariaDB
mysqldump -h $DB_HOST -u $DB_USER -p"$DB_PASS" $DB_NAME | gzip > "$BACKUP_DIR/db_$TIMESTAMP.sql.gz"

# Hapus backup lebih lama dari 30 hari
find $BACKUP_DIR -type f -mtime +30 -exec rm {} \;
```

## 4. Keamanan & Enkripsi Backup
- File backup dienkripsi sebelum diunggah ke cloud storage sekunder (AWS S3 / Google Cloud Storage dengan enkripsi AES-256).
- Akses ke server backup dibatasi hanya untuk Super Admin dan tim DevOps resmi madrasah.

