<template>
  <div :class="name">
    <div class="description">
      <!-- title  -->
      <div :key="name" class="title">
        <h1>My Watch</h1>
        <!-- /title  -->
        <h4>Choose {{ name }} Color</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeComponent",
  props: ["name"],
  filters: {
    //Funzione che restituisce lo stesso valore con la lettera maiuscola
    capitalize: function (value) {
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
  },
};
</script>

<style></style>
