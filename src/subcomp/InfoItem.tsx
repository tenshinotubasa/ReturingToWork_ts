import React, { Component } from 'react';
import InfoName from './InfoName'

interface IProps{
    name: string,
    tip?: string,
    mark?: string,
    isNeccessary: boolean,
    isMultText?: boolean,
    updateData: (key:string, value:any)=>void,
    nameKey: string
}

interface IState{
    Value: string
}

class InfoItem extends Component<IProps> {

    public constructor(props:IProps) {
        super(props);
        this.state = { Value: "" };
        this.onChange = this.onChange.bind(this);
    }

    public readonly state:Readonly<IState> = {
        Value:""
    }

    public render() {
        return (
            <div className= "infoItem" >
                <InfoName  name={ this.props.name } isNeccessary = { this.props.isNeccessary } />
                {
                    this.props.tip ? <div className="text-desc1"> { this.props.tip } </div> : null
                }
                {
                    this.props.isMultText ?
                        <textarea name={ this.props.nameKey } onChange = { this.onChange }  placeholder = { this.props.mark } value = { this.state.Value } > </textarea>: 
                        < input name = { this.props.nameKey } onChange = { this.onChange } className = "edit" placeholder = { this.props.mark } value = { this.state.Value } /> 
                }

            </div>
         );
    }

    onChange(item:any) {
        this.setState({ Value: item.target.value },
            () => { this.props.updateData(this.props.nameKey, this.state.Value) })
    }
}

export default InfoItem;