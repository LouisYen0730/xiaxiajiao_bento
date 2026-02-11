
import React, { useState, useEffect } from 'react';

const Menu: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  // 注意：這裡直接使用 Facebook 圖片連結可能存在穩定性問題，
  // 建議將圖片下載後存放在專案中，並使用相對路徑。
  // 替換為近似 9.9:21 比例的圖片 placeholder
  const menuImageUrl = "https://picsum.photos/seed/bento-menu-design/300/636"; // 300 / (9.9/21 * 300) = 300/636.36

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`py-12 bg-gradient-to-b from-amber-100 via-amber-50 to-white transition-opacity duration-1000 ${isMounted ? 'opacity-100' : 'opacity-0'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-bold text-brand-dark inline-block relative pb-2">
                訂購資訊 & 菜單
                 {/* 標題下劃線縮短，更聚焦 */}
                 <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-brand-secondary rounded-full"></span>
            </h2>
          <p className="mt-4 text-lg text-warm-gray">熱騰騰的美味，即刻為您準備</p>
        </div>

        {/* 調整為 lg:grid-cols-2 確保兩區塊等寬 */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Ordering Info Card */}
          <div className={`lg:col-span-1 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 ease-out border border-brand-light overflow-hidden flex flex-col ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`} style={{transitionDelay: '200ms'}}>
            {/* 訂購資訊頭部區塊，使用漸層色與居中標題 (使用新定義的深色) */}
            <div className="p-4 bg-gradient-to-br from-brand-deep-secondary to-brand-deep-primary text-white font-bold text-center rounded-t-xl">
                <h3 className="text-3xl font-bold">訂購資訊</h3>
            </div>
            {/* 訂購資訊內容區塊 */}
            <div className="p-6 flex-grow">
                <div className="space-y-4 text-xl text-warm-gray">
                  <div className="flex items-start">
                    {/* 圖標顏色調整 */}
                    <svg className="w-6 h-6 mr-4 text-brand-dark flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    <span>電話：(02) 2795-5225</span>
                  </div>
                  <div className="flex items-start">
                    {/* 圖標顏色調整 */}
                    <svg className="w-6 h-6 mr-4 text-brand-dark flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    <span>地址：台北市內湖區星雲街17號</span>
                  </div>
                  <div className="flex items-start">
                    {/* 圖標顏色調整 */}
                    <svg className="w-6 h-6 mr-4 text-brand-dark flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>營業時間：週一至週五 10:30-14:00, 16:30-19:30</span>
                  </div>
                </div>
                 {/* 底部提示文字，分界線顏色調整 */}
                 <p className="mt-6 pt-3 border-t border-brand-light text-base text-gray-500">* 歡迎提前來電預訂，減少現場等候時間。</p>
            </div>
          </div>

          {/* Menu Download Card */}
          <div className={`lg:col-span-1 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 ease-out border border-brand-light flex flex-col ${isMounted ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`} style={{transitionDelay: '400ms'}}>
             {/* 最新菜單頭部區塊，使用統一的深色漸層 */}
             <div className="p-6 bg-gradient-to-br from-brand-deep-secondary to-brand-deep-primary text-white font-bold text-center rounded-t-xl">
                <h3 className="text-3xl font-bold">最新菜單</h3>
            </div>
             <div className="p-8 flex-grow flex flex-col"> {/* 內容區塊 padding 調整 */}
                {/* 圖片容器添加邊框，並使用自訂縱向比例 */}
                <div className="aspect-portrait-menu mb-6 rounded-lg overflow-hidden shadow-inner bg-gray-100 border border-brand-light">
                  <img src={menuImageUrl} alt="嗄嗄叫便當店菜單" className="w-full h-full object-cover" />
                </div>
                <a
                  href={menuImageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-8 py-3 bg-gradient-to-br from-brand-deep-secondary to-brand-deep-primary text-white text-lg font-bold rounded-lg shadow-lg transition-all transform hover:scale-105 hover:shadow-xl duration-300 mt-auto"
                >
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                  <span>點擊查看或下載</span>
                </a>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
