<template>
  <div id="app">
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import "style/utilities";

#app {
  position: relative;
  font-family: "Raleway";
  font-weight: 400;
  height: 100vh;
  overflow: hidden;
  background-image: url("./assets/bg.jpg");
  background-size: cover;
}
</style>
