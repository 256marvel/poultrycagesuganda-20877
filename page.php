<?php
/**
 * The template for displaying all pages
 *
 * @package Poultry Cages Uganda
 */

get_header();
?>

<main id="main" class="site-main">
    <?php while (have_posts()) : the_post(); ?>
        
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
            <header class="entry-header">
                <?php the_title('<h1 class="entry-title">', '</h1>'); ?>
            </header>
            
            <div class="entry-content">
                <?php the_content(); ?>
                
                <?php
                wp_link_pages(array(
                    'before' => '<div class="page-links">' . esc_html__('Pages:', 'poultry-cages'),
                    'after'  => '</div>',
                ));
                ?>
            </div>
            
            <?php if (get_edit_post_link()) : ?>
                <footer class="entry-footer">
                    <?php
                    edit_post_link(
                        sprintf(
                            wp_kses(
                                __('Edit <span class="screen-reader-text">%s</span>', 'poultry-cages'),
                                array(
                                    'span' => array(
                                        'class' => array(),
                                    ),
                                )
                            ),
                            wp_kses_post(get_the_title())
                        ),
                        '<span class="edit-link">',
                        '</span>'
                    );
                    ?>
                </footer>
            <?php endif; ?>
        </article>
        
    <?php endwhile; ?>
</main>

<?php
get_footer();