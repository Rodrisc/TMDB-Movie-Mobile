import React, { useState, useEffect } from 'react';
import { VStack, Heading, HStack, Image, ScrollView, Text, View } from 'native-base';

import { Header } from '../components/Header';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Loading } from '../components/Loading';

import axios from 'axios'

import config from '../../config';
import { parseDate } from '../utils';
import { Alert } from 'react-native';

 
type GenresType = {
  id: string
  name: string
}

type MovieDetails = {
  title: string
  overview: string
  vote_average: number
  poster_path: string
  release_date: string
  runtime: string
}

type RouteParams = {
  movieId: MovieDetails
}

export function Details() {

  const route = useRoute()
  const navigation = useNavigation()

  const { movieId } = route.params as RouteParams

  const [movieDetails, setMovieDetails] = useState<MovieDetails>({} as MovieDetails)
  const [genres, setGenres] = useState<GenresType[]>([])
  const [isLoading, setIsLoading] = useState(true)

  async function getMovieFromTMDB() {
    try {
      const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${config.API_KEY}&language=pt-BR`)
      setMovieDetails(data)
      setGenres(data['genres'])
      setIsLoading(false)

    } catch (e) {
      console.log(e)
      Alert.alert('Filmes', 'Não foi possível visualizar o filme',[
        {
          text: "Voltar",
          onPress:() => navigation.goBack()
        }
      ])
    }
  }

  function listGenres(genres: GenresType[]): string {
    if (genres.length > 1) {
      let genresNames = ''
      for (var i = 0; i < genres.length; i++) {
        genresNames += i === genres.length - 1 ? `${genres[i].name}` : `${genres[i].name}, `
      }
      return genresNames
    } else {
      return genres[0].name
    }
  }

  useEffect(() => {
    getMovieFromTMDB()
  }, [])

  return (
    <VStack flex={1} bg='gray.700' >
      <Header title='Detalhes' mb={6} />

      {isLoading ?
        <Loading /> :

        <VStack flex={1} m={3}>

          <ScrollView showsVerticalScrollIndicator={false}>

            <HStack justifyContent='center' alignItems='center' mb={3} >

              <Image source={{
                uri: `https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`,
              }} alt='could not load image' w={120} h={180} />

              <Heading flex={1} ml={3} textAlign='center' color='gray.300'>
                {movieDetails.title}
              </Heading>
            </HStack>

            <View borderBottomColor='gray.300' borderBottomWidth={1} mb={4} pb={2} mt={5}>
              <Text color='gray.300' fontSize='lg'>
                Lançamento: {parseDate(movieDetails.release_date)}
              </Text>
            </View>
            <View borderBottomColor='gray.300' borderBottomWidth={1} mb={4} pb={2}>
              <Text color='gray.300' fontSize='lg'>
                Genêro: {listGenres(genres)}
              </Text>
              </View >

              <View borderBottomColor='gray.300' borderBottomWidth={1} mb={4} pb={2}>
              <Text color='gray.300' fontSize='lg'>
                Duração: {movieDetails.runtime}m
                </Text>
              </View >

              <View borderBottomColor='gray.300' borderBottomWidth={1} mb={4} pb={2}>
              <Text color='gray.300' fontSize='lg'>
                Avaliação dos usuários: {(movieDetails.vote_average * 10).toFixed()}%
                </Text>
              </View >

              <View borderBottomColor='gray.300' borderBottomWidth={1} mb={4} pb={2}>
              <Text color='gray.300' fontSize='lg'>
                Sinopse: {movieDetails.overview}
                </Text>
              </View >

          </ScrollView>

        </VStack>
      }

    </VStack >
  );
}