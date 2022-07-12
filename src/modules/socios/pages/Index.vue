<template>
  <div class="main-panel">
    <div class="content-wrapper">
      <page-title-header-component title="Sócios" />
      <div class="row">
        <div class="col-md-12 grid-margin">
          <router-view />
        </div>
      </div>
    </div>
    <footer-component />
  </div>
</template>

<script>
import PageTitleHeaderComponent from "@/components/PageTitleHeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {
    FooterComponent,
    PageTitleHeaderComponent,
  },
};
</script>