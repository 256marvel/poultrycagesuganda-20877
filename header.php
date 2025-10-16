<?php
/**
 * The header for our theme
 *
 * @package Poultry Cages Uganda
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

    <!-- Floating WhatsApp -->
    <a href="https://wa.me/256700123456" class="floating-whatsapp" target="_blank">
        <i class="fab fa-whatsapp"></i>
    </a>
    
    <!-- Sticky Quote Button -->
    <div class="sticky-quote">
        <a href="<?php echo esc_url(home_url('/contact')); ?>" class="btn">Get a Quote</a>
    </div>

    <!-- Header -->
    <header>
        <div class="container header-container">
            <div class="logo">
                <a href="<?php echo esc_url(home_url('/')); ?>">
                    <div class="logo-img">
                        <i class="fas fa-egg"></i>
                    </div>
                    <div class="logo-text">Poultry<span>Cages</span></div>
                </a>
            </div>
            
            <button class="mobile-menu-btn" id="mobileMenuBtn">
                <i class="fas fa-bars"></i>
            </button>
            
            <nav id="mainNav">
                <?php
                wp_nav_menu(array(
                    'theme_location' => 'primary-menu',
                    'container' => false,
                    'menu_class' => '',
                    'fallback_cb' => false,
                ));
                ?>
            </nav>
        </div>
    </header>

    <div id="content" class="site-content">