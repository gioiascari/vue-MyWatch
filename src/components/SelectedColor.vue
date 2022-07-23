<template>
  <ul id="selectedColor">
    <li></li>
  </ul>
</template>

<script>
export default {
  name: "SelectedColor",
  computed: {
    steps: function () {
      return this.$store.state.stepsActivated;
    },
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
};
</script>

<style></style>
