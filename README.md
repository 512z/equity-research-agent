<div align="center">
<h1>Equity Research Agent</h1>

![GitHub deployments](https://img.shields.io/github/deployments/u14app/gemini-next-chat/Production)
![GitHub Release](https://img.shields.io/github/v/release/u14app/deep-research)
![Docker Image Size](https://img.shields.io/docker/image-size/xiangfa/deep-research/latest)
![Docker Pulls](https://img.shields.io/docker/pulls/xiangfa/deep-research)
[![License: MIT](https://img.shields.io/badge/License-MIT-default.svg)](https://opensource.org/licenses/MIT)

[![Gemini](https://img.shields.io/badge/Gemini-8E75B2?style=flat&logo=googlegemini&logoColor=white)](https://ai.google.dev/)
[![Next](https://img.shields.io/badge/Next.js-111111?style=flat&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-111111?style=flat&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)

[![Vercel](https://img.shields.io/badge/Vercel-111111?style=flat&logo=vercel&logoColor=white)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fu14app%2Fdeep-research&project-name=deep-research&repository-name=deep-research)
[![Cloudflare](https://img.shields.io/badge/Cloudflare-F69652?style=flat&logo=cloudflare&logoColor=white)](./docs/How-to-deploy-to-Cloudflare-Pages.md)
[![PWA](https://img.shields.io/badge/PWA-blue?style=flat&logo=pwa&logoColor=white)](https://research.u14.app/)

</div>

**Professional Equity Research Reports in Minutes**

Equity Research Agent uses powerful AI models to generate comprehensive stock analysis reports in just a few minutes. It follows the professional equity research workflow with macroeconomic analysis, industry analysis, and company analysis, combined with internet data collection, to provide investment insights and recommendations. **Your financial research remains private - all data is processed and stored locally.**

## ✨ Features

### Professional Investment Analysis

- **Comprehensive Equity Research:** Generates professional stock analysis reports following the standard three-phase approach used by investment banks and research firms.
- **Macroeconomic Analysis:** Analyzes key economic indicators, monetary policy, fiscal policy, and economic trends that impact stock performance.
- **Industry Analysis:** Evaluates industry structure, growth trends, competitive landscape using frameworks like Porter's Five Forces, regulatory environment, and technological disruptions.
- **Company Analysis:** Provides in-depth analysis of business models, financial performance, management assessment, competitive advantages, and risk factors.
- **Valuation Analysis:** Applies appropriate valuation methodologies (DCF, multiples, etc.) to determine fair value and target price.
- **Investment Recommendations:** Delivers clear Buy/Hold/Sell ratings with supporting rationale and catalysts that could move the stock.

### Powerful Research Capabilities

- **Financial Data Collection:** Automatically searches for and extracts relevant financial metrics, analyst opinions, and market data.
- **Rapid Analysis:** Generates comprehensive equity research reports in minutes, significantly accelerating your investment research process.
- **Iterative Research:** Refine or adjust the research focus at any stage of the analysis process.
- **Local Knowledge Base:** Upload financial reports, investor presentations, and other documents to enhance the research.
- **Knowledge Graph:** Generate visual representations of key relationships between financial entities and concepts.
- **Research History:** Save and review previous equity research reports for comparison and tracking.

### Technical Features

- **Multi-LLM Support:** Compatible with various AI models including Gemini, OpenAI, Anthropic, and others.
- **Web Search Integration:** Connects to search engines to gather the latest financial data and market news.
- **Privacy-Focused:** All financial research data is processed and stored locally.
- **Multi-language Support**: Available in English, 简体中文, and Español.
- **Modern UI:** Built with Next.js and Shadcn UI for a clean, professional experience.
- **Deployment Options:** Deploy to Vercel, Cloudflare, or other platforms.
- **MIT Licensed:** Open-source and freely available for personal and commercial use.

## 🎯 Roadmap

- [x] Professional equity research report structure
- [x] Macroeconomic, industry, and company analysis framework
- [x] Financial data extraction and processing
- [x] Investment recommendation system
- [ ] Integration with financial data APIs (Yahoo Finance, Alpha Vantage, etc.)
- [ ] Financial chart generation and visualization
- [ ] Portfolio analysis and comparison tools
- [ ] Real-time market data updates

## 🚀 Getting Started

### Recommended Configuration

For the best performance with Equity Research Agent, we recommend the following configuration:

1. **AI Model**: [Gemini 2.5 Flash Preview (05-20)](https://ai.google.dev/gemini-api/docs/models/gemini-flash)
   - This model provides the best balance of performance, speed, and cost for equity research tasks
   - Supports complex financial analysis and reasoning

2. **Search Provider**: [Tavily](https://tavily.com/)
   - Specialized search engine optimized for retrieving accurate financial information
   - Provides high-quality, relevant data for stock analysis

### Step-by-Step Setup

1. **Get API Keys**:
   - [Google AI Studio API Key](https://aistudio.google.com/app/apikey) (Free tier available)
     - Sign up or log in to Google AI Studio
     - Go to "API Keys" section and create a new key
     - Make sure you have access to Gemini 2.5 models
   
   - [Tavily API Key](https://tavily.com/#api)
     - Sign up for Tavily and navigate to your dashboard
     - Generate an API key from your account settings

2. **Deploy the project** to your preferred platform:

   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fu14app%2Fdeep-research&project-name=equity-research-agent&repository-name=equity-research-agent)

   For Cloudflare deployment, follow [these instructions](./docs/How-to-deploy-to-Cloudflare-Pages.md).

3. **Configure your environment**:
   - Enter your Google AI API key in the settings
   - Set the model to `gemini-2.5-flash-preview-05-20`
   - Enter your Tavily API key
   - Set the search provider to `tavily`

4. **Start analyzing stocks** by entering a company name or ticker symbol

### Using Alternative AI Models

While we recommend Gemini 2.5 Flash Preview, you can also use other AI models:

1. Deploy the project as described above
2. In settings, choose your preferred AI model provider
3. Enter the appropriate API key
4. Configure the API base URL if needed
5. Begin your equity research

## ⌨️ Development

Follow these steps to get Deep Research up and running on your local browser.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18.18.0 or later recommended)
- [pnpm](https://pnpm.io/) or [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/u14app/deep-research.git
   cd deep-research
   ```

2. **Install dependencies:**

   ```bash
   pnpm install  # or npm install or yarn install
   ```

3. **Set up Environment Variables:**

   You need to modify the file `env.tpl` to `.env`, or create a `.env` file and write the variables to this file.

   ```bash
   # For Development
   cp env.tpl .env.local
   # For Production
   cp env.tpl .env
   ```

4. **Run the development server:**

   ```bash
   pnpm dev  # or npm run dev or yarn dev
   ```

   Open your browser and visit [http://localhost:3000](http://localhost:3000) to access Deep Research.

### Custom Model List

The project allow custom model list, but **only works in proxy mode**. Please add an environment variable named `NEXT_PUBLIC_MODEL_LIST` in the `.env` file or environment variables page.

Custom model lists use `,` to separate multiple models. If you want to disable a model, use the `-` symbol followed by the model name, i.e. `-existing-model-name`. To only allow the specified model to be available, use `-all,+new-model-name`.

## 🚢 Deployment

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fu14app%2Fdeep-research&project-name=deep-research&repository-name=deep-research)

### Cloudflare

Currently the project supports deployment to Cloudflare, but you need to follow [How to deploy to Cloudflare Pages](./docs/How-to-deploy-to-Cloudflare-Pages.md) to do it.

### Docker

> The Docker version needs to be 20 or above, otherwise it will prompt that the image cannot be found.

> ⚠️ Note: Most of the time, the docker version will lag behind the latest version by 1 to 2 days, so the "update exists" prompt will continue to appear after deployment, which is normal.

```bash
docker pull xiangfa/deep-research:latest
docker run -d --name deep-research -p 3333:3000 xiangfa/deep-research
```

You can also specify additional environment variables:

```bash
docker run -d --name deep-research \
   -p 3333:3000 \
   -e ACCESS_PASSWORD=your-password \
   -e GOOGLE_GENERATIVE_AI_API_KEY=AIzaSy... \
   xiangfa/deep-research
```

or build your own docker image:

```bash
docker build -t deep-research .
docker run -d --name deep-research -p 3333:3000 deep-research
```

If you need to specify other environment variables, please add `-e key=value` to the above command to specify it.

Deploy using `docker-compose.yml`:

```bash
version: '3.9'
services:
   deep-research:
      image: xiangfa/deep-research
      container_name: deep-research
      environment:
         - ACCESS_PASSWORD=your-password
         - GOOGLE_GENERATIVE_AI_API_KEY=AIzaSy...
      ports:
         - 3333:3000
```

or build your own docker compose:

```bash
docker compose -f docker-compose.yml build
```

### Static Deployment

You can also build a static page version directly, and then upload all files in the `out` directory to any website service that supports static pages, such as Github Page, Cloudflare, Vercel, etc..

```bash
pnpm build:export
```

## ⚙️ Configuration

As mentioned in the "Getting Started" section, Deep Research utilizes the following environment variables for server-side API configurations:

Please refer to the file [env.tpl](./env.tpl) for all available environment variables.

**Important Notes on Environment Variables:**

- **Privacy Reminder:** These environment variables are primarily used for **server-side API calls**. When using the **local API mode**, no API keys or server-side configurations are needed, further enhancing your privacy.

- **Multi-key Support:** Supports multiple keys, each key is separated by `,`, i.e. `key1,key2,key3`.

- **Security Setting:** By setting `ACCESS_PASSWORD`, you can better protect the security of the server API.

- **Make variables effective:** After adding or modifying this environment variable, please redeploy the project for the changes to take effect.

## 📄 API documentation

Currently the project supports two forms of API: Server-Sent Events (SSE) and Model Context Protocol (MCP).

### Server-Sent Events API

The Deep Research API provides a real-time interface for initiating and monitoring complex research tasks.

Recommended to use the API via `@microsoft/fetch-event-source`, to get the final report, you need to listen to the `message` event, the data will be returned in the form of a text stream.

#### POST method

Endpoint: `/api/sse`

Method: `POST`

Body:

```typescript
interface SSEConfig {
  // Research topic
  query: string;
  // AI provider, Possible values ​​include: google, openai, anthropic, deepseek, xai, mistral, azure, openrouter, openaicompatible, pollinations, ollama
  provider: string;
  // Thinking model id
  thinkingModel: string;
  // Task model id
  taskModel: string;
  // Search provider, Possible values ​​include: model, tavily, firecrawl, exa, bocha, searxng
  searchProvider: string;
  // Response Language, also affects the search language. (optional)
  language?: string;
  // Maximum number of search results. Default, `5` (optional)
  maxResult?: number;
  // Whether to include content-related images in the final report. Default, `true`. (optional)
  enableCitationImage?: boolean;
  // Whether to include citation links in search results and final reports. Default, `true`. (optional)
  enableReferences?: boolean;
}
```

Headers:

```typescript
interface Headers {
  "Content-Type": "application/json";
  // If you set an access password
  // Authorization: "Bearer YOUR_ACCESS_PASSWORD";
}
```

See the detailed [API documentation](./docs/deep-research-api-doc.md).

#### GET method

This is an interesting implementation. You can watch the whole process of deep research directly through the URL just like watching a video.

You can access the deep research report via the following link:

```text
http://localhost:3000/api/sse/live?query=AI+trends+for+this+year&provider=pollinations&thinkingModel=openai&taskModel=openai-fast&searchProvider=searxng
```

Query Params:

```typescript
// The parameters are the same as POST parameters
interface QueryParams extends SSEConfig {
  // If you set the `ACCESS_PASSWORD` environment variable, this parameter is required
  password?: string;
}
```

### Model Context Protocol (MCP) Server

Currently supports `StreamableHTTP` and `SSE` Server Transport.

StreamableHTTP server endpoint: `/api/mcp`, transport type: `streamable-http`

SSE server endpoint: `/api/mcp/sse`, transport type: `sse`

```json
{
  "mcpServers": {
    "deep-research": {
      "url": "http://127.0.0.1:3000/api/mcp",
      "transportType": "streamable-http",
      "timeout": 600
    }
  }
}
```

**Note:** Since deep research take a long time to execute, you need to set a longer timeout to avoid interrupting the study.

If your server sets `ACCESS_PASSWORD`, the MCP service will be protected and you need to add additional headers parameters:

```json
{
  "mcpServers": {
    "deep-research": {
      "url": "http://127.0.0.1:3000/api/mcp",
      "transportType": "streamable-http",
      "timeout": 600,
      "headers": {
        "Authorization": "Bearer YOUR_ACCESS_PASSWORD"
      }
    }
  }
}
```

**Enabling MCP service requires setting global environment variables:**

```bash
# MCP Server AI provider
# Possible values ​​include: google, openai, anthropic, deepseek, xai, mistral, azure, openrouter, openaicompatible, pollinations, ollama
MCP_AI_PROVIDER=google
# MCP Server search provider. Default, `model`
# Possible values ​​include: model, tavily, firecrawl, exa, bocha, searxng
MCP_SEARCH_PROVIDER=tavily
# MCP Server thinking model id, the core model used in deep research.
MCP_THINKING_MODEL=gemini-2.0-flash-thinking-exp
# MCP Server task model id, used for secondary tasks, high output models are recommended.
MCP_TASK_MODEL=gemini-2.0-flash-exp
```

**Note:** To ensure that the MCP service can be used normally, you need to set the environment variables of the corresponding model and search engine. For specific environment variable parameters, please refer to [env.tpl](./env.tpl).

## 🪄 How it works

1. **Stock Selection**

   - Input a company name or ticker symbol (e.g., Apple or AAPL)
   - Upload financial reports or investor presentations (optional)
   - The system begins analyzing the stock

2. **Research Plan Development**

   - The system asks clarification questions about your investment focus
     - Provide additional research requirements (optional)
     - Specify areas of interest (growth potential, dividend policy, etc.)
   - The system generates a comprehensive equity research plan following the professional three-phase approach:
     - Macroeconomic analysis
     - Industry analysis
     - Company analysis
   - You can review and approve the research plan
     - The system generates targeted financial search queries

3. **Financial Data Collection**

   - Macroeconomic data collection
     - Economic indicators (GDP, inflation, interest rates, etc.)
     - Monetary and fiscal policy information
     - Market trends and forecasts
   - Industry analysis data collection
     - Industry structure and competitive landscape
     - Growth trends and market size
     - Regulatory environment and technological disruptions
   - Company-specific data collection
     - Financial performance metrics
     - Management team information
     - Competitive advantages and market positioning
     - Risk factors and challenges
   - You can suggest additional financial metrics or market factors to consider (optional)

4. **Equity Research Report Generation**

   - Specify report format preferences (optional)
   - The system generates a professional equity research report including:
     - Executive summary with investment rating and target price
     - Macroeconomic analysis
     - Industry analysis
     - Company analysis
     - Valuation analysis
     - Investment recommendation
     - Risk factors
   - You can regenerate or refine specific sections of the report (optional)

```mermaid
flowchart TB
    A[Stock Selection]:::start

    subgraph Plan[Research Plan Development]
        B1[System asks investment focus questions]:::process
        B2[Generate equity research plan]:::process
        B3[Generate financial search queries]:::process
        B1 --> B2
        B2 --> B3
    end

    subgraph Collect[Financial Data Collection]
        C1[Macroeconomic Analysis]:::collection
        C2[Industry Analysis]:::collection
        C3[Company Analysis]:::collection
        C4[Additional Research]:::recursive
        Refine{More financial data needed?}:::decision

        C1 --> C2
        C2 --> C3
        C3 --> Refine
        Refine -->|Yes| C4
        C4 --> Refine
    end

    subgraph Report[Equity Research Report Generation]
        D1[Executive Summary & Rating]:::output
        D2[Analysis Sections]:::output
        D3[Valuation & Recommendation]:::output
        D1 --> D2
        D2 --> D3
    end

    A --> Plan
    B3 --> C1
    Refine -->|No| Report

    %% Styling
    classDef start fill:#7bed9f,stroke:#2ed573,color:black
    classDef process fill:#70a1ff,stroke:#1e90ff,color:black
    classDef recursive fill:#ffa502,stroke:#ff7f50,color:black
    classDef output fill:#ff4757,stroke:#ff6b81,color:black
    classDef collection fill:#a8e6cf,stroke:#3b7a57,color:black
    classDef decision fill:#c8d6e5,stroke:#8395a7,color:black

    class A start
    class B1,B2,B3 process
    class C1,C2,C3 collection
    class C4 recursive
    class Refine decision
    class D1,D2,D3 output
```

## 🙋 FAQs

**Why does my Ollama or SearXNG not work properly and displays the error `TypeError: Failed to fetch`?**

If your request generates `CORS` due to browser security restrictions, you need to configure parameters for Ollama or SearXNG to allow cross-domain requests. You can also consider using the server proxy mode, which is a backend server that makes requests, which can effectively avoid cross-domain issues.

## 🛡️ Privacy

Deep Research is designed with your privacy in mind. **All research data and generated reports are stored locally on your machine.** We do not collect or transmit any of your research data to external servers (unless you are explicitly using server-side API calls, in which case data is sent to API through your configured proxy if any). Your privacy is our priority.

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/) - The React framework for building performant web applications.
- [Shadcn UI](https://ui.shadcn.com/) - Beautifully designed components that helped streamline the UI development.
- [AI SDKs](https://sdk.vercel.ai) - Powering the intelligent research capabilities of Deep Research.
- [Deep Research](https://github.com/dzhng/deep-research) - Thanks to the project `dzhng/deep-research` for inspiration.

## 🤝 Contributing

We welcome contributions to Deep Research! If you have ideas for improvements, bug fixes, or new features, please feel free to:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Submit a pull request.

For major changes, please open an issue first to discuss your proposed changes.

## ✉️ Contact

If you have any questions, suggestions, or feedback, please create a new [issue](https://github.com/u14app/deep-research/issues).

## 📝 License

Deep Research is released under the [MIT License](LICENSE). This license allows for free use, modification, and distribution for both commercial and non-commercial purposes.
