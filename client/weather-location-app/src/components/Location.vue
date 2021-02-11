<template>
  <div id="nav">
    <button @click="showMyCoordinates">Where I am?</button>
    <p v-show="coordinates.long" id="longitude">
      {{ "Longitude: " + coordinates.long }}
    </p>
    <p v-show="coordinates.lat" id="latitude">
      {{ "Latitude: " + coordinates.lat }}
    </p>
    <p v-show="location.city">
      {{ "You are in " + location.country + ", " + location.city }}
    </p>
    <img
      v-if="location.flag"
      v-bind:src="location.flag"
      alt="Flag"
      id="country-flag"
    />
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      coordinates: {
        long: 0,
        lat: 0,
      },
      location: {
        city: "",
        country: "",
        flag: null,
      },
    };
  },
  methods: {
    getMyPosition: function () {
      return new Promise((resolve, reject) => {
        //this function is offloaded its work to the background to the browser's web API
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    },
    showMyCoordinates: async function () {
      if (navigator.geolocation) {
        try {
          const positionRes = await this.getMyPosition();
          this.coordinates.long = positionRes.coords.longitude;
          this.coordinates.lat = positionRes.coords.latitude;

          const geolocationRes = await axios.get(
            `https://geocode.xyz/${this.coordinates.lat},${this.coordinates.long}?geoit=json`
          );
          this.location.city = geolocationRes.data.city;
          this.location.country = geolocationRes.data.country;

          const countryRes = await axios.get(
            `https://restcountries.eu/rest/v2/name/${geolocationRes.data.prov}`
          );
          console.log(countryRes);
          this.location.flag = countryRes.data[7].flag;
        } catch (e) {
          console.log(e.message);
        }
      } else {
        console.log("Geolocation API failure.");
      }
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400;1,500&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  text-align: center;
  color: #2c3e50;
  font-size: 20px;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  p {
    padding: 20px;
  }
}
</style>


