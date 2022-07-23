<template>
  <div :class="name">
    <div class="description">
      <!-- title  -->
      <div :key="name" class="title">
        <h4>My Watch</h4>
        <!-- /title  -->
        <h2 v-if="name !== 'save' && name !== 'buy'">
          Choose <strong>{{ name | capitalize }} </strong>Color
        </h2>
        <!-- save -->
        <div v-else-if="name === 'save'">
          <h2>Got It!</h2>
          <router-link to="/buy" :style="cssVars" class="btn btn-save"
            >Save</router-link
          >
        </div>
        <!-- /save -->
        <!-- buy -->
        <div v-else>
          <h2>
            Great, <br />
            time to buy
          </h2>
          <a @click.prevent="goHome" style="cursor: pointer">Reset</a>
        </div>
        <!-- /buy -->
      </div>
      <SelectedColor v-if="name !== 'buy'" />
    </div>
    <NavBar :name="name" />
    <WatchComponent :style="cssVars" id="watch" />
  </div>
</template>

<script>
import WatchComponent from "../components/WatchComponent.vue";
import NavBar from "../components/NavBar.vue";
import SelectedColor from "../components/SelectedColor.vue";
export default {
  name: "HomeComponent",
  components: {
    NavBar,
    WatchComponent,
    SelectedColor,
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
  methods: {
    goHome() {
      this.$store.dispatch("resetColors");
      this.$store.dispatch("resetSteps");

      this.$router.push({ name: "Home" });
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
  text-decoration: none;
  &:hover {
    background-color: var(--color-save);
    border-color: var(--color-save);
    color: white;
  }
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
