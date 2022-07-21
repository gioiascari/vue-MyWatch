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
