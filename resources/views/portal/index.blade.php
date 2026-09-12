@extends('layouts.app', ['title' => 'Portal Pengguna'])

@section('content')
<div class="max-w-7xl mx-auto px-4 py-12">
    <div class="bg-white shadow rounded-lg p-6">
        <h1 class="text-2xl font-bold text-slate-900 mb-4">Portal Pengguna MI Darul Falah</h1>
        <p class="text-slate-600 mb-6">Selamat datang, {{ $user->name }} ({{ $user->getRoleNames()->implode(', ') }})</p>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            @role('Siswa')
            <a href="{{ route('portal.student') }}" class="p-6 bg-emerald-50 border border-emerald-200 rounded-lg hover:bg-emerald-100 transition">
                <h3 class="font-bold text-emerald-900 text-lg">Portal Siswa</h3>
                <p class="text-emerald-700 text-sm mt-1">Lihat absensi, nilai, dan rapor pribadi Anda.</p>
            </a>
            @endrole

            @role('Orang Tua/Wali')
            <a href="{{ route('portal.parent') }}" class="p-6 bg-blue-50 border border-blue-200 rounded-lg hover:bg-blue-100 transition">
                <h3 class="font-bold text-blue-900 text-lg">Portal Orang Tua</h3>
                <p class="text-blue-700 text-sm mt-1">Pantau perkembangan akademik anak-anak Anda.</p>
            </a>
            @endrole

            @role('Guru')
            <a href="{{ route('portal.teacher') }}" class="p-6 bg-amber-50 border border-amber-200 rounded-lg hover:bg-amber-100 transition">
                <h3 class="font-bold text-amber-900 text-lg">Portal Guru</h3>
                <p class="text-amber-700 text-sm mt-1">Kelola jadwal mengajar, absensi, dan input nilai.</p>
            </a>
            @endrole

            @role('Wali Kelas')
            <a href="{{ route('portal.homeroom') }}" class="p-6 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 transition">
                <h3 class="font-bold text-purple-900 text-lg">Portal Wali Kelas</h3>
                <p class="text-purple-700 text-sm mt-1">Kelola rombongan belajar dan catatan rapor siswa.</p>
            </a>
            @endrole

            @hasanyrole('Super Admin|Admin/TU|Kepala Madrasah')
            <a href="/admin" class="p-6 bg-slate-50 border border-slate-200 rounded-lg hover:bg-slate-100 transition">
                <h3 class="font-bold text-slate-900 text-lg">Filament Admin Panel</h3>
                <p class="text-slate-700 text-sm mt-1">Akses panel kontrol manajemen madrasah.</p>
            </a>
            @endhasanyrole
        </div>
    </div>
</div>
@endsection
