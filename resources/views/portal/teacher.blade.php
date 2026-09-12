@extends('layouts.app', ['title' => 'Portal Guru'])

@section('content')
<div class="max-w-7xl mx-auto px-4 py-12 space-y-6">
    <div class="bg-white shadow rounded-lg p-6">
        <h1 class="text-2xl font-bold text-slate-900">Portal Guru</h1>
        @if($teacher)
        <p class="text-slate-600 mt-1">Halo, <strong>{{ $teacher->name }}</strong> (NIP: {{ $teacher->nip }})</p>

        <div class="mt-8">
            <h3 class="font-bold text-lg text-slate-800 mb-4">Jadwal / Penugasan Mengajar</h3>
            @if($teacher->teachingAssignments->count() > 0)
            <ul class="divide-y divide-slate-100 border border-slate-200 rounded-lg overflow-hidden">
                @foreach($teacher->teachingAssignments as $assignment)
                <li class="p-4 flex justify-between items-center bg-white">
                    <div>
                        <p class="font-bold text-slate-900">{{ optional($assignment->subject)->name ?? 'Mata Pelajaran' }}</p>
                        <p class="text-xs text-slate-500">Kelas: {{ optional($assignment->classroom)->name ?? '-' }}</p>
                    </div>
                    <span class="bg-amber-50 text-amber-800 text-xs px-2.5 py-1 rounded font-semibold">Aktif</span>
                </li>
                @endforeach
            </ul>
            @else
            <p class="text-sm text-slate-500">Belum ada penugasan mengajar tercatat.</p>
            @endif
        </div>
        @else
        <p class="text-amber-600 mt-4">Akun Anda belum terhubung dengan data guru. Hubungi Admin/TU.</p>
        @endif
    </div>
</div>
@endsection
