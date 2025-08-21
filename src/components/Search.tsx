import { Input } from "@chakra-ui/react";

type SearchProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const Search = ({ search, setSearch }: SearchProps) => {
  return (
    <Input
      h={"50px"}
      bg={"rgb(0,0,0,0.1)"}
      placeholder="Search Companies"
      px={"20px"}
      value={search}
      
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default Search;
