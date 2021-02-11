<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>ChatPage</ion-title>
        <ion-buttons slot="end"> </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen="true">
      <slot />
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonHeader, IonToolbar, IonTitle, IonButtons, IonContent } from "@ionic/vue";
export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonContent
  },
};
</script>

<style scoped>
</style>