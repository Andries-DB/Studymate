<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudyRooms extends Model
{
    use HasFactory;

    public function StudyRoomsUsers()
    {
        return $this->hasMany(StudyRoomsUsers::class);
    }
}
