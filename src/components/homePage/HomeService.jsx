import React, { useEffect, useMemo, useRef, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
// Assets
import serbg from '../../assets/home/test.png';
import ser21 from '../../assets/home/test-2.png';
import ser22 from '../../assets/home/test.png';

const SERVICE_DATA = [
    {
        title: "Development",
        description: "We build modern, scalable websites and applications that help businesses grow and perform efficiently across all platforms.",
        mainImg: ser21,
        list: ["UI/UX Design", "Web Development", "Mobile App Development", "E-commerce Solutions", "Custom Web Applications", "CRM / ERP Systems"],
        rating: 4.5,
    },
    {
        title: "Photoshopy",
        description: "We provide professional photo editing and creative design services that transform ordinary images into stunning visuals for brands, businesses, and personal projects.",
        mainImg: ser22,
        list: ["Photo Retouching", "Background Removal", "Color Correction", "Image Manipulation", "Product Photo Editing", "Creative Poster"],
        rating: 5,
    },
];

const TOTAL_SERVICE = 2;
const REAL_SLIDE_COUNT = SERVICE_DATA.length;
const INITIAL_INDEX = TOTAL_SERVICE;
const END_CLONE_INDEX = TOTAL_SERVICE + REAL_SLIDE_COUNT;
const REAL_END_INDEX = TOTAL_SERVICE + REAL_SLIDE_COUNT - 1;

// Updated Speed Variable
const SLOW_SPEED = 1800;

const HomeService = () => {
    const [current, setCurrent] = useState(INITIAL_INDEX);
    const [isTransition, setIsTransition] = useState(true);
    const [isAnimating, setIsAnimating] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [drag, setDrag] = useState(0);
    const timerRef = useRef(null);

    const extendSlides = useMemo(() => [
        SERVICE_DATA[SERVICE_DATA.length - 2],
        SERVICE_DATA[SERVICE_DATA.length - 1],
        ...SERVICE_DATA,
        SERVICE_DATA[0],
        SERVICE_DATA[1],
    ], []);

    // Infinite loop logic updated with SLOW_SPEED
    useEffect(() => {
        if (current === END_CLONE_INDEX) {
            setTimeout(() => {
                setIsTransition(false);
                setCurrent(INITIAL_INDEX);
            }, SLOW_SPEED);
        } else if (current === TOTAL_SERVICE - 1) {
            setTimeout(() => {
                setIsTransition(false);
                setCurrent(REAL_END_INDEX);
            }, SLOW_SPEED);
        }
    }, [current]);

    useEffect(() => {
        if (!isTransition) {
            const timer = setTimeout(() => setIsTransition(true), 50);
            return () => clearTimeout(timer);
        }
    }, [isTransition]);

    // Animation lock updated with SLOW_SPEED
    useEffect(() => {
        if (isAnimating) {
            const timer = setTimeout(() => setIsAnimating(false), SLOW_SPEED);
            return () => clearTimeout(timer);
        }
    }, [isAnimating]);

    const nextSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setIsTransition(true);
        setCurrent(prev => prev + 1);
    };

    const prevSlide = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        setIsTransition(true);
        setCurrent(prev => prev - 1);
    };

    // Touch Handlers
    const handleTouchStart = (e) => {
        if (window.innerWidth > 768) return;
        setTouchStart(e.targetTouches[0].clientX);
        setTouchEnd(null);
    };

    const handleTouchMove = (e) => {
        if (window.innerWidth > 768 || touchStart === null) return;
        const currentX = e.targetTouches[0].clientX;
        setTouchEnd(currentX);
        const distanceGap = currentX - touchStart;
        setDrag((distanceGap / window.innerWidth) * 80);
    };

    const handleTouchEnd = () => {
        if (window.innerWidth >= 768) return;
        if (!touchStart || !touchEnd) {
            setIsTransition(true);
            setDrag(0);
            setTouchStart(null);
            return;
        }

        const touchDistance = touchStart - touchEnd;
        const swipePercent = (Math.abs(touchDistance) / window.innerWidth) * 100;

        if (swipePercent > 20) {
            setIsTransition(true);
            touchDistance > 0 ? nextSlide() : prevSlide();
        } else {
            clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => setIsTransition(true), 20);
        }

        setDrag(0);
        setTouchStart(null);
        setTouchEnd(null);
    };


    const dynamicBg = extendSlides[current]?.mainImg || serbg;


    return (
        <div className='h-auto relative py-10 md:py-15 text-white overflow-hidden'>
         

            <div
                className='absolute inset-0 bg-center bg-cover z-0 transition-all duration-1000 ease-in-out'
                style={{
                    backgroundImage: `url(${dynamicBg})`,
                    opacity: 1,
                }}
            />

            <div className='absolute inset-0 bg-[#232323]/70 backdrop-blur-md' />

            <div className='container w-full h-full flex flex-col justify-center gap-10 relative z-10 mx-auto px-4'>
                <h1 className='text-5xl font-semibold'>Services</h1>

                <div
                    role="region"
                    aria-label="Services carousel"
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    className='h-full flex flex-row'
                >
                    {extendSlides.map((item, idx) => (
                        <ServiceSlide
                            key={idx}
                            item={item}
                            idx={idx}
                            current={current}
                            drag={drag}
                            isTransition={isTransition}
                            onNext={nextSlide}
                            speed={SLOW_SPEED}
                        />
                    ))}
                </div>



            </div>


        </div>
    );
};

const ServiceSlide = ({ item, idx, current, drag, isTransition, onNext, speed }) => {
    // Logic updated to use the speed variable for CSS transitions
    const slideStyle = {
        transform: `translateX(calc(-${current * 100}% + ${drag}%))`,
        transition: isTransition ? `transform ${speed}ms ease` : '',
    };

    const imgStyle = {
        transform: idx === current + 1 ? 'translateX(-25%) scale(0.4)' : 'scale(1)',
        transition: isTransition ? `transform ${speed}ms ease` : '',
    };

    return (
        <div
            style={slideStyle}
            className='flex md:min-w-[88%] min-w-full justify-start md:flex-row flex-col md:items-stretch items-center gap-5 relative'
        >
            <div className='lg:max-w-80 max-w-57.5 w-full flex items-center justify-center'>
                <img
                    className='w-full md:h-full overflow-hidden lg:object-cover object-contain'
                    style={imgStyle}
                    src={item.mainImg}
                    alt={item.title}
                />
            </div>

            <div className='flex flex-col justify-between items-start lg:gap-4 gap-2 mx-8'>
                <h2 className='text-3xl font-semibold'>{item.title}</h2>
                <p className='lg:text-sm text-xs leading-loose font-light tracking-wider  max-w-md'>{item.description}</p>

                {/* <div className='border-t w-full opacity-30' /> */}
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center gap-1 text-[#FFD700]'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        {item?.rating === 4.5 ? <FaStarHalfAlt /> : <FaStar />}
                    </div>
                </div>
                <div className='border-t w-full opacity-30' />

                <ul className='text-xs grid lg:grid-cols-1 grid-cols-2 lg:gap-3 gap-2'>
                    {item.list.map((listItem, listIdx) => (
                        <li key={listIdx} className='flex gap-1 text-[14px]'>
                            <span className='text-[#07C42C]'>//</span>
                            <span>{listItem}</span>
                        </li>
                    ))}
                </ul>

                <button className='border rounded-md lg:px-4 px-3 lg:py-2 py-1 text-xs font-medium cursor-pointer hover:bg-white hover:text-black transition-colors'>
                    START A PROJECT
                </button>
            </div>

            <div className='flex justify-center items-center gap-3 md:static fixed bottom-0 md:bottom-4 right-4'>
                <button
                    onClick={onNext}
                    className='cursor-pointer lg:p-6 p-3 rounded-full bg-black shadow-[inset_0px_0px_16px_0px_gray,0px_0px_2px_1px_black] active:scale-95 transition-transform'
                >
                    <FiArrowRight className='md:text-3xl text-xl' />
                </button>
            </div>
        </div>
    );
};

export default HomeService;