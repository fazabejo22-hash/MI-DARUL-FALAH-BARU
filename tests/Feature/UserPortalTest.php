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

    public function test_guest_cannot_access_portal(): void
    {
        $response = $this->get('/portal');
        $response->assertRedirect('/admin/login');
    }

    public function test_parent_can_have_multiple_children(): void
    {
        $parentUser = User::create([
            'name' => 'Bapak Budi',
            'email' => 'budi@parent.com',
            'password' => bcrypt('password'),
            'is_active' => true,
        ]);
        $parentUser->assignRole('Orang Tua/Wali');

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

        $parentUser->children()->attach([$student1->id, $student2->id]);

        $this->assertCount(2, $parentUser->children);
        $this->assertTrue($parentUser->children->contains($student1));
        $this->assertTrue($parentUser->children->contains($student2));
    }

    public function test_parent_cannot_access_unlinked_child_idor(): void
    {
        $parentA = User::create([
            'name' => 'Parent A',
            'email' => 'parenta@test.com',
            'password' => bcrypt('password'),
            'is_active' => true,
        ]);
        $parentA->assignRole('Orang Tua/Wali');

        $studentB = Student::create([
            'nisn' => '9999999999',
            'nis' => '9999',
            'name' => 'Student B',
            'gender' => 'L',
            'status' => 'Aktif',
        ]);

        $this->actingAs($parentA);
        $response = $this->get(route('portal.student.detail', $studentB->id));
        $response->assertStatus(403);
    }

    public function test_student_cannot_access_other_student_idor(): void
    {
        $studentUserA = User::create([
            'name' => 'Student A',
            'email' => 'studenta@test.com',
            'password' => bcrypt('password'),
            'is_active' => true,
        ]);
        $studentUserA->assignRole('Siswa');

        $studentA = Student::create([
            'nisn' => '1111111111',
            'nis' => '1111',
            'name' => 'Anak A',
            'gender' => 'L',
            'status' => 'Aktif',
            'user_id' => $studentUserA->id,
        ]);

        $studentB = Student::create([
            'nisn' => '2222222222',
            'nis' => '2222',
            'name' => 'Anak B',
            'gender' => 'P',
            'status' => 'Aktif',
        ]);

        $this->actingAs($studentUserA);
        $response = $this->get(route('portal.student.detail', $studentB->id));
        $response->assertStatus(403);
    }
}
