<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudyRooms_Owner extends Model
{
    use HasFactory;

    public function User() {
        return $this->belongsTo(User::class);
    }

    public function StudyRoom() {
        return $this->belongsTo(StudyRooms::class);
    }

}
