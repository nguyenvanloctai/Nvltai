const config = {
  name: "uptime",
  aliases: ["up"],
  permissions: [2],
  credits: "ltai"
};

async function onCall({ message }) {
  const uptimeInSeconds = process.uptime();
  const hours = Math.floor(uptimeInSeconds / 3600);
  const minutes = Math.floor((uptimeInSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeInSeconds % 60);

  try {
    const replyMessage = await message.reply(`==ĐẤNG LTAI ĐÃ CHẾT ĐƯỢC==
${hours} ngày: ${minutes} giờ: ${seconds} phút  
`);
    console.log(replyMessage);
  } catch (error) {
    console.error(error);
  }
}

export default {
  config,
  onCall,
};