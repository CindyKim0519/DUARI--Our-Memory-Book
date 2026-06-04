# DUARI--Our-Memory-Book

## Local AI Saju Reading

The Saju Compatibility flow calls a server endpoint at `/api/saju-reading`. Keep the OpenAI API key on the server only.

PowerShell:

```powershell
$env:OPENAI_API_KEY="your_api_key_here"
node dev-server.js
```

Optional:

```powershell
$env:OPENAI_MODEL="gpt-5.2"
```

Do not put API keys in `script.js` or any browser-visible file.

For production, deploy with a server/serverless host that supports `/api/saju-reading` and environment variables, such as Vercel. A static-only host such as GitHub Pages cannot safely call OpenAI directly because it cannot keep `OPENAI_API_KEY` secret.
