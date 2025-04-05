# MeetupView с TS

Для миграции компонентов на TS требуется:
1. Добавить атрибут `lang="ts"` к блоку `<script>`.
2. Описание пропсов перенести из опции `props` в макрос `defineProps`, сохранив возвращаемое значение в переменную при необходимости, например:
   - До
   ```js
   const props = defineProps({
     title: {
      type: String,
     },
     image: {
       type: String,
     },
   })
   ```
   - После
   ```ts
   const props = defineProps<{
      title: string,
      image: string,
   }>()
   ```
3. В некоторых файлах раскомментировать импорт нужных типов
