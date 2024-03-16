<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button color="primary"></ion-menu-button>
                </ion-buttons>
                <ion-title>Product</ion-title>
            </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
            <ion-header collapse="condense">
                <ion-toolbar>
                    <ion-title size="large">{{ $route.params.id }}</ion-title>
                </ion-toolbar>
            </ion-header>
            <ion-grid>
                <ion-row>
                    <ion-col size="6" v-for="item in listItems">
                        <router-link :to="'/Product/View/' + item.id">
                            <ion-card>
                                <img :alt="item.name" :src="item.photo" style="height:7rem" />
                                <ion-card-header>
                                    <ion-card-subtitle class="text-center">{{ item.name }}</ion-card-subtitle>
                                </ion-card-header>
                            </ion-card>
                        </router-link>
                    </ion-col>
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCol, IonGrid, IonRow, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
import { ref } from 'vue';
import { baseURL } from '../config.js';

const listItems = ref([]);

async function getData() {
    const res = await fetch(baseURL + "product");
    const finalRes = await res.json();
    listItems.value = finalRes;
}

getData()
</script>