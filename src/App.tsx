import React, { Component } from 'react';
import Person from './Person'
import TouchStat from './TouchStat'
import BackStat from './BackStat'
import './style.css'
import store from './store/store'

class App extends Component {

    /// < 数据初始化
    constructor(props:any) {
        super(props);
        this.state = store.getState();
        this.OnSubmit = this.OnSubmit.bind(this)
        this.storeChange = this.storeChange.bind(this);
        store.subscribe(this.storeChange);
    }

    public readonly state:Readonly<any> = {
        state:store.getState()
    }

    storeChange() {
        this.setState(store.getState());
    }

    /// < 渲染
    render() {
        return (
            <div className= "back" >
                <p className="title0" > 返程复工情况登记 </p>
                <div className = "content" >
                    <p className="title1" > 返程复工情况登记表 </p>
                        < p className = "text-desc1" > 为加强新型冠状病毒疫情防控和应对工作，确保员工返程安全，请尽快填报以下情况，带“*”为必填项，信息填报完毕请点击“提交”。</p>
                            < Person />
                            <TouchStat />
                            < BackStat />
                        {
                            this.checkData() ? <button className="SubmitBtn" onClick = { this.OnSubmit } > 提交 </button> : 
                                < button className="SubMitBtnInvalid" > 提交 </button>
                        }
                </div>
            </div>
        )
    }

    /// < 检查数据合法性
    checkData() {
        return this.state.pStatus && this.state.tStatus && this.state.bStatus;
    }

    /// < 提交按钮响应
    OnSubmit() {
        if (this.checkData()) {
            this.submitData();
        }
    }

    /// < 提交数据
    submitData() {
        console.log(this.state.personalInf)
        console.log(this.state.touchHist)
        console.log(this.state.backInfo)
    }
}

export default App;
