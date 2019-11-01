import React, {Component} from 'react';

class Landing extends Component {
    constructor(){
        super();
        this.state = {
            repInput: ''
        }
    }

    handleRepInput(val){
        this.setState({
            repInput: val
        })
    }

    render(){
        return(
            <div>
                <input 
                    value={this.state.repInput}
                    onChange={(e) => this.handleRepInput(e.target.value)}/>
            </div>
        )
    }
}

export default Landing;