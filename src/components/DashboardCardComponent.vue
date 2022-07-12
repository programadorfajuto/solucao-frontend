<template>
  <div class="grid-margin stretch-card" :class="col">
    <div class="card">
      <div class="card-body pb-0">
        <div class="d-flex justify-content-between">
          <h4 class="card-title mb-0">{{ title }}</h4>
        </div>
        <h3 class="font-weight-medium mb-4">{{ value }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "col", "value"]
};
</script>