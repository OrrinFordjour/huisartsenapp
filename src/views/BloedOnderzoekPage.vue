<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Bloedonderzoek</ion-title>
        <ion-buttons @click="openPopover" slot="end">
          <ion-menu-button auto-hide="false"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <form action="">
        <ion-item>
          <ion-label position="floating">Doel Bloedonderzoek</ion-label>
          <ion-input type="email"></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Onderzoeken op</ion-label>
          <ion-select value="" ok-text="ja" cancel-text="nee">
            <ion-select-option value="huisarts">allergieen</ion-select-option>
            <ion-select-option value="huisarts">2</ion-select-option>
            <ion-select-option value="huisarts">3</ion-select-option>
            <ion-select-option value="huisarts">4</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item>
          <p>Bent u al eerder op onderzocht:</p>
          <ion-checkbox slot="end"></ion-checkbox>
        </ion-item>
        <ion-item>
          <p>Bent u al eerder bij de huisarts geweest:</p>
          <ion-checkbox slot="end"></ion-checkbox>
        </ion-item>
        <ion-item>
          <p>Wilt u vooraf contact met de arts hierover:</p>
          <ion-checkbox slot="end"></ion-checkbox>
        </ion-item>
        <ion-button class="ion-padding" color="success" expand="block"
          >inplannen</ion-button
        >
      </form>
    </ion-content>
  </ion-page>
</template>

<script>
import PopOver from "../components/PopOver.vue";
import {
  IonItem,
  IonLabel,
  IonInput,
  IonCheckbox,
  IonButton,
  IonSelect,
  IonSelectOption,
  IonPage,
  IonContent,
  IonTitle,
  IonToolbar,
  IonHeader,
  popoverController,
  IonButtons,
  IonMenuButton,
} from "@ionic/vue";
export default {
  name: "bloed",
  components: {
    IonItem,
    IonLabel,
    IonInput,
    IonCheckbox,
    IonButton,
    IonSelect,
    IonSelectOption,
    IonPage,
    IonContent,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonButtons,
    IonMenuButton,
  },
  methods: {
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

<style scoped>
</style>