<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-text-center">
      <form @submit.prevent="resetWachtWoord">
        <ion-card class="login-container">
          <ion-card-header>
            <ion-card-title>InLogVergeten</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-item>
              <ion-label position="floating">Email</ion-label>
              <ion-input type="email" v-model="email"></ion-input>
            </ion-item>
            <ion-item lines="none" class="btn-media">
              <ion-button type="submit" color="tertiary"
                >restart wachtwoord</ion-button
              >
            </ion-item>
            <p class="red-text" v-if="feedback">{{ feedback }}</p>
          </ion-card-content>
        </ion-card>
      </form>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonButton,
  IonLabel,
  IonToolbar,
  IonHeader,
} from "@ionic/vue";
import firebase from "firebase";
export default {
  name: "login",
  components: {
    IonPage,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonInput,
    IonButton,
    IonLabel,
    IonToolbar,
    IonHeader,
  },
  data() {
    return {
      email: null,
      password: null,
      feedback: null,
    };
  },
  methods: {
    resetWachtWoord() {
      if ((this.email)) {
        firebase
          .auth()
          .sendPasswordResetEmail(this.email)
          .then((cred) => {
            console.log(cred.user);
            this.$router.push({ name: "tab1" });
          })
          .catch((err) => {
            this.feedback = err.message;
          });
        this.feedback = null;
      } else {
        this.feedback = "invulveld moet in gevuld worden";
      }
    },
  },
};
</script>

<style scoped>
ion-card-content {
  text-align: center;
}

ion-item {
  margin-bottom: 5px;
}

.login-container {
  margin-top: 160px;
}

.login-container ion-button {
  margin: 2px auto;
}

.red-text {
  color: red;
}

.spoed {
  margin-bottom: 30px;
}
</style>