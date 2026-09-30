import { defaultProviderAccountConfig, type ProviderPreset } from "@ccr/core/providers/presets/types";

export const infomaniakProviderPreset: ProviderPreset = {
  account: defaultProviderAccountConfig,
  aliases: ["infomaniak", "infomaniak ai", "ai services"],
  endpoints: [
    {
      baseUrl: "https://api.infomaniak.com/2/ai/{product_id}/openai/v1",
      label: "OpenAI-compatible",
      pathParameters: [
        {
          label: "Product ID",
          name: "product_id",
          placeholder: "Enter your AI Services product ID"
        }
      ],
      protocols: ["openai_chat_completions"]
    }
  ],
  id: "infomaniak",
  name: "Infomaniak AI Services",
  websiteUrl: "https://www.infomaniak.com/en/hosting/ai-tools"
};
