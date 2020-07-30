# Vue Day 1

## 一、邂逅Vuejs

### 1. 认识Vuejs

- 为什么学习Vuejs

- Vue的读音

- Vue的渐进式

- Vue的特点

### 2. 安装Vue

- CDN引入
- 下载引入
- NPM安装

### 3. Vue的初体验

- Hello Vuejs

	- mustache ---> 体验Vue响应式

- Vue列表展示

	- v-for

	- 后面给数组追加元素的时候，新的元素也可以在界面中渲染出来

- vue计数器小案例
  
	- 事件监听: click -> methods



### 4. Vue中的MVVM

### 5. 创建Vue时, options可以放哪些东西

- el:
- data:
- methods:

- 生命周期函数

## 二、插值语法

- mustachei语法
- v-once
- v-html
- v-text
- v-pre:{}
- v-cloak:斗篷

## 三、v-bind

### 1.v-bind绑定基本属性
- v-bind:sr
- :href
- 

### 2. v-bind动态绑定class

- 对象语法:作业：class='{类名：boolen}'
- 数组语法

### 3. v-bind动态绑定style

- 对象语法
- 数组语法

## 四、 计算属性

### 1.计算属性的本质

- fullname:(set(),get())

### 2.计算属性和methods对比

- 计算属性在多次使用时，只会调用一次
- 它是有缓存的

## 五、事件监听

### 1.事件监听基本使用

### 2.参数问题

- btnClick
- btnClick(event)
- btnClick(abc,event) -> $event

### 3.修饰符

- stop
- prevent
- enter
- once
- native

## 六、条件判断

### 1.v-if/v-else/v-else-if

### 2.登录小案例

### 3.v-show

- v-show和v-if的区别

## 七、循环遍历

### 1.遍历数组

### 2.遍历对象

- value
- value，key
- value，key，index

### 3.数组方法的响应式

### 4.作业的完成

## 八、购物车案例

## 九、v-model的使用

### 1.v-model的基本使用

- v-model =》v-bind:value,v-on:input

### 2.v-model和radio、checkbox、select

### 3.修饰符

- lazy
- number
- trim

## 十、组件化开发

### 1.认识组件化

### 2.组件的基本使用

### 3.全局组件和局部组件

### 4.父组件和子组件

### 5.注册组件的语法糖

### 6.模板的分离写法

- script
- template

### 7.数据存放

- 子组件不能访问父组件
- 子组件中有自己的data，而且必须是一个函数
- 为什么是一个函数

### 8.父子组件的通信

- 父传子：props
- 子传父：$emit

### 9.项目运行

- npm install
- npm run serve