import OpenAI from "openai";

const openai = new OpenAI({apiKey: `${process.env.NEXT_PUBLIC_OPENAI_KEY}`,});

export const createWorkout = async(userInfo) => {
  console.log('userInfo : ', userInfo)
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant designed to output JSON.",
      },
      { role: "user", content: "Who won the world series in 2020?" },
    ],
    model: "gpt-3.5-turbo-0125",
    response_format: { type: "json_object" },
  });
  console.log(completion.choices[0].message.content);
}
