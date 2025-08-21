export type Company = {
  name: string;
  domain: string;
};

export type CompanySearchResponse = {
  data: {
    companies: Company[];
  };
};

export type Review = {
  review_id: string
  review_title: string;
  review_text: string;
  consumer_name: number;
};

export type CompanyReviews = {
  data: {
    reviews: Review[];
  };
};
