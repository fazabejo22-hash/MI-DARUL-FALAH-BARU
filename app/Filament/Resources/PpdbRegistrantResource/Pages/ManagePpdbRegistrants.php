<?php

namespace App\Filament\Resources\PpdbRegistrantResource\Pages;

use App\Filament\Resources\PpdbRegistrantResource;
use Filament\Actions;
use Filament\Resources\Pages\ManageRecords;

class ManagePpdbRegistrants extends ManageRecords
{
    protected static string $resource = PpdbRegistrantResource::class;

    protected function getHeaderActions(): array
    {
        return [
            Actions\CreateAction::make(),
        ];
    }
}
