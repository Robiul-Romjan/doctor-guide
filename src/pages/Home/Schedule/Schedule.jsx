import { FaUserMd } from "react-icons/fa";
import doctor3 from "../../../assets/images/doctor-3.png"
import VerticalSlider from "../../../components/VerticalSlider/VerticalSlider";


const Schedule = () => {
    return (
        <div className="my-container md:mt-[120px] mt-20">
            <div className="grid md:grid-cols-2 relative pr-20">
                <div className="flex flex-col justify-center">
                    <h3 className="text-3xl font-bold">Doctor’s Schedule Today</h3>
                    <VerticalSlider />
                </div>
                <div className="ms-auto relative">
                    <img data-aos="zoom-in-down" data-aos-duration="1000" className="absolute h-full right-0 bottom-0" src={doctor3} alt="" />
                    <div className="dot-grid absolute right-0"></div>

                    <div className="flex shadow-lg items-center justify-end rounded-[33px] p-2 w-[250px] absolute md:left-[-120px] right-0 bg-white top-[22%]">
                        <p className="flex flex-col">
                            <span className="font-semibold text-sm">Consult Online</span>
                            <span className="text-sm">Best Solution</span>
                        </p>
                        <span className="h-14 w-14 bg-[#FF8B42] rounded-full flex items-center justify-center text-white me-[10px] ms-[30px]">
                            <FaUserMd />
                        </span>
                    </div>

                    <div className=" md:w-[450px] md:h-[646px] w-[360px] h-[400px] bg-[#0089BA] mt-[100px] rounded-l-[20px] rounded-tr-[80px] rounded-br-[20px]">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;