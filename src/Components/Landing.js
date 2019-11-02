import React, {Component} from 'react';
import Breathe from './Breathe';

class Landing extends Component {
    constructor(){
        super();
        this.state = {
            repInput: '',
            breatheToggle: false
        }
    }

    handleRepInput(val){
        this.setState({
            repInput: val
        })
    }

    handleToggle = () => {
        this.setState({
            breatheToggle: !this.state.breatheToggle
        })
    }

    render(){
        const {repInput, breatheToggle} = this.state;
        return(
            <div>
                {!breatheToggle
                ?(<>
                    <input 
                        value={repInput}
                        onChange={(e) => this.handleRepInput(e.target.value)}/>
                    <button onClick={this.handleToggle}>Get Started</button>
                  </>)
                : (<Breathe />)}
            </div>
        )
    }
}

export default Landing;