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
    <ion-content :fullscreen="true" class="chat">
      <ion-card>
        <ion-card-content>
          <ion-list class="messages">
            <ion-item v-for="message in messages" :key="message.id">
              <ion-label class="ion-text-wrap">
                <ion-text color="success">
                  <span class="name-color">{{ message.name }}</span>
                </ion-text>
                <ion-text>
                  <span class="message-color ion-padding">{{
                    message.content
                  }}</span>
                </ion-text>
                <ion-text color="medium">
                  <span class="time">{{ message.timestamp }}</span>
                </ion-text>
              </ion-label>
            </ion-item>
          </ion-list>
        </ion-card-content>
        <ion-card>
          <new-message :name="name"></new-message>
        </ion-card>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
import NewMessage from "../components/NewMessage.vue";
import db from "@/firebase/init.js";
import moment from "moment";
import PopOver from "../components/PopOver.vue";
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  IonList,
  IonItem,
  IonText,
  IonLabel,
  IonTitle,
  IonToolbar,
  IonHeader,
  IonMenuButton,
  IonButtons,
  popoverController,
} from "@ionic/vue";
export default {
  name: "ChatWindow",
  props: ["name"],
  components: {
    IonContent,
    IonPage,
    IonCard,
    IonCardContent,
    IonList,
    IonItem,
    IonLabel,
    IonText,
    NewMessage,
    IonTitle,
    IonToolbar,
    IonHeader,
    IonMenuButton,
    IonButtons,
  },
  data() {
    return {
      messages: [],
    };
  },
  created() {
    let ref = db.collection("messages").orderBy("timestamp");

    ref.onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        if (change.type == "added") {
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format("lll"),
          });
        }
      });
    });
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
.chat h2 {
  font-size: 2.6em;
  margin-bottom: 40px;
}

.chat span {
  font-size: 0.9em;
}

.chat .name-color {
  font-size: 1.4em;
}

.chat .time {
  display: block;
  font-size: 0.7em;
}
.messages {
  max-height: 400px;
  overflow: auto;
}
</style>