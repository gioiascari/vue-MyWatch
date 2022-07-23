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
          {{ color.name }} - {{ color.color }}
        </div>
      </div>
      <!--NavBar-->
      <ul class="links">
        <li>
          <router-link v-if="getPrev" :to="`/${getPrev}`">Prev</router-link>
          <router-link v-if="getNext" :to="`/${getNext}`">Next</router-link>
          <!--Router link definisce il componente target a cui rimandare l’utente tramite la prop to -->
        </li>
      </ul>
      <!--/NavBar-->
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
    next: function () {
      //funzione che va a riprendere dallo store il valore di next
      return this.$store.state.next;
    },
    getNext: function () {
      //se la posizione di questo step in cui ci troviamo è minore della lunghezza di steps e se this.next è true allora andiamo a prendere il valore che ci interessa
      return this.$store.state.steps.indexOf(this.name) <
        this.$store.state.steps.length && this.next
        ? this.$store.state.steps[
            this.$store.state.steps.indexOf(this.name) + 1
          ]
        : false;
    },
    getPrev: function () {
      //se lo step in cui ci troviamo ha un valore maggiore di zero allora si può procedere a prendere il suo valore altrimenti restitusice false
      return this.$store.state.steps.indexOf(this.name) > 0
        ? this.$store.state.steps[
            this.$store.state.steps.indexOf(this.name) - 1
          ]
        : false;
    },
  },
  methods: {
    //Funzione che mi permette di cambiare colore al click
    changeColor: function (name, color, colorName) {
      this.$store.dispatch("setColor", { name, color, colorName });
      if (!this.$store.state.stepsActivated.includes(name)) {
        this.$store.dispatch("setStep", name);
      }
      this.$store.dispatch("setNext", true);
    },
  },
};
</script>

<style></style>
