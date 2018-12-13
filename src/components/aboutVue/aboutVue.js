export default {
  name: 'aboutEle',
  data () {
    return {
      value: '',
      lazy_value: 'lazy_value',
      trim_value: '  trim_value  ',
      number_value: '1234abcd',
      normal_text: '',
      stop_text: '',
      self_text: '',
      once_text: '',
      capture_text: '',
      native_value: true,
      mouse_text: ''
    }
  },
  methods: {
    eventTest (text, block_name) {
      this[`${block_name}_text`] += text
    },
    clearClickResult (block_name) {
      this[`${block_name}_text`] = ''
    },
    alertEvent () {
      alert('点击事件')
    }
  },
  components: {}
}
