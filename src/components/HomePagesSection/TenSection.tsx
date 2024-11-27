import Image from "next/image";
import React from "react";
import Container from "../Container";

const TenSection = () => {
  return (
    <Container className="lg:flex py-6 lg:py-12">
      <div className="lg:w-[55%] w-full">
        <h1 className="text-2xl sm:text-3xl font-semibold text-primary text-center lg:text-left">
          Développer une communauté <br /> d&apos;utilisateurs professionnels
        </h1>
        <p className="py-4 text-sm sm:text-base text-primary text-center lg:text-left">
          Freegate vise à développer une communauté d&apos;utilisateurs professionnels
          pour favoriser le partage d&apos;informations, les meilleures pratiques et
          les opportunités commerciales.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Carte Forum de discussion */}
          <div className="w-full rounded-lg p-4 bg-white shadow-md">
            <h1 className="text-xl font-semibold text-primary flex items-center gap-2">
              <span className="text-white bg-primary px-2 py-1 rounded">1</span>
              Forum de discussion
            </h1>
            <p className="text-primary py-2">
              Participez à des discussions et partagez des informations avec
              d&apos;autres professionnels.
            </p>
          </div>

          {/* Carte Événements et webinaires */}
          <div className="w-full rounded-lg p-4 bg-white shadow-md">
            <h1 className="text-xl font-semibold text-primary flex items-center gap-2">
              <span className="text-white bg-primary px-2 py-1 rounded">2</span>
              Événements et webinaires
            </h1>
            <p className="text-primary py-2">
              Assistez à des événements et à des webinaires sur les dernières
              tendances du commerce international.
            </p>
          </div>
        </div>

        {/* Carte Réseautage */}
        <div className="w-full rounded-lg p-4 mt-4 bg-white shadow-md">
          <h1 className="text-xl font-semibold text-primary flex items-center gap-2">
            <span className="text-white bg-primary px-2 py-1 rounded">3</span>
            Réseautage
          </h1>
          <p className="text-primary py-2">
            Rencontrez et collaborez avec d&apos;autres professionnels de l&apos;importation.
          </p>
        </div>
      </div>

      {/* Section Image */}
      <div className="w-full lg:w-[40%] mt-8 lg:mt-0">
        <Image
          src="/animations/Team-spirit-amico.svg"
          alt="Illustration de communauté professionnelle"
          width={500}
          height={500}
          className="object-contain mx-auto"
        />
      </div>
    </Container>
  );
};

export default TenSection;
