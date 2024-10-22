import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import OtherArts from "../components/otherArts/OtherArts";
import SearchArt from "../components/searchArt/SearchArt";

export default function Main(){
    return (
        <div className="searchContainer">
            <Header></Header>
            <SearchArt></SearchArt>
            <OtherArts></OtherArts>
            <Footer></Footer>
        </div>
    )
}