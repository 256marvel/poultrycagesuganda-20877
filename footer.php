<?php
/**
 * The template for displaying the footer
 *
 * @package Poultry Cages Uganda
 */
?>

    </div><!-- #content -->

    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-column">
                    <h3>Poultry Cages Uganda</h3>
                    <p>Professional poultry equipment import, installation, and full farm management services in Uganda.</p>
                    <div class="social-links">
                        <a href="#" class="social-link"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                
                <div class="footer-column">
                    <h3>Quick Links</h3>
                    <ul class="footer-links">
                        <li><a href="<?php echo esc_url(home_url('/')); ?>">Home</a></li>
                        <li><a href="<?php echo esc_url(home_url('/about')); ?>">About Us</a></li>
                        <li><a href="<?php echo esc_url(home_url('/products')); ?>">Products</a></li>
                        <li><a href="<?php echo esc_url(home_url('/services')); ?>">Services</a></li>
                        <li><a href="<?php echo esc_url(home_url('/projects')); ?>">Projects</a></li>
                    </ul>
                </div>
                
                <div class="footer-column">
                    <h3>Services</h3>
                    <ul class="footer-links">
                        <li><a href="<?php echo esc_url(home_url('/services')); ?>">Cage Installation</a></li>
                        <li><a href="<?php echo esc_url(home_url('/services')); ?>">Farm Setup</a></li>
                        <li><a href="<?php echo esc_url(home_url('/services')); ?>">Farm Management</a></li>
                        <li><a href="<?php echo esc_url(home_url('/services')); ?>">Equipment Repair</a></li>
                        <li><a href="<?php echo esc_url(home_url('/services')); ?>">Consultancy</a></li>
                    </ul>
                </div>
                
                <div class="footer-column">
                    <h3>Contact Us</h3>
                    <ul class="footer-links">
                        <li><i class="fas fa-map-marker-alt"></i> Kampala, Uganda</li>
                        <li><i class="fas fa-phone"></i> +256 700 123 456</li>
                        <li><i class="fas fa-envelope"></i> info@poultrycagesug.com</li>
                        <li><i class="fab fa-whatsapp"></i> +256 700 123 456</li>
                    </ul>
                </div>
            </div>
            
            <div class="copyright">
                <p>Copyright © <?php echo date('Y'); ?> Poultry Cages Uganda | Theme by Marvel UG</p>
            </div>
        </div>
    </footer>

    <?php wp_footer(); ?>

    <script>
        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mainNav = document.getElementById('mainNav');
        
        if (mobileMenuBtn && mainNav) {
            mobileMenuBtn.addEventListener('click', () => {
                mainNav.classList.toggle('active');
                mobileMenuBtn.innerHTML = mainNav.classList.contains('active') 
                    ? '<i class="fas fa-times"></i>' 
                    : '<i class="fas fa-bars"></i>';
            });
            
            // Close mobile menu when clicking on a link
            const navLinks = document.querySelectorAll('nav a');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mainNav.classList.remove('active');
                    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                });
            });
        }
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if(targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
    </script>

</body>
</html>