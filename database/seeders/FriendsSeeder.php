<?php

namespace Database\Seeders;

use App\Models\Friends;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FriendsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Friends::create([
            'user_1' => 2,
            'user_2' => 3,
        ]);
    }
}
