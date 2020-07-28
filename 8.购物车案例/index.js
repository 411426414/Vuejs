const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: '《算法导论》',
        date: '2006-9',
        price: 85.00,
        count: 1
      },
      {
        id: 2,
        name: '《UNIX编程艺术》',
        date: '2006-9',
        price: 59.00,
        count: 1
      },
      {
        id: 3,
        name: '《编程珠玑》',
        date: '2008-10',
        price: 39.00,
        count: 1
      },
      {
        id: 4,
        name: '《代码大全》',
        date: '2006-3',
        price: 128.00,
        count: 1
      }
    ]
  },
  methods: {
    decrement(index) {
      this.books[index].count--
    },
    increment(index) {
      this.books[index].count++
    },
    removeHandle(index) {
      this.books.splice(index,1)
    }
    // getFinalPrice(price) {
    //   return '¥' + price.toFixed(2)
    // }
  },
  computed: {
    totalPrice() {
      // 1. 普通for循环
      // let totalPrice = 0
      // for (let i = 0; i < this.books.length ; i++) {
      //   totalPrice +=this.books[i].price * this.books[i].count
      // }
      // return totalPrice;

      // 2. for(let i in this.books)
      // let totalPrice = 0
      // for(let i in this.books){
      //   totalPrice +=this.books[i].price * this.books[i].count
      // }
      //
      // return totalPrice

      // 3. for(let i of this.books)
      let totalPrice = 0
      for(let item of this.books) {
        totalPrice += item.price * item.count
      }
      return totalPrice
    }

    // reduce
  },
  filters: {
    showPrice(price) {
      return '¥' + price.toFixed(2)
    }
  }
})

// 编程范式: 命令式编程/声明式编程
// 编程范式: 面向对象编程(第一公民：对象)/函数式编程(第一公民：函数)
// filter/map/reduce
// filter中的回调函数有一个要求：必须返回一个Boolean值
// true:当返回true时，函数内部会自动将这次回调的n加入到新的数組中
// false: 当返回false,函数内部会过滤掉这次的n
const nums = [10,90,20,80,30,60,70,50,40]

// 1.filter函数的使用
let newNums = nums.filter(function (n) {//n依次取出nums数组的元素
  return n < 60   //从数组取得的元素与60相比，返回布尔值，如果为真加入到新的数組中，否则过滤掉不添加
})
console.log(newNums);


// // 1.需求:取出所有小于60的数字
// let newNums = []
// for (let n in nums) {
//   if (n<60){
//     newNums.push(n)
//   }
// }
// console.log(newNums);
//
// // 2.将所有小于100的数字进行转化:全部*2
// newNum = []
// for (let n of newNum) {
//   newNum.push(n*2)
// }
// console.log(newNum);
//
// // 3.将所有new2Nums数字相加，得到最终的记过
// let total = 0
// for (let n in newNum) {
//   total += n
// }
// console.log(total);