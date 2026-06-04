const openaiModel = process.env.OPENAI_MODEL || "gpt-5.2";

function outputTextFromResponse(data) {
  if (typeof data.output_text === "string") return data.output_text;
  return (data.output || [])
    .flatMap((item) => item.content || [])
    .filter((content) => content.type === "output_text" && typeof content.text === "string")
    .map((content) => content.text)
    .join("\n");
}

async function createSajuReading(input) {
  if (!process.env.OPENAI_API_KEY) {
    const error = new Error("OPENAI_API_KEY is not configured.");
    error.statusCode = 503;
    throw error;
  }

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: openaiModel,
      instructions: [
        "You write warm English-language, saju-inspired couple compatibility readings for a private diary app.",
        "Use the provided real names, genders, birthdays, and birth times. If birth time is unknown, acknowledge the reading is less specific.",
        "Create exactly six category readings with keys: fate, fun, love, wealth, children, marriage.",
        "Do not claim certainty or make medical, legal, financial, or deterministic predictions.",
        "Keep the tone gentle, reflective, romantic, and entertainment-focused.",
        "Return only JSON matching the schema."
      ].join(" "),
      input: JSON.stringify(input),
      text: {
        format: {
          type: "json_schema",
          name: "saju_compatibility_reading",
          strict: true,
          schema: {
            type: "object",
            additionalProperties: false,
            required: ["score", "summary", "categories", "gentleAdvice"],
            properties: {
              score: { type: "integer", minimum: 1, maximum: 100 },
              summary: { type: "string" },
              categories: {
                type: "array",
                minItems: 6,
                maxItems: 6,
                items: {
                  type: "object",
                  additionalProperties: false,
                  required: ["key", "score", "reading"],
                  properties: {
                    key: { type: "string", enum: ["fate", "fun", "love", "wealth", "children", "marriage"] },
                    score: { type: "integer", minimum: 1, maximum: 100 },
                    reading: { type: "string" }
                  }
                }
              },
              gentleAdvice: { type: "string" }
            }
          }
        }
      }
    })
  });

  const data = await response.json();
  if (!response.ok) {
    const error = new Error(data.error?.message || "OpenAI request failed.");
    error.statusCode = response.status;
    throw error;
  }

  return JSON.parse(outputTextFromResponse(data));
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed." });
    return;
  }

  try {
    const reading = await createSajuReading(req.body || {});
    res.status(200).json({ reading });
  } catch (error) {
    res.status(error.statusCode || 500).json({ error: error.message || "Server error." });
  }
}
