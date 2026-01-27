import React from 'react';
import { motion } from 'framer-motion';
import { Music, Camera, Sparkles, Shirt } from 'lucide-react';

const InfoCards: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 px-4 bg-black/20 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
            className="text-4xl font-bold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-white to-pink-300 font-playfair"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            Party Highlights
        </motion.h2>

        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
        >
            {/* Card 1: DJ */}
            <motion.div variants={item} className="glass-panel p-8 rounded-2xl border-t-4 border-t-purple-500 text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto bg-purple-500/20 rounded-full flex items-center justify-center mb-6 text-purple-400">
                    <Music size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Music</h3>
                <p className="text-gray-400 text-sm mb-4">The Best Salsa & Bachata</p>
                <div className="text-2xl font-black text-white">DJ 도베르만</div>
            </motion.div>

            {/* Card 2: Photo */}
            <motion.div variants={item} className="glass-panel p-8 rounded-2xl border-t-4 border-t-sky-500 text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto bg-sky-500/20 rounded-full flex items-center justify-center mb-6 text-sky-400">
                    <Camera size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Memories</h3>
                <p className="text-gray-400 text-sm mb-4">Pro Photography</p>
                <div className="text-2xl font-black text-white">사진 GS</div>
            </motion.div>

            {/* Card 3: Performance */}
            <motion.div variants={item} className="glass-panel p-8 rounded-2xl border-t-4 border-t-pink-500 text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto bg-pink-500/20 rounded-full flex items-center justify-center mb-6 text-pink-400">
                    <Sparkles size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Show Time</h3>
                <p className="text-gray-400 text-sm mb-4">Amazing Performances</p>
                <div className="space-y-2">
                    <div className="font-bold text-white">바차타 LV4 한곡반</div>
                    <div className="font-bold text-white">라라라 요미 레이디</div>
                </div>
            </motion.div>

            {/* Card 4: Dress Code */}
            <motion.div variants={item} className="glass-panel p-8 rounded-2xl border-t-4 border-t-white text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-6 text-white">
                    <Shirt size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Dress Code</h3>
                <p className="text-gray-400 text-sm mb-4">Style your night</p>
                <div className="flex justify-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white border-2 border-gray-500 shadow-lg cursor-help" title="White"></div>
                    <div className="w-8 h-8 rounded-full bg-pink-400 border-2 border-pink-200 shadow-lg cursor-help" title="Pink"></div>
                    <div className="w-8 h-8 rounded-full bg-sky-400 border-2 border-sky-200 shadow-lg cursor-help" title="Sky Blue"></div>
                </div>
            </motion.div>
        </motion.div>

        {/* Food & Drink Banner */}
        <motion.div 
            className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-amber-900/40 to-orange-900/40 border border-amber-500/30 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
        >
            <p className="text-amber-200 text-lg font-medium flex items-center justify-center gap-3">
                <span className="text-2xl">🥃</span> 
                위스키 · 생맥주 · 핑거푸드 제공
                <span className="text-2xl">🍺</span>
            </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InfoCards;