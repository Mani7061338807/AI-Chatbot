import { Configuration } from "openai";

export const configureOpenAI = () => {
  const config = new Configuration({
    apiKey: process.env.OPEN_AI_SECRET || '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',
    organization: process.env.OPENAI_ORAGANIZATION_ID || 'org-vYvvSGzk6I9JZw0JEWFZ1eWU',
  });
  return config;
};
