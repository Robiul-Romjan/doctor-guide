import { useState, useRef } from 'react';
import { FaAngleDown, FaAngleUp } from 'react-icons/fa';

const VerticalSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const containerRef = useRef(null);
    const slideHeight = 120; // Adjust the height of each slide

    const slidesData = [
        { time: '08:00', name: 'General Practitioner', drName: "Dr. Robbert Algazali" },
        { time: '06:00', name: 'General Practitioner', drName: "Dr. Robbert Algazali" },
        { time: '09:00', name: 'General Practitioner', drName: "Dr. Robbert Algazali" },
        { time: '10:00', name: 'General Practitioner', drName: "Dr. Robbert Algazali" },
        { time: '07:00', name: 'General Practitioner', drName: "Dr. Robbert Algazali" },
    ];

    const scrollToSlide = (slideIndex) => {
        console.log("click")
        setCurrentSlide(slideIndex);
        const containerElement = containerRef.current;
        const scrollToY = slideIndex * slideHeight;
        containerElement.scrollTo({ top: scrollToY, behavior: 'smooth' });
    };

    return (
        <div className='mt-[85px]'>
            <div className='absolute top-1/2 flex flex-col'>
                <button className='flex justify-center items-center hover:bg-[#0089BA] text-white mb-11 h-8 w-8 bg-[#9E9F93] rounded-full' onClick={() => scrollToSlide(currentSlide - 1)}><FaAngleUp /></button>
                <button className='flex justify-center items-center text-white h-8 w-8 bg-[#9E9F93] hover:bg-[#0089BA]  rounded-full' onClick={() => scrollToSlide(currentSlide + 1)}><FaAngleDown /></button>
            </div>
            <div className='overflow-hidden ml-8 mr-20'
                ref={containerRef}
            >
                {slidesData.map((slide, index) => (
                    <div
                        key={`slide-${index}`}
                       className='m-[10px]'
                    >
                        <div className=' mb-9'>
                            <div className='flex justify-between'>
                                <p className='text-[28px] text-[#EA5262] font-semibold'>{slide.time}</p>
                                <div>
                                    <p className='text-[20px] font-medium text-[#273240]'>{slide.name}</p>
                                    <p className='text-sm text-[#273240]'>{slide.drName}</p>
                                </div>
                            </div>
                            <div className='w-full h-[2px] bg-gray-400 mt-[27px]'></div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    );
};

export default VerticalSlider;