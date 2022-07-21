<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import "style/utilities";

#app {
  position: relative;
  font-family: "Raleway";
  font-weight: 400;
  height: 100vh;
  min-height: 768px;
  overflow: hidden;
  background-image: url("./assets/background.svg");
  background-size: cover;
}
</style>
