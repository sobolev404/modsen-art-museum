import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import OtherArts from "../components/otherArts/OtherArts";
import PaginationArts from "../components/paginationArts/PaginationArts";
import SearchArt from "../components/searchArt/SearchArt";

const Main: React.FC = () => {
    return (
        <div className="searchContainer">
            <Header />
            <SearchArt />
            <PaginationArts />
            <OtherArts />
            <Footer />
        </div>
    );
};

export default Main;
