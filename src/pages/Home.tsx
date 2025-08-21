import Container from "@/components/Container";
import Search from "@/components/Search";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY } from "@/utils/constsnts";
import type {
  Company,
  CompanyReviews,
  CompanySearchResponse,
  Review,
} from "@/utils/types";
import { Box, SimpleGrid, Text } from "@chakra-ui/react";
import RelatedSearch from "@/components/RelatedSearch";
import ReviewCard from "@/components/ReviewCard";

const Home = () => {
  const [search, setSearch] = useState("");

  const [searching, setSearching] = useState(false);
  const [searchingError, setSearchingError] = useState(null);

  const [companies, setCompanies] = useState<Company[]>([]);

  const [reviews, setReviews] = useState<Review[]>([]);
  const [loadingReviews, setLoadingReviews] = useState(false);
  const [errorReviews, setErrorReviews] = useState(false);

  useEffect(() => {
    if (!search.trim()) return;

    setSearching(true);
    const delayDebounce = setTimeout(() => {
      const fetchCompanies = async () => {
        try {
          const options = {
            method: "GET",
            url: "https://trustpilot-company-and-reviews-data.p.rapidapi.com/company-search",
            params: {
              query: search,
              page: "1",
              min_rating: "any",
              min_review_count: "any",
              locale: "en-US",
            },
            headers: {
              "x-rapidapi-host":
                "trustpilot-company-and-reviews-data.p.rapidapi.com",
              "x-rapidapi-key": API_KEY,
            },
          };

          const { data } = await axios.request<CompanySearchResponse>(options);
          const companies = data.data.companies.map((each) => {
            return {
              name: each.name,
              domain: each.domain,
            };
          });
          setCompanies(companies);
        } catch (error) {
          console.log(error);
        } finally {
          setSearching(false);
        }
      };
      fetchCompanies();
    }, 1000);
    return () => {
      clearTimeout(delayDebounce);
    };
  }, [search]);

  const fetchReviews = async (domain: string) => {
    setSearch("");
    setLoadingReviews(true);
    try {
      const options = {
        method: "GET",
        url: "https://trustpilot-company-and-reviews-data.p.rapidapi.com/company-reviews",
        params: {
          company_domain: domain,
          date_posted: "any",
          locale: "en-US",
        },
        headers: {
          "x-rapidapi-host":
            "trustpilot-company-and-reviews-data.p.rapidapi.com",
          "x-rapidapi-key": API_KEY,
        },
      };

      const { data } = await axios.request<CompanyReviews>(options);
      const reviews = data.data.reviews.map((r) => ({
        review_title: r.review_title,
        review_text: r.review_text,
        consumer_name: r.consumer_name,
      }));
      setReviews(reviews);
    } catch (error) {
      console.error(error);
    } finally {
      setLoadingReviews(false);
    }
  };

  return (
    <Container>
      <Box display={"flex"} justifyContent={"center"} py={"20px"}>
        <Box width={"100%"} maxW={"500px"} h={"50px"}>
          <Search search={search} setSearch={setSearch} />
          {search && (
            <RelatedSearch
              search={search}
              companies={companies}
              loading={searching}
              onCompanyClick={fetchReviews}
            />
          )}
        </Box>
      </Box>
      <Box mt={"20px"}>
        {loadingReviews && <Text>Loading Reviws</Text>}
        {!loadingReviews && (
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
            gap={"20px"}
          >
            {reviews.map((each) => (
              <ReviewCard review={each} />
            ))}
          </SimpleGrid>
        )}
      </Box>
    </Container>
  );
};

export default Home;
