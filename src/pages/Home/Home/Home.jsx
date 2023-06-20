import Banner from "../Banner/Banner";
import MedicalCare from "../MedicalCare/MedicalCare";
import Schedule from "../Schedule/Schedule";
import Solution from "../Solution/Solution";



const Home = () => {
  
    return (
        <div className="relative mt-[63px] my-container">
            <Banner />
            <Solution />
            <Schedule />
            <MedicalCare />
        </div>
    );
};

export default Home;