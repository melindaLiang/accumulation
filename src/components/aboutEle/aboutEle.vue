<template>
  <div class="about-ele">
    <div class="question-list">
      <h3 class="v-title">在menu中加友情链接</h3>
      <div class="v-content">
        在'el-menu-item'标签中加子元素，在子元素上绑定click事件，并用'.stop'阻止冒泡事件
      </div>
      <h3 class="v-title">在menu中用一组菜单对应一个router的不同tab</h3>
      <div class="v-content">
        在el-menu-item的route中通过query或者params设置参数，至于menu本身的激活，可以监听$route，根据name以及query、params给激活的参数赋值（default-active），同时在这个页面监听$route，更新tab
      </div>
      <h3 class="v-title">在表格中悬浮显示一个模块，模块可超出表格范围，规避overflow:hidden</h3>
      <div class="v-content">
        使用el-popover组件
      </div>
    </div>
    <h1>elementUI相关的知识点</h1>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>
<style lang="scss" type="text/css" src="./aboutEle.scss"></style>
<script src="./aboutEle.js"></script>
