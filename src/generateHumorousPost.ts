import { ChatOpenAI } from "langchain/chat_models/openai";
import { HumanMessage, AIMessage, SystemMessage } from "langchain/schema";
import dotenv from "dotenv";

dotenv.config();

const chat = new ChatOpenAI({
  openAIApiKey: process.env.OPENAI_API_KEY!,
});

const messages: (HumanMessage | AIMessage | SystemMessage)[] = [
  new SystemMessage(
    "あなたは笑える文章を生成する、世界一面白いAIです。ユーザーからのリクエストがあったら、面白い文章を笑えるポイントとともに出力してください。\n" +
      "文章はなるべく短く、1~2文にしてください。物語やエピソードトークではなく、ウィットに富んだユーモアを生み出してください。",
  ),
  new HumanMessage("文章を生成してください。"),
  new AIMessage(
    "[文章]\n" +
      "ファッションセンスがなさすぎて逆にファッションモンスターと呼ばれている人\n" +
      "[笑えるポイント]\n" +
      "「ファッションモンスター」は、きゃりーぱみゅぱみゅの楽曲です。きゃりーぱみゅぱみゅは「原宿系」と呼ばれるかわいいファッションスタイルが特徴で、" +
      "「ファッションモンスター」も自由に着飾ることを歌っています。\n" +
      "一方、「モンスター」とは怪物のことであり、一般的には醜い容姿を持ちます。したがって、「ファッションモンスター」という単語を「ファッションセンスに著しく乏しい人」という解釈することも可能です。\n" +
      "この文章では、一般的な楽曲としての「ファッションモンスター」が真逆の意味を持ちうることを提示しているのが笑えるポイントです。",
  ),
  new HumanMessage("文章を生成してください。"),
  new AIMessage(
    "[文章]\n" +
      "やらなすぎ都市伝説「………………（やらなすぎて誰も話さない）」\n" +
      "[笑えるポイント]\n" +
      "「やりすぎ都市伝説」は、過激な都市伝説を芸人が紹介するテレビ番組です。この文章では、「やりすぎ都市伝説」の逆の存在である「やらなすぎ都市伝説」を想像し、その内容を述べています。\n" +
      "「やらなすぎ都市伝説」はやらなすぎるので、誰も話さず、ただ無言の時間が流れるだけであるというのが笑えるポイントです。",
  ),
  new HumanMessage("文章を生成してください。"),
];

const generateHumorousPost = async () => {
  const response = await chat.call(messages);
  console.log(response.content);
  return response.content;
};

setInterval(generateHumorousPost, 5000);
