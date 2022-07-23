<template>
  <ul id="selectedColor">
    <li v-for="(color, i) in getColors" :key="i">
      <h4>{{ color.name | capitalize }}</h4>
      <p :style="`color: ${color.color}`">{{ color.colorName }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SelectedColor",
  computed: {
    steps: function () {
      return this.$store.state.stepsActivated;
    },
    getColors: function () {
      let colors = [];
      for (let i = 0; i < this.steps.length; i++) {
        //Ad ogni step che trova va a pushare il nome ed il colore cliccato
        colors.push({
          name: this.steps[i],
          color: this.$store.state.colors[this.steps[i]].selected.color,
          colorName: this.$store.state.colors[this.steps[i]].selected.name,
        });
      }
      return colors;
    },
  },

  filters: {
    capitalize: function (value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};
</script>

<style></style>
