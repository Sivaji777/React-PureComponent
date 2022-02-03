import React, { PureComponent } from 'react'

class PureCom extends PureComponent{
    render(){
        console.log('--------pure component---------');
        return (
            <div>
                  pure:<h1> {this.props.data}</h1>
            </div>
        )
    }
}

export default PureCom
