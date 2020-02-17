import React, { Component } from 'react';
import InfoItem from './subcomp/InfoItem'
import InfoName from './subcomp/InfoName';
import { BI_Date, BI_Transport, BI_Via_WH, BI_Other } from './Constant'
import { updateBackInfo } from './action/actionCreators'
import store from './store/store'

/**!
 * @brief 返程信息组件
 */
class BackStat extends Component {
    constructor(props:any) {
        super(props);
        this.updateValue = this.updateValue.bind(this);
        this.onChange = this.onChange.bind(this);
        this.checkValid = this.checkValid.bind(this);
    }

    public readonly state:Readonly<any> = {
        state:store.getState().backInfo
    }

    render() {
        return (
            <div>
                <p className= "title2" > 返程情况统计 </p>
                < hr className = "split_line" />
                < div className = "infoItem" >
                    <InfoName name="计划返程日期"  isNeccessary={true}/>
                    <input name={ BI_Date } className = 'edit' type = "date" onChange = { this.onChange } />
                </div>
                < InfoItem
                    name = "拟乘坐交通工具"
                    tip = '若自驾，请填写 "自驾" ; 如已订票，请准确到班次'
                    nameKey = { BI_Transport }
                    updateData = { this.updateValue }
                    isNeccessary={true}
                />
                <div className="infoItem" >
                    <InfoName name="是否途径、中转武汉?" isNeccessary={true}/>
                    <label><input name={ BI_Via_WH } type = "radio" onChange = { this.onChange } value = "是" /> 是</label >
                    <label><input name={ BI_Via_WH } type = "radio" onChange = { this.onChange } value = "否" /> 否</label >
                </div>
                < InfoItem
                    name = "其他情况说明"
                    tip = "如有其他情况或需要协助，请在下方补充"
                    isNeccessary = { false}
                    isMultText = { true}
                    nameKey = { BI_Other }
                    updateData = { this.updateValue }
                />
            </div>
         );
    }

    /// @brief 数据更新接口，用于子组件通知更新
    /// @param name:数据Key, value:数据值
    updateValue(name:string, value:any) {

        if (name === BI_Date) {
            this.setState({ backDate: value }, () => { store.dispatch(updateBackInfo(this.state, this.checkValid())) });
        }
        else if (name === BI_Transport) {
            this.setState({ transport: value }, () => { store.dispatch(updateBackInfo(this.state, this.checkValid())) });
        }
        else if (name === BI_Via_WH) {
            this.setState({ viaWH: value }, () => { store.dispatch(updateBackInfo(this.state, this.checkValid())) });
        }
        else if (name === BI_Other) {
            this.setState({ other: value }, () => { store.dispatch(updateBackInfo(this.state, this.checkValid())) });
        }
    }

    /// @brief 数据有效性检验
    checkValid() {
        return this.state.backDate.length > 0 &&
            this.state.transport.length > 0 &&
            (this.state.viaWH === "是" ||
                this.state.viaWH === "否");
    }

    /// @brief 数据更新
    onChange(item:any) {
        if (item.target.name === BI_Via_WH) {
            this.setState({ viaWH: item.target.value }, () => { store.dispatch(updateBackInfo(this.state, this.checkValid())) })
        }
        else if (item.target.name === BI_Date) {
            this.setState({ backDate: item.target.value }, () => { store.dispatch(updateBackInfo(this.state, this.checkValid())) })
        }
    }
}

export default BackStat;