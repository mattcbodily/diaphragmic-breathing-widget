import React, {Component} from 'react';
import Breathe from './Breathe';

class Landing extends Component {
    constructor(){
        super();
        this.state = {
            repInput: '',
            repetitions: 0,
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
            repetitions: +this.state.repInput,
            breatheToggle: !this.state.breatheToggle
        })
    }

    handleReps = () => {
        this.setState({
            repetitions: this.state.repetitions - 1
        })
    }

    render(){
        const {repInput, repetitions, breatheToggle} = this.state;
        return(
            <div>
                {!breatheToggle
                ?(<>
                    <input
                        type='number' 
                        value={repInput}
                        onChange={(e) => this.handleRepInput(e.target.value)}/>
                    <button onClick={this.handleToggle}>Get Started</button>
                  </>)
                : (<Breathe 
                        reps={repetitions}
                        toggleView={this.handleToggle}
                        handleReps={this.handleReps}/>)}
            </div>
        )
    }
}

export default Landing;