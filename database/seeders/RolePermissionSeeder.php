<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RolePermissionSeeder extends Seeder
{
    public function run(): void
    {
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // Define Roles as requested
        $roles = [
            'Super Admin',
            'Admin/TU',
            'Kepala Madrasah',
            'Guru',
            'Wali Kelas',
            'Siswa',
            'Orang Tua/Wali',
        ];

        foreach ($roles as $role) {
            Role::firstOrCreate(['name' => $role, 'guard_name' => 'web']);
        }

        // Define Basic Permissions including CMS manage-website
        $permissions = [
            'manage-system',
            'manage-users',
            'manage-school-profile',
            'manage-website',
            'manage-academic',
            'input-grades',
            'input-attendance',
            'view-reports',
            'view-own-grades',
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission, 'guard_name' => 'web']);
        }

        // Assign permissions by role using least privilege.
        Role::findByName('Super Admin')->syncPermissions(Permission::all());

        Role::findByName('Admin/TU')->syncPermissions([
            'manage-school-profile',
            'manage-website',
            'manage-academic',
            'view-reports',
        ]);

        Role::findByName('Kepala Madrasah')->syncPermissions([
            'view-reports',
        ]);

        Role::findByName('Guru')->syncPermissions([
            'input-grades',
            'input-attendance',
        ]);

        Role::findByName('Wali Kelas')->syncPermissions([
            'input-grades',
            'input-attendance',
            'view-reports',
        ]);

        Role::findByName('Siswa')->syncPermissions([
            'view-own-grades',
        ]);

        Role::findByName('Orang Tua/Wali')->syncPermissions([
            'view-own-grades',
        ]);
    }
}
