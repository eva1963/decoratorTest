import * as React from "react";

export default class Test extends React.Component {
    render() {
        return <h1> 
            {/* todo: 这样打印出来react原型上的一些东西，然后如果要判断一个组件是否是react组件，只需判断其原型上的$$typeof是否为指定的值 */}
            {console.log(<span>123</span>)}
        </h1>
    }
}

/* 
    具体参考资料：http://tech.colla.me/zh/show/why_react_tags_element_with_$$typeof
*/