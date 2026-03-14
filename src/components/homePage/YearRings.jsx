import React from 'react';

export default function YearRings() {
    const currentYear = new Date().getFullYear();

    const newLocal = "absolute h-20 w-9 rounded-[100%] border border-white/40 animate-[spin_8s_linear_infinite]";
    return (
        <div className="relative flex h-fit w-fit p-10 m-0 items-center justify-center overflow-hidden ">
            <span className="text-[8px] font-bold text-[#00C950] tracking-widest">©{currentYear}</span>

            <div className="absolute inset-0 flex items-center justify-center">

                {/* Ring 1 - Vertical Ellipse */}
                <div className={newLocal} />

                {/* Ring 2 - Diagonal /45deg */}
                <div className="absolute h-20 w-9 rounded-[100%] border border-white/40 rotate-45 animate-[spin_10s_linear_infinite_reverse]" />

                {/* Ring 3 - Diagonal /-45deg */}
                <div className="absolute h-20 w-9 rounded-[100%] border border-white/40 -rotate-45 animate-[spin_12s_linear_infinite]" />


            </div>

            <style>{`
        @keyframes spin {
          from { transform: rotate(var(--tw-rotate, 0deg)); }
          to { transform: rotate(calc(var(--tw-rotate, 0deg) + 360deg)); }
        }
      `}</style>
        </div>
    );
}