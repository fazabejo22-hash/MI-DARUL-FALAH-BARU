@extends('layouts.app', ['title' => 'Admin Dashboard'])

@section('content')
<div class="max-w-7xl mx-auto px-4 py-12">
    <div class="bg-white shadow rounded-lg p-6 space-y-4">
        <h1 class="text-2xl font-bold text-slate-900">Dashboard Admin / Pimpinan</h1>
        <p class="text-slate-600">Selamat datang di Panel Kontrol Madrasah.</p>
        <div>
            <a href="/admin" class="inline-block bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-700 transition">Buka Filament Admin Panel</a>
        </div>
    </div>
</div>
@endsection
