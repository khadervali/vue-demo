<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <div class="dstny-base-theme">
      <div class="btn-group">
        <button type="button" @click="changeBtnSize('small')">Size sm</button>
        <button type="button"  @click="changeBtnSize('large')">Size L</button>
        <button type="button" @click="changeBtnSize('extra-large')">Size XL</button>
        <button type="button" @click="changeBtnColor('primary')">Color Primary</button>
        <button type="button" @click="changeBtnColor('secondary')">Color Secondary</button>
      </div>
      <div class="result-btns">
        <dstny-button 
          :type="'button'"
          :size="size"
          :variant="color"
          :disabled="'false'"
          :label="'Dstny Button CTA'"
        />
      </div>
      </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'
import { DstnyButton } from '@telepo/dstny-ds/dist/dstny-ds-vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    DstnyButton
  },
  data() {
        return {
            size: 'large',
            color: "primary",
        };
    },
  methods: {
    changeBtnSize(size) {
      this.size = size;
    },
    changeBtnColor(color) {
      this.color = color;
    }
  }
}
</script>

<style>
@import '@telepo/dstny-ds/dist/dstny-ds/css/dstny-base.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.btn-group {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 30%;
  margin: auto;
}
.btn-group button {
  margin: auto;
  color: #fff;
  background-color: #0d6efd;
  border-color: #0d6efd;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: 400;
  line-height: 1.5;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
}
.result-btns {
  display: flex;
  justify-content: center;
}
</style>
