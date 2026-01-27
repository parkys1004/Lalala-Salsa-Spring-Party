import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 overflow-hidden">
      {/* Removed local background image to let App.tsx background show through */}
      
      <div className="relative z-10 max-w-4xl w-full text-center space-y-6 md:space-y-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-pink-500/30 border border-pink-400 text-pink-200 text-xs md:text-sm font-bold tracking-wider mb-4 backdrop-blur-md">
            SPRING SEASON OPENING
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-white to-sky-300 drop-shadow-[0_0_15px_rgba(236,72,153,0.5)] font-playfair mb-2 leading-tight">
            LALALA SALSA
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-light text-pink-200 italic font-playfair">
            Spring Party
          </h2>
        </motion.div>

        <motion.p 
          className="text-base sm:text-lg md:text-2xl text-gray-200 font-light px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          따뜻한 봄, 춤추기 딱 좋은 토요일 💖
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mt-8 md:mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="glass-panel p-4 md:p-6 rounded-xl flex flex-col items-center hover:bg-white/10 transition-colors duration-300 group">
            <Calendar className="w-8 h-8 md:w-10 md:h-10 text-pink-400 mb-2 md:mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-lg md:text-xl font-bold">3월 21일 (토)</p>
            <p className="text-sm text-gray-300">Saturday Night</p>
          </div>
          <div className="glass-panel p-4 md:p-6 rounded-xl flex flex-col items-center hover:bg-white/10 transition-colors duration-300 group">
            <Clock className="w-8 h-8 md:w-10 md:h-10 text-sky-400 mb-2 md:mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-lg md:text-xl font-bold">PM 9:00 - AM 2:00</p>
            <p className="text-sm text-gray-300">5 Hours of Dance</p>
          </div>
          <div className="glass-panel p-4 md:p-6 rounded-xl flex flex-col items-center hover:bg-white/10 transition-colors duration-300 group">
            <MapPin className="w-8 h-8 md:w-10 md:h-10 text-purple-400 mb-2 md:mb-3 group-hover:scale-110 transition-transform" />
            <p className="text-lg md:text-xl font-bold">맘보 Bar</p>
            <p className="text-sm text-gray-300">부산진구 중앙대로 691번길 52</p>
          </div>
        </motion.div>

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="pt-6 md:pt-8"
        >
            <a 
                href="https://cafe.naver.com/051salsa/52623" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block w-full md:w-auto px-10 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-lg rounded-full shadow-lg shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300 animate-pulse"
            >
                예매하러 가기
            </a>
        </motion.div>
      </div>
      
      <div className="absolute bottom-6 md:bottom-10 left-0 right-0 flex justify-center animate-bounce">
        <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;