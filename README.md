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

  
参考書籍:[ 作りながら学ぶ React入門](https://www.amazon.co.jp/%E4%BD%9C%E3%82%8A%E3%81%AA%E3%81%8C%E3%82%89%E5%AD%A6%E3%81%B6React%E5%85%A5%E9%96%80-%E5%90%89%E7%94%B0%E8%A3%95%E7%BE%8E-ebook/dp/B07BB96LXJ?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.dGfEEJ68xoDsZK-FSeywFoXyn8eCePORV-GN_hb5kD_N4fdCjfB2bpJmPLFTKrnUszWu6Xg34D-WvN3GOKzCrBF3zaho-GfwYIk2mWnbe15JUF_SJs2qLyrPD_GCwXNr6ca4yly_hme58ByPG1sx6zbQue1d62Re7QZwkihUdaEOtL6V4phKJSkTcTcg9nQmirekXggRfOAYbpDd81gJuyCbShRaFCkVvws5saXdX_gXojbiVFCbKCfFTZSQ0ZRniJFI4Nq0Oq6X6-XBpALxnR_ArJ8O_bbspd8WsfodxFg.FMv94BPiQmHNnllDNMZtydLOoPrV0D6wKCpAJDTYLqw&qid=1721108162&sr=8-1&linkCode=ll1&tag=ka2yukimori-22&linkId=27930a5a9ca238eccd7df94c50db6a96&language=ja_JP&ref_=as_li_ss_tl)
  
  
---  

📖[Document](document.md)
