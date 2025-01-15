'use client';
import './Slideshow.css';
import { useState, useRef, useEffect } from 'react';
import kodyData from '@/app/data/kody';
import Image from 'next/image';

export default function Slideshow(){
    const [currentIndex, setCurrentIndex] = useState(0);
    const [imageIndex, setImageIndex] = useState(0);
    const currentImagesRef = useRef([]);
    // useEffect(() => {
    //     const projectImages = kodyData[currentIndex - 1]?.images || [];
    //     setCurrentImages(projectImages);
    //     setImageIndex(0); 
    // }, [currentIndex]);

    const handleCarouselClick = (e) => {
        const { clientX, currentTarget } = e;
        const { left, width } = currentTarget.getBoundingClientRect();
        const clickPosition = clientX - left;
        const currentImages = currentImagesRef.current.children;

        if (clickPosition < width / 2) {
            // Clicked on left half
            setImageIndex(prev => {
                const newImageIndex = prev === 0 ? currentImages.length - 1 : prev - 1;
                // Get the project index of the new image
                const newProjectIndex = parseInt(currentImages[newImageIndex].getAttribute('project-index'));
                setCurrentIndex(newProjectIndex);
                return newImageIndex;
            });
            
        } else {
            // Clicked on right half
            setImageIndex(prev => {
                const newImageIndex = prev === currentImages.length - 1 ? 0 : prev + 1;
                // Get the project index of the new image
                const newProjectIndex = parseInt(currentImages[newImageIndex].getAttribute('project-index'));
                setCurrentIndex(newProjectIndex);
                return newImageIndex;
            });
        }
    };

    const handleSelectorClick = (e) => {
        const index = parseInt(e.currentTarget.getAttribute('index')); 
        setCurrentIndex(index);
        console.log(index);

        // Find the first image that matches the selected project index
        const currentImages = Array.from(currentImagesRef.current.children);
        const firstImageForProject = currentImages.findIndex(
            image => parseInt(image.getAttribute('project-index')) === index
        );
        
        if (firstImageForProject !== -1) {
            setImageIndex(firstImageForProject);
        }
    };

    // Add this useEffect to handle currentIndex updates
    // useEffect(() => {
    //     const currentImages = currentImagesRef.current.children;
    //     if (currentImages[imageIndex]) {
    //         const newProjectIndex = parseInt(currentImages[imageIndex].getAttribute('project-index'));
    //         console.log(newProjectIndex);
    //         setCurrentIndex(newProjectIndex);
    //     }
    // }, [imageIndex]);



    return(
        <div className='slideshow-container'>
            <div className='socials'>
                <a href="mailto: ek@kizzykalu.com">ek@kizzykalu.com</a>
                <a href="https://www.instagram.com/kizzykalu/" target='_blank'>instagram</a>
            </div>
            <div className='descriptions-selectors-container'>
                <div className='descriptions-container'>
                    <div className={currentIndex == 0 ? 'description-container active' : 'description-container'} index={0}>
                        <span className='title'>Kody Philips - F/W 24 Campaign</span>
                        <span className='roles'>Creative Direction and Photography</span>
                        <span className='location'>New York City</span>
                    </div>
                    <div className={currentIndex == 1 ? 'description-container active' : 'description-container'} index={1}>
                        <span className='title'>New York Model Management</span>
                        <span className='location'>New York City</span>
                    </div>
                    <div className={currentIndex == 2 ? 'description-container active' : 'description-container'} index={2}>
                        <span className='title'>Offshore Agency</span>
                        <span className='location'>New York City</span>
                    </div>
                </div>
                <div className='selectors-container'>
                    <div className={currentIndex == 0 ? 'selector-container active' : 'selector-container'} index={0} onClick={handleSelectorClick}>
                        <span>1</span>
                    </div>
                    <div className={currentIndex == 1 ? 'selector-container active' : 'selector-container'} index={1} onClick={handleSelectorClick}>
                        <span>2</span>
                    </div>
                    <div className={currentIndex == 2 ? 'selector-container active' : 'selector-container'} index={2} onClick={handleSelectorClick} >
                        <span>3</span>
                    </div>
                </div>
            </div>
            <div className='carousel-container' ref={currentImagesRef} onClick={handleCarouselClick}>

                <div className={imageIndex == 0 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={0} slide-index={0}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/1ufHHos6wYdufaJpfjMhqZ/ca01a0139eb1be2c742511199605cc7e/05.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-1-1-1'
                    />
                </div>
                
                <div className={imageIndex == 1 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={0} slide-index={1}>
                    <video width="320" height="240" controls={false} preload="none" loop muted autoPlay={true}
                        className='carousel-image img-1-2-1'
                    >
                        <source src="https://videos.ctfassets.net/tu2om6uq2183/6ZfqaKTcs2BowZB91sACj3/b0663bf5fc57edec85b36d48bb41570c/CAR_SCENE_FINAL_2_-9X16-__1_.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/3BWhr7b6odfbXdKuWhy3mb/a181d1671857196d1a674bd2a308babe/01__1_.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-1-2-2'
                    />
                </div>
                <div className={imageIndex == 2 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={1} slide-index={2}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/3BWhr7b6odfbXdKuWhy3mb/a181d1671857196d1a674bd2a308babe/01__1_.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-1-1-1'
                    />
                </div>
                <div className={imageIndex == 3 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={2} slide-index={3}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/1ufHHos6wYdufaJpfjMhqZ/ca01a0139eb1be2c742511199605cc7e/05.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-1-1-1'
                    />
                </div>
            </div>
        </div>
    )    
}