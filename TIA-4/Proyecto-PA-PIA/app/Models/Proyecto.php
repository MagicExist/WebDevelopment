<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Proyecto extends Model
{
    public function estudiantes(){
        return $this->belongsToMany(Estudiante::class)->withTimestamps();
    }

    public function docentes(){
        return $this->belongsToMany(Docente::class)->withTimestamps();
    }
}
