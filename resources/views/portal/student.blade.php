@extends('layouts.app', ['title' => 'Portal Siswa'])

@section('content')
<div class="max-w-7xl mx-auto px-4 py-12 space-y-6">
    <div class="bg-white shadow rounded-lg p-6">
        <h1 class="text-2xl font-bold text-slate-900">Portal Siswa</h1>
        @if($student)
        <p class="text-slate-600 mt-1">Halo, <strong>{{ $student->name }}</strong> (NISN: {{ $student->nisn }})</p>
        
        <div class="mt-8 space-y-6">
            <div>
                <h3 class="font-bold text-lg text-slate-800 mb-2">Riwayat Nilai</h3>
                @if($student->grades->count() > 0)
                <ul class="divide-y divide-slate-100 border border-slate-200 rounded-lg overflow-hidden">
                    @foreach($student->grades as $grade)
                    <li class="p-4 flex justify-between items-center bg-white">
                        <span>Nilai (Tugas/Ujian)</span>
                        <span class="font-bold text-emerald-700">{{ $grade->score }}</span>
                    </li>
                    @endforeach
                </ul>
                @else
                <p class="text-sm text-slate-500">Belum ada data nilai.</p>
                @endif
            </div>

            <div>
                <h3 class="font-bold text-lg text-slate-800 mb-2">Rapor Hasil Belajar</h3>
                @if($student->reportCards->count() > 0)
                <ul class="divide-y divide-slate-100 border border-slate-200 rounded-lg overflow-hidden">
                    @foreach($student->reportCards as $report)
                    <li class="p-4 flex justify-between items-center bg-white">
                        <span>Status: {{ $report->status }} | Kenaikan: {{ $report->promotion_status }}</span>
                        <span class="font-mono text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded">Rapor Tersedia</span>
                    </li>
                    @endforeach
                </ul>
                @else
                <p class="text-sm text-slate-500">Belum ada rapor diterbitkan.</p>
                @endif
            </div>
        </div>
        @else
        <p class="text-amber-600 mt-4">Akun Anda belum dihubungkan dengan data siswa. Hubungi Admin/TU.</p>
        @endif
    </div>
</div>
@endsection
