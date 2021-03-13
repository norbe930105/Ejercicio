<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Person extends Model
{
    use HasFactory;

    public $table = 'people';
    public $model = 'Persona';

    protected $fillable = [
        'nombres',
        'apellidos',
        'edad',
        'sexo',
        'fecha',
        'noident',
        'canthijos',
        'raza',
        'salario',
        'cargo',
    ];
}
