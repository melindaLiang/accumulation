<template>
  <div class="about-vue">
    <div class="question-list">
      <h3 class="v-title">vue修饰符</h3>
      <div class="v-content">
        <h4 class="v-title">普通input</h4>
        <div class="v-input-example--wrap">
          <el-input type="text" size="small" v-model="value"></el-input>
          <span class="v-display-block">{{value}}</span>
        </div>
      </div>
      <div class="v-content">
        <h4 class="v-title">.lazy:失焦才更新视图</h4>
        <div class="v-input-example--wrap">
          <div class="el-input el-input--small">
            <input type="text" autocomplete="off" class="el-input__inner" v-model.lazy="lazy_value">
          </div>
          <span class="v-display-block">{{lazy_value}}</span>
        </div>
      </div>
      <div class="v-content">
        <h4 class="v-title">.trim:去掉前后空格</h4>
        <div class="v-input-example--wrap">
          <div class="el-input el-input--small">
            <input type="text" autocomplete="off" class="el-input__inner" v-model.trim="trim_value">
          </div>
          <span class="v-display-block">{{trim_value}}</span>
        </div>
      </div>
      <div class="v-content">
        <h4 class="v-title">.number:如果你先输入数字，那它就会限制你输入的只能是数字。如果你先输入字符串，那它就相当于没有加.number,键盘输入有效，直接复制没有效果</h4>
        <div class="v-input-example--wrap">
          <div class="el-input el-input--small">
            <input type="text" autocomplete="off" class="el-input__inner" v-model.number="number_value">
          </div>
          <span class="v-display-block">{{number_value}}</span>
        </div>
      </div>
      <div class="v-content">
        <h4 class="v-title">普通事件</h4>
        <div class="v-event-wrap">
          <div class="v-parent" @click="eventTest('点击了父级 ','normal')">
            <span>我是父级</span>
            <div class="v-child" @click="eventTest('点击了子元素 ','normal')">我是子元素</div>
          </div>
          <div class="click-result">{{normal_text}}</div>
          <el-button type="primary" size="mini" class="clear-click-result" @click="clearClickResult('normal')">清空</el-button>
        </div>
      </div>
      <div class="v-content">
        <h4 class="v-title">.stop：相当于调用了event.stopPropagation()方法</h4>
        <div class="v-event-wrap">
          <div class="v-parent" @click="eventTest('点击了父级 ','stop')">
            <span>我是父级</span>
            <div class="v-child" @click.stop="eventTest('点击了子元素 ','stop')">我是子元素</div>
          </div>
          <div class="click-result">{{stop_text}}</div>
          <el-button type="primary" size="mini" class="clear-click-result" @click="clearClickResult('stop')">清空</el-button>
        </div>
      </div>
      <div class="v-content">
        <h4 class="v-title">.prevent：相当于调用了event.preventDefault()方法</h4>
        <div>
          <a href="https://www.baidu.com" target="_blank" @click="alertEvent()">链接到百度的普通链接</a>
        </div>
        <div>
          <a href="https://www.baidu.com" target="_blank" @click.prevent="alertEvent()">链接到百度的prevent链接</a>
        </div>
      </div>
      <div class="v-content">
        <h4 class="v-title">.self：点击自身才会触发。比如父级上的事件点击子元素不会触发。效果和.stop是相同的，但用法有点区别。.stop是为了阻止自身事件触发其他事件，.self是为了避免其他事件触发自身</h4>
        <div class="v-event-wrap">
          <div class="v-parent" @click.self="eventTest('点击了父级 ','self')">
            <span>我是父级</span>
            <div class="v-child" @click="eventTest('点击了子元素 ','self')">我是子元素</div>
          </div>
          <div class="click-result">{{self_text}}</div>
          <el-button type="primary" size="mini" class="clear-click-result" @click="clearClickResult('self')">清空</el-button>
        </div>
      </div>
      <div class="v-content">
        <h4 class="v-title">.once：只触发一次</h4>
        <div class="v-event-wrap">
          <div class="v-parent" @click.once="eventTest('点击了父级 ','once')">
            <span>我是父级</span>
          </div>
          <div class="click-result">{{once_text}}</div>
          <el-button type="primary" size="mini" class="clear-click-result" @click="clearClickResult('once')">清空</el-button>
        </div>
      </div>
      <div class="v-content">
        <h4 class="v-title">.capture：事件触发从包含这个元素的顶层开始往下触发</h4>
        <div class="v-event-wrap">
          <div class="v-parent" @click.capture="eventTest('点击了父级 ','capture')">
            <span>我是父级</span>
            <div class="v-child" @click="eventTest('点击了子元素 ','capture')">我是子元素</div>
          </div>
          <div class="click-result">{{capture_text}}</div>
          <el-button type="primary" size="mini" class="clear-click-result" @click="clearClickResult('capture')">清空</el-button>
        </div>
      </div>
      <div class="v-content">
        <h4 class="v-title">.native：触发原生事件，switch不加.native不能触发click事件</h4>
        <el-switch v-model="native_value" @click.native="alertEvent()"></el-switch>
      </div>
      <div class="v-content">
        <h4 class="v-title">.left,.right,.middle：鼠标左键、右键及中间键触发</h4>
        <div class="v-event-wrap">
          <div class="v-parent" @click.left="eventTest('左键 ','mouse')" @click.right="eventTest('右键 ','mouse')" @click.middle="eventTest('中间键 ','mouse')">
            <span>我是父级</span>
          </div>
          <div class="click-result">{{mouse_text}}</div>
          <el-button type="primary" size="mini" class="clear-click-result" @click="clearClickResult('mouse')">清空</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" type="text/css" src="./aboutVue.scss"></style>
<script src="./aboutVue.js"></script>
