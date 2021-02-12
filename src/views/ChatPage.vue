<template>
  <ion-page>
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
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
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
        this.$router.push({ name: 'ChatWindow', params: {name: this.name}})
      } else {
        this.feedback = "Vul uw gewenst naam in ";
      }
    },
  },
};
</script>

<style scoped>
ion-card-content {
  text-align: center;
}

.welcome {

  margin-top: 190px;
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