import "./PatientFeedback.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

import image from "../../../assets/images/Ellipse 7.png"

const PatientFeedback = () => {
    return (
        <div className=" md:mt-[120px] mt-20 my-container ">
            <div className="patient-bg rounded h-[510px]">
                <div className="bg-patient h-[510px] w-full flex items-center justify-center text-white rounded">
                    <Swiper
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide className="mt-12 md:mt-0">
                            <h2 className="text-center text-[32px] font-bold">Patient Feedback</h2>
                            <div className="flex flex-col md:flex-row items-center w-2/3 mx-auto md:gap-16 gap-4">
                                <img className="md:w-full w-[100px]" src={image} alt="" />
                                <div>
                                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan duis posuere scelerisque curabitur lorem. Viverra at venenatis, arcu et. Elementum nunc eleifend ipsum mauris ut nunc aliquet nulla aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p className="mt-8">TOM COOPPER</p>
                                    <p className="text-red-400">Managing Director of Arts</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="mt-12 md:mt-0">
                            <h2 className="text-center text-[32px] font-bold">Patient Feedback</h2>
                            <div className="flex items-center md:flex-row flex-col w-2/3 mx-auto gap-16">
                                <img className="w-[100px] md:w-full" src={image} alt="" />
                                <div>
                                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan duis posuere scelerisque curabitur lorem. Viverra at venenatis, arcu et. Elementum nunc eleifend ipsum mauris ut nunc aliquet nulla aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p className="mt-8">TOM COOPPER</p>
                                    <p className="text-red-400">Managing Director of Arts</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="mt-12 md:mt-0">
                            <h2 className="text-center text-[32px] font-bold">Patient Feedback</h2>
                            <div className="flex items-center md:flex-row flex-col w-2/3 mx-auto gap-16">
                                <img className="w-[100px] md:w-full" src={image} alt="" />
                                <div>
                                    <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan duis posuere scelerisque curabitur lorem. Viverra at venenatis, arcu et. Elementum nunc eleifend ipsum mauris ut nunc aliquet nulla aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    <p className="mt-8">TOM COOPPER</p>
                                    <p className="text-red-400">Managing Director of Arts</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default PatientFeedback;