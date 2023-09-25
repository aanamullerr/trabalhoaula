Criar pasta para a aplicação
```
mkdir projetoBackend
```

Acessar pasta
```
cd projetoBackend
```

Criar arquivo para documentar projeto
```
touch readme.md
```

Iniciar o gerenciador de pacotes Node
```
npm init -y
```

Instalar os pacotes
```
npm i express nodemon dotenv
```

Abrir o VSCode
```
code .
```

Criar arquivo .gitignore
```
nano .gitignore
```

Adicionar no arquivo .gitignore o nome da pasta criada após a instalação dos pacotes
```
node_modules
```

Criar estrutura de arquivos e pastas
```
mkdir src
```

Criar arquivos dentro da pasta src
```
touch src/app.js
```

```
touch src/server.js
```

Criar pastas dentro da pasta src
```
mkdir src/config
```

```
mkdir src/controllers
```

```
mkdir src/routes
```

Enviar estrutura do projeto para o gitHub
```
git init
```

```
git config --global user.name "FIRST_NAME"
```

```
git config --global user.email "EMAIL@EXAMPLE.COM"
```

```
git status
```

```
git add .
```

```
git commit -m 'estrutura do projeto'
```

```
git branch -M main
```

```
git remote add origin COLAR_URL
```

```
git push -u origin main
```