<?php
/* Header */
$page_title = 'Webprogramming Assignment 3';
$navigation = Array(
    'active' => 'Simple Form',
    'items' => Array(
        'News' => '/WP22/assignment_3/index.php',
        'Add news item' => '/WP22/assignment_3/news_add.php',
        'Leap Year' => '/WP22/assignment_3/leapyear.php',
        'Simple Form' => '/WP22/assignment_3/simple_form.php'
    )
);
include __DIR__ . '/tpl/head.php';
include __DIR__ . '/tpl/body_start.php';
?>

<?php



if (isset($_GET['name'])) {
    $name = $_GET['name'];
    $place = $_GET['place'];
    $welcome = 'Welcome ' . htmlspecialchars($name, ENT_QUOTES, 'UTF-8') . '!';
    if($_GET['place'] == 'Amsterdam') {
        $p_welcome = 'You\'re from the capital of the Netherlands!';
    }
    else {
        $p_welcome = 'You\'re from ' . htmlspecialchars($place, ENT_QUOTES, 'UTF-8') . '!';
    }
}



include __DIR__ . '../simple_form.html';
?>

<?php

include __DIR__ . '/tpl/body_end.php';
?>
