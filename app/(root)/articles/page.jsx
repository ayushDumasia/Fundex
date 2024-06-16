import React from 'react';

const articles = {
    financialAnalyst: [
        {
            title: 'The Journey of a Financial Analyst',
            content: `John's path to becoming a financial analyst was anything but linear. Graduating with a degree in economics, he initially struggled to find his footing in the competitive finance industry. His first role as a junior analyst at a small investment firm was a steep learning curve. John spent countless hours poring over financial statements, learning to read between the lines and uncover the stories numbers told. Over time, he became adept at forecasting financial trends and providing actionable insights that helped his company make informed investment decisions. His analytical prowess earned him a promotion, and he found himself leading a team of analysts. The journey wasn't easy, but John's dedication and passion for finance paved the way for his successful career.`,
        },
        {
            title: 'The Art of Predicting Markets',
            content: `Sarah had always been fascinated by the stock market's ebb and flow. As a financial analyst, she turned her passion into a profession. Every day, she analyzed market trends, economic indicators, and corporate earnings reports. Her ability to synthesize complex data into clear, actionable advice made her an invaluable asset to her firm. One of her proudest moments came when she accurately predicted a major market downturn, allowing her clients to mitigate their losses. Sarah's story is a testament to the power of diligence, continuous learning, and a keen analytical mind in the world of finance.`,
        },
    ],
    investmentBanker: [
        {
            title: 'The High-Stakes World of Investment Banking',
            content: `Michael entered the high-stakes world of investment banking right out of business school. His first major deal involved facilitating a merger between two industry giants. The process was intense, with long hours and high pressure, but Michael thrived in the fast-paced environment. His ability to negotiate and navigate complex financial structures impressed his clients and colleagues alike. The successful merger not only boosted his career but also solidified his reputation as a top investment banker. Michael's journey is a testament to the excitement and challenges of investment banking, where high risks often lead to high rewards.`,
        },
        {
            title: 'The Art of the Deal',
            content: `Rachel's career as an investment banker was marked by her exceptional deal-making skills. Her ability to understand her clients' needs and align them with market opportunities set her apart. One of her most notable achievements was orchestrating a billion-dollar acquisition that positioned her client as a market leader. The deal required intricate financial modeling, relentless negotiation, and a deep understanding of industry trends. Rachel's story illustrates the critical role of investment bankers in facilitating significant corporate transactions and driving business growth.`,
        },
    ],
    financialAdvisor: [
        {
            title: 'Building Trust and Wealth',
            content: `Laura's career as a financial advisor was built on trust and personalized service. She started by helping her friends and family manage their finances, gradually expanding her clientele through referrals. Laura's approach was holistic, considering her clients' financial goals, risk tolerance, and life circumstances. Her ability to build strong relationships and provide tailored advice helped her clients achieve their financial objectives. Laura's story highlights the importance of trust and personalized service in financial advising, where advisors play a key role in securing their clients' financial futures.`,
        },
        {
            title: 'Navigating Retirement Planning',
            content: `John specialized in retirement planning, helping clients secure their financial future post-retirement. He developed comprehensive plans that included investment strategies, tax planning, and estate planning. One of his clients, a couple nearing retirement, had no clear plan. John worked closely with them, analyzing their financial situation and crafting a strategy that ensured a comfortable retirement. His expertise and dedication not only provided financial security but also peace of mind. John's story underscores the crucial role of financial advisors in guiding clients through significant life transitions.`,
        },
    ],
    portfolioManager: [
        {
            title: 'The Science of Diversification',
            content: `Alex's career as a portfolio manager was rooted in the science of diversification. He managed a diverse portfolio for a large pension fund, balancing risk and return across various asset classes. Alex's strategic asset allocation ensured consistent returns while minimizing risk. During volatile market conditions, his diversified approach protected the fund's assets. Alex's story highlights the importance of diversification in portfolio management, where strategic asset allocation is key to achieving long-term financial goals.`,
        },
        {
            title: 'Managing a Hedge Fund',
            content: `Lisa's journey as a portfolio manager led her to manage a successful hedge fund. Her fund focused on innovative investment strategies, including long-short equity and market-neutral strategies. Lisa's ability to generate alpha and manage risk attracted significant investor interest. One of her notable achievements was navigating the fund through a market downturn, delivering positive returns while peers struggled. Lisa's story showcases the complexities and rewards of hedge fund management, where portfolio managers employ sophisticated strategies to outperform the market.`,
        },
    ],
    riskManager: [
        {
            title: 'The Role of a Risk Manager',
            content: `Emily's journey into risk management began with a fascination for numbers and probabilities. As a risk manager at a major financial institution, her role involved identifying, assessing, and mitigating risks. Emily's ability to foresee potential issues and develop strategies to address them was invaluable. Her proactive approach helped the institution avoid significant losses during a market downturn. Emily's story highlights the critical role of risk managers in ensuring financial stability and protecting assets from unforeseen events.`,
        },
        {
            title: 'Risk Management in Crisis',
            content: `James' career as a risk manager was tested during the 2008 financial crisis. Working at a large investment bank, he faced unprecedented challenges as market volatility soared. James developed innovative risk models that provided early warnings, allowing the bank to take protective measures. His efforts minimized the bank's exposure to toxic assets and ensured its survival during the crisis. James' story is a testament to the importance of effective risk management in navigating financial crises and protecting institutional integrity.`,
        },
    ],
};

const FinanceArticles = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-8">Finance Articles</h1>
            {Object.entries(articles).map(([category, articlesList]) => (
                <div key={category} className="mb-12">
                    <h2 className="text-3xl font-semibold mb-4 capitalize">{category.replace(/([A-Z])/g, ' $1').trim()}</h2>
                    {articlesList.map((article, index) => (
                        <div key={index} className="mb-6">
                            <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
                            <p className="text-lg">{article.content}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default FinanceArticles;
