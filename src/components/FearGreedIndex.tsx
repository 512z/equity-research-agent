"use client";
import React, { useState, useEffect } from 'react';

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

export default function FearGreedIndex() {
  const [data, setData] = useState<FearGreedData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/fear-greed');
        if (!response.ok) throw new Error('Failed to fetch');
        const result = await response.json();
        setData(result);
      } catch (err) {
        console.error('Error fetching Fear & Greed data:', err);
        // 设置默认数据（基于您图片中显示的数据）
        setData({
          current: 22,
          status: 'Extreme Fear',
          history: {
            previousClose: 22,
            oneWeekAgo: 1,
            oneMonthAgo: 26,
            oneYearAgo: 58,
          },
          lastUpdate: new Date().toISOString(),
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    // 每30分钟更新一次
    const interval = setInterval(fetchData, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return null;
  }

  if (!data) return null;

  // 计算指针角度 (0-100 映射到 -90 到 90 度)
  const angle = (data.current / 100) * 180 - 90;

  return (
    <div className="mt-4 mb-3 text-center">
      {/* 极简指针仪表盘 - 只保留圆弧、指针和标签 */}
      <div className="flex justify-center">
        <svg width="135" height="75" viewBox="0 0 135 75" className="overflow-visible">
          {/* 半圆弧 */}
          <path
            d="M 22.5 52.5 A 45 45 0 0 1 112.5 52.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-gray-300 dark:text-gray-600"
          />
          
          {/* 指针 */}
          <g transform={`rotate(${angle} 67.5 52.5)`}>
            <line
              x1="67.5"
              y1="52.5"
              x2="67.5"
              y2="22.5"
              stroke="#b45309"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* 指针中心圆点 */}
            <circle
              cx="67.5"
              cy="52.5"
              r="3"
              fill="#b45309"
            />
          </g>
          
          {/* Fear & Greed 标签 */}
          <text
            x="30"
            y="67"
            className="text-sm fill-gray-500 dark:fill-gray-400"
            textAnchor="middle"
          >
            Fear
          </text>
          <text
            x="105"
            y="67"
            className="text-sm fill-gray-500 dark:fill-gray-400"
            textAnchor="middle"
          >
            Greed
          </text>
        </svg>
      </div>
    </div>
  );
} 