<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Usuario extends Model
{
    public function rols(){
        return $this->belongsToMany(Rol::class)->withTimestamps();
    }
}
