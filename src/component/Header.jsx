import React from 'react';
import { Flex, Image, Box, Container } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { useColorMode } from '@chakra-ui/react';
import Logo from '../logo.svg';

 function Header() {
 	const {colorMode} = useColorMode();

	return (
		<Box as='header' py={3} bg={colorMode ==='dark' ? 'gray.400' : 'gray.200'}>
		<Container maxW='container.lg'>
		<Flex justifyContent='space-between' alingnItems='center'>
			<Image 
				src={Logo} 
				alt='logo'
			 	boxSize='50px'
    		objectFit='cover'
    />
			<ColorModeSwitcher/>
		</Flex>
		</Container>
		</Box>
	)
}
export default Header;