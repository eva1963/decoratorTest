
function log(target) {
    /* 装饰类，不存在 key, descriptor */

    // 拿到当前类的原型上的所有属性
    const desc = Object.getOwnPropertyDescriptors(target.prototype)

    console.log('log====>', target);
    console.log("desc====>", desc);

    // 划重点啦
    for (const key of Object.keys(desc)) {
        if (key === "constructor") {
            continue;
        }

        const func = desc[key].value;
        if ("function" === typeof func) {
            Object.defineProperty(target.prototype, key, {
                value(...args) {
                    console.log("before" + key);
                    const ret = func.apply(this, args);
                    console.log("after" + key);

                    return ret;
                }
            })
        }
    }
}

function readonly(target, key, description) {
    console.log('readonly====>', target, key, description);

    description.writable = false;
}

function valudate(target, key, descriptor) {

    console.log('valudate====>', target, key, descriptor);
    const func = descriptor.value;

    descriptor.value = function (...args) {
        for (let num of args) {
            if ("number" !== typeof num) {
                throw new Error(`${num} is not a number`);
            }
        }
        return func.apply(this.args);
    }
}

@log
class Numberic {
    @readonly 
    PI = 3.1413526;

    @valudate
    add(...nums) {
        return nums.reduce((p, n) => (p + n), 0)
    }

}

// new Numberic().PI=120;
// new Numberic().add(1, 3,"a");
new Numberic().add(1, 3);