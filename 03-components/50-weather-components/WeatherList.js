import { defineComponent } from "vue";
import WeatherCard from "./WeatherCard";


export default defineComponent({
    name: 'WeatherList',

    components: {
        WeatherCard
    },

    props: {
        weatherData: Object
    },

    template: `
      <ul class="weather-list unstyled-list">
        <WeatherCard v-for="item in weatherData" :item />
      </ul>
      `
})
