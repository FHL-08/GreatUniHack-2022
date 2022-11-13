<template>
  <div>
    <Navigation />
    <Footers />

    <div class="bg-dark">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup lang="ts">
import "~/assets/styles.scss";
</script>
