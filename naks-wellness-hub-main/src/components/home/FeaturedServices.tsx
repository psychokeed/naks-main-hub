
import React from "react";
import ServiceCard from "../ui/ServiceCard";
import { Video, Heart, Truck, Home, Activity, Calendar } from "lucide-react";

const FeaturedServices = () => {
  const services = [
    {
      id: 1,
      title: "Teleconsultation",
      description:
        "Connect with our certified nurses through video calls for personalized healthcare advice.",
      icon: <Video className="h-8 w-8 text-primary" />,
      isFree: true,
    },
    {
      id: 2,
      title: "IV Hydration",
      description:
        "Revitalize your body with our IV hydration therapy services administered by professional nurses.",
      icon: <Activity className="h-8 w-8 text-primary" />,
      price: 99,
    },
    {
      id: 3,
      title: "Drug Delivery",
      description:
        "Get your prescribed medications delivered right to your doorstep with our fast delivery service.",
      icon: <Truck className="h-8 w-8 text-primary" />,
      price: 15,
    },
    {
      id: 4,
      title: "Home-based Care",
      description:
        "Receive quality healthcare in the comfort of your home with our dedicated nursing team.",
      icon: <Home className="h-8 w-8 text-primary" />,
      price: 149,
    },
  ];

  return (
    <div className="py-12 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">Our Services</h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Professional nursing services designed to meet your healthcare needs, wherever you are.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
    </div>
  );
};

export default FeaturedServices;
