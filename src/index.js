function handleApiError(target, propertyKey, descriptor) {
    const func = descriptor.value;

    console.log(111, target, propertyKey, descriptor);
    return {
        /* 每次调用handleApiError，都要走一次get */
        get() {
            return (...args) => {
                /* args就是store调取被修饰的方法时的实参 */
                return Promise.resolve(func.apply(this, args)).catch(e => { console.log(e); });
            };
        },
        /* 每一次设置，都要冲更新，不过不懂这里需要设置什么，设置到哪里去了 */
        set(newValue) {
            return newValue;
        }
    };
}


class A {
    /* 此处方法用来调取API，获得数据，我们使用handleApiError装饰器，就避免了每次重复调取失败的操作 */
    @handleApiError
    fetchList(page) {
        list(3333);//list是一个调取接口的方法，这里仅做模拟
    }
}
function list(a) {console.log(a)}

/* 此处模拟我们在tsx文件中，通过this.store.fetchList(1)的方式调取第一页的数据 */
new A().fetchList(888);