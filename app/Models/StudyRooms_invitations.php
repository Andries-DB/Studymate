<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudyRooms_invitations extends Model
{
    use HasFactory;

    public function StudyRoom()
    {
        return $this->belongsTo(StudyRooms::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
