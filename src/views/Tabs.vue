<template>
  <ion-page>
    <ion-tabs>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="water" />
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="thermometer" />
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="toggle" />
        </ion-tab-button>

        <ion-tab-button tab="tab4" href="/tabs/tab4">
          <ion-icon :icon="time" />
        </ion-tab-button>

        <ion-tab-button tab="tab5" href="/tabs/tab5">
          <ion-icon :icon="chatbox" />
        </ion-tab-button>

        <ion-tab-button tab="tab6" href="/tabs/tab6">
          <ion-icon :icon="medkit" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script>
import { IonTabBar, IonTabButton, IonTabs, IonIcon, IonPage } from "@ionic/vue";
import {
  water,
  thermometer,
  toggle,
  time,
  chatbox,
  medkit,
} from "ionicons/icons";

export default {
  name: "Tabs",
  components: { IonTabs, IonTabBar, IonTabButton, IonIcon, IonPage },
  setup() {
    return {
      water,
      thermometer,
      toggle,
      time,
      chatbox,
      medkit,
    };
  },
};
</script>