<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-button @click="toSignPage" size="small" fill="clear" slot="end">Registeren</ion-button>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-text-center">
      <form @submit.prevent="login">
        <ion-card class="login-container">
          <ion-card-header>
            <ion-card-title>InLogVergeten</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-item>
              <ion-label position="floating">Email</ion-label>
              <ion-input type="email" v-model="email"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Wachtwoord</ion-label>
              <ion-input type="password" v-model="password"></ion-input>
            </ion-item>
            <p class="text-media">Inloggen met Google & Facebook</p>
            <ion-item lines="none" class="btn-media">
              <ion-button type="submit" color="tertiary">InLoggen</ion-button>
              <ion-button color="success">Google</ion-button>
              <ion-button>facebook</ion-button>
            </ion-item>
            <p class="red-text" v-if="feedback">{{ feedback }}</p>
            <p>Inloggegevens kwijt?</p>
          </ion-card-content>
        </ion-card>
      </form>
    </ion-content>
    <ion-footer class="ion-no-border">
      <ion-toolbar>
        <ion-button
          router-link="/tabs/tab6"
          class="spoed"
          expand="block"
          color="success"
        >
          SPOED</ion-button
        >
      </ion-toolbar>
    </ion-footer>
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
  IonFooter,
  IonToolbar,
  IonHeader
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
    IonFooter,
    IonToolbar,
    IonHeader
  },
  data() {
    return {
      email: null,
      password: null,
      feedback: null,
    };
  },
  methods: {
    login() {
      if ((this.email, this.password)) {
        firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password)
          .then((cred) => {
            console.log(cred.user);
            this.$router.push({ name: "tab1" });
          })
          .catch((err) => {
            this.feedback = err.message;
          });
        this.feedback = null;
      } else {
        this.feedback = "vul beide velden in";
      }
    },
    toSignPage(){
      this.$router.push({ name: "signup" });
    }
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
  margin-top: 80px;
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