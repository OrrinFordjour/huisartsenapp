<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <ion-label class="ion-padding" for="new-message"
        >New Message (enter to add)</ion-label
      >
      <ion-input
        class="ion-padding"
        type="text"
        name="new-message"
        v-model="newMessage"
      ></ion-input>
      <p class="red-text" v-if="feedback">{{ feedback }}</p>
    </form>
  </div>
</template>

<script>
import db from "../firebase/init";
import { IonLabel, IonInput } from "@ionic/vue";
export default {
  name: "NewMessage",
  props: ["name"],
  components: {
    IonLabel,
    IonInput,
  },
  data() {
    return {
      newMessage: null,
      feedback: null,
    };
  },
  methods: {
    addMessage() {
      if (this.newMessage) {
        db.collection("messages")
          .add({
            content: this.newMessage,
            name: this.name,
            timestamp: Date.now(),
          })
          .catch((err) => {
            console.log(err);
          })
        this.newMessage = null;
        this.feedback = null;
      } else {
        this.feedback =
          "wilt u wat versturen dan moet er een bericht in gevoerd worden";
      }
    },
  },
};
</script>

<style scoped>
.red-text {
  color: red;
}
</style>