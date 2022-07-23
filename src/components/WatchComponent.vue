<template>
  <svg
    :style="cssVars"
    viewBox="0 0 429.61 2186.09"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="strap">
      <path
        class="cls-1"
        d="M127.82,90.15l-.24,2048.7a47.23,47.23,0,0,0,47.23,47.24h79.74a47.22,47.22,0,0,0,47.24-47.23L302,90.17Zm94.94,1942.5a15.5,15.5,0,1,1,5.35-21.26A15.49,15.49,0,0,1,222.76,2032.65Zm0-68.79a15.5,15.5,0,1,1,5.35-21.26A15.49,15.49,0,0,1,222.76,1963.86Zm0-68.79a15.5,15.5,0,1,1,5.35-21.26A15.5,15.5,0,0,1,222.76,1895.07Zm0-68.79a15.5,15.5,0,1,1,5.35-21.26A15.5,15.5,0,0,1,222.76,1826.28Zm0-68.79a15.5,15.5,0,1,1,5.35-21.26A15.5,15.5,0,0,1,222.76,1757.49Zm0-68.79a15.5,15.5,0,1,1,5.35-21.26A15.5,15.5,0,0,1,222.76,1688.7Z"
        transform="translate(0 -0.01)"
      />
    </g>
    <g id="loop">
      <rect height="29.28" width="198.16" x="115.72" y="206.11" />
      <rect height="29.28" width="198.16" x="115.72" y="249.11" />
    </g>
    <g id="face">
      <circle cx="214.8" cy="914.47" r="214.8" />
    </g>
    <g id="baseform">
      <rect
        class="cls-3"
        height="25.04"
        transform="translate(429.48 2264.5) rotate(-179.99)"
        width="209.05"
        x="110.28"
        y="1119.72"
      />
      <rect
        class="cls-3"
        height="51.17"
        transform="translate(627.64 2238.4) rotate(-179.99)"
        width="10.89"
        x="308.44"
        y="1093.6"
      />
      <rect
        class="cls-3"
        height="51.17"
        transform="translate(231.32 2238.34) rotate(-179.99)"
        width="10.89"
        x="110.28"
        y="1093.58"
      />
      <rect class="cls-3" height="25.04" width="209.05" x="110.28" y="682.01" />
      <rect class="cls-3" height="51.17" width="10.89" x="110.28" y="682" />
      <rect class="cls-3" height="51.17" width="10.89" x="308.44" y="682.02" />
      <path
        class="cls-4"
        d="M214.78,1129.29c118.63,0,214.81-96.15,214.83-214.78S333.46,699.69,214.83,699.68,0,795.83,0,914.46,96.15,1129.27,214.78,1129.29Zm0-411.34c108.55,0,196.52,88,196.51,196.56S323.32,1111,214.78,1111,18.26,1023,18.27,914.46,106.28,717.94,214.82,718Z"
        transform="translate(0 -0.01)"
      />
      <rect class="cls-3" height="36.14" width="209.05" x="110.28" y="0.01" />
      <rect class="cls-3" height="117.14" width="10.89" x="110.28" />
      <rect class="cls-3" height="117.14" width="10.89" x="308.44" y="0.02" />
      <rect class="cls-3" height="7.14" width="17.53" x="110.28" y="100" />
      <rect class="cls-3" height="7.14" width="17.31" x="302.02" y="100.02" />
      <rect class="cls-5" height="117.14" width="10.89" x="209.36" />
    </g>
    <g id="hands">
      <g id="hour" :style="getHours">
        <line class="cls-6" x1="214.8" y1="914.47" x2="214.8" y2="775.86" />
      </g>
      <g id="minute" :style="getMinutes">
        <line class="cls-6" x1="214.8" y1="914.47" x2="214.8" y2="749.97" />
      </g>
      <g id="second" :style="getSeconds">
        <line class="cls-7" x1="214.8" y1="914.47" x2="214.8" y2="749.97" />
      </g>
      <g id="circle">
        <path
          class="cls-2"
          d="M214.8,925a10.52,10.52,0,1,1,7.44-3.08A10.45,10.45,0,0,1,214.8,925Z"
          transform="translate(0 -0.01)"
        />
        <path
          class="cls-8"
          d="M214.8,906h0a8.53,8.53,0,1,1-6,2.5,8.47,8.47,0,0,1,6-2.5m0-4a12.52,12.52,0,1,0,8.86,3.67A12.47,12.47,0,0,0,214.8,902Z"
          transform="translate(0 -0.01)"
        />
      </g>
    </g>
  </svg>
</template>

<script>
export default {
  name: "WatchComponent",
  data() {
    return {
      minutes: 0,
      seconds: 0,
      hours: 0,
      date: {},
    };
  },
  computed: {
    //Funzione che restituisce valori all'interno di variabili css
    cssVars() {
      return {
        "--bg-strap": this.$store.state.colors.strap.selected.color,
        "--bg-loop": this.$store.state.colors.loop.selected.color,
        "--bg-face": this.$store.state.colors.face.selected.color,
        "--bg-hands": this.$store.state.colors.hands.selected.color,
      };
    },
    //Time's function
    getSeconds: function () {
      let deg = (this.seconds * 360) / 60;
      return `transform: rotate(${deg}deg);`;
    },
    getMinutes: function () {
      let deg = (this.minutes * 360) / 60;
      return `transform: rotate(${deg}deg);`;
    },
    getHours: function () {
      let deg = (this.hours * 360) / 12 + (this.minutes * 60) / 360;
      return `transform: rotate(${deg}deg);`;
    },
  },
  created() {
    setInterval(() => {
      this.date = new Date();
      this.minutes = this.date.getMinutes();
      this.seconds = this.date.getSeconds();
      this.hours = this.date
        .toLocaleString("en-US", {
          hour: "numeric",
          hour12: true,
        })
        .split(" ")[0];
    }, 1000);
  },
};
</script>

<style scoped>
/**
* customizables colors
**/
svg * {
  transition: all 0.5s;
  position: relative;
}

#strap path {
  fill: var(--bg-strap);
}

#loop rect {
  fill: var(--bg-loop);
}

#face circle {
  fill: var(--bg-face);
}

#hands path {
  fill: var(--bg-hands);
}

#hands line {
  stroke: var(--bg-hands);
}

/**
* transition time
**/
#second,
#minute,
#hour {
  transform-box: fill-box;
  transform-origin: bottom center;
  transition: none;
}

/**
* common classes
**/

.cls-3 {
  fill: #939292;
}

.cls-4 {
  fill: #d6d6d6;
}

.cls-5 {
  fill: #b2b2b2;
}

.cls-6 {
  fill: none;
  stroke: #fff;
  stroke-miterlimit: 10;
}

.cls-6 {
  stroke-width: 3px;
}

.cls-7 {
  fill: #fff;
}

.cls-8 {
  stroke-width: 2px;
}
</style>
