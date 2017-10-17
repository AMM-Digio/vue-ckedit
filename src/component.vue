<template>
  <div class="ckeditor">
    <textarea :id="id" :value="value"></textarea>
  </div>
</template>

<script>
  // import componentdependency from 'components/dependency'

  var CKEDITOR = (typeof (window.CKEDITOR) === 'undefined') ? { } : window.CKEDITOR

  export default {
    props: {
      value: {
        type: String
      },
      id: {
        type: String,
        default: 'editor',
        required: true
      },
      height: {
        type: String,
        default: '200px'
      },
      toolbar: {
        type: Array,
        default: () => [['Format'], ['Bold', 'Italic'], ['Undo', 'Redo']]
      },
      language: {
        type: String,
        default: 'en'
      },
      extraplugins: {
        type: String,
        default: ''
      }
    },
    beforeUpdate () {
      const ckeditorId = this.id
      if (this.value !== CKEDITOR.instances[ckeditorId].getData()) {
        CKEDITOR.instances[ckeditorId].setData(this.value)
      }
    },
    mounted () {
      const ckeditorId = this.id
      const ckeditorConfig = {
        toolbar: this.toolbar,
        language: this.language,
        height: this.height,
        extraPlugins: this.extraplugins
      }
      CKEDITOR.replace(ckeditorId, ckeditorConfig)
      CKEDITOR.instances[ckeditorId].setData(this.value)
      CKEDITOR.instances[ckeditorId].on('change', () => {
        let ckeditorData = CKEDITOR.instances[ckeditorId].getData()
        if (ckeditorData !== this.value) {
          this.$emit('input', ckeditorData)
        }
      })
    },
    beforeDestroy () {
      const ckeditorId = this.id

      if (CKEDITOR.instances[ckeditorId]) {
        try {
          CKEDITOR.instances[ckeditorId].destroy(true)
        } catch (e) {}
      }
    }
  }
</script>

<style scoped>
  .ckeditor::after {
    content: "";
    display: table;
    clear: both;
  }
</style>
