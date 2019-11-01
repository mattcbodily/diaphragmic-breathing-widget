import React, {Component} from 'react';

class Breathe extends Component {
    constructor(){
        super();
        this.state = {
            instruction: 'Get Ready',
            timer: 3,
            //repetitions will be added by the user for
            //how many sets of breaths they want to do,
            //add it as something that decrements after
            //the breathe out condition in handle instruction
            repetition: 3
        }
    }

    componentDidMount(){
        this.handleTick()
    }

    componentDidUpdate(){
        this.handleInstruction()
    }

    handleCount(){
        this.setState({
            timer: this.state.timer - 1
        })
    }

    handleTick(){
        setInterval(() => this.handleCount(), 1000)
    }

    handleInstruction(){
        const {instruction, timer, repetition} = this.state;
        if(instruction === 'Get Ready' && timer === 0){
            this.setState({
                instruction: 'Breathe In',
                timer: 8
            })
        } else if(instruction === 'Breathe Out' && timer === 0){
            this.setState({
                instruction: 'Breathe In',
                timer: 8,
                repetition: repetition - 1
            })
        } else if(instruction === 'Breathe In' && timer === 0) {
            this.setState({
                instruction: 'Breathe Out',
                timer: 3
            })
        }
    }
    
    render(){
        const {instruction, timer} = this.state;
        return (
            <div>
                <h1>{instruction}</h1>
                <p>{timer}</p>
            </div>
        )
    }
}

export default Breathe;