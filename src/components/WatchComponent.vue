<template>
  <svg :style="cssVars"></svg>
</template>

<script>
export default {
  name: "WatchComponent",
  computed: {
    //Funzione che restituisce valori all'interno di variabili css
    cssVars() {
      return {
        "--bg-strap": this.$store.state.colors.strap.selected.color,
        "--bg-loop": this.$store.state.colors.loop.selected.color,
        "--bg-face": this.$store.state.colors.face.selected.color,
        "--bg-hands": this.$store.state.colors.hands.selected.color,
      };
    },
  },
};
</script>

<style></style>
