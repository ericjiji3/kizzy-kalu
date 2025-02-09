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
        const { clientX, currentTarget, target } = e;
        
        // Check if click was inside a video element
        if (target.tagName.toLowerCase() === 'video') {
            return;
        }
        if(window.innerWidth <= 1000){
            return;
        }

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

    const mobileLeftClick = () => {
        const currentImages = currentImagesRef.current.children;
        setImageIndex(prev => {
            const newImageIndex = prev === 0 ? currentImages.length - 1 : prev - 1;
            // Get the project index of the new image
            const newProjectIndex = parseInt(currentImages[newImageIndex].getAttribute('project-index'));
            setCurrentIndex(newProjectIndex);
            return newImageIndex;
        });
    }

    const mobileRightClick = () => {
        const currentImages = currentImagesRef.current.children;
        setImageIndex(prev => {
            const newImageIndex = prev === currentImages.length - 1 ? 0 : prev + 1;
            // Get the project index of the new image
            const newProjectIndex = parseInt(currentImages[newImageIndex].getAttribute('project-index'));
            setCurrentIndex(newProjectIndex);
            return newImageIndex;
        });
    }
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
                <div className='mobile-header'>
                    <h1>KIZZY KALU</h1>
                </div>
                <div className='mobile-links'>
                    <a href="mailto: ek@kizzykalu.com">ek@kizzykalu.com</a>
                    <a href="https://www.instagram.com/kizzykalu/" target='_blank'>instagram</a>
                </div>

            </div>
            <div className='descriptions-selectors-container'>
                <div className='descriptions-container'>
                    <div className={currentIndex == 0 ? 'description-container active' : 'description-container'} index={0}>
                        <span className='title'>Kody Philips - F/W 24 Campaign</span>
                        <span className='roles'>Creative Direction and Photography</span>
                        <span className='location'>New York City</span>
                    </div>
                    <div className={currentIndex == 1 ? 'description-container active' : 'description-container'} index={1}>
                        <span className='title'>Drumroll Donuts Vintage Advertisements</span>
                        <span className='roles'>Rebrand Art Direction and Photography</span>
                        <span className='location'>Los Angeles</span>
                    </div>
                    <div className={currentIndex == 2 ? 'description-container active' : 'description-container'} index={2}>
                        <span className='title'>New York Model Management</span>
                        <span className='location'>New York City</span>
                    </div>
                    <div className={currentIndex == 3 ? 'description-container active' : 'description-container'} index={3}>
                        <span className='title'>Kody Philips - Look Books</span>
                        <span className='roles'>Creative Direction and Photography</span>
                        <span className='location'>New York City</span>
                    </div>
                    <div className={currentIndex == 4 ? 'description-container active' : 'description-container'} index={4}>
                        <span className='title'>Drumroll Donuts Vintage Advertisements</span>
                        <span className='roles'>Photography and Graphic Design</span>
                        <span className='location'>Los Angeles</span>
                    </div>
                    <div className={currentIndex == 5 ? 'description-container active' : 'description-container'} index={5}>
                        <span className='title'>Offshore Agency</span>
                        <span className='location'>New York City</span>
                    </div>  
                    <div className={currentIndex == 6 ? 'description-container active' : 'description-container'} index={6}>
                        <span className='title'>We Think. We Are.</span>
                        <span className='roles'>Published by <a href="https://www.ilfordphoto.com/ortho-oil-paint/" target='_blank'>Ilford Photo</a><br/>
                            Exhibited at Fice Gallery and <a href="https://notrealart.com/exhibition/out-of-body/" target='_blank'>NOTREALART</a><br/>
                            Currently on display at Film Cult Lab <br/>
                            </span>
                        <span className='location'>Salt Lake City</span>
                    </div>  
                    <div className={currentIndex == 7 ? 'description-container active' : 'description-container'} index={7}>
                        <span className='title'>Midnight Club</span>
                        <span className='roles'>Personal Project</span>
                        <span className='location'>Provo, Utah</span>
                    </div> 
                    <div className={currentIndex == 8 ? 'description-container active' : 'description-container'} index={8}>
                        <span className='title'>People You'd Love</span>
                        <span className='roles'>Premiered at the Utah Museum of Contemporary Art<br/>Winner of best cinematography at the 2023 Utah Dance Film Festival</span>
                        <span className='location'>Eden, Utah</span>
                    </div> 
                    <div className={currentIndex == 9 ? 'description-container active' : 'description-container'} index={8}>
                        <span className='title'>Film Photography</span>
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
                    <div className={currentIndex == 3 ? 'selector-container active' : 'selector-container'} index={3} onClick={handleSelectorClick} >
                        <span>4</span>
                    </div>
                    <div className={currentIndex == 4 ? 'selector-container active' : 'selector-container'} index={4} onClick={handleSelectorClick} >
                        <span>5</span>
                    </div>
                    <div className={currentIndex == 5 ? 'selector-container active' : 'selector-container'} index={5} onClick={handleSelectorClick} >
                        <span>6</span>
                    </div>
                    <div className={currentIndex == 6 ? 'selector-container active' : 'selector-container'} index={6} onClick={handleSelectorClick} >
                        <span>7</span>
                    </div>
                    <div className={currentIndex == 7 ? 'selector-container active' : 'selector-container'} index={7} onClick={handleSelectorClick} >
                        <span>8</span>
                    </div>
                    <div className={currentIndex == 8 ? 'selector-container active' : 'selector-container'} index={8} onClick={handleSelectorClick} >
                        <span>9</span>
                    </div>
                    <div className={currentIndex == 9 ? 'selector-container active' : 'selector-container'} index={9} onClick={handleSelectorClick} >
                        <span>10</span>
                    </div>
                </div>

            </div>
            <div className="mobile-buttons-container">
                    <div className='mobile-button prev' onClick={mobileLeftClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="10" viewBox="0 0 8 10" fill="none">
                            <path d="M0 5L7.5 0.669872L7.5 9.33013L0 5Z" fill="black"/>
                        </svg>
                    </div>
                    <div className='mobile-button next' onClick={mobileRightClick}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="10" viewBox="0 0 8 10" fill="none">
                            <path d="M8 5L0.5 9.33013L0.5 0.669873L8 5Z" fill="black"/>
                        </svg>
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
                    <video width="320" height="240" controls={false} loop muted autoPlay={true} playsInline preload="metadata"
                        className='carousel-image img-1-2-1'
                    >
                        <source src="https://videos.ctfassets.net/tu2om6uq2183/6ZfqaKTcs2BowZB91sACj3/b0663bf5fc57edec85b36d48bb41570c/CAR_SCENE_FINAL_2_-9X16-__1_.mp4#t=0.001" type="video/mp4" />
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
                <div className={imageIndex == 2 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={0} slide-index={2}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/244S1KUFnJ3GTIgHQbScy2/413f0d955465b1567c4eb8755397d7d2/02.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-1-3-1'
                    />
                    <video width="320" height="240" controls={false} loop muted autoPlay={true} playsInline 
                        className='carousel-image img-1-3-2'
                    >
                        <source src="https://videos.ctfassets.net/tu2om6uq2183/273QsF5eZJv2lmCJtqYJjJ/07ee4986762cb333f38343cba3069934/CHASE_SCENE_FINAL_-9x16-.mov#t=0.001" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/2YCQRGpv6DCt87wkMF7Gt/e5b3996f8323ecc45789a41246a1be74/04.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-1-3-3'
                    />
                </div>
                <div className={imageIndex == 3 ? 'carousel-images-container project-1-4 active' : 'carousel-images-container'} project-index={0} slide-index={3}>
                    <video width="320" height="500" controls={false} loop muted autoPlay={true} playsInline 
                        className='carousel-image img-1-4-1'
                    >
                        <source src="https://videos.ctfassets.net/tu2om6uq2183/7kDBq8Png4A7hUMJfs6Ywn/12a07beb78fd45a5311d94830b8c3278/FIGHTER5X4_KHRIS.mp4#t=0.001" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <video width="320" height="500" controls={false} loop muted autoPlay={true} playsInline 
                        className='carousel-image img-1-4-2'
                    >
                        <source src="https://videos.ctfassets.net/tu2om6uq2183/60gTP7KzimbNzDZ6nFGaLt/633114a88190f35292038772a1002c90/FIGHTER5X4_MANNY.mp4#t=0.001" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <video width="320" height="500" controls={false} loop muted autoPlay={true} playsInline 
                        className='carousel-image img-1-4-3'
                    >
                        <source src="https://videos.ctfassets.net/tu2om6uq2183/k5aj1RlxKlp6yJtArE5wq/be045eb2b39ef44ad6447ebd1331ddc7/FIGHTER5X4_MATT.mp4#t=0.001" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <video width="320" height="500" controls={false} loop muted autoPlay={true} playsInline 
                        className='carousel-image img-1-4-4'
                    >
                        <source src="https://videos.ctfassets.net/tu2om6uq2183/1VIboL3tkUBNiJWvdomBuh/5dff31a6b1fe0022eb40e06d6409adfe/FIGHTER5X4_MELL.mp4#t=0.001" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className={imageIndex == 4 ? 'carousel-images-container project-1-5 active' : 'carousel-images-container'} project-index={0} slide-index={4}>
                    <video width="320" height="500" controls={false} loop muted autoPlay={true} playsInline 
                        className='carousel-image img-1-5-5'
                    >
                        <source src="https://videos.ctfassets.net/tu2om6uq2183/3CWwsAVfRr4YJd7JYdU3z1/7d9e5237fe3a99906934d03cb8fd1101/01_video_KODYPHILLIPS_FW24_001.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className={imageIndex == 5 ? 'carousel-images-container project-1-5 active' : 'carousel-images-container'} project-index={1} slide-index={5}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/i4sGlSX0IFNaIMETI1bQ9/5d4dfe66b21bac6d2a9a56b62f8ac594/dr_1.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-3-1-1'
                    />
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/6RyR0L1x9ARb9YfcUP7kC4/6215383af86b68d86677fd31787fd9ce/dr_3.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-3-1-1'
                    />
                </div>
                <div className={imageIndex == 6 ? 'carousel-images-container project-4-2 active' : 'carousel-images-container'} project-index={1} slide-index={6}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/1nEXbEcVZTUKyGgOxFoY8f/fd53ff8dfc4d6e7188dd42ae720e4e8f/dr_10.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-4-2-4'
                    />
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/ps6crlgz4xxCMbTg6FsrF/a7292e6a6e65770caa78b51520e1ff5b/dr_12.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-4-2-4'
                    />
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/64mPUqtEixmlWaNDxvCZTY/248aa12487fd84c2d1cf938c872069ae/dr_11.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-4-2-4'
                    />
                </div>
                {/* <div className={imageIndex == 7 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={1} slide-index={7}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/12TCof2MLnDIm3mkHd3f92/998d9570629eac1a9c8c82877001f820/dr_30.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-1-1-1'
                    />
                </div> */}
                <div className={imageIndex == 7 ? 'carousel-images-container project-3-1 active' : 'carousel-images-container'} project-index={2} slide-index={7}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/5LWS0GsvhmoZhxHvn3PJZZ/b817c7636aa96d8b3a85b37b121e2444/4.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-3-1-1'
                    />
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/DB6QlzKzU6upCzu38Ju8Y/225da29f4350943eb2f95730de7d3814/2_Compressed.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-3-1-2'
                    />
                </div>
                <div className={imageIndex == 8 ? 'carousel-images-container project-3-2 active' : 'carousel-images-container'} project-index={2} slide-index={8}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/3UtGkPbWuahTjGhZ3y5QbY/203141ed782c9582dbfe06078df5cd22/3_COmpressed.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-3-2-3'
                    />
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/79A5vPHFdPyJQ5tXpVox8V/54942770fdfb3c4c21bbaa3b6bfd17fc/1_COmpressed.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-3-2-1'
                    />
                </div>
                <div className={imageIndex == 9 ? 'carousel-images-container project-3-1 active' : 'carousel-images-container'} project-index={2} slide-index={9}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/6ZdfP2GkqfV8UOxyjefC4A/2a6d8af9f4a0a28011dd9292363bf58e/5.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-3-1-1'
                    />
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/3lXK0aHKAOHsNrtWTgG7K6/c47fc229e24834bddcd836589726d470/6.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-3-1-2'
                    />
                </div>
                <div className={imageIndex == 10 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={3} slide-index={10}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/1Da6uWVIyzXTtHKBdxg8o2/1a3b856968f445ad80970be397a216b2/1.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-1-1-1'
                    />
                </div>
                <div className={imageIndex == 11 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={3} slide-index={11}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/1EaC7Gyt0DAgyFBArLUgEg/b2ec83980fb80cd9fb96148fb92e7237/3.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-3-1-1'
                    />
                </div>
                <div className={imageIndex == 12 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={3} slide-index={12}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/7Frukt2rlNTEXVSVA52tfE/418aa41b0bbf3d30c1904486ce541a34/2.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-3-1-2'
                    />
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/7vq86inNSa5S3Syj6vWTWV/f14c447cce06c15fd787b998fd6a9162/4__1_.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-3-1-1'
                    />
                </div>
                

                <div className={imageIndex == 13 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={4} slide-index={13}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/wsD6vUfSxudiiPlEGahTa/db40dce69a1b62ddd71bc1008292dea9/AD1.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-1-1-1'
                    />
                </div>
                <div className={imageIndex == 14 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={4} slide-index={14}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/5h68u94BTOISzrampSPcoN/5dadfa7f8d3cbbd063d38a41b63042ec/mag_2.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-1-1-1'
                    />
                </div>
                <div className={imageIndex == 15 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={4} slide-index={15}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/3EjrctTTKcJEoFGxUBmOlR/08d6d64168871bfc8e1e30a1bac0aa38/AD3.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-1-1-1'
                    />
                </div>
                <div className={imageIndex == 16 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={4} slide-index={16}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/2EfmIaM4YvgqgWTRB6cpU2/d8ca88b57aeaafe181e202c1b23672c1/mag_1.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-1-1-1'
                    />
                </div>
                <div className={imageIndex == 17 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={4} slide-index={17}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/J2ApI49GsQP7mRkNhgTJY/f9cf2d84339984ae9bdc80fc5c69d2cf/mag_5.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-1-1-1'
                    />
                </div>


                <div className={imageIndex == 18 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={5} slide-index={18}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/3fBRvwsjCdSmsFeoEu53Pz/c71a50e17930b856fdadea5c557b5aaf/Kizzy-_5_.jpg" 
                        alt='kody' 
                        width={700} 
                        height={700} 
                        className='carousel-image img-4-1-5 center'
                    />
                </div>
                <div className={imageIndex == 19 ? 'carousel-images-container active project-4-2' : 'carousel-images-container'} project-index={5} slide-index={19}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/1YMz3DkL5dg5t4MOVOcMHa/7a8caf3f845fae857bbd15fd2f5841e4/Kizzy-_4_.jpg" 
                        alt='kody' 
                        width={700} 
                        height={700} 
                        className='carousel-image img-4-2-4'
                    />
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/4P6axlrBicljtbrVTQHl3L/f346e8e4cb136f8955c0ba35d11a758b/Kizzy-_3_.jpg" 
                        alt='kody' 
                        width={700} 
                        height={700} 
                        className='carousel-image img-4-2-3'
                    />
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/5qboA5ZaQyzQqftydLN4vd/46e13c58467a1a6e47b66f3dc321479d/Kizzy-_6_.jpg" 
                        alt='kody' 
                        width={700} 
                        height={700} 
                        className='carousel-image img-4-2-6'
                    />
                </div>


                <div className={imageIndex == 20 ? 'carousel-images-container active project-6-1' : 'carousel-images-container'} project-index={6} slide-index={20}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/1MjgiXLPN9MwkPN9AA7pLG/8041f9300faf0e24e9be3e20926eaf63/WTWR_01.jpg" 
                        alt='kody' 
                        width={700} 
                        height={700} 
                        className='carousel-image img-6-1-1'
                    /> 
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/49AUeoWDiE4Kzhh8LpaYU2/d35637c708bab241eab5b1866d980afb/WTWR_02.jpg" 
                        alt='kody' 
                        width={700} 
                        height={700} 
                        className='carousel-image img-6-1-2'
                    />
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/7LzOcom2VXh0mVXXAbqScg/507023f7988638d2f579435b30e23009/WTWR_03.jpg" 
                        alt='kody' 
                        width={700} 
                        height={700} 
                        className='carousel-image img-6-1-3'
                    />
                </div>
                <div className={imageIndex == 21 ? 'carousel-images-container active project-6-1' : 'carousel-images-container'} project-index={6} slide-index={21}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/1vds0TgYLooij7quVBZZus/41d427916cee0981ebf3e96f9a07ce4a/WTWR_04.jpg" 
                        alt='kody' 
                        width={700} 
                        height={700} 
                        className='carousel-image img-6-2-4'
                    /> 
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/2QKYvYqjncN7vnmESytF01/88c1680ce384b51189f8afa06eae7410/WTWR_05.jpg" 
                        alt='kody' 
                        width={700} 
                        height={700} 
                        className='carousel-image img-6-2-5'
                    />
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/2Ze5KtSc4iE7VEUcU5NxeD/5deefd452cc9cdf8f2d8b58cacd89a6f/WTWR_06.jpg" 
                        alt='kody' 
                        width={700} 
                        height={700} 
                        className='carousel-image img-6-2-6'
                    />
                </div>
                <div className={imageIndex == 22 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={6} slide-index={22}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/4lpLAmBc5B6j5q7XUe3zs/719f856bc6cb8249b94e67ae9e439a44/WTWR_07.jpg" 
                        alt='kody' 
                        width={700} 
                        height={700} 
                        className='carousel-image img-6-3-7 center'
                    /> 
                </div>

                <div className={imageIndex == 23 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={7} slide-index={23}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/4h4B27mxx2IpJYuDjH1C11/a51ae2adf37b09f427065d37849ebf2f/image_1.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-1-1-1'
                    />
                </div>
                <div className={imageIndex == 24 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={7} slide-index={24}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/6mMxBYIkDqGlzd2YsCbvDo/ff808007b217c5f099822a525481b21d/Image_2.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-1-1-1'
                    />
                </div>
                <div className={imageIndex == 25 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={7} slide-index={25}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/6WwRXifG5z7rx9ELS0z0Wa/61dd72c391e5c46368f1be7788b57cfe/image_3.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-3-1-2'
                    />
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/36fnJHpj15QdUzcNC6mh6y/1b5fb8f8f481069cfbaa00cc0010e085/image_4.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-3-1-1'
                    />
                </div>
                <div className={imageIndex == 26 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={8} slide-index={26}>
                    <div className='carousel-image img-1-1-1'>
                        <iframe width="1280" height="720" src="https://www.youtube.com/embed/QHTLOFgKkAs" title="PEOPLE YOU&#39;D LOVE (Short Film)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

                    </div>
                </div>
                <div className={imageIndex == 27 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={9} slide-index={27}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/1JvafHmQxFflaphAUacxji/873bdf0d2bf35dc2153932af5633879a/01__2_.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-1-1-1'
                    />
                </div>
                <div className={imageIndex == 28 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={9} slide-index={28}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/JdApsS7rCoCjD2xidZshb/924ce5a1a3f70b25ac8357da5727a5a9/02__1_.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-1-1-1'
                    />
                </div>
                <div className={imageIndex == 29 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={9} slide-index={29}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/1D02sl0QtAXSlI1KrVYw2t/a0580da6787b5026c83ba33c0a331233/03.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-3-1-2'
                    />
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/59gwXi1F0E2HaruEgHH6tl/d846364589b26773800ac10962581360/04.1.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-3-1-1'
                    />
                </div>
                <div className={imageIndex == 30 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={9} slide-index={30}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/2z0RESRpQPfYxRnlhe2UPl/8ac538efc32a39c58ea6378c02ca5493/04.2.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-1-1-1'
                    />
                </div>
                <div className={imageIndex == 31 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={9} slide-index={31}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/7wsCxUWuE7Pm8atcfwKFWH/a0106539d0361a037f737bbbafe14253/05__1_.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-1-1-1'
                    />
                </div>
                <div className={imageIndex == 32 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={9} slide-index={32}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/4mjucSxrtnKfDtaVJ2KB6w/7272300151e50fe403e2437b8503adb2/06.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-1-1-1'
                    />
                </div>
                <div className={imageIndex == 33 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={9} slide-index={33}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/OOYYyeaUnMxSDumf7NXR9/f6b05fac44c0674aa8977af501ba91b7/07.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-1-1-1'
                    />
                </div>
                <div className={imageIndex == 34 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={9} slide-index={34}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/5NpAoqziPQNrd9MTl7rqZd/bf6e3b441833de769b606a1fe2343804/08.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-1-1-1'
                    />
                </div>
                <div className={imageIndex == 35 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={9} slide-index={35}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/5IBPJTgcSMmS4J2FPKEH70/ad7757e8843f69a7ee1c5c024e4e0b6d/09.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-1-1-1'
                    />
                </div>
                <div className={imageIndex == 36 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={9} slide-index={36}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/1bz6p4aeqJETeHsB7IyPC0/b09662e21da738bd38769a975417334e/10.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-1-1-1'
                    />
                </div>
                <div className={imageIndex == 37 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={9} slide-index={37}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/5U3vPiPjI6n2CNbkuaeJdL/5dc1ce007f655c467d299104840907f7/11.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-1-1-1'
                    />
                </div>
                <div className={imageIndex == 38 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={9} slide-index={38}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/3zLcYTC0b7UvptSuGgKtSw/21aa69bf21fb83f58a3195f4c6018a45/12.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-1-1-1'
                    />
                </div>
                <div className={imageIndex == 39 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={9} slide-index={39}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/7rqSFkQ8kDJiJcL7kc2Vbe/cb1400e5d4ebda1352e4a96c17218044/13.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-3-1-2'
                    />
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/1x7EoDw47bbkx2dFzGJbdY/9b3d6e2466c0637f6f156c27441bf0cb/13.1.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-3-1-1'
                    />
                </div>
                <div className={imageIndex == 40 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={9} slide-index={40}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/2cFpsLgivW1ytNlohAD3eX/c71a0f124b697e4acdbc0dfa6b6eab38/14__2_.jpg" 
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