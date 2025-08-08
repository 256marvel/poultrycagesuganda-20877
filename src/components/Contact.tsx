import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone Numbers",
      details: ["+256 758 422 007", "+256 706 922 476"]
    },
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email Address",
      details: ["info@poultrycagesuganda.com", "sales@poultrycagesuganda.com"]
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Our Location",
      details: ["Kasangati, Kampala Uganda", "Serving all regions of Uganda"]
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Business Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to upgrade your poultry farm? Get in touch for a free consultation and quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Get Your Free Quote</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input placeholder="Enter your full name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input placeholder="Your phone number" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input placeholder="your.email@example.com" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Farm Location
                </label>
                <Input placeholder="Where is your poultry farm located?" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Project Details
                </label>
                <Textarea 
                  placeholder="Tell us about your poultry setup needs (number of birds, preferred systems, etc.)"
                  rows={4}
                />
              </div>
              
              <Button className="w-full" size="lg">
                Submit Quote Request
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index}>
                <CardContent className="flex items-start space-x-4 p-6">
                  <div className="flex-shrink-0 text-primary">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground mb-1">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Call to Action */}
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold text-lg text-foreground mb-3">
                  Ready to Start Your Project?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Call us now for immediate assistance and expert consultation.
                </p>
                <Button size="lg" className="w-full">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +256 758 422 007
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;