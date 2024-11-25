import Image from "next/image";
import React from "react";
import Container from "../Container";

const TenSection = () => {
  return (
    <Container className="lg:flex py-6 lg:py-12">
      <div className="lg:w-[55%] w-full ">
        <h1 className="text-2xl sm:text-3xl font-semibold text-primary text-center lg:text-left">
          Développer une communauté <br /> d'utilisateurs professionnels
        </h1>
        <p className="py-4 text-sm sm:text-base text-primary text-center lg:text-left">
          Freegate vise à développer une communauté d'utilisateurs professionnels
          pour favoriser le partage d'informations, les meilleures pratiques et
          les opportunités commerciales.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="w-full rounded-lg p-4 bg-white shadow-md">
            <h1 className="text-xl font-semibold text-primary">
              <span className="text-white bg-primary p-2">1</span> Forum de discussion
            </h1>
            <p className="text-primary py-2">
              Participez à des discussions et partagez des informations avec
              d'autres professionnels.
            </p>
          </div>
          <div className="w-full rounded-lg p-4 bg-white shadow-md">
            <h1 className="text-xl font-semibold text-primary">
              <span className="text-white bg-primary p-2">2</span> Événements et webinaires
            </h1>
            <p className="text-primary py-2">
              Assistez à des événements et à des webinaires sur les dernières
              tendances du commerce international.
            </p>
          </div>
        </div>
        <div className="w-full rounded-lg p-4 mt-4 bg-white shadow-md">
          <h1 className="text-xl font-semibold text-primary">
            <span className="text-white bg-primary p-2">3</span> Réseautage
          </h1>
          <p className="text-primary py-2">
            Rencontrez et collaborez avec d'autres professionnels de l'importation.
          </p>
        </div>
      </div>
      {/* Ajoutez la classe 'lg:w-[40%]' seulement pour les grands écrans */}
      <div className="w-full lg:w-[40%] mt-8 lg:mt-0">
        <Image
          src="/animations/Team-spirit-amico.svg" // Chemin vers ton GIF
          alt="Illustration de commerce international"
          width={500} // Largeur de l'image
          height={500} // Hauteur de l'image
          className="object-contain mx-auto"
        />
      </div>
    </Container>
  );
};

export default TenSection;
