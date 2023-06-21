import { FaRegCalendarPlus, FaUserMd } from "react-icons/fa";
import doctor2 from "../../../assets/images/doctor-2.png"

const Solution = () => {
    return (
        <div className="my-container md:mt-[160px] mt-20">
            <div className="flex flex-col-reverse md:flex-row items-center">
                <div className="relative mr-20">
                    <img className="absolute h-full bottom-0 md:right-1/4 left-1/3 md:left-[100px]" src={doctor2} alt="" />
                    <div className="flex shadow-lg items-center rounded-[33px] p-2 w-[250px] mt-12">
                        <span className="h-14 w-14 bg-[#0089BA] rounded-full flex items-center justify-center text-white md:me-[30px] me-0">
                            <FaUserMd />
                        </span>
                        <p className="flex flex-col">
                            <span className="font-semibold text-sm">Consult Online</span>
                            <span className="text-sm">Best Solution</span>
                        </p>
                    </div>

                    <div className="dot-grid absolute left-3/4"></div>

                    <div className="flex shadow-lg items-center rounded-[33px] p-2 md:w-[250px] w-[200px] mt-12 absolute md:right-[-40px] bg-white top-2/3">
                        <span className="h-14 w-14 bg-[#6E27E0] rounded-full flex items-center justify-center text-white me-[30px]">
                            <FaUserMd />
                        </span>
                        <p className="flex flex-col">
                            <span className="font-semibold text-sm">Consult Online</span>
                            <span className="text-sm">Best Solution</span>
                        </p>
                    </div>
                    <div className=" md:w-[626px] md:h-[422px] w-[360px] h-[222px] bg-[#FF8B42] rounded-l-[208px] rounded-r-[208px] mt-[78px]">
                    </div>
                </div>
                <div>
                    <h3 className="text-3xl font-bold">Sick Kid? How to Deal with a Child’s Fever: 4 Steps</h3>
                    <div className="mt-16">
                        <p className="flex mb-6">
                            <span className="text-[#FF8B42] text-xl"><FaRegCalendarPlus /></span>
                            <span className="text-base ms-8">Cras sit sed nec a nunc</span>
                        </p>
                        <p className="flex mb-6">
                            <span className="text-[#FF8B42] text-xl"><FaRegCalendarPlus /></span>
                            <span className="text-base ms-8">Cras sit sed nec a nunc</span>
                        </p>
                        <p className="flex mb-6">
                            <span className="text-[#FF8B42] text-xl"><FaRegCalendarPlus /></span>
                            <span className="text-base ms-8">Cras sit sed nec a nunc</span>
                        </p>
                        <p className="flex mb-6">
                            <span className="text-[#FF8B42] text-xl"><FaRegCalendarPlus /></span>
                            <span className="text-base ms-8">Cras sit sed nec a nunc</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Solution;