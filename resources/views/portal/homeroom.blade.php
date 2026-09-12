@extends('layouts.app', ['title' => 'Portal Wali Kelas'])

@section('content')
<div class="max-w-7xl mx-auto px-4 py-12 space-y-6">
    <div class="bg-white shadow rounded-lg p-6">
        <h1 class="text-2xl font-bold text-slate-900">Portal Wali Kelas</h1>
        @if($teacher)
        <p class="text-slate-600 mt-1">Wali Kelas: <strong>{{ $teacher->name }}</strong></p>

        <div class="mt-8 space-y-6">
            @forelse($classrooms as $classroom)
            <div class="border border-slate-200 rounded-lg p-6 bg-slate-50 space-y-4">
                <h3 class="font-bold text-lg text-slate-900">Rombongan Belajar: {{ $classroom->name }} (Tingkat {{ $classroom->grade_level }})</h3>
                <p class="text-xs text-slate-500">Jumlah Siswa: {{ $classroom->students->count() }}</p>

                <div class="overflow-x-auto">
                    <table class="w-full text-left text-sm bg-white border border-slate-200 rounded">
                        <thead>
                            <tr class="bg-slate-100 border-b border-slate-200 text-xs text-slate-600 uppercase">
                                <th class="p-3">NISN</th>
                                <th class="p-3">Nama Siswa</th>
                                <th class="p-3">L/P</th>
                                <th class="p-3">Status</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100">
                            @foreach($classroom->students as $student)
                            <tr>
                                <td class="p-3 font-mono text-xs">{{ $student->nisn }}</td>
                                <td class="p-3 font-bold text-slate-800">{{ $student->name }}</td>
                                <td class="p-3">{{ $student->gender }}</td>
                                <td class="p-3"><span class="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded text-xs">{{ $student->status }}</span></td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
            @empty
            <p class="text-sm text-slate-500">Anda belum ditugaskan sebagai wali kelas di rombongan belajar manapun.</p>
            @endforelse
        </div>
        @else
        <p class="text-amber-600 mt-4">Akun Anda belum terhubung dengan data guru.</p>
        @endif
    </div>
</div>
@endsection
