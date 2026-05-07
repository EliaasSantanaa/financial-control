# Financial Control

Projeto de atividade avaliativa - Disciplina: Desenvolvimento Mobile

## Alunos

- Elias Santana Santos - 97351
- Nathan Rodrigues de Freitas - 98502

## Descrição

Aplicativo simples para controle de despesas criado com React Native / Expo. Contém telas para listar despesas, adicionar e remover itens, e cálculo do total.

## Pré-requisitos

- Node.js (recomenda-se >= 16)
- npm ou yarn
- Expo CLI (opcional) — instalar com `npm install -g expo-cli` se desejar usar globalmente

## Como clonar

Substitua `<REPO_URL>` pelo URL do repositório remoto e rode:

```bash
git clone <REPO_URL>
cd financial-control
```

## Instalar dependências

```bash
npm install
# ou
# yarn install
```

## Rodar o projeto

Para iniciar o bundler do Expo (recomendado):

```bash
npm start
# ou
npx expo start
```

Depois use um emulador Android/iOS ou o aplicativo Expo Go no dispositivo físico para abrir o projeto.

## Scripts úteis

- `npm start` — inicia o bundler / expo
- `node scripts/reset-project.js` — (opcional) script presente no repositório para resetar o projeto (use com cuidado)

## Notas sobre o desenvolvimento

- A store de estado usa `zustand` e o projeto está em TypeScript.
- Caso encontre erros de tipagem após alterações, rode o verificador TypeScript (se configurado) ou reinicie o bundler.

## Observações finais

Projeto entregue como atividade avaliativa da disciplina "Desenvolvimento Mobile".

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

# financial-control
