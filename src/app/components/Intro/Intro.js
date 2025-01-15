'use client';
import './Intro.css';
import { useEffect, useState } from 'react';

export default function Intro(){
    const [clicked, setClicked] = useState(false);
    const [isMouseMoving, setIsMouseMoving] = useState(false);
    const [timer, setTimer] = useState(null);

    const handleMouseMove = () => {
        setIsMouseMoving(true);
    
        // Clear the previous timer if it exists
        if (timer) {
          clearTimeout(timer);
        }
    
        // Set a new timer to switch back to false after a delay
        const newTimer = setTimeout(() => {
          setIsMouseMoving(false);
        }, 1500); // 2 seconds of inactivity to reset
    
        setTimer(newTimer);
      };
    
      useEffect(() => {
        // Cleanup the timer when the component unmounts
        return () => {
          if (timer) {
            clearTimeout(timer);
          }
        };
      }, [timer]);
  

    return(
        <div className={clicked ? "intro-container inactive" : "intro-container"} onClick={() => setClicked(true)} onMouseMove={handleMouseMove}>
            <div className='intro-text-container'>
                <div className='logo-container'>
                    <h1>KIZZY KALU</h1>
                </div>
                <div className='start-container'>
                    <span>Director & Photographer</span>
                    <span>©2025</span>
                    <span>Click to Enter</span>
                </div>
            </div>
            <div className='intro-vid-container'>
                <div className={isMouseMoving ? 'overlay inactive' : 'overlay'}></div>
                <video width="320" height="240" controls={false} preload="none" loop muted autoPlay={true}>
                    <source src="/intro-test.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}