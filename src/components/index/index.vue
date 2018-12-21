<template>
  <div class="v-index">
    <header class="v-index--header">
      <el-button @click="isCollapse=!isCollapse">
        <template v-if="isCollapse">展开</template>
        <template v-else>收起</template>
      </el-button>
    </header>
    <div class="v-body-wrap" :style="{'min-height':min_height+'px'}">
      <div class="v-body-left" :class="{'v-menu-collapse':isCollapse}">
        <el-menu :default-active="active_menu_home" class="home-menu" :collapse="isCollapse" :router="true" @open="handleOpen" @close="handleClose">
          <el-menu-item index="HelloWorld" :route="{name:'HelloWorld'}">
            <i class="el-icon-location"></i>
            <span slot="title">主页</span>
          </el-menu-item>
          <el-menu-item index="aboutEle" :route="{name:'aboutEle'}">
            <i class="el-icon-menu"></i>
            <span slot="title">elementUI相关</span>
          </el-menu-item>
          <el-submenu index="aboutVue">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span slot="title">vue相关</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="vueModifier" :route="{name:'vueModifier'}">vue修饰符</el-menu-item>
              <el-menu-item index="aboutAxios" :route="{name:'aboutAxios'}">axios相关</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-star-on"></i>
              <span>友情链接</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="kcs">
                <a class="v-menu--outer-link" @click.stop="toOuterLink('https://kcs.lepeen.com')">快车手</a>
              </el-menu-item>
              <el-menu-item index="scyd">
                <a class="v-menu--outer-link" @click.stop="toOuterLink('https://scyd.titansaas.com')">生财有道</a>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </div>
      <div class="v-body-right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style lang="scss" type="text/css" src="./index.scss"></style>
<script src="./index.js"></script>
