import React, { Component } from 'react';

interface IProps{
    name: string,
    isNeccessary: boolean
}

class InfoName extends Component<IProps> {
    state = {}

    public constructor(props:any){
        super(props);
    }

    public render() {
        return (
            <div className= "infoName" >
                <span className="text-name" > { this.props.name } </span>
                {
                    this.props.isNeccessary ? <span className='star' > <sup>* </sup></span > : null
                }
            </div>
         );
    }
}

export default InfoName;