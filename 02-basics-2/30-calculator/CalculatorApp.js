import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const operations = {
      sum(a, b) { return a + b },
      subtract(a, b) { return a - b },
      multiply(a, b) { return a * b },
      divide(a, b) { return a / b },
    }

    const checked = ref('')
    const firstOperand = ref('')
    const secondOperand = ref('')

    const result = computed(() => {
      if (!firstOperand.value || !secondOperand.value || !operations[checked.value]) {
        return ''
      }
      return operations[checked.value](firstOperand.value, secondOperand.value) 
    })

    return {
      checked,
      firstOperand,
      secondOperand,
      result
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model="firstOperand" />

      <div class="calculator__operators">
        <label><input type="radio" name="operator" v-model="checked" value="sum"/>➕</label>
        <label><input type="radio" name="operator" v-model="checked" value="subtract"/>➖</label>
        <label><input type="radio" name="operator" v-model="checked" value="multiply"/>✖</label>
        <label><input type="radio" name="operator" v-model="checked" value="divide"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model="secondOperand" />

      <div>=</div>

      <output>{{ result }}</output>
    </div>
  `,
})
