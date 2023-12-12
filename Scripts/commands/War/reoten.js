const config = {
  name: "reo",
  description: "",
  usage: "",
  cooldown: 3,
  permissions: [2],
};

let arr = [
  " sua de {name} ",
" con {name} lùn cay à ",
"con {name} xì trum 🤣",
" con mập {name} ",
" {name} óc sợ à em 🤣 ",
" {name} ngu sủa liên tục",
" {name} ngu cay",
" con {name} bướm trâu 🤣",
" mẹ con {name} bị tao trap ",
" {name} bónk",
" {name} có mẹ ko em ",
" con {name} chắc ko có mẹ r 🤣 ",
" {name} lồn mồ côi 🤣 ",
" mẹ mày chết r à {name} ",
" con {name} mập  ",
"con {name} cay à em",
"con {name} mồ côi",
"con bónk {name} ",
"nhìn con {name} có vẻ sắp chạy 🤣🙄",
" con lùn lùn {name} ",
"con {name} cay 100% r ae ",
"con {name} xì trum cay",
"con lgbt {name} mồ côi ",
"mồ côi = {name} ",
"sợ à con {name} ",
" {name} dái",
" cay cú à {name} ",
" :))) con {name} ngu ngang con già nó",
" {name} óc bím",
"con boài {name} ",
" {name} bê đê cay ",
" {name} lồn mẹ mày bị tao trap mà ",
" {name} cái lồn ",
" con {name} lag à ",
" nhấn help đê con {name} ",
"con {name} gay à ae ",
"sợ à {name} cặc",
"{name} lgbt cay ",
" {name} cặc",
"{name} boài chết r à:)))",
" con chó {name} sợ tao lắm ",
" {name} lồn cay",
" con già m ăn cứt tao mà {name} 🤣",
" {name} dái",
" úi con {name} bị ae tao thay phiên nhau bash cái đầu 🤣 ",
" {name} óc cay à em",
" {name} lồn ko có mẹ ",
" {name} lồn mẹ rip 💀",
" con {name} lồn thiếu thốn tình thương ",
" {name} bị tao fake mẹ đẻ xong bỏ 🤣🙄",
" {name} lồn cay r ae ",
"con già mày {name} ê",
" mẹ con lồn {name} bị tao oneshot chết r ae 🤣",
" {name} bị ae t đánh ",
" {name} mồ côi ",
" {name} lồn  ",
" {name} bím",
" {name} bónk cay à ",
"úi con bede {name} lùn lùn",
" {name} dái cay 🤣",
" {name} lồn ",
" {name} gay cay ",
"gay à {name}  ",
" {name} boài gay 🤣",
" {name} lồn eo di bi ti 🤣",
" sợ à {name} lồn ",
"con boài {name} cay :))) ",
" con {name} 3 tạ ",
" {name} úi úi",
" {name} lồn bị chửi ",
" {name} lùn cay",
" {name} lùn cay r",
" {name} lùn cay tht r ae 🤣 ",
" con {name} lồn bê đê",
":))) sủa liên tục đee {name} bónk",
" {name} boài minion ",
" :))) con {name} chó ",
"con lồn {name} hay đạp xe đạp ngang nhà tao bị tao chọi đá 🤣",
 " {name} mập ",
" {name} lồn mua thuốc giảm cân uống đi em :))) ",
 " {name} lồn đi lún cả đất ae ạ",
" {name} boài bị cả mxh kì thị 🤣",
 " {name} bướm sợ à ae ",
" con {name} heo quay đâu r ae 🤣",
 " {name} ê ",
" {name} lé  ",
 " {name} lé cay à em",
":))( {name} lé à ",
 " {name} lồn 🤣",
" {name} óc bị ae t log acc thay phiên chửi ",
 " chia ca ra hành con {name} đi ae 💀",
" con {name} bede cay 🤣",
 " {name} bónk  ",
" {name} eo di bi ti ",
 " {name} bónk mồ cô 🤣 ",
"con {name} ngu v ae 🤣"
  ]

setInterval(() => {
    for (let [key, value] of global.reoten_888) {
      if (value.index == arr.length) value.index = 0;
      api.sendMessage(arr[value.index].replace(/{name}/g, value.content), key, () => {
        value.index++;
      });
    }
  }, 2500);

if (!global.reoten_888) {
  global.reoten_888 = new Map();
}

async function onCall({ message, args }) {
  let content = args.join(" ");

  if (content === "kk") {
    global.reoten_888.delete(message.threadID);
    return await message.reply("=)))");
  }

  global.reoten_888.set(message.threadID, { content, index: 0 });
  await message.reply(" ");
}

export default {
  config,
  onCall,
};