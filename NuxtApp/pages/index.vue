<template>
  <div class="container">
    <h1 class="title">
      ⚡️{{ title }}🔥
    </h1>
    <pre class="text">
      {{ desc }}
    </pre>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    try {
      const response = await $axios.$get('https://badjoke.azurewebsites.net/api/random'); 
      return {
        title: 'SSR App runing on Azure functions',
        desc: response,
      };
    } catch (error) {
      console.log('Error', error);
      return {
        title: 'SSR App runing on Azure functions',
        desc: ':(',
      };
    }
  },
};
</script>

<style>
@keyframes enter {
  to { margin-top: 0; }
}

html,
body,
#__nuxt,
#__layout {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  font-size: 50px;
  font-weight: 700;
  color: tomato;
  font-family: Helvetica, Arial, sans-serif;
  margin-bottom: -20px;
}

.text {
  font-size: 30px;
  font-weight: 300;
  color: #444;
  margin-top: 80px;
  font-family: Helvetica, Arial, sans-serif;
  animation: enter 300ms ease-in-out forwards;
}
</style>