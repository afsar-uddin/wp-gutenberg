<?php
/*
 * Plugin Name:       Basic Block
 * Plugin URI:        https://notionwebtech.com/plugins/the-basics/
 * Description:       Handle the basics with this plugin.
 * Version:           1.0.0
 * Requires at least: 5.2
 * Requires PHP:      7.2
 * Author:            Afsar Uddin
 * Author URI:        https://author.notionwebtech.com/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Update URI:        https://notionwebtech.com/plugins/
 * Text Domain:       nwt
 * Domain Path:       /languages
 */

 define('BLOCK_PLUGIN_URI', plugins_url(path: 'basic-block'));
 define('BLOCK_PLUGIN_DIR_PATH', plugin_dir_path(file:__FILE__));

 function guten_basic_block() {
    wp_register_style(
        'front-view-css',
        BLOCK_PLUGIN_URI . '/style.css',
        array('wp-edit-blocks'),
        filemtime(BLOCK_PLUGIN_DIR_PATH . 'style.css')
    );

    wp_register_style(
        'editor-view-css',
        BLOCK_PLUGIN_URI . '/editor.css',
        array('wp-edit-blocks'),
        filemtime(BLOCK_PLUGIN_DIR_PATH . 'style.css')
    );

    wp_register_script(
        'simple-block',
        BLOCK_PLUGIN_URI . '/simple-block.js',
        array('wp-edit-bloks', 'wp-element', 'wp-editor', 'wp-component', 'wp-i18n'),
        filemtime(BLOCK_PLUGIN_DIR_PATH . 'simple-block.js'),
    );

    register_block_type('basic-block/simple-block', [
        'style' => 'front-view-css',
        'editor_style' => 'editor-view-css',
        'editor_script' => 'simple-block '
    ]);
    
 }

 add_action('init', 'guten_basic_block');