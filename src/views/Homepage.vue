<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>NieuwsBerichten</ion-title>
        <ion-buttons slot="end">
          <ion-menu-button auto-hide="false"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item router-link="/tab1/1"
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
import {
  IonList,
  IonItem,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
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
  },
};
</script>

<style>
</style>