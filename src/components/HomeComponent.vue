<template>
  <div :class="name">
    <div class="description">
      <!-- title  -->
      <div :key="name" class="title">
        <h4>My Watch</h4>
        <!-- /title  -->
        <h1>
          Choose <strong>{{ name | capitalize }} </strong>Color
        </h1>
      </div>
    </div>
    <NavBar :name="name" />
    <WatchComponent :style="cssVars" id="watch" />
  </div>
</template>

<script>
import WatchComponent from "../components/WatchComponent.vue";
import NavBar from "../components/NavBar.vue";
export default {
  name: "HomeComponent",
  components: {
    NavBar,
    WatchComponent,
  },

  props: ["name"],
  watch: {
    $route() {
      //ad ogni cambio di rotta setto next false così al momento di cambio di rotta next è di nuovo false
      this.$store.dispatch("setNext", false);
    },
  },
  computed: {
    //a seconda della rotta prendiamo valori diversi
    cssVars() {
      return {
        "--position": this.$store.state.animation[this.name].position,
        "--top": this.$store.state.animation[this.name].top,
        "--right": this.$store.state.animation[this.name].right,
        "--transform": this.$store.state.animation[this.name].transform,
        "--width": this.$store.state.animation[this.name].width,
        "--color-save": this.$store.state.colors.face.selected.color,
      };
    },
  },
  filters: {
    //Funzione che restituisce lo stesso valore con la lettera maiuscola
    capitalize: function (value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};
</script>

<style lang="scss">
@import "../style/utilities";
.btn-save {
  color: var(--color-save);
}
//per poter usare le var() queste regole vanno nel componente
#watch {
  position: var(--position);
  top: var(--top);
  right: var(--right);
  transform: var(--transform);
  width: var(--width);
  z-index: 2;
  transition: all 0.7s;
}
</style>
