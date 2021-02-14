<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="dismissModal()">Close</ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content :fullscreen="true">
    <ion-item>
      <ion-label>Vermoedelijk letsel</ion-label>
      <ion-select multiple="true" cancel-text="Anuleer" ok-text="Ga Door!">
        <ion-select-option value="botbruik"
          >Botbreuk of ernstige kneuzing</ion-select-option
        >
        <ion-select-option value="bloeding">Bloeding</ion-select-option>
        <ion-select-option value="val">Ernstige val</ion-select-option>
        <ion-select-option value="hoordletsel">Hoofdletsel</ion-select-option>
        <ion-select-option value="verbranding">Verbranding</ion-select-option>
        <ion-select-option value="overdosis"
          >Overdosis of vergiftiging</ion-select-option
        >
        <ion-select-option value="bewusteloosheid"
          >Bewusteloosheid</ion-select-option
        >
        <ion-select-option value="hersenletsel">Hersenletsel</ion-select-option>
        <ion-select-option value="onbekend"
          >Onbekend en niet te achterhalen</ion-select-option
        >
      </ion-select>
    </ion-item>

    <ion-item>
      <ion-label
        ><p>Het slachtoffer heeft alcohol of drugs gebruikt</p></ion-label
      >
      <ion-select placeholder="keuze">
        <ion-select-option>ja</ion-select-option>
        <ion-select-option>nee</ion-select-option>
        <ion-select-option>onbekend</ion-select-option>
      </ion-select>
    </ion-item>

    <ion-button @click="huisArtsAdres" class="ion-padding" expand="block">
      <p>het slachtoffer is mobiel</p>
    </ion-button>

    <ion-button @click="locatieSlachtoffer"  class="ion-padding" expand="block">
      <p>het slachtoffer is niet mobiel</p>
    </ion-button>
  </ion-content>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonItem,
  alertController
} from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "venster",
  props: {
    title: { type: String, default: "Super Modal" },
  },
  data() {
    return {
      content: "Content",
    };
  },
  components: {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonItem,
  },
  methods: {
    dismissModal() {
      this.$router.push({ name: "tabs7" });
    },
   async huisArtsAdres () {
      const alert = await alertController.create({
        cssClass: "my-custom-class",
        header: "LET OP!",
        message:
          "Ga naar deze medische post.Men is op de hoogst van uw komst <br> <strong>Flevoziekenhuis<br>Hospitaalweg 1<br>1315 RA Almere</strong>",
        buttons: [
          {
            text: "Ga Door",
            cssClass: "secondary",
            handler: () => {
              console.log("Confirm Okay");
            },
          },

          {
            text: "Anuleer",
            handler: () => {
              console.log("Anuleer");
            },
          },
        ],
      });
      return alert.present();
    },
       async locatieSlachtoffer () {
      const alert = await alertController.create({
        cssClass: "my-custom-class",
        header: "Uw Locatie",
        message:
          "Vul alstublieft uw locatie in",
        inputs: [
          {
            name:'adresgevens',
            placeholder: 'adresgevens',

          },
          {
            name:'postcode',
            placeholder: 'postcode',

          },
        ],
        buttons: [
          {
            text: "ik ben op deze locatie",
            cssClass: "secondary",
            handler: () => {
              console.log("Confirm Okay");
            },
          },

          {
            text: "ik ben niet op een adres locatie",
            handler: () => {
              console.log("Anuleer");
            },
          },
        ],
      });
      return alert.present();
    },
  },
});
</script>