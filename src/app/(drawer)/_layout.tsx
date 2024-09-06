import { Drawer } from "expo-router/drawer";;

import { DrawerContent } from "@/components/DrawerContent"
import { CustomOptions } from "@/types/navigation";

export default function DrawerLayout() {
  return (
    <Drawer 
      defaultStatus="open"  
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: "75%",
        }
      }}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="(tabs)"
        options={
          {
            title: "Todas as Caixas de entrada",
            iconName: "all-inbox",
            notifications: 8,
            isDivider: true,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="inbox"
        options={
          {
            title: "Principal",
            iconName: "inbox",
            notifications: 6,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="stars"
        options={
          {
            sectionTitle: "Todos os marcadores",
            title: "Com estrelas",
            iconName: "star-outline",
            notifications: 2,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="postponed"
        options={
          {
            title: "Adiados",
            iconName: "schedule",
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="important"
        options={
          {
            title: "Importante",
            iconName: "label-important-outline",
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="send"
        options={
          {
            title: "Enviado",
            iconName: "send",
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="programmed"
        options={
          {
            title: "Programado",
            iconName: "schedule-send",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="exit-box"
        options={
          {
            title: "Caixa de saída",
            iconName: "outbox",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="sketch"
        options={
          {
            title: "Rascunho",
            iconName: "note",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="all-emails"
        options={
          {
            title: "Todos os e-mails",
            iconName: "email",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="span"
        options={
          {
            title: "Spam",
            iconName: "info-outline",
          } as CustomOptions
        }
      />

      <Drawer.Screen
        name="trash"
        options={
          {
            title: "Lixeira",
            iconName: "delete-outline",
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="read"
        options={
          {
            sectionTitle: "Apps do Google",
            title: "Agenda",
            iconName: "calendar-today",
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="general"
        options={
          {
            title: "Contatos",
            iconName: "account-circle",
            isDivider: true,
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="config"
        options={
          {
            title: "Configurações",
            iconName: "settings",
          } as CustomOptions
        }
      />
      <Drawer.Screen
        name="help"
        options={
          {
            title: "Ajuda e feedback",
            iconName: "help-outline",
          } as CustomOptions
        }
      />
    </Drawer>
  )
}