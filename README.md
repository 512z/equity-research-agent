# Equity Research Agent

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-default.svg)](https://opensource.org/licenses/MIT)
[![Gemini](https://img.shields.io/badge/Gemini-8E75B2?style=flat&logo=googlegemini&logoColor=white)](https://ai.google.dev/)
[![Next](https://img.shields.io/badge/Next.js-111111?style=flat&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-111111?style=flat&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)

</div>

## 📊 Professional Equity Research in Minutes

Equity Research Agent is a powerful AI-driven tool designed to help investors and analysts generate professional stock research reports quickly. By combining advanced AI models with financial analysis methodologies, this tool can complete research that traditionally takes days in just minutes.

### 🌟 Key Advantages

- **Comprehensive Analysis Framework**: Three-tiered analysis from macroeconomics to industry to company-specific factors
- **Data-Driven Decisions**: Integration of multiple financial data sources for fact-based investment recommendations
- **Efficient Research Process**: Condenses hours or days of traditional research into minutes
- **Local Data Processing**: All research data and generated reports are stored locally, ensuring your privacy

## ✨ Core Features

- **Intelligent Stock Selection**: Input a company name or ticker symbol to quickly begin analysis
- **Customized Research Plans**: Generate tailored research approaches based on your investment focus
- **Multi-dimensional Data Collection**: Automatically gather macroeconomic, industry, and company-specific data
- **Professional Report Generation**: Create complete research reports with executive summaries, investment ratings, and target prices
- **Interactive Report Editing**: Regenerate or fine-tune specific sections of reports as needed

## 🚀 Recommended Configuration

For the best experience, we recommend the following configuration:

1. **AI Model**: [Gemini 2.5 Flash Preview (05-20)](https://ai.google.dev/gemini-api/docs/models/gemini-flash)
   - Provides the optimal balance between performance, speed, and cost
   - Supports complex financial analysis and reasoning

2. **Search Provider**: [Tavily](https://tavily.com/)
   - Search engine optimized for research tasks
   - Delivers high-quality, relevant financial information

## 🛠️ Quick Start

### Prerequisites

- Node.js 18.0.0 or higher
- npm, yarn, or pnpm

### Installation Steps

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/equity-research-agent.git
cd equity-research-agent
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Configure environment variables**

Create a `.env.local` file with the following configuration:

```bash
# AI provider
MCP_AI_PROVIDER=google
# Search provider
MCP_SEARCH_PROVIDER=tavily
# Thinking model
MCP_THINKING_MODEL=gemini-2.5-flash-preview-05-20
# Task model
MCP_TASK_MODEL=gemini-2.5-flash-preview-05-20
```

4. **Start the application**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to start using Equity Research Agent.

## 🌐 Deployment Options

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?project-name=equity-research-agent&repository-name=equity-research-agent)

### Cloudflare Pages

Refer to the [Cloudflare Pages Deployment Guide](./docs/How-to-deploy-to-Cloudflare-Pages.md).

### Docker

```bash
# Pull the image
docker pull yourusername/equity-research-agent:latest
docker run -d --name equity-research-agent -p 3333:3000 yourusername/equity-research-agent

# Or build your own image
docker build -t equity-research-agent .
docker run -d --name equity-research-agent -p 3333:3000 equity-research-agent
```

## 🔌 API Interface

Equity Research Agent provides a real-time API interface for initiating and monitoring research tasks.

### Server-Sent Events (SSE) API

```javascript
import { fetchEventSource } from '@microsoft/fetch-event-source';

fetchEventSource('/api/sse/live', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query: 'Analyze Apple investment value',
    provider: 'google',
    thinkingModel: 'gemini-2.5-flash-preview-05-20',
    taskModel: 'gemini-2.5-flash-preview-05-20',
    searchProvider: 'tavily'
  }),
  onmessage(event) {
    const data = JSON.parse(event.data);
    console.log(data);
  },
});
```

### GET Method

You can also access research reports directly via URL:

```
http://localhost:3000/api/sse/live?query=Analyze+Apple&provider=google&thinkingModel=gemini-2.5-flash-preview-05-20&taskModel=gemini-2.5-flash-preview-05-20&searchProvider=tavily
```

## ⚙️ MCP Server Configuration

```json
{
  "mcpServers": {
    "equity-research": {
      "url": "http://127.0.0.1:3000/api/mcp",
      "transportType": "streamable-http",
      "timeout": 600
    }
  }
}
```

> **Note**: Since equity research takes a significant time to execute, we recommend setting a longer timeout to avoid interrupting the research process.

## 🔍 How It Works

Equity Research Agent employs a professional three-phase research methodology:

1. **Stock Selection**: Input a company name or ticker symbol to begin analysis
2. **Research Plan Development**:
   - The system asks about your investment focus
   - Generates a comprehensive equity research plan
   - Creates targeted financial search queries
3. **Financial Data Collection**:
   - Macroeconomic data collection
   - Industry analysis data collection
   - Company-specific data collection
4. **Equity Research Report Generation**:
   - Creates an executive summary with investment rating and target price
   - Provides macroeconomic, industry, and company analysis
   - Delivers valuation analysis and investment recommendations

## 🛡️ Privacy Protection

Equity Research Agent prioritizes your privacy. **All research data and generated reports are stored locally on your device**. We do not collect or transmit your research data to external servers (unless you explicitly use server-side API calls, in which case data is sent to the API through your configured proxy).

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/) - The React framework for building performant web applications
- [Shadcn UI](https://ui.shadcn.com/) - Beautiful component library that streamlines UI development
- [AI SDKs](https://sdk.vercel.ai) - Powering the intelligent research capabilities
- [Deep Research](https://github.com/dzhng/deep-research) - Thanks to the original project for inspiration. This project is a renamed and modified version focused specifically on equity research

## 📝 License

Equity Research Agent is released under the [MIT License](LICENSE), allowing free use, modification, and distribution for both commercial and non-commercial purposes.
