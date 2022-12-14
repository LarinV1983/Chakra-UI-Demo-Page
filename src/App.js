import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Container,
  Heading,
  Divider
} from '@chakra-ui/react';
import Header from './component/Header';
import { Logo } from './Logo';

function App() {
  return (
    <ChakraProvider theme={theme}>
    <Header/>
    <Container maxW='container.lg'>
    <Box py='2'>
      <Heading size='xl'>
        Hello World!
      </Heading>
      <Text fontSize='xl'>gggggg</Text>
    </Box>
      <Divider/>
    </Container>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
