import React from 'react';
import { HStack, IPressableProps, Pressable, Text } from 'native-base';
import { parseDate } from '../utils';

export type Data = {
  id: string,
  title: string,
  release_date: string
  vote_average: number
}

type Props = IPressableProps & {
    data: Data
}

export function ViewCard({ data, ...rest }: Props) {
  return (
    <HStack
    bg='gray.600'
    m={2}
    p={3}
    borderRadius='lg'
    >
        <Pressable {...rest} w='full'>
          <Text color='gray.300' fontSize='lg'>
            Título: {data.title}
          </Text>
          <Text color='gray.300'>
            Avaliação: {(data.vote_average * 10)}%
          </Text>
          <Text color='gray.300'>
            Data de Lançamento: {parseDate(data.release_date)}
          </Text>
        </Pressable>
    </HStack>
  );
}