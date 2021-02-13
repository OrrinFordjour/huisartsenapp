<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>ColsultPlannen</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item>
          <ion-input placeholder="Wat is uw klacht"></ion-input>
        </ion-item>
        <ion-item-divider></ion-item-divider>
        <ion-item>
          <ion-label>Start Date</ion-label>
          <ion-datetime
            value="DD-MM-YYYY"
            placeholder="Select Date"
          ></ion-datetime>
        </ion-item>
        <ion-item>
          <ion-label>Start Time</ion-label>
          <ion-datetime
            display-format="h:mm A"
            picker-format="h:mm A"
            value="1990-02-19T07:43Z"
          ></ion-datetime>
        </ion-item>
        <ion-item>
          <ion-label>aantal minuten</ion-label>
          <ion-select placeholder="Select One">
            <ion-select-option value="30">30 minuten</ion-select-option>
            <ion-select-option value="60">60 minuten</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-button class="ion-padding" expand="block" color="success"
          >inplannen</ion-button
        >
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonContent,
  IonList,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonSelectOption,
  IonButton,
  IonSelect,
  IonDatetime,
  IonTitle,
  IonInput,
} from "@ionic/vue";
export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonContent,
    IonList,
    IonItem,
    IonItemDivider,
    IonLabel,
    IonSelectOption,
    IonButton,
    IonSelect,
    IonDatetime,
    IonTitle,
    IonInput,
  },
};
</script>