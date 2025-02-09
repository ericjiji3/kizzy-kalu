'use client';
import './Intro.css';
import { useEffect, useState, useRef } from 'react';

export default function Intro(){
    const [clicked, setClicked] = useState(false);
    const [isMouseMoving, setIsMouseMoving] = useState(false);
    const [timer, setTimer] = useState(null);
    const [videoReady, setVideoReady] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
      const video = videoRef.current;
      
      const handleVideoInit = () => {
        console.log("Window loaded, setting video time");
        if (video && video.duration) {
          video.currentTime = Math.round(Math.random() * video.duration);
          setVideoReady(true);
          video.play().catch(error => {
            console.log("Video play failed:", error);
          });
        }
      };
    
      window.addEventListener('load', handleVideoInit);
    
      // Cleanup listener
      return () => {
        window.removeEventListener('load', handleVideoInit);
      };
    }, []);

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
                    <span>Direction & Photography</span>
                    <span>©2025</span>
                    <span>Click to Enter</span>
                </div>
            </div>
            <div className='intro-vid-container'>
                <div className={isMouseMoving ? 'overlay inactive' : 'overlay'}></div>
                <div className={videoReady ? 'black-bg inactive' : 'black-bg'}></div>
                <video ref={videoRef} width="320" height="240" controls={false} preload="auto" loop playsInline muted autoPlay={true} >
                    <source src="/intro.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}