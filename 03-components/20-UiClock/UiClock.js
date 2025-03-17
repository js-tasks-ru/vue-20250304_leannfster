import { defineComponent, onBeforeMount, onUnmounted, computed, ref } from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() { 
    let currrentTime = ref();
    let intervalID = null;
    const mediumTime = new Intl.DateTimeFormat(navigator.language, {
      timeStyle: 'medium'
    });

    const getCurrentTime = () => {
      currrentTime.value = mediumTime.format(new Date())
    }
    onBeforeMount(() => {
      getCurrentTime()
      intervalID = setInterval(getCurrentTime, 1000)
    })
    onUnmounted(() => {
      clearInterval(intervalID)
    })

    return {
      currrentTime
    }
  },

  template: `<div class="clock">{{ currrentTime }}</div>`,
})
