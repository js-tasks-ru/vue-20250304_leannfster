<script setup lang="ts">
const props = defineProps({
  forwardLink: {
    type: String,
    required: false,
  }
})

import { UiButton, UiFormGroup, UiInput } from '@shgk/vue-course-ui'
import { ref } from 'vue'
import MeetupsAuthForm from '../components/MeetupsAuthForm.vue'
import LayoutAuth from '../components/LayoutAuth.vue'
import { login } from '../api.ts'
import { useRouter } from 'vue-router'

const email = ref('demo@email')
const password = ref('password')
const router = useRouter()

async function onSubmit() {
  try {
    await login(email.value, password.value)
    if (props.forwardLink) {
      router.push(props.forwardLink)
    } else {
      router.push({name: 'index'})
    }
    // Авторизация прошла успешно
  } catch (error) {
    alert((error as Error).message)
  }
}
</script>

<template>
  <LayoutAuth title="Вход">
    <MeetupsAuthForm @submit="onSubmit">
      <UiFormGroup label="Email">
        <UiInput v-model="email" name="email" type="email" placeholder="demo@email" large required />
      </UiFormGroup>

      <UiFormGroup label="Пароль">
        <UiInput v-model="password" name="password" type="password" placeholder="password" large required />
      </UiFormGroup>

      <template #submit>
        <UiButton kind="primary" type="submit" wide size="large">Войти</UiButton>
      </template>

      <template #append>
        Нет аккаунта?
        <RouterLink :to="{name: 'register'}">Зарегистрируйтесь</RouterLink>
      </template>
    </MeetupsAuthForm>
  </LayoutAuth>
</template>
