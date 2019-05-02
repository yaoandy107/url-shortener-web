<template>
  <div id="app">
    <div id="nav">
      <h2 class="title">BlackMaple's Website</h2>
      <router-link to="/url-shortener">短網址</router-link>
      <router-link to="/about">關於</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
html,
body {
  height: 100%;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  background-color: #2c3e50;
  color: white;
  font-size: 18px;
  .title {
    margin: 0;
    padding: 16px;
    letter-spacing: 2px;
  }
  a {
    display: inline-block;
    color: white;
    font-weight: bold;
    padding: 8px 24px;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
      border-bottom: #42b983 3px solid;
    }
  }
}
</style>
