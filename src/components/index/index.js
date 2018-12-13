export default {
  name: 'aboutEle',
  data () {
    return {
      isCollapse: false,
      active_menu_home: 'aboutEle',
      min_height: document.body.clientHeight - 60
    }
  },
  methods: {
    activeRoute (val) {
      // 通过js后退时激活样式也存
      this.active_menu_home = val.name
      switch (val.name) {
        case 'HelloWorld':
          this.active_menu_home = 'HelloWorld'
          window.localStorage.setItem('active_menu_home', 'HelloWorld')
          this.current_open_menu = 'HelloWorld'
          break
        case 'aboutEle':
          this.active_menu_home = 'aboutEle'
          window.localStorage.setItem('active_menu_home', 'aboutEle')
          this.current_open_menu = 'aboutEle'
          break
        case 'aboutVue':
          this.active_menu_home = 'aboutVue'
          window.localStorage.setItem('active_menu_home', 'aboutVue')
          this.current_open_menu = 'aboutVue'
          break
        default:
          this.active_menu_home = ''
          window.localStorage.removeItem('active_menu_home')
          // if (this.$refs['menu']) {
          //   if (this.current_open_menu) {
          //     //关闭当前展开的菜单
          //     this.$refs['menu'].close(this.current_open_menu);
          //     this.current_open_menu = '';
          //   }
          // }
          break
      }
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    toOuterLink (url) {
      window.open(url, '_blank')
    }
  },
  watch: {
    '$route': function () {
      this.activeRoute(this.$route)
    }
  },
  mounted () {
    this.activeRoute(this.$route)
    this.$nextTick(function () {
      let timer
      window.onresize = () => { // 优化resize事件
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          this.min_height = document.body.clientHeight - 60
        }, 1000)
      }
    })
  },
  components: {}
}
