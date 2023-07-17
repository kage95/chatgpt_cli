import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";
const path = require("path");

dotenv.config({ path: path.resolve(__dirname, "../../.env") });

const configuration = new Configuration({
  organization: process.env.ORGANIZATION,
  apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);
export default openai;
