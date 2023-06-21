import { FaCalendar, FaClock, FaLocationArrow } from "react-icons/fa";
import card1 from "../../../assets/images/card-1.png"
import card2 from "../../../assets/images/card-2.png"

const UpcomingEvents = () => {
    return (
        <div className="my-container mt-[120px]">
            <div className="text-center">
                <h2 className="text-[#273240] text-[40px] font-bold">Upcoming Events
                </h2>
                <p className="text-sm text-[#273240] font-medium md:w-2/3 mx-auto mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum augue quis augue ornare, eget faucibus felis pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div className="mt-[70px] flex items-center">
                <div className="w-1/2">
                    <img className="w-full h-[530px]" src={card2} alt="" />
                </div>
                <div className="w-1/2 px-[61px] py-[66px] border border-[#273240]">
                    <h2 className="text-[28px] font-semibold">How to lead a good healthy life</h2>
                    <div className="flex">
                        <p className="flex items-center gap-[15px] text-[#FF8B42]"><FaCalendar /> <span className="text-black">15 Oct, 2019</span> </p>
                        <p className="flex items-center gap-[15px] mx-[14px] text-[#FF8B42]"><FaClock /> <span className="text-black">8:00 AM - 5:00 PM</span> </p>
                        <p className="flex items-center gap-[15px] text-[#FF8B42]"><FaLocationArrow /> <span className="text-black">Uttara, TX 70240</span> </p>
                    </div>
                    <p className="my-[45px]">Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved. Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.</p>
                    <button className="btn mr-[30px]">Book Now</button>
                    <button className="btn-out">10 Available</button>
                </div>
            </div>

            <div className="mt-[50px] flex items-center"> 
                <div className="w-1/2 px-[61px] py-[66px] border border-[#273240]">
                    <h2 className="text-[28px] font-semibold">How to lead a good healthy life</h2>
                    <div className="flex">
                        <p className="flex items-center gap-[15px] text-[#FF8B42]"><FaCalendar /> <span className="text-black">15 Oct, 2019</span> </p>
                        <p className="flex items-center gap-[15px] mx-[14px] text-[#FF8B42]"><FaClock /> <span className="text-black">8:00 AM - 5:00 PM</span> </p>
                        <p className="flex items-center gap-[15px] text-[#FF8B42]"><FaLocationArrow /> <span className="text-black">Uttara, TX 70240</span> </p>
                    </div>
                    <p className="my-[45px]">Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved. Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.</p>
                    <button className="btn mr-[30px]">Book Now</button>
                    <button className="btn-out">20 Available</button>
                </div>
                <div className="w-1/2">
                    <img className="w-full h-[530px]" src={card1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvents;