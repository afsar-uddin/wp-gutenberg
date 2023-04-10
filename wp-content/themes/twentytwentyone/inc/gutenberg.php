<?php
/**
 * Custom gutenberg block
 * 
 */

 function afsarina_gutenberg_block() {
    
    add_theme_support(
        'editor-color-pallete',

        [
            [
                'name' => 'White',
                'slug' => 'slug',
                'color' => '#FFFFFF'
            ]
        ]
    );
    add_theme_support(
        'editor-font-sizes',

        [
            [
                'name' => 'Normal',
                'slug' => 'norlmal',
                'size' => 16
            ],
            [
                'name' => 'Large',
                'slug' => 'large',
                'size' => 26
            ],
        ]
    );

 }

 add_action('init', 'afsarina_gutenberg_block');

 function afsarina_register_guten_block() {

    wp_register_script('custom-cta-js', get_template_directory_uri() . '/build/index.js', array('wp-blocks', 'wp-editor', 'wp-components'));

    register_block_type('afsarina/custom-cta', array(
        'editor_script' => 'custom-cta-js'
    ));
 
}

add_action('init', 'afsarina_register_guten_block');