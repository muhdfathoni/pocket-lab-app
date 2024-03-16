<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button color="primary"></ion-menu-button>
                </ion-buttons>
                <ion-title>{{ item.name }}</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large"></ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-img
                :src="item.photo"
                :alt="item.name"
                style="height: 200px;"
            ></ion-img>
            <ion-card-header>
                <ion-card-title class="text-center">{{ item.name }}</ion-card-title>
            </ion-card-header>
            <ion-textarea
                label-placement="floating"
                fill="outline"
                placeholder="Enter text"
                rows="5"
            >
                <div slot="label">STATE THE MALFUNCTION</div>    
            </ion-textarea>
            <ion-list style="text-align:center">
                <ion-button class="ion-text-center" color="medium">CONFIRM</ion-button>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonButtons, IonButton, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonList, IonRefresher, IonRefresherContent, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg, IonTextarea, IonText } from '@ionic/vue';
import { defineComponent, computed, ref } from 'vue';
import { useRoute } from 'vue-router';
import { baseURL } from '../config.js';

const item = ref([]);

async function getData() {
    const route = useRoute();
    const productId = computed(() => route.params.productId);

    const res = await fetch(baseURL + "product/" + productId.value);
    const finalRes = await res.json();
    item.value = finalRes;
}

getData()
</script>
