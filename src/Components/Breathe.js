import React, {useState, useEffect} from 'react';

const Breathe = () => {
    const [breatheOutTimer, setBreatheOutTimer] = useState(3);
    const [breatheInTimer, setBreatheInTimer] = useState(8);
    const [instruction, setInstruction] = useState('Get Ready');

    useEffect(() => {
        breatheTimer();
    }, [breatheOutTimer, breatheInTimer, instruction])

    const breatheTimer = async() => {
        if(instruction === 'Get Ready' || instruction === 'Breathe Out'){
            setInterval(() => {
                setBreatheOutTimer(breatheOutTimer - 1)
                if(breatheOutTimer === 0){
                    setInstruction('Breathe In')
                    setBreatheOutTimer(3)
                }
            }, 1000)
        } else if(instruction === 'Breathe In') {
            setInterval(() => {
                setBreatheInTimer(breatheInTimer - 1)
                if(breatheInTimer === 0){
                    setInstruction('Breathe Out')
                    setBreatheInTimer(8)
                }
            }, 1000)
        }
    }

    return (
        <div>
            <h1>{instruction}</h1>
            {instruction === 'Get Ready' || instruction === 'Breathe Out'
            ? (<h1>{breatheOutTimer}</h1>)
            : (<h1>{breatheInTimer}</h1>)}
        </div>
    )
}

export default Breathe;