import React, { useState } from 'react';
import { Alert, TouchableOpacity } from 'react-native';

import { Center, Heading, Icon, VStack, useTheme } from 'native-base';

import Logo from '../assets/tmdb_sigin.svg'

import { Envelope, Eye, EyeSlash, Key } from 'phosphor-react-native';

import { Input } from '../components/Input';
import { Button } from '../components/Button';

import axios from 'axios'

import { useNavigation } from '@react-navigation/native';

import config from '../../config';

export function SigIn() {

    const { colors } = useTheme()

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const navigation = useNavigation()

    async function handleLogIn() {

        if(!username || !password) return Alert.alert('Entrar', 'Por favor, preencha todos os campos')

        setIsLoading(true)

        try {
            const { data: { request_token } } = await axios.get(`https://api.themoviedb.org/3/authentication/token/new?api_key=${config.API_KEY}`)

            const data = {
                username,
                password,
                request_token
            }

            const { data: { success } } = await axios.post(`https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${config.API_KEY}&language=pt-BR`, data)
            setUsername('')
            setPassword('')
            setIsLoading(false)
            if (success) navigation.navigate('home')

        } catch (e) {
            Alert.alert('Login', 'Usuário ou senha inválido')
            setIsLoading(false)
        }
    }

    return (
        <VStack bg='gray.700' flex={1} pt={24} px={8} alignItems='center'>
            <Center>
                <Logo />
            </Center>
            <Heading pt={5} color='gray.300' mt={10} pb={10}>
                Acesse sua conta
            </Heading>

            <Input bg='gray.800'
                mb={6}
                p={4}
                value={username}
                placeholder='Nome de usuário'
                InputLeftElement={<Icon as={<Envelope color={colors.gray[300]} size={24} />} ml={4} />}
                onChangeText={setUsername}
            />

            <Input
                type={showPassword ? 'text': 'password'}
                bg='gray.800'
                mb={6}
                p={4}
                placeholder='Senha'
                value={password}
                InputLeftElement={<Icon as={<Key color={colors.gray[300]} size={24} />} ml={4} />}
                onChangeText={setPassword}
                InputRightElement={<TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{ marginRight: 15 }}>
                    {showPassword ? <EyeSlash color={colors.gray[300]} /> : <Eye color={colors.gray[300]} />}
                </TouchableOpacity>}
            />

            <Button title='Entrar'
                w='full'
                onPress={handleLogIn}
                isLoading={isLoading}
            />
        </VStack>
    );
}