<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Student;
use App\Models\Teacher;
use App\Models\Classroom;

class PortalController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
    }

    public function index(Request $request)
    {
        $user = Auth::user();

        if ($user->hasRole('Super Admin') || $user->hasRole('Admin/TU') || $user->hasRole('Kepala Madrasah')) {
            return view('portal.admin', compact('user'));
        } elseif ($user->hasRole('Siswa')) {
            return redirect()->route('portal.student');
        } elseif ($user->hasRole('Orang Tua/Wali')) {
            return redirect()->route('portal.parent');
        } elseif ($user->hasRole('Wali Kelas')) {
            return redirect()->route('portal.homeroom');
        } elseif ($user->hasRole('Guru')) {
            return redirect()->route('portal.teacher');
        }

        return view('portal.index', compact('user'));
    }

    public function studentPortal(Request $request)
    {
        $user = Auth::user();
        if (!$user->hasRole('Siswa')) {
            abort(403, 'Unauthorized access to Student Portal.');
        }

        $student = Student::with(['classrooms', 'attendances', 'grades', 'reportCards'])->where('user_id', $user->id)->first();

        return view('portal.student', compact('user', 'student'));
    }

    public function parentPortal(Request $request)
    {
        $user = Auth::user();
        if (!$user->hasRole('Orang Tua/Wali')) {
            abort(403, 'Unauthorized access to Parent Portal.');
        }

        $children = $user->children()->with(['classrooms', 'attendances', 'grades', 'reportCards'])->get();

        return view('portal.parent', compact('user', 'children'));
    }

    public function teacherPortal(Request $request)
    {
        $user = Auth::user();
        if (!$user->hasRole('Guru') && !$user->hasRole('Wali Kelas')) {
            abort(403, 'Unauthorized access to Teacher Portal.');
        }

        $teacher = Teacher::with(['teachingAssignments.classroom', 'teachingAssignments.subject'])->where('user_id', $user->id)->first();

        return view('portal.teacher', compact('user', 'teacher'));
    }

    public function homeroomPortal(Request $request)
    {
        $user = Auth::user();
        if (!$user->hasRole('Wali Kelas')) {
            abort(403, 'Unauthorized access to Homeroom Portal.');
        }

        $teacher = Teacher::where('user_id', $user->id)->first();
        $classrooms = $teacher ? Classroom::with('students.attendances', 'students.grades', 'students.reportCards')->where('homeroom_teacher_id', $teacher->id)->get() : collect();

        return view('portal.homeroom', compact('user', 'teacher', 'classrooms'));
    }

    public function studentDetail(Request $request, Student $student)
    {
        $user = Auth::user();

        // IDOR Prevention: check if user is admin, the student themselves, or parent of this student
        if ($user->hasRole('Super Admin') || $user->hasRole('Admin/TU') || $user->hasRole('Kepala Madrasah')) {
            // Allowed
        } elseif ($user->hasRole('Siswa')) {
            if ($student->user_id !== $user->id) {
                abort(403, 'IDOR Protection: You cannot view other students data.');
            }
        } elseif ($user->hasRole('Orang Tua/Wali')) {
            if (!$user->children->contains($student->id)) {
                abort(403, 'IDOR Protection: This student is not linked to your parent account.');
            }
        } else {
            abort(403, 'Unauthorized.');
        }

        $student->load(['classrooms', 'attendances', 'grades', 'reportCards']);

        return view('portal.student-detail', compact('student'));
    }
}
