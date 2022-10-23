import React from 'react';
import { HStack, IconButton, useTheme, StyledProps, Heading, View } from 'native-base';
import { CaretLeft } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'

type Props = StyledProps & {
  title: string
}

export function Header({ title, ...rest }: Props) {

  const navigation = useNavigation()

  const { colors } = useTheme()

  const handleGoBack = () => {
    navigation.goBack()
  }

  return (
    <HStack 
    w='full' 
    bg='#293C73' 
    pt={12} 
    pb={6}
    px={2}
    justifyContent='space-between'
    alignItems='center'

    {...rest}
    >
        <IconButton icon={<CaretLeft color={colors.gray[300] } size={23} />} onPress={handleGoBack} />

        <Heading textAlign='center' color='gray.300' ml={-12} fontSize='lg' >
          {title}
        </Heading>

        <View></View>
    </HStack>
  );
}