import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";

const Contact = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    cageCapacity: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("quotes").insert({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || null,
        project_type: formData.projectType,
        cage_capacity: formData.cageCapacity ? parseInt(formData.cageCapacity) : null,
        message: formData.message || null,
        user_id: user?.id || null,
      });

      if (error) throw error;

      toast({
        title: "Quote Request Submitted!",
        description: "We'll get back to you within 24 hours with a detailed quote.",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        cageCapacity: "",
        message: "",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to submit quote request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-secondary/20 via-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your poultry farm? Contact us for professional consultation and customized solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Request Your Custom Quote</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input
                      type="text"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Input
                    type="tel"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Input
                    type="text"
                    placeholder="Company Name (Optional)"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Project Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="battery-cages">Battery Cage System</SelectItem>
                      <SelectItem value="automatic-feeding">Automatic Feeding System</SelectItem>
                      <SelectItem value="water-systems">Automatic Water Systems</SelectItem>
                      <SelectItem value="manure-removal">Manure Removal System</SelectItem>
                      <SelectItem value="complete-setup">Complete Farm Setup</SelectItem>
                      <SelectItem value="equipment-supply">Equipment Supply Only</SelectItem>
                      <SelectItem value="consultation">Consultation & Planning</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Input
                    type="number"
                    placeholder="Cage Capacity (Number of Birds)"
                    value={formData.cageCapacity}
                    onChange={(e) => setFormData({ ...formData, cageCapacity: e.target.value })}
                    min="50"
                    step="50"
                  />
                </div>
                <div className="space-y-2">
                  <Textarea
                    placeholder="Tell us about your project requirements, budget, timeline, and any specific needs..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Get Free Quote"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Phone Numbers</h4>
                      <p className="text-muted-foreground">+256 758 422 007</p>
                      <p className="text-muted-foreground">+256 706 922 476</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-muted-foreground">Kasangati, Kampala Uganda</p>
                      <p className="text-muted-foreground">Serving all regions of Uganda</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-muted-foreground">info@poultrycagesuganda.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="h-5 w-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Business Hours</h4>
                      <p className="text-muted-foreground">Mon - Fri: 8:00 AM - 6:00 PM</p>
                      <p className="text-muted-foreground">Sat: 9:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call to Action */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 shadow-lg">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold text-primary mb-3">
                  Ready to Start Your Project?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Call us now for immediate assistance and expert consultation on your poultry farming needs.
                </p>
                <div className="space-y-3">
                  <a href="tel:+256758422007">
                    <Button size="lg" className="w-full">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now: +256 758 422 007
                    </Button>
                  </a>
                  <a href="tel:+256706922476">
                    <Button variant="outline" size="lg" className="w-full">
                      <Phone className="mr-2 h-5 w-5" />
                      Alternative: +256 706 922 476
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="border-accent/20 bg-accent/5">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold mb-2">24/7 Emergency Support</h4>
                <p className="text-sm text-muted-foreground">
                  For urgent technical support and emergency repairs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;