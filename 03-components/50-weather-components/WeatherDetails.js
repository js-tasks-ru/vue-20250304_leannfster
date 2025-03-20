import { defineComponent } from "vue";


export default defineComponent({
    props: {
        label: {
            type: String,
            required: false,
        },

        data: {
            type: String,
            required: false,
        }
    },

    template: `
        <div class="weather-details__item">
            <div class="weather-details__item-label"><slot name="label" />{{ label }}</slot></div>
            <div class="weather-details__item-value"><slot> {{ data }} </slot></div>
        </div>
    `
})