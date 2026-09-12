<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PpdbPeriodResource\Pages;
use App\Models\PpdbPeriod;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class PpdbPeriodResource extends Resource
{
    protected static ?string $model = PpdbPeriod::class;

    protected static ?string $navigationIcon = 'heroicon-o-calendar-days';
    protected static ?string $navigationGroup = 'PPDB';
    protected static ?string $navigationLabel = 'Gelombang PPDB';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('name')
                    ->required()
                    ->maxLength(255)
                    ->label('Nama Gelombang'),
                Forms\Components\Select::make('academic_year_id')
                    ->relationship('academicYear', 'name')
                    ->required()
                    ->label('Tahun Ajaran'),
                Forms\Components\DatePicker::make('start_date')
                    ->required()
                    ->label('Tanggal Mulai'),
                Forms\Components\DatePicker::make('end_date')
                    ->required()
                    ->label('Tanggal Selesai'),
                Forms\Components\TextInput::make('quota')
                    ->numeric()
                    ->required()
                    ->default(100)
                    ->label('Kuota Siswa'),
                Forms\Components\Toggle::make('is_active')
                    ->required()
                    ->default(true)
                    ->label('Status Aktif Pendaftaran'),
                Forms\Components\Textarea::make('description')
                    ->label('Keterangan / Persyaratan')
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('name')
                    ->searchable()
                    ->sortable()
                    ->label('Nama Gelombang'),
                Tables\Columns\TextColumn::make('academicYear.name')
                    ->sortable()
                    ->label('Tahun Ajaran'),
                Tables\Columns\TextColumn::make('start_date')
                    ->date()
                    ->sortable()
                    ->label('Mulai'),
                Tables\Columns\TextColumn::make('end_date')
                    ->date()
                    ->sortable()
                    ->label('Selesai'),
                Tables\Columns\TextColumn::make('quota')
                    ->sortable()
                    ->label('Kuota'),
                Tables\Columns\IconColumn::make('is_active')
                    ->boolean()
                    ->label('Aktif'),
                Tables\Columns\TextColumn::make('registrants_count')
                    ->counts('registrants')
                    ->label('Pendaftar'),
            ])
            ->filters([
                Tables\Filters\TernaryFilter::make('is_active')
                    ->label('Status Aktif'),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ManagePpdbPeriods::route('/'),
        ];
    }
}
