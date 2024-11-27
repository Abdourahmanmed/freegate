import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SquareChartGantt, LetterText, Settings } from "lucide-react";

// Menu items.
const items = [
  {
    title: "Mes Produits",
    url: "/Importateur/Produit",
    icon: SquareChartGantt,
  },
  {
    title: "Ajouter un produit",
    url: "/Importateur/Ajout_produit",
    icon: SquareChartGantt,
  },
  {
    title: "Lettre crédit",
    url: "/Importateur/Lettre_credit",
    icon: LetterText,
  },
  {
    title: "Paramètre",
    url: "/Importateur/Parametre",
    icon: Settings,
  },
];

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarContent className="bg-primary h-full">
        {/* Sidebar Header */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-white text-2xl font-semibold py-4 px-4">
            Freegate
          </SidebarGroupLabel>
        </SidebarGroup>

        {/* Sidebar Menu */}
        <SidebarGroupContent className="mt-6">
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title} className="mb-2">
                <SidebarMenuButton asChild>
                  <a
                    href={item.url}
                    className="flex items-center gap-4 p-3 rounded-md text-white hover:bg-primary-dark transition-colors"
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="text-base">{item.title}</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarContent>
    </Sidebar>
  );
};

export default AppSidebar;

