import type { Review } from "@/utils/types";
import { Box, Text } from "@chakra-ui/react";

type ReviewCardProps = {
  review: Review;
};

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <Box
    p={"20px 50px"}
      boxShadow={
        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
      }
    >
      <Text>{review.review_title}</Text>
    </Box>
  );
};

export default ReviewCard;
