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
                name: '《操作系统》',
                date: '2006-2',
                price: 59.00,
                count: 1
            },
            {
                id: 3,
                name: '《编程技术》',
                date: '2008-10',
                price: 39.00,
                count: 1
            },
            {
                id: 4,
                name: '《数据库基础》',
                date: '2005-6',
                price: 86.00,
                count: 1
            }
        ]
    },
    methods: {
        /* getFinalPrice(price) {
            return '￥' + price.toFixed(2);
        } */
        decrement(index) {
            this.books[index].count--;
        },
        increment(index){
            this.books[index].count++;
        },
        removeHandle(index){
            this.books.splice(index,1);
        }
    },
    computed: {
        totalPrice() {
            // 1.普通的for循环
            // let totalPrice = 0;
            // for (let i = 0; i < this.books.length; i++){
            //     totalPrice += this.books[i].price * this.books[i].count;
            // }
            // return totalPrice;

            // 2. for (let i in this.books)
            // let totalPrice = 0;
            // for (let i in this.books) {
            //     totalPrice += this.books[i].price * this.books[i].count;
            // }
            // return totalPrice;

            // 3.for (let i of this.books)
           /*  let totalPrice = 0;
            for (let book of this.books) {
                totalPrice += book.price * book.count;
            }
            return totalPrice;
 */
            // 4.reduce
            return this.books.reduce(function (preValue, book) {
                return preValue + book.price * book.count;
            }, 0)
        }
    },
    filters: {
        showPrice(price) {
            return '￥' + price.toFixed(2);
        }
    }
})

// 编程范式： 命令式编程/声明式编程
// 编程范式： 面向对象编程（第一公民：对象）/函数式编程（第一公民：函数）
// 高阶函数：高阶函数的参数可能也为函数： filter/map/reduce
const nums = [10,20,30,50,222,333,40,643];

let total = nums.filter(n => n < 100).map(n => n * 2).reduce((pre, n) => pre +n);
console.log(total);

/* let total = nums.filter(function (n) {
    return n < 100;
}).map(function (n){
    return n *     2;
}).reduce(function (prevValue, n) {
    return prevValue + n;
}, 0);

console.log(total); */

// filter中的回调函数有一个要求：必须返回一个Boolean值
// true：当返回true时，函数内部会自动将这次回调的n加入新的数组中
// false： 当返回false时，函数内部会滤过这次的n（元素）

// 1.filter函数的使用
/* let newNums = nums.filter(function (n) {
    return n < 100;
});
console.log(newNums); */

// map函数中的回调函数：返回新数组的元素//映射操作
// 2.map函数的使用
/* let new2Nums = nums.map(function(n){
    return n * 2;
});
console.log(new2Nums); */


// 3.reduce函数的使用
// reduce 作用对数组中的内容进行汇总
// reduce(参数一,参数二),参数一通常为一个函数，参数二为
// preValue:是上一个
/* let total = newNums.reduce(function (preValue, n) {
    return preValue + n;
},0);
console.log(total); */

//第一次： preValue 0 n 10
//第二次： preValue 10 n 20
//第三次： preValue 30 n 30
//第四次： preValue 60 n 50
//第五次： preValue 110 n 40
//第六次： preValue 150 

// 1.需求： 去除所有小于100的数字
/* let newNums = [];
for (let n of nums){
    if (n < 100){
        newNums.push(n);
    }
} */

// 2.需求：将所有小于100的数字进行转化： 全部乘2
/* let new2Nums = [];
for (let n of newNums) {
    new2Nums.push(n * 2);
}
 
console.log(new2Nums);
*/
// 3.需求： 及那个所有new2Nums数字相加，得到最终的结果
/* let total = 0;
for (let n of new2Nums) {
    total += n;
}

console.log(total);
 */