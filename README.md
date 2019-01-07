# Puppy

<p align="center">
  <img width="400" height="500" src="puppy.png">
</p>

Puppy is a bot made for private usage only on discord servers.

## Setting up

```javascript
module.exports = {
    TOKEN: process.env.TOKEN,
    FORTNITE_TOKEN: process.env.FORTNITE_TOKEN,
    GOOGLE_TOKEN: process.env.GOOGLE_TOKEN,
    PREFIX: "!"
};
```
I recommend to use this [site](https://github.com/reactiflux/discord-irc/wiki/Creating-a-discord-bot-&-getting-a-token) to set up your discord app and to generate token necessary to run everything. Next is the Google token just for Youtube ApiKey. You can find the whole explanation [here](https://www.wonderplugin.com/wordpress-tutorials/how-to-apply-for-a-google-api-key-for-youtube/). Last but not least is the Token for Fortnite stats to be generated. The whole guide is [here](https://fortnitetracker.com/site-api).

After tokens, in cmd, hit 
```bash
npm install
```
or
```bash
yarn
```


## Usage

All commands are inside commands folder with specified category. Every command is used in discord chat as follows:
```bash
[prefix][command]
```
ex.

```bash
!botinfo
```
Running bot on our local env:

```bash
npm app
```
or

```bash
yarn run app
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. 
