<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Mijn Medicijnen</ion-title>
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
import {
  IonItem,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  actionSheetController,
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
  },
};
</script>



<style>
</style>