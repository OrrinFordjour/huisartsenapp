<template>
  <ion-page>
    <ion-content class="ion-text-center">
      <form @submit.prevent="signup">
        <ion-card class="signup-container">
          <ion-card-header>
            <ion-card-title>SignupDokterApp</ion-card-title>
          </ion-card-header>
          <ion-card-content>
            <ion-item>
              <ion-label position="floating">Uw Naam</ion-label>
              <ion-input type="name" v-model="naam"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Email</ion-label>
              <ion-input type="email" v-model="email"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label position="floating">Wachtwoord</ion-label>
              <ion-input type="password" v-model="password"></ion-input>
            </ion-item>
            <p class="text-media">regiteren met Google & Facebook</p>
            <ion-item lines="none" class="btn-media">
              <ion-button type="submit" color="tertiary">registeren</ion-button>
              <ion-button color="success">Google</ion-button>
              <ion-button>facebook</ion-button>
            </ion-item>
            <p class="red-text" v-if="feedback">{{ feedback }}</p>
            <p>Inloggegevens kwijt?</p>
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
} from "@ionic/vue";
import db from "@/firebase/init";
import firebase from "firebase";
export default {
  name: "signpage",
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
  },
  data() {
    return {
      naam: null,
      email: null,
      password: null,
      feedback: null,
      slug: null,
    };
  },
  methods: {
    signup() {
      if (this.naam && this.email && this.password) {
        this.slug = this.naam
          .replace(/[^a-z]+/gi, "-")
          .replace(/^-|-$/g, "")
          .toLowerCase();
        let ref = db.collection("users").doc(this.slug);
        ref.get().then((doc) => {
          if (doc.exists) {
            this.feedback = "Deze gebruikernaam is al bezit";
          } else {
            firebase
              .auth()
              .createUserWithEmailAndPassword(this.email, this.password)
              .then(cred => {
                ref.set({
                  name: this.naam,
                  user_id: cred.user.uid,
                });
              }).then(() => {
                this.$router.push({ name: "tab1" });
              })
              .catch((err) => {
                console.log(err);
                this.feedback = err.message;
              });
            this.feedback = "deze gebruikers naam is vrij";
          }
        });
      } else {
        this.feedback = "allen veld moet ingevuld worden.!";
      }
    },
  },
};
</script>

<style>
ion-card-content {
  text-align: center;
}

ion-item {
  margin-bottom: 5px;
}

.signup-container {
  margin-top: 140px;
}

.signup-container ion-button {
  margin: 2px auto;
}

.red-text {
  color: red;
}
</style>