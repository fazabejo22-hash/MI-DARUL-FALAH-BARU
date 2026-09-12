<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('ppdb_periods', function (Blueprint $table) {
            $table->id();
            $table->string('name'); // e.g. "Gelombang 1 2026/2027"
            $table->foreignId('academic_year_id')->constrained()->restrictOnDelete();
            $table->date('start_date');
            $table->date('end_date');
            $table->integer('quota')->default(100);
            $table->boolean('is_active')->default(true);
            $table->text('description')->nullable();
            $table->timestamps();
        });

        Schema::create('ppdb_registrants', function (Blueprint $table) {
            $table->id();
            $table->foreignId('ppdb_period_id')->constrained('ppdb_periods')->restrictOnDelete();
            $table->string('registration_number')->unique(); // e.g. PPDB-2026-0001
            $table->string('full_name');
            $table->enum('gender', ['L', 'P']);
            $table->string('nik', 20)->nullable();
            $table->string('nisn', 20)->nullable();
            $table->string('birthplace')->nullable();
            $table->date('birthdate')->nullable();
            $table->text('address')->nullable();
            $table->string('origin_school')->nullable(); // TK / RA asal
            $table->string('father_name')->nullable();
            $table->string('father_phone')->nullable();
            $table->string('mother_name')->nullable();
            $table->string('mother_phone')->nullable();
            $table->string('guardian_name')->nullable();
            $table->string('guardian_phone')->nullable();
            
            $table->enum('status', ['Pending', 'Verified', 'Accepted', 'Rejected', 'Waitlist'])->default('Pending');
            $table->text('verification_notes')->nullable();
            $table->foreignId('verified_by')->nullable()->constrained('users')->nullOnDelete();
            
            $table->timestamps();
        });

        Schema::create('ppdb_documents', function (Blueprint $table) {
            $table->id();
            $table->foreignId('ppdb_registrant_id')->constrained('ppdb_registrants')->cascadeOnDelete();
            $table->string('document_name'); // e.g. "Akta Kelahiran", "Kartu Keluarga", "Ijazah RA"
            $table->string('file_path');
            $table->integer('file_size')->nullable(); // in bytes
            $table->string('mime_type')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('ppdb_documents');
        Schema::dropIfExists('ppdb_registrants');
        Schema::dropIfExists('ppdb_periods');
    }
};
