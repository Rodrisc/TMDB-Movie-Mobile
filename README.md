
## Métodos para executar a aplicação:

* 1 - Baixe o APK no link https://drive.google.com/file/d/1l8AxjvfyWdm8GyoW5SInGj3R0JS7l8c4/view?usp=sharing e siga os passos de instalação do seu dispositivo
* 2 - Executar como modo de desenvolvedor no sistema Windows

##

# Processo para executar a aplicação no sistema Windows:

Antes de tudo, precisamos habilitar seu terminal para executar Scripts.

Abra seu terminal Windows PowerShell em modo administrador e execute o comando:

```
Set-ExecutionPolicy Unrestricted
```

Depois aperte S. Com isso seu terminal estará pronto.

qualquer dúvida, acesse o link https://answers.microsoft.com/pt-br/windows/forum/all/permitir-a-execu%C3%A7%C3%A3o-de-scripts-no/f6b195cf-0be7-46e2-b88c-358c79f78343

* 1 - Baixe o Git no link https://gitforwindows.org/ e em seguida instale seguindo os passos para instalação

  Configure o git seguindo os passos do link https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Configura%C3%A7%C3%A3o-Inicial-do-Git
  
* 2 - Faça o Clone do repositório em uma pasta de sua escolha usando o comando 
```
git clone https://github.com/Rodrisc/processo-seletivo-mobile.git
```

* 3 - Baixe e instale o NodeJS disponivel no link https://nodejs.org/en/ em seguida instale seguindo os passos de instalação.

Após a instalação, abra seu terminal e execute os comandos <br/>
```
node --version
```
e 

```
npm --version
```

Se em ambos os comandos retornar a versão, significa que a instalação foi feita com sucesso.

* 4 - Instale o Expo CLI seguindo os passos do link https://docs.expo.dev/get-started/installation/ disponível em inglês.
Após ter feito a instação e ter feito os testes e estando tudo em ordem, chegou a hora de entrar na pasta raiz do projeto.

* 5 - Na pasta Raiz do projeto, abra seu terminal e execute o seguinte comando:
```
npm install
```

Aguarde o processo que pode ser um pouco demorado.

Após o termino, chegou a hora de executar a aplicação.

* 6 - Execute o seguinte comando para poder rodar a aplicação:
```
expo start
```

Aguarde até que apareça um QRCode -  esse QRcode será muito importante.

* 7 - Va na play Store e baixe o aplicativo Expo Go.
Após ter instalado no celular, abra o App e leia o QRCode.
Se todos os passos anteriores foram feito sem problema, então a aplicação irá rodar no seu dispositivo.

## Obs: Estou usando variaveis de ambiente

Para que o aplicativo rode e mostre todos os filmes, vc terá que renomear o arquivo

```
.env.example
```
 para
```
.env
```

e colocar sua key na API_KEY = coloque sua key aqui, não use aspas ""

Para obter a Key, acesse a página https://www.themoviedb.org/login?language=pt-BR , crie sua conta e vá em configurações -> API e lá mostra como criar sua key
