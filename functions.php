<?php
/**
 * Poultry Cages Uganda functions and definitions
 *
 * @package Poultry Cages Uganda
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

// Theme setup
function poultry_cages_setup() {
    // Add theme support
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo');
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
    ));
    
    // Register navigation menus
    register_nav_menus(array(
        'primary-menu' => 'Primary Menu',
    ));
    
    // Add image sizes
    add_image_size('project-thumbnail', 400, 300, true);
    add_image_size('hero-background', 1920, 1080, true);
}
add_action('after_setup_theme', 'poultry_cages_setup');

// Enqueue scripts and styles
function poultry_cages_scripts() {
    // Enqueue styles
    wp_enqueue_style('poultry-cages-style', get_stylesheet_uri(), array(), wp_get_theme()->get('Version'));
    wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', array(), '6.4.0');
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap', array(), null);
    
    // Enqueue scripts
    wp_enqueue_script('poultry-cages-navigation', get_template_directory_uri() . '/assets/js/navigation.js', array(), wp_get_theme()->get('Version'), true);
    
    // Localize script for AJAX
    wp_localize_script('poultry-cages-navigation', 'poultryCages', array(
        'ajaxurl' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('poultry_cages_nonce')
    ));
}
add_action('wp_enqueue_scripts', 'poultry_cages_scripts');

// Add customizer support
function poultry_cages_customize_register($wp_customize) {
    // Add sections, settings, and controls here
    $wp_customize->add_section('poultry_cages_contact', array(
        'title' => __('Contact Information', 'poultry-cages'),
        'priority' => 30,
    ));
    
    $wp_customize->add_setting('phone_number', array(
        'default' => '+256 700 123 456',
        'sanitize_callback' => 'sanitize_text_field',
    ));
    
    $wp_customize->add_control('phone_number', array(
        'label' => __('Phone Number', 'poultry-cages'),
        'section' => 'poultry_cages_contact',
        'type' => 'text',
    ));
    
    $wp_customize->add_setting('email_address', array(
        'default' => 'info@poultrycagesug.com',
        'sanitize_callback' => 'sanitize_email',
    ));
    
    $wp_customize->add_control('email_address', array(
        'label' => __('Email Address', 'poultry-cages'),
        'section' => 'poultry_cages_contact',
        'type' => 'email',
    ));
}
add_action('customize_register', 'poultry_cages_customize_register');

// Create custom post types
function poultry_cages_custom_post_types() {
    // Products post type
    register_post_type('products', array(
        'labels' => array(
            'name' => __('Products', 'poultry-cages'),
            'singular_name' => __('Product', 'poultry-cages'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-cart',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'rewrite' => array('slug' => 'products'),
    ));
    
    // Projects post type
    register_post_type('projects', array(
        'labels' => array(
            'name' => __('Projects', 'poultry-cages'),
            'singular_name' => __('Project', 'poultry-cages'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-portfolio',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'rewrite' => array('slug' => 'projects'),
    ));
    
    // Services post type
    register_post_type('services', array(
        'labels' => array(
            'name' => __('Services', 'poultry-cages'),
            'singular_name' => __('Service', 'poultry-cages'),
        ),
        'public' => true,
        'has_archive' => true,
        'menu_icon' => 'dashicons-admin-tools',
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'rewrite' => array('slug' => 'services'),
    ));
}
add_action('init', 'poultry_cages_custom_post_types');

// Add widget areas
function poultry_cages_widgets_init() {
    register_sidebar(array(
        'name' => __('Footer Widget 1', 'poultry-cages'),
        'id' => 'footer-widget-1',
        'description' => __('Add widgets here for the first footer column.', 'poultry-cages'),
        'before_widget' => '<div class="footer-widget">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
    
    register_sidebar(array(
        'name' => __('Footer Widget 2', 'poultry-cages'),
        'id' => 'footer-widget-2',
        'description' => __('Add widgets here for the second footer column.', 'poultry-cages'),
        'before_widget' => '<div class="footer-widget">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
}
add_action('widgets_init', 'poultry_cages_widgets_init');

// Custom excerpt length
function poultry_cages_excerpt_length($length) {
    return 20;
}
add_filter('excerpt_length', 'poultry_cages_excerpt_length');

// Custom excerpt more
function poultry_cages_excerpt_more($more) {
    return '...';
}
add_filter('excerpt_more', 'poultry_cages_excerpt_more');

// Remove admin bar for subscribers
function poultry_cages_remove_admin_bar() {
    if (!current_user_can('edit_posts')) {
        show_admin_bar(false);
    }
}
add_action('after_setup_theme', 'poultry_cages_remove_admin_bar');