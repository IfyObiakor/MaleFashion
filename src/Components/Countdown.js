
import React from 'react'
import { useState, useEffect } from 'react';

function Countdown() {

    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();

    let interval;

    function timer() {
        const deadline = new Date("July, 1, 2023").getTime()

        interval = setInterval(() => {
            const now = new Date().getTime();

            const countDown = deadline - now

            const countDays = Math.floor(countDown / (24 * 60 * 60 * 1000))
            const countHours = Math.floor(countDown % (24 * 60 * 60 * 1000) / (1000 * 60 * 60)) 
            const countMinutes = Math.floor(countDown % (60 * 60 * 1000) / (1000 * 60))
            const countSeconds = Math.floor(countDown % (60 * 1000) / (1000))

            // if (hours < 10) hours = '0' + hours;

            if (countDown < 0) {
                // stop timer
                clearInterval(interval.current)
            } else {
                // update timer
                setDays(countDays);
                setHours(countHours);
                setMinutes(countMinutes);
                setSeconds(countSeconds);
                
            }
            
            
        })
    }

    useEffect (() => {
        timer()
    });

    return (
        <div>
            <div className="categories_countdown_timer" id="countdown">
                <div className="cd-item">
                    <span>{days}</span>
                    <p>Days</p>
                </div>
                <div className="cd-item">
                    <span>{hours}</span>
                    <p>Hours</p>
                </div>
                <div className="cd-item">
                    <span>{minutes}</span>
                    <p>Minutes</p>
                </div>
                <div className="cd-item">
                    <span>{seconds}</span>
                    <p>Seconds</p>
                </div>
            </div>

        </div>
    )
}

export default Countdown;
