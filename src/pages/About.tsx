import { Box, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Box>
      <Text>About page</Text>
      <Link to={"/"}>Home page</Link>
    </Box>
  );
};

export default About;
