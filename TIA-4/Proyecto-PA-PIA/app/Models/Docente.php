<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Docente extends Model
{
    public function asignaturas(){
        return $this->belongsToMany(Asignatura::class)->withTimestamps();
    }
}
