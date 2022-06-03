import { Box, Text } from "@chakra-ui/react";

import { AnswerBasicProps } from "./Response";

export interface TextAnswerProps extends AnswerBasicProps {}

export const TextAnswer = ({ question, answer }: TextAnswerProps) => (
  <Box mt={4}>
    <Text color="white">{question}</Text>
    <Text color="#798BB9">{answer ?? "-"}</Text>
  </Box>
);
