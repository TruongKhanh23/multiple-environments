<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import editMetaData from './composables/meta'

const environment = import.meta.env.VITE_ENVIRONMENT || 'Unknown Environment'
const productMetaData = {
  url: 'https://multiple-environments-umber.vercel.app/',
  title: 'Senku Multi-Environments',
  description:
    'Đơn giản, nhanh chóng, 100% trực tuyến và hoàn tất với chỉ vài cú nhấp chuột. Tham gia ngay!',
  thumbnailPath: 'thumbnail_home.png',
}
editMetaData({
  metaUrl: productMetaData?.url ?? '',
  metaTitle: productMetaData?.title ?? '',
  metaDescription: productMetaData?.description ?? '',
  metaThumbnailPath: productMetaData?.thumbnailPath
    ? window.location.origin + '/' + productMetaData?.thumbnailPath
    : '',
})
//window.prerenderReady = true
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld :msg="`Hello ${environment} - Test delete branch`" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
