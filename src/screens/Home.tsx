import React, { useState, useEffect } from 'react';
import { VStack, HStack, FlatList, Center, useTheme, IconButton, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { Popcorn, SignOut } from 'phosphor-react-native';



import { Data, ViewCard } from '../components/ViewCard';
import { Loading } from '../components/Loading';
import config from '../../config'

import axios from 'axios'
import Logo from '../assets/tmdb.svg'



export function Home() {

  const navigation = useNavigation()
  const { colors } = useTheme()

  const [data, setData] = useState<Data[]>([])

  const [isLoading, setIsLoading] = useState(true)

  const handleViewDetails = (movieId: string) => {
    navigation.navigate('details', { movieId })
  }

  async function getDataFromTMDB() {

    try {
      const { data: { results } } = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${config.API_KEY}&language=pt-BR`)
      
      setData(results)
      setIsLoading(false)

    } catch (e) {
      console.log(e)
      setIsLoading(false)
      
    }
  }

  useEffect(() => {
    getDataFromTMDB()
  }, [])

  return (
    <VStack flex={1} pb={6} bg='gray.700'>
      <HStack
        w='full'
        bg='#293C73'
        pt={12}
        pb={5}
        px={6}
        justifyContent='space-between'
        alignItems='center'>

        <HStack color='amber.100'>
          <Logo />
        </HStack>

        <IconButton
          icon={<SignOut size={26} color={colors.gray[300]} />}
          onPress={() => { navigation.goBack() }}
        />

      </HStack>

      {isLoading ?
        <Loading /> :

        <FlatList
          mt={5}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <ViewCard data={item} onPress={() => handleViewDetails(item.id)} />}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <Center>
              <Popcorn color={colors.gray[300]} size={40} />
              <Text color='gray.300' fontSize='xl' mt={6} textAlign='center'>
                Nenhum filme disponível
              </Text>
            </Center>
          )} />
      }

    </VStack>
  );
}