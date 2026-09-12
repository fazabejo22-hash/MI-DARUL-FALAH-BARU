<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('report_cards', function (Blueprint $table) {
            $table->id();
            $table->foreignId('student_id')->constrained()->cascadeOnDelete();
            $table->foreignId('classroom_id')->constrained()->restrictOnDelete();
            $table->foreignId('academic_year_id')->constrained()->restrictOnDelete();
            $table->foreignId('semester_id')->constrained()->restrictOnDelete();
            $table->foreignId('teacher_id')->nullable()->constrained('teachers')->nullOnDelete(); // Wali kelas
            
            // Attendance summary
            $table->integer('attendance_hadir')->default(0);
            $table->integer('attendance_izin')->default(0);
            $table->integer('attendance_sakit')->default(0);
            $table->integer('attendance_alpa')->default(0);

            // Notes & Status
            $table->text('homeroom_notes')->nullable(); // Catatan Wali Kelas
            $table->enum('status', ['Draft', 'Published'])->default('Published');
            $table->enum('promotion_status', ['Naik Kelas', 'Tinggal Kelas', 'Lulus', 'Belum Ditentukan'])->default('Belum Ditentukan');
            
            $table->timestamps();

            $table->unique(['student_id', 'academic_year_id', 'semester_id'], 'report_card_unique');
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('report_cards');
    }
};
