import Image from "next/image";
import React from "react";
import Container from "../Container";
import { Calendar, FileSpreadsheet, Store } from "lucide-react";

const SevenSection = () => {
  return (
    <Container className="flex flex-col lg:flex-row justify-between items-center h-full py-6 bg-blue-100">
      {/* Section image */}
      <div className="lg:w-[40%] w-full flex justify-center mb-6 lg:mb-0">
        <Image
          src="/animations/Analytics-bro.svg" // Chemin vers l'image
          alt="Illustration de commerce international"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>

      {/* Section texte */}
      <div className="lg:w-[55%] w-full">
        <h1 className="text-2xl sm:text-3xl font-semibold text-primary text-center lg:text-left">
          Fournir des outils de gestion et de suivi des commandes
        </h1>
        <p className="py-4 text-sm sm:text-base text-primary text-center lg:text-left">
          Freegate offre des outils de gestion et de suivi des commandes
          permettant aux importateurs de suivre l'état de leurs commandes, des
          fournisseurs aux clients.
        </p>

        {/* Outils de gestion */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center lg:items-start border rounded-lg px-4 py-3">
            <Calendar className="text-primary w-12 h-12 mb-2" />
            <h1 className="text-lg sm:text-xl font-semibold text-primary">
              Suivi des commandes
            </h1>
            <p className="text-sm sm:text-base text-primary text-center lg:text-left">
              Suivez l'état de vos commandes en temps réel.
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-start border rounded-lg px-4 py-3">
            <FileSpreadsheet className="text-primary w-12 h-12 mb-2" />
            <h1 className="text-lg sm:text-xl font-semibold text-primary">
              Gestion des factures
            </h1>
            <p className="text-sm sm:text-base text-primary text-center lg:text-left">
              Gérez vos factures et vos paiements.
            </p>
          </div>
          <div className="flex flex-col items-center lg:items-start border rounded-lg px-4 py-3">
            <Store className="text-primary w-12 h-12 mb-2" />
            <h1 className="text-lg sm:text-xl font-semibold text-primary">
              Gestion des stocks
            </h1>
            <p className="text-sm sm:text-base text-primary text-center lg:text-left">
              Suivez vos niveaux de stocks et gérez vos commandes
              d'approvisionnement.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default SevenSection;
