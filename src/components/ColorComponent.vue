<template>
  <div class="color" :style="cssVars">
    <slot></slot
    ><!--All'interno dello slot possiamo iniettare del codice html direttamente dal nostro componente principale:) -->
  </div>
</template>

<script>
export default {
  name: "ColorComponent",
  props: ["color"],
  computed: {
    cssVars() {
      return {
        "--bg": this.color.color,
      };
    },
  },
};
</script>

<style scoped>
.color {
  width: 50px;
  height: 50px;
  background-color: var(--bg);
}
</style>
