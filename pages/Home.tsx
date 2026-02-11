
import React, { useState, useEffect } from 'react';

const newsItems = [
    {
        id: 1,
        title: '📢 歡迎公司行號、團體訂購',
        content: '量大另有優惠！我們提供客製化便當服務，滿足您的會議、活動需求。請提前來電洽詢，讓我們為您準備最美味的餐點。',
    },
    {
        id: 2,
        title: '🎉 本店支援多元支付',
        content: '為了讓您付款更方便，我們現在支援 Line Pay 及街口支付。輕鬆一掃，美味帶著走！',
    },
    {
        id: 3,
        title: '🌱 本季新配菜登場',
        content: '我們堅持使用當季新鮮蔬菜，本季推出清炒龍鬚菜、塔香杏鮑菇等新配菜，讓您的便當營養更均衡、口味更豐富！',
    },
    {
        id: 4,
        title: '☀️ 夏日限定清爽便當開賣',
        content: '天氣炎熱，來點清爽的！夏日限定的涼拌雞絲便當與和風沙拉便當正式開賣，數量有限，售完為止。',
    }
];


const Home: React.FC = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [openNewsId, setOpenNewsId] = useState<number | null>(newsItems.length > 0 ? newsItems[0].id : null);
    const [isNewsExpanded, setIsNewsExpanded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsMounted(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const toggleNewsItem = (id: number) => {
        setOpenNewsId(openNewsId === id ? null : id);
    };

    const displayedNewsItems = isNewsExpanded ? newsItems : newsItems.slice(0, 2);

    return (
        <div className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center text-white overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div
                    className="w-full h-full bg-cover bg-center animate-kenburns"
                    style={{ backgroundImage: "url('https://picsum.photos/seed/bento-shop/1920/1080')" }}
                ></div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

            <div className={`relative z-10 container mx-auto px-4 text-center transition-opacity duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
                {/* 整個主內容框架，現在限制了最大寬度並調整了垂直內邊距 */}
                <div className="max-w-2xl mx-auto bg-black/20 backdrop-blur-md py-3 px-5 rounded-xl border border-white/20">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wider">
                        嗄嗄叫便當店
                    </h1>
                    <p className="text-lg md:text-2xl mb-6 text-amber-100">
                        用心做好每一個便當，溫暖您的胃
                    </p>
                    {/* 最新消息區塊，移除max-w-lg讓其適應父級寬度 */}
                    <div className="mx-auto mb-6 text-left bg-black/10 backdrop-blur-sm p-3 rounded-lg">
                        <h2 className="text-2xl font-bold mb-3 border-b-2 border-amber-400 pb-2 px-2">最新消息</h2>
                        <div className="space-y-1">
                            {displayedNewsItems.map((item) => (
                                <div key={item.id} className="border-b border-white/20 last:border-b-0">
                                    <button
                                        onClick={() => toggleNewsItem(item.id)}
                                        className={`w-full flex justify-between items-center text-left py-3 focus:outline-none transition-colors rounded-t-md px-2 ${openNewsId === item.id ? 'bg-white/20' : 'hover:bg-white/10'}`}
                                        aria-expanded={openNewsId === item.id}
                                        aria-controls={`news-content-${item.id}`}
                                    >
                                        <span className="font-semibold text-lg">{item.title}</span>
                                        <svg
                                            className={`w-5 h-5 transition-transform duration-300 ${openNewsId === item.id ? 'transform rotate-90' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                    <div
                                        id={`news-content-${item.id}`}
                                        className={`overflow-hidden transition-all duration-500 ease-in-out ${openNewsId === item.id ? 'max-h-32' : 'max-h-0'}`}
                                    >
                                        <p className="pt-1 pb-3 px-2 text-white/80 text-lg">
                                            {item.content}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                         {newsItems.length > 2 && (
                            <div className="text-center mt-2">
                                <button
                                    onClick={() => setIsNewsExpanded(!isNewsExpanded)}
                                    className="text-amber-300 hover:text-white transition-colors text-base font-semibold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400"
                                >
                                    {isNewsExpanded ? '顯示較少' : '顯示更多...'}
                                </button>
                            </div>
                        )}
                    </div>
                    <a
                        href="https://www.facebook.com/people/%E5%97%84%E5%97%84%E5%8F%AB%E4%BE%BF%E7%95%B6%E5%BA%97%E5%85%A7%E6%B9%96%E6%98%9F%E9%9B%B2%E8%A1%9717%E8%99%9F/100057498487974/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-8 py-3 bg-brand-primary hover:bg-brand-dark text-white text-lg font-bold rounded-lg shadow-lg transition-all transform hover:scale-105 duration-300 ring-2 ring-offset-2 ring-offset-black/50 ring-transparent hover:ring-brand-secondary"
                    >
                        <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                        前往 Facebook 粉絲專頁
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
