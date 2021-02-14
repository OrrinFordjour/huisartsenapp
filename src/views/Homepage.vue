<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>NieuwsBerichten</ion-title>
        <ion-buttons @click="openPopover" slot="end">
          <ion-menu-button auto-hide="false"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item router-link="/tabs/tab1"
          >Marc Van Zegen is vandaag ziek</ion-item
        >
        <ion-item>Dit weekend zijn we geopend</ion-item>
        <ion-item>Meer fruit eten is gezond zit vol vitaminen</ion-item>
        <ion-item>Vanaaf vandaag kan iedereen zich laten inenteren</ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import PopOver from '../components/PopOver.vue';
import {
  IonList,
  IonItem,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonMenuButton,
  IonButtons,
  popoverController
} from "@ionic/vue";

export default {
  name: "home",
  components: {
    IonList,
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

<style>
</style>