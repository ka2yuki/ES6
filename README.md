# ES6 以前
```js
var Jyanken = (function () {
    function Jyanken(hand) {
        this.hand = hand;
    }

    Jyanken.prototype.poi = function () {
        return this.hand = Math.floor(Math.random() * 3);
    };

    Jyanken.prototype.judge = function (your) {
        var judgment = (computer_hand - human_hand + 3) % 3;
        if (judgment = 0) {
            return "引き分け";
        } else if (judgment == 1) {
            return "勝ち";
        } else {
            return "負け";
        }
    };

    return Jyanken;
})();
```

# ES6 ～
```js
class JyankenES6 {
    constructor(hand) {
        this.hand = hand;
    }

    poi() {
        return this.hand = Math.floor(Math.random() * 3);
    }

    judge(your) {
        var judgment = (computer_hand - human_hand + 3) % 3;
        if (judgment = 0) {
            return "引き分け";
        } else if (judgment == 1) {
            return "勝ち";
        } else {
            return "負け";
        }
    }
}
```
使用方法：es6以前
```js
// インスタンス作成
const jyankenInstance = new Jyanken();
jyankenInstance.poi();
jyankenInstance.__proto__.poi();

// 直接
Jyanken.prototype.poi();
```

使用方法：es6～
```js
// インスタンス作成
const jyankenES6Instance = new JyankenES6();
jyankenES6Instance.poi();
jyankenES6Instance.__proto__.poi();

// 直接
JyankenES6.prototype.poi(); // いぜんプロトタイプベースは変わらない。
```

  
参考書籍:[ 作りながら学ぶ React入門](https://amzn.to/3xYvOiL)
  
  
---  

📖[Document](document.md)
