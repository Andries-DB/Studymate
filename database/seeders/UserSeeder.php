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
            'first_name' => 'Tes2t',
            'last_name' => 'De Test',
            'username' => 'TestDB2',
            'email' => 'test.test2@gmail.com',
            'password' => bcrypt('secret'),
            'email_verified_at' => now(),

        ]);
    }
}
