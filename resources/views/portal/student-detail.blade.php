@extends('layouts.app', ['title' => 'Detail Akademik Siswa'])

@section('content')
<div class="max-w-7xl mx-auto px-4 py-12 space-y-6">
    <div class="bg-white shadow rounded-lg p-6 space-y-4">
        <div class="flex justify-between items-center">
            <div>
                <h1 class="text-2xl font-bold text-slate-900">{{ $student->name }}</h1>
                <p class="text-xs text-slate-500 font-mono mt-1">NISN: {{ $student->nisn }} | NIS: {{ $student->nis }}</p>
            </div>
            <a href="{{ route('portal.parent') }}" class="text-sm text-emerald-700 font-semibold hover:underline">&larr; Kembali ke Portal Orang Tua</a>
        </div>

        <div class="border-t border-slate-200 pt-6 space-y-6">
            <div>
                <h3 class="font-bold text-lg text-slate-800 mb-3">Nilai Siswa</h3>
                @if($student->grades->count() > 0)
                <ul class="divide-y divide-slate-100 border border-slate-200 rounded-lg overflow-hidden">
                    @foreach($student->grades as $grade)
                    <li class="p-4 flex justify-between items-center bg-white">
                        <span>Nilai</span>
                        <span class="font-bold text-emerald-700">{{ $grade->score }}</span>
                    </li>
                    @endforeach
                </ul>
                @else
                <p class="text-sm text-slate-500">Belum ada data nilai.</p>
                @endif
            </div>

            <div>
                <h3 class="font-bold text-lg text-slate-800 mb-3">Rapor Siswa</h3>
                @if($student->reportCards->count() > 0)
                <ul class="divide-y divide-slate-100 border border-slate-200 rounded-lg overflow-hidden">
                    @foreach($student->reportCards as $report)
                    <li class="p-4 flex justify-between items-center bg-white">
                        <span>Status: {{ $report->status }} | Promosi: {{ $report->promotion_status }}</span>
                        <span class="font-mono text-xs bg-emerald-50 text-emerald-700 px-2 py-1 rounded">Tersedia</span>
                    </li>
                    @endforeach
                </ul>
                @else
                <p class="text-sm text-slate-500">Belum ada rapor.</p>
                @endif
            </div>
        </div>
    </div>
</div>
@endsection
