import { defineComponent, computed } from "vue";
import { WeatherConditionIcons } from './weather.service.ts'
import WeatherDetails from "./WeatherDetails.js";
import WeatherAlert from "./WeatherAlert.js";


export default defineComponent({
    name: 'WeatherCard',

    components: {
        WeatherDetails,
        WeatherAlert

    },

    props: {
        item: {
            type: Object,
            required: true,
        }
    },

    setup (props) {
        const weatherIcons = WeatherConditionIcons
        const tempInCelsius = computed(() => (props.item.current.temp - 273.15).toFixed(1));
        const pressureInMm = computed(() => (props.item.current.pressure * 0.75).toFixed(0));
        const isNight = computed(() => String(props.item.current.dt) < String(props.item.current.sunrise) || String(props.item.current.dt) > String(props.item.current.sunset));

        return {
            weatherIcons,
            tempInCelsius,
            pressureInMm,
            isNight
        }
    },

    template: `
    <li class="weather-card" :class="{'weather-card--night': isNight}">
        <WeatherAlert v-if="item.alert">
            {{ item.alert.sender_name}}: {{ item.alert.description }}.
        </WeatherAlert>
        <div>
        <h2 class="weather-card__name">
            {{ item.geographic_name }}
        </h2>
        <div class="weather-card__time">
            {{ item.current.dt }}
        </div>
        </div>
        <div class="weather-conditions">
        <div class="weather-conditions__icon" :title="item.current.weather.description">{{ weatherIcons[item.current.weather.id] }}</div>
        <div class="weather-conditions__temp">{{ tempInCelsius }} °C</div>
        </div>
        <div class="weather-details">
            <WeatherDetails label="Давление, мм рт. ст." :data="pressureInMm">
            </WeatherDetails>
            <WeatherDetails label="Влажность, %" :data="item.current.humidity">
            </WeatherDetails>
            <WeatherDetails>
                <template #label>Облачность, %</template>
                {{ item.current.clouds }}
            </WeatherDetails>
            <WeatherDetails>
                <template #label>Ветер, м/с</template>
                {{ item.current.wind_speed }}
            </WeatherDetails>
        </div>
    </li>
    `
})