<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Mijn Medicijnen</ion-title>
        <ion-buttons @click="openPopover" slot="end">
          <ion-menu-button auto-hide="false"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-item @click="presentActionSheet">Diclofenac </ion-item>
    <ion-item @click="presentActionSheet">Amoxicilline </ion-item>
    <ion-item @click="presentActionSheet">Omeprazol </ion-item>
    <ion-item @click="presentActionSheet">Doxycycline </ion-item>
    <ion-item @click="presentActionSheet">Ibuprofen </ion-item>
    <ion-item @click="presentActionSheet">Metoprolol </ion-item>
    <ion-item @click="presentActionSheet">Salbutamol </ion-item>
    <ion-content :fullscreen="true"> </ion-content>
  </ion-page>
</template>

<script>
import PopOver from "../components/PopOver.vue";
import {
  IonItem,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  actionSheetController,
  IonMenuButton,
  IonButtons,
  popoverController,
} from "@ionic/vue";
import { caretForwardCircle, heart, trash, share } from "ionicons/icons";

export default {
  name: "medicijnen",
  components: {
    IonItem,
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonMenuButton,
    IonButtons,
  },
  methods: {
    async presentActionSheet() {
      const actionSheet = await actionSheetController.create({
        header: "Benodigheden",
        cssClass: "my-custom-class",
        buttons: [
          {
            text: "Bijsluiter",
            role: "",
            icon: trash,
            handler: () => {
              console.log("Bijsluiter");
            },
          },
          {
            text: "Nieuw recept aanvragen",
            icon: share,
            handler: () => {
              console.log("Nieuw recept aanvragen");
            },
          },
          {
            text: "Vragen stellen over gebruik",
            icon: caretForwardCircle,
            handler: () => {
              console.log("Vragen stellen over gebruik");
            },
          },
          {
            text: "FAQ",
            icon: heart,
            handler: () => {
              console.log("FAQ");
            },
          },
        ],
      });
      return actionSheet.present();
    },

    async openPopover(ev) {
      const popover = await popoverController.create({
        component: PopOver,
        cssClass: "my-custom-class",
        event: ev,
        translucent: true,
      });
      return popover.present();
    },
  },
};
</script>



<style>
</style>