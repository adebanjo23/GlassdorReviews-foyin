import { Box, type BoxProps } from "@chakra-ui/react";

const Container = ({ children, ...rest }: BoxProps) => {
  return (
    <Box
      width={"100%"}
      maxW={"1512px"}
      mx={"auto"}
      p={{
        base: "0 1.25rem",
        sm: "0 2.1875rem",
        md: "0 3.125rem",
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Container;
