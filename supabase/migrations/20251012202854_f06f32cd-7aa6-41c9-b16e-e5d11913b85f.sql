-- Create app_role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  UNIQUE(user_id, role)
);

-- Enable RLS
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
    AND role = _role
  )
$$;

-- RLS policies for user_roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Only admins can manage roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL UNIQUE,
  full_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- RLS policies for profiles
CREATE POLICY "Users can view their own profile"
ON public.profiles
FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can update their own profile"
ON public.profiles
FOR UPDATE
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own profile"
ON public.profiles
FOR INSERT
TO authenticated
WITH CHECK (auth.uid() = user_id);

-- Create theme_settings table
CREATE TABLE public.theme_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  key TEXT NOT NULL UNIQUE,
  value JSONB NOT NULL,
  category TEXT NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL,
  updated_by UUID REFERENCES auth.users(id)
);

-- Enable RLS
ALTER TABLE public.theme_settings ENABLE ROW LEVEL SECURITY;

-- RLS policies for theme_settings
CREATE POLICY "Anyone can view theme settings"
ON public.theme_settings
FOR SELECT
TO public
USING (true);

CREATE POLICY "Only admins can manage theme settings"
ON public.theme_settings
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create function to handle new user
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (user_id, full_name)
  VALUES (NEW.id, NEW.raw_user_meta_data->>'full_name');
  RETURN NEW;
END;
$$;

-- Create trigger for new users
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Create trigger for theme_settings
CREATE TRIGGER update_theme_settings_updated_at
  BEFORE UPDATE ON public.theme_settings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create trigger for profiles
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default theme settings
INSERT INTO public.theme_settings (key, value, category) VALUES
  ('hero_title', '{"text": "Moraa Chicken Layers & Broilers Equipment"}', 'hero'),
  ('hero_subtitle', '{"text": "Premium Poultry Equipment for Maximum Productivity"}', 'hero'),
  ('hero_description', '{"text": "We supply high-quality poultry farming equipment including battery cages, feeding systems, and drinking systems for both layers and broilers. Transform your poultry farm with our professional-grade solutions."}', 'hero'),
  ('hero_image', '{"url": "/src/assets/hero-poultry-farm.jpg"}', 'hero'),
  ('hero_cta_text', '{"text": "Get Started"}', 'hero'),
  
  ('about_title', '{"text": "About Our Business"}', 'about'),
  ('about_content', '{"text": "Moraa Chicken Layers & Broilers Equipment is your trusted partner in poultry farming success. We specialize in supplying top-tier equipment designed to optimize your farm''s productivity and efficiency. With years of experience in the industry, we understand the unique needs of both layer and broiler operations."}', 'about'),
  ('about_mission', '{"text": "Our mission is to empower poultry farmers with reliable, durable equipment that ensures healthy birds and maximum returns on investment."}', 'about'),
  
  ('services_title', '{"text": "Our Products & Services"}', 'services'),
  ('service_1_title', '{"text": "Battery Cage Systems"}', 'services'),
  ('service_1_description', '{"text": "Professional-grade battery cages designed for optimal space utilization and bird comfort. Suitable for both layer and broiler operations with easy maintenance features."}', 'services'),
  ('service_1_image', '{"url": "/src/assets/battery-cages.jpg"}', 'services'),
  
  ('service_2_title', '{"text": "Automated Feeding Systems"}', 'services'),
  ('service_2_description', '{"text": "Efficient feeding solutions that reduce labor costs and ensure consistent feed distribution. Our systems minimize waste and maintain feed freshness for healthier birds."}', 'services'),
  ('service_2_image', '{"url": "/src/assets/feeding-system.jpg"}', 'services'),
  
  ('service_3_title', '{"text": "Drinking Water Systems"}', 'services'),
  ('service_3_description', '{"text": "Clean and reliable watering systems that provide fresh water to all birds. Features include leak-proof designs and easy cleaning mechanisms for better hygiene."}', 'services'),
  ('service_3_image', '{"url": "/src/assets/drinking-system.jpg"}', 'services'),
  
  ('contact_title', '{"text": "Get in Touch"}', 'contact'),
  ('contact_description', '{"text": "Ready to upgrade your poultry farm? Contact us today for a consultation and quote."}', 'contact'),
  ('contact_phone', '{"text": "+254 700 000000"}', 'contact'),
  ('contact_email', '{"text": "info@moraachicken.com"}', 'contact'),
  ('contact_address', '{"text": "Nairobi, Kenya"}', 'contact'),
  
  ('footer_description', '{"text": "Your trusted partner in poultry farming equipment"}', 'footer'),
  ('footer_quick_links', '{"links": [{"text": "Home", "href": "#hero"}, {"text": "About", "href": "#about"}, {"text": "Services", "href": "#services"}, {"text": "Contact", "href": "#contact"}]}', 'footer'),
  
  ('theme_primary_color', '{"color": "262 80% 50%"}', 'theme'),
  ('theme_secondary_color', '{"color": "220 70% 50%"}', 'theme'),
  ('theme_accent_color', '{"color": "280 80% 50%"}', 'theme');