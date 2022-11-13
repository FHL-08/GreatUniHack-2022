<script setup lang="ts">
const props = defineProps<{
  name: string;
  image: string;
}>();

// emit changes to input
const emit = defineEmits<{
  (event: "input", value: string): void;
  (event: "press"): void;
}>();
</script>

<template>
  <div class="card bg-light">
    <div class="row g-0">
      <div class="col-md-4">
        <img :src="image" class="img-fluid rounded-start-lg" :alt="`${name}`" />
      </div>

      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ name }}</h5>
          <div class="col-8">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                :placeholder="`${name}`"
                :aria-label="`${name}`"
                aria-describedby="basic-addon1"
                @input="event => $emit('input',
                    (event.target as HTMLInputElement).value
                  )"
              />
            </div>

            <button
              type="button"
              class="btn btn-primary"
              @click="$emit('press')"
            >
              Search {{ name }}
            </button>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
