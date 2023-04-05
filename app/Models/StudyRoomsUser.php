<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudyRoomsUser extends Model
{
  use HasFactory;
  protected $fillable = [
    'user_id',
    'study_room_id',

];

  public function StudyRoom()
  {
    return $this->belongsTo(StudyRooms::class);
  }

  public function User()
  {
    return $this->belongsTo(User::class);
  }
}
