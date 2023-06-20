import Banner from "../Banner/Banner";
import Schedule from "../Schedule/Schedule";
import Solution from "../Solution/Solution";

const Home = () => {
    return (
        <div className="relative mt-[63px] my-container">
            <Banner />
            <Solution />
            <Schedule />
        </div>
    );
};

export default Home;