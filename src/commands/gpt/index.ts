import { Args, Command } from "@oclif/core";
import gpt from "../../client/gpt";

export default class Gpt extends Command {
  static flags = {};

  static args = {
    prompt: Args.string({
      description: "provide prompt",
      required: true,
    }),
  };

  async run(): Promise<void> {
    const { args } = await this.parse(Gpt);

    const completion = await gpt.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: `${args.prompt}` }],
    });

    this.log(`${completion.data.choices[0].message?.content}`);
  }
}
