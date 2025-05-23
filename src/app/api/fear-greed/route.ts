import { NextResponse } from 'next/server';

// 移除 edge runtime，使用 Node.js runtime 以获得更好的网络请求支持
// export const runtime = 'edge';

interface FearGreedData {
  current: number;
  status: string;
  history: {
    previousClose: number;
    oneWeekAgo: number;
    oneMonthAgo: number;
    oneYearAgo: number;
  };
  lastUpdate: string;
}

// 随机User-Agent列表（来自Python包源码）
const USER_AGENTS = [
  // Chrome on Windows 10
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36",
  // Chrome on macOS
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 12_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36",
  // Chrome on Linux
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36",
  // Firefox on Windows
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:100.0) Gecko/20100101 Firefox/100.0",
  // Firefox on macOS
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 12.4; rv:100.0) Gecko/20100101 Firefox/100.0",
];

const getRandomUserAgent = () => USER_AGENTS[Math.floor(Math.random() * USER_AGENTS.length)];

export async function GET() {
  try {
    console.log('Fetching Fear & Greed data from CNN API...');
    
    // 使用Python包源码中的正确URL和方法
    const response = await fetch('https://production.dataviz.cnn.io/index/fearandgreed/graphdata', {
      headers: {
        'User-Agent': getRandomUserAgent(),
      },
      // 增加超时时间
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      throw new Error(`CNN API responded with status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Successfully fetched data from CNN API');
    
    // 根据Python包源码解析数据结构
    const fearGreedResponse = data.fear_and_greed;
    const current = Math.round(fearGreedResponse.score);
    const status = fearGreedResponse.rating;
    
    // 尝试获取历史数据
    let historyValues = { 
      previousClose: current, 
      oneWeekAgo: current, 
      oneMonthAgo: current, 
      oneYearAgo: current 
    };
    
    // 如果有历史数据数组
    if (data.fear_and_greed_historical?.data) {
      const historyData = data.fear_and_greed_historical.data;
      const getHistoricalValue = (daysAgo: number) => {
        const targetIndex = Math.max(0, historyData.length - 1 - daysAgo);
        return historyData[targetIndex] ? Math.round(historyData[targetIndex].y) : current;
      };
      
      historyValues = {
        previousClose: getHistoricalValue(1),
        oneWeekAgo: getHistoricalValue(7),
        oneMonthAgo: getHistoricalValue(30),
        oneYearAgo: getHistoricalValue(365),
      };
    }

    const fearGreedData: FearGreedData = {
      current,
      status,
      history: historyValues,
      lastUpdate: fearGreedResponse.timestamp || new Date().toISOString(),
    };

    return NextResponse.json(fearGreedData);
  } catch (error) {
    console.error('Error fetching Fear & Greed Index:', error);
    
    // 不返回默认数据，直接返回错误状态，避免误导用户
    return NextResponse.json(
      { 
        error: 'Failed to fetch Fear & Greed Index data',
        message: 'Unable to connect to CNN API' 
      }, 
      { status: 500 }
    );
  }
} 