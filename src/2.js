
function log(target) {
    // 传进来的目标类
    console.log('log====>',target);

    // 拿到当前类的原型上的所有属性
    const desc = Object.getOwnPropertyDescriptors(target.prototype)
    console.log('desc====>',desc);
}

/* 可以配合科里化来传值 */
function testable(bool) {
    return function(target) {
        console.log(bool, target);
    }
}


@log
@testable(false)
class Numberic {
    add(...nums) {
        return nums.reduce((p, n) => (p + n), 0)
    }
}
new Numberic().add(1, 3);


    /* 
        console.log('log====>',target)的输出结果：

            var Numberic = log(_class = a) || _class;

            a = function () {
                function Numberic() {
                    _classCallCheck(this, Numberic);
                }

                _createClass(Numberic, [{
                    key: "add",

                    // @readonly PI = 3.1413526;

                    // @valudate
                    value: function add() {
                        for (var _len3 = arguments.length, nums = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                            nums[_key3] = arguments[_key3];
                        }

                        return nums.reduce(function (p, n) {
                            return p + n;
                        }, 0);
                    }
                }]);

                return Numberic;
            }()
    */