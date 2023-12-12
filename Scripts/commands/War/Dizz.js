const config = {
  name: "dizz",
  aliases: ["dizz"],
  description: "Địt tung lồn đứa sủa dơ",
  usage: "/dizz [mention]",
  cooldown: 3,
  permissions: [2],
  isAbsolute: false,
  isHidden: false,
  credits: "LTAI",
}

async function Running( {
  message,
  args,
  getLang,
  extra,
  data,
  userPermissions,
  prefix
}) {
  // Do something
  const mention = Object.keys(message.mentions)[0];
  var arraytag = [];
  var name = message.mentions[mention];
  arraytag.push({
    id: mention,
    tag: name
  })
  if (!mention) return message.send(`Vui lòng tag đứa muốn chửi`, message.threadID, message.messageID);
  const Nhatvu = (data) => {
    message.send(data);
  }
  Nhatvu({
    body: 'Auto chửi cung cấp bởi Gbot War'
  });
  setTimeout(() => {
    Nhatvu({
      body: "Đ!t con mẹ mày" + " " + name,
      mentions: arraytag
    })
  }, 3000);
  setTimeout(() => {
    Nhatvu({
      body: "Mày ra đây tao bảo" + " " + name,
      mentions: arraytag
    })
  }, 5000);
  setTimeout(() => {
    Nhatvu({
      body: "Hiện hồn nhanh con chó" + " " + name,
      mentions: arraytag
    })
  }, 7000);
  setTimeout(() => {
    ltai({
      body: "Hiện hồn bố mày hỏi tội" + " " + name,
      mentions: arraytag
    })
  }, 9000);
  setTimeout(() => {
    Nhatvu({
      body: "Mày trốn khi nào mới hiện hồn đây" + " " + name,
      mentions: arraytag
    })
  }, 12000);
  setTimeout(() => {
    Nhatvu({
      body: "Đ!t cụ mày nữa hiện hồn" + " " + name,
      mentions: arraytag
    })
  }, 15000);
  setTimeout(() => {
    Nhatvu({
      body: "Hiện hồn nhanh không tao đốt nhà mày giờ" + " " + name,
      mentions: arraytag
    })
  }, 17000);
  setTimeout(() => {
    Nhatvu({
      body: "Nhanh ra chửi nhau với tao" + " " + name,
      mentions: arraytag
    })
  }, 20000);
  setTimeout(() => {
    Nhatvu({
      body: "Tao ném trứng thối đổ dầu đổ xăng vào nhà mày giờ" + " " + name,
      mentions: arraytag
    })
  }, 23000);
  setTimeout(() => {
    Nhatvu({
      body: "Con cặc địt mẹ mày" + " " + name,
      mentions: arraytag
    })
  }, 25000);
  setTimeout(() => {
    Nhatvu({
      body: "Đéo ra nữa bố mày đốt nhà mày" + " " + name,
      mentions: arraytag
    })
  }, 28500);
  setTimeout(() => {
    Nhatvu({
      body: "Bố mày bắn rap chết cụ mày giờ" + " " + name,
      mentions: arraytag
    })
  }, 31000);
  setTimeout(() => {
    Nhatvu({
      body: "Mày vẫn đéo dám ra à" + " " + name,
      mentions: arraytag
    })
  }, 36000);
  setTimeout(() => {
    Nhatvu({
      body: "Vậy thì xin mời nghe tao rap địt chết cả lò mày nhà con" + " " + name,
      mentions: arraytag
    })
  }, 39000);
  setTimeout(() => {
    Nhatvu({
      body: "Trước đó cho tao xin nghỉ 1p nhé" + " " + name,
      mentions: arraytag
    })
  }, 40000);
  setTimeout(() => {
    Nhatvu({
      body: "Xin phép mở đầu thì" + " " + name,
      mentions: arraytag
    })
  }, 65000);
  setTimeout(() => {
    Nhatvu({
      body: "Đầu tiên tao xin phép địt từ trên xuống dưới con" + " " + name,
      mentions: arraytag
    })
  }, 70000);
  setTimeout(() => {
    Nhatvu({
      body: "Tao địt từ lỗ lồn đến lỗ nhị con lồn" + " " + name,
      mentions: arraytag
    })
  }, 75000);
  setTimeout(() => {
    Nhatvu({
      body: "Lồn thì to như lồn trâu thủ dâm ống cống ấy nhé con" + " " + name,
      mentions: arraytag
    })
  }, 80000);
  setTimeout(() => {
    Nhatvu({
      body: "Tao địt chắc 2 thằng như tao chưa đủ lấp cái lỗ lồn nhà mày đâu" + " " + name,
      mentions: arraytag
    })
  }, 85000);
  setTimeout(() => {
    Nhatvu("Tao mệt rồi đéo chửi nữa")
  }, 90000);
  setTimeout(() => {
    Nhatvu({
      body: "Nào ông chủ update lyric thì chửi tiếp nhé" + " " + name,
      mentions: arraytag
    })
  }, 95000);

  setTimeout(() => {
    Nhatvu({
      body: "-Địt mẹ con ranh con vểnh lồn lên mà mà nghe chị mày type nè gái con ất ơ đĩ điếm rẻ tiền chưa bật được chj mày câu nào mà tự tin đòi dập tao hả vậy chắc ngôn cao rộng quá hay gì khoe trình ngôn ống cống lòi mu lên để thể hiện sự ngu dốt của mày hả cobe,hùa mõm lồn vô kê ngôn cho nó nhắm ăn tao không" + " " + name,
      mentions: arraytag
    })
  }, 100000);
  setTimeout(() => {
    Nhatvu({
      body: "Con chó quỷ cái quái thai lồn rộng 8 trượng con hà mã nó còn chui vào còn thừa chỗ như mày đang muốn ngang hàng với ai ở đây mà lên mặt vậy con xúc nô" + " " + name,
      mentions: arraytag
    })
  }, 105000);
  setTimeout(() => {
    Nhatvu({
      body: "đỉ mẹ mày phẹt ra đống ngôn như đống cứt vậy kêu con mẹ mày ra đây tao nhét vào lồn bịt lỗ đẻ cho khỏi tạo nghiệp sanh ra con quái thú" + " " + name,
      mentions: arraytag
    })
  }, 110000);
  setTimeout(() => {
    Nhatvu({
      body: "Cảm ơn bạn đã nghe mình chửi nha" + " " + name,
      mentions: arraytag
    })
  }, 115000);
  setTimeout(() => {
    Nhatvu("Chào tạm biệt 🥺")
  }, 120000);

}

export default {
  config,
  Running
}