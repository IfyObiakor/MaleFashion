import Navbar from "./Navbar";
import Footer from "./Footer";
import Header from "./Header";
import Carousel from "./Carousel";
import RestOfHomePage from "./RestOfHomePage";



function HomePage() {
    return (
        <div>
            <Header />
            <Navbar />
            <Carousel />
            <RestOfHomePage />
            <Footer />
        </div>
    );
}

export default HomePage;