import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//colori di default
const faceDefault = { name: "Grey", color: "#686868" };
const strapDefault = { name: "Grey", color: "#686868" };
const strapLoopDefault = { name: "Grey", color: "#A3A3A3" };
const handsDefault = { name: "White", color: "#FFFFFF" };

export default new Vuex.Store({
  state: {
    next: false,
    steps: ["face", "hands", "strap", "loop", "save", "buy"],
    stepsActivated: [],
    colors: {
      face: {
        selected: { name: faceDefault.name, color: faceDefault.color },
        available: [
          { name: "Pink", color: "#D300E9" },
          { name: "Blue", color: "#005FE8" },
          { name: "Green", color: "#8BC441" },
        ],
      },
      strap: {
        selected: { name: strapDefault.name, color: strapDefault.color },
        available: [
          { name: "Pink", color: "#9000A5" },
          { name: "Blue", color: "#004496" },
          { name: "Green", color: "#709633" },
        ],
      },
      loop: {
        selected: {
          name: strapLoopDefault.name,
          color: strapLoopDefault.color,
        },
        available: [
          { name: "Pink", color: "#D300E9" },
          { name: "Blue", color: "#005FE8" },
          { name: "Green", color: "#8BC441" },
        ],
      },
      hands: {
        selected: { name: handsDefault.name, color: handsDefault.color },
        available: [
          { name: "Pink", color: "#D300E9" },
          { name: "Blue", color: "#005FE8" },
          { name: "Green", color: "#8BC441" },
          { name: "White", color: "#FFFFFF" },
          { name: "Black", color: "#000000" },
        ],
      },
    },
    //Gestione di posizionamento
    animation: {
      face: {
        position: "absolute",
        top: "50%",
        right: "20%",
        transform: "translateY(-45%)",
        width: "20%",
      },
      hands: {
        position: "absolute",
        top: "50",
        right: "42%",
        transform: "translateY(-34%)",
        width: "55%",
      },
      strap: {
        position: "absolute",
        top: "50%",
        right: "20%",
        transform: "translateY(-51%) rotate(35deg)",
        width: "20%",
      },
      loop: {
        position: "absolute",
        top: "50%",
        right: "20%",
        transform: "translateY(-40%)",
        width: "10%",
      },
      save: {
        position: "absolute",
        top: "50%",
        right: "85%",
        transform: "rotate(35deg) translateY(-50%)",
        width: "20%",
      },
      buy: {
        position: "absolute",
        top: "50%",
        right: "15%",
        transform: "translateY(-40%)",
        width: "40%",
      },
    },
  },
  mutations: {
    setColor(state, playload) {
      state.colors[playload.name].selected.color = playload.color;
      state.colors[playload.name].selected.name = playload.colorName;
    },
  },
  actions: {
    setColor({ commit }, playload) {
      commit("setColor", playload);
    },
  },
  modules: {},
});
