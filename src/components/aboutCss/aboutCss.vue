<template>
  <div class="about-css">
    <h1>CSS相关的知识点</h1>
    <div class="question-list">
      <h3 class="v-title">一行或n行长度不够显示...</h3>
      <div class="v-content">
        <el-input type="text" size="small" class="overfow-text-input" v-model="overflow_text"></el-input>
        <div class="overfow-text-display">{{ overflow_text }}</div>
        <div class="overfow-text-display-2">{{ overflow_text }}</div>
      </div>
      <h3 class="v-title">媒体查询：超过1440px，input长度为300px,否则为200px</h3>
      <div class="v-content">
        <el-input type="text" size="small" class="input-for-media" v-model="text_for_media"></el-input>
      </div>
      <h3 class="v-title">如何让元素支持height:100%效果:1.父级设置显示的高度值 2.子元素使用绝对定位</h3>
      <div class="v-content">
        <div>min-height:100px</div>
        <div class="v-parent" style="min-height:100px">
          <div class="v-child">我是子元素</div>
        </div>
        <div>height:100px</div>
        <div class="v-parent" style="height:100px">
          <div class="v-child">我是子元素</div>
        </div>
        <div>min-height:100px + 绝对定位</div>
        <div class="v-parent" style="min-height:100px;position: relative;">
          <div class="v-child" style="position:absolute">我是子元素</div>
        </div>
      </div>
      <h3 class="v-title">浮动及清除浮动</h3>
      <div class="v-content">
      </div>
    </div>
  </div>
</template>
<style lang="scss" type="text/css" src="./aboutCss.scss"></style>
<script src="./aboutCss.js"></script>
