<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>All Memories</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item>Jay</ion-item>
        <ion-item>Abhi</ion-item>
        <ion-item>Dizy</ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonToolbar,
  IonHeader,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
} from '@ionic/vue';

export default {
  computed: {
    IonPage,
    IonToolbar,
    IonHeader,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
  },
};
</script>

