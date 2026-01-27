import React, { useEffect, useState } from 'react';

const FallingPetals: React.FC = () => {
  const [petals, setPetals] = useState<number[]>([]);

  useEffect(() => {
    // Create a set of petals
    const petalCount = 30;
    const newPetals = Array.from({ length: petalCount }, (_, i) => i);
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {petals.map((i) => (
        <div
          key={i}
          className="absolute text-pink-300 opacity-60 animate-fall"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-${Math.random() * 20 + 5}%`,
            animationDuration: `${Math.random() * 10 + 10}s`,
            animationDelay: `${Math.random() * 10}s`,
            fontSize: `${Math.random() * 10 + 10}px`,
          }}
        >
          🌸
        </div>
      ))}
      <style>{`
        @keyframes fall {
          0% {
            transform: translateY(-10vh) rotate(0deg) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(110vh) rotate(360deg) translateX(50px);
            opacity: 0;
          }
        }
        .animate-fall {
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
};

export default FallingPetals;