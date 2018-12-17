import * as React from "react";
import { observer, inject, Provider } from "mobx-react"

import { Model } from "./model.js";

const style={
    width: "100%",
    textAlign: "center",
    margin: "120px auto",
    fontSize: "20px"
}
const buttonStyle ={
    display: "inline-block",
    padding: "20px 40px",
    lineHeight: "35px",
    textAlign: "center",
    background: "#DF2B1F",
    borderRadius: "5px",
    color: "#fff"
}

@inject("store")
@observer  //如果不添加，数据不会跟踪
class Test extends React.Component {
    get store() {
        return this.props.store;
    }

    state = {
        view: ""
    }

    componentDidMount() {
        const span = <span>111</span>;
        // 通过下面的转换我们可以知道
        // const newSpan = JSON.parse(JSON.stringify(span));
        this.setState({
            view: span
        }, () => {
            // 失去了判断是否为一个react组件的最关键的东西$$typeof
            console.log(this.state.view);
            // 可以查看到我们设置的store池子有没有成功
            console.log(this.store);
        })
    }

   /*  // todo: 为什么这里不生效呢
    shouldComponentUpdate(props, state) {
        console.log(111, props, state);
        return false;
    } */

    componentDidUpdate(nextProps, nextState) {
        console.log("修改后的num====>", nextProps.store.num);
    }

    render() {
        return (
            <div style={style}>
                <h1>你已经是一个成熟的react了，要学会自己扩展编程能力</h1>
                <a href="javascript:;" onClick={this.store.plus} style={buttonStyle}>点击num+1</a>
                <h2>{this.store.num}</h2>
            </div>
        )
    }
}

const store = new Model();
export default function () {
    return (
        <Provider store={store}>
            <Test />
        </Provider>
    )
}
