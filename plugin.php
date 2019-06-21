<?php

/*
    Plugin Name: Timed Content
    Author: K.B.
    Version: 1.0.0
*/

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}


function loadBlockFiles() {
    wp_enqueue_script(
        'block-handle-script',
        plugin_dir_url( __FILE__ ).'index.js',
        array('wp-blocks', 'wp-i18n', 'wp-editor'),
        true
    );
}
add_action('enqueue_block_editor_assets', 'loadBlockFiles');


function loadBlockFilesFrontend() {
    wp_enqueue_style(
        'block-handle-css',
        plugin_dir_url( __FILE__ ).'styles.css'
    );
}
add_action('enqueue_block_assets', 'loadBlockFilesFrontend');


function timedContenRender($props) {
    // split and trim white space, works without doing it
    // just doing it to be safe
    var_dump($props);

    $html = "<h2>Testing</h2>";

    return $html;
}
register_block_type( 'kbcarte/timed-content', array(
  'render_callback' => 'timedContenRender',
) );