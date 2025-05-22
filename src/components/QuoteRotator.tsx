"use client";
import { useState, useEffect } from 'react';

// 投资名言库
const investmentQuotes = [
  {
    quote: "Choosing individual stocks without any idea of what you're looking for is like running through a dynamite factory with a burning match. You may live, but you're still an idiot.",
    author: "Joel Greenblatt"
  },
  {
    quote: "Investing should be more like watching paint dry or watching grass grow. If you want excitement, take $800 and go to Las Vegas.",
    author: "Paul Samuelson"
  },
  {
    quote: "With investing you get what you don't pay for.",
    author: "Peter Lazaroff"
  },
  {
    quote: "The safest way to double your money is to fold it over and put it in your pocket.",
    author: "Kin Hubbard"
  },
  {
    quote: "How many millionaires do you know who have become wealthy by investing in savings accounts? I rest my case.",
    author: "Robert G. Allen"
  },
  {
    quote: "Making money feels good, all right; it just doesn't feel as good as expecting to make money.",
    author: "Jason Zweig"
  },
  {
    quote: "I'd be a bum on the street with a tin cup if the markets were always efficient.",
    author: "Warren Buffett"
  },
  {
    quote: "In the initial years…compounding tests your patience and in later years, your bewilderment.",
    author: "Anshul Khare"
  },
  {
    quote: "Never invest in any idea you can't illustrate with a crayon.",
    author: "Peter Lynch"
  },
  {
    quote: "The stock market is a device for transferring money from the impatient to the patient.",
    author: "Warren Buffett"
  },
  {
    quote: "Buying funds based purely on their past performance is one of the stupidest things an investor can do.",
    author: "John C. Bogle"
  },
  {
    quote: "In investing, the person who turns over the most rocks wins the game.",
    author: "Gautam Baid"
  },
  {
    quote: "In the short run, the stock market is a voting machine; in the long run it is a weighing machine.",
    author: "Benjamin Graham"
  },
  {
    quote: "Lethargy bordering on sloth remains the cornerstone of our investment style.",
    author: "Warren Buffett"
  },
  {
    quote: "Doubt is not a pleasant condition, but certainty is absurd.",
    author: "Voltaire"
  },
  {
    quote: "Investing without research is like playing stud poker and never looking at the cards.",
    author: "Peter Lynch"
  },
  {
    quote: "An investor without discipline is not an investor—he's a gambler.",
    author: "Ryan Holiday"
  },
  {
    quote: "It's not the things you buy and sell that make you money; it's the things you hold.",
    author: "Howard Marks"
  },
  {
    quote: "The investor's chief problem - and even his worst enemy - is likely to be himself.",
    author: "Benjamin Graham"
  },
  {
    quote: "Most investors would be better off in an index fund.",
    author: "Peter Lynch"
  },
  {
    quote: "Compound interest is the eighth wonder of the world. He who understands it, earns it. He who doesn't, pays it.",
    author: "Albert Einstein"
  }
];

export default function QuoteRotator() {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const [fadeState, setFadeState] = useState('fade-in');
  
  useEffect(() => {
    // 每10秒切换一次名言
    const intervalId = setInterval(() => {
      // 先淡出
      setFadeState('fade-out');
      
      // 淡出后切换名言
      setTimeout(() => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex + 1) % investmentQuotes.length);
        setFadeState('fade-in');
      }, 500); // 500ms后切换，与CSS动画时间匹配
      
    }, 10000);
    
    return () => clearInterval(intervalId);
  }, []);
  
  const currentQuote = investmentQuotes[currentQuoteIndex];
  
  return (
    <div className="mt-16 mb-10 text-center">
      <div className={`transition-opacity duration-500 ${fadeState === 'fade-out' ? 'opacity-0' : 'opacity-100'}`}>
        <p className="italic text-black dark:text-white text-lg">
          "{currentQuote.quote}"
        </p>
        <p className="text-black dark:text-white text-sm mt-1">
          — {currentQuote.author}
        </p>
      </div>
    </div>
  );
}
