<?php

namespace Tests\Feature;

use App\Models\AcademicYear;
use App\Models\Classroom;
use App\Models\Student;
use App\Models\Teacher;
use App\Models\User;
use Database\Seeders\RolePermissionSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserPortalTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed(RolePermissionSeeder::class);
    }

    public function test_parent_can_have_multiple_children(): void
    {
        $parentUser = User::create([
            'name' => 'Bapak Budi',
            'email' => 'budi@parent.com',
            'password' => bcrypt('password'),
            'is_active' => true,
        ]);
        $parentUser->assignRole('Orang Tua');

        $student1 = Student::create([
            'nisn' => '0012345601',
            'nis' => '2001',
            'name' => 'Anak Pertama',
            'gender' => 'L',
            'status' => 'Aktif',
        ]);

        $student2 = Student::create([
            'nisn' => '0012345602',
            'nis' => '2002',
            'name' => 'Anak Kedua',
            'gender' => 'P',
            'status' => 'Aktif',
        ]);

        // Attach both children to parent
        $parentUser->children()->attach([$student1->id, $student2->id]);

        $this->assertCount(2, $parentUser->children);
        $this->assertTrue($parentUser->children->contains($student1));
        $this->assertTrue($parentUser->children->contains($student2));
    }

    public function test_student_portal_scoping(): void
    {
        $studentUser = User::create([
            'name' => 'Siswa Zaki',
            'email' => 'zaki@student.com',
            'password' => bcrypt('password'),
            'is_active' => true,
        ]);
        $studentUser->assignRole('Siswa');

        $student = Student::create([
            'nisn' => '0012345688',
            'nis' => '1010',
            'name' => 'Ahmad Zaki Al-Faruq',
            'gender' => 'L',
            'status' => 'Aktif',
            'user_id' => $studentUser->id,
        ]);

        $this->assertEquals($studentUser->id, $student->user->id);
        $this->assertEquals($student->id, $studentUser->student->id);
    }
}
