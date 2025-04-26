
import React from "react";
import { Button } from "@/components/ui/button";
import { PhoneCall, Calendar } from "lucide-react";

const CTASection = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-primary to-brand-700">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to take control of your health?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Schedule your free teleconsultation today and start your journey to better health
            with our experienced nursing team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <Calendar className="mr-2 h-5 w-5" /> Book Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              <PhoneCall className="mr-2 h-5 w-5" /> Call Us: 0745345258
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
