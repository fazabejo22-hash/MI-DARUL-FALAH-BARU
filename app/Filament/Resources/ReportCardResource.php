<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ReportCardResource\Pages;
use App\Models\ReportCard;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;

class ReportCardResource extends Resource
{
    protected static ?string $model = ReportCard::class;

    protected static ?string $navigationIcon = 'heroicon-o-document-text';
    protected static ?string $navigationGroup = 'Akademik';
    protected static ?string $navigationLabel = 'Rapor Siswa';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('academic_year_id')
                    ->relationship('academicYear', 'name')
                    ->required()
                    ->label('Tahun Ajaran'),
                Forms\Components\Select::make('semester_id')
                    ->relationship('semester', 'name')
                    ->required()
                    ->label('Semester'),
                Forms\Components\Select::make('classroom_id')
                    ->relationship('classroom', 'name')
                    ->required()
                    ->label('Kelas'),
                Forms\Components\Select::make('student_id')
                    ->relationship('student', 'name')
                    ->required()
                    ->label('Siswa'),
                Forms\Components\Select::make('teacher_id')
                    ->relationship('teacher', 'name')
                    ->label('Wali Kelas / Guru Pengesah'),
                Forms\Components\Section::make('Rekap Kehadiran')
                    ->schema([
                        Forms\Components\TextInput::make('attendance_hadir')
                            ->numeric()
                            ->default(0)
                            ->required()
                            ->label('Hadir'),
                        Forms\Components\TextInput::make('attendance_izin')
                            ->numeric()
                            ->default(0)
                            ->required()
                            ->label('Izin'),
                        Forms\Components\TextInput::make('attendance_sakit')
                            ->numeric()
                            ->default(0)
                            ->required()
                            ->label('Sakit'),
                        Forms\Components\TextInput::make('attendance_alpa')
                            ->numeric()
                            ->default(0)
                            ->required()
                            ->label('Alpa'),
                    ])->columns(4),
                Forms\Components\Select::make('status')
                    ->options([
                        'Draft' => 'Draft',
                        'Published' => 'Published',
                    ])
                    ->required()
                    ->default('Published')
                    ->label('Status Rapor'),
                Forms\Components\Select::make('promotion_status')
                    ->options([
                        'Naik Kelas' => 'Naik Kelas',
                        'Tinggal Kelas' => 'Tinggal Kelas',
                        'Lulus' => 'Lulus',
                        'Belum Ditentukan' => 'Belum Ditentukan',
                    ])
                    ->required()
                    ->default('Belum Ditentukan')
                    ->label('Status Kenaikan / Kelulusan'),
                Forms\Components\Textarea::make('homeroom_notes')
                    ->label('Catatan Wali Kelas')
                    ->columnSpanFull(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('academicYear.name')
                    ->sortable()
                    ->label('Tahun Ajaran'),
                Tables\Columns\TextColumn::make('semester.name')
                    ->sortable()
                    ->label('Semester'),
                Tables\Columns\TextColumn::make('classroom.name')
                    ->searchable()
                    ->sortable()
                    ->label('Kelas'),
                Tables\Columns\TextColumn::make('student.name')
                    ->searchable()
                    ->sortable()
                    ->label('Nama Siswa'),
                Tables\Columns\TextColumn::make('status')
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'Published' => 'success',
                        'Draft' => 'warning',
                        default => 'gray',
                    })
                    ->label('Status'),
                Tables\Columns\TextColumn::make('promotion_status')
                    ->badge()
                    ->label('Kenaikan/Kelulusan'),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                Tables\Filters\SelectFilter::make('semester')
                    ->relationship('semester', 'name')
                    ->label('Semester'),
                Tables\Filters\SelectFilter::make('promotion_status')
                    ->options([
                        'Naik Kelas' => 'Naik Kelas',
                        'Tinggal Kelas' => 'Tinggal Kelas',
                        'Lulus' => 'Lulus',
                        'Belum Ditentukan' => 'Belum Ditentukan',
                    ]),
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
            'index' => Pages\ManageReportCards::route('/'),
        ];
    }
}
