<script>
import MainLayout from '@layouts/main'
import { appInfo } from '@/package.json'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appInfo.description }],
  },
  components: {
    MainLayout,
  },
}
</script>

<template>
  <MainLayout>
    Home Page
  </MainLayout>
</template>
