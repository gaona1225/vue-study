<template>
  <div>
    <button type="button" class="btn" @click="showModal">打开Modal</button>
    <modal v-show="isModalVisible" @close="closeModal" />
    <router-link to="/router-test">router-test</router-link>
    <div class="container">
        <div class="block">
            <vue-button btn-text="Primary" btn-type="primary"></vue-button>
            <vue-button btn-text="Secondary" btn-type="secondary"></vue-button>
            <vue-button btn-text="Success" btn-type="success"></vue-button>
            <vue-button btn-text="Danger" btn-type="danger"></vue-button>
            <vue-button btn-text="Warning" btn-type="warning"></vue-button>
            <vue-button btn-text="Info" btn-type="info"></vue-button>
            <vue-button btn-text="Light" btn-type="light"></vue-button>
            <vue-button btn-text="Dark" btn-type="dark"></vue-button>
            <vue-button btn-text="Link" btn-type="link"></vue-button>
        </div>

        <div class="block">
            <vue-button btn-text="Primary" btn-outline="primary"></vue-button>
            <vue-button btn-text="Secondary" btn-outline="secondary"></vue-button>
            <vue-button btn-text="Success" btn-outline="success"></vue-button>
            <vue-button btn-text="Danger" btn-outline="danger"></vue-button>
            <vue-button btn-text="Warning" btn-outline="warning"></vue-button>
            <vue-button btn-text="Info" btn-outline="info"></vue-button>
            <vue-button btn-text="Light" btn-outline="light"></vue-button>
            <vue-button btn-text="Dark" btn-outline="dark"></vue-button>
            <vue-button btn-text="Link" btn-outline="link"></vue-button>
        </div>

        <div class="block">
            <vue-button btn-text="Large button" btn-type="primary" btn-size="lg"></vue-button>
            <vue-button btn-text="Default button" btn-type="primary"></vue-button>
            <vue-button btn-text="Small button" btn-type="primary" btn-size="sm"></vue-button>
        </div>

        <div class="block">
            <vue-button btn-text="Large block button" btn-type="primary" btn-size="lg" btn-block="true"></vue-button>
            <vue-button btn-text="Small block button" btn-type="primary" btn-size="sm" btn-block="true"></vue-button>
        </div>

        <div class="block">
            <vue-button btn-text="Primary" btn-type="primary" btn-size="lg" btn-active="true"></vue-button>
        </div>
    </div>
  </div>
</template>

<script>
import Modal from './Modal';
import vueButton from './Button';
export default {
  name: 'Demo',
  components: {
    Modal,
    vueButton
  },
  data () {
    return {
        isModalVisible: false
    }
  },
  methods: {
    showModal: function () {
      this.isModalVisible = true;
    },
    closeModal: function () {
      this.isModalVisible = false;
    }
  }
}
</script>

<style scoped>
    .container {
        padding-top: 20px;
    }
    .block {
        margin-top: 20px;
    }
</style>