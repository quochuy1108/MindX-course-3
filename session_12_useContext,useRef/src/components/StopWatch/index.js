import { useState, useRef } from 'react'


function StopWatch() {
    const [time, setTime] = useState(0)
    const timerRef = useRef(0)
    const sec = time % 60
    const min = Math.floor(time / 60)

    const handleStart = (e) => {
        timerRef.current = setInterval(() => {
            setTime((prev) => {
                return prev + 1
            })
        }, 1000)
    }

    const handleStop = (e) => {
        clearInterval(timerRef.current)
    }

    return (
        <div>
            <div>StopWatch</div>
            <div>{min}:{sec}</div>
            <div>
                <button onClick={handleStart}>Start</button>
                <button onClick={handleStop}>Stop</button>
            </div>
        </div>
    )
}

export default StopWatch
