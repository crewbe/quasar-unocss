<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    rel="noopener noreferrer"
    :href="link"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title: string
    caption?: string
    link?: string
    icon?: string
  }>(),
  {
    link: '#',
    caption: '',
    icon: '',
  },
)
</script>
