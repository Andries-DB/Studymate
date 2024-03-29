<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Projects extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'user_id',
    ];
    public function User()
    {
        return $this->belongsTo(User::class);
    }

    public function Tasks()
    {
        return $this->hasMany(Tasks::class);
    }
}
