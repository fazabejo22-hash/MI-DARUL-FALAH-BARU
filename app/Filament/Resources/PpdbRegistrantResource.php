<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PpdbRegistrantResource\Pages;
use App\Models\PpdbRegistrant;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class PpdbRegistrantResource extends Resource
{
    protected static ?string $model = PpdbRegistrant::class;

    protected static ?string $navigationIcon = 'heroicon-o-user-plus';
    protected static ?string $navigationGroup = 'PPDB';
    protected static ?string $navigationLabel = 'Data Pendaftar PPDB';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('ppdb_period_id')
                    ->relationship('ppdbPeriod', 'name')
                    ->required()
                    ->label('Gelombang PPDB'),
                Forms\Components\TextInput::make('registration_number')
                    ->required()
                    ->default(fn () => 'PPDB-' . date('Y') . '-' . mt_rand(1000, 9999))
                    ->unique(ignoreRecord: true)
                    ->label('Nomor Pendaftaran'),
                Forms\Components\TextInput::make('full_name')
                    ->required()
                    ->maxLength(255)
                    ->label('Nama Lengkap Calon Siswa'),
                Forms\Components\Select::make('gender')
                    ->options([
                        'L' => 'Laki-laki',
                        'P' => 'Perempuan',
                    ])
                    ->required()
                    ->label('Jenis Kelamin'),
                Forms\Components\TextInput::make('nik')
                    ->maxLength(20)
                    ->label('NIK'),
                Forms\Components\TextInput::make('nisn')
                    ->maxLength(20)
                    ->label('NISN'),
                Forms\Components\TextInput::make('birthplace')
                    ->maxLength(255)
                    ->label('Tempat Lahir'),
                Forms\Components\DatePicker::make('birthdate')
                    ->label('Tanggal Lahir'),
                Forms\Components\Textarea::make('address')
                    ->label('Alamat Lengkap')
                    ->columnSpanFull(),
                Forms\Components\TextInput::make('origin_school')
                    ->maxLength(255)
                    ->label('Asal Sekolah (TK / RA)'),
                Forms\Components\TextInput::make('father_name')
                    ->maxLength(255)
                    ->label('Nama Ayah'),
                Forms\Components\TextInput::make('father_phone')
                    ->maxLength(50)
                    ->label('No. HP Ayah'),
                Forms\Components\TextInput::make('mother_name')
                    ->maxLength(255)
                    ->label('Nama Ibu'),
                Forms\Components\TextInput::make('mother_phone')
                    ->maxLength(50)
                    ->label('No. HP Ibu'),
                Forms\Components\TextInput::make('guardian_name')
                    ->maxLength(255)
                    ->label('Nama Wali (Opsional)'),
                Forms\Components\TextInput::make('guardian_phone')
                    ->maxLength(50)
                    ->label('No. HP Wali'),
                Forms\Components\Select::make('status')
                    ->options([
                        'Pending' => 'Pending (Menunggu Verifikasi)',
                        'Verified' => 'Verified (Berkas Terverifikasi)',
                        'Accepted' => 'Accepted (Diterima)',
                        'Rejected' => 'Rejected (Ditolak)',
                        'Waitlist' => 'Waitlist (Cadangan)',
                    ])
                    ->required()
                    ->default('Pending')
                    ->label('Status Pendaftaran'),
                Forms\Components\Textarea::make('verification_notes')
                    ->label('Catatan Verifikasi Admin/TU')
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('registration_number')
                    ->searchable()
                    ->sortable()
                    ->fontFamily('mono')
                    ->label('No. Pendaftaran'),
                Tables\Columns\TextColumn::make('full_name')
                    ->searchable()
                    ->sortable()
                    ->label('Nama Calon Siswa'),
                Tables\Columns\TextColumn::make('ppdbPeriod.name')
                    ->sortable()
                    ->label('Gelombang'),
                Tables\Columns\TextColumn::make('gender')
                    ->label('L/P'),
                Tables\Columns\TextColumn::make('origin_school')
                    ->searchable()
                    ->label('Asal Sekolah'),
                Tables\Columns\TextColumn::make('status')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'Accepted' => 'success',
                        'Verified' => 'info',
                        'Pending' => 'warning',
                        'Waitlist' => 'gray',
                        'Rejected' => 'danger',
                        default => 'gray',
                    })
                    ->label('Status'),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->label('Tanggal Daftar'),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('status')
                    ->options([
                        'Pending' => 'Pending',
                        'Verified' => 'Verified',
                        'Accepted' => 'Accepted',
                        'Rejected' => 'Rejected',
                        'Waitlist' => 'Waitlist',
                    ]),
                Tables\Filters\SelectFilter::make('ppdb_period_id')
                    ->relationship('ppdbPeriod', 'name')
                    ->label('Gelombang'),
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
            'index' => Pages\ManagePpdbRegistrants::route('/'),
        ];
    }
}
