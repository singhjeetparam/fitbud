import OpenAI from "openai";
const openAi = new OpenAI();

async function main(){
    const completion = await openAi.chat.completions.create({
        messages: [{role: 'system', content: 'you are a helpful assisstant'}],
        model: 'gpt-3.5-turbo',
    });

    console.log(completion)
}

main()