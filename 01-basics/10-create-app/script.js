import { defineComponent, createApp } from 'vue'

const Component = defineComponent({
    name: 'Component',
    setup() {
        const date = new Date().toLocaleDateString(navigator.language, { dateStyle: 'long' })
        return { date }
    },

    template: `Сегодня {{ date }}`
})

createApp(Component).mount('#app')