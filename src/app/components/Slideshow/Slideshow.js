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
                        <span className='title'>New York Model Management</span>
                        <span className='location'>New York City</span>
                    </div>
                    <div className={currentIndex == 2 ? 'description-container active' : 'description-container'} index={2}>
                        <span className='title'>Kody Philips - Look Books</span>
                        <span className='roles'>Creative Direction and Photography</span>
                        <span className='location'>New York City</span>
                    </div>
                    <div className={currentIndex == 3 ? 'description-container active' : 'description-container'} index={3}>
                        <span className='title'>Offshore Agency</span>
                        <span className='location'>New York City</span>
                    </div>  
                    <div className={currentIndex == 4 ? 'description-container active' : 'description-container'} index={4}>
                        <span className='title'>We Think. We Are.</span>
                        <span className='roles'>Published by <a href="https://www.ilfordphoto.com/ortho-oil-paint/" target='_blank'>Ilford Photo</a><br/>
                            Exhibited at Fice Gallery and <a href="https://notrealart.com/exhibition/out-of-body/" target='_blank'>NOTREALART</a><br/>
                            Currently on display at Film Cult Lab <br/>
                            </span>
                        <span className='location'>Salt Lake City</span>
                    </div>  
                </div>
                <div className='selectors-container'>
                    <div className={currentIndex == 0 ? 'selector-container active' : 'selector-container'} index={0} onClick={handleSelectorClick}>
                        <span>1.1</span>
                    </div>
                    <div className={currentIndex == 1 ? 'selector-container active' : 'selector-container'} index={1} onClick={handleSelectorClick}>
                        <span>3</span>
                    </div>
                    <div className={currentIndex == 2 ? 'selector-container active' : 'selector-container'} index={2} onClick={handleSelectorClick} >
                        <span>1.2</span>
                    </div>
                    <div className={currentIndex == 3 ? 'selector-container active' : 'selector-container'} index={3} onClick={handleSelectorClick} >
                        <span>4</span>
                    </div>
                    <div className={currentIndex == 4 ? 'selector-container active' : 'selector-container'} index={4} onClick={handleSelectorClick} >
                        <span>6</span>
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
                    <video width="320" height="240" controls playsInline
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
                <div className={imageIndex == 2 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={0} slide-index={2}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/244S1KUFnJ3GTIgHQbScy2/413f0d955465b1567c4eb8755397d7d2/02.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-1-3-1'
                    />
                    <video width="320" height="240" controls playsInline
                        className='carousel-image img-1-3-2'
                    >
                        <source src="https://videos.ctfassets.net/tu2om6uq2183/273QsF5eZJv2lmCJtqYJjJ/07ee4986762cb333f38343cba3069934/CHASE_SCENE_FINAL_-9x16-.mov" type="video/mp4" />
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
                    <video width="320" height="500" controls playsInline
                        className='carousel-image img-1-4-1'
                    >
                        <source src="https://videos.ctfassets.net/tu2om6uq2183/7kDBq8Png4A7hUMJfs6Ywn/12a07beb78fd45a5311d94830b8c3278/FIGHTER5X4_KHRIS.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <video width="320" height="500" controls playsInline
                        className='carousel-image img-1-4-2'
                    >
                        <source src="https://videos.ctfassets.net/tu2om6uq2183/60gTP7KzimbNzDZ6nFGaLt/633114a88190f35292038772a1002c90/FIGHTER5X4_MANNY.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <video width="320" height="500" controls playsInline
                        className='carousel-image img-1-4-3'
                    >
                        <source src="https://videos.ctfassets.net/tu2om6uq2183/k5aj1RlxKlp6yJtArE5wq/be045eb2b39ef44ad6447ebd1331ddc7/FIGHTER5X4_MATT.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <video width="320" height="500" controls playsInline
                        className='carousel-image img-1-4-4'
                    >
                        <source src="https://videos.ctfassets.net/tu2om6uq2183/1VIboL3tkUBNiJWvdomBuh/5dff31a6b1fe0022eb40e06d6409adfe/FIGHTER5X4_MELL.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className={imageIndex == 4 ? 'carousel-images-container project-3-1 active' : 'carousel-images-container'} project-index={1} slide-index={4}>
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
                <div className={imageIndex == 5 ? 'carousel-images-container project-3-2 active' : 'carousel-images-container'} project-index={1} slide-index={5}>
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
                <div className={imageIndex == 6 ? 'carousel-images-container project-3-1 active' : 'carousel-images-container'} project-index={1} slide-index={6}>
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
                <div className={imageIndex == 7 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={2} slide-index={7}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/1Da6uWVIyzXTtHKBdxg8o2/1a3b856968f445ad80970be397a216b2/1.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-1-1-1'
                    />
                </div>
                <div className={imageIndex == 8 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={2} slide-index={8}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/1EaC7Gyt0DAgyFBArLUgEg/b2ec83980fb80cd9fb96148fb92e7237/3.jpg" 
                        alt='kody' 
                        width={1000} 
                        height={1000} 
                        className='carousel-image img-3-1-1'
                    />
                </div>
                <div className={imageIndex == 9 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={2} slide-index={9}>
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
                <div className={imageIndex == 10 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={3} slide-index={10}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/3fBRvwsjCdSmsFeoEu53Pz/c71a50e17930b856fdadea5c557b5aaf/Kizzy-_5_.jpg" 
                        alt='kody' 
                        width={700} 
                        height={700} 
                        className='carousel-image img-4-1-5 center'
                    />
                </div>
                <div className={imageIndex == 11 ? 'carousel-images-container active project-4-2' : 'carousel-images-container'} project-index={3} slide-index={11}>
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
                <div className={imageIndex == 12 ? 'carousel-images-container active project-6-1' : 'carousel-images-container'} project-index={4} slide-index={12}>
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
                <div className={imageIndex == 13 ? 'carousel-images-container active project-6-1' : 'carousel-images-container'} project-index={4} slide-index={13}>
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
                <div className={imageIndex == 14 ? 'carousel-images-container active' : 'carousel-images-container'} project-index={4} slide-index={14}>
                    <Image 
                        src="https://images.ctfassets.net/tu2om6uq2183/4lpLAmBc5B6j5q7XUe3zs/719f856bc6cb8249b94e67ae9e439a44/WTWR_07.jpg" 
                        alt='kody' 
                        width={700} 
                        height={700} 
                        className='carousel-image img-6-3-7 center'
                    /> 
                </div>
            </div>
        </div>
    )    
}