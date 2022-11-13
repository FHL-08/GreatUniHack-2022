<template>
  <div>
    <Navigation />

    <div class="bg-dark">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
    
    <Footers />
  </div>
</template>

<script setup lang="ts">
import "~/assets/styles.scss";
</script>
