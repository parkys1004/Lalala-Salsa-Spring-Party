import React from 'react';
import { motion } from 'framer-motion';
import { Users, Star, CheckCircle } from 'lucide-react';

const Workshop: React.FC = () => {
  return (
    <section className="py-12 md:py-20 relative px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          
          <motion.div 
            className="w-full md:w-1/2 relative group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-[4/3]">
                {/* Abstract representation of dance workshop */}
              <img 
                src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdna%2FR8w1D%2FdJMcacPtiGr%2FAAAAAAAAAAAAAAAAAAAAACLVqYuIpTq_RkL9B_p-X-QvMdW1_UqH7ph3LudeM15s%2Fimg.png%3Fcredential%3DyqXZFxpELC7KVnFOS48ylbz2pIh7yKj8%26expires%3D1769871599%26allow_ip%3D%26allow_referer%3D%26signature%3DyCdGhZLE6I%252Fgjwoa6Uwb%252FoGvqE4%253D" 
                alt="Raul & Yomi Workshop" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 md:p-8">
                <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Raul & Yomi</h3>
                    <p className="text-pink-300 font-medium text-sm md:text-base">Sensual Bachata Instructors</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full md:w-1/2 space-y-4 md:space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 text-pink-400 mb-2">
                <Star className="fill-current w-4 h-4 md:w-5 md:h-5" />
                <span className="font-bold tracking-widest uppercase text-xs md:text-sm">Workshop Class</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                센슈얼 바차타
              </span>
              <br />워크샵
            </h2>
            
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              기본부터 화려한 패턴까지, 누구나 무대 위 주인공이 될 수 있는 기회! 
              라울 & 요미 선생님과 함께하는 특별한 시간입니다.
            </p>

            <div className="space-y-3 py-2 md:py-4">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="bg-pink-500/20 p-2 rounded-full text-pink-400 mt-1 shrink-0">
                        <Users size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-base md:text-lg text-white">대상</h4>
                        <p className="text-sm md:text-base text-gray-400">바차타 초·중급 이상 레벨</p>
                    </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="bg-purple-500/20 p-2 rounded-full text-purple-400 mt-1 shrink-0">
                        <CheckCircle size={20} />
                    </div>
                    <div>
                        <h4 className="font-bold text-base md:text-lg text-white">커리큘럼</h4>
                        <p className="text-sm md:text-base text-gray-400">누구나 화려해지는 센바 패턴 & 스타일링</p>
                    </div>
                </div>
            </div>

            <div className="inline-block px-4 py-2 md:px-6 rounded-full bg-pink-900/40 border border-pink-500/50 text-pink-200 font-mono text-sm md:text-base">
                ⏰ PM 8:00 ~ 9:00 (60min)
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Workshop;