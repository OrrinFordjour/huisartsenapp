<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>SpoedAlarm</ion-title>
                <ion-buttons @click="openPopover" slot="end">
          <ion-menu-button auto-hide="false"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-item-divider></ion-item-divider>
      <ion-button
        @click="presentAlertConfirm"
        class="ion-padding"
        expand="block"
        >ALAMEER HUISARTS</ion-button
      >
    </ion-content>
  </ion-page>
</template>

<script>
import Venster from "@/pages/Venster.vue";
import PopOver from '../components/PopOver.vue';
import {
  IonPage,
  IonToolbar,
  IonHeader,
  IonContent,
  IonTitle,
  IonButton,
  IonItemDivider,
  alertController,
  modalController,
    IonMenuButton,
  IonButtons,
  popoverController
} from "@ionic/vue";
export default {
  name: "spoedalarm",
  components: {
    IonPage,
    IonToolbar,
    IonHeader,
    IonContent,
    IonTitle,
    IonButton,
    IonItemDivider,
        IonMenuButton,
    IonButtons,
  },
  methods: {
    async presentAlertConfirm() {
      const alert = await alertController.create({
        cssClass: "my-custom-class",
        header: "LET OP!",
        message:
          "U staat op het punt een noodoproep te doen. Misbruik resuleert in uitschakeling van deze functie",
        buttons: [
          {
            text: "Niet Levensbedreigende Situatie Maar Wel Spoedeisend",
            role: "cancel",
            cssClass: "secondary",
            handler: async () => {
              const modal = await modalController.create({
                component: Venster,
                cssClass: "my-custom-class",
                componentProps: {
                  title: "SpoedFormulier",
                },
              });
              return modal.present();
            },
          },

          {
            text: "Levensbedreigende Situatie",
            handler: () => {
              console.log("Confirm Okay");
            },
          },
        ],
      });
      return alert.present();
    },

    async openPopover(ev) {
      const popover = await popoverController
        .create({
          component: PopOver,
          cssClass: 'my-custom-class',
          event: ev,
          translucent: true
        })
      return popover.present();
    },
  },
};
</script>

<style scoped>
ion-item-divider {
  border-width: 0;
}

.vierkant {
  height: 130px;
  width: 130px;
}
</style>