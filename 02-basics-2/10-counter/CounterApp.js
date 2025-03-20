import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {
    const value = ref(0)
    const maxValue = 5
    const minValue = 0
    return {
      value,
      maxValue,
      minValue
    }
  },

  template: `
    <div class="counter">
      <button
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
        @click="(value--)"
        :disabled="value <= minValue"
      >➖</button>

      <span class="count" data-testid="count">{{ value }}</span>

      <button
        class="button button--secondary"
        type="button"
        aria-label="Increment"
        @click="(value++)"
        :disabled="value >= maxValue"
      >➕</button>
    </div>
  `,
})
