<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PpdbDocument extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function registrant(): BelongsTo
    {
        return $this->belongsTo(PpdbRegistrant::class, 'ppdb_registrant_id');
    }
}
