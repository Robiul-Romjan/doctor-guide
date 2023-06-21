import Awards from "../Awards/Awards";
import Banner from "../Banner/Banner";
import MedicalCare from "../MedicalCare/MedicalCare";
import MedicalExperts from "../MedicalExperts/MedicalExperts";
import PatientFeedback from "../PatientFeedback/PatientFeedback";
import Schedule from "../Schedule/Schedule";
import Solution from "../Solution/Solution";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";



const Home = () => {
  
    return (
        <div className="relative mt-[63px]">
            <Banner />
            <Solution />
            <Schedule />
            <MedicalCare />
            <Awards />
            <MedicalExperts />
            <PatientFeedback />
            <UpcomingEvents />
        </div>
    );
};

export default Home;