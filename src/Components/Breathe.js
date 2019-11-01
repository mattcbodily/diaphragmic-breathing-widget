import React, {Component} from 'react';

class Breathe extends Component {
    constructor(){
        super();
        this.state = {
            instruction: 'Get Ready',
            timer: 3
        }
    }

    componentDidMount(){
        this.handleTick()
    }

    componentDidUpdate(){
        if(this.state.instruction === 'Get Ready' && this.state.timer === 0){
            this.setState({
                instruction: 'Breathe In',
                timer: 8
            })
        }
    }

    handleCount(){
        this.setState({
            timer: this.state.timer - 1
        })
    }

    handleTick(){
        setInterval(() => this.handleCount(), 1000)
    }
    
    render(){
        return (
            <div>
                <h1>{this.state.instruction}</h1>
                <p>{this.state.timer}</p>
            </div>
        )
    }
}

export default Breathe;