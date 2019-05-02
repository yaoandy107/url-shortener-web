<template>
  <div class="home">
    <h2 class="title">短網址服務</h2>
    <p class="description">在下方輸入框內輸入您預縮短的網址，並按右方的加號，將會產生新的短網址。<br>
      <span class="warning">生成之短網址有效期為一個月，超過一個月會自動刪除。</span>
    </p>
    <el-input
      placeholder="請輸入您的網址"
      v-model="inputUrl"
      class="input"
      @keyup.enter="generateShortUrl"
    >
      <el-button
        slot="append"
        icon="el-icon-plus"
        @click="generateShortUrl"
      ></el-button>
    </el-input>
    <h3>{{shortenUrl}}</h3>
    <h2 class="title">何謂短網址？</h2>
    <p class="description">短網址，又稱短址、縮址、網址縮短、縮短網址、URL 縮短等，指的是一種網際網路上的技術與服務。<br><br>
      此服務可以提供一個非常短小的 URL 以代替原來的可能較長的 URL，將長的 URL 位址縮短。<br><br>
      用戶存取縮短後的 URL 時，通常將會重新導向到原來的URL。<br><br>
      大多數的URL縮短服務都提供有 API。URL 縮短服務在 Twitter 等一些每條訊息有字數限制的微部落格及其他社群網路中有廣泛的使用。
    </p>
  </div>
</template>

<script>

export default {
  name: 'url-shortener',
  data: function () {
    return {
      select: '',
      inputUrl: '',
      shortenUrl: ''
    }
  },
  methods: {
    generateShortUrl () {
      this.axios.get(`https://wasay.app?url=${this.inputUrl}`).then((response) => {
        this.shortenUrl = response.data
      }).catch((error) => {
        this.shortenUrl = error.response.data.message
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px;
  .title {
    margin: 0;
    &:nth-child(n + 2) {
      margin: 24px 0 0 0;
    }
  }
  .description {
    max-width: 450px;
    line-height: 1.5;
    text-align: start;
    .warning {
      box-sizing: border-box;
      display: inline-block;
      width: 100%;
      color: #f44336;
      padding: 16px;
      background: #f6f6f6;
      margin-top: 8px;
      border-radius: 5px;
    }
  }
  .input {
    max-width: 450px;
  }
}
</style>
