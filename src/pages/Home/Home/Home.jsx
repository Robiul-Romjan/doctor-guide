import Awards from "../Awards/Awards";
import Banner from "../Banner/Banner";
import MedicalCare from "../MedicalCare/MedicalCare";
import MedicalExperts from "../MedicalExperts/MedicalExperts";
import Schedule from "../Schedule/Schedule";
import Solution from "../Solution/Solution";



const Home = () => {
  
    return (
        <div className="relative mt-[63px]">
            <Banner />
            <Solution />
            <Schedule />
            <MedicalCare />
            <Awards />
            <MedicalExperts />
        </div>
    );
};

export default Home;