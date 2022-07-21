<template>
  <div id="nav">
    <div class="colors">
      <div :color="color" v-for="(color, i) in getColors" :key="i">
        [{{ color.name }} - {{ color.color }}]
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
};
</script>

<style></style>
