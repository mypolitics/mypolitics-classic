![Website](https://img.shields.io/website?url=https%3A%2F%2Fmypolitics.orlow.me)
![GitHub](https://img.shields.io/github/license/mypolitics/mypolitics)
![David](https://img.shields.io/david/mypolitics/mypolitics)
[![Code Style](https://badgen.net/badge/code%20style/airbnb/ff5a5f?icon=airbnb)](https://github.com/airbnb/javascript)

# mypolitics

mypolitics is a political test showing your views on seven axes and a political compass. Made with React, Redux, SCSS and TypeScript.

![logo](https://user-images.githubusercontent.com/10941338/65378407-196a4980-dcb8-11e9-8562-fb4e53a7b355.png)

## Installation

Get all the dependencies loaded via

```
npm install
```

And run the server with

```
npm start
```

## Deployment (Dokku)

Build an app to production with

```
npm run build
```

Add Dokku remote repository

```
git remote add dokku dokku@server_ip:app_name
```

and deploy it

```
git push dokku master
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
