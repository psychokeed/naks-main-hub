
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  price?: string | number;
  isFree?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ 
  title, 
  description, 
  icon, 
  price, 
  isFree = false 
}) => {
  return (
    <Card className="h-full transition-all hover:shadow-md">
      <CardHeader>
        <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
          {icon}
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        {isFree && (
          <span className="inline-flex items-center rounded-full bg-green-100 text-green-800 px-2 py-0.5 text-xs font-medium">
            Free
          </span>
        )}
        {price && !isFree && (
          <span className="text-sm text-muted-foreground">
            From {typeof price === "number" ? `$${price.toFixed(2)}` : price}
          </span>
        )}
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant="outline">
          <CalendarIcon className="mr-2 h-4 w-4" /> Book Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
