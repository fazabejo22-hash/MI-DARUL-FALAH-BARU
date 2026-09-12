<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PublicController;
use App\Http\Controllers\PortalController;

Route::controller(PublicController::class)->group(function () {
    Route::get('/', 'home')->name('home');
    Route::get('/profil', 'profile')->name('profile');
    Route::get('/berita', 'posts')->name('posts');
    Route::get('/berita/{slug}', 'postDetail')->name('posts.detail');
    Route::get('/pengumuman', 'announcements')->name('announcements');
    Route::get('/agenda', 'events')->name('events');
    Route::get('/galeri', 'galleries')->name('galleries');
    Route::get('/dokumen', 'documents')->name('documents');
    Route::get('/fasilitas', 'facilities')->name('facilities');
    Route::get('/prestasi', 'achievements')->name('achievements');
    Route::get('/ekstrakurikuler', 'extracurriculars')->name('extracurriculars');
    Route::get('/kontak', 'contact')->name('contact');
});

Route::prefix('portal')->middleware(['auth'])->group(function () {
    Route::get('/', [PortalController::class, 'index'])->name('portal.index');
    Route::get('/siswa', [PortalController::class, 'studentPortal'])->name('portal.student');
    Route::get('/orangtua', [PortalController::class, 'parentPortal'])->name('portal.parent');
    Route::get('/guru', [PortalController::class, 'teacherPortal'])->name('portal.teacher');
    Route::get('/walikelas', [PortalController::class, 'homeroomPortal'])->name('portal.homeroom');
    Route::get('/siswa/{student}', [PortalController::class, 'studentDetail'])->name('portal.student.detail');
});

