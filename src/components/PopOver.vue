<template>
  <ion-content class="ion-padding">
    <ion-list>
            <ion-item button router-link="/tabs/tab7">
            <ion-icon :icon="home" />
            Home
            </ion-item>

            <ion-item button router-link="/profiel">
            <ion-icon :icon="personCircle" />
            Profiel
            </ion-item>

            <ion-item button router-link="/help">
            <ion-icon :icon="help" />
            Help
            </ion-item>

            <ion-item lines="none" button @Click="dismissPopover()">
            <ion-icon :icon="close" />
              Close
            </ion-item>
          </ion-list>
  </ion-content>
</template>

<script>
import {
  home,
  personCircle,
  help,
  close
} from "ionicons/icons";

import { IonContent, IonItem, IonList, popoverController,IonIcon } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Popover',
  components: { IonContent, IonItem, IonList,IonIcon },
  data (){
    return {
      home,
      personCircle,
      help,
      close

    }
  },
  methods: {
      dismissPopover(){
          popoverController.dismiss();
      },

  }
});
</script> 