import { FaBed, FaLaugh, FaTrophy, FaUserMd } from 'react-icons/fa';
import './Awards.css'
const Awards = () => {
    return (
        <div className='bg-image mt-[118px] bg-gradient-to-r from-cyan-500 to-blue-500'>
            <div className="bg-gradient w-full h-[510px]">
                <div className="my-container flex flex-col md:flex-row overflow-scroll items-center justify-center gap-[90px] h-[500px] text-white">
                    <div className="text-center">
                        <span><FaUserMd className='h-[112px] mx-auto text-white w-[97px]'  /></span>
                        <h4 className='text-[40px] font-bold mt-[11px]'>50</h4>
                        <div className='h-1 bg-white rounded my-[16px]'></div>
                        <h4 className='text-[32px] font-bold'>Medical Experts</h4>
                    </div>
                    <div className="text-center">
                        <span><FaBed className='h-[112px] mx-auto text-white w-[97px]'  /></span>
                        <h4 className='text-[40px] font-bold mt-[11px]'>500</h4>
                        <div className='h-1 bg-white rounded my-[16px]'></div>
                        <h4 className='text-[32px] font-bold'>Hospital Rooms</h4>
                    </div>
                    <div className="text-center">
                        <span><FaTrophy className='h-[112px] mx-auto text-white w-[97px]'  /></span>
                        <h4 className='text-[40px] font-bold mt-[11px]'>20</h4>
                        <div className='h-1 bg-white rounded my-[16px]'></div>
                        <h4 className='text-[32px] font-bold'>Awwwards Win</h4>
                    </div>
                    <div className="text-center">
                        <span><FaLaugh className='h-[112px] mx-auto text-white w-[97px]'  /></span>
                        <h4 className='text-[40px] font-bold mt-[11px]'>5000</h4>
                        <div className='h-1 bg-white rounded my-[16px]'></div>
                        <h4 className='text-[32px] font-bold'>Happy Patients</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Awards;