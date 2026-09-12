<?php

namespace Tests\Feature;

use App\Models\AcademicYear;
use App\Models\Classroom;
use App\Models\ReportCard;
use App\Models\Semester;
use App\Models\Student;
use App\Models\Teacher;
use Database\Seeders\RolePermissionSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ReportCardTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed(RolePermissionSeeder::class);
    }

    public function test_can_create_and_view_report_card(): void
    {
        $academicYear = AcademicYear::create([
            'name' => '2026/2027',
            'is_active' => true,
        ]);

        $semester = Semester::create([
            'academic_year_id' => $academicYear->id,
            'name' => 'Ganjil',
            'is_active' => true,
        ]);

        $classroom = Classroom::create([
            'name' => '6A',
            'grade_level' => '6',
            'academic_year_id' => $academicYear->id,
            'capacity' => 30,
        ]);

        $student = Student::create([
            'nisn' => '0012345688',
            'nis' => '1010',
            'name' => 'Ahmad Zaki Al-Faruq',
            'gender' => 'L',
            'status' => 'Aktif',
        ]);

        $teacher = Teacher::create([
            'nip' => '198501012010011001',
            'name' => 'Drs. Ach. Azhari, M.Pd.I',
            'gender' => 'L',
            'status' => 'PNS',
        ]);

        $reportCard = ReportCard::create([
            'student_id' => $student->id,
            'classroom_id' => $classroom->id,
            'academic_year_id' => $academicYear->id,
            'semester_id' => $semester->id,
            'teacher_id' => $teacher->id,
            'attendance_hadir' => 110,
            'attendance_izin' => 2,
            'attendance_sakit' => 1,
            'attendance_alpa' => 0,
            'homeroom_notes' => 'Tingkatkan terus prestasimu Nak!',
            'status' => 'Published',
            'promotion_status' => 'Naik Kelas',
        ]);

        $this->assertDatabaseHas('report_cards', [
            'student_id' => $student->id,
            'promotion_status' => 'Naik Kelas',
            'attendance_hadir' => 110,
        ]);
    }
}
