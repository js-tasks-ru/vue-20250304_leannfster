import { defineComponent } from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    min: {
      type: Number,
      required: false,
      default: () => 0,
    },

    max: {
      type: Number,
      required: false,
      default: () => Infinity,
    },

    count: Number,
  },

  emits: ['update:count'],

  setup(props, {emit}) {
    const onIncrement = () => {
      emit('update:count', props.count + 1)
    }

    const onDecrement = () => {
      emit('update:count', props.count - 1)
    }

    return {
      onIncrement,
      onDecrement,
    }
  },

  template: `
    <div class="counter">
      <UiButton aria-label="Decrement" :disabled="count <= min" @click="onDecrement">➖</UiButton>
      <span class="count" data-testid="count">{{ count }}</span>
      <UiButton aria-label="Increment" :disabled="count >= max" @click="onIncrement">➕</UiButton>
    </div>
  `,
})
