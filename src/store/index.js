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
    setNext(state, playload) {
      state.next = playload;
    },
    setStep(state, playload) {
      state.stepsActivated.push(playload);
    },
    resetColors: function (state) {
      //face
      state.colors["face"].selected.name = faceDefault.name;
      state.colors["face"].selected.color = faceDefault.color;
      //strap
      state.colors["strap"].selected.name = strapDefault.name;
      state.colors["strap"].selected.color = strapDefault.color;
      //loop
      state.colors["loop"].selected.name = strapLoopDefault.name;
      state.colors["loop"].selected.color = strapLoopDefault.color;
      //hands
      state.colors["hands"].selected.name = handsDefault.name;
      state.colors["hands"].selected.color = handsDefault.color;
    },
    //Funzione che va a disattivare gli steps che abbiamo attivato
    resetSteps: function (state) {
      state.stepsActivated.splice(0, state.stepsActivated.length);
    },
  },
  getters: {
    getAvailableColors(state) {
      return (name) => {
        let colors = state.colors[name].available;
        let faceColor = state.colors.face.selected.name;

        if (name === "hands") {
          colors = colors.filter((value) => {
            return value.name !== faceColor;
          });
        }

        if (name !== "face") {
          let removeColor;
          if (faceColor === "Pink") {
            removeColor = "Green";
          } else if (faceColor === "Green") {
            removeColor = "Pink";
          }

          colors = colors.filter((v) => {
            return v.name !== removeColor;
          });
        }

        return colors;
      };
    },
  },
  actions: {
    //Le actions richiamano le mutations dello state
    //Color
    setColor({ commit }, playload) {
      commit("setColor", playload);
    },
    //Next
    setNext({ commit }, playload) {
      commit("setNext", playload);
    },
    //Step
    setStep({ commit }, playload) {
      commit("setStep", playload);
    },
    //Reset Color
    resetColors({ commit }) {
      commit("resetColors");
    },
    //Reset Steps
    resetSteps({ commit }) {
      commit("resetSteps");
    },
  },
  modules: {},
});
