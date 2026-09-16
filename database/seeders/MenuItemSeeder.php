<?php

namespace Database\Seeders;

use App\Models\MenuItem;
use Illuminate\Database\Seeder;

class MenuItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Idempotent: wipe and re-insert from config so the seeder can be
        // re-run after rebrands / nav restructures.
        MenuItem::query()->delete();

        $defaultItems = config('site.nav_links');

        foreach ($defaultItems as $index => $item) {
            MenuItem::create([
                'label' => $item['label'],
                'href' => $item['href'],
                'order' => $index + 1,
            ]);
        }
    }
}
