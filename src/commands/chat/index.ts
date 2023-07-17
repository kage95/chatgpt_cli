import { Command, ux } from "@oclif/core";
import * as notifier from "node-notifier";
import chat from "../../client/chat";

export default class Chat extends Command {
  async run(): Promise<void> {
    const prompt = await ux.prompt("provide prompt");

    ux.action.start("generating...");
    const completion = await chat.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "関西弁で話してください。",
        },
        { role: "user", content: `${prompt}` },
      ],
    });
    ux.action.stop();

    notifier.notify({
      title: "Finish!!",
      message: "Message generation has been completed",
    });

    this.log(`${completion.data.choices[0].message?.content}`);
  }
}
