import Navbar from "../components/ui/Default/Navbar";
import { MouseTrail } from "@stichiboi/react-elegant-mouse-trail";

const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            <MouseTrail strokeColor="#F97316" lineWidthStart={30} /> {}
            <Navbar/> {}
        </div>
    );
}

export default Home;