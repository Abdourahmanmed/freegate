"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { letterOfCreditSchema } from "@/Schema/schema";

// Types des champs
type LetterOfCreditFormValues = z.infer<typeof letterOfCreditSchema>;

const defaultValues: LetterOfCreditFormValues = {
  applicant: "",
  beneficiary: "",
  amount: 0,
  currency: "",
  expiryDate: "",
  description: "",
};

const LetterOfCreditForm = () => {
  const form = useForm<LetterOfCreditFormValues>({
    resolver: zodResolver(letterOfCreditSchema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit = (values: LetterOfCreditFormValues) => {
    console.log("Formulaire soumis :", values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <h1 className="text-2xl font-semibold text-white">
          Création d&apos;une lettre de crédit
        </h1>

        {/* Émetteur */}
        <FormField
          control={form.control}
          name="applicant"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom de l&apos;émetteur</FormLabel>
              <FormControl>
                <Input placeholder="Nom de l'émetteur" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Bénéficiaire */}
        <FormField
          control={form.control}
          name="beneficiary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nom du bénéficiaire</FormLabel>
              <FormControl>
                <Input placeholder="Nom du bénéficiaire" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Montant */}
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Montant</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Montant (ex. 1000)"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Devise */}
        <FormField
          control={form.control}
          name="currency"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Devise</FormLabel>
              <FormControl>
                <Input placeholder="Devise (ex. USD, EUR)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Date d'expiration */}
        <FormField
          control={form.control}
          name="expiryDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date d&apos;expiration</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Description de la lettre de crédit" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Bouton de soumission */}
        <Button
          type="submit"
          className="w-full bg-white text-primary hover:bg-white/90"
        >
          Ajouter la lettre de crédit
        </Button>
      </form>
    </Form>
  );
};

export default LetterOfCreditForm;
