<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Nieuw bericht</ion-title>
      </ion-toolbar>
      <ion-content :fullscreen="true">
        <ion-item>Dit weekend zijn we geopend</ion-item>
      </ion-content>
    </ion-header>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
} from "@ionic/vue";
export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
  },
};
</script>

<style>
</style>