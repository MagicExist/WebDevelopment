<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Estudiante extends Model
{ 
    public $timestamps = false;

    public function asignaturas(){
        return $this->belongsToMany(Asignatura::class)->withTimestamps();
    }

    public function proyectos(){
        return $this->belongsToMany(Proyecto::class)->withTimestamps();
    }
}
