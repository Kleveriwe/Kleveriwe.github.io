import './App.css';
import {useEffect, useState} from 'react';

const padTime = time => {
    return String(time).length === 1 ? `0${time}` : `${time}`;
};
const format = time => {

    const seconds = time % 60;
    const minutes = Math.floor((time / 60) % 60);
    const hours = Math.floor((time / 3600) % 24);

    return `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)}`;
};

function App() {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        let timer;
        if (counter >= 0) {
            timer = setTimeout(() => setCounter(c => c + 1), 1000);
        }

        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [counter]);
    return (
        <div className="App">
            <h1>{format(counter)}</h1>
            <p>Сколько времени ты потратил</p>
        </div>
    );
}

export default App;
