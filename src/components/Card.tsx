import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

interface Announcement {
  description: string;
  image: string;
  prix: string;
  Nom: string;
  isAvailable?: boolean;
}

const Cards = ({
  description,
  Nom,
  image,
  prix,
  isAvailable = true,
}: Announcement) => {
  const path = usePathname();

  return (
    <Card className="rounded-lg shadow-md hover:shadow-lg transition-shadow transform hover:scale-105 duration-300 cursor-pointer">
      {/* Card Header with Image */}
      <CardHeader className="p-0 overflow-hidden rounded-t-lg">
        <div className="relative group">
          <Image
            src={image}
            alt={Nom}
            width={300}
            height={200}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
            priority
          />
        </div>
      </CardHeader>

      {/* Card Content */}
      <CardContent className="p-4">
        <CardTitle className="text-lg font-semibold text-gray-800">
          {Nom}
        </CardTitle>
        <CardDescription className="text-sm text-gray-600 mt-2">
          {description}
        </CardDescription>
      </CardContent>

      {/* Card Footer */}
      <CardFooter className="p-4">
        <div className="flex justify-between items-center w-full">
          {/* Conditional button based on path */}
          {path === "/Entreposage" && (
            <Button
              className={`${
                isAvailable
                  ? "bg-primary text-white hover:bg-primary/90"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
              disabled={!isAvailable}
              aria-label={`Acheter ${Nom}`}
            >
              {isAvailable ? "Acheter" : "Indisponible"}
            </Button>
          )}

          {/* Product Price */}
          <span className="text-lg font-semibold text-primary">{prix}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Cards;
