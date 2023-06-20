import Circle from "../../../components/Circle/Circle";
import doctor1 from "../../../assets/images/doctor-1.png"
import doctor2 from "../../../assets/images/doctor-2.png"


const Banner = () => {
    return (
        <div className="relative mb-96">
            <Circle />
            <div className="my-container grid md:grid-cols-3 md:ms-12 gap-4 relative">
                <div className="flex items-center relative">
                    <div className="dot-grid absolute top-0"></div>
                    <div>
                        <h2 className="text-[40px] font-bold">Find The Care <br /> You Need </h2>
                        <p className="text-sm py-8">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry is standard dummy text ever since the 1500s,</p>
                        <button className="btn">Make Appointment</button>
                    </div>
                </div>
                <div className="relative mb-14 mt-8 ms-auto">
                    <img className="absolute bottom-0 h-full pt-5" src={doctor1} alt="" />
                    <div className="dot-grid absolute bottom-[-56px] left-[-60px]"></div>
                    <div className="flex flex-col justify-between h-full">
                        <div className="h-[177px] mb-14 w-[338] bg-[#FF8B42] rounded-b-[150px] rounded-t-[20px]"></div>
                        <div className="h-[434px] w-[338px] bg-[#FF8B42] rounded-t-[150px] rounded-b-[20px]"></div>
                    </div>
                </div>
                <div className="relative ms-auto">
                    <img className="absolute bottom-0 h-[792px]" src={doctor2} alt="" />
                    <div className="flex flex-col justify-between h-full">
                        <div className="h-[434px] w-[338px] bg-[#0089BA] rounded-b-[150px] rounded-t-[20px] mt-20"></div>
                        <div className="h-[177px] w-[338] bg-[#0089BA] rounded-t-[150px] rounded-b-[20px]"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;