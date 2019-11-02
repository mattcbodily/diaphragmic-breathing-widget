import React, {Component} from 'react';

class Breathe extends Component {
    constructor(props){
        super(props);
        this.state = {
            instruction: 'Get Ready',
            timer: 3
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
        const {instruction, timer} = this.state;
        let {reps, handleReps, toggleView} = this.props;
        if(instruction === 'Get Ready' && timer === 0){
            this.setState({
                instruction: 'Breathe In',
                timer: 8
            })
        } else if(instruction === 'Breathe Out' && timer === 0){
            this.setState({
                instruction: 'Breathe In',
                timer: 8
            })
            handleReps()
        } else if(instruction === 'Breathe In' && timer === 0) {
            this.setState({
                instruction: 'Breathe Out',
                timer: 3
            })
        }
        if(reps === 0){
            toggleView()
        }
    }
    
    render(){
        const {instruction, timer} = this.state;
        const {reps} = this.props;
        return (
            <div>
                <p>Repetition: {reps}</p>
                <h1>{instruction}</h1>
                <p>{timer}</p>
            </div>
        )
    }
}

export default Breathe;