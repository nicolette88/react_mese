# Népmesetár webalkalmazás leírása

Az intelligens Népmesetár című webalkalmazás használatának leírása:

-	az érdeklődőknek regisztrálniuk kell ahhoz, hogy elérjék a mesetárat,
-	regisztráció során megadják a nevüket, címüket, e-mail címüket, jelszavukat, valamint kiválasztják az érdeklődési körüknek megfelelő mesekategóriákat,
-	ezután a program belépteti őket, és elérik a meséket,
-	a mesék melletti jelölőnégyzetbe pedig be tudják jelölni a felhasználók a kedvenc meséiket,
-	a program letárolja felhasználónként a már elolvasott meséket, és ezt úgy jelöli, hogy a mesecím a listában normál dőlt szöveggel jelenik meg,
-	a program meseajánlásokat tesz a regisztráció során kiválasztott mesekategóriáknak megfelelően,
-	éjszakai mód bekapcsolása a felhasználói igénye alapján.

Az installációk az angol nyelvű leírás után találhatók.

# Népmesetár webapp description

Description of how to use te intelligent "Népmesetár" webapplication:

- those who are interested, must register in order to acces to the content,
- during registration, provide their name, address, e-mail address, password and select the fairy tale categories according to their interests,
- they are then logged in to the program and access to the fairy tales,
- the users can mark their favorite fairy tales,
- the program stores the fairy tales that have already been read by the users, and mark and display in the list the titles in italics style,
- the program makes fairy tale recommendations according to recommendations selected during registration,
- the users can turn on/off the night mode based on their needs in the reading display mode.


# Installation

# webpack starterkit - UPDATED to 2021

# Usage

clone this repo, `cd` into the folder then do `npm install` inside the project folder.

- use `npm run dev` to work in dev mode
- production build can be done with `npm run build`

# Linter setup on vscode

## js linting

1. Make sure eslint extension for vscode is not installed.

2. Add these to your VSCode json file ( `cmd+shift+p` on mac `ctrl+shift+p` on pc, and then type: settings json and choose "Preferences: Open Settings (JSON) ") :

```
"eslint.options": {
      "configFile": "./.eslintrc.js"
  },
```


## css/scss linting

1. install stylelint extension

2. Add these to your VSCode json file ( `cmd+shift+p` on mac `ctrl+shift+p` on pc, and then type: settings json and choose "Preferences: Open Settings (JSON) ") :
```
"scss.validate": false,
"stylelint.config": { "extends": "./.stylelintrc" }
```

## A fejlesztéshez használt internetes anyagok:

Checkbox: https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/. 
Firebase.com: https://firebase.google.com/docs 
Iconfinder.com:
https://www.iconfinder.com/icons/2995005/sun_sunny_yellow_weather_beach_climate_day_icon
https://www.iconfinder.com/icons/2995009/moon_space_night_astronomy_cloud_planet_weather_icon 
Logrocket.com: https://blog.logrocket.com/user-authentication-firebase-react-apps/
Logrocket.com: https://blog.logrocket.com/react-router-dom-tutorial-examples/#what-is-react-router
MEK OSZK honlapja, Arany László: Magyar népmesék: https://mek.oszk.hu/00500/00598/
Pixabay.com:https://pixabay.com/hu/illustrations/keret-k%c3%a9pkeret-piros-sz%c3%b6gletes-1043682/
React.org: https://reactjs.org/docs/getting-started.html 
