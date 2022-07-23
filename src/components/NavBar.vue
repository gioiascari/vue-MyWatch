<template>
  <div id="nav">
    <div class="nav">
      <div class="colors">
        <div
          :color="color"
          v-for="(color, i) in getColors"
          :key="i"
          @click="changeColor(name, color.name, color.color)"
        >
          [{{ color.name }} - {{ color.color }}]
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: ["name"],
  computed: {
    getColors: function () {
      return this.$store.state.colors[this.name].available;
    },
  },
  methods: {
    //Funzione che mi permette di cambiare colore al click
    changeColor: function (name, color, colorName) {
      this.$store.dispatch("setColor", { name, color, colorName });
    },
  },
};
</script>

<style></style>
