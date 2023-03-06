<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudyRoom__user_active extends Model
{
    use HasFactory;

    public function User() {
        return $this->belongsTo(User::class);
    }

    public function Studyrooms() {
        return $this->belongsTo(StudyRooms::class);
    }
}
