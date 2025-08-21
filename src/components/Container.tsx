import { Box, type BoxProps } from "@chakra-ui/react";

const Container = ({ children, ...rest }: BoxProps) => {
  return (
    <Box
      width={"100%"}
      maxW={"1512px"}
      mx={"auto"}
      p={{
        base: "20px 1.25rem",
        sm: "20px 2.1875rem",
        md: "20px 3.125rem",
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Container;
