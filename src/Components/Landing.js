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

    handleRepSubmit = () => {
        this.props.history.push('/breathe')
    }

    render(){
        return(
            <div>
                <input 
                    value={this.state.repInput}
                    onChange={(e) => this.handleRepInput(e.target.value)}/>
                <button onClick={this.handleRepSubmit}>Get Started</button>
            </div>
        )
    }
}

export default Landing;