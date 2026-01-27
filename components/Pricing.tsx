import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'presale' | 'door'>('presale');

  const prices = {
    presale: [
      { type: '파티 Only', price: '10,000원', desc: 'PM 9:00 ~ AM 2:00' },
      { type: '워크샵 Only', price: '10,000원', desc: 'PM 8:00 ~ 9:00' },
      { type: '풀 패키지', price: '15,000원', desc: '파티 + 워크샵', highlight: true },
    ],
    door: [
      { type: '파티 Only', price: '15,000원', desc: 'PM 9:00 ~ AM 2:00' },
      { type: '워크샵 Only', price: '10,000원', desc: 'PM 8:00 ~ 9:00' },
      { type: '풀 패키지', price: '20,000원', desc: '파티 + 워크샵', highlight: true },
    ]
  };

  return (
    <section id="tickets" className="py-24 px-4 relative">
        {/* Background blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-4 text-white">Tickets</h2>
          <p className="text-pink-300">
             ⚠️ 예매 마감: 3월 20일 자정까지
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="bg-white/10 p-1 rounded-full flex">
            <button 
              className={`px-8 py-2 rounded-full transition-all duration-300 text-sm md:text-base font-bold ${activeTab === 'presale' ? 'bg-pink-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setActiveTab('presale')}
            >
              예매 (Pre-sale)
            </button>
            <button 
              className={`px-8 py-2 rounded-full transition-all duration-300 text-sm md:text-base font-bold ${activeTab === 'door' ? 'bg-sky-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
              onClick={() => setActiveTab('door')}
            >
              현매 (Door)
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatePresence mode='wait'>
            {prices[activeTab].map((item, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl border backdrop-blur-md flex flex-col items-center text-center transition-all duration-300 hover:scale-105 ${item.highlight ? 'bg-gradient-to-b from-pink-500/20 to-purple-900/40 border-pink-500 shadow-xl shadow-pink-900/30' : 'bg-white/5 border-white/10 hover:border-white/30'}`}
              >
                {item.highlight && (
                    <div className="absolute -top-3 px-3 py-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-xs font-bold uppercase tracking-wider text-white shadow-lg">
                        Best Value
                    </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2">{item.type}</h3>
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-4 font-playfair">
                    {item.price}
                </div>
                <p className="text-sm text-gray-400 mb-8 border-b border-white/10 pb-4 w-full">{item.desc}</p>
                
                <ul className="text-sm text-gray-300 space-y-2 text-left w-full px-4">
                   <li className="flex items-center gap-2">
                     <Check size={14} className="text-green-400" />
                     <span>입장료 포함</span>
                   </li>
                   <li className="flex items-center gap-2">
                     <Check size={14} className="text-green-400" />
                     <span>음료 & 핑거푸드</span>
                   </li>
                   {item.type.includes('워크샵') && (
                    <li className="flex items-center gap-2">
                        <Check size={14} className="text-pink-400" />
                        <span>워크샵 수강</span>
                    </li>
                   )}
                </ul>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Pricing;