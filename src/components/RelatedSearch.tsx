import type { Company } from "@/utils/types";
import { Box, Text } from "@chakra-ui/react";

type RelatedSearchProps = {
  search: string;
  companies: Company[];
  loading: boolean;
  onCompanyClick: (domain: string) => void;
};

const RelatedSearch = ({
  search,
  companies,
  loading,
  onCompanyClick,
}: RelatedSearchProps) => {
  const error = false;
  return (
    <Box mt="10px">
      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text color="red.500">{error}</Text>
      ) : companies.length > 0 ? (
        <Box>
          <Box>
            <Text color={"secondary"}>
              Related serach: Click to see company reviews
            </Text>
          </Box>
          <Box mt={"10px"} display="flex" flexDirection="column" gap="10px">
            {companies.map((each) => (
              <Box
              key={each.domain}
              cursor={"pointer"}
                bg={"primary"}
                color={"white"}
                px={"20px"}
                py={"10px"}
                onClick={() => onCompanyClick(each.domain)}
              >
                <Text wordBreak={"break-word"} key={each.domain}>
                  {each.name}
                </Text>
              </Box>
            ))}
          </Box>
        </Box>
      ) : search.trim() ? (
        <Text>No companies found for "{search}"</Text>
      ) : null}
    </Box>
  );
};

export default RelatedSearch;
