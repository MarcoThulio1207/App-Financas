import React from 'react';
import {Background, 
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText} from './src/pages/SingIn/styles'

import Routes from '../app/src/routes/index';
import { useRouter } from "expo-router";
export default function App(){

  const router = useRouter()


  return(
      <Background>
        <Container>
          <Logo source={require('../assets/images/Logo.png')}/>

          <AreaInput>
              <Input
              placeholder="Seu email"
              />
          </AreaInput>

          <AreaInput>
              <Input
              placeholder="Sua Senha"
              />
          </AreaInput>

          <SubmitButton activeOpacity={0.8}>
            <SubmitText>Acessar</SubmitText>
          </SubmitButton>

          <Link onPress={() => router.push('/src/pages/SingUp')}>
              <LinkText>Criar Conta</LinkText>
          </Link>

        </Container>
      </Background>
  )
}