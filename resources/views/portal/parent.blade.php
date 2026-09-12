@extends('layouts.app', ['title' => 'Portal Orang Tua'])

@section('content')
<div class="max-w-7xl mx-auto px-4 py-12 space-y-6">
    <div class="bg-white shadow rounded-lg p-6">
        <h1 class="text-2xl font-bold text-slate-900">Portal Orang Tua / Wali</h1>
        <p class="text-slate-600 mt-1">Daftar anak / siswa yang terhubung dengan akun Anda:</p>

        <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            @forelse($children as $child)
            <div class="border border-slate-200 rounded-lg p-6 bg-slate-50 space-y-3">
                <div class="flex justify-between items-start">
                    <div>
                        <h3 class="font-bold text-lg text-slate-900">{{ $child->name }}</h3>
                        <p class="text-xs text-slate-500 font-mono">NISN: {{ $child->nisn }} | NIS: {{ $child->nis }}</p>
                    </div>
                    <a href="{{ route('portal.student.detail', $child->id) }}" class="bg-emerald-600 text-white text-xs px-3 py-1.5 rounded font-semibold hover:bg-emerald-700 transition">Detail Akademik</a>
                </div>
                <div class="text-sm text-slate-600 pt-2 border-t border-slate-200 flex justify-between">
                    <span>Total Nilai Tercatat: {{ $child->grades->count() }}</span>
                    <span>Total Rapor: {{ $child->reportCards->count() }}</span>
                </div>
            </div>
            @empty
            <p class="text-sm text-slate-500 col-span-2">Belum ada anak yang dihubungkan ke akun orang tua Anda. Silakan hubungi admin sekolah.</p>
            @endforelse
        </div>
    </div>
</div>
@endsection
