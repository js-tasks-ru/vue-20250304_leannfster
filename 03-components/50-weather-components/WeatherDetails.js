import { defineComponent } from "vue";


export default defineComponent({

    template: `
        <div class="weather-details__item">
            <div class="weather-details__item-label"><slot name="label" /></div>
            <div class="weather-details__item-value"><slot /></div>
        </div>
    `
})