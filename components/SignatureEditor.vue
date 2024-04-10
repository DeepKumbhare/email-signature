<script setup>
import {useSignatureStore} from '@/stores/signature-store'

const store = useSignatureStore()

</script>

<template>
    <div class="text-center bg-red-500 text-white py-4 mt-4">Email Signature Generator</div>

    <div>
        <div>
            <p>Enter Your Email: </p>
            <input type="email" label="name" v-model="store.email">

            <p>Enter Your Name: </p>
            <input type="text" label="name" v-model="store.name">

            <p>Your Job title: </p>
            <input type="text" label="jobtitle" v-model="store.jobTitle">

            <label for="hs-color-input" class="block text-sm font-medium mb-2">Color picker</label>
<input type="color" class="p-1 h-10 w-14 block bg-white border border-gray-200 cursor-pointer rounded-lg disabled:opacity-50 disabled:pointer-events-none" id="hs-color-input" v-model="store.primaryColor" title="Choose your color">
        </div>
    </div>
</template>