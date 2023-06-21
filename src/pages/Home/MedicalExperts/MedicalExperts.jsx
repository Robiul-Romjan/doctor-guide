import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import doctor1 from '../../../assets/images/doctor-5.png'
import doctor2 from '../../../assets/images/image-5.png'
import { BsBookmark } from "react-icons/bs";

const MedicalExperts = () => {
    return (
        <div className="my-container mt-[120px]">
            <div className="text-center">
                <h2 className="text-[#273240] text-[40px] font-bold">Our Medical Experts
                </h2>
                <p className="text-sm text-[#273240] font-medium md:w-2/3 mx-auto mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum augue quis augue ornare, eget faucibus felis pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="mt-[60px] mb-36">
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={true}
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    scrollbar={{ draggable: true }}
                    // modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={doctor1} alt="Shoes" /></figure>
                            <div className="card-body border border-[#0089BA] rounded-b-[20px]">
                                <div className="flex justify-between">
                                    <h4 className="text-xl font-medium">Dr. Emrul Kayes</h4>
                                    <span><BsBookmark /></span>
                                </div>
                                <p className="text-sm mt-[10px] mb-5">MBBS, FCFS, BCS, BSCBS</p>
                                <div className="flex justify-between gap-8">
                                    <p className="text-[15px] text-[#273240]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.</p>
                                    <button className="btn hover:bg-[#0089BA]">Book Now</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img className="w-full h-[320px]" src={doctor2} alt="Shoes" /></figure>
                            <div className="card-body border border-[#0089BA] rounded-b-[20px]">
                                <div className="flex justify-between">
                                    <h4 className="text-xl font-medium">Dr. Emrul Kayes</h4>
                                    <span><BsBookmark /></span>
                                </div>
                                <p className="text-sm mt-[10px] mb-5">MBBS, FCFS, BCS, BSCBS</p>
                                <div className="flex justify-between gap-8">
                                    <p className="text-[15px] text-[#273240]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.</p>
                                    <button className="btn hover:bg-[#0089BA]">Book Now</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={doctor1} alt="Shoes" /></figure>
                            <div className="card-body border border-[#0089BA] rounded-b-[20px]">
                                <div className="flex justify-between">
                                    <h4 className="text-xl font-medium">Dr. Emrul Kayes</h4>
                                    <span><BsBookmark /></span>
                                </div>
                                <p className="text-sm mt-[10px] mb-5">MBBS, FCFS, BCS, BSCBS</p>
                                <div className="flex justify-between gap-8">
                                    <p className="text-[15px] text-[#273240]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.</p>
                                    <button className="btn hover:bg-[#0089BA]">Book Now</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={doctor1} alt="Shoes" /></figure>
                            <div className="card-body border border-[#0089BA] rounded-b-[20px]">
                                <div className="flex justify-between">
                                    <h4 className="text-xl font-medium">Dr. Emrul Kayes</h4>
                                    <span><BsBookmark /></span>
                                </div>
                                <p className="text-sm mt-[10px] mb-5">MBBS, FCFS, BCS, BSCBS</p>
                                <div className="flex justify-between gap-8">
                                    <p className="text-[15px] text-[#273240]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna.</p>
                                    <button className="btn hover:bg-[#0089BA]">Book Now</button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default MedicalExperts;