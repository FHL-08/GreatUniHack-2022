<template>
  <div>
    <Navigation />
    <Footers />

    <div>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
import "~/assets/styles.scss";
</script>
