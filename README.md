# To-do List

## About
Recently, Apple released the latest IOS update: IOS 26, introducing a new design called **Liquid Glass**. With this, Expo has also added support for this new look, including a **native tab bar**.

I tool advantage of the update to test the design in an app i had previously develeped. It's a simple to-do list with CRUD features and the ability to switch between **Light** and **Dark** themes.

## Features
- React Native/Expo
- StylesSheets
- JavaScript/TypeScript

## Usage
1. Clone the repository with following commando:
```bash
git clone https://github.com/LeoSantosp2/lista-tarefas.git
# or
git clone https://github.com/LeoSantosp2/lista-tarefas.git .
```

2. Install Packages
```bash
npm i
```

3. Create file in the project root with name **app.json**, and paste the following configurations:

```json
{
  "expo": {
    "name": "lista-tarefas",
    "slug": "list-tasks",
    "version": "1.4.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png",
    "scheme": "listatarefas",
    "userInterfaceStyle": "automatic",
    "newArchEnabled": true,
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "backgroundColor": "#E6F4FE",
        "foregroundImage": "./assets/images/android-icon-foreground.png",
        "backgroundImage": "./assets/images/android-icon-background.png",
        "monochromeImage": "./assets/images/android-icon-monochrome.png"
      },
      "edgeToEdgeEnabled": true,
      "predictiveBackGestureEnabled": false
    },
    "web": {
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router",
      [
        "expo-splash-screen",
        {
          "image": "./assets/images/splash-icon.png",
          "imageWidth": 200,
          "resizeMode": "contain",
          "backgroundColor": "#ffffff",
          "dark": {
            "backgroundColor": "#000000"
          }
        }
      ]
    ],
    "platforms": [
      "ios",
      "android"
    ],
    "experiments": {
      "typedRoutes": true,
      "reactCompiler": true
    }
  }
}
```

4. Run the app with following command:
```bash
npm start
```