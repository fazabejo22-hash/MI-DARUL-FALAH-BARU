<?php

namespace Tests\Feature;

use App\Models\AcademicYear;
use App\Models\Attendance;
use App\Models\Classroom;
use App\Models\Grade;
use App\Models\Student;
use App\Models\Subject;
use App\Models\Teacher;
use App\Models\User;
use Database\Seeders\RolePermissionSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AttendanceAndGradeTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed(RolePermissionSeeder::class);
    }

    public function test_can_record_student_attendance(): void
    {
        $academicYear = AcademicYear::create([
            'name' => '2026/2027',
            'semester' => 'Ganjil',
            'is_active' => true,
        ]);

        $classroom = Classroom::create([
            'name' => '1A',
            'grade_level' => '1',
            'academic_year_id' => $academicYear->id,
            'capacity' => 30,
        ]);

        $student = Student::create([
            'nisn' => '0012345678',
            'nis' => '1001',
            'name' => 'Ahmad Fauzi',
            'gender' => 'L',
            'status' => 'Aktif',
        ]);

        $attendance = Attendance::create([
            'classroom_id' => $classroom->id,
            'student_id' => $student->id,
            'academic_year_id' => $academicYear->id,
            'date' => '2026-09-12',
            'status' => 'hadir',
            'notes' => 'Tepat waktu',
        ]);

        $this->assertDatabaseHas('attendances', [
            'student_id' => $student->id,
            'status' => 'hadir',
        ]);
    }

    public function test_can_record_student_grade(): void
    {
        $academicYear = AcademicYear::create([
            'name' => '2026/2027',
            'semester' => 'Ganjil',
            'is_active' => true,
        ]);

        $classroom = Classroom::create([
            'name' => '1A',
            'grade_level' => '1',
            'academic_year_id' => $academicYear->id,
            'capacity' => 30,
        ]);

        $student = Student::create([
            'nisn' => '0012345679',
            'nis' => '1002',
            'name' => 'Siti Aminah',
            'gender' => 'P',
            'status' => 'Aktif',
        ]);

        $subject = Subject::create([
            'code' => 'MTK1',
            'name' => 'Matematika',
            'category' => 'Umum',
        ]);

        $teacher = Teacher::create([
            'nip' => '198001012005011001',
            'name' => 'Drs. H. M. Nur',
            'gender' => 'L',
            'status' => 'PNS',
        ]);

        $grade = Grade::create([
            'classroom_id' => $classroom->id,
            'student_id' => $student->id,
            'subject_id' => $subject->id,
            'teacher_id' => $teacher->id,
            'academic_year_id' => $academicYear->id,
            'semester' => 'Ganjil',
            'assessment_type' => 'UTS',
            'score' => 88.50,
            'notes' => 'Sangat baik',
        ]);

        $this->assertDatabaseHas('grades', [
            'student_id' => $student->id,
            'score' => 88.50,
            'assessment_type' => 'UTS',
        ]);
    }
}
