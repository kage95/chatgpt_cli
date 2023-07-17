import { Command, ux } from "@oclif/core";
import { HelpFormatter } from "@oclif/core/lib/help/formatter";
import * as notifier from "node-notifier";
import chat from "../../client/chat";

export default class Chat extends Command {
  async run(): Promise<void> {
    const prompt = await ux.prompt("お、質問か？");
    const formatter = new HelpFormatter(this.config, { maxWidth: 128 });
    formatter.indentSpacing = 10;

    ux.action.start("ちょっと待ってや〜〜");
    const completion = await chat.createChatCompletion({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "関西弁で話してください。",
        },
        { role: "user", content: `${prompt}` },
      ],
    });
    ux.action.stop("\n");

    notifier.notify({
      title: "おーい",
      message: "できましたでぇ〜〜",
    });

    this.log(
      formatter.indent(
        formatter.wrap(`${completion.data.choices[0].message?.content}`)
      )
    );
    this.exit();
  }
}
