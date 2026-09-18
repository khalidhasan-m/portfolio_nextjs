"use client";

const sceneWidth = 1600;

function Building({ left, width, height, label }) {
  return (
    <div
      className="absolute bottom-[10px]"
      style={{
        left,
        width,
        height,
      }}
    >
      {/* Building */}
      <div className="absolute inset-0 rounded-[3px] border border-[#c8c5b8] bg-[#f1efe4]/70" />

      {/* Roof */}
      <div className="absolute -top-[10px] left-[20px] right-[20px] h-[10px] border-l border-t border-[#c8c5b8]" />

      {/* Label */}
      {label && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-[2px] border border-[#d1cdbf] bg-[#ebe8da] px-3 py-2 font-mono text-[12px] tracking-[1px] text-[#999487]">
          {label}
        </div>
      )}

      {/* Tiny details */}
      <div className="absolute left-[8px] top-[8px] h-[4px] w-[4px] rounded-full bg-[#bdb9aa]" />
      <div className="absolute right-[8px] top-[8px] h-[4px] w-[4px] rounded-full bg-[#bdb9aa]" />
    </div>
  );
}

function StreetLight({ left }) {
  return (
    <div
      className="absolute bottom-[10px] h-[57px] w-[1px] bg-[#aaa79b]"
      style={{ left }}
    >
      {/* Light top */}
      <div className="absolute -left-[3px] top-0 h-[7px] w-[7px] rounded-full border border-[#8e8a7c] bg-[#eeeade]" />

      {/* Orange light */}
      <div className="absolute -left-[2px] top-[8px] h-[6px] w-[6px] rounded-full bg-[#e7a536] shadow-[0_0_5px_rgba(231,165,54,0.5)]" />

      {/* Pole */}
      <div className="absolute left-0 top-[15px] h-[30px] w-[1px] bg-[#aaa79b]" />
    </div>
  );
}

function SmallTree({ left, height = 25 }) {
  return (
    <div className="absolute bottom-[10px]" style={{ left }}>
      {/* Trunk */}
      <div className="mx-auto w-[1px] bg-[#aaa79b]" style={{ height }} />

      {/* Outer tree */}
      <div className="absolute -top-[7px] left-1/2 h-[14px] w-[14px] -translate-x-1/2 rounded-full border border-[#aaa79b] bg-[#f6f3e8]" />

      {/* Inner tree */}
      <div className="absolute -top-[4px] left-1/2 h-[8px] w-[8px] -translate-x-1/2 rounded-full border border-[#c3bfb1]" />
    </div>
  );
}

function SmallObject({ left, type = "bench" }) {
  if (type === "bench") {
    return (
      <div
        className="absolute bottom-[10px] h-[12px] w-[30px]"
        style={{ left }}
      >
        <div className="absolute top-0 h-[3px] w-full rounded-sm bg-[#a9a598]" />
        <div className="absolute top-[4px] left-[4px] h-[8px] w-[2px] bg-[#a9a598]" />
        <div className="absolute top-[4px] right-[4px] h-[8px] w-[2px] bg-[#a9a598]" />
      </div>
    );
  }

  if (type === "chair") {
    return (
      <div
        className="absolute bottom-[10px] h-[18px] w-[18px]"
        style={{ left }}
      >
        <div className="absolute bottom-0 h-[7px] w-[15px] rounded border border-[#a9a598]" />
        <div className="absolute bottom-0 left-[2px] h-[15px] w-[1px] bg-[#a9a598]" />
        <div className="absolute bottom-0 right-[2px] h-[15px] w-[1px] bg-[#a9a598]" />
      </div>
    );
  }

  return null;
}

/* =========================================================
   IMPROVED SVG WALKING CHARACTER
========================================================= */

function WalkingPerson() {
  return (
    <div className="absolute bottom-[9px] left-[18%] z-30 h-[70px] w-[34px]">
      <svg
        viewBox="0 0 34 70"
        className="h-full w-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="walker-body">
          {/* Backpack */}
          <path
            d="M8 22 C4 23 4 30 5 39 L9 39 L10 23 Z"
            fill="#5c6870"
            stroke="#4f5960"
            strokeWidth="0.7"
          />

          {/* Backpack pocket */}
          <path
            d="M5.5 30 C5.5 28.5 7 28 8.5 28.5 L8.5 34 L5.5 34 Z"
            fill="#707b81"
          />

          {/* Head */}
          <circle
            cx="18"
            cy="9"
            r="5"
            fill="#8b6b50"
            stroke="#725640"
            strokeWidth="0.6"
          />

          {/* Hair */}
          <path
            d="M13 9
               C12.5 4.5 15.2 2.5 18.3 3
               C21.8 2.7 23.4 5.5 22.8 8
               C21.8 6.2 20.2 5.3 18.2 5.5
               C16.2 5.2 14.5 6.6 13 9 Z"
            fill="#3f342c"
          />

          {/* Face */}
          <circle cx="20.2" cy="9.2" r="0.45" fill="#3c3028" />

          {/* Neck */}
          <rect x="16.3" y="13" width="3.5" height="3" rx="1" fill="#805f47" />

          {/* Shirt / Body */}
          <path
            d="M13 15
               C15 14 20 14 22 15
               L24 31
               C22 33 14 33 11.5 31
               Z"
            fill="#92734f"
          />

          {/* Shirt highlight */}
          <path
            d="M17 15 L18 29"
            stroke="#a9875e"
            strokeWidth="1"
            opacity="0.7"
          />

          {/* Left Arm */}
          <g className="walker-arm-left">
            <path
              d="M13 16 C11.5 21 10.5 26 9.5 31"
              fill="none"
              stroke="#7e6049"
              strokeWidth="3"
              strokeLinecap="round"
            />

            <circle cx="9.5" cy="31" r="1.5" fill="#7e6049" />
          </g>

          {/* Right Arm */}
          <g className="walker-arm-right">
            <path
              d="M22 16 C24 21 25 26 26 31"
              fill="none"
              stroke="#7e6049"
              strokeWidth="3"
              strokeLinecap="round"
            />

            <circle cx="26" cy="31" r="1.5" fill="#7e6049" />
          </g>

          {/* Left Leg */}
          <g className="walker-leg-left">
            <path
              d="M14.5 31 L12 56"
              fill="none"
              stroke="#566675"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            {/* Left shoe */}
            <path
              d="M10.5 55.5
                 C8.5 57 8.5 59 10.5 59
                 L16 59
                 C16.5 57 15 56 12 55.5 Z"
              fill="#403b35"
            />
          </g>

          {/* Right Leg */}
          <g className="walker-leg-right">
            <path
              d="M19.5 31 L22 56"
              fill="none"
              stroke="#566675"
              strokeWidth="3.5"
              strokeLinecap="round"
            />

            {/* Right shoe */}
            <path
              d="M20 55.5
                 C18.5 57 19 59 21 59
                 L26.5 59
                 C27 57 25 56 22 55.5 Z"
              fill="#403b35"
            />
          </g>
        </g>
      </svg>

      <style jsx>{`
        .walker-body {
          transform-box: fill-box;
          transform-origin: center bottom;
          animation: walker-bounce 600ms ease-in-out infinite;
        }

        .walker-arm-left,
        .walker-arm-right,
        .walker-leg-left,
        .walker-leg-right {
          transform-box: fill-box;
        }

        .walker-arm-left {
          transform-origin: 13px 16px;
          animation: arm-left 600ms ease-in-out infinite;
        }

        .walker-arm-right {
          transform-origin: 22px 16px;
          animation: arm-right 600ms ease-in-out infinite;
        }

        .walker-leg-left {
          transform-origin: 14.5px 31px;
          animation: leg-left 600ms ease-in-out infinite;
        }

        .walker-leg-right {
          transform-origin: 19.5px 31px;
          animation: leg-right 600ms ease-in-out infinite;
        }

        @keyframes walker-bounce {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-1.5px);
          }
        }

        @keyframes arm-left {
          0%,
          100% {
            transform: rotate(18deg);
          }

          50% {
            transform: rotate(-18deg);
          }
        }

        @keyframes arm-right {
          0%,
          100% {
            transform: rotate(-18deg);
          }

          50% {
            transform: rotate(18deg);
          }
        }

        @keyframes leg-left {
          0%,
          100% {
            transform: rotate(-16deg);
          }

          50% {
            transform: rotate(18deg);
          }
        }

        @keyframes leg-right {
          0%,
          100% {
            transform: rotate(18deg);
          }

          50% {
            transform: rotate(-16deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .walker-body,
          .walker-arm-left,
          .walker-arm-right,
          .walker-leg-left,
          .walker-leg-right {
            animation-play-state: paused;
          }
        }
      `}</style>
    </div>
  );
}

/* =========================================================
   CITY SCENE
========================================================= */

function Scene() {
  return (
    <div className="relative h-full shrink-0" style={{ width: sceneWidth }}>
      {/* Buildings */}

      <Building left={40} width={115} height={61} label="Miya" />

      <Building left={245} width={100} height={66} label="Grok" />

      <Building left={430} width={105} height={56} label="GitHub" />

      <Building left={620} width={115} height={65} label="Tailwind" />

      <Building left={825} width={100} height={58} label="Claude" />

      <Building left={1010} width={125} height={68} label="React" />

      <Building left={1210} width={105} height={57} label="Next.js" />

      <Building left={1390} width={130} height={66} label="AI" />

      {/* Street Lights */}

      <StreetLight left={185} />
      <StreetLight left={390} />
      <StreetLight left={570} />
      <StreetLight left={770} />
      <StreetLight left={950} />
      <StreetLight left={1170} />
      <StreetLight left={1345} />
      <StreetLight left={1550} />

      {/* Trees */}

      <SmallTree left={95} height={22} />
      <SmallTree left={225} height={29} />
      <SmallTree left={370} height={20} />
      <SmallTree left={545} height={25} />
      <SmallTree left={745} height={22} />
      <SmallTree left={900} height={28} />
      <SmallTree left={1080} height={21} />
      <SmallTree left={1280} height={27} />
      <SmallTree left={1370} height={22} />

      {/* Objects */}

      <SmallObject left={315} type="bench" />

      <SmallObject left={750} type="bench" />

      <SmallObject left={1150} type="chair" />

      {/* Orange markers */}

      {[205, 425, 712, 978, 1300].map((left) => (
        <div key={left} className="absolute bottom-[10px]" style={{ left }}>
          <div className="h-[5px] w-[5px] rounded-full border border-[#c99845] bg-[#e7a536]" />

          <div className="mx-auto h-[7px] w-px bg-[#b5b0a2]" />
        </div>
      ))}

      {/* Tiny poles */}

      {[
        20, 160, 280, 350, 500, 590, 800, 875, 1000, 1160, 1200, 1370, 1530,
      ].map((left) => (
        <div
          key={left}
          className="absolute bottom-[10px] h-[8px] w-px bg-[#bdb9ad]"
          style={{ left }}
        />
      ))}

      {/* Ground */}

      <div className="absolute bottom-[9px] left-0 h-px w-full bg-[#aaa79a]" />

      {/* Ground detail */}

      <div className="absolute bottom-[3px] left-0 h-[6px] w-full border-t border-[#d6d2c5]" />
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function AIJourney() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f8f5e9]">
      {/* Top Header */}

      <div className="relative z-40 flex h-[48px] items-center justify-between px-5 md:px-8">
        <div className="flex items-center gap-3">
          {/* Number */}

          <span className="text-[10px] font-medium text-[#df9f37]">10</span>

          {/* Title */}

          <h2 className="text-[21px] font-medium tracking-[-0.5px] text-[#282722]">
            AI Journey
          </h2>

          {/* Subtitle */}

          <span className="text-[13px] text-[#aaa699]">AI analytic SaaS</span>
        </div>

        {/* Right label */}

        <div className="text-[9px] font-medium tracking-[2px] text-[#a7a397]">
          NEXT PROJECTS
        </div>
      </div>

      {/* Scene */}

      <div className="relative h-[82px] overflow-hidden">
        {/* Horizontal paper lines */}

        <div className="pointer-events-none absolute inset-0 z-10 opacity-70">
          {Array.from({ length: 13 }).map((_, index) => (
            <div
              key={index}
              className="absolute left-0 w-full border-t border-[#ddd9cc]"
              style={{
                top: index * 6,
              }}
            />
          ))}
        </div>

        {/* Moving City */}

        <div className="absolute inset-0 flex w-max animate-city">
          <Scene />
          <Scene />
        </div>

        {/* Walking Person */}

        <WalkingPerson />
      </div>

      {/* City Animation */}

      <style jsx>{`
        @keyframes city {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-1600px);
          }
        }

        .animate-city {
          animation: city 32s linear infinite;
          will-change: transform;
        }

        @media (max-width: 768px) {
          .animate-city {
            animation-duration: 24s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-city {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
}
