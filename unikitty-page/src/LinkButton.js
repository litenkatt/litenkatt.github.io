import React, { PureComponent } from 'react';

class LinkButton extends PureComponent{
    render(){
    const { children } = this.props;
        return(
            <a href={this.props.link}>{children}</a>
        )
    }
}

export default LinkButton;