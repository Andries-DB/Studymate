<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
            'first_name' => 'Nell',
            'last_name' => 'Goossens',
            'username' => 'NellGoossens',
            'email' => 'nellgoossens@gmail.com',
            'password' => bcrypt('secret'),
            'email_verified_at' => now(),

        ]);
    }
}
