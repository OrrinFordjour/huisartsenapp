<template>
  <ion-content class="ion-padding">
    <ion-list>
            <ion-item button router-link="/tabs/tab7">Home</ion-item>
            <ion-item button router-link="/profiel">Profiel</ion-item>
            <ion-item button router-link="/help">Help</ion-item>
            <ion-item lines="none" button @Click="dismissPopover()">Close</ion-item>
          </ion-list>
  </ion-content>
</template>

<script>
import { IonContent, IonItem, IonList, popoverController } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Popover',
  components: { IonContent, IonItem, IonList },
  methods: {
      dismissPopover(){
          popoverController.dismiss();
      },

  }
});
</script> 