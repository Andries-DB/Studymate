<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ChMessage extends Model
{
    protected $fillable = ['id', 'from_id', 'to_id', 'message', 'is_seen', 'is_deleted', 'is_sent', 'is_delivered', 'is_read', 'created_at', 'updated_at'];
}
