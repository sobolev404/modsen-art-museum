import FoundArts from "@components/foundArts/FoundArts";
import Input from "@UI/input/Input";
import styles from "./SearchArt.module.css";
import { SearchProvider } from "@context/SearchContext";

const SearchArt: React.FC = () => {
  return (
    <SearchProvider>
      <div className={styles.searchContainer}>
        <h1 className={styles.title}>
          Let's Find Some <span className={styles.titleSpan}>Art</span> Here!
        </h1>
        <Input />
        <FoundArts />
      </div>
    </SearchProvider>
  );
};

export default SearchArt;
