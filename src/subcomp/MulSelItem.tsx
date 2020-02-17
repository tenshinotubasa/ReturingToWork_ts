import React, { Component } from 'react';
import InfoName from './InfoName'

interface IProps{
    name: string,
    list: string[],
    isNeccessary: boolean,
    updateData: (key:string, value:any)=>void,
    nameKey: string
}

interface IState{
    checkedList:string[]
}

class MulSelItem extends Component<IProps> {
    constructor(props:any) {
        super(props);
        this.state = {
            checkedList: []
        }
        this.onChange = this.onChange.bind(this)
    }

    public readonly state:Readonly<IState> = {
        checkedList:[]
    }

    render() {
        return (
            <div className= "infoItem" >
                <InfoName  name={ this.props.name } isNeccessary={ this.props.isNeccessary } />
                {
                    this.props.list.map((item:any, index:number) => {
                        return (
                            <label key= { index + item} 
                            >
                                <input
                                    name={ this.props.nameKey }
                                    value = { item }
                                    key = { index + item}
                                    type = "checkbox"
                                    onChange = { this.onChange }
                                />
                                { item } < br />
                            </label>
                        );
                    })
                }
            </div>
        );
    }

    onChange(item:any){
        if (this.props.updateData) {
            let list = this.state.checkedList;

            let pos = list.indexOf(item.target.value);
            if (pos === -1) {
                list.push(item.target.value);
            }
            else {
                list.splice(pos, 1);
            }
            this.setState({ checkedList: list }, () => { this.props.updateData(this.props.nameKey, this.state.checkedList) })
        }
    }
}

export default MulSelItem;