<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>DokterChat</ion-title>
        <ion-buttons @click="openPopover" slot="end">
          <ion-menu-button auto-hide="false"></ion-menu-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content fullscreen="true">
      <ion-card class="welcome">
        <ion-card-content>
          <h2>Welkom</h2>
          <form @submit.prevent="enterChat">
            <ion-item>
              <ion-label for="name" position="floating">Uw name</ion-label>
              <ion-input type="text" name="name" v-model="name"></ion-input>
            </ion-item>
            <p v-if="feedback">{{ feedback }}</p>
            <ion-button type="submit" class="btn-chat">Chat</ion-button>
          </form>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import PopOver from "../components/PopOver.vue";
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonTitle,
  IonMenuButton,
  IonButtons,
  IonToolbar,
  IonHeader,
  popoverController
} from "@ionic/vue";
export default {
  name: "chat",
  components: {
    IonPage,
    IonContent,
    IonCard,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonTitle,
    IonMenuButton,
    IonButtons,
    IonToolbar,
    IonHeader,
  },
  data() {
    return {
      name: "",
      feedback: "",
    };
  },
  methods: {
    enterChat() {
      if (this.name) {
        this.$router.push({ name: "ChatWindow", params: { name: this.name } });
      } else {
        this.feedback = "Vul uw gewenst naam in ";
      }
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
ion-card-content {
  text-align: center;
}

.welcome {
  margin-top: 150px;
}
.welcome h2 {
  font-size: 2em;
}

.welcome ion-button {
  margin: 20px auto;
}

.welcome p {
  margin-top: 20px;
  color: red;
}
</style>