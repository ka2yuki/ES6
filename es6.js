// es6 以前.
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

// es6 以降
class Jyanken {
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