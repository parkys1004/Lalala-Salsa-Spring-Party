import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Music, Star } from 'lucide-react';

const Performances: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative px-4 z-10 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-purple-600/10 rounded-full blur-[80px] md:blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-pink-600/10 rounded-full blur-[80px] md:blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-12 relative">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30 text-xs md:text-sm font-bold mb-3 md:mb-4 backdrop-blur-md">
               <Sparkles size={14} className="text-yellow-400 md:w-4 md:h-4" />
               Special Stage
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white font-playfair mb-4 md:mb-6 drop-shadow-lg">
              Performances
            </h2>
            <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto font-light">
              봄밤의 열기를 더해줄 라라라 살사의 스페셜 축하 공연
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
           {/* Card 1 */}
           <motion.div 
             className="group relative"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
           >
             <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition-opacity duration-500"></div>
             <div className="relative h-full min-h-[200px] md:min-h-[220px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/60 backdrop-blur-md p-6 md:p-8 flex flex-col justify-center items-center text-center hover:bg-white/10 transition-colors duration-300">
                <div className="mb-3 md:mb-4 p-3 bg-purple-500/20 rounded-full text-purple-300 group-hover:scale-110 transition-transform duration-300">
                    <Music size={24} className="md:w-7 md:h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">바차타 LV4 한 곡반</h3>
                <p className="text-gray-300 text-sm md:text-base">환상의 호흡을 자랑하는 바차타 LV4 멤버들의 멋진 군무</p>
             </div>
           </motion.div>

           {/* Card 2 */}
           <motion.div 
             className="group relative"
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.4 }}
           >
             <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-orange-600 rounded-2xl blur opacity-30 group-hover:opacity-70 transition-opacity duration-500"></div>
             <div className="relative h-full min-h-[200px] md:min-h-[220px] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-black/60 backdrop-blur-md p-6 md:p-8 flex flex-col justify-center items-center text-center hover:bg-white/10 transition-colors duration-300">
                <div className="mb-3 md:mb-4 p-3 bg-pink-500/20 rounded-full text-pink-300 group-hover:scale-110 transition-transform duration-300">
                    <Star size={24} className="md:w-7 md:h-7" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-pink-300 transition-colors">라라라 요미 레이디</h3>
                <p className="text-gray-300 text-sm md:text-base">아름다움과 파워풀함을 겸비한 레이디 스타일링 퍼포먼스</p>
             </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Performances;