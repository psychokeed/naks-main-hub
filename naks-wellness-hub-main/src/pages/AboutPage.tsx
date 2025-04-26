
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Users, BookOpen, Award } from "lucide-react";

const AboutPage = () => {
  const coreValues = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Quality & Safety",
      description:
        "We are committed to offering only products and services that are clinically tested, evidence-based, and approved for safety.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Customer-Centeredness",
      description:
        "We actively listen and adapt to the unique needs of every client, ensuring tailored support and care.",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Empowerment",
      description:
        "We believe in educating and equipping clients to take charge of their own health and well-being.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from our nursing services to our product quality and customer care.",
    },
  ];

  return (
    <MainLayout>
      <div className="container mx-auto py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About NAKS Care</h1>
            <p className="text-lg text-gray-600">
              Your trusted partner in personalized healthcare and wellness
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-lg text-center italic text-gray-700 mb-6">
              "To empower individuals and families with accessible, holistic, and evidence-based
              health solutions by offering high-quality nursing services and scientifically-backed
              supplements and cosmetics—delivered with compassion, convenience, and care."
            </p>

            <h2 className="text-2xl font-bold mb-6 text-center pt-6">Our Vision</h2>
            <p className="text-lg text-center italic text-gray-700">
              "To become the leading digital health and wellness platform in the region, 
              revolutionizing how communities access personalized nursing care, nutritional 
              support, and preventive health products."
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-8 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreValues.map((value, index) => (
                <Card key={index}>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">Our Team</h2>
            <p className="text-center text-gray-600 mb-6">
              NAKS Care is composed of qualified healthcare professionals dedicated to providing
              the highest standard of care and service to our clients.
            </p>
            <p className="text-center text-gray-600">
              Our team includes registered nurses, nutritionists, and wellness experts
              who are passionate about helping you achieve optimal health through
              personalized care and premium products.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AboutPage;
