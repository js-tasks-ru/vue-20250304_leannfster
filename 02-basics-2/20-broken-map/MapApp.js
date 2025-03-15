import { defineComponent, ref, watch, computed } from 'vue'

export default defineComponent({
  name: 'MapApp',

  setup() {
    // Реактивные переменные для хранения координат метки
    let coords = ref({
      x: 0,
      y: 0
    })

    /**
     * Обработчик клика по карте для установки координат метки
     * @param {MouseEvent} event
     */
    function handleClick(event) {
      coords.value.x = event.offsetX
      coords.value.y = event.offsetY
    }

    return {
      coords,
      handleClick
    }
  },

  template: `
    <div class="map" @click="handleClick">
      <img class="map-image" src="./map.png" alt="Map" draggable="false" />
      <span class="pin" :style="{top: coords.y + 'px', left: coords.x + 'px'}">📍</span>
    </div>
  `,
})
