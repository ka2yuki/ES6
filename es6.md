es6 以前.
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

// インスタンス作成
const jyankenInstance = new Jyanken();
jyankenInstance.poi();
jyankenInstance.__proto__.poi();

// 直接
Jyanken.prototype.poi();
```

es6 以降
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

// インスタンス作成
const jyankenES6Instance = new JyankenES6();
jyankenES6Instance.poi();
jyankenES6Instance.__proto__.poi();

// 直接
JyankenES6.prototype.poi(); // いぜんプロトタイプベースは変わらない。
```

[JavaScript オブジェクト入門 | MDN](https://developer.mozilla.org/ja/docs/Learn/JavaScript/Objects)  
ガイド：
- オブジェクトの基本
- オブジェクトプロトタイプ
- オブジェクト指向プログラミング
- JavaScript でのクラス
- JSON データの操作
- オブジェクト構築の練習  
  
etc..