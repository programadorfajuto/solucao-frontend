<template>
  <div>
    <button
      v-on:click="$emit('visualizar')"
      type="button"
      class="btn btn-icons btn-rounded btn-primary"
    >
      <i class="mdi mdi-eye"></i>
    </button>
    <button
      v-if="user.perfil == 0 || (user.perfil == 2 && subIsActive('/socios'))"
      v-on:click="$emit('editar')"
      type="button"
      class="btn btn-icons btn-rounded btn-warning"
    >
      <i class="mdi mdi-pen"></i>
    </button>
    <button
      v-if="user.perfil == 0 && typeof(excluir) == 'undefined'"
      v-on:click="mostrarModalDeConfirmacao"
      type="button"
      class="btn btn-icons btn-rounded btn-danger"
    >
      <i class="mdi mdi-trash-can"></i>
    </button>
  </div>
</template>
<script>
import DeleteConfirmationModalComponent from "./DeleteConfirmationModalComponent.vue";
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("auth", ["user"])
  },
  props: ["namespace", "action", "id", "excluir"],
  methods: {
    mostrarModalDeConfirmacao() {
      this.$modal.show(
        DeleteConfirmationModalComponent,
        {
          namespace: this.namespace,
          action: this.action,
          id: this.id
        },
        { height: "auto" }
      );
    },
    subIsActive(input) {
      const paths = Array.isArray(input) ? input : [input];
      return paths.some(path => {
        return this.$route.path.indexOf(path) === 0;
      });
    }
  },
};
</script>

