<?php

return [
    'fullname' => env('SITE_FULLNAME', 'Acme Estate Agents'),
    'address' => env('SITE_ADDRESS', '24 High Street, Penwortham, Preston, PR1 0AB'),
    'telephone' => env('SITE_TELEPHONE', '01772 378 415'),
    'email' => env('SITE_EMAIL', 'hello@acmeestateagents.co.uk'),
    'established' => env('SITE_ESTABLISHED', '1978'),
    'opening_times' => "Monday - Friday: 9:00am - 6:00pm<br>Saturday: 9:00am - 4:00pm<br>Sunday: By appointment",

    'social' => [
        'instagram' => 'https://www.instagram.com/acmeestateagents/',
        'facebook' => 'https://www.facebook.com/acmeestateagents',
        'tiktok' => 'https://www.tiktok.com/@acmeestateagents',
    ],

    'nav_links' => [
        ['label' => 'Selling',   'href' => '#valuation'],
        ['label' => 'Buying',    'href' => '#properties'],
        ['label' => 'Landlords', 'href' => '#valuation'],
        ['label' => 'Rental',    'href' => '#properties'],
        ['label' => 'About',     'href' => '#about'],
        ['label' => 'Contact',   'href' => '#contact'],
    ],

    'robots_allowed' => env('ROBOTS_ALLOWED', false),
];
