import img from '../../../assets/images/image.png'
import img1 from '../../../assets/images/image-1.png'
import img2 from '../../../assets/images/image-2.png'
import img3 from '../../../assets/images/image-3.png'
import img4 from '../../../assets/images/image-4.png'
import img5 from '../../../assets/images/image-5.png'
import img6 from '../../../assets/images/image-6.png'
import img7 from '../../../assets/images/image-4.png'

const MedicalCare = () => {

    const data = [
        { name: "Orthopedic Clinic", image: img },
        { name: "Cardiac Surgery", image: img2 },
        { name: "Cancer Screening", image: img3 },
        { name: "Neurology", image: img4 },
        { name: "Pediatric & Adult Audiology", image: img5 },
        { name: "Neurology", image: img6 },
        { name: "Hearing Tests & Aids", image: img1 },
        { name: "Orthopedic Clinic", image: img7 },
    ];

    return (
        <div className="my-container mt-[107px]">
            <div className="text-center">
                <h2 className="text-[#273240] text-[40px] font-bold">Our Medical Care</h2>
                <p className="text-sm text-[#273240] font-medium">Services We Provide</p>
                <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-[30px] mt-[70px]'>
                    {
                        data.map((service, i) => <div data-aos="zoom-in-down" data-aos-duration="1000" className='text-white' key={i}>
                            <img className='h-[227px] w-full' src={service.image} alt="" />
                            <p className='bg-[#6E27E0] py-[12px] text-[20px] font-medium'>{service.name}</p>
                        </div>)
                    }
                </div>
                <div className='mt-[40px]'>
                    <button className="btn">LOAD MORE DEPARTMENTS</button>
                </div>
            </div>
        </div>
    );
};

export default MedicalCare;