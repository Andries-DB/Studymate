<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudyRooms extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'description',
        'private',
        'image',

    ];

    public function StudyRoomsUsers()
    {
        return $this->hasMany(StudyRoomsUsers::class);
    }

    public function StudyRooms_Owner()
    {
        return $this->hasMany(StudyRooms_Owner::class);
    }

    public function StudyRooms_invitations()
    {
        return $this->hasMany(StudyRooms_invitations::class);
    }
}
