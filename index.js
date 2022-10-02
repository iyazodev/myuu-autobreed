//code by adorluigi#8967

const { Client, Intents} = require('discord.js-selfbot-v13');
const client = new Client({
  checkUpdate: false,
  intents: [Intents.FLAGS.DIRECT_MESSAGES]
});

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

function randomNumber(min, max) { 
  return Math.random() * (max - min) + min;
}

const pokemon = "Pokemon name here";
const channelID = "Channel ID here";
const box = "Box number here";

client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
})

client.on("messageCreate", async message => {
  const channel = client.channels.cache.get(channelID);
  if(message.channel.type === 'DM'){    
    if (message.author.id === '438057969251254293') {
      let text = "";
      let description = "";
      let footer = "";
      let fields = "";
      let header;
      message.embeds.forEach((embed) => {
        if (embed.text != undefined) {
          text = embed.text;
        }
        if (embed.description != undefined) {
          description = embed.description;
        }
        if (embed.footer != undefined) {
          footer = embed.footer.text;
        }
        if(embed.fields != undefined){
            fields = embed.fields;
        }
        if (embed.author != undefined) {
            if (embed.author.name != undefined) {
              header = embed.author.name;
            }
        }
        fields.forEach((item) => {
          info += item.value;
          info += " ";
        });

      });

      let  info = header + text + description + footer;

      console.log(info);

      if (info.includes("A new Egg is ready in the Daycare!")) {
        console.log("Egg");
        sleep(randomNumber(1000,1500)).then(() => {       
            channel.send(".get egg");     
        })
      }
      if (info.includes("hatched from the Egg!")) {
        console.log("Hatch");
        sleep(randomNumber(1000,1500)).then(() => {       
            channel.send(".boxswap " + box + " " + pokemon);
        })          
      }      
    }

  }
});

client.login("Account token here");
