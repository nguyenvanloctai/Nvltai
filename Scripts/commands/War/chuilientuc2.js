const config = {
		name: "chuilientuc",
		aliases: ["con đĩ"],
		version: "1.1.0",
		description: "Chửi liên tục người được tag",
		usage: "[tag]",
		cooldown: 3,
		permissions: [2],
		credits: "ltai"
}

if (!global.chuilientuc) {
		global.chuilientuc = new Map();
}

const DELAY_THREAD = 1000 * 60; // 1 phút chửi 1 lần/1 nhóm
const DELAY = 2000; // cứ mỗi 1 giây chửi 1 lần
const CAU_CHUI = [
"thằng bê đê bất lực vì mẹ nó bị đụ tung cái lồn:)))  {name}",
"con đĩ mẹ mày bất lực vì bị tao chửi mà chỉ biết câm lặng:)))  {name}",
"làm màu mà bị tao chửi rung cái con cặc:)))  {name}",
"Mẹ mày bị tao đụ lòi hột le:)))  {name}",
"thằng bê đê ảo cặc đòi cân và cái kết:)))  {name}",
"con đĩ mẹ của mày thèm cứt tao dữ lắm:)))  {name}",
"bị tao chửi sảng cặc đéo dám care:)))  {name}",
"mạnh lên sao yếu đuối v con:)))  {name}",
"mày run cặc chưa con:)))  {name}",
"chậm vậy sao cứu được con đĩ mẹ mày nhanh lên đi chứ:)))  {name}",
"chết cha nó sồn r  {name}",
"con đĩ mẹ mày gào thét đê?😛  {name}",
"mày gào lên con?😏  {name}",
"sao cay tao dọ?  {name}",
"mày sủa đi nè😛  {name}",
"sao mày xấu lồn gớm chó dị con?  {name}",
"sao cay tao hả😏?  {name}",
"sao mày giết mẹ vậy=)))  {name}",
"mày gào đi con=)))  {name}",
"nào ổn thì đú🤣👈  {name}",
"ê bê đê lên ăn hôi lẹ😘  {name}",
"mày đú rõ mò  {name}",
"sao mày ăn cứt tao😏  {name}",
"ai cho mày ăn cứt tao  {name}",
"sao mày óc cặc dữ con=)))  {name}",
"gặp tao đừng run nha?😂  {name}",
"con đĩ mẹ mày thèm cứt tao dữ lắm=)))  {name}",
"mày mồ côi mà đúng k🤣👈  {name}",
"ai cho mày sủa tao cho mày sủa chưa?  {name}",
"bị tao chọc cay hơn con chó luôn=)))  {name}",
"cố đi sắp win rồi nè😏  {name}",
"chừng nào mày mới làm lại tao dị?  {name}",
"mẹ mày sắp tắt thở kìa ê  {name}",
"đậu má mày gà mà sủa  {name}",
"sủa điên đi mà sủa hăng lên mới vui😘  {name}",
"mày mà ngưng một giây là con đĩ mẹ mày bả tắt đường thở á😏  {name}",
"ê chó ngu mày sợ tao hả😂  {name}",
"mày đú rõ mà sao mày đú dị?  {name}",
"mẹ mày chết chưa con=)))  {name}",
"ê bê đê sủa điên đi  {name}",
"sao mày sủa chậm dị?  {name}",
"nào làm lại tao nói đê?  {name}",
"bị tao chọc cay hơn con chó luôn😏  {name}",
"sủa đi rồi tao tha?  {name}",
"sủa điên lên cho mẹ?  {name}",
"mày ngưng là con đĩ mẹ mày chết?  {name}",
"cay tao lòi dái hả😏  {name}",
"não chó cay à?🤣  {name}",
"sao mày thảm dị=)))  {name}",
"mẹ mày bị tao địt rách màn trinh mà🤪  {name}",
"mẹ mày bị tao dã vào lồn=)))  {name}",
"địt mẹ mày sướng tê con cặc=)))  {name}",
"huhu nhìn mày như con cặc=)))  {name}",
"mày loạn luân bà già hả=)))  {name}",
"mẹ mày bị tao địt rên ư ử=)))  {name}",
"địt mẹ mày sảng khoái quá đi😛  {name}",
  "sủa lẹ đi {name}",
  "úi cn {name} bướm khắm:))))",
  "cn già mày đập đt mày à {name} eyy:))) ",
  "úi coi cn bẻm {name} nó bị chà đạp kìa:)))",
  "{name} khắm chui dô bướm con đĩ già nó chặn keo núp trỏng à:))))",
  "câm à con {name} ngu:)))",
  "{name} eyyy:))",
  "úi cái con {name} hôi:)))",
  "chết cn già mày à {name}:)))",
  "địt con {name} cụ mày phọt khí bướm:)))",
  "úi {name} cha bị úp:))) {name} con trốn đâu r ae:)))",
  "{name} ơi sao m ngu vậy {name}",
  "{name} M là con chó dưới chân t phải k? {name}",
  "êi culi {name}",
  "nào mày mới bằng được cái móng chân tao á {name}",
  "con mẹ mày ngu à {name}",
  "con chó {name} m sủa lẹ t coi",
  "m ngu mà phải không {name}",
  "{name} bede sủa lẹ đi",
  "thằng {name} đầu đinh đâu rồi",
  "sồn lên với tao đi nè thằng boài {name}",
  "thằng như mày xứng đáng ăn cứt tao á {name}",
  "cố gắng mà để win tao nhe {name}",
  "tao bất bại mà thằng ngu {name}",
  "ẳng hăng vào đi chứ mày ẳng gì mà nhạt nhẽo thế {name}",
  "mạnh mẽ lên xem nào {name}",
  "kém cỏi thế thằng mồ côi {name}",
  "phản kháng êi sao đứng yên chịu trận vậy {name}",
  "bất hiếu à {name}",
  "thằng đú {name} m sủa đi nào",
  "mẹ mày bị tao đầu độc tới chết mà {name}",
  "tao trùm mẹ rồi còn gì mà cãi nữa {name}",
  "kiki sủa đi nè {name}",
  "đàn ông hay đàn bà mà yếu đuối vậy {name}",
  "mau đi nè em êi {name}",
  "chậm chạp vậy {name}",
  "thằng bất tài vô dụng sủa mạnh lên đi {name}",
  "bà già mày bị tao treo cổ lên trên trần nhà mà {name}",
  "mày còn gì mới nữa không đó em {name}",
  "thằng đầu đinh cay cú tao à :))) {name}",
  "tao bá đạo vcl 🤣 {name}",
  "êi thằng nghèo sao câm rồi {name}",
  "mày xứng đáng ăn cứt tao :)) {name}",
  "thằng vô sinh cay cú tao à {name}",
  "mày cố gắng để được như tao đi {name}",
  "bắt chước tao à thằng ngu {name}",
  "quỳ lạy van xin tao đi nè {name}",
  "con hai néo như mày đang diễn hài cho tao cười đấy à {name}",
  "bị tao chửi tới hóa dại luôn rồi à {name}",
  "vô sinh mà đòi đẻ con à thằng boài {name}",
  "con cặc chưa mở mắt mà đòi đụ ai {name}",
  "mày sợ tao rồi hả {name}",
  "khắc tinh đời mày là tao nè {name}",
  "sủa hăng vào cho tao có hứng êi {name}",
  "thằng chó đẻ dân tộc miên hay sao mà đen thế {name}",
  "cố lên đi nè em êi {name}",
  "sắp win được rồi á {name}",
  "có cửa để win tao không {name}",
  "mày đang nằm mơ hay sao á {name}",
  "tao bất bại cmnr {name}",
  "tao là bá chủ thiên hạ đấy {name}",
  "tới sáng không {name}",
  "mày sửa nữa đi sao mà im re rồi {name}",
  "tao cho mày câm chưa mà mày câm thế {name}",
  "đấu tranh đê thằng nhu nhược {name}",
  "hăng hái lên đê em êi {name}",
  "đàn ông mà sức lức như đàn bả vậy {name}",
  "cay cú ôm hận tao suốt đời nè phải không {name}",
  "úi cái con chó {name} này bị ngu à"
"tao địt mẹ mày nát lồn mà=)))  {name}",
"Ê bóng lồn  {name}",
"mẹ mày bị tao cưỡng hiếp=)))  {name}",
"mẹ mày đưa lồn chó liếm à🤣👈  {name}",
"mày óc cái lồn mà  {name}",
"năn nỉ đi tao tha😏  {name}",
"bú lồn tao đi🤪  {name}",
"mày ẳng gì dị?😏  {name}",
"nghe nói mày sợ tao?  {name}",
"vô danh cấm sủa?😏  {name}",
"gì mày thèm cứt tao hả=)))?  {name}",
"sao mày lề mề dị con  {name}",
"mày có tuổi hở?😏  {name}",
"tuổi lồn ăn tao á😏?  {name}",
"tao đụ má mày ná thở mà😛 {name}"
]; // các câu chửi, thêm {name} để thay thế bằng tên người bị chửi và đồng thời tag người đó

async function Running({ message, args }) {
	const { mentions } = message;
	const mentionId = Object.keys(mentions)[0];
	const mentionName = mentions[mentionId];

	const isCallingStop = args[0]?.toLowerCase() === 'stop';

	if (!mentionId && !isCallingStop) return message.reply("Vui lòng tag người cần chửi");
	if (isCallingStop) {
		if (!global.chuilientuc.has(message.threadID)) return message.reply("Bot không đang chửi ai cả");
		global.chuilientuc.delete(message.threadID);
		return message.reply("Nhật Dz tha cho mày đó akakak");
	}


	const _d = global.chuilientuc.get(message.threadID);

	if (_d) {
		const now = Date.now();
		const time = _d.time;
		const diff = now - time;

		if (diff < DELAY_THREAD) {
			const timeLeft = (DELAY_THREAD - diff) / 1000;
			return message.reply(`Vui lòng đợi ${Math.ceil(timeLeft)}s để tiếp tục chửi`);
		}
	}
	
	global.chuilientuc.set(message.threadID, {
		time: Date.now()
	});


	for (let i = 0; i < CAU_CHUI.length; i++) {
		if (!global.chuilientuc.has(message.threadID)) return;
		const cauChui = CAU_CHUI[i];
		
		if (cauChui.includes('{name}')) {
			const cauChuiFinal = cauChui.replace('{name}', mentionName);

			await message.send({
				body: cauChuiFinal,
				mentions: [{
					tag: mentionName,
					id: mentionId
				}]
			});
		} else {
			await message.send(cauChui);
		}

		await new Promise(resolve => setTimeout(resolve, DELAY));
	}
}


export default {
		config,
		Running
}
