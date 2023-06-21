import doctor from "../../../assets/images/doctor-1.png"

const Subscribe = () => {
    return (
        <div className="my-container md:mt-[120px] mt-20 relative mb-[150px]">
            <div className="dot-grid absolute top-[50px] ml-[80px]"></div>
            <img data-aos="fade-right" data-aos-duration="1000" className="absolute hidden md:block bottom-0 h-[524px] ml-[102px]" src={doctor} alt="" />
            <div className="bg-[#0089BA] w-full h-[448px] rounded-2xl flex justify-center items-center md:flex-row flex-col">
                <div className="md:w-1/2 w-full"></div>
                <div className="md:w-1/2 w-full text-white mx-auto">
                    <h4 className="text-[28px] font-semibold">Subscribe Now</h4>
                    <p className="text-sm mt-[9px] mb-[50px]">Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Ut elit tellus, luctus nec.</p>
                    <div className="form-control w-full">
                        <div className="input-group py-5">
                            <input type="email" placeholder="Your email here" className="input" />
                            <button className="btn">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;