import React, { Component } from 'react';
import InfoItem from './subcomp/InfoItem'
import { PI_Name, PI_Depart, PI_Pos, PI_Addr, PI_Phone } from './Constant'
import { updatePersonalInfo } from './action/actionCreators'
import store from './store/store'

/*!
* @brief 用户信息组件
*/
class Person extends Component {

    public readonly state:Readonly<any> = {
        state:store.getState().personalInf
    }

    constructor(props:any) {
        super(props);

        this.updateValue = this.updateValue.bind(this);
        this.checkValid = this.checkValid.bind(this)
    }

    /// < 渲染数据
    render() {
        return (
            <div>
                <InfoItem name= "姓名" nameKey = { PI_Name } updateData = { this.updateValue } isNeccessary={true}/>
                <InfoItem name="部门" tip = "例如：质检部" nameKey = { PI_Depart } updateData = { this.updateValue } isNeccessary={true} />
                <InfoItem name="手机号"  nameKey = { PI_Phone } updateData = { this.updateValue }  isNeccessary={true}/>
                <InfoItem name="现居住地址"  nameKey = { PI_Addr } updateData = { this.updateValue }  isNeccessary={true}/>
                <InfoItem name="当前所在位置" isMultText = { true} nameKey = { PI_Pos } updateData = { this.updateValue }  isNeccessary={true}/>
            </div>
         );
    }

    /// @brief 数据更新接口，用于子组件通知更新
    /// @param name:数据Key, value:数据值
    updateValue(name:string, value:any) {

        if (name === PI_Name) {
            this.setState({ name: value }, () => { store.dispatch(updatePersonalInfo(this.state, this.checkValid())) });
        }
        else if (name === PI_Depart) {
            this.setState({ depart: value }, () => { store.dispatch(updatePersonalInfo(this.state, this.checkValid())) });
        }
        else if (name === PI_Phone) {
            this.setState({ phoneNum: value }, () => { store.dispatch(updatePersonalInfo(this.state, this.checkValid())) });
        }
        else if (name === PI_Addr) {
            this.setState({ addr: value }, () => { store.dispatch(updatePersonalInfo(this.state, this.checkValid())) });
        }
        else if (name === PI_Pos) {
            this.setState({ pos: value }, () => { store.dispatch(updatePersonalInfo(this.state, this.checkValid())) });
        }
    }

    /// @brief 数据有效性检验
    checkValid() {
        return this.state.name.length > 0 &&
            this.state.depart.length > 0 &&
            this.state.phoneNum.length > 0 &&
            this.state.addr.length > 0 &&
            this.state.pos.length > 0;
    }
}

export default Person;