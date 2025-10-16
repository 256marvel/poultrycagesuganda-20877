<?php
/**
 * The main template file
 *
 * @package Poultry Cages Uganda
 */

get_header();
?>

<main id="main" class="site-main">
    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <h1>Poultry is our Wisest Pursuit</h1>
            <p>Professional poultry equipment import, installation, and full farm management services in Uganda. We provide cutting-edge solutions for both layers and broilers.</p>
            <div class="hero-btns">
                <a href="#products" class="btn">Explore Products</a>
                <a href="<?php echo esc_url(home_url('/contact')); ?>" class="btn btn-outline">Request Quote</a>
            </div>
        </div>
    </section>

    <!-- Products Section -->
    <section class="products" id="products">
        <div class="container">
            <div class="section-title">
                <h2>Our Products</h2>
                <p>High-quality poultry equipment for modern farming</p>
            </div>
            
            <div class="product-categories">
                <div class="product-category">
                    <div class="product-img">
                        <i class="fas fa-layer-group"></i>
                    </div>
                    <div class="product-info">
                        <h3>Poultry Cages</h3>
                        <p>Durable layer and broiler cages designed for optimal bird health and productivity.</p>
                        <a href="<?php echo esc_url(home_url('/products')); ?>" class="btn">View Details</a>
                    </div>
                </div>
                
                <div class="product-category">
                    <div class="product-img">
                        <i class="fas fa-utensils"></i>
                    </div>
                    <div class="product-info">
                        <h3>Feeding Systems</h3>
                        <p>Automatic feeding systems that ensure consistent nutrition with minimal waste.</p>
                        <a href="<?php echo esc_url(home_url('/products')); ?>" class="btn">View Details</a>
                    </div>
                </div>
                
                <div class="product-category">
                    <div class="product-img">
                        <i class="fas fa-tint"></i>
                    </div>
                    <div class="product-info">
                        <h3>Water Systems</h3>
                        <p>Reliable water lines and nipple drinkers for optimal hydration.</p>
                        <a href="<?php echo esc_url(home_url('/products')); ?>" class="btn">View Details</a>
                    </div>
                </div>
                
                <div class="product-category">
                    <div class="product-img">
                        <i class="fas fa-recycle"></i>
                    </div>
                    <div class="product-info">
                        <h3>Manure Systems</h3>
                        <p>Efficient manure removal systems to maintain hygiene and reduce labor.</p>
                        <a href="<?php echo esc_url(home_url('/products')); ?>" class="btn">View Details</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Services Section -->
    <section class="services" id="services">
        <div class="container">
            <div class="section-title">
                <h2>Our Services</h2>
                <p>Comprehensive solutions for your poultry farming needs</p>
            </div>
            
            <div class="services-grid">
                <div class="service-card glass-card">
                    <div class="service-icon">
                        <i class="fas fa-tools"></i>
                    </div>
                    <h3>Installation & Repairs</h3>
                    <p>Professional installation of all poultry equipment with ongoing maintenance and repair services.</p>
                    <a href="<?php echo esc_url(home_url('/services')); ?>" class="btn">Learn More</a>
                </div>
                
                <div class="service-card glass-card">
                    <div class="service-icon">
                        <i class="fas fa-tractor"></i>
                    </div>
                    <h3>Full Farm Setup</h3>
                    <p>Complete farm construction and equipment installation from scratch to operational farm.</p>
                    <a href="<?php echo esc_url(home_url('/services')); ?>" class="btn">Learn More</a>
                </div>
                
                <div class="service-card glass-card">
                    <div class="service-icon">
                        <i class="fas fa-user-cog"></i>
                    </div>
                    <h3>Farm Management</h3>
                    <p>Complete farm management services for clients who live abroad or lack time to run operations.</p>
                    <a href="<?php echo esc_url(home_url('/services')); ?>" class="btn">Learn More</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="why-choose-us">
        <div class="container">
            <div class="section-title">
                <h2>Why Choose Us</h2>
                <p>What makes Poultry Cages Uganda your ideal partner</p>
            </div>
            
            <div class="features">
                <div class="feature">
                    <div class="feature-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3>Quality Imports</h3>
                    <p>We source only the highest quality equipment from trusted international manufacturers.</p>
                </div>
                
                <div class="feature">
                    <div class="feature-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <h3>Expert Team</h3>
                    <p>Our experienced technicians and poultry specialists ensure optimal setup and operation.</p>
                </div>
                
                <div class="feature">
                    <div class="feature-icon">
                        <i class="fas fa-headset"></i>
                    </div>
                    <h3>Reliable Support</h3>
                    <p>Comprehensive after-sales support and maintenance services to keep your farm running smoothly.</p>
                </div>
                
                <div class="feature">
                    <div class="feature-icon">
                        <i class="fas fa-clock"></i>
                    </div>
                    <h3>Time-Saving Solutions</h3>
                    <p>Our full farm management services save you time while ensuring maximum productivity.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section class="projects" id="projects">
        <div class="container">
            <div class="section-title">
                <h2>Our Projects</h2>
                <p>See our work in action across Uganda</p>
            </div>
            
            <div class="projects-grid">
                <div class="project-card">
                    <div class="project-img"></div>
                    <div class="project-overlay">
                        <h3>Kampala Layer Farm</h3>
                        <p>Complete installation of automated layer cages</p>
                    </div>
                </div>
                
                <div class="project-card">
                    <div class="project-img"></div>
                    <div class="project-overlay">
                        <h3>Mbarara Broiler Setup</h3>
                        <p>Broiler cage system with feeding automation</p>
                    </div>
                </div>
                
                <div class="project-card">
                    <div class="project-img"></div>
                    <div class="project-overlay">
                        <h3>Jinja Farm Management</h3>
                        <p>Full farm management for overseas client</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="testimonials">
        <div class="container">
            <div class="section-title">
                <h2>Client Testimonials</h2>
                <p>What our clients say about our services</p>
            </div>
            
            <div class="testimonial-slider">
                <div class="testimonial">
                    <p>"Poultry Cages Uganda transformed our small farm into a highly efficient operation. Their automated systems reduced our labor costs by 60% and increased egg production significantly."</p>
                    <div class="client-info">
                        <div class="client-avatar"></div>
                        <div>
                            <h4>Robert Kato</h4>
                            <p>Farm Owner, Wakiso</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta" id="contact">
        <div class="container">
            <h2>Ready to Transform Your Poultry Farm?</h2>
            <p>Contact us today for a free consultation and quotation. Let's discuss how we can help you achieve maximum productivity with our professional poultry solutions.</p>
            <a href="<?php echo esc_url(home_url('/contact')); ?>" class="btn">Request a Quote</a>
        </div>
    </section>

</main>

<?php
get_footer();