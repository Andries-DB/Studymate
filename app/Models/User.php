<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use HasFactory;
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
      'first_name',
      'last_name',
      'name',
      'username',
      'email',
      'password',
      'avatar',
  ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function Friends()
    {
        return $this->hasMany(Friend::class);
    }

    public function StudyRoomsUsers()
    {
        return $this->hasMany(StudyRoomsUser::class);
    }

    public function Projects()
    {
        return $this->hasMany(Projects::class);
    }

    public function StudyRooms()
    {
        return $this->hasMany(StudyRooms::class);
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
