import styles from "./Search.module.css";

import { useFetchDocuments } from "../../hooks/useFetchDocumento";
import { useQuery } from "../../hooks/useQuery";

const Search = () => {
const query = useQuery();
const search = query.get("q")

  return (
    <div>
      {search}
    </div>
  )
}

export default Search
