import React, { Component } from 'react';
import InfoItem from './subcomp/InfoItem'
import MulSelItem from './subcomp/MulSelItem'
import {TH_Touch, TH_Other, TH_Health} from './Constant'
import store from './store/store'
import {updateTouchHist} from './action/actionCreators'

/**!
 * @brief 疫情接触情况组件
 */
class TouchStat extends Component {
    constructor(props:any) {
        super(props);
        this.updateValue = this.updateValue.bind(this);
        this.checkValid = this.checkValid.bind(this);
    }

    public readonly state:Readonly<any> = {
        state:store.getState().touchHist
    }

    /// < 渲染数据
    render() { 
        return ( 
            <div>
                <p className="title2">疫情接触情况统计</p>
                <hr className="split_line"></hr>
                <MulSelItem name="假期疫情接触情况排查"
                            list={['本人或亲属去过武汉或湖北其他地区',
                                   '本人或亲属去过湖北武汉以外地区',
                                   '本人或亲属途经、中转武汉或湖北其他地区',
                                   '本人或亲属接触过来自武汉或湖北其他地区的亲友',
                                   '本人或亲属乘坐过飞机、火车等长途交通工具',
                                   '以上接触均无']}
                            nameKey={TH_Touch}
                            updateData={this.updateValue}
                            isNeccessary={true}
                />
                <MulSelItem name="假期身体健康情况"
                            list={['咳嗽',
                                   '发热',
                                   '乏力',
                                   '呼吸困难',
                                   '其他不适症状',
                                   '无任何不适']}
                            nameKey={TH_Health}
                            updateData={this.updateValue}
                            isNeccessary={true}
                />
                <InfoItem name="其他接触情况说明"
                          tip="如存在疫情接触可能或身体不适，请详细说明" 
                          isNeccessary={false} 
                          isMultText={true} 
                          nameKey={TH_Other}
                          updateData={this.updateValue}
                />
            </div>
         );
    }
    
    /// @brief 数据更新接口，用于子组件通知更新
    /// @param name:数据Key, value:数据值
    updateValue(name:string, value:any){

        if (name === TH_Touch){
            this.setState({touchHist:value}, ()=>{store.dispatch(updateTouchHist(this.state, this.checkValid()))});
        }
        else if(name === TH_Health){
            this.setState({health:value}, ()=>{store.dispatch(updateTouchHist(this.state, this.checkValid()))});
        }
        else if(name === TH_Other){
            this.setState({other:value}, ()=>{store.dispatch(updateTouchHist(this.state, this.checkValid()))});
        }
    }

    /// @brief 数据有效性检验
    checkValid(){
        return this.state.touchHist.length > 0 &&
               this.state.health.length > 0;
    }
}

export default TouchStat;