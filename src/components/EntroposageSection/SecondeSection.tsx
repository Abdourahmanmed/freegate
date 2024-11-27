"use client";

import { useEffect, useState, useCallback } from "react";
import Container from "../Container";
import Cards from "../Card";
import { AnnouncementData } from "@/Data/data";

// Interface de produit
interface Product {
  id: number;
  Nom: string;
  Description: string;
  Prix: string;
  Image: string;
  Categorie: string;
}

const SecondeSection = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");
  const [priceSort, setPriceSort] = useState<string>(""); // "asc" pour moins cher, "desc" pour plus cher
  const [filteredData, setFilteredData] = useState<Product[]>(AnnouncementData);

  // Filtrage des produits en fonction du nom, de la catégorie et du prix
  const filterProducts = useCallback(() => {
    let filtered = AnnouncementData.filter((product) => {
      // Filtre par recherche de texte dans le nom ou la description
      const searchMatch =
        product.Nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.Description.toLowerCase().includes(searchQuery.toLowerCase());

      // Filtre par catégorie
      const categoryMatch =
        selectedCategory === "Tous" || product.Categorie === selectedCategory;

      return searchMatch && categoryMatch;
    });

    // Tri par prix
    if (priceSort === "asc") {
      filtered = filtered.sort(
        (a, b) =>
          parseInt(a.Prix.replace(/\D/g, "")) - parseInt(b.Prix.replace(/\D/g, ""))
      );
    } else if (priceSort === "desc") {
      filtered = filtered.sort(
        (a, b) =>
          parseInt(b.Prix.replace(/\D/g, "")) - parseInt(a.Prix.replace(/\D/g, ""))
      );
    }

    setFilteredData(filtered);
  }, [searchQuery, selectedCategory, priceSort]);

  // Effectuer le filtrage à chaque changement de recherche, de catégorie ou de tri
  useEffect(() => {
    filterProducts();
  }, [filterProducts]);

  return (
    <Container className="py-6">
      <h1 className="text-2xl sm:text-3xl font-semibold text-primary text-center py-4">
        Tous les produits
      </h1>

      {/* Filtres et recherche */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-4">
        <div className="flex gap-4 flex-wrap">
          <input
            type="text"
            placeholder="Recherche"
            className="p-2 border rounded w-full sm:w-64"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="p-2 border rounded w-full sm:w-48"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="Tous">Toutes les catégories</option>
            <option value="Vêtements">Vêtements</option>
            <option value="Voitures">Voitures</option>
            <option value="Aliments">Aliments</option>
            {/* Ajoutez d'autres catégories selon vos besoins */}
          </select>
        </div>

        {/* Tri par prix */}
        <div className="flex gap-4 flex-wrap mt-4 sm:mt-0">
          <button
            className="p-2 border rounded w-full sm:w-auto"
            onClick={() => setPriceSort("asc")}
          >
            Moins cher
          </button>
          <button
            className="p-2 border rounded w-full sm:w-auto"
            onClick={() => setPriceSort("desc")}
          >
            Plus cher
          </button>
        </div>
      </div>

      {/* Affichage des produits filtrés */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredData.map((product) => (
          <Cards
            key={product.id}
            description={product.Description}
            image={product.Image}
            Nom={product.Nom}
            prix={product.Prix}
          />
        ))}
      </div>
    </Container>
  );
};

export default SecondeSection;
