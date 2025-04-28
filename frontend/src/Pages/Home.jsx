import Navbar from "../components/ui/Default/Navbar";
import MouseTrail from "../components/ui/Default/Mousetrail"

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-400">
            <MouseTrail strokeColor="#F97316" lineWidthStart={30} /> {}
            <Navbar /> {}
            <h1> TEST </h1>
        </div>
    );
}

export default Home;