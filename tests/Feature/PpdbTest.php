<?php

namespace Tests\Feature;

use App\Models\AcademicYear;
use App\Models\PpdbPeriod;
use App\Models\PpdbRegistrant;
use Database\Seeders\RolePermissionSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class PpdbTest extends TestCase
{
    use RefreshDatabase;

    protected function setUp(): void
    {
        parent::setUp();
        $this->seed(RolePermissionSeeder::class);
    }

    public function test_can_create_ppdb_period_and_registrant(): void
    {
        $academicYear = AcademicYear::create([
            'name' => '2026/2027',
            'is_active' => true,
        ]);

        $period = PpdbPeriod::create([
            'name' => 'Gelombang 1 2026/2027',
            'academic_year_id' => $academicYear->id,
            'start_date' => '2026-10-01',
            'end_date' => '2026-12-31',
            'quota' => 150,
            'is_active' => true,
        ]);

        $registrant = PpdbRegistrant::create([
            'ppdb_period_id' => $period->id,
            'registration_number' => 'PPDB-2026-9999',
            'full_name' => 'Fatimah Az-Zahra',
            'gender' => 'P',
            'origin_school' => 'RA Al-Hikmah Krian',
            'status' => 'Pending',
        ]);

        $this->assertDatabaseHas('ppdb_registrants', [
            'registration_number' => 'PPDB-2026-9999',
            'full_name' => 'Fatimah Az-Zahra',
            'status' => 'Pending',
        ]);
    }
}
