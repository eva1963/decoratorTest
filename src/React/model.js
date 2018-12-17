import {observable, action} from "mobx";

export class Model {
    @observable arg1 = "arg1";
    @observable arg2 = "arg2";
    @observable num = 1;


    @action.bound 
    getArg1() {
        return this.arg1;
    }

    @action.bound
    plus() {
        return ++this.num;
    }
}