import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import OtherArts from "@components/otherArts/OtherArts";
import PaginationArts from "@components/paginationArts/PaginationArts";
import SearchArt from "@components/searchArt/SearchArt";

export default function Main(){
    return (
        <div className="searchContainer">
            <Header></Header>
            <SearchArt></SearchArt>
            <PaginationArts></PaginationArts>
            <OtherArts></OtherArts>
            <Footer></Footer>
        </div>
    )
}