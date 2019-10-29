<!--
 * @Author: 解恒伟
 * @Date: 2019-10-24 12:29:22
 * @LastEditors: OBKoro1
 * @LastEditTime: 2019-10-28 19:18:27
 * @Description:
 -->
<template>
  <div class="index">
    <div class="loginForm">
      <Form ref="formInline" :model="loginForm" :rules="loginRule">
        <FormItem>
          <h2 class="sysname">iview框架测试</h2>
        </FormItem>
        <FormItem prop="userName">
          <Input type="text" v-model="loginForm.userName" placeholder="userName">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="loginForm.password" placeholder="Password">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formInline')">{{$t('signin')}}</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script src="./src/index.js"></script>
<style lang="less" src="./src/index.less"></style>