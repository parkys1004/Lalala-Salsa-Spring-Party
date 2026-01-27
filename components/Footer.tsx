import React from 'react';
import { ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-4 bg-[#0f0418] border-t border-white/5 relative z-10">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-playfair">
                Ready to Dance?
            </h2>
            <p className="text-gray-400">
                봄밤, 라라라에서 같이 춤춰요 💃🕺
            </p>
        </div>

        <a 
            href="https://cafe.naver.com/051salsa/52623" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#03C75A] text-white font-bold rounded-xl hover:bg-[#02b351] transition-colors shadow-lg shadow-green-900/20"
        >
            <span>네이버 카페 [라라라 살사] 바로가기</span>
            <ExternalLink size={18} />
        </a>

        <div className="pt-8 border-t border-white/5 mt-8 w-full flex flex-col items-center gap-2">
            <p className="text-xs text-gray-600">
                &copy; 2026 LALALA SALSA. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
                앱 디자인 <span className="font-bold text-pink-400 text-base ml-1">도베르만</span>
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;