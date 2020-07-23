// 1.导入的{}中定义的变量
import {flag, sum} from "./aaa.js";
if (flag) {
    console.log("小明很聪明");
}

// 2.直接导入export定义的变量
import {num1,height} from "./aaa.js";
console.log(num1);
console.log(height);

// 3.导入export的function
import {mul,Person} from "./aaa.js";
console.log(mul(20,20));

// 4.导入export的class
const p = new Person();
p.run();

// 5.导入默认的值可以自定义名字
import addr from "./aaa.js";
addr('你好啊');

// 6.统一全部导入
import * as aaa from './aaa.js';
console.log(aaa.flag);