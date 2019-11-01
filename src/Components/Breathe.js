import React, {Component} from 'react';

class Breathe extends Component {
    constructor(){
        super();
        this.state = {
            instruction: 'Get Ready',
            timer: 10
        }
    }

    componentDidMount(){
        this.handleTick()
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
        console.log(this.state.timer)
        return (
            <div>
                <h1>{this.state.instruction}</h1>
                <p>{this.state.timer}</p>
            </div>
        )
    }
}

export default Breathe;