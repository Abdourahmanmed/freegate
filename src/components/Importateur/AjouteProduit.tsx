"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { productSchema } from "@/Schema/schema";



// TypeScript type pour le formulaire
type ProductFormValues = z.infer<typeof productSchema>;

const AddProductForm = () => {
  // Initialisation du formulaire
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      Nom: "",
      Description: "",
      Prix: "",
      Categorie: "",
      Image: "",
    },
  });

  // Soumission du formulaire
  const onSubmit = (data: ProductFormValues) => {
    console.log("Données soumises :", data);
    // Ajoutez ici la logique pour enregistrer le produit (ex: API call)
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <h1 className="text-2xl font-semibold text-primary">Ajoute un produit</h1>
        {/* Nom du produit */}
        <FormField
          control={form.control}
          name="Nom"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary">Nom</FormLabel>
              <FormControl>
                <Input placeholder="Nom du produit" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description */}
        <FormField
          control={form.control}
          name="Description"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary">Description</FormLabel>
              <FormControl>
                <Input placeholder="Description du produit" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Prix */}
        <FormField
          control={form.control}
          name="Prix"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary">Prix (FDJ)</FormLabel>
              <FormControl>
                <Input placeholder="Ex: 3500" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Catégorie */}
        <FormField
          control={form.control}
          name="Categorie"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary">Catégorie</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionner une catégorie" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Vêtements">Vêtements</SelectItem>
                    <SelectItem value="Voitures">Voitures</SelectItem>
                    <SelectItem value="Aliments">Aliments</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Image */}
        <FormField
          control={form.control}
          name="Image"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-primary">Image (URL)</FormLabel>
              <FormControl>
                <Input type="file" placeholder="URL de l'image" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Bouton de soumission */}
        <Button type="submit" className="w-full bg-primary">
          Ajouter le produit
        </Button>
      </form>
    </Form>
  );
};

export default AddProductForm;
