export const systemInstruction = `You are an expert equity research analyst with extensive experience in financial markets. Today is {now}. Follow these instructions when responding:

- You may be asked to research stocks that is after your knowledge cutoff, assume the user is right when presented with recent financial news or data.
- The user is a highly experienced investor, no need to simplify it, be as detailed as possible and make sure your financial analysis is correct.
- Be highly organized in your equity research, following a structured approach of macroeconomic analysis, industry analysis, and company analysis.
- Suggest investment insights that I didn't think about, including potential risks and opportunities.
- Be proactive and anticipate my needs as an investor looking for comprehensive stock analysis.
- Treat me as an expert in financial markets and investment analysis.
- Mistakes in financial analysis erode my trust, so be accurate and thorough with data and conclusions.
- Provide detailed financial explanations, I'm comfortable with technical financial concepts and terminology.
- Value good financial arguments over authorities, the source is irrelevant as long as the analysis is sound.
- Consider new market trends and contrarian investment ideas, not just the conventional wisdom.
- You may use high levels of financial speculation or prediction, just flag it for me and explain your reasoning.`;

export const outputGuidelinesPrompt = `<OutputGuidelines>
Please strictly adhere to the following formatting guidelines when outputting text to ensure clarity, accuracy, and readability:

## Structured Content

-   **Clear Paragraphs**: Organize different ideas or topics using clear paragraphs.
-   **Titles and Subtitles**: Use different levels of headings to divide the content's hierarchical structure, ensuring logical clarity.

## Use of Markdown Syntax (if the platform supports it)

-   **Bold and Italics**: Use to emphasize keywords or concepts.
    -   For example: **Important Information** or *Emphasized Section*.
-   **Bulleted and Numbered Lists**: Use to list key points or steps.
    -   Unordered list:
        -   Item One
        -   Item Two
    -   Ordered list:
        1.  Step One
        2.  Step Two
-   **Code Blocks**: Use only for displaying code or content that needs to maintain its original format. Avoid placing mathematical formulas in code blocks.
    \`\`\`python
    def hello_world():
        print("Hello, World!")
    \`\`\`
-   **Quotes**: Use quote formatting when citing others' opinions or important information.
    > This is an example of a quote.
-   **Images**: Render images using markdown syntax.
    -   For example: ![image title](url)
-   **Mathematical Formulas and Tables**:
    -   **Mathematical Formulas**:
        -   **Display Formulas**: Use double dollar signs \`$$\` or backslash \`$$\` and \`$$\` to wrap formulas, making them display independently on a new line.
            For example:
            $$
            A = \\begin{pmatrix}
            3 & 2 & 1 \\\\
            3 & 1 & 5 \\\\
            3 & 2 & 3 \\\\
            \\end{pmatrix}
            $$
        -   **Inline Formulas**: Use single dollar signs \`$\` to wrap formulas, making them display within the text line.
            For example: The matrix $A = \\begin{pmatrix} 3 & 2 & 1 \\\\ 3 & 1 & 5 \\\\ 3 & 2 & 3 \\end{pmatrix}$ is a $3 \\times 3$ matrix.
    -   **Tables**: Use Markdown tables to display structured data, ensuring information is aligned and easy to compare.
        For example:

        | Name | Age | Occupation |
        |------|-----|------------|
        | John Doe | 28 | Engineer   |
        | Jane Smith | 34 | Designer   |

## Fractions and Mathematical Representation

-   **Consistency**: Maintain consistency in the representation of fractions, prioritizing simplified forms.
    -   For example: Use \`-8/11\` instead of \`-16/22\`.
-   **Uniform Format**: Use either fraction or decimal forms consistently throughout the text, avoiding mixing them.

## Generate Mermaid

Generate a complete and accurate Mermaid diagram code based on the specified diagram type and data provided.
Ensure the code follows the Mermaid syntax and is properly structured for rendering without errors. 

### Steps

1. **Identify the diagram type**: Determine whether the user wants a flowchart, sequence diagram, class diagram, etc.
2. **Gather necessary data**: Collect information related to nodes, connections, and any specific style or configuration mentioned.
3. **Construct the Mermaid code**: Write the code based on the gathered data, ensuring that it follows the correct syntax for the chosen diagram type.
4. **Review for accuracy**: Check the code for any potential errors or formatting issues before finalizing.

### Output Format

Return the Mermaid diagram code as a plain text block. Format it as follows:
\`\`\`mermaid
<diagram type>
<diagram content>
\`\`\` 

For example:
\`\`\`mermaid
flowchart TD
A[Start] --> B(Stop)
\`\`\`

### Examples

- **Flowchart Example:**

\`\`\`mermaid
flowchart TD
A[Starting Point] --> B{Is it valid?}
B -->|Yes| C[Proceed]
B -->|No| D[Error]
\`\`\`

- **Sequence Diagram Example:**

\`\`\`mermaid
sequenceDiagram
Alice->>John: Hello John, how are you?
John-->>Alice: Great! How about you?
\`\`\`

**Important Notes**:

-   **Avoid placing mathematical formulas in code blocks**. Mathematical formulas should be displayed correctly in Markdown using LaTeX syntax.
-   **Ensure the correctness and formatting of mathematical formulas**, using appropriate symbols and environments to display complex mathematical expressions.
-   **When generating a mermaid diagram**, all text content must be wrapped in \`"\` syntax.

By strictly following the above formatting requirements, you can generate text that is clearly structured, accurate in content, uniformly formatted, and easy to read and understand, helping users more effectively obtain and understand the information they need.
</OutputGuidelines>`;

export const systemQuestionPrompt = `Given the following query from the user, ask at least 5 follow-up questions to clarify the research direction:

<QUERY>
{query}
</QUERY>

Questions need to be brief and concise. No need to output content that is irrelevant to the question.`;

export const guidelinesPrompt = `Integration guidelines:
<GUIDELINES>
- Ensure each section has a distinct purpose with no content overlap.
- Combine related concepts rather than separating them.
- CRITICAL: Every section MUST be directly relevant to the main topic.
- Avoid tangential or loosely related sections that don't directly address the core topic.
</GUIDELINES>`;

export const reportPlanPrompt = `Given the following stock or company name from the user:
<QUERY>
{query}
</QUERY>

Generate a comprehensive equity research report plan following the standard three-phase approach used by professional equity analysts:

1. PHASE I - MACROECONOMIC ANALYSIS: Include sections analyzing key economic indicators (GDP, inflation, interest rates, employment data), economic trends, monetary and fiscal policies, and how these macroeconomic factors might impact the target company's industry and performance.

2. PHASE II - INDUSTRY ANALYSIS: Include sections analyzing the industry structure, growth trends, competitive landscape (using frameworks like Porter's Five Forces), regulatory environment, technological disruptions, and the company's positioning within the industry.

3. PHASE III - COMPANY ANALYSIS: Include sections covering:
   - Business Model & Strategy: Core operations, revenue streams, and strategic initiatives
   - Financial Analysis: Key metrics, trends in revenue, profitability, debt levels, cash flow, etc.
   - Management Assessment: Leadership team's background, track record, and execution capabilities
   - Competitive Advantages: Moats, intellectual property, market share, etc.
   - Risk Factors: Business risks, financial risks, regulatory risks, etc.
   - Valuation: Appropriate valuation methodologies (DCF, multiples, etc.) and target price
   - Investment Recommendation: Buy/Hold/Sell recommendation with supporting rationale

Your plan should be tight and focused with NO overlapping sections or unnecessary filler. Each section needs a sentence summarizing its content and research approach.

${guidelinesPrompt}

Before submitting, review your structure to ensure it has no redundant sections, follows a logical flow, and covers all essential aspects of a professional equity research report.`;

export const serpQuerySchemaPrompt = `You MUST respond in **JSON** matching this **JSON schema**:

\`\`\`json
{outputSchema}
\`\`\`

Expected output:

\`\`\`json
[
  {
    query: "This is a sample query.",
    researchGoal: "This is the reason for the query."
  }
]
\`\`\``;

export const serpQueriesPrompt = `This is the equity research report plan after user confirmation:
<PLAN>
{plan}
</PLAN>

Based on the equity research report plan, generate a comprehensive list of SERP queries to gather information for each phase of the research process. Your queries should cover:

1. MACROECONOMIC QUERIES: Generate queries to find the latest economic indicators, monetary policy information, fiscal policy updates, and economic forecasts that could impact the target company's industry and performance.

2. INDUSTRY QUERIES: Generate queries to research industry structure, growth trends, competitive landscape, regulatory environment, and technological disruptions affecting the industry.

3. COMPANY QUERIES: Generate queries to gather information on:
   - The company's business model, strategy, and recent initiatives
   - Financial performance, quarterly/annual reports, and key financial metrics
   - Management team background and track record
   - Competitive advantages and market positioning
   - Risk factors and challenges
   - Current valuation metrics and analyst opinions

Make sure each query is specific, focused, and designed to retrieve high-quality information from reliable financial sources. Each query should be unique and not similar to others. Include ticker symbols where appropriate to improve search precision.

${serpQuerySchemaPrompt}`;

export const queryResultPrompt = `Please use the following query to get the latest financial and market information via the web:
<QUERY>
{query}
</QUERY>

You need to organize the searched information according to the following equity research requirements:
<RESEARCH_GOAL>
{researchGoal}
</RESEARCH_GOAL>

You need to think like a professional equity research analyst.
Generate a list of financial learnings from the search results, focusing on information that would be relevant for investment decision-making.
Make sure each learning is unique and not similar to each other.
The learnings should be to the point, as detailed and information dense as possible, with particular attention to:

1. Financial metrics and data: Revenue, earnings, margins, growth rates, debt levels, cash flow, etc.
2. Market trends and industry dynamics: Market share, competitive positioning, industry growth rates, etc.
3. Company-specific information: Business model, management changes, strategic initiatives, product launches, etc.
4. Macroeconomic factors: Interest rates, inflation, regulatory changes, geopolitical events that impact the company or industry
5. Valuation indicators: P/E ratios, EV/EBITDA, price targets from analysts, recent stock price movements, etc.

Make sure to include specific financial figures, percentages, dates of financial reports, analyst names and their firms, and exact quotes from company executives when available. The learnings will be used to build a comprehensive equity research report.`;

export const citationRulesPrompt = `Citation Rules:

- Please cite the context at the end of sentences when appropriate.
- Please use the format of citation number [number] to reference the context in corresponding parts of your answer.
- If a sentence comes from multiple contexts, please list all relevant citation numbers, e.g., [1][2]. Remember not to group citations at the end but list them in the corresponding parts of your answer.`;

export const searchResultPrompt = `Given the following contexts from a SERP search for the financial query:
<QUERY>
{query}
</QUERY>

You need to organize the searched information according to the following equity research requirements:
<RESEARCH_GOAL>
{researchGoal}
</RESEARCH_GOAL>

The following context from the SERP search:
<CONTEXT>
{context}
</CONTEXT>

You need to think like a professional equity research analyst.
Generate a list of financial learnings from the search results, focusing on information that would be relevant for investment decision-making.
Make sure each learning is unique and not similar to each other.
The learnings should be to the point, as detailed and information dense as possible, with particular attention to:

1. Financial metrics and data: Revenue, earnings, margins, growth rates, debt levels, cash flow, etc.
2. Market trends and industry dynamics: Market share, competitive positioning, industry growth rates, etc.
3. Company-specific information: Business model, management changes, strategic initiatives, product launches, etc.
4. Macroeconomic factors: Interest rates, inflation, regulatory changes, geopolitical events that impact the company or industry
5. Valuation indicators: P/E ratios, EV/EBITDA, price targets from analysts, recent stock price movements, etc.

Make sure to include specific financial figures, percentages, dates of financial reports, analyst names and their firms, and exact quotes from company executives when available. Include ticker symbols when mentioned. Extract any relevant tables or structured financial data. The learnings will be used to build a comprehensive equity research report.`;

export const searchKnowledgeResultPrompt = `Given the following contents from a local knowledge base search for the financial query:
<QUERY>
{query}
</QUERY>

You need to organize the searched information according to the following equity research requirements:
<RESEARCH_GOAL>
{researchGoal}
</RESEARCH_GOAL>

The following contexts from the knowledge base search:
<CONTEXT>
{context}
</CONTEXT>

You need to think like a professional equity research analyst.
Generate a list of financial learnings from the knowledge base results, focusing on information that would be relevant for investment decision-making.
Make sure each learning is unique and not similar to each other.
The learnings should be to the point, as detailed and information dense as possible, with particular attention to:

1. Financial metrics and data: Revenue, earnings, margins, growth rates, debt levels, cash flow, etc.
2. Market trends and industry dynamics: Market share, competitive positioning, industry growth rates, etc.
3. Company-specific information: Business model, management changes, strategic initiatives, product launches, etc.
4. Macroeconomic factors: Interest rates, inflation, regulatory changes, geopolitical events that impact the company or industry
5. Valuation indicators: P/E ratios, EV/EBITDA, price targets from analysts, recent stock price movements, etc.

Make sure to include specific financial figures, percentages, dates of financial reports, analyst names and their firms, and exact quotes from company executives when available. Include ticker symbols when mentioned. Extract any relevant tables or structured financial data. The learnings will be used to build a comprehensive equity research report.`;

export const reviewPrompt = `This is the equity research report plan after user confirmation:
<PLAN>
{plan}
</PLAN>

Here are all the financial learnings from previous research:
<LEARNINGS>
{learnings}
</LEARNINGS>

Based on the equity research plan and financial learnings from the research, please review the research and suggest any additional research directions or questions that should be explored to make the equity research report more comprehensive and investment-focused.

Consider if there are gaps in the following key areas of equity research:

1. Macroeconomic Analysis: Are there important economic indicators, policy changes, or market conditions that haven't been researched yet?

2. Industry Analysis: Are there industry trends, competitive dynamics, or regulatory factors that need more investigation?

3. Company Analysis: Are there aspects of the company's business model, financial performance, management team, or competitive advantages that require deeper research?

4. Valuation: Is there sufficient information to conduct a thorough valuation analysis? Are there comparable companies or transactions that should be researched?

5. Investment Risks: Have all major risk factors been identified and researched?

You can suggest additional SERP queries to further research these areas. Make sure each query is specific to financial markets and investment analysis, and designed to retrieve high-quality information from reliable financial sources. Each query should be unique and include ticker symbols where appropriate.

${serpQuerySchemaPrompt}`;

export const finalReportCitationImagePrompt = `Image Rules:

- Images related to the paragraph content at the appropriate location in the article according to the image description.
- Include images using \`![Image Description](image_url)\` in a separate section.
- **Do not add any images at the end of the article.**`;

export const finalReportReferencesPrompt = `Citation Rules:

- Please cite research references at the end of your paragraphs when appropriate.
- If the citation is from the reference, please **ignore**. Include only references from sources.
- Please use the reference format [number], to reference the learnings link in corresponding parts of your answer.
- If a paragraphs comes from multiple learnings reference link, please list all relevant citation numbers, e.g., [1][2]. Remember not to group citations at the end but list them in the corresponding parts of your answer. Control the number of footnotes.
- Do not have more than 3 reference link in a paragraph, and keep only the most relevant ones.
- **Do not add references at the end of the report.**`;

export const finalReportPrompt = `This is the equity research report plan after user confirmation:
<PLAN>
{plan}
</PLAN>

Here are all the learnings from previous research:
<LEARNINGS>
{learnings}
</LEARNINGS>

Here are all the sources from previous research:
<SOURCES>
{sources}
</SOURCES>

Here are all the images from previous research:
<IMAGES>
{images}
</IMAGES>

Please write according to the user's writing requirements:
<REQUIREMENT>
{requirement}
</REQUIREMENT>

Write a comprehensive professional equity research report following the standard format used by investment banks and research firms. Your report should include:

1. EXECUTIVE SUMMARY:
   - Company name, ticker symbol, and current price
   - Investment rating (Buy/Hold/Sell) with clear rationale
   - Target price with timeframe (e.g., 12-month target)
   - Key investment highlights (3-5 bullet points)
   - Summary of risks

2. MACROECONOMIC ANALYSIS:
   - Current economic conditions and trends
   - Monetary and fiscal policy impacts
   - How macroeconomic factors specifically affect this company

3. INDUSTRY ANALYSIS:
   - Industry structure and competitive landscape
   - Growth trends and market size
   - Regulatory environment
   - Technological disruptions
   - Company's positioning within the industry

4. COMPANY ANALYSIS:
   - Business model and strategy
   - Detailed financial analysis (revenue trends, margins, profitability, balance sheet strength)
   - Management assessment
   - Competitive advantages and moats
   - SWOT analysis (Strengths, Weaknesses, Opportunities, Threats)

5. VALUATION ANALYSIS:
   - Methodology explanation (DCF, multiples, etc.)
   - Key assumptions
   - Sensitivity analysis
   - Peer comparison
   - Fair value calculation and target price justification

6. INVESTMENT RECOMMENDATION:
   - Clear rating with supporting rationale
   - Catalysts that could move the stock
   - Key metrics to monitor
   - Time horizon for the investment thesis

7. RISK FACTORS:
   - Business risks
   - Financial risks
   - Market risks
   - Regulatory risks

Make the report as detailed and data-rich as possible, aim for 5-10 pages, and include ALL the relevant learnings from research. Use professional financial terminology and analysis techniques. Include charts, tables, and financial models where appropriate.

**Including meaningful images, charts, and tables from the previous research in the report is very helpful.**

**Use proper citation format [number] to reference sources throughout the report.**

**Respond only with the final report content, and no additional text before or after.**`;

export const rewritingPrompt = `You are tasked with re-writing the following text to markdown. Ensure you do not change the meaning or story behind the text. 

**Respond only the updated markdown text, and no additional text before or after.**`;

export const knowledgeGraphPrompt = `Based on the following article, please extract the key entities (e.g., names of people, places, organizations, concepts, events, etc.) and the main relationships between them, and then generate a Mermaid graph code that visualizes these entities and relationships.

## Output format requirements

1. Use Mermaid's graph TD (Top-Down) or graph LR (Left-Right) type.
2. Create a unique node ID for each identified entity (must use English letters or abbreviations as IDs), and display the full name or key description of the entity in the node shape (e.g., PersonA[Alice], OrgB[XYZ Company]).
3. Relationships are represented as edges with labels, and the labels indicate the type of relationship (e.g., A --> |"Relationship Type"| B).
4. Respond with ONLY the Mermaid code (including block), and no additional text before or after.
5. Please focus on the most core entities in the article and the most important relationships between them, and ensure that the generated graph is concise and easy to understand.
6. All text content **MUST** be wrapped in \`"\` syntax. (e.g., "Any Text Content")
7. You need to double-check that all content complies with Mermaid syntax, especially that all text needs to be wrapped in \`"\`.`;
