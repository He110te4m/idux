<template>
  <IxSpace vertical>
    <IxRadioGroup v-model:value="value" :dataSource="dataSource" buttoned size="sm"></IxRadioGroup>
    <IxRadioGroup v-model:value="value" :dataSource="dataSource" buttoned></IxRadioGroup>
    <IxRadioGroup v-model:value="value" :dataSource="dataSource" buttoned size="lg">></IxRadioGroup>
  </IxSpace>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('beijing')

const dataSource = [
  { label: 'Beijing', value: 'beijing' },
  { label: 'Shanghai', value: 'shanghai' },
  { label: 'Guangzhou', value: 'guangzhou' },
  { label: 'Shenzhen', value: 'shenzhen' },
]
</script>
