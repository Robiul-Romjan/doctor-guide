

const Circle = () => {
    return (
        <div className="md:flex items-center absolute md:left-[-10%] hidden">
            <div className="border-[#6E27E0] border h-[200px] w-[200px] rounded-full flex items-center justify-center">
                <div className="border-red-600 border h-[184px] w-[184px] rounded-full flex items-center justify-center">
                    <div className="border-red-600 border h-[168px] w-[168px] rounded-full flex items-center justify-center">
                        <div className="border-red-600 border h-[154px] w-[154px] rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Circle;