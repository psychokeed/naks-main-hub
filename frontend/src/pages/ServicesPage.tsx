
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import ServiceCard from "@/components/ui/ServiceCard";
import { 
  Video, 
  Truck, 
  Droplet, 
  Home, 
  Heart, 
  UserCheck, 
  Activity, 
  BarChart2, 
  Apple 
} from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      title: "Teleconsultation",
      description:
        "Connect with our certified nurses through video calls for personalized healthcare advice and preliminary diagnoses.",
      icon: <Video className="h-8 w-8 text-primary" />,
      isFree: true,
    },
    {
      id: 2,
      title: "Drug Delivery",
      description:
        "Get your prescribed medications delivered right to your doorstep with our fast and reliable delivery service.",
      icon: <Truck className="h-8 w-8 text-primary" />,
      price: 15,
    },
    {
      id: 3,
      title: "IV Hydration/Infusions",
      description:
        "Revitalize your body with our IV hydration therapy services administered by professional nurses.",
      icon: <Droplet className="h-8 w-8 text-primary" />,
      price: 99,
    },
    {
      id: 4,
      title: "Home-based Care",
      description:
        "Receive quality healthcare in the comfort of your home with our dedicated nursing team.",
      icon: <Home className="h-8 w-8 text-primary" />,
      price: 149,
    },
    {
      id: 5,
      title: "Wound Care",
      description:
        "Professional wound care services including cleaning, dressing, and monitoring of healing progress.",
      icon: <Heart className="h-8 w-8 text-primary" />,
      price: 75,
    },
    {
      id: 6,
      title: "Follow-up Services",
      description:
        "Regular check-ins and monitoring of your health progress after treatments or procedures.",
      icon: <UserCheck className="h-8 w-8 text-primary" />,
      price: 50,
    },
    {
      id: 7,
      title: "Blood Pressure Check",
      description:
        "Regular monitoring of your blood pressure levels by certified nursing professionals.",
      icon: <Activity className="h-8 w-8 text-primary" />,
      price: 25,
    },
    {
      id: 8,
      title: "Blood Glucose Check",
      description:
        "Monitoring of blood glucose levels for diabetes management and prevention.",
      icon: <BarChart2 className="h-8 w-8 text-primary" />,
      price: 30,
    },
    {
      id: 9,
      title: "Nutritional Support",
      description:
        "Personalized nutrition plans and guidance for overall health improvement or specific health conditions.",
      icon: <Apple className="h-8 w-8 text-primary" />,
      price: 85,
    },
  ];

  return (
    <MainLayout>
      <div className="container mx-auto py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quality nursing care and health services delivered with professionalism and compassion.
            Book an appointment or request a service today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              price={service.price}
              isFree={service.isFree}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default ServicesPage;
