<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>ColsultPlannen</ion-title>
        <ion-buttons @click="openPopover" slot="end">
          <ion-menu-button auto-hide="false"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-list>
        <ion-item>
          <ion-input placeholder="Wat is uw klacht"></ion-input>
        </ion-item>
        <ion-item-divider></ion-item-divider>
        <ion-item>
          <ion-label>Geplande Datum</ion-label>
          <ion-datetime
            value="YYYY-MM-DD"
            placeholder="datum"
          ></ion-datetime>
        </ion-item>
        <ion-item>
          <ion-label>Tijd</ion-label>
          <ion-datetime
            display-format="h:mm A"
            picker-format="h:mm A"
            value="1990-02-19T07:43Z"
            v-model="datum"
          
          ></ion-datetime>
        </ion-item>
        <ion-item>
          <ion-label>Geduurde consult</ion-label>
          <ion-select placeholder="consult">
            <ion-select-option v-model="tijd" value="30">30 minuten</ion-select-option>
            <ion-select-option v-model="tijd" value="60">60 minuten</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-button @click="presentAlertConfirm" class="ion-padding" expand="block" color="success"
          >inplannen</ion-button
        >
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import PopOver from '../components/PopOver.vue';
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
  alertController,
  IonMenuButton,
  IonButtons,
  popoverController
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
      IonMenuButton,
    IonButtons,
  },
  data () {
    return {
      datum: null,
      tijd: null
    }
  },
  methods: {
    async presentAlertConfirm() {
      const alert = await alertController
        .create({
          cssClass: 'my-custom-class',
          message: 'uw afsraak staat gepland',
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              cssClass: 'secondary',
              handler: blah => {
                console.log('Confirm Cancel:', blah)
              },
            },
            {
              text: 'Okay',
              handler: () => {
                console.log('Confirm Okay')
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