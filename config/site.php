<?php

return [
    'fullname' => env('SITE_FULLNAME', 'Acme Opticians'),
    'address' => env('SITE_ADDRESS', '24 High Street, Penwortham, Preston, PR1 0AB'),
    'telephone' => env('SITE_TELEPHONE', '01772 378 415'),
    'email' => env('SITE_EMAIL', 'hello@acmeopticians.co.uk'),
    'established' => env('SITE_ESTABLISHED', '1985'),
    'opening_times' => "Monday - Friday: 9:00am - 5:30pm<br>Saturday: 9:00am - 4:00pm<br>Sunday: Closed",

    'social' => [
        'instagram' => 'https://www.instagram.com/acmeopticians/',
        'facebook' => 'https://www.facebook.com/acmeopticians',
        'tiktok' => 'https://www.tiktok.com/@acmeopticians',
    ],

    'nav_links' => [
        ['label' => 'Home', 'href' => '/'],
        ['label' => 'Services', 'href' => '#services'],
        ['label' => 'About', 'href' => '#about'],
        ['label' => 'Eyewear', 'href' => '#eyewear'],
        ['label' => 'News', 'href' => '/news-updates'],
        ['label' => 'Contact', 'href' => '#contact'],
    ],

    'robots_allowed' => env('ROBOTS_ALLOWED', false),
];
