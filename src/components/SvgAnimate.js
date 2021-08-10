import * as React from "react"
import styled from 'styled-components';

const SvgAnime = styled.svg`
 g#prefix__ADVANCED_EMAIL_SECURITY{
   cursor: pointer;
   animation: scaleDown 0.7s ease-out;
   animation-fill-mode: forwards;
   transform-origin: 50% 50%;
   &:hover{
     animation: scale 0.7s ease-out;
     animation-fill-mode: forwards;
     transform-origin: 50% 36%;
    }
  }

g#prefix__ADVANCED_DATA_LOSS_PREVENTION{
   cursor: pointer;
   animation: scaleDown 0.7s ease-out;
   animation-fill-mode: forwards;
   transform-origin: 50% 50%;
   &:hover{
     animation: scale 0.7s ease-out;
     animation-fill-mode: forwards;
     transform-origin: 56.1% 37.7%;
    }
  }

  g#prefix__ADVANCED_SECURITY_EDR{
   cursor: pointer;
   animation: scaleDown 0.7s ease-out;
   animation-fill-mode: forwards;
   transform-origin: 50% 50%;
   &:hover{
     animation: scale 0.7s ease-out;
     animation-fill-mode: forwards;
     transform-origin: 60.9% 42.9%;
    }
  }


  g#prefix__ADVANCED_SECURITY{
   cursor: pointer;
   animation: scaleDown 0.7s ease-out;
   animation-fill-mode: forwards;
   transform-origin: 50% 50%;
   &:hover{
     animation: scale 0.7s ease-out;
     animation-fill-mode: forwards;
     transform-origin: 62.5% 50%;
    }
  }


  g#prefix__ADVANCED_MANAGEMENT{
   cursor: pointer;
   animation: scaleDown 0.7s ease-out;
   animation-fill-mode: forwards;
   transform-origin: 50% 50%;
   &:hover{
     animation: scale 0.7s ease-out;
     animation-fill-mode: forwards;
     transform-origin: 60.9% 57%;
    }
  }

  g#prefix__ADVANCED_BACKUP{
   cursor: pointer;
   animation: scaleDown 0.7s ease-out;
   animation-fill-mode: forwards;
   transform-origin: 50% 50%;
   &:hover{
     animation: scale 0.7s ease-out;
     animation-fill-mode: forwards;
     transform-origin: 56.5% 61.9%;
    }
  }

 g#prefix__ADVANCED_DISASTER_RECOVERY{
   cursor: pointer;
   animation: scaleDown 0.7s ease-out;
   animation-fill-mode: forwards;
   transform-origin: 50% 50%;
   &:hover{
     animation: scale 0.7s ease-out;
     animation-fill-mode: forwards;
     transform-origin: 50% 64%;
    }
  }

  g#prefix__ADVANCED_FILE_SYNC_AND_SHARE{
   cursor: pointer;
   animation: scaleDown 0.7s ease-out;
   animation-fill-mode: forwards;
   transform-origin: 50% 50%;
   &:hover{
     animation: scale 0.7s ease-out;
     animation-fill-mode: forwards;
     transform-origin: 50% 64%;
    }
  }
  g#prefix__Security_Management {
   cursor: pointer;
   animation: scaleDownBig 0.7s ease-out;
   animation-fill-mode: forwards;
   transform-origin: 50% 50%;
   &:hover{
     animation: scaleBig 0.7s ease-out;
     animation-fill-mode: forwards;
     transform-origin: 49% ​51%;
    }
  }

@keyframes scaleDown{
  0%{
    transform:scale(1.1);
  }
  100% {
    transform:scale(1.0);
  }
}
@keyframes scale{
  0%{
    transform:scale(1);
  }
  100% {
    transform:scale(2);
    box-shadow: 10px 10px 60px 10px rgba(0,0,0,0.3)
  }
}

@keyframes scaleDownBig{
  0%{
    transform:scale(1.1);
  }
  100% {
    transform:scale(1.0);
  }
}
@keyframes scaleBig{
  0%{
    transform:scale(1);
  }
  100% {
    transform:scale(1.5);
    box-shadow: 10px 10px 60px 10px rgba(0,0,0,0.3)
  }
}

`;


function SvgComponent(props) {
  return (
    <SvgAnime
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1400 1250"
      {...props}
    >
      <defs>
        <radialGradient
          id="prefix__radial-gradient"
          cx={725}
          cy={650}
          r={425}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.9} stopColor="#fff" />
          <stop offset={0.91} stopColor="#f6f6f6" />
          <stop offset={0.92} stopColor="#dedede" />
          <stop offset={0.94} stopColor="#b6b6b6" />
          <stop offset={0.96} stopColor="#7f7f7f" />
          <stop offset={0.98} stopColor="#393939" />
          <stop offset={1} />
        </radialGradient>
        <radialGradient
          id="prefix__radial-gradient-2"
          cx={726}
          cy={651}
          r={149.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="gray" />
          <stop offset={1} stopColor="gray" />
        </radialGradient>
        <radialGradient
          id="prefix__radial-gradient-3"
          cx={725}
          cy={650}
          r={150}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.8} stopColor="#fff" />
          <stop offset={0.82} stopColor="#f6f6f6" />
          <stop offset={0.84} stopColor="#dedede" />
          <stop offset={0.88} stopColor="#b6b6b6" />
          <stop offset={0.92} stopColor="#7f7f7f" />
          <stop offset={0.97} stopColor="#393939" />
          <stop offset={1} />
        </radialGradient>
        <radialGradient
          id="prefix__radial-gradient-4"
          cx={700}
          cy={625}
          r={625}
          gradientTransform="matrix(1.12 0 0 1 -84 0)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#cfdd31" />
          <stop offset={0.24} stopColor="#c9db32" />
          <stop offset={0.56} stopColor="#b9d536" />
          <stop offset={0.92} stopColor="#9ecc3b" />
          <stop offset={1} stopColor="#97c93d" />
        </radialGradient>
        <radialGradient
          id="prefix__radial-gradient-5"
          cx={725}
          cy={650}
          r={425}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.9} stopColor="#8c8c8c" />
          <stop offset={0.92} stopColor="#959595" />
          <stop offset={0.94} stopColor="#adadad" />
          <stop offset={0.97} stopColor="#d5d5d5" />
          <stop offset={1} stopColor="#fff" />
        </radialGradient>
        <radialGradient
          id="prefix__radial-gradient-6"
          cx={726}
          cy={651}
          r={149.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fff" />
          <stop offset={1} stopColor="#fff" />
        </radialGradient>
        <radialGradient
          id="prefix__radial-gradient-7"
          cx={693}
          cy={1072}
          r={986.02}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#d9d9d9" />
          <stop offset={0.5} stopColor="#e7e7e7" />
          <stop offset={1} stopColor="#f0f0f0" />
        </radialGradient>
        <radialGradient
          id="prefix__radial-gradient-8"
          cx={725}
          cy={650}
          r={150}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.8} stopColor="#a6a6a6" />
          <stop offset={0.84} stopColor="#afafaf" />
          <stop offset={0.9} stopColor="#c7c7c7" />
          <stop offset={0.97} stopColor="#efefef" />
          <stop offset={1} stopColor="#fff" />
        </radialGradient>
        <radialGradient
          id="prefix__radial-gradient-9"
          cx={501}
          cy={618}
          r={350.21}
          xlinkHref="#prefix__radial-gradient-7"
        />
        <radialGradient
          id="prefix__radial-gradient-10"
          cx={697}
          cy={626}
          r={436.02}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#ccc" />
          <stop offset={0.5} stopColor="#dadada" />
          <stop offset={1} stopColor="#e3e3e3" />
        </radialGradient>
        <radialGradient
          id="prefix__radial-gradient-11"
          cx={697}
          cy={626}
          r={436.02}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#00b6cc" />
          <stop offset={0.21} stopColor="#27bcc1" />
          <stop offset={0.44} stopColor="#4cc1b7" />
          <stop offset={0.66} stopColor="#67c5af" />
          <stop offset={0.85} stopColor="#77c7ab" />
          <stop offset={1} stopColor="#7dc8a9" />
        </radialGradient>
        <radialGradient
          id="prefix__radial-gradient-12"
          cx={697}
          cy={626}
          r={436.02}
          xlinkHref="#prefix__radial-gradient-10"
        />
        <radialGradient
          id="prefix__radial-gradient-13"
          cx={697}
          cy={626}
          r={436.02}
          xlinkHref="#prefix__radial-gradient-4"
        />
        <radialGradient
          id="prefix__radial-gradient-14"
          cx={697}
          cy={626}
          r={436.02}
          xlinkHref="#prefix__radial-gradient-10"
        />
        <radialGradient
          id="prefix__radial-gradient-15"
          cx={697}
          cy={626}
          r={436.02}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#f7d50c" />
          <stop offset={0.26} stopColor="#f6cf0e" />
          <stop offset={0.59} stopColor="#f4bf15" />
          <stop offset={0.96} stopColor="#f0a421" />
          <stop offset={1} stopColor="#f0a122" />
        </radialGradient>
        <radialGradient
          id="prefix__radial-gradient-16"
          cx={697}
          cy={626}
          r={436.02}
          xlinkHref="#prefix__radial-gradient-10"
        />
        <radialGradient
          id="prefix__radial-gradient-17"
          cx={697}
          cy={626}
          r={436.02}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#f89820" />
          <stop offset={0.21} stopColor="#f79220" />
          <stop offset={0.48} stopColor="#f68221" />
          <stop offset={0.79} stopColor="#f36722" />
          <stop offset={1} stopColor="#f05023" />
        </radialGradient>
        <radialGradient
          id="prefix__radial-gradient-18"
          cx={697}
          cy={626}
          r={436.02}
          xlinkHref="#prefix__radial-gradient-10"
        />
        <radialGradient
          id="prefix__radial-gradient-19"
          cx={697}
          cy={626}
          r={436.02}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#f0679f" />
          <stop offset={0.21} stopColor="#ef6299" />
          <stop offset={0.48} stopColor="#ed5289" />
          <stop offset={0.79} stopColor="#e9386e" />
          <stop offset={1} stopColor="#e62358" />
        </radialGradient>
        <radialGradient
          id="prefix__radial-gradient-20"
          cx={697}
          cy={626}
          r={436.02}
          xlinkHref="#prefix__radial-gradient-10"
        />
        <radialGradient
          id="prefix__radial-gradient-21"
          cx={697}
          cy={626}
          r={436.02}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#7760a7" />
          <stop offset={0.33} stopColor="#725aa4" />
          <stop offset={0.75} stopColor="#624a9d" />
          <stop offset={1} stopColor="#563d97" />
        </radialGradient>
        <radialGradient
          id="prefix__radial-gradient-22"
          cx={697}
          cy={626}
          r={436.02}
          xlinkHref="#prefix__radial-gradient-10"
        />
        <radialGradient
          id="prefix__radial-gradient-23"
          cx={697}
          cy={626}
          r={436.02}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#0682c6" />
          <stop offset={0.42} stopColor="#067cc2" />
          <stop offset={0.97} stopColor="#046cb6" />
          <stop offset={1} stopColor="#046bb5" />
        </radialGradient>
        <radialGradient
          id="prefix__radial-gradient-24"
          cx={697}
          cy={626}
          r={436.02}
          xlinkHref="#prefix__radial-gradient-10"
        />
        <radialGradient
          id="prefix__radial-gradient-25"
          cx={697}
          cy={626}
          r={436.02}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#2aace2" />
          <stop offset={0.32} stopColor="#24a9df" />
          <stop offset={0.74} stopColor="#149fd8" />
          <stop offset={1} stopColor="#0696d1" />
        </radialGradient>
        <filter
          id="prefix__luminosity-noclip"
          x={412.24}
          y={-8817}
          width={737.76}
          height={32766}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodColor="#fff" result="bg" />
          <feBlend in="SourceGraphic" in2="bg" />
        </filter>
        <filter
          id="prefix__luminosity-noclip-2"
          x={576.51}
          y={-8817}
          width={298.99}
          height={32766}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodColor="#fff" result="bg" />
          <feBlend in="SourceGraphic" in2="bg" />
        </filter>
        <filter
          id="prefix__luminosity-noclip-3"
          x={575}
          y={-8817}
          width={300}
          height={32766}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodColor="#fff" result="bg" />
          <feBlend in="SourceGraphic" in2="bg" />
        </filter>
        <filter
          id="prefix__luminosity-noclip-4"
          x={412.24}
          y={337.24}
          width={737.76}
          height={737.76}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodColor="#fff" result="bg" />
          <feBlend in="SourceGraphic" in2="bg" />
        </filter>
        <filter
          id="prefix__luminosity-noclip-5"
          x={576.51}
          y={501.51}
          width={298.99}
          height={298.99}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodColor="#fff" result="bg" />
          <feBlend in="SourceGraphic" in2="bg" />
        </filter>
        <filter
          id="prefix__luminosity-noclip-6"
          x={575}
          y={500}
          width={300}
          height={300}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodColor="#fff" result="bg" />
          <feBlend in="SourceGraphic" in2="bg" />
        </filter>
        <linearGradient
          id="prefix__linear-gradient"
          x1={653.24}
          y1={590.69}
          x2={672.09}
          y2={588.72}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#26274f" />
          <stop offset={1} stopColor="#454c8d" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-2"
          x1={693.42}
          y1={648.29}
          x2={697.42}
          y2={642.57}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#454c8d" />
          <stop offset={1} stopColor="#26274f" />
        </linearGradient>
        <linearGradient
          id="prefix__linear-gradient-3"
          x1={705.52}
          y1={646.82}
          x2={699.4}
          y2={613.64}
          xlinkHref="#prefix__linear-gradient-2"
        />
        <linearGradient
          id="prefix__linear-gradient-4"
          x1={720.6}
          y1={555.21}
          x2={751.19}
          y2={511.55}
          xlinkHref="#prefix__linear-gradient-2"
        />
        <linearGradient
          id="prefix__linear-gradient-5"
          x1={707.31}
          y1={560.39}
          x2={669.04}
          y2={681.93}
          xlinkHref="#prefix__linear-gradient-2"
        />
        <mask
          id="prefix__mask-4"
          x={412.24}
          y={337.24}
          width={737.76}
          height={737.76}
          maskUnits="userSpaceOnUse"
        >
          <g
            mask="url(#prefix__mask)"
            filter="url(#prefix__luminosity-noclip-4)"
          >
            <path
              d="M1012.76 337.24A423.5 423.5 0 011125 625c0 234.72-190.28 425-425 425a423.5 423.5 0 01-287.76-112.24A423.88 423.88 0 00725 1075c234.72 0 425-190.28 425-425a423.88 423.88 0 00-137.24-312.76z"
              style={{
                mixBlendMode: "multiply",
              }}
              fill="url(#prefix__radial-gradient)"
            />
          </g>
        </mask>
        <mask
          id="prefix__mask-5"
          x={576.51}
          y={501.51}
          width={298.99}
          height={298.99}
          maskUnits="userSpaceOnUse"
        >
          <g
            mask="url(#prefix__mask-2)"
            filter="url(#prefix__luminosity-noclip-5)"
          >
            <path
              d="M700.5 800.5A175 175 0 00824 501.51 175 175 0 01576.51 749a174.44 174.44 0 00123.99 51.5z"
              style={{
                mixBlendMode: "multiply",
              }}
              fill="url(#prefix__radial-gradient-2)"
            />
          </g>
        </mask>
        <mask
          id="prefix__mask-6"
          x={575}
          y={500}
          width={300}
          height={300}
          maskUnits="userSpaceOnUse"
        >
          <g
            mask="url(#prefix__mask-3)"
            filter="url(#prefix__luminosity-noclip-6)"
          >
            <circle
              cx={725}
              cy={650}
              r={150}
              style={{
                mixBlendMode: "multiply",
              }}
              fill="url(#prefix__radial-gradient-3)"
            />
          </g>
        </mask>
        <style>
          {
            ".prefix__cls-13{fill:#fff}.prefix__cls-47{fill:#2e2f84}.prefix__cls-48,.prefix__cls-49,.prefix__cls-85{fill:#474647}.prefix__cls-49{font-size:13px}.prefix__cls-49,.prefix__cls-79,.prefix__cls-80,.prefix__cls-85{font-family:Roboto-Bold,Roboto;font-weight:700}.prefix__cls-50{letter-spacing:-.04em}.prefix__cls-52{letter-spacing:-.02em}.prefix__cls-59{fill:#2f3083}.prefix__cls-69{letter-spacing:.01em}.prefix__cls-79,.prefix__cls-80{font-size:26px}.prefix__cls-79{fill:#231f20}.prefix__cls-80,.prefix__cls-82{fill:#2e3182}.prefix__cls-81{fill:none;stroke:#2e3182;stroke-width:3px;stroke-miterlimit:10}.prefix__cls-85{font-size:10px}.prefix__cls-86{letter-spacing:-.02em}.prefix__cls-87{letter-spacing:-.01em}.prefix__cls-88{letter-spacing:-.03em}.prefix__cls-90,.prefix__cls-91,.prefix__cls-95,.prefix__cls-96,.prefix__cls-99{letter-spacing:-.01em}"
          }
        </style>
      </defs>
      <g
        style={{
          isolation: "isolate",
        }}
      >
        <g id="prefix__Layer_2" data-name="Layer 2">
          <g id="prefix__Layer_1-2" data-name="Layer 1">
            <g mask="url(#prefix__mask-4)">
              <path
                d="M1012.76 337.24A423.5 423.5 0 011125 625c0 234.72-190.28 425-425 425a423.5 423.5 0 01-287.76-112.24A423.88 423.88 0 00725 1075c234.72 0 425-190.28 425-425a423.88 423.88 0 00-137.24-312.76z"
                style={{
                  mixBlendMode: "multiply",
                }}
                fill="url(#prefix__radial-gradient-5)"
              />
            </g>
            <g mask="url(#prefix__mask-5)">
              <path
                d="M700.5 800.5A175 175 0 00824 501.51 175 175 0 01576.51 749a174.44 174.44 0 00123.99 51.5z"
                fill="url(#prefix__radial-gradient-6)"
              />
            </g>
            <path
              className="prefix__cls-13"
              d="M275.5 625.5c0-234.72 190.28-425 425-425a423.68 423.68 0 01300.27 124.23A423.66 423.66 0 00700 200c-234.72 0-425 190.28-425 425a423.66 423.66 0 00124.73 300.77A423.68 423.68 0 01275.5 625.5z"
            />
            <g id="prefix__Security_Management">
              <g
                style={{
                  mixBlendMode: "multiply",
                }}
              >
                <path
                  className="prefix__cls-13"
                  d="M550 650a174.93 174.93 0 0187.49-151.58L500 260.23C365.48 338 275 483.45 275 650s90.48 312 225 389.77l137.49-238.19A174.94 174.94 0 01550 650z"
                />
                <path
                  d="M499.63 261.58L636.2 498.13a175.88 175.88 0 000 303.74l-136.57 236.55a449.06 449.06 0 010-776.84z"
                  fill="#fbfbfb"
                />
                <path
                  d="M499.29 262.93l135.63 234.91a176.71 176.71 0 000 304.32l-135.63 234.91a448 448 0 010-774.14z"
                  fill="#f8f8f9"
                />
                <path
                  d="M499 264.29l134.63 233.26a177.56 177.56 0 000 304.9L499 1035.71a447 447 0 010-771.42z"
                  fill="#f6f6f6"
                />
                <path
                  d="M498.62 265.64l133.72 231.62a178.41 178.41 0 000 305.48l-133.72 231.62a446 446 0 010-768.72z"
                  fill="#f4f4f4"
                />
                <path
                  d="M498.28 267l132.78 230a179.26 179.26 0 000 306.06L498.28 1033a444.94 444.94 0 010-766z"
                  fill="#f1f2f2"
                />
                <path
                  d="M498 268.35l131.77 228.33a180.13 180.13 0 000 306.64L498 1031.65a443.9 443.9 0 010-763.3z"
                  fill="#eff0f0"
                />
                <path
                  d="M497.61 269.7l130.88 226.68a181 181 0 000 307.24L497.61 1030.3a442.9 442.9 0 010-760.6z"
                  fill="#edeeef"
                />
                <path
                  d="M497.27 271.05l129.93 225a181.91 181.91 0 000 307.82L497.27 1029a441.9 441.9 0 010-757.9z"
                  fill="#ebeced"
                />
                <path
                  d="M496.94 272.4l129 223.4a182.79 182.79 0 000 308.4l-129 223.4a440.88 440.88 0 010-755.2z"
                  fill="#e9eaeb"
                />
                <path
                  d="M496.6 273.76l128 221.75a183.7 183.7 0 000 309l-128 221.75a439.87 439.87 0 010-752.48z"
                  fill="#e7e8e9"
                />
                <path
                  d="M496.26 275.11l127.08 220.11a184.61 184.61 0 000 309.56l-127.08 220.11a438.88 438.88 0 010-749.78z"
                  fill="#e5e6e7"
                />
                <path
                  d="M495.93 276.46l126.13 218.47a185.53 185.53 0 000 310.14l-126.13 218.47a437.9 437.9 0 010-747.08z"
                  fill="#e3e4e5"
                />
                <path
                  d="M495.59 277.82l125.18 216.81a186.49 186.49 0 000 310.74l-125.18 216.81a436.9 436.9 0 010-744.36z"
                  fill="#e1e2e3"
                />
                <path
                  d="M495.26 279.17l124.23 215.17a187.41 187.41 0 000 311.32l-124.23 215.17a435.9 435.9 0 010-741.66z"
                  fill="#dfe0e1"
                />
                <path
                  d="M494.92 280.52L618.2 494.05a188.36 188.36 0 000 311.9l-123.28 213.53a434.93 434.93 0 010-739z"
                  fill="#dddedf"
                />
                <path
                  d="M494.58 281.87l122.33 211.89a189.34 189.34 0 000 312.48l-122.33 211.89a434 434 0 010-736.26z"
                  fill="#dbdcdd"
                />
                <path
                  d="M494.25 283.23l121.38 210.24a190.29 190.29 0 000 313.06l-121.38 210.24a433 433 0 010-733.54z"
                  fill="#d9dadb"
                />
                <path
                  d="M493.91 284.58l120.43 208.6a191.27 191.27 0 000 313.64l-120.43 208.6a432 432 0 010-730.84z"
                  fill="#d7d8d9"
                />
                <path
                  d="M493.57 285.93l119.49 207a192.26 192.26 0 000 314.23l-119.49 207a431.07 431.07 0 010-728.14z"
                  fill="#d5d6d7"
                />
                <path
                  d="M493.24 287.29l118.53 205.3a193.27 193.27 0 000 314.82l-118.53 205.3a430.09 430.09 0 010-725.42z"
                  fill="#d3d4d6"
                />
                <path
                  d="M492.9 288.64L610.49 492.3a194.28 194.28 0 000 315.4L492.9 1011.36a429.15 429.15 0 010-722.72z"
                  fill="#d1d2d4"
                />
                <path
                  d="M492.56 290L609.2 492a195.3 195.3 0 000 316l-116.64 202a428.23 428.23 0 010-720z"
                  fill="#ced0d2"
                />
                <path
                  d="M492.23 291.34l115.68 200.38a196.33 196.33 0 000 316.56l-115.68 200.38a427.28 427.28 0 010-717.32z"
                  fill="#ccced0"
                />
                <path
                  d="M491.89 292.7l114.74 198.73a197.36 197.36 0 000 317.14L491.89 1007.3a426.33 426.33 0 010-714.6z"
                  fill="#caccce"
                />
                <path
                  d="M491.56 294.05l113.78 197.09a198.43 198.43 0 000 317.72L491.56 1006a425.41 425.41 0 010-711.9z"
                  fill="#c8cacc"
                />
                <path
                  d="M491.22 295.4l112.84 195.44a199.49 199.49 0 000 318.32L491.22 1004.6a424.5 424.5 0 010-709.2z"
                  fill="#c6c8ca"
                />
                <path
                  d="M490.88 296.76l111.89 193.79a200.57 200.57 0 000 318.9l-111.89 193.8a423.56 423.56 0 010-706.49z"
                  fill="#c4c6c8"
                />
                <path
                  d="M490.55 298.11l110.94 192.15a201.64 201.64 0 000 319.48l-110.94 192.15a422.66 422.66 0 010-703.78z"
                  fill="#c2c4c6"
                />
                <path
                  d="M490.21 299.46L600.2 490a202.75 202.75 0 000 320.06l-110 190.51a421.77 421.77 0 010-701.08z"
                  fill="#c0c2c4"
                />
                <path
                  d="M489.87 300.81l109 188.87a203.86 203.86 0 000 320.64l-109 188.87a420.88 420.88 0 010-698.38z"
                  fill="#bec0c2"
                />
                <path
                  d="M489.54 997.83a420 420 0 010-695.66l108.09 187.22a205 205 0 000 321.22z"
                  fill="#bcbec0"
                />
              </g>
              <path
                d="M525 625a174.93 174.93 0 0187.49-151.58L475 235.23C340.48 313 250 458.45 250 625s90.48 312 225 389.77l137.49-238.19A174.94 174.94 0 01525 625z"
                fill="url(#prefix__radial-gradient-7)"
              />
              <path
                className="prefix__cls-13"
                d="M250.5 625.5c0-166.48 90.41-311.84 224.81-389.68l-.35-.59C340.48 313 250 458.45 250 625a448.61 448.61 0 00133.21 319.59A448.58 448.58 0 01250.5 625.5zM612.4 776.72l.09-.14a176.14 176.14 0 01-35.55-27.16 175.87 175.87 0 0035.46 27.3z"
              />
              <path
                className="prefix__cls-47"
                d="M386.2 340.63a1 1 0 00-.41-.89 5.18 5.18 0 00-1.47-.66 9.77 9.77 0 01-1.69-.68 2.76 2.76 0 01-1.7-2.47 2.35 2.35 0 01.46-1.43 2.87 2.87 0 011.3-1 4.89 4.89 0 011.91-.36 4.39 4.39 0 011.9.39 3 3 0 011.3 1.09 2.83 2.83 0 01.46 1.6h-2.05a1.32 1.32 0 00-.43-1.06 1.74 1.74 0 00-1.21-.38 1.91 1.91 0 00-1.17.31 1 1 0 00-.42.84 1 1 0 00.49.81 5.54 5.54 0 001.44.62 6.16 6.16 0 012.55 1.31 2.55 2.55 0 01.8 1.94 2.37 2.37 0 01-1 2 4.26 4.26 0 01-2.63.74 5.1 5.1 0 01-2.09-.42 3.35 3.35 0 01-1.44-1.15 3 3 0 01-.49-1.7h2.05c0 1.1.66 1.65 2 1.65a1.89 1.89 0 001.14-.3 1 1 0 00.4-.8zM395.64 338.91h-3.94v2.68h4.62v1.65h-6.67v-9.95h6.66V335h-4.61v2.37h3.94zM405.34 339.93a3.52 3.52 0 01-1.19 2.53 4.18 4.18 0 01-2.82.92 3.75 3.75 0 01-3-1.29 5.3 5.3 0 01-1.1-3.54v-.61a6 6 0 01.51-2.53 3.83 3.83 0 011.45-1.67 4 4 0 012.18-.59 4.06 4.06 0 012.77.92 3.77 3.77 0 011.22 2.6h-2.06a2.06 2.06 0 00-.54-1.4 2 2 0 00-1.4-.44 1.76 1.76 0 00-1.54.74 4.21 4.21 0 00-.52 2.28v.75a4.37 4.37 0 00.49 2.36 1.7 1.7 0 001.54.74 1.69 1.69 0 002-1.77zM414.22 333.29v6.55a3.38 3.38 0 01-1 2.59 4.62 4.62 0 01-5.57 0 3.32 3.32 0 01-1-2.54v-6.63h2.05v6.57a1.9 1.9 0 00.47 1.42 1.78 1.78 0 001.29.45c1.16 0 1.74-.61 1.76-1.82v-6.62zM419.58 339.6H418v3.64h-2.1v-9.95h3.7a4.22 4.22 0 012.72.78 2.73 2.73 0 011 2.23 3 3 0 01-.45 1.7 3 3 0 01-1.33 1.08l2.15 4.07v.09h-2.2zm-1.58-1.66h1.65a1.66 1.66 0 001.2-.4 1.4 1.4 0 00.42-1.08 1.5 1.5 0 00-.4-1.11 1.63 1.63 0 00-1.22-.4H418zM427 343.24h-2v-9.95h2zM436.21 335h-3v8.29h-2.05V335h-3v-1.66h8.11zM440.92 337.77l2.07-4.48h2.24l-3.23 6.34v3.61h-2.08v-3.61l-3.27-6.34h2.25z"
              />
              <path
                className="prefix__cls-48"
                d="M381 369.58a1.4 1.4 0 01.42-1.06 1.69 1.69 0 012.17 0 1.42 1.42 0 01.43 1v.27a1.36 1.36 0 01-.42 1.05 1.5 1.5 0 01-1.09.4 1.51 1.51 0 01-1.09-.4 1.39 1.39 0 01-.42-1.07zM396.14 371.36a3.22 3.22 0 01-1.1 2.35 3.86 3.86 0 01-2.62.86 3.47 3.47 0 01-2.79-1.2 4.9 4.9 0 01-1-3.28v-.57a5.6 5.6 0 01.47-2.35 3.51 3.51 0 011.34-1.55 3.7 3.7 0 012-.55 3.77 3.77 0 012.58.86 3.51 3.51 0 011.13 2.41h-1.91a1.88 1.88 0 00-.5-1.3 1.83 1.83 0 00-1.3-.41 1.62 1.62 0 00-1.43.69 3.87 3.87 0 00-.48 2.11v.7a4.12 4.12 0 00.45 2.19 1.6 1.6 0 001.43.69 1.88 1.88 0 001.32-.4 1.81 1.81 0 00.5-1.25zM399.84 371.85l1.27-4.28h2l-2.77 7.94-.15.36a2.09 2.09 0 01-2 1.35 2.84 2.84 0 01-.81-.12v-1.39h.28a1.51 1.51 0 00.78-.16 1 1 0 00.4-.52l.21-.57-2.4-6.89h2zM410 371.07a4.19 4.19 0 01-.71 2.58 2.33 2.33 0 01-2 .92 2.16 2.16 0 01-1.79-.86l-.08.73h-1.62v-9.75h1.83v3.5a2.08 2.08 0 011.67-.74 2.33 2.33 0 012 .92 4.14 4.14 0 01.7 2.63zm-1.84-.14a2.74 2.74 0 00-.33-1.52 1.1 1.1 0 00-1-.48 1.22 1.22 0 00-1.21.72v2.71a1.23 1.23 0 001.22.73 1.14 1.14 0 001.17-.88 4.54 4.54 0 00.14-1.28zM414.28 374.57a3.36 3.36 0 01-2.46-.93 3.31 3.31 0 01-.95-2.47V371a4.08 4.08 0 01.4-1.84 2.89 2.89 0 011.13-1.26 3.15 3.15 0 011.68-.44 2.79 2.79 0 012.21.89 3.6 3.6 0 01.81 2.52v.74h-4.37a1.7 1.7 0 00.54 1.08 1.6 1.6 0 001.13.41 2 2 0 001.66-.77l.9 1a2.8 2.8 0 01-1.12.91 3.63 3.63 0 01-1.56.33zm-.21-5.64a1.16 1.16 0 00-.89.37 1.91 1.91 0 00-.43 1.05h2.55v-.14a1.38 1.38 0 00-.33-.95 1.19 1.19 0 00-.9-.33zM422 369.29a5.73 5.73 0 00-.66-.05 1.35 1.35 0 00-1.34.76v4.49h-1.83v-6.87h1.73l.05.82a1.7 1.7 0 011.53-.94 1.79 1.79 0 01.57.08zM428.57 370.66h-3.66v3.78H423v-9.24h6v1.54h-4.11v2.39h3.66zM430 365.8a.91.91 0 01.27-.68 1 1 0 01.75-.27 1 1 0 01.75.27 1 1 0 010 1.36 1.16 1.16 0 01-1.49 0 .88.88 0 01-.28-.68zm1.94 8.64h-1.84v-6.87h1.84zM435.65 365.89v1.68h1.18v1.35h-1.18v3.43a.79.79 0 00.15.54.73.73 0 00.56.17 2.92 2.92 0 00.54-.05v1.39a3.78 3.78 0 01-1.11.17 1.75 1.75 0 01-2-1.95v-3.7h-1v-1.35h1v-1.68zM446 372a1 1 0 00-.38-.83 5 5 0 00-1.37-.61 9.92 9.92 0 01-1.57-.63 2.57 2.57 0 01-1.58-2.29 2.26 2.26 0 01.43-1.34 2.73 2.73 0 011.21-.92 4.58 4.58 0 011.77-.33 4.18 4.18 0 011.77.36 2.85 2.85 0 011.2 1 2.63 2.63 0 01.43 1.49H446a1.28 1.28 0 00-.39-1 2 2 0 00-2.21-.05.91.91 0 00-.39.77.9.9 0 00.45.76 5.46 5.46 0 001.34.57 5.8 5.8 0 012.37 1.21 2.42 2.42 0 01.74 1.8 2.23 2.23 0 01-.91 1.89 4 4 0 01-2.44.68 4.7 4.7 0 01-1.94-.39 3.09 3.09 0 01-1.34-1.07 2.72 2.72 0 01-.46-1.58h1.91q0 1.53 1.83 1.53a1.83 1.83 0 001.06-.27.91.91 0 00.38-.75zM451.93 373.09a1.19 1.19 0 00.83-.28 1 1 0 00.33-.74h1.72a2.34 2.34 0 01-.38 1.28 2.59 2.59 0 01-1 .9 3.23 3.23 0 01-1.43.32 3 3 0 01-2.33-.94 3.71 3.71 0 01-.85-2.58v-.12a3.65 3.65 0 01.85-2.54 2.93 2.93 0 012.31-.94 2.89 2.89 0 012.07.73 2.6 2.6 0 01.79 1.95h-1.72a1.26 1.26 0 00-.33-.87 1.24 1.24 0 00-1.81.13 2.8 2.8 0 00-.32 1.52v.19a2.72 2.72 0 00.32 1.53 1.11 1.11 0 00.95.46zM455.57 370.94a4.12 4.12 0 01.39-1.82 2.89 2.89 0 011.14-1.23 3.2 3.2 0 011.71-.44 3.1 3.1 0 012.27.85 3.33 3.33 0 011 2.31v.47a3.61 3.61 0 01-.88 2.53 3.42 3.42 0 01-4.74 0 3.67 3.67 0 01-.89-2.59zm1.84.13a2.59 2.59 0 00.36 1.5 1.33 1.33 0 002.1 0 2.82 2.82 0 00.37-1.64 2.57 2.57 0 00-.37-1.49 1.32 1.32 0 00-2.1 0 2.9 2.9 0 00-.36 1.63zM467.07 369.29a5.73 5.73 0 00-.66-.05 1.35 1.35 0 00-1.41.76v4.49h-1.83v-6.87h1.73l.05.82a1.7 1.7 0 011.53-.94 1.79 1.79 0 01.57.08zM471 374.57a3.36 3.36 0 01-2.46-.93 3.31 3.31 0 01-.95-2.47V371a4.08 4.08 0 01.4-1.84 2.89 2.89 0 011.13-1.26 3.15 3.15 0 011.68-.44 2.82 2.82 0 012.21.89 3.6 3.6 0 01.81 2.52v.74h-4.37a1.7 1.7 0 00.54 1.08 1.6 1.6 0 001.13.41 2 2 0 001.66-.77l.9 1a2.8 2.8 0 01-1.12.91 3.63 3.63 0 01-1.56.33zm-.21-5.64a1.16 1.16 0 00-.89.37 1.91 1.91 0 00-.43 1.05H472v-.14a1.38 1.38 0 00-.33-.95 1.19 1.19 0 00-.89-.33zM381 385.18a1.4 1.4 0 01.42-1.06 1.69 1.69 0 012.17 0 1.42 1.42 0 01.43 1v.27a1.36 1.36 0 01-.42 1.05 1.5 1.5 0 01-1.09.4 1.51 1.51 0 01-1.09-.4 1.39 1.39 0 01-.42-1.07zM392.3 387.75l2.1-6.95h2.12l-3.22 9.2h-2l-3.2-9.24h2.11zM401.2 389.34a2.3 2.3 0 01-1.88.83 2.15 2.15 0 01-1.68-.64 2.64 2.64 0 01-.59-1.86v-4.5h1.83v4.45c0 .71.33 1.07 1 1.07a1.33 1.33 0 001.28-.65v-4.87H403V390h-1.73zM406.3 390h-1.84v-9.75h1.84zM409.5 383.17l.06.8a2.38 2.38 0 012-.92 2 2 0 011.63.64 3 3 0 01.54 1.91v4.4h-1.83v-4.4a1.2 1.2 0 00-.26-.85 1.11 1.11 0 00-.84-.26 1.26 1.26 0 00-1.16.66V390h-1.84v-6.87zM418.25 390.17a3.39 3.39 0 01-2.46-.93 3.31 3.31 0 01-1-2.47v-.18a4.26 4.26 0 01.4-1.85 2.94 2.94 0 011.14-1.25 3.11 3.11 0 011.67-.44 2.83 2.83 0 012.22.89 3.6 3.6 0 01.81 2.52v.74h-4.33a1.7 1.7 0 00.54 1.08 1.64 1.64 0 001.13.41 2 2 0 001.66-.77l.9 1a2.74 2.74 0 01-1.12.91 3.63 3.63 0 01-1.56.34zm-.21-5.64a1.12 1.12 0 00-.88.37 1.89 1.89 0 00-.44 1.05h2.55v-.14a1.29 1.29 0 00-.33-.95 1.19 1.19 0 00-.94-.33zM426 384.89a5.73 5.73 0 00-.66-.05 1.35 1.35 0 00-1.37.71V390h-1.83v-6.87h1.73v.82a1.78 1.78 0 012.1-.86zM430.65 390a1.91 1.91 0 01-.18-.61 2.26 2.26 0 01-1.74.74 2.43 2.43 0 01-1.67-.59 1.88 1.88 0 01-.66-1.47 1.93 1.93 0 01.81-1.67 4 4 0 012.34-.59h.84v-.4a1.15 1.15 0 00-.24-.76 1 1 0 00-.78-.29 1.05 1.05 0 00-.72.23.73.73 0 00-.27.61h-1.83a1.83 1.83 0 01.37-1.11 2.35 2.35 0 011-.79 3.67 3.67 0 011.51-.29 3 3 0 012 .63 2.25 2.25 0 01.75 1.8v3a3.3 3.3 0 00.27 1.48v.08zm-1.52-1.27a1.49 1.49 0 00.75-.19 1.19 1.19 0 00.51-.48v-1.18h-.69c-.91 0-1.4.32-1.46.95v.17a.71.71 0 00.24.56.93.93 0 00.65.21zM439.83 386.67a4.2 4.2 0 01-.7 2.57 2.35 2.35 0 01-2 .93 2.16 2.16 0 01-1.79-.86l-.08.73h-1.65v-9.75h1.83v3.5a2.08 2.08 0 011.67-.74 2.36 2.36 0 012 .92 4.21 4.21 0 01.71 2.6zm-1.84-.14a2.74 2.74 0 00-.33-1.52 1.1 1.1 0 00-1-.48 1.23 1.23 0 00-1.21.71V388a1.23 1.23 0 001.22.73 1.13 1.13 0 001.17-.88 4.54 4.54 0 00.16-1.32zM441 381.4a.91.91 0 01.27-.68 1 1 0 01.75-.27 1 1 0 01.75.27 1 1 0 010 1.36 1.16 1.16 0 01-1.49 0 .88.88 0 01-.28-.68zm1.94 8.64h-1.84v-6.87h1.84zM446.34 390h-1.84v-9.75h1.84zM447.84 381.4a.88.88 0 01.28-.68 1 1 0 01.75-.27 1 1 0 01.75.27.92.92 0 01.28.68.89.89 0 01-.29.68 1 1 0 01-.74.27 1 1 0 01-.75-.27.88.88 0 01-.28-.68zm2 8.64H448v-6.87h1.84zM453.49 381.48v1.69h1.18v1.35h-1.18V388a.79.79 0 00.15.54.73.73 0 00.56.17 2.92 2.92 0 00.54-.05V390a3.78 3.78 0 01-1.11.17 1.75 1.75 0 01-2-1.95v-3.7h-1v-1.35h1v-1.69zM458.26 387.45l1.27-4.28h2l-2.76 7.94-.15.36a2.09 2.09 0 01-2 1.34 2.84 2.84 0 01-.81-.12v-1.38h.19a1.47 1.47 0 00.78-.16 1.05 1.05 0 00.41-.52l.21-.57-2.4-6.89h2zM469.43 390a1 1 0 10-1.91.13 2.46 2.46 0 01-1.68-.59 1.88 1.88 0 01-.66-1.47 1.93 1.93 0 01.81-1.67 4 4 0 012.34-.59h.84v-.4a1.15 1.15 0 00-.24-.76 1 1 0 00-.77-.29 1.1 1.1 0 00-.73.23.76.76 0 00-.26.61h-1.84a1.9 1.9 0 01.37-1.11 2.41 2.41 0 011-.79 3.7 3.7 0 011.51-.29 3 3 0 012 .63 2.25 2.25 0 01.75 1.8v3a3.17 3.17 0 00.27 1.48v.08zm-1.51-1.27a1.49 1.49 0 00.75-.19 1.22 1.22 0 00.5-.48v-1.18h-.68c-.92 0-1.41.32-1.47.95v.17a.71.71 0 00.24.56.93.93 0 00.66.21zM476.14 388.14a.6.6 0 00-.33-.53 3.72 3.72 0 00-1.07-.34c-1.63-.35-2.45-1-2.45-2.08a1.88 1.88 0 01.76-1.53 3 3 0 012-.61 3.29 3.29 0 012.09.61 1.93 1.93 0 01.79 1.6h-1.84a.88.88 0 00-.25-.65 1.07 1.07 0 00-.79-.26 1.1 1.1 0 00-.72.21.67.67 0 00-.26.54.58.58 0 00.29.49 3.17 3.17 0 001 .32 8.05 8.05 0 011.15.31 1.91 1.91 0 011.46 1.85 1.8 1.8 0 01-.81 1.52 3.46 3.46 0 01-2.08.58 3.51 3.51 0 01-1.53-.31 2.53 2.53 0 01-1.05-.84 2 2 0 01-.39-1.16h1.74a1 1 0 00.37.75 1.44 1.44 0 00.9.26 1.33 1.33 0 00.79-.2.64.64 0 00.23-.53zM482.83 388.14a.59.59 0 00-.34-.53 3.62 3.62 0 00-1.07-.34c-1.63-.35-2.45-1-2.45-2.08a1.91 1.91 0 01.76-1.53 3.07 3.07 0 012-.61 3.29 3.29 0 012.09.61 2 2 0 01.78 1.6h-1.83a.89.89 0 00-.26-.65 1.07 1.07 0 00-.79-.26 1.1 1.1 0 00-.72.21.66.66 0 00-.25.54.58.58 0 00.29.49 3.09 3.09 0 001 .32 8.62 8.62 0 011.16.31 1.9 1.9 0 011.45 1.85 1.81 1.81 0 01-.8 1.52 3.49 3.49 0 01-2.09.58 3.58 3.58 0 01-1.53-.31 2.53 2.53 0 01-1.05-.84 2 2 0 01-.38-1.16h1.74a1 1 0 00.36.75 1.44 1.44 0 00.9.26 1.37 1.37 0 00.8-.2.64.64 0 00.23-.53zM489 390.17a3.39 3.39 0 01-2.46-.93 3.31 3.31 0 01-.95-2.47v-.18a4.12 4.12 0 01.41-1.85 2.86 2.86 0 011.13-1.25 3.11 3.11 0 011.67-.44 2.83 2.83 0 012.22.89 3.6 3.6 0 01.81 2.52v.74h-4.43a1.7 1.7 0 00.54 1.08 1.64 1.64 0 001.13.41 2 2 0 001.66-.77l.9 1a2.77 2.77 0 01-1.11.91 3.68 3.68 0 01-1.52.34zm-.21-5.64a1.12 1.12 0 00-.88.37 1.89 1.89 0 00-.44 1.05H490v-.14a1.38 1.38 0 00-.33-.95 1.22 1.22 0 00-.93-.33zM496.54 388.14a.6.6 0 00-.33-.53 3.84 3.84 0 00-1.07-.34c-1.64-.35-2.45-1-2.45-2.08a1.9 1.9 0 01.75-1.53 3.07 3.07 0 012-.61 3.29 3.29 0 012.09.61 2 2 0 01.78 1.6h-1.83a.89.89 0 00-.26-.65 1.06 1.06 0 00-.79-.26 1.1 1.1 0 00-.72.21.69.69 0 00-.25.54.58.58 0 00.29.49 3.09 3.09 0 001 .32 8.23 8.23 0 011.16.31 1.9 1.9 0 011.45 1.85 1.81 1.81 0 01-.8 1.52 3.49 3.49 0 01-2.09.58 3.58 3.58 0 01-1.53-.31 2.6 2.6 0 01-1-.84 2 2 0 01-.38-1.16h1.74a1 1 0 00.36.75 1.46 1.46 0 00.9.26 1.37 1.37 0 00.8-.2.64.64 0 00.18-.53zM503.22 388.14a.6.6 0 00-.33-.53 3.72 3.72 0 00-1.07-.34c-1.63-.35-2.45-1-2.45-2.08a1.88 1.88 0 01.76-1.53 3 3 0 012-.61 3.29 3.29 0 012.09.61 1.93 1.93 0 01.79 1.6h-1.84a.88.88 0 00-.25-.65 1.07 1.07 0 00-.79-.26 1.1 1.1 0 00-.72.21.67.67 0 00-.26.54.58.58 0 00.29.49 3.17 3.17 0 001 .32 8.05 8.05 0 011.15.31 1.91 1.91 0 011.46 1.85 1.8 1.8 0 01-.81 1.52 3.46 3.46 0 01-2.08.58 3.51 3.51 0 01-1.53-.31 2.53 2.53 0 01-1-.84 2 2 0 01-.39-1.16h1.74a1 1 0 00.37.75 1.44 1.44 0 00.9.26 1.33 1.33 0 00.79-.2.64.64 0 00.18-.53zM507.91 383.17v.77a2.42 2.42 0 012-.89 1.84 1.84 0 011.82 1 2.37 2.37 0 012.06-1 2 2 0 011.67.65 3 3 0 01.54 1.95V390h-1.84v-4.39a1.25 1.25 0 00-.23-.85 1 1 0 00-.8-.27 1.16 1.16 0 00-1.15.78V390h-1.83v-4.38a1.29 1.29 0 00-.24-.87 1 1 0 00-.8-.26 1.18 1.18 0 00-1.13.64V390h-1.83v-6.87zM520.6 390.17a3.37 3.37 0 01-2.46-.93 3.31 3.31 0 01-.95-2.47v-.18a4.26 4.26 0 01.4-1.85 2.94 2.94 0 011.14-1.25 3.09 3.09 0 011.67-.44 2.83 2.83 0 012.22.89 3.6 3.6 0 01.81 2.52v.74h-4.38a1.7 1.7 0 00.54 1.08 1.64 1.64 0 001.13.41 2 2 0 001.66-.77l.9 1a2.74 2.74 0 01-1.12.91 3.63 3.63 0 01-1.56.34zm-.21-5.64a1.12 1.12 0 00-.88.37 1.89 1.89 0 00-.44 1.05h2.55v-.14a1.29 1.29 0 00-.33-.95 1.19 1.19 0 00-.9-.33zM526.16 383.17l.05.8a2.4 2.4 0 012-.92 2 2 0 011.62.64 2.94 2.94 0 01.55 1.91v4.4h-1.84v-4.4a1.2 1.2 0 00-.25-.85 1.11 1.11 0 00-.84-.26 1.27 1.27 0 00-1.17.66V390h-1.83v-6.87zM534 381.48v1.69h1.17v1.35H534V388a.79.79 0 00.14.54.75.75 0 00.56.17 2.92 2.92 0 00.54-.05V390a3.78 3.78 0 01-1.11.17 1.75 1.75 0 01-2-1.95v-3.7h-1v-1.35h1v-1.69zM381 400.78a1.4 1.4 0 01.42-1.06 1.69 1.69 0 012.17 0 1.42 1.42 0 01.43 1v.28a1.36 1.36 0 01-.42 1.05 1.5 1.5 0 01-1.09.4 1.51 1.51 0 01-1.09-.4A1.39 1.39 0 01381 401zM394.11 403.74h-3.34l-.64 1.9h-2l3.44-9.24h1.76l3.46 9.24h-2zm-2.83-1.55h2.31l-1.16-3.45zM400.37 404.29a1.19 1.19 0 00.83-.28 1 1 0 00.33-.74h1.72a2.42 2.42 0 01-.38 1.28 2.65 2.65 0 01-1 .9 3.24 3.24 0 01-1.44.32 3 3 0 01-2.32-.94 3.67 3.67 0 01-.85-2.58v-.12a3.69 3.69 0 01.84-2.54 3 3 0 012.32-.94 2.89 2.89 0 012.07.73 2.6 2.6 0 01.79 1.95h-1.72a1.28 1.28 0 00-.33-.87 1.24 1.24 0 00-1.81.13 2.7 2.7 0 00-.33 1.52v.19a2.71 2.71 0 00.33 1.53 1.1 1.1 0 00.95.46zM404.28 397a.88.88 0 01.28-.68 1 1 0 01.75-.27 1 1 0 01.75.27.88.88 0 01.28.68.92.92 0 01-.28.68 1.18 1.18 0 01-1.5 0 .92.92 0 01-.28-.68zm2 8.64h-1.84v-6.87h1.84zM409.94 397.09v1.68h1.17v1.35h-1.17v3.43a.85.85 0 00.14.54.75.75 0 00.56.17 2.84 2.84 0 00.54-.05v1.39a3.78 3.78 0 01-1.11.17 1.75 1.75 0 01-2-1.95v-3.7h-1v-1.35h1v-1.68zM414.7 403.4l1.28-4.63h1.92l-2.32 6.87h-1.75l-2.32-6.87h1.92zM421.78 405.77a3.37 3.37 0 01-2.46-.93 3.31 3.31 0 01-.95-2.47v-.18a4.21 4.21 0 01.4-1.84 2.91 2.91 0 011.14-1.26 3.11 3.11 0 011.67-.44 2.83 2.83 0 012.22.89 3.6 3.6 0 01.81 2.52v.74h-4.38a1.7 1.7 0 00.54 1.08 1.64 1.64 0 001.13.41 2 2 0 001.66-.77l.9 1a2.74 2.74 0 01-1.12.91 3.63 3.63 0 01-1.56.34zm-.21-5.64a1.12 1.12 0 00-.88.37 1.92 1.92 0 00-.44 1.05h2.55v-.14a1.29 1.29 0 00-.33-1 1.19 1.19 0 00-.9-.28zM435.07 402.27a4.1 4.1 0 01-.72 2.54 2.31 2.31 0 01-2 1 2.15 2.15 0 01-1.68-.72v3.23h-1.83v-9.51h1.7l.06.68a2.13 2.13 0 011.74-.8 2.31 2.31 0 012 .94 4.22 4.22 0 01.71 2.59zm-1.84-.14a2.68 2.68 0 00-.34-1.48 1.08 1.08 0 00-1-.52 1.21 1.21 0 00-1.19.66v2.82a1.22 1.22 0 001.2.68c.9 0 1.33-.72 1.33-2.16zM440.06 400.49a5.73 5.73 0 00-.66-.05 1.34 1.34 0 00-1.36.71v4.49h-1.83v-6.87h1.73l.05.82a1.7 1.7 0 011.53-.94 1.79 1.79 0 01.57.08zM440.43 402.14a4 4 0 01.4-1.82 2.81 2.81 0 011.13-1.23 3.2 3.2 0 011.71-.44 3.1 3.1 0 012.27.85 3.33 3.33 0 011 2.31v.47a3.61 3.61 0 01-.88 2.53 3.42 3.42 0 01-4.74 0 3.67 3.67 0 01-.89-2.59zm1.84.13a2.59 2.59 0 00.36 1.5 1.33 1.33 0 002.1 0 2.82 2.82 0 00.37-1.64 2.57 2.57 0 00-.37-1.49 1.32 1.32 0 00-2.1 0 2.9 2.9 0 00-.36 1.63zM450.26 397.09v1.68h1.18v1.35h-1.18v3.43a.79.79 0 00.15.54.73.73 0 00.56.17 2.92 2.92 0 00.54-.05v1.39a3.78 3.78 0 01-1.11.17 1.75 1.75 0 01-2-1.95v-3.7h-1v-1.35h1v-1.68zM455.62 405.77a3.36 3.36 0 01-2.46-.93 3.31 3.31 0 01-1-2.47v-.18a4.21 4.21 0 01.4-1.84 2.91 2.91 0 011.14-1.26 3.09 3.09 0 011.67-.44 2.83 2.83 0 012.22.89 3.6 3.6 0 01.81 2.52v.74h-4.38a1.7 1.7 0 00.54 1.08 1.64 1.64 0 001.13.41 2 2 0 001.66-.77l.9 1a2.74 2.74 0 01-1.12.91 3.63 3.63 0 01-1.51.34zm-.21-5.64a1.12 1.12 0 00-.88.37 1.92 1.92 0 00-.44 1.05h2.55v-.14a1.33 1.33 0 00-.33-1 1.19 1.19 0 00-.9-.28zM462.34 404.29a1.19 1.19 0 00.83-.28 1 1 0 00.33-.74h1.72a2.34 2.34 0 01-.38 1.28 2.59 2.59 0 01-1 .9 3.23 3.23 0 01-1.43.32 3 3 0 01-2.33-.94 3.71 3.71 0 01-.85-2.58v-.12a3.65 3.65 0 01.85-2.54 2.93 2.93 0 012.31-.94 2.89 2.89 0 012.07.73 2.6 2.6 0 01.79 1.95h-1.75a1.28 1.28 0 00-.33-.87 1.24 1.24 0 00-1.81.13 2.8 2.8 0 00-.32 1.52v.19a2.72 2.72 0 00.32 1.53 1.11 1.11 0 00.98.46zM468.46 397.09v1.68h1.18v1.35h-1.18v3.43a.79.79 0 00.15.54.73.73 0 00.56.17 2.92 2.92 0 00.54-.05v1.39a3.78 3.78 0 01-1.11.17 1.75 1.75 0 01-2-1.95v-3.7h-1v-1.35h1v-1.68zM470.65 397a.91.91 0 01.27-.68 1.05 1.05 0 01.76-.27 1 1 0 01.74.27 1 1 0 010 1.36 1.16 1.16 0 01-1.49 0 .88.88 0 01-.28-.68zm2 8.64h-1.85v-6.87h1.85zM473.82 402.14a4.12 4.12 0 01.39-1.82 2.89 2.89 0 011.14-1.23 3.2 3.2 0 011.71-.44 3.1 3.1 0 012.27.85 3.33 3.33 0 011 2.31v.47a3.57 3.57 0 01-.89 2.53 3 3 0 01-2.36 1 3.1 3.1 0 01-2.37-.95 3.67 3.67 0 01-.89-2.59zm1.84.13a2.59 2.59 0 00.36 1.5 1.33 1.33 0 002.1 0 2.82 2.82 0 00.37-1.64 2.57 2.57 0 00-.37-1.49 1.32 1.32 0 00-2.1 0 2.9 2.9 0 00-.36 1.63zM483.14 398.77l.06.8a2.38 2.38 0 012-.92 2 2 0 011.62.64 3 3 0 01.55 1.91v4.44h-1.84v-4.4a1.2 1.2 0 00-.25-.85 1.12 1.12 0 00-.85-.26 1.27 1.27 0 00-1.16.66v4.85h-1.83v-6.87zM381 416.38a1.4 1.4 0 01.42-1.06 1.69 1.69 0 012.17 0 1.42 1.42 0 01.43 1v.27a1.36 1.36 0 01-.42 1.05 1.5 1.5 0 01-1.09.4 1.51 1.51 0 01-1.09-.4 1.39 1.39 0 01-.42-1.07zM394.11 419.34h-3.34l-.64 1.9h-2l3.44-9.24h1.76l3.46 9.24h-2zm-2.83-1.55h2.31l-1.16-3.45zM398.9 414.37l.06.8a2.36 2.36 0 012-.92 2 2 0 011.63.64 3 3 0 01.54 1.91v4.44h-1.83v-4.4a1.2 1.2 0 00-.3-.84 1.11 1.11 0 00-.84-.26 1.26 1.26 0 00-1.16.66v4.85h-1.84v-6.87zM406.69 412.69v1.68h1.17v1.35h-1.17v3.43a.85.85 0 00.14.54.75.75 0 00.56.17 2.84 2.84 0 00.54-.05v1.39a3.78 3.78 0 01-1.11.17 1.75 1.75 0 01-2-1.95v-3.7h-1v-1.35h1v-1.68zM408.87 412.6a.88.88 0 01.28-.68 1 1 0 01.75-.27 1 1 0 01.75.27 1 1 0 010 1.36 1.18 1.18 0 01-1.5 0 .92.92 0 01-.28-.68zm1.95 8.64H409v-6.87h1.84zM414.9 419l1.28-4.63h1.91l-2.31 6.87H414l-2.32-6.87h1.92zM418.89 412.6a.91.91 0 01.27-.68 1.19 1.19 0 011.51 0 .91.91 0 01.27.68.88.88 0 01-.28.68 1 1 0 01-.74.27 1 1 0 01-.75-.27.88.88 0 01-.28-.68zm1.95 8.64H419v-6.87h1.84zM426.21 416.09a5.73 5.73 0 00-.66 0 1.35 1.35 0 00-1.37.71v4.49h-1.83v-6.87h1.73l.05.82a1.7 1.7 0 011.53-.94 1.79 1.79 0 01.57.08zM431.2 420.54a2.3 2.3 0 01-1.88.83 2.14 2.14 0 01-1.68-.64 2.69 2.69 0 01-.6-1.86v-4.5h1.84v4.45c0 .71.32 1.07 1 1.07a1.33 1.33 0 001.28-.65v-4.87H433v6.87h-1.73zM438.08 419.34a.6.6 0 00-.33-.53 4.07 4.07 0 00-1.07-.34c-1.63-.35-2.45-1-2.45-2.08a1.88 1.88 0 01.76-1.53 3 3 0 012-.61 3.29 3.29 0 012.09.61 1.93 1.93 0 01.79 1.6H438a.88.88 0 00-.25-.65 1.33 1.33 0 00-1.51-.05.67.67 0 00-.26.54.58.58 0 00.29.49 3.17 3.17 0 001 .32 8.44 8.44 0 011.15.31 1.91 1.91 0 011.46 1.85 1.8 1.8 0 01-.81 1.52 3.46 3.46 0 01-2.08.58 3.51 3.51 0 01-1.53-.31 2.63 2.63 0 01-1.06-.84 2 2 0 01-.38-1.16h1.74a1 1 0 00.37.75 1.44 1.44 0 00.9.26 1.33 1.33 0 00.79-.2.64.64 0 00.26-.53zM448.26 421.24a1 1 0 10-1.91.13 2.46 2.46 0 01-1.68-.59 1.87 1.87 0 01-.66-1.47 1.93 1.93 0 01.81-1.67 4 4 0 012.34-.59h.84v-.4a1.15 1.15 0 00-.24-.76 1 1 0 00-.77-.29 1.1 1.1 0 00-.73.23.77.77 0 00-.26.61h-1.84a1.9 1.9 0 01.37-1.11 2.47 2.47 0 011-.79 3.7 3.7 0 011.51-.29 3 3 0 012 .63 2.25 2.25 0 01.75 1.8v3a3.17 3.17 0 00.27 1.48v.11zm-1.51-1.24a1.49 1.49 0 00.75-.19 1.22 1.22 0 00.5-.48v-1.18h-.68c-.92 0-1.41.32-1.47.95v.11a.71.71 0 00.24.56.93.93 0 00.66.23zM452.94 414.37l.06.8a2.38 2.38 0 012-.92 2 2 0 011.63.64 3 3 0 01.55 1.91v4.44h-1.84v-4.4a1.2 1.2 0 00-.25-.85 1.12 1.12 0 00-.85-.26 1.27 1.27 0 00-1.16.66v4.85h-1.83v-6.87zM458.25 417.76a4.14 4.14 0 01.72-2.56 2.32 2.32 0 012-.95 2.11 2.11 0 011.66.75v-3.51h1.84v9.75h-1.66l-.09-.73a2.15 2.15 0 01-1.76.86 2.33 2.33 0 01-1.95-1 4.24 4.24 0 01-.76-2.61zm1.83.13a2.74 2.74 0 00.34 1.48 1.08 1.08 0 001 .52 1.24 1.24 0 001.2-.72v-2.72a1.22 1.22 0 00-1.19-.72c-.9 0-1.35.72-1.35 2.16zM473.08 421.24a1.91 1.91 0 01-.19-.61 2.22 2.22 0 01-1.73.74 2.43 2.43 0 01-1.67-.59 1.84 1.84 0 01-.67-1.47 1.93 1.93 0 01.81-1.67 4 4 0 012.34-.59h.85v-.4a1.11 1.11 0 00-.25-.76 1 1 0 00-.77-.29 1.1 1.1 0 00-.73.23.77.77 0 00-.26.61H469a1.89 1.89 0 01.36-1.11 2.44 2.44 0 011.05-.79 3.63 3.63 0 011.51-.29 3 3 0 012 .63 2.25 2.25 0 01.75 1.8v3a3.17 3.17 0 00.27 1.48v.11zm-1.52-1.24a1.49 1.49 0 00.75-.19 1.19 1.19 0 00.51-.48v-1.18h-.69c-.92 0-1.41.32-1.46.95v.11a.71.71 0 00.24.56.93.93 0 00.65.23zM477.76 414.37l.05.8a2.38 2.38 0 012-.92 2 2 0 011.62.64 2.94 2.94 0 01.55 1.91v4.44h-1.84v-4.4a1.2 1.2 0 00-.25-.85 1.11 1.11 0 00-.84-.26 1.27 1.27 0 00-1.17.66v4.85H476v-6.87zM485.54 412.69v1.68h1.18v1.35h-1.18v3.43a.79.79 0 00.15.54.73.73 0 00.56.17 2.92 2.92 0 00.54-.05v1.39a3.78 3.78 0 01-1.11.17 1.75 1.75 0 01-2-1.95v-3.7h-1v-1.35h1v-1.68zM487.73 412.6a.91.91 0 01.27-.68 1.05 1.05 0 01.76-.27 1 1 0 01.74.27 1 1 0 010 1.36 1 1 0 01-.74.27 1 1 0 01-.75-.27.88.88 0 01-.28-.68zm1.95 8.64h-1.84v-6.87h1.84zM494.75 418h-3.57v-1.48h3.57zM498 414.37l.06.77a2.38 2.38 0 012-.89 1.84 1.84 0 011.82 1 2.37 2.37 0 012.06-1 2 2 0 011.67.65 3 3 0 01.54 2v4.39h-1.84v-4.39a1.25 1.25 0 00-.31-.9 1 1 0 00-.8-.27 1.16 1.16 0 00-1.15.78v4.73h-1.83v-4.38a1.29 1.29 0 00-.22-.86 1 1 0 00-.8-.26 1.18 1.18 0 00-1.13.64v4.87h-1.83v-6.87zM511.46 421.24a2.21 2.21 0 01-.18-.61 2.24 2.24 0 01-1.74.74 2.43 2.43 0 01-1.67-.59 1.87 1.87 0 01-.66-1.47 1.93 1.93 0 01.81-1.67 4 4 0 012.34-.59h.84v-.4a1.15 1.15 0 00-.24-.76 1 1 0 00-.77-.29 1.08 1.08 0 00-.73.23.74.74 0 00-.26.61h-1.84a1.83 1.83 0 01.37-1.11 2.35 2.35 0 011-.79 3.67 3.67 0 011.51-.29 3 3 0 012 .63 2.27 2.27 0 01.74 1.8v3a3.29 3.29 0 00.28 1.48v.11zM510 420a1.46 1.46 0 00.74-.19 1.19 1.19 0 00.51-.48v-1.18h-.68c-.92 0-1.41.32-1.47.95v.11a.69.69 0 00.25.56.93.93 0 00.65.23zM516.39 421.24h-1.84v-9.75h1.84zM523.87 418.75l.9-4.38h1.77l-1.75 6.87h-1.53l-1.26-4.32-1.3 4.32h-1.53l-1.75-6.87h1.77l.9 4.37 1.25-4.37h1.33zM531.43 421.24a2.21 2.21 0 01-.18-.61 2.24 2.24 0 01-1.74.74 2.43 2.43 0 01-1.67-.59 1.87 1.87 0 01-.66-1.47 1.93 1.93 0 01.81-1.67 4 4 0 012.34-.59h.84v-.4a1.15 1.15 0 00-.24-.76 1 1 0 00-.77-.29 1.08 1.08 0 00-.73.23.74.74 0 00-.26.61h-1.84a1.83 1.83 0 01.37-1.11 2.35 2.35 0 011-.79 3.67 3.67 0 011.51-.29 3 3 0 012 .63 2.27 2.27 0 01.74 1.8v3a3.29 3.29 0 00.28 1.48v.11zm-1.51-1.24a1.46 1.46 0 00.74-.19 1.19 1.19 0 00.51-.48v-1.18h-.68c-.92 0-1.41.32-1.47.95v.11a.71.71 0 00.24.56 1 1 0 00.66.23zM538.28 416.09a5.73 5.73 0 00-.66 0 1.34 1.34 0 00-1.36.71v4.49h-1.84v-6.87h1.73l.06.82a1.67 1.67 0 011.52-.94 1.81 1.81 0 01.58.08zM542.2 421.37a3.39 3.39 0 01-2.46-.93 3.31 3.31 0 01-1-2.47v-.18a4.12 4.12 0 01.41-1.85 2.86 2.86 0 011.13-1.25 3.11 3.11 0 011.67-.44 2.83 2.83 0 012.22.89 3.6 3.6 0 01.81 2.52v.74h-4.38a1.7 1.7 0 00.54 1.08 1.64 1.64 0 001.13.41 2 2 0 001.66-.77l.9 1a2.77 2.77 0 01-1.11.91 3.68 3.68 0 01-1.52.34zm-.21-5.64a1.12 1.12 0 00-.88.37 1.89 1.89 0 00-.44 1h2.56v-.1a1.38 1.38 0 00-.33-.95 1.22 1.22 0 00-.9-.32zM396.75 433.47A4.1 4.1 0 01396 436a2.3 2.3 0 01-1.94 1 2.1 2.1 0 01-1.68-.73v3.24h-1.84V430h1.7l.07.68a2.12 2.12 0 011.73-.8 2.32 2.32 0 012 .94 4.2 4.2 0 01.7 2.59zm-1.83-.14a2.68 2.68 0 00-.34-1.48 1.11 1.11 0 00-1-.52 1.19 1.19 0 00-1.18.66v2.82a1.21 1.21 0 001.19.68q1.33 0 1.33-2.16zM401.75 431.69a5.73 5.73 0 00-.66-.05 1.36 1.36 0 00-1.37.71v4.49h-1.83V430h1.73l.05.82a1.78 1.78 0 012.1-.86zM402.12 433.34a4.12 4.12 0 01.39-1.82 3 3 0 011.13-1.24 3.35 3.35 0 011.72-.43 3.12 3.12 0 012.27.85 3.38 3.38 0 011 2.31v.47a3.56 3.56 0 01-.88 2.53 3.42 3.42 0 01-4.74 0 3.66 3.66 0 01-.88-2.59zm1.83.13a2.52 2.52 0 00.37 1.5 1.21 1.21 0 001.05.52 1.2 1.2 0 001-.51 2.81 2.81 0 00.38-1.64 2.54 2.54 0 00-.38-1.49 1.31 1.31 0 00-2.09 0 2.81 2.81 0 00-.28 1.62zM412 428.28V430h1.17v1.35H412v3.43a.79.79 0 00.15.54.71.71 0 00.55.17 2.76 2.76 0 00.54 0v1.39a3.78 3.78 0 01-1.11.17 1.75 1.75 0 01-2-2v-3.7h-1V430h1v-1.69zM417.31 437a3.36 3.36 0 01-2.46-.93 3.27 3.27 0 01-1-2.47v-.18a4.12 4.12 0 01.4-1.85 2.86 2.86 0 011.13-1.25 3.14 3.14 0 011.67-.44 2.86 2.86 0 012.22.88 3.64 3.64 0 01.81 2.53v.71h-4.37a1.74 1.74 0 00.53 1.08 1.64 1.64 0 001.14.41 2 2 0 001.65-.77l.91 1a2.8 2.8 0 01-1.12.91 3.63 3.63 0 01-1.51.37zm-.21-5.64a1.17 1.17 0 00-.89.36 2 2 0 00-.43 1.06h2.55v-.14a1.38 1.38 0 00-.33-.95 1.19 1.19 0 00-.9-.36zM424 435.49a1.17 1.17 0 00.82-.28.92.92 0 00.33-.74h1.72a2.34 2.34 0 01-.38 1.28 2.62 2.62 0 01-1 .9 3.27 3.27 0 01-1.44.32 3 3 0 01-2.32-.94 3.68 3.68 0 01-.85-2.59v-.12a3.68 3.68 0 01.84-2.53 3 3 0 012.32-.94 2.85 2.85 0 012.06.73 2.56 2.56 0 01.79 1.95h-1.72a1.18 1.18 0 00-.33-.87 1.23 1.23 0 00-1.8.13 2.7 2.7 0 00-.33 1.52v.19a2.65 2.65 0 00.33 1.52 1.11 1.11 0 00.96.47zM430.15 428.28V430h1.17v1.35h-1.17v3.43a.85.85 0 00.14.54.75.75 0 00.56.17 2.76 2.76 0 00.54 0v1.39a3.78 3.78 0 01-1.11.17 1.76 1.76 0 01-2-2v-3.7h-1V430h1v-1.69zM432.33 428.2a.87.87 0 01.28-.68 1 1 0 01.75-.27 1 1 0 01.75.27.9.9 0 01.28.68.92.92 0 01-.28.68 1.18 1.18 0 01-1.5 0 .92.92 0 01-.28-.68zm1.95 8.64h-1.84V430h1.84zM435.51 433.34a4.12 4.12 0 01.39-1.82 3 3 0 011.13-1.24 3.35 3.35 0 011.72-.43 3.12 3.12 0 012.27.85 3.42 3.42 0 011 2.31v.47a3.56 3.56 0 01-.88 2.53 3.42 3.42 0 01-4.74 0 3.66 3.66 0 01-.88-2.59zm1.83.13a2.52 2.52 0 00.37 1.5 1.32 1.32 0 002.09 0 2.81 2.81 0 00.38-1.64 2.54 2.54 0 00-.38-1.49 1.21 1.21 0 00-1.05-.52 1.18 1.18 0 00-1 .52 2.81 2.81 0 00-.41 1.63zM444.83 430l.06.8a2.38 2.38 0 012-.92 2 2 0 011.63.64 3 3 0 01.54 1.91v4.44h-1.86v-4.4a1.2 1.2 0 00-.26-.85 1.1 1.1 0 00-.84-.26 1.26 1.26 0 00-1.16.66v4.85h-1.84V430zM459.63 434.35l.9-4.38h1.77l-1.75 6.87H459l-1.3-4.32-1.31 4.32h-1.53l-1.73-6.84h1.77l.9 4.37 1.26-4.37h1.32zM463.2 428.2a.87.87 0 01.28-.68 1 1 0 01.75-.27 1 1 0 01.75.27.9.9 0 01.28.68.89.89 0 01-.29.68 1 1 0 01-.74.27 1 1 0 01-.75-.27.88.88 0 01-.28-.68zm1.95 8.64h-1.84V430h1.84zM468.86 428.28V430H470v1.35h-1.17v3.43a.79.79 0 00.14.54.75.75 0 00.56.17 2.92 2.92 0 00.54 0v1.39a3.78 3.78 0 01-1.07.12 1.75 1.75 0 01-2-2v-3.7h-1V430h1v-1.69zM472.84 430.72a2.31 2.31 0 011.84-.87c1.49 0 2.24.86 2.26 2.59v4.4h-1.83v-4.36a1.27 1.27 0 00-.26-.87 1.06 1.06 0 00-.84-.28 1.24 1.24 0 00-1.17.62v4.89H471v-9.75h1.83zM478 433.34a4 4 0 01.4-1.82 3 3 0 011.13-1.24 3.3 3.3 0 011.72-.43 3.09 3.09 0 012.26.85 3.38 3.38 0 011 2.31v.47a3.61 3.61 0 01-.88 2.53 3.42 3.42 0 01-4.74 0 3.67 3.67 0 01-.89-2.59zm1.84.13a2.59 2.59 0 00.36 1.5 1.33 1.33 0 002.1 0 2.82 2.82 0 00.37-1.64 2.54 2.54 0 00-.37-1.49 1.32 1.32 0 00-2.1 0 2.9 2.9 0 00-.32 1.63zM489.79 436.14a2.3 2.3 0 01-1.88.83 2.14 2.14 0 01-1.68-.64 2.69 2.69 0 01-.6-1.86V430h1.84v4.45c0 .71.32 1.07 1 1.07a1.33 1.33 0 001.28-.65V430h1.84v6.87h-1.73zM495.15 428.28V430h1.17v1.35h-1.17v3.43a.85.85 0 00.14.54.75.75 0 00.56.17 2.76 2.76 0 00.54 0v1.39a3.78 3.78 0 01-1.11.17 1.76 1.76 0 01-2-2v-3.7h-1V430h1v-1.69zM502.52 436.84h-1.84v-9.75h1.84zM503.74 433.34a4 4 0 01.4-1.82 3 3 0 011.13-1.24 3.3 3.3 0 011.72-.43 3.13 3.13 0 012.27.85 3.42 3.42 0 011 2.31v.47a3.56 3.56 0 01-.88 2.53 3.42 3.42 0 01-4.74 0 3.67 3.67 0 01-.89-2.59zm1.84.13A2.52 2.52 0 00506 435a1.19 1.19 0 001.05.52 1.22 1.22 0 001-.51 2.81 2.81 0 00.38-1.64 2.54 2.54 0 00-.38-1.49 1.21 1.21 0 00-1.05-.52 1.18 1.18 0 00-1 .52 2.81 2.81 0 00-.42 1.59zM514.24 435.49a1.18 1.18 0 00.82-.28 1 1 0 00.33-.74h1.72a2.34 2.34 0 01-.38 1.28 2.62 2.62 0 01-1 .9 3.3 3.3 0 01-1.44.32 3 3 0 01-2.33-.94 3.72 3.72 0 01-.85-2.59v-.12a3.68 3.68 0 01.85-2.53 2.93 2.93 0 012.31-.94 2.89 2.89 0 012.07.73 2.6 2.6 0 01.79 1.95h-1.72a1.26 1.26 0 00-.33-.87 1.24 1.24 0 00-1.81.13 2.8 2.8 0 00-.32 1.52v.19a2.75 2.75 0 00.32 1.52 1.14 1.14 0 00.97.47zM522.14 436.84a1.91 1.91 0 01-.19-.61 2.22 2.22 0 01-1.73.74 2.43 2.43 0 01-1.67-.59 1.88 1.88 0 01-.66-1.47 1.93 1.93 0 01.81-1.67 3.91 3.91 0 012.33-.59h.85v-.4a1.11 1.11 0 00-.25-.76 1 1 0 00-.77-.29 1.05 1.05 0 00-.72.23.73.73 0 00-.27.61H518a1.83 1.83 0 01.37-1.11 2.35 2.35 0 011-.79 3.67 3.67 0 011.51-.29 3 3 0 012 .63 2.25 2.25 0 01.75 1.8v3a3.17 3.17 0 00.27 1.48v.11zm-1.52-1.27a1.49 1.49 0 00.75-.19 1.19 1.19 0 00.51-.48v-1.18h-.69c-.92 0-1.4.32-1.46.95v.11a.73.73 0 00.24.56.93.93 0 00.65.23zM527.06 436.84h-1.84v-9.75h1.84zM394.29 450.54a.6.6 0 00-.29-.54 4.07 4.07 0 00-1.07-.34c-1.64-.35-2.45-1-2.45-2.08a1.88 1.88 0 01.76-1.53 3 3 0 012-.61 3.29 3.29 0 012.09.61 2 2 0 01.79 1.6h-1.84a.88.88 0 00-.28-.65 1.1 1.1 0 00-.8-.26 1.07 1.07 0 00-.71.21.67.67 0 00-.26.54.58.58 0 00.29.49 3.07 3.07 0 001 .32 8.44 8.44 0 011.15.31 1.9 1.9 0 011.45 1.85 1.79 1.79 0 01-.8 1.52 3.46 3.46 0 01-2.08.58 3.59 3.59 0 01-1.54-.31 2.67 2.67 0 01-1-.84 2 2 0 01-.38-1.16H392a1 1 0 00.36.75 1.48 1.48 0 00.9.26 1.35 1.35 0 00.8-.2.64.64 0 00.23-.52zM397.24 443.8a.88.88 0 01.28-.68 1 1 0 01.75-.27 1 1 0 01.75.27.88.88 0 01.28.68.92.92 0 01-.28.68 1.18 1.18 0 01-1.5 0 .92.92 0 01-.28-.68zm1.95 8.64h-1.84v-6.87h1.84zM400.44 449a4 4 0 01.75-2.55 2.43 2.43 0 012-1 2.11 2.11 0 011.75.77l.08-.65h1.66v6.64a2.87 2.87 0 01-.41 1.57 2.6 2.6 0 01-1.15 1 4.06 4.06 0 01-1.74.35 3.63 3.63 0 01-1.47-.31 2.7 2.7 0 01-1.09-.77l.82-1.12a2.14 2.14 0 001.66.77 1.59 1.59 0 001.14-.39 1.47 1.47 0 00.4-1.11v-.37a2.11 2.11 0 01-1.67.72 2.42 2.42 0 01-2-1 4 4 0 01-.76-2.57zm1.83.13a2.54 2.54 0 00.37 1.47 1.21 1.21 0 001 .53 1.27 1.27 0 001.2-.63v-2.9a1.26 1.26 0 00-1.18-.63 1.2 1.2 0 00-1 .54 2.85 2.85 0 00-.39 1.58zM409.81 445.57l.06.8a2.38 2.38 0 012-.92 2 2 0 011.63.64 3 3 0 01.5 1.91v4.44h-1.83V448a1.2 1.2 0 00-.26-.85 1.11 1.11 0 00-.84-.26 1.26 1.26 0 00-1.16.66v4.85h-1.84v-6.87zM419.38 452.44a2.21 2.21 0 01-.18-.61 2.24 2.24 0 01-1.73.74 2.46 2.46 0 01-1.68-.59 1.87 1.87 0 01-.66-1.47 1.93 1.93 0 01.81-1.67 4 4 0 012.34-.59h.84v-.4a1.15 1.15 0 00-.24-.76 1 1 0 00-.77-.28 1.1 1.1 0 00-.73.22.74.74 0 00-.26.61h-1.84a1.83 1.83 0 01.37-1.11 2.41 2.41 0 011-.79 3.67 3.67 0 011.51-.29 3 3 0 012 .63 2.27 2.27 0 01.74 1.8v3a3.29 3.29 0 00.28 1.48v.11zm-1.51-1.27a1.43 1.43 0 00.74-.19 1.19 1.19 0 00.51-.48v-1.18h-.68c-.92 0-1.41.32-1.47.95v.11a.69.69 0 00.25.56.93.93 0 00.65.23zM424.57 443.89v1.68h1.17v1.35h-1.17v3.43a.85.85 0 00.14.54.75.75 0 00.56.17 2.76 2.76 0 00.54-.05v1.39a3.78 3.78 0 01-1.11.17 1.76 1.76 0 01-2-1.95v-3.7h-1v-1.35h1v-1.68zM430.88 451.74a2.3 2.3 0 01-1.88.83 2.16 2.16 0 01-1.69-.64 2.74 2.74 0 01-.59-1.86v-4.5h1.84V450c0 .71.32 1.07 1 1.07a1.33 1.33 0 001.28-.65v-4.87h1.85v6.87h-1.73zM437.9 447.29a5.73 5.73 0 00-.66-.05 1.35 1.35 0 00-1.37.71v4.49H434v-6.87h1.73l.05.82a1.78 1.78 0 012.1-.86zM441.82 452.57a3.37 3.37 0 01-2.46-.93 3.31 3.31 0 01-.95-2.47V449a4.21 4.21 0 01.4-1.84 2.91 2.91 0 011.14-1.26 3.09 3.09 0 011.67-.44 2.83 2.83 0 012.22.89 3.6 3.6 0 01.81 2.52v.74h-4.38a1.7 1.7 0 00.54 1.08 1.64 1.64 0 001.13.41 2 2 0 001.66-.77l.9 1a2.74 2.74 0 01-1.12.91 3.63 3.63 0 01-1.56.33zm-.21-5.64a1.12 1.12 0 00-.88.37 1.92 1.92 0 00-.44 1.05h2.55v-.14a1.33 1.33 0 00-.33-.95 1.19 1.19 0 00-.9-.33zM449.25 449.22h-3.57v-1.48h3.57zM456.92 449.07a4.19 4.19 0 01-.71 2.58 2.34 2.34 0 01-2 .92 2.16 2.16 0 01-1.78-.86l-.08.73h-1.65v-9.75h1.83v3.5a2.08 2.08 0 011.67-.74 2.33 2.33 0 012 .92 4.14 4.14 0 01.72 2.6zm-1.84-.14a2.74 2.74 0 00-.33-1.52 1.12 1.12 0 00-1-.48 1.21 1.21 0 00-1.21.72v2.71a1.23 1.23 0 001.22.73 1.14 1.14 0 001.17-.88 4.54 4.54 0 00.15-1.28zM462 452.44a1.91 1.91 0 01-.19-.61 2.22 2.22 0 01-1.73.74 2.43 2.43 0 01-1.67-.59 1.84 1.84 0 01-.67-1.47 1.93 1.93 0 01.81-1.67 4 4 0 012.34-.59h.85v-.4a1.16 1.16 0 00-.25-.76 1 1 0 00-.77-.28 1.1 1.1 0 00-.73.22.77.77 0 00-.26.61h-1.83a1.89 1.89 0 01.36-1.11 2.47 2.47 0 011-.79 3.71 3.71 0 011.52-.29 3 3 0 012 .63 2.25 2.25 0 01.75 1.8v3a3.17 3.17 0 00.27 1.48v.11zm-1.52-1.27a1.49 1.49 0 00.75-.19 1.19 1.19 0 00.51-.48v-1.18h-.69c-.92 0-1.41.32-1.47.95v.11a.71.71 0 00.24.56.93.93 0 00.69.23zM468.74 450.54a.59.59 0 00-.34-.53 4.07 4.07 0 00-1.07-.34c-1.63-.35-2.45-1-2.45-2.08a1.91 1.91 0 01.76-1.53 3.07 3.07 0 012-.61 3.31 3.31 0 012.09.61 2 2 0 01.78 1.6h-1.83a.89.89 0 00-.26-.65 1.07 1.07 0 00-.79-.26 1.1 1.1 0 00-.72.21.66.66 0 00-.25.54.56.56 0 00.29.49 3 3 0 001 .32 8.62 8.62 0 011.16.31 1.9 1.9 0 011.45 1.85 1.8 1.8 0 01-.81 1.52 3.44 3.44 0 01-2.08.58 3.54 3.54 0 01-1.53-.31 2.53 2.53 0 01-1.05-.84 1.94 1.94 0 01-.38-1.16h1.74a.94.94 0 00.36.75 1.44 1.44 0 00.9.26 1.37 1.37 0 00.8-.2.64.64 0 00.23-.53zM474.86 452.57a3.37 3.37 0 01-2.46-.93 3.31 3.31 0 01-.95-2.47V449a4.21 4.21 0 01.4-1.84 2.91 2.91 0 011.14-1.26 3.09 3.09 0 011.67-.44 2.83 2.83 0 012.22.89 3.6 3.6 0 01.81 2.52v.74h-4.38a1.7 1.7 0 00.54 1.08 1.64 1.64 0 001.13.41 2 2 0 001.66-.77l.9 1a2.74 2.74 0 01-1.12.91 3.63 3.63 0 01-1.56.33zm-.21-5.64a1.12 1.12 0 00-.88.37 1.92 1.92 0 00-.44 1.05h2.55v-.14a1.29 1.29 0 00-.33-.95 1.19 1.19 0 00-.9-.33zM478.44 449a4.14 4.14 0 01.72-2.56 2.32 2.32 0 012-.95 2.11 2.11 0 011.66.75v-3.51h1.84v9.75H483l-.09-.73a2.15 2.15 0 01-1.76.86 2.33 2.33 0 01-1.95-1 4.3 4.3 0 01-.76-2.61zm1.84.13a2.75 2.75 0 00.33 1.48 1.09 1.09 0 001 .52 1.22 1.22 0 001.2-.72v-2.72a1.21 1.21 0 00-1.19-.72q-1.34-.04-1.34 2.12zM489 449a4.14 4.14 0 01.72-2.56 2.34 2.34 0 012-.95 2.09 2.09 0 011.65.75v-3.51h1.84v9.75h-1.65l-.09-.73a2.18 2.18 0 01-1.77.86 2.32 2.32 0 01-1.94-1A4.24 4.24 0 01489 449zm1.84.13a2.75 2.75 0 00.33 1.48 1.09 1.09 0 001 .52 1.22 1.22 0 001.2-.72v-2.72a1.2 1.2 0 00-1.18-.72c-.91-.04-1.35.68-1.35 2.12zM499.78 452.57a3.36 3.36 0 01-2.46-.93 3.27 3.27 0 01-.95-2.47V449a4.08 4.08 0 01.4-1.84 2.83 2.83 0 011.13-1.26 3.14 3.14 0 011.67-.44 2.83 2.83 0 012.22.89 3.6 3.6 0 01.81 2.52v.74h-4.37a1.69 1.69 0 00.53 1.08 1.64 1.64 0 001.14.41 2 2 0 001.65-.77l.91 1a2.8 2.8 0 01-1.12.91 3.63 3.63 0 01-1.56.33zm-.21-5.64a1.14 1.14 0 00-.89.37 1.84 1.84 0 00-.43 1.05h2.55v-.14a1.38 1.38 0 00-.33-.95 1.19 1.19 0 00-.9-.33zM505.84 443.89v1.68H507v1.35h-1.17v3.43a.85.85 0 00.14.54.75.75 0 00.56.17 2.76 2.76 0 00.54-.05v1.39a3.78 3.78 0 01-1.11.17 1.76 1.76 0 01-2-1.95v-3.7h-1v-1.35h1v-1.68zM511.2 452.57a3.36 3.36 0 01-2.46-.93 3.27 3.27 0 01-.95-2.47V449a4.08 4.08 0 01.4-1.84 2.83 2.83 0 011.13-1.26 3.14 3.14 0 011.67-.44 2.83 2.83 0 012.22.89 3.6 3.6 0 01.81 2.52v.74h-4.37a1.69 1.69 0 00.53 1.08 1.64 1.64 0 001.14.41 2 2 0 001.65-.77l.91 1a2.8 2.8 0 01-1.12.91 3.63 3.63 0 01-1.56.33zm-.21-5.64a1.14 1.14 0 00-.89.37 1.84 1.84 0 00-.43 1.05h2.55v-.14a1.38 1.38 0 00-.33-.95 1.19 1.19 0 00-.89-.33zM517.92 451.09a1.17 1.17 0 00.82-.28 1 1 0 00.33-.74h1.72a2.34 2.34 0 01-.38 1.28 2.62 2.62 0 01-1 .9 3.3 3.3 0 01-1.44.32 3 3 0 01-2.32-.94 3.67 3.67 0 01-.85-2.58v-.12a3.69 3.69 0 01.84-2.54 3 3 0 012.32-.94 2.87 2.87 0 012.06.73 2.6 2.6 0 01.79 1.95h-1.72a1.26 1.26 0 00-.33-.87 1.23 1.23 0 00-1.8.13 2.7 2.7 0 00-.33 1.52v.19a2.81 2.81 0 00.32 1.53 1.13 1.13 0 00.97.46zM524 443.89v1.68h1.17v1.35H524v3.43a.79.79 0 00.14.54.75.75 0 00.56.17 2.92 2.92 0 00.54-.05v1.39a3.78 3.78 0 01-1.11.17 1.75 1.75 0 01-2-1.95v-3.7h-1v-1.35h1v-1.68zM526.22 443.8a.88.88 0 01.28-.68 1 1 0 01.75-.27 1 1 0 01.75.27.92.92 0 01.28.68.89.89 0 01-.29.68 1 1 0 01-.74.27 1 1 0 01-.75-.27.88.88 0 01-.28-.68zm1.95 8.64h-1.84v-6.87h1.84zM529.39 448.94a4 4 0 01.4-1.82 2.87 2.87 0 011.13-1.23 3.24 3.24 0 011.72-.44 3.13 3.13 0 012.27.85 3.42 3.42 0 011 2.31v.47a3.56 3.56 0 01-.88 2.53 3.42 3.42 0 01-4.74 0 3.67 3.67 0 01-.89-2.59zm1.84.13a2.52 2.52 0 00.37 1.5 1.19 1.19 0 001 .52 1.22 1.22 0 001-.51 2.81 2.81 0 00.38-1.64 2.56 2.56 0 00-.38-1.49 1.21 1.21 0 00-1.05-.52 1.18 1.18 0 00-1 .52 2.81 2.81 0 00-.32 1.62zM538.72 445.57l.06.8a2.38 2.38 0 012-.92 2 2 0 011.63.64 3 3 0 01.54 1.91v4.44h-1.83V448a1.2 1.2 0 00-.26-.85 1.11 1.11 0 00-.84-.26 1.25 1.25 0 00-1.16.66v4.85H537v-6.87zM381 463.18a1.4 1.4 0 01.42-1.06 1.69 1.69 0 012.17 0 1.42 1.42 0 01.43 1v.27a1.36 1.36 0 01-.42 1.05 1.5 1.5 0 01-1.09.4 1.51 1.51 0 01-1.09-.4 1.39 1.39 0 01-.42-1.07zM388.89 468v-9.2h2.84a4.28 4.28 0 012.18.55 3.76 3.76 0 011.5 1.56 4.79 4.79 0 01.54 2.3v.43a4.75 4.75 0 01-.53 2.29 3.77 3.77 0 01-1.49 1.55 4.29 4.29 0 01-2.18.56zm1.9-7.7v6.17h.92a2.05 2.05 0 001.71-.73 3.25 3.25 0 00.6-2.09v-.49a3.34 3.34 0 00-.58-2.13 2.05 2.05 0 00-1.71-.73zM400.38 468.17a3.36 3.36 0 01-2.46-.93 3.31 3.31 0 01-.95-2.47v-.18a4.12 4.12 0 01.4-1.85 2.92 2.92 0 011.13-1.25 3.14 3.14 0 011.67-.44 2.83 2.83 0 012.22.89 3.6 3.6 0 01.81 2.52v.74h-4.37a1.7 1.7 0 00.54 1.08 1.6 1.6 0 001.13.41 2 2 0 001.66-.77l.9 1a2.8 2.8 0 01-1.12.91 3.63 3.63 0 01-1.56.34zm-.21-5.64a1.14 1.14 0 00-.89.37 1.88 1.88 0 00-.43 1.05h2.55v-.14a1.38 1.38 0 00-.33-.95 1.19 1.19 0 00-.9-.33zM406.73 465.8l1.28-4.63h1.91l-2.31 6.83h-1.75l-2.32-6.87h1.92zM410.72 459.4a.91.91 0 01.27-.68 1.19 1.19 0 011.51 0 .91.91 0 01.27.68.88.88 0 01-.28.68 1 1 0 01-.74.27 1 1 0 01-.75-.27.88.88 0 01-.28-.68zm1.95 8.64h-1.84v-6.87h1.84zM417 466.69a1.19 1.19 0 00.83-.28 1 1 0 00.33-.74h1.72a2.34 2.34 0 01-.38 1.28 2.59 2.59 0 01-1 .9 3.23 3.23 0 01-1.43.32 3 3 0 01-2.33-.94 3.71 3.71 0 01-.85-2.58v-.13a3.64 3.64 0 01.85-2.53 2.93 2.93 0 012.31-.94 2.89 2.89 0 012.07.73 2.6 2.6 0 01.79 2h-1.72a1.26 1.26 0 00-.33-.87 1.24 1.24 0 00-1.81.13 2.8 2.8 0 00-.32 1.52v.19a2.72 2.72 0 00.32 1.53 1.14 1.14 0 00.95.41zM424.12 468.17a3.36 3.36 0 01-2.46-.93 3.31 3.31 0 01-1-2.47v-.18a4.12 4.12 0 01.4-1.85 2.92 2.92 0 011.13-1.25 3.15 3.15 0 011.68-.44 2.82 2.82 0 012.21.89 3.6 3.6 0 01.81 2.52v.74h-4.37a1.7 1.7 0 00.54 1.08 1.6 1.6 0 001.13.41 2 2 0 001.66-.77l.9 1a2.8 2.8 0 01-1.12.91 3.63 3.63 0 01-1.51.34zm-.21-5.64a1.14 1.14 0 00-.89.37 1.88 1.88 0 00-.43 1.05h2.55v-.14a1.38 1.38 0 00-.33-.95 1.19 1.19 0 00-.9-.33zM434.08 466.69a1.17 1.17 0 00.82-.28 1 1 0 00.33-.74H437a2.34 2.34 0 01-.38 1.28 2.62 2.62 0 01-1 .9 3.3 3.3 0 01-1.44.32 3 3 0 01-2.32-.94 3.67 3.67 0 01-.85-2.58v-.13a3.68 3.68 0 01.84-2.53 2.94 2.94 0 012.32-.94 2.87 2.87 0 012.06.73 2.6 2.6 0 01.79 2h-1.72a1.26 1.26 0 00-.33-.87 1.11 1.11 0 00-.84-.33 1.09 1.09 0 00-1 .46 2.7 2.7 0 00-.33 1.52v.19a2.81 2.81 0 00.32 1.53 1.15 1.15 0 00.96.41zM437.71 464.54a4.12 4.12 0 01.4-1.82 3 3 0 011.13-1.24 3.33 3.33 0 011.72-.43 3.12 3.12 0 012.27.85 3.42 3.42 0 011 2.31v.47a3.56 3.56 0 01-.88 2.53 3.42 3.42 0 01-4.74 0 3.67 3.67 0 01-.89-2.59zm1.84.13a2.52 2.52 0 00.37 1.5 1.19 1.19 0 001.05.52 1.21 1.21 0 001-.51 2.81 2.81 0 00.38-1.64 2.54 2.54 0 00-.38-1.49 1.21 1.21 0 00-1.05-.52 1.18 1.18 0 00-1 .52 2.81 2.81 0 00-.37 1.62zM447 461.17l.06.8a2.38 2.38 0 012-.92 2 2 0 011.63.64 3 3 0 01.54 1.91v4.4h-1.83v-4.4a1.2 1.2 0 00-.26-.85 1.11 1.11 0 00-.84-.26 1.26 1.26 0 00-1.16.66V468h-1.84v-6.87zM454.83 459.48v1.69H456v1.35h-1.17V466a.85.85 0 00.14.54.75.75 0 00.56.17 2.76 2.76 0 00.54-.05V468a3.78 3.78 0 01-1.11.17 1.76 1.76 0 01-2-1.95v-3.7h-1v-1.35h1v-1.69zM460.88 462.89a5.73 5.73 0 00-.66-.05 1.35 1.35 0 00-1.36.71V468H457v-6.87h1.73l.05.82a1.7 1.7 0 011.53-.94 1.79 1.79 0 01.57.08zM461.25 464.54a4 4 0 01.4-1.82 3 3 0 011.13-1.24 3.3 3.3 0 011.72-.43 3.09 3.09 0 012.26.85 3.38 3.38 0 011 2.31v.47a3.61 3.61 0 01-.88 2.53 3.42 3.42 0 01-4.74 0 3.67 3.67 0 01-.89-2.59zm1.84.13a2.59 2.59 0 00.36 1.5 1.33 1.33 0 002.1 0 2.82 2.82 0 00.37-1.64 2.54 2.54 0 00-.37-1.49 1.32 1.32 0 00-2.1 0 2.9 2.9 0 00-.36 1.63zM470.82 468H469v-9.75h1.84z"
              />
              <text
                className="prefix__cls-49"
                transform="translate(380.15 498.55)"
              >
                {"N"}
                <tspan className="prefix__cls-50" x={9.18} y={0}>
                  {"O"}
                </tspan>
                <tspan x={17.61} y={0} letterSpacing="-.06em">
                  {"T"}
                </tspan>
                <tspan x={24.9} y={0}>
                  {"A"}
                </tspan>
                <tspan className="prefix__cls-52" x={33.64} y={0}>
                  {"R"}
                </tspan>
                <tspan x={41.63} y={0}>
                  {"Y ("}
                </tspan>
                <tspan x={57.47} y={0} letterSpacing="-.09em">
                  {"P"}
                </tspan>
                <tspan x={64.73} y={0} letterSpacing="-.07em">
                  {"A"}
                </tspan>
                <tspan x={72.52} y={0} letterSpacing="-.07em">
                  {"Y"}
                </tspan>
                <tspan x={79.59} y={0} letterSpacing={0}>
                  {"-AS-"}
                </tspan>
                <tspan x={106.41} y={0} letterSpacing="-.01em">
                  {"Y"}
                </tspan>
                <tspan x={114.26} y={0} letterSpacing={0}>
                  {"OU-GO)"}
                </tspan>
              </text>
              <path
                className="prefix__cls-59"
                d="M287.89 534.6l2.56 7.22 2.55-7.22h2.69v9.95h-2.05v-2.72l.2-4.7-2.69 7.42h-1.4l-2.68-7.41.2 4.69v2.72h-2.05v-9.95zM303.22 542.5h-3.6l-.68 2h-2.18l3.7-9.95h1.9l3.73 9.95h-2.18zm-3.05-1.66h2.49l-1.25-3.73zM315.11 544.55h-2.05l-4-6.55v6.55H307v-9.95h2.05l4 6.56v-6.56h2zM322.64 542.5h-3.59l-.69 2h-2.18l3.71-9.95h1.9l3.73 9.95h-2.19zm-3-1.66h2.49l-1.25-3.73zM334.18 543.29a3.54 3.54 0 01-1.57 1 6.62 6.62 0 01-2.24.37 4.42 4.42 0 01-2.27-.57 3.71 3.71 0 01-1.5-1.63 5.72 5.72 0 01-.54-2.53v-.67a6 6 0 01.5-2.58A3.66 3.66 0 01328 535a4.76 4.76 0 015 .26 3.66 3.66 0 011.19 2.46h-2a1.71 1.71 0 00-1.89-1.65 1.85 1.85 0 00-1.6.79 4.12 4.12 0 00-.55 2.34v.63a4 4 0 00.59 2.37 2.06 2.06 0 001.75.8 2.28 2.28 0 001.65-.49v-1.72h-1.87v-1.51h3.92zM341.83 540.22h-3.94v2.68h4.62v1.65h-6.67v-9.95h6.66v1.66h-4.61v2.37h3.94zM346.39 534.6l2.56 7.22 2.54-7.22h2.7v9.95h-2.06v-2.72l.2-4.7-2.68 7.42h-1.41l-2.68-7.41.2 4.69v2.72h-2.05v-9.95zM362 540.22h-4v2.68h4.62v1.65H356v-9.95h6.65v1.66H358v2.37h4zM371.94 544.55h-2.05l-4-6.55v6.55h-2v-9.95h2l4 6.56v-6.56h2zM381 536.26h-3v8.29h-2.05v-8.29h-3v-1.66H381z"
              />
              <path
                className="prefix__cls-48"
                d="M285.18 570.89a1.39 1.39 0 01.42-1.06 1.49 1.49 0 011.08-.4 1.52 1.52 0 011.09.39 1.39 1.39 0 01.42 1v.27a1.37 1.37 0 01-.41 1 1.54 1.54 0 01-1.09.4 1.51 1.51 0 01-1.09-.4 1.39 1.39 0 01-.42-1.07zM300.37 574.58a3.36 3.36 0 01-1.45 1 6.32 6.32 0 01-2.09.34 4.09 4.09 0 01-2.1-.53 3.5 3.5 0 01-1.4-1.52 5.31 5.31 0 01-.5-2.34v-.63a5.66 5.66 0 01.46-2.39 3.37 3.37 0 011.35-1.55 3.86 3.86 0 012.06-.54 3.82 3.82 0 012.57.79 3.35 3.35 0 011.1 2.28h-1.85a1.85 1.85 0 00-.57-1.16 1.77 1.77 0 00-1.19-.37 1.68 1.68 0 00-1.48.73 3.85 3.85 0 00-.52 2.17v.59a3.61 3.61 0 00.56 2.19 1.86 1.86 0 001.61.75 2.07 2.07 0 001.53-.46v-1.63h-1.73v-1.41h3.64zM305.65 570.6a5.73 5.73 0 00-.66-.05 1.34 1.34 0 00-1.36.71v4.49h-1.84v-6.87h1.73l.05.82a1.71 1.71 0 011.53-1 1.81 1.81 0 01.58.09zM306 572.25a4.09 4.09 0 01.39-1.82 2.89 2.89 0 011.13-1.24 3.36 3.36 0 011.72-.44 3.12 3.12 0 012.27.86 3.38 3.38 0 011 2.31v.47a3.56 3.56 0 01-.88 2.53 3.41 3.41 0 01-4.74 0 3.63 3.63 0 01-.88-2.59zm1.83.13a2.61 2.61 0 00.37 1.5 1.21 1.21 0 001 .52 1.23 1.23 0 001.05-.51 2.92 2.92 0 00.37-1.64 2.62 2.62 0 00-.37-1.49 1.24 1.24 0 00-1.06-.53 1.2 1.2 0 00-1 .53 2.89 2.89 0 00-.34 1.62zM317.77 575.05a2.32 2.32 0 01-1.88.83 2.16 2.16 0 01-1.69-.64 2.74 2.74 0 01-.59-1.86v-4.5h1.83v4.44c0 .72.33 1.08 1 1.08a1.33 1.33 0 001.28-.65v-4.87h1.84v6.87h-1.72zM327.11 572.38a4.1 4.1 0 01-.72 2.54 2.3 2.3 0 01-1.94 1 2.13 2.13 0 01-1.69-.73v3.24h-1.83v-9.51h1.7l.06.67a2.18 2.18 0 011.74-.8 2.35 2.35 0 012 .94 4.24 4.24 0 01.7 2.59zm-1.83-.14a2.74 2.74 0 00-.34-1.48 1.12 1.12 0 00-1-.53 1.21 1.21 0 00-1.19.67v2.82a1.24 1.24 0 001.2.68q1.33 0 1.33-2.16zM333.21 568.88l.05.77a2.42 2.42 0 012-.9 1.83 1.83 0 011.82 1 2.35 2.35 0 012.06-1 2 2 0 011.66.66 2.93 2.93 0 01.55 2v4.39h-1.84v-4.39a1.34 1.34 0 00-.23-.86 1 1 0 00-.81-.27 1.15 1.15 0 00-1.14.79v4.73h-1.84v-4.38a1.29 1.29 0 00-.23-.87 1 1 0 00-.8-.27 1.19 1.19 0 00-1.13.65v4.87h-1.84v-6.87zM346.72 575.75a2 2 0 01-.19-.62 2.2 2.2 0 01-1.73.75 2.43 2.43 0 01-1.67-.59 1.88 1.88 0 01-.66-1.47 2 2 0 01.81-1.68 4 4 0 012.33-.59h.85v-.39a1.09 1.09 0 00-.25-.76 1 1 0 00-.77-.29 1.05 1.05 0 00-.72.23.73.73 0 00-.27.61h-1.83a1.83 1.83 0 01.37-1.11 2.44 2.44 0 011-.8 3.84 3.84 0 011.51-.29 3 3 0 012 .64 2.25 2.25 0 01.75 1.8v3a3.33 3.33 0 00.27 1.48v.11zm-1.52-1.28a1.6 1.6 0 00.75-.18 1.19 1.19 0 00.51-.48v-1.18h-.69c-.92 0-1.4.31-1.46 1v.11a.73.73 0 00.24.56.92.92 0 00.65.17zM351.4 568.88l.05.8a2.41 2.41 0 012-.93 2 2 0 011.62.65 2.94 2.94 0 01.55 1.91v4.44h-1.83v-4.4a1.18 1.18 0 00-.26-.85 1.11 1.11 0 00-.84-.27 1.24 1.24 0 00-1.16.67v4.85h-1.84v-6.87zM361 575.75a2 2 0 01-.19-.62 2.2 2.2 0 01-1.73.75 2.43 2.43 0 01-1.67-.59 1.88 1.88 0 01-.66-1.47 2 2 0 01.81-1.68 4 4 0 012.33-.59h.85v-.39a1.09 1.09 0 00-.25-.76 1 1 0 00-.77-.29 1.05 1.05 0 00-.72.23.73.73 0 00-.27.61h-1.83a1.83 1.83 0 01.37-1.11 2.44 2.44 0 011-.8 3.84 3.84 0 011.51-.29 3 3 0 012 .64 2.25 2.25 0 01.75 1.8v3a3.33 3.33 0 00.27 1.48v.11zm-1.52-1.28a1.6 1.6 0 00.75-.18 1.19 1.19 0 00.51-.48v-1.18H360c-.92 0-1.4.31-1.46 1v.11a.73.73 0 00.24.56.92.92 0 00.67.17zM363.69 572.27a4 4 0 01.76-2.55 2.43 2.43 0 012-1 2.13 2.13 0 011.76.78l.08-.65H370v6.64a3 3 0 01-.41 1.57 2.72 2.72 0 01-1.15 1 4.13 4.13 0 01-1.74.34 3.79 3.79 0 01-1.47-.3 2.7 2.7 0 01-1.09-.77l.82-1.12a2.14 2.14 0 001.66.77 1.57 1.57 0 001.13-.39 1.47 1.47 0 00.41-1.11v-.37a2.11 2.11 0 01-1.67.72 2.45 2.45 0 01-2-1 4 4 0 01-.77-2.57zm1.84.13a2.54 2.54 0 00.37 1.47 1.2 1.2 0 001 .53 1.27 1.27 0 001.2-.63v-2.9a1.26 1.26 0 00-1.19-.64 1.19 1.19 0 00-1 .55 2.77 2.77 0 00-.38 1.62zM374.54 575.88a3.36 3.36 0 01-2.46-.93 3.31 3.31 0 01-.95-2.47v-.18a4.26 4.26 0 01.4-1.85 2.94 2.94 0 011.14-1.25 3.09 3.09 0 011.67-.45 2.86 2.86 0 012.22.89 3.63 3.63 0 01.81 2.52v.75H373a1.7 1.7 0 00.54 1.08 1.62 1.62 0 001.13.41 2 2 0 001.66-.77l.9 1a2.8 2.8 0 01-1.12.91 3.63 3.63 0 01-1.57.34zm-.21-5.65a1.15 1.15 0 00-.88.37 1.88 1.88 0 00-.44 1.06h2.55v-.14a1.38 1.38 0 00-.33-.95 1.19 1.19 0 00-.9-.34zM380.13 568.88l.06.77a2.39 2.39 0 012-.9 1.83 1.83 0 011.82 1 2.35 2.35 0 012.06-1 2 2 0 011.67.66 3 3 0 01.54 2v4.39h-1.84v-4.39a1.28 1.28 0 00-.23-.86 1 1 0 00-.8-.27 1.17 1.17 0 00-1.15.79v4.73h-1.83v-4.38a1.29 1.29 0 00-.24-.87 1 1 0 00-.8-.27 1.19 1.19 0 00-1.13.65v4.87h-1.83v-6.87zM392.82 575.88a3.37 3.37 0 01-2.46-.93 3.31 3.31 0 01-.95-2.47v-.18a4.26 4.26 0 01.4-1.85 2.94 2.94 0 011.19-1.25 3.12 3.12 0 011.67-.45 2.86 2.86 0 012.22.89 3.63 3.63 0 01.81 2.52v.75h-4.38a1.7 1.7 0 00.54 1.08 1.64 1.64 0 001.13.41 2 2 0 001.66-.77l.9 1a2.74 2.74 0 01-1.12.91 3.63 3.63 0 01-1.61.34zm-.21-5.65a1.15 1.15 0 00-.88.37 2 2 0 00-.44 1.06h2.55v-.14a1.29 1.29 0 00-.33-.95 1.19 1.19 0 00-.9-.34zM398.38 568.88l.05.8a2.41 2.41 0 012-.93 2 2 0 011.62.65 2.94 2.94 0 01.55 1.91v4.44h-1.84v-4.4a1.18 1.18 0 00-.25-.85 1.11 1.11 0 00-.84-.27 1.26 1.26 0 00-1.17.67v4.85h-1.83v-6.87zM406.16 567.19v1.69h1.18v1.35h-1.18v3.43a.79.79 0 00.15.54.73.73 0 00.56.17 2.92 2.92 0 00.54 0v1.39a3.78 3.78 0 01-1.11.17 1.75 1.75 0 01-2-2v-3.7h-1v-1.35h1v-1.69zM411.31 572.25a4 4 0 01.4-1.82 2.89 2.89 0 011.13-1.24 3.31 3.31 0 011.72-.44 3.14 3.14 0 012.27.86 3.42 3.42 0 011 2.31v.47a3.61 3.61 0 01-.88 2.53 3.41 3.41 0 01-4.74 0 3.64 3.64 0 01-.89-2.59zm1.84.13a2.54 2.54 0 00.37 1.5 1.19 1.19 0 001.05.52 1.22 1.22 0 001-.51 2.84 2.84 0 00.37-1.64 2.54 2.54 0 00-.37-1.49 1.22 1.22 0 00-1.05-.53 1.19 1.19 0 00-1 .53 2.81 2.81 0 00-.37 1.62zM419.45 575.75v-5.52h-1v-1.35h1v-.58a2.4 2.4 0 01.66-1.8 2.62 2.62 0 011.86-.63 4.38 4.38 0 01.93.12v1.41a3 3 0 00-.56 0c-.69 0-1 .32-1 1v.55h1.37v1.35h-1.37v5.52zM432.82 573.26l.9-4.38h1.77l-1.75 6.87h-1.54l-1.3-4.32-1.3 4.32h-1.53l-1.75-6.87h1.77l.89 4.37 1.26-4.37h1.33zM436.11 572.25a4 4 0 01.4-1.82 2.89 2.89 0 011.13-1.24 3.33 3.33 0 011.72-.44 3.14 3.14 0 012.27.86 3.42 3.42 0 011 2.31v.47a3.56 3.56 0 01-.88 2.53 3.41 3.41 0 01-4.74 0 3.64 3.64 0 01-.89-2.59zm1.84.13a2.54 2.54 0 00.37 1.5 1.19 1.19 0 001.05.52 1.22 1.22 0 001-.51 2.83 2.83 0 00.38-1.64 2.54 2.54 0 00-.38-1.49 1.22 1.22 0 00-1.05-.53 1.19 1.19 0 00-1 .53 2.81 2.81 0 00-.32 1.62zM447.61 570.6a5.73 5.73 0 00-.66-.05 1.35 1.35 0 00-1.37.71v4.49h-1.83v-6.87h1.73v.82a1.74 1.74 0 012.1-.86zM451 573l-.66.66v2.09h-1.84V566h1.84v5.4l.35-.45 1.76-2.07h2.2l-2.48 2.86 2.7 4h-2.11zM457.37 575.75h-1.84V566h1.84zM458.6 572.25a4.09 4.09 0 01.39-1.82 2.89 2.89 0 011.13-1.24 3.36 3.36 0 011.72-.44 3.12 3.12 0 012.27.86 3.42 3.42 0 011 2.31v.47a3.56 3.56 0 01-.88 2.53 3.41 3.41 0 01-4.74 0 3.63 3.63 0 01-.88-2.59zm1.83.13a2.54 2.54 0 00.37 1.5 1.32 1.32 0 002.09 0 2.83 2.83 0 00.38-1.64 2.54 2.54 0 00-.38-1.49 1.22 1.22 0 00-1.05-.53 1.19 1.19 0 00-1 .53 2.81 2.81 0 00-.41 1.63zM470.21 575.75a2.29 2.29 0 01-.18-.62 2.2 2.2 0 01-1.73.75 2.46 2.46 0 01-1.68-.59 1.88 1.88 0 01-.66-1.47 2 2 0 01.81-1.68 4 4 0 012.34-.59h.89v-.39a1.14 1.14 0 00-.24-.76 1 1 0 00-.77-.29 1.1 1.1 0 00-.73.23.73.73 0 00-.26.61h-1.84a1.9 1.9 0 01.37-1.11 2.5 2.5 0 011-.8 3.84 3.84 0 011.51-.29 3 3 0 012 .64 2.24 2.24 0 01.74 1.8v3a3.32 3.32 0 00.28 1.48v.11zm-1.51-1.28a1.53 1.53 0 00.74-.18 1.19 1.19 0 00.51-.48v-1.18h-.68c-.92 0-1.41.31-1.47 1v.11a.73.73 0 00.25.56.92.92 0 00.65.17zM472.92 572.27a4.12 4.12 0 01.72-2.56 2.32 2.32 0 012-1 2.11 2.11 0 011.66.75V566h1.83v9.75h-1.65l-.09-.73a2.17 2.17 0 01-1.76.86 2.33 2.33 0 01-2-1 4.24 4.24 0 01-.71-2.61zm1.83.13a2.66 2.66 0 00.34 1.48 1.08 1.08 0 001 .52 1.25 1.25 0 001.21-.72V571a1.22 1.22 0 00-1.19-.72c-.92-.05-1.36.72-1.36 2.12zM484.25 573.85a.59.59 0 00-.34-.53 3.64 3.64 0 00-1.06-.34c-1.64-.35-2.45-1-2.45-2.09a1.9 1.9 0 01.75-1.52 3.07 3.07 0 012-.62 3.29 3.29 0 012.09.62A1.94 1.94 0 01486 571h-1.83a.89.89 0 00-.26-.65 1.06 1.06 0 00-.79-.26 1.1 1.1 0 00-.72.21.66.66 0 00-.25.53.58.58 0 00.29.5 3.09 3.09 0 001 .32 7.06 7.06 0 011.16.31 1.89 1.89 0 011.45 1.85 1.81 1.81 0 01-.8 1.52 3.56 3.56 0 01-2.09.58 3.73 3.73 0 01-1.53-.31 2.55 2.55 0 01-1.05-.85 2 2 0 01-.38-1.15h1.74a1 1 0 00.36.75 1.46 1.46 0 00.9.26 1.37 1.37 0 00.8-.2.64.64 0 00.25-.56zM285.18 586.49a1.39 1.39 0 01.42-1.06 1.49 1.49 0 011.08-.4 1.52 1.52 0 011.09.39 1.39 1.39 0 01.42 1v.27a1.39 1.39 0 01-.41 1 1.54 1.54 0 01-1.09.4 1.56 1.56 0 01-1.09-.4 1.39 1.39 0 01-.42-1.07zM300.31 588.27a3.26 3.26 0 01-1.1 2.35 3.86 3.86 0 01-2.62.86 3.47 3.47 0 01-2.79-1.2 4.9 4.9 0 01-1-3.28v-.57a5.45 5.45 0 01.47-2.35 3.49 3.49 0 011.34-1.56 4.19 4.19 0 014.6.32 3.46 3.46 0 011.13 2.4h-1.9a1.9 1.9 0 00-.5-1.29 1.83 1.83 0 00-1.3-.41 1.64 1.64 0 00-1.43.68 3.82 3.82 0 00-.48 2.12v.7a4.12 4.12 0 00.45 2.19 1.59 1.59 0 001.43.69 1.57 1.57 0 001.82-1.65zM304.6 591.48a3.39 3.39 0 01-2.46-.93 3.31 3.31 0 01-.95-2.47v-.18a4.26 4.26 0 01.4-1.85 2.94 2.94 0 011.14-1.25 3.12 3.12 0 011.67-.45 2.86 2.86 0 012.22.89 3.63 3.63 0 01.81 2.52v.75h-4.38a1.7 1.7 0 00.54 1.08 1.64 1.64 0 001.13.41 2 2 0 001.66-.77l.9 1a2.74 2.74 0 01-1.12.91 3.63 3.63 0 01-1.56.34zm-.21-5.65a1.15 1.15 0 00-.88.37 2 2 0 00-.44 1.06h2.55v-.14a1.29 1.29 0 00-.33-1 1.19 1.19 0 00-.9-.29zM310.16 584.48v.8a2.39 2.39 0 012-.93 2 2 0 011.62.65 2.94 2.94 0 01.55 1.91v4.44h-1.84V587a1.18 1.18 0 00-.25-.85 1.11 1.11 0 00-.84-.27 1.26 1.26 0 00-1.17.67v4.85h-1.83v-6.87zM318 582.79v1.69h1.17v1.35H318v3.42a.81.81 0 00.14.55.75.75 0 00.56.17 2.92 2.92 0 00.54-.05v1.39a3.78 3.78 0 01-1.11.17 1.75 1.75 0 01-2-2v-3.7h-1v-1.35h1v-1.69zM324 586.2a5.73 5.73 0 00-.66-.05 1.34 1.34 0 00-1.36.71v4.49h-1.84v-6.87h1.73l.06.82a1.69 1.69 0 011.53-.95 1.79 1.79 0 01.57.09zM328.67 591.35a2.29 2.29 0 01-.18-.62 2.21 2.21 0 01-1.73.75 2.46 2.46 0 01-1.68-.59 1.88 1.88 0 01-.66-1.47 2 2 0 01.81-1.68 4 4 0 012.34-.59h.84v-.39a1.14 1.14 0 00-.24-.76 1 1 0 00-.77-.29 1.1 1.1 0 00-.73.23.72.72 0 00-.26.6h-1.84a1.82 1.82 0 01.37-1.1 2.5 2.5 0 011-.8 3.84 3.84 0 011.51-.29 3 3 0 012 .64 2.27 2.27 0 01.74 1.8v3a3.32 3.32 0 00.28 1.48v.11zm-1.51-1.28a1.53 1.53 0 00.74-.18 1.19 1.19 0 00.51-.48v-1.18h-.68c-.92 0-1.41.31-1.47.95v.11a.7.7 0 00.25.56.92.92 0 00.65.22zM333.6 591.35h-1.84v-9.75h1.84zM335.1 582.7a.89.89 0 01.27-.67 1.05 1.05 0 01.76-.27 1 1 0 01.74.27.86.86 0 01.28.67.9.9 0 01-.28.69 1.16 1.16 0 01-1.49 0 .9.9 0 01-.28-.69zm1.95 8.65h-1.85v-6.87h1.85zM340.66 589.87H344v1.48h-5.7v-1.12l3.23-4.27h-3.13v-1.48h5.5v1.08zM348.23 591.48a3.36 3.36 0 01-2.46-.93 3.31 3.31 0 01-.95-2.47v-.18a4.12 4.12 0 01.4-1.85 3 3 0 011.13-1.25 3.15 3.15 0 011.68-.45 2.86 2.86 0 012.22.89 3.63 3.63 0 01.81 2.52v.75h-4.38a1.7 1.7 0 00.54 1.08 1.62 1.62 0 001.13.41 2 2 0 001.66-.77l.9 1a2.8 2.8 0 01-1.12.91 3.63 3.63 0 01-1.56.34zm-.21-5.65a1.15 1.15 0 00-.88.37 1.88 1.88 0 00-.44 1.06h2.55v-.14a1.38 1.38 0 00-.33-1 1.19 1.19 0 00-.92-.29zM351.81 587.87a4.12 4.12 0 01.72-2.56 2.33 2.33 0 012-1 2.11 2.11 0 011.66.75v-3.5H358v9.75h-1.66l-.09-.73a2.15 2.15 0 01-1.76.86 2.33 2.33 0 01-1.95-1 4.26 4.26 0 01-.73-2.57zm1.84.13a2.75 2.75 0 00.33 1.48 1.09 1.09 0 001 .52 1.22 1.22 0 001.2-.72v-2.73a1.22 1.22 0 00-1.19-.72c-.9 0-1.34.72-1.34 2.17zM368.84 588a4.12 4.12 0 01-.72 2.54 2.31 2.31 0 01-1.95 1 2.13 2.13 0 01-1.68-.73V594h-1.83v-9.51h1.7l.06.67a2.18 2.18 0 011.74-.8 2.35 2.35 0 012 .94 4.24 4.24 0 01.7 2.59zm-1.83-.14a2.74 2.74 0 00-.34-1.48 1.12 1.12 0 00-1-.53 1.2 1.2 0 00-1.19.67v2.82a1.24 1.24 0 001.2.68q1.32-.02 1.32-2.18zM371.91 591.35h-1.84v-9.75h1.84zM377.4 591.35a2.29 2.29 0 01-.18-.62 2.2 2.2 0 01-1.73.75 2.46 2.46 0 01-1.68-.59 1.88 1.88 0 01-.66-1.47 2 2 0 01.81-1.68 4 4 0 012.34-.59h.84v-.39a1.14 1.14 0 00-.24-.76 1 1 0 00-.77-.29 1.1 1.1 0 00-.73.23.75.75 0 00-.26.6h-1.84a1.89 1.89 0 01.37-1.1 2.5 2.5 0 011-.8 3.84 3.84 0 011.51-.29 3 3 0 012 .64 2.24 2.24 0 01.74 1.8v3a3.32 3.32 0 00.28 1.48v.11zm-1.51-1.28a1.6 1.6 0 00.75-.18 1.22 1.22 0 00.5-.48v-1.18h-.68c-.92 0-1.41.31-1.47.95v.11a.73.73 0 00.25.56.92.92 0 00.65.22zM382.08 584.48l.06.8a2.39 2.39 0 012-.93 2 2 0 011.63.65 2.94 2.94 0 01.54 1.91v4.44h-1.83V587a1.23 1.23 0 00-.25-.85 1.13 1.13 0 00-.85-.27 1.26 1.26 0 00-1.16.67v4.85h-1.84v-6.87zM391.39 589.45a.6.6 0 00-.33-.53 3.72 3.72 0 00-1.07-.34c-1.63-.35-2.45-1-2.45-2.09a1.87 1.87 0 01.76-1.52 3.06 3.06 0 012-.62 3.32 3.32 0 012.1.62 1.94 1.94 0 01.78 1.6h-1.84a.88.88 0 00-.25-.65 1.07 1.07 0 00-.79-.26 1.1 1.1 0 00-.72.21.66.66 0 00-.25.53.56.56 0 00.29.5 3 3 0 001 .32 6.91 6.91 0 011.15.31 1.9 1.9 0 011.46 1.85 1.8 1.8 0 01-.81 1.52 3.53 3.53 0 01-2.08.58 3.66 3.66 0 01-1.53-.31 2.55 2.55 0 01-1.05-.85 1.89 1.89 0 01-.38-1.15h1.73a1 1 0 00.37.75 1.44 1.44 0 00.9.26 1.33 1.33 0 00.79-.2.64.64 0 00.22-.53zM399.32 584.48l.05.77a2.42 2.42 0 012-.9 1.83 1.83 0 011.82 1 2.35 2.35 0 012.06-1 2.08 2.08 0 011.67.65 3 3 0 01.54 2v4.39h-1.86V587a1.34 1.34 0 00-.23-.86 1 1 0 00-.81-.27 1.16 1.16 0 00-1.14.79v4.73h-1.84V587a1.29 1.29 0 00-.23-.87 1 1 0 00-.8-.27 1.19 1.19 0 00-1.13.65v4.87h-1.82v-6.87zM412.83 591.35a2.29 2.29 0 01-.18-.62 2.23 2.23 0 01-1.74.75 2.43 2.43 0 01-1.67-.59 1.88 1.88 0 01-.66-1.47 2 2 0 01.81-1.68 4 4 0 012.34-.59h.84v-.39a1.14 1.14 0 00-.24-.76 1 1 0 00-.78-.29 1.07 1.07 0 00-.72.23.73.73 0 00-.27.6h-1.83a1.82 1.82 0 01.37-1.1 2.44 2.44 0 011-.8 3.84 3.84 0 011.51-.29 3 3 0 012 .64 2.27 2.27 0 01.74 1.8v3a3.48 3.48 0 00.27 1.48v.11zm-1.52-1.28a1.6 1.6 0 00.75-.18 1.19 1.19 0 00.51-.48v-1.18h-.69c-.91 0-1.4.31-1.46.95v.11a.73.73 0 00.24.56.92.92 0 00.65.22zM417.51 584.48l.05.8a2.41 2.41 0 012-.93 2 2 0 011.62.65 2.94 2.94 0 01.55 1.91v4.44h-1.83V587a1.18 1.18 0 00-.26-.85 1.11 1.11 0 00-.84-.27 1.24 1.24 0 00-1.16.67v4.85h-1.84v-6.87zM427.08 591.35a2.29 2.29 0 01-.18-.62 2.23 2.23 0 01-1.74.75 2.43 2.43 0 01-1.67-.59 1.88 1.88 0 01-.66-1.47 2 2 0 01.81-1.68 4 4 0 012.34-.59h.84v-.39a1.14 1.14 0 00-.24-.76 1 1 0 00-.78-.29 1.07 1.07 0 00-.72.23.73.73 0 00-.27.6H423a1.82 1.82 0 01.37-1.1 2.44 2.44 0 011-.8 3.84 3.84 0 011.51-.29 3 3 0 012 .64 2.27 2.27 0 01.74 1.8v3a3.48 3.48 0 00.27 1.48v.11zm-1.52-1.28a1.6 1.6 0 00.75-.18 1.19 1.19 0 00.51-.48v-1.18h-.69c-.91 0-1.4.31-1.46.95v.11a.73.73 0 00.24.56.92.92 0 00.65.22zM429.8 587.87a4 4 0 01.76-2.55 2.43 2.43 0 012-1 2.13 2.13 0 011.76.78l.08-.65h1.66v6.64a3 3 0 01-.41 1.57 2.66 2.66 0 01-1.15 1 4.13 4.13 0 01-1.74.34 3.79 3.79 0 01-1.47-.3 2.62 2.62 0 01-1.09-.78l.82-1.11a2.14 2.14 0 001.66.77 1.55 1.55 0 001.13-.39 1.49 1.49 0 00.41-1.11v-.37a2.11 2.11 0 01-1.67.72 2.45 2.45 0 01-2-1 4 4 0 01-.77-2.57zm1.84.13a2.48 2.48 0 00.37 1.46 1.18 1.18 0 001 .54 1.27 1.27 0 001.2-.63v-2.91a1.27 1.27 0 00-1.19-.63 1.17 1.17 0 00-1 .55 2.77 2.77 0 00-.38 1.62zM440.65 591.48a3.39 3.39 0 01-2.46-.93 3.31 3.31 0 01-.95-2.47v-.18a4.26 4.26 0 01.4-1.85 2.94 2.94 0 011.14-1.25 3.12 3.12 0 011.67-.45 2.86 2.86 0 012.22.89 3.63 3.63 0 01.81 2.52v.75h-4.38a1.7 1.7 0 00.54 1.08 1.64 1.64 0 001.13.41 2 2 0 001.66-.77l.9 1a2.74 2.74 0 01-1.12.91 3.63 3.63 0 01-1.56.34zm-.21-5.65a1.15 1.15 0 00-.88.37 2 2 0 00-.44 1.06h2.55v-.14a1.29 1.29 0 00-.33-1 1.19 1.19 0 00-.9-.29zM446.24 584.48l.06.77a2.39 2.39 0 012-.9 1.83 1.83 0 011.82 1 2.35 2.35 0 012.06-1 2.08 2.08 0 011.67.65 3 3 0 01.54 2v4.39h-1.84V587a1.28 1.28 0 00-.23-.86 1 1 0 00-.8-.27 1.17 1.17 0 00-1.15.79v4.73h-1.83V587a1.29 1.29 0 00-.24-.87 1 1 0 00-.8-.27 1.19 1.19 0 00-1.13.65v4.87h-1.83v-6.87zM458.93 591.48a3.39 3.39 0 01-2.46-.93 3.31 3.31 0 01-1-2.47v-.18a4.12 4.12 0 01.41-1.85 2.86 2.86 0 011.13-1.25 3.12 3.12 0 011.67-.45 2.86 2.86 0 012.22.89 3.63 3.63 0 01.81 2.52v.75h-4.38a1.7 1.7 0 00.54 1.08 1.64 1.64 0 001.13.41 2 2 0 001.66-.77l.9 1a2.77 2.77 0 01-1.11.91 3.68 3.68 0 01-1.52.34zm-.21-5.65a1.15 1.15 0 00-.88.37 2 2 0 00-.44 1.06h2.6v-.14a1.38 1.38 0 00-.33-1 1.23 1.23 0 00-.95-.29zM464.49 584.48l.05.8a2.41 2.41 0 012-.93 2 2 0 011.62.65 2.94 2.94 0 01.55 1.91v4.44h-1.84V587a1.18 1.18 0 00-.25-.85 1.11 1.11 0 00-.84-.27 1.24 1.24 0 00-1.16.67v4.85h-1.84v-6.87zM472.27 582.79v1.69h1.18v1.35h-1.18v3.42a.8.8 0 00.15.55.73.73 0 00.56.17 2.92 2.92 0 00.54-.05v1.39a3.78 3.78 0 01-1.11.17 1.75 1.75 0 01-2-2v-3.7h-1v-1.35h1v-1.69zM285.18 602.09a1.39 1.39 0 01.42-1.06 1.49 1.49 0 011.08-.4 1.52 1.52 0 011.09.39 1.39 1.39 0 01.42 1v.27a1.37 1.37 0 01-.41 1 1.54 1.54 0 01-1.09.4 1.51 1.51 0 01-1.09-.4 1.39 1.39 0 01-.42-1.07zM296.48 603.57H295V607h-1.9v-9.24h3.43a3.89 3.89 0 012.53.73 2.51 2.51 0 01.89 2.06 2.88 2.88 0 01-.41 1.58 2.83 2.83 0 01-1.25 1l2 3.78v.09h-2zM295 602h1.54a1.59 1.59 0 001.11-.36 1.31 1.31 0 00.39-1 1.38 1.38 0 00-.37-1 1.55 1.55 0 00-1.14-.38H295zM304.39 607.08a3.39 3.39 0 01-2.46-.93 3.31 3.31 0 01-.95-2.47v-.18a4.26 4.26 0 01.4-1.85 2.94 2.94 0 011.14-1.25 3.11 3.11 0 011.67-.44 2.86 2.86 0 012.22.88 3.63 3.63 0 01.81 2.52v.75h-4.38a1.7 1.7 0 00.54 1.08 1.64 1.64 0 001.13.41 2 2 0 001.66-.77l.9 1a2.74 2.74 0 01-1.12.91 3.63 3.63 0 01-1.56.34zm-.21-5.65a1.15 1.15 0 00-.88.37 2 2 0 00-.44 1.06h2.56v-.14a1.34 1.34 0 00-.34-1 1.19 1.19 0 00-.9-.29zM310 600.08l.06.77a2.38 2.38 0 012-.89 1.83 1.83 0 011.82 1 2.35 2.35 0 012.07-1 2 2 0 011.66.65 3 3 0 01.54 1.95V607h-1.84v-4.39a1.28 1.28 0 00-.23-.86 1 1 0 00-.8-.27 1.15 1.15 0 00-1.14.79V607h-1.83v-4.38a1.29 1.29 0 00-.24-.87 1 1 0 00-.8-.27 1.2 1.2 0 00-1.13.65V607h-1.83v-6.87zM319.23 603.45a4.09 4.09 0 01.39-1.82 2.89 2.89 0 011.13-1.24 3.35 3.35 0 011.72-.43 3.12 3.12 0 012.27.85 3.38 3.38 0 011 2.31v.47a3.56 3.56 0 01-.88 2.53 3.42 3.42 0 01-4.74 0 3.66 3.66 0 01-.88-2.59zm1.83.13a2.54 2.54 0 00.37 1.5 1.21 1.21 0 001.05.52 1.2 1.2 0 001-.51 2.81 2.81 0 00.38-1.64 2.54 2.54 0 00-.38-1.49 1.3 1.3 0 00-2.09 0 2.81 2.81 0 00-.33 1.62zM329.06 598.39v1.69h1.17v1.35h-1.17v3.43a.79.79 0 00.15.54.71.71 0 00.55.17 2.76 2.76 0 00.54-.05v1.39a3.78 3.78 0 01-1.11.17 1.75 1.75 0 01-2-2v-3.7h-1v-1.35h1v-1.69zM334.42 607.08a3.36 3.36 0 01-2.46-.93 3.31 3.31 0 01-.95-2.47v-.18a4.12 4.12 0 01.4-1.85 2.92 2.92 0 011.13-1.25 3.14 3.14 0 011.67-.44 2.86 2.86 0 012.22.88 3.63 3.63 0 01.81 2.52v.75h-4.37a1.7 1.7 0 00.54 1.08 1.6 1.6 0 001.13.41 2 2 0 001.65-.77l.91 1a2.8 2.8 0 01-1.12.91 3.63 3.63 0 01-1.56.34zm-.21-5.65a1.18 1.18 0 00-.89.37 2 2 0 00-.43 1.06h2.55v-.14a1.38 1.38 0 00-.33-1 1.19 1.19 0 00-.9-.29zM341.23 603.47a4.12 4.12 0 01.73-2.56 2.31 2.31 0 012-.95 2.1 2.1 0 011.65.74v-3.5h1.84v9.8h-1.65l-.09-.73a2.18 2.18 0 01-1.77.86 2.32 2.32 0 01-1.94-1 4.24 4.24 0 01-.77-2.66zm1.84.13a2.66 2.66 0 00.34 1.48 1.08 1.08 0 001 .52 1.22 1.22 0 001.2-.72v-2.73a1.2 1.2 0 00-1.18-.72c-.92 0-1.36.72-1.36 2.17zM352 607.08a3.36 3.36 0 01-2.46-.93 3.27 3.27 0 01-.95-2.47v-.18a4.12 4.12 0 01.4-1.85 2.86 2.86 0 011.13-1.25 3.14 3.14 0 011.67-.44 2.86 2.86 0 012.22.88 3.63 3.63 0 01.81 2.52v.75h-4.37a1.74 1.74 0 00.53 1.08 1.64 1.64 0 001.14.41 2 2 0 001.65-.77l.91 1a2.8 2.8 0 01-1.12.91 3.63 3.63 0 01-1.56.34zm-.21-5.65a1.18 1.18 0 00-.89.37 2 2 0 00-.43 1.06H353v-.14a1.38 1.38 0 00-.33-1 1.19 1.19 0 00-.87-.29zM359.59 605.05a.6.6 0 00-.33-.53 3.72 3.72 0 00-1.07-.34c-1.63-.35-2.45-1-2.45-2.09a1.88 1.88 0 01.76-1.52 3 3 0 012-.61 3.29 3.29 0 012.09.61 1.92 1.92 0 01.79 1.6h-1.84a.88.88 0 00-.25-.65 1.33 1.33 0 00-1.51 0 .67.67 0 00-.26.53.58.58 0 00.29.5 3.07 3.07 0 001 .32 7.2 7.2 0 011.15.31 1.9 1.9 0 011.46 1.85 1.8 1.8 0 01-.81 1.52 3.53 3.53 0 01-2.08.58 3.75 3.75 0 01-1.54-.31 2.69 2.69 0 01-1.05-.85 2 2 0 01-.38-1.15h1.74a1 1 0 00.36.75 1.48 1.48 0 00.9.26 1.35 1.35 0 00.8-.2.64.64 0 00.23-.58zM365.05 604.2l-.66.66V607h-1.83v-9.8h1.83v5.4l.36-.45 1.75-2.07h2.21l-2.48 2.86 2.69 4h-2.1zM371.7 598.39v1.69h1.17v1.35h-1.17v3.43a.85.85 0 00.14.54.75.75 0 00.56.17 2.92 2.92 0 00.54-.05v1.39a3.78 3.78 0 01-1.11.17 1.75 1.75 0 01-2-2v-3.7h-1v-1.35h1v-1.69zM373.42 603.45a4.09 4.09 0 01.39-1.82 2.89 2.89 0 011.13-1.24 3.35 3.35 0 011.72-.43 3.12 3.12 0 012.27.85 3.38 3.38 0 011 2.31v.47a3.56 3.56 0 01-.88 2.53 3.42 3.42 0 01-4.74 0 3.66 3.66 0 01-.88-2.59zm1.83.13a2.54 2.54 0 00.37 1.5 1.21 1.21 0 001.05.52 1.23 1.23 0 001.05-.51 2.9 2.9 0 00.37-1.64 2.62 2.62 0 00-.37-1.49 1.24 1.24 0 00-1.06-.53 1.2 1.2 0 00-1 .53 2.81 2.81 0 00-.41 1.62zM387.24 603.58a4.1 4.1 0 01-.72 2.54 2.31 2.31 0 01-1.95 1 2.13 2.13 0 01-1.68-.73v3.24h-1.84v-9.51h1.71l.06.67a2.15 2.15 0 011.74-.79 2.33 2.33 0 012 .93 4.24 4.24 0 01.71 2.59zm-1.84-.14a2.66 2.66 0 00-.34-1.48 1.09 1.09 0 00-1-.53 1.2 1.2 0 00-1.19.67v2.82a1.22 1.22 0 001.2.68c.93 0 1.33-.72 1.33-2.16zM285.18 617.69a1.39 1.39 0 01.42-1.06 1.49 1.49 0 011.08-.4 1.52 1.52 0 011.09.39 1.39 1.39 0 01.42 1v.27a1.39 1.39 0 01-.41 1.05 1.54 1.54 0 01-1.09.4 1.51 1.51 0 01-1.09-.4 1.39 1.39 0 01-.42-1.07zM296.48 619.17H295v3.38h-1.9v-9.24h3.43a3.89 3.89 0 012.47.69 2.51 2.51 0 01.89 2.06 2.88 2.88 0 01-.41 1.58 2.83 2.83 0 01-1.25 1l2 3.78v.09h-2zm-1.48-1.55h1.54a1.59 1.59 0 001.11-.36 1.31 1.31 0 00.39-1 1.4 1.4 0 00-.37-1 1.55 1.55 0 00-1.14-.37H295zM304.39 622.68a3.39 3.39 0 01-2.46-.93 3.31 3.31 0 01-.95-2.47v-.18a4.26 4.26 0 01.4-1.85 2.94 2.94 0 011.14-1.25 3.12 3.12 0 011.67-.45 2.86 2.86 0 012.22.89 3.63 3.63 0 01.81 2.52v.75h-4.38a1.7 1.7 0 00.54 1.08 1.64 1.64 0 001.13.41 2 2 0 001.66-.77l.9 1a2.74 2.74 0 01-1.12.91 3.63 3.63 0 01-1.56.34zm-.21-5.65a1.15 1.15 0 00-.88.37 2 2 0 00-.44 1.06h2.56v-.14a1.34 1.34 0 00-.34-1 1.19 1.19 0 00-.9-.32zM310 615.68l.06.77a2.39 2.39 0 012-.9 1.83 1.83 0 011.82 1.05 2.36 2.36 0 012.07-1.05 2 2 0 011.66.66 3 3 0 01.54 1.95v4.39h-1.84v-4.39a1.28 1.28 0 00-.23-.86 1 1 0 00-.8-.27 1.15 1.15 0 00-1.14.79v4.73h-1.83v-4.38a1.29 1.29 0 00-.24-.87 1 1 0 00-.8-.27 1.2 1.2 0 00-1.13.65v4.87h-1.83v-6.87zM319.23 619.05a4.09 4.09 0 01.39-1.82 2.89 2.89 0 011.13-1.24 3.36 3.36 0 011.72-.44 3.12 3.12 0 012.27.86 3.38 3.38 0 011 2.31v.47a3.58 3.58 0 01-.88 2.53 3.41 3.41 0 01-4.74 0 3.63 3.63 0 01-.88-2.59zm1.83.13a2.56 2.56 0 00.37 1.5 1.21 1.21 0 001.05.52 1.2 1.2 0 001-.51 2.83 2.83 0 00.38-1.64 2.54 2.54 0 00-.38-1.49 1.3 1.3 0 00-2.09 0 2.81 2.81 0 00-.33 1.62zM329.06 614v1.69h1.17V617h-1.17v3.43a.79.79 0 00.15.54.71.71 0 00.55.17 2.76 2.76 0 00.54 0v1.39a3.78 3.78 0 01-1.11.17 1.75 1.75 0 01-2-1.95V617h-1v-1.35h1V614zM334.42 622.68a3.36 3.36 0 01-2.46-.93 3.31 3.31 0 01-.95-2.47v-.18a4.12 4.12 0 01.4-1.85 2.92 2.92 0 011.13-1.25 3.14 3.14 0 011.67-.45 2.86 2.86 0 012.22.89 3.63 3.63 0 01.81 2.52v.75h-4.37a1.7 1.7 0 00.54 1.08 1.6 1.6 0 001.13.41 2 2 0 001.65-.77l.91 1a2.8 2.8 0 01-1.12.91 3.63 3.63 0 01-1.56.34zm-.21-5.65a1.18 1.18 0 00-.89.37 2 2 0 00-.43 1.06h2.55v-.14a1.38 1.38 0 00-.33-1 1.19 1.19 0 00-.9-.32zM345.5 622.55a2 2 0 01-.18-.62 2.23 2.23 0 01-1.74.75 2.43 2.43 0 01-1.67-.59 1.88 1.88 0 01-.66-1.47 2 2 0 01.81-1.68 4 4 0 012.34-.59h.84V618a1.14 1.14 0 00-.24-.76 1 1 0 00-.78-.29 1.07 1.07 0 00-.72.23.73.73 0 00-.27.61h-1.83a1.83 1.83 0 01.37-1.11 2.44 2.44 0 011-.8 3.84 3.84 0 011.51-.29 3 3 0 012 .64 2.27 2.27 0 01.74 1.8v3a3.48 3.48 0 00.27 1.48v.11zm-1.5-1.28a1.6 1.6 0 00.75-.18 1.19 1.19 0 00.51-.48v-1.18h-.69c-.91 0-1.4.31-1.46 1v.11a.73.73 0 00.24.56.92.92 0 00.65.17zM352.21 620.65a.6.6 0 00-.33-.53 3.84 3.84 0 00-1.07-.34c-1.64-.35-2.45-1-2.45-2.09a1.87 1.87 0 01.76-1.52 3 3 0 012-.62 3.29 3.29 0 012.09.62 2 2 0 01.79 1.6h-1.84a.88.88 0 00-.25-.65 1.1 1.1 0 00-.8-.26 1.06 1.06 0 00-.71.21.67.67 0 00-.26.53.58.58 0 00.29.5 3.07 3.07 0 001 .32 7.2 7.2 0 011.15.31 1.89 1.89 0 011.45 1.85 1.79 1.79 0 01-.8 1.52 3.53 3.53 0 01-2.08.58 3.75 3.75 0 01-1.54-.31 2.69 2.69 0 01-1.05-.85 2 2 0 01-.38-1.15h1.74a1 1 0 00.36.75 1.48 1.48 0 00.9.26 1.37 1.37 0 00.8-.2.64.64 0 00.23-.53zM358.89 620.65a.6.6 0 00-.33-.53 3.72 3.72 0 00-1.07-.34c-1.63-.35-2.45-1-2.45-2.09a1.87 1.87 0 01.76-1.52 3.06 3.06 0 012-.62 3.32 3.32 0 012.1.62 1.94 1.94 0 01.78 1.6h-1.84a.88.88 0 00-.25-.65 1.07 1.07 0 00-.79-.26 1.1 1.1 0 00-.72.21.66.66 0 00-.25.53.56.56 0 00.29.5 3 3 0 001 .32 6.91 6.91 0 011.15.31 1.9 1.9 0 011.46 1.85 1.8 1.8 0 01-.81 1.52 3.53 3.53 0 01-2.08.58 3.66 3.66 0 01-1.53-.31 2.55 2.55 0 01-1.05-.85 1.89 1.89 0 01-.38-1.15h1.73a1 1 0 00.37.75 1.44 1.44 0 00.9.26 1.33 1.33 0 00.79-.2.64.64 0 00.22-.53zM361.85 613.9a.89.89 0 01.27-.67 1 1 0 01.75-.27 1 1 0 01.75.27.86.86 0 01.28.67.9.9 0 01-.28.69 1 1 0 01-.75.27 1 1 0 01-.74-.27.9.9 0 01-.28-.69zm1.94 8.65H362v-6.87h1.84zM369 620.65a.6.6 0 00-.33-.53 3.72 3.72 0 00-1.07-.34c-1.63-.35-2.45-1-2.45-2.09a1.89 1.89 0 01.76-1.52 3.06 3.06 0 012-.62 3.32 3.32 0 012.1.62 1.94 1.94 0 01.78 1.6H369a.89.89 0 00-.26-.65 1.07 1.07 0 00-.79-.26 1.1 1.1 0 00-.72.21.66.66 0 00-.25.53.56.56 0 00.29.5 3 3 0 001 .32 6.91 6.91 0 011.15.31 1.9 1.9 0 011.46 1.85 1.8 1.8 0 01-.81 1.52 3.51 3.51 0 01-2.08.58 3.7 3.7 0 01-1.53-.31 2.55 2.55 0 01-1.05-.85 1.89 1.89 0 01-.38-1.15h1.74a.94.94 0 00.36.75 1.44 1.44 0 00.9.26 1.37 1.37 0 00.8-.2.63.63 0 00.17-.53zM374.19 614v1.69h1.17V617h-1.17v3.43a.79.79 0 00.14.54.73.73 0 00.56.17 2.92 2.92 0 00.54 0v1.39a3.78 3.78 0 01-1.11.17 1.75 1.75 0 01-2-1.95V617h-1v-1.35h1V614zM380.36 622.55a2.29 2.29 0 01-.18-.62 2.22 2.22 0 01-1.74.75 2.43 2.43 0 01-1.67-.59 1.88 1.88 0 01-.66-1.47 2 2 0 01.81-1.68 4 4 0 012.34-.59h.84V618a1.14 1.14 0 00-.24-.76 1 1 0 00-.77-.29 1.08 1.08 0 00-.73.23.73.73 0 00-.26.61h-1.84a1.83 1.83 0 01.37-1.11 2.44 2.44 0 011-.8 3.84 3.84 0 011.51-.29 3 3 0 012 .64 2.27 2.27 0 01.74 1.8v3a3.32 3.32 0 00.28 1.48v.11zm-1.51-1.28a1.56 1.56 0 00.74-.18 1.19 1.19 0 00.51-.48v-1.18h-.68c-.92 0-1.41.31-1.47 1v.11a.7.7 0 00.25.56.92.92 0 00.65.17zM385 615.68l.06.8a2.39 2.39 0 012-.93 2 2 0 011.63.65 3 3 0 01.54 1.91v4.44h-1.83v-4.4a1.18 1.18 0 00-.26-.85 1.11 1.11 0 00-.84-.27 1.25 1.25 0 00-1.16.67v4.85h-1.84v-6.87zM393.49 621.2a1.21 1.21 0 00.82-.28 1 1 0 00.33-.74h1.72a2.34 2.34 0 01-.38 1.28 2.62 2.62 0 01-1 .9 3.3 3.3 0 01-1.44.32 3 3 0 01-2.32-.94 3.69 3.69 0 01-.85-2.59V619a3.68 3.68 0 01.84-2.53 3 3 0 012.32-1 2.86 2.86 0 012.06.74 2.6 2.6 0 01.79 2h-1.72a1.22 1.22 0 00-.33-.87 1.21 1.21 0 00-1.8.13 2.7 2.7 0 00-.33 1.52v.19a2.77 2.77 0 00.32 1.52 1.14 1.14 0 00.97.5zM400.57 622.68a3.37 3.37 0 01-2.46-.93 3.31 3.31 0 01-.95-2.47v-.18a4.26 4.26 0 01.4-1.85 2.94 2.94 0 011.14-1.25 3.12 3.12 0 011.67-.45 2.86 2.86 0 012.22.89 3.63 3.63 0 01.81 2.52v.75H399a1.7 1.7 0 00.54 1.08 1.64 1.64 0 001.13.41 2 2 0 001.66-.77l.9 1a2.74 2.74 0 01-1.12.91 3.63 3.63 0 01-1.54.34zm-.21-5.65a1.15 1.15 0 00-.88.37 2 2 0 00-.44 1.06h2.55v-.14a1.29 1.29 0 00-.33-1 1.19 1.19 0 00-.9-.32zM285.18 633.29a1.39 1.39 0 01.42-1.06 1.49 1.49 0 011.08-.4 1.52 1.52 0 011.09.39 1.39 1.39 0 01.42 1v.28a1.39 1.39 0 01-.41 1.05 1.54 1.54 0 01-1.09.4 1.56 1.56 0 01-1.09-.4 1.39 1.39 0 01-.42-1.07zM300.58 638.15h-1.91v-4H295v4h-1.9v-9.24h1.9v3.74h3.71v-3.74h1.91zM306.1 638.15a2 2 0 01-.18-.62 2.23 2.23 0 01-1.74.75 2.43 2.43 0 01-1.67-.59 1.88 1.88 0 01-.66-1.47 2 2 0 01.81-1.68A4 4 0 01305 634h.84v-.39a1.14 1.14 0 00-.24-.76 1 1 0 00-.78-.29 1.07 1.07 0 00-.72.23.73.73 0 00-.27.6H302a1.82 1.82 0 01.37-1.1 2.44 2.44 0 011-.8 3.84 3.84 0 011.51-.29 3 3 0 012 .64 2.26 2.26 0 01.74 1.79v3A3.48 3.48 0 00308 638v.11zm-1.52-1.28a1.6 1.6 0 00.75-.18 1.19 1.19 0 00.51-.48V635h-.69c-.91 0-1.4.31-1.46 1v.11a.73.73 0 00.24.56.92.92 0 00.65.2zM313 633a5.73 5.73 0 00-.66 0 1.36 1.36 0 00-1.37.71v4.49h-1.83v-6.87h1.73l.05.82a1.71 1.71 0 011.53-1 1.81 1.81 0 01.58.09zM313.43 634.67a4.12 4.12 0 01.72-2.56 2.32 2.32 0 012-1 2.08 2.08 0 011.65.75v-3.5h1.84v9.75H318l-.09-.73a2.18 2.18 0 01-1.77.86 2.33 2.33 0 01-1.94-1 4.26 4.26 0 01-.77-2.57zm1.83.12a2.67 2.67 0 00.34 1.49 1.08 1.08 0 001 .52 1.22 1.22 0 001.2-.72v-2.73a1.19 1.19 0 00-1.18-.72c-.92 0-1.36.72-1.36 2.16zM327 635.66l.9-4.38h1.77l-1.75 6.87h-1.54l-1.3-4.32-1.3 4.32h-1.53l-1.75-6.87h1.77l.9 4.37 1.25-4.37h1.33zM334.57 638.15a2 2 0 01-.18-.62 2.23 2.23 0 01-1.74.75 2.43 2.43 0 01-1.67-.59 1.88 1.88 0 01-.66-1.47 2 2 0 01.81-1.68 4 4 0 012.34-.59h.84v-.39a1.09 1.09 0 00-.25-.76 1 1 0 00-.77-.29 1.05 1.05 0 00-.72.23.73.73 0 00-.27.6h-1.83a1.82 1.82 0 01.37-1.1 2.44 2.44 0 011-.8 3.84 3.84 0 011.51-.29 3 3 0 012 .64 2.24 2.24 0 01.75 1.79v3a3.33 3.33 0 00.27 1.48v.11zm-1.52-1.28a1.6 1.6 0 00.75-.18 1.19 1.19 0 00.51-.48V635h-.69c-.91 0-1.4.31-1.46 1v.11a.73.73 0 00.24.56.92.92 0 00.65.2zM341.42 633a5.73 5.73 0 00-.66 0 1.35 1.35 0 00-1.37.71v4.49h-1.83v-6.87h1.73v.82a1.74 1.74 0 012.1-.86zM345.34 638.28a3.37 3.37 0 01-2.46-.93 3.31 3.31 0 01-.95-2.47v-.18a4.26 4.26 0 01.4-1.85 2.94 2.94 0 011.14-1.25 3.09 3.09 0 011.67-.45 2.86 2.86 0 012.22.89 3.63 3.63 0 01.81 2.52v.75h-4.38a1.7 1.7 0 00.54 1.08 1.64 1.64 0 001.13.41 2 2 0 001.66-.77l.9 1a2.74 2.74 0 01-1.12.91 3.63 3.63 0 01-1.56.34zm-.21-5.65a1.15 1.15 0 00-.88.37 2 2 0 00-.44 1.06h2.55v-.14a1.33 1.33 0 00-.36-.92 1.19 1.19 0 00-.87-.37zM352.43 629.5a.86.86 0 01.28-.67 1 1 0 01.75-.27 1 1 0 01.75.27.86.86 0 01.28.67.94.94 0 01-.28.69 1.18 1.18 0 01-1.5 0 .94.94 0 01-.28-.69zm1.95 8.65h-1.84v-6.87h1.84zM357.58 631.28l.06.8a2.39 2.39 0 012-.93 2 2 0 011.63.65 3 3 0 01.54 1.91v4.44H360v-4.4a1.18 1.18 0 00-.26-.85 1.11 1.11 0 00-.84-.27 1.26 1.26 0 00-1.16.66v4.86h-1.84v-6.87zM365.74 635.91l1.28-4.63h1.92l-2.32 6.87h-1.75l-2.32-6.87h1.92zM372.82 638.28a3.36 3.36 0 01-2.46-.93 3.31 3.31 0 01-.95-2.47v-.18a4.12 4.12 0 01.4-1.85 3 3 0 011.13-1.25 3.15 3.15 0 011.68-.45 2.86 2.86 0 012.22.89 3.63 3.63 0 01.81 2.52v.75h-4.38a1.7 1.7 0 00.54 1.08 1.62 1.62 0 001.13.41 2 2 0 001.66-.77l.9 1a2.8 2.8 0 01-1.12.91 3.63 3.63 0 01-1.56.34zm-.21-5.65a1.15 1.15 0 00-.88.37 1.88 1.88 0 00-.44 1.06h2.55v-.14a1.38 1.38 0 00-.33-.95 1.19 1.19 0 00-.9-.34zM378.37 631.28l.06.8a2.39 2.39 0 012-.93 2 2 0 011.62.65 2.94 2.94 0 01.55 1.91v4.44h-1.84v-4.4a1.18 1.18 0 00-.25-.85 1.13 1.13 0 00-.85-.27 1.27 1.27 0 00-1.16.66v4.86h-1.83v-6.87zM386.16 629.59v1.69h1.18v1.35h-1.18v3.42a.8.8 0 00.15.55.73.73 0 00.56.17 2.92 2.92 0 00.54 0v1.39a3.78 3.78 0 01-1.11.17 1.75 1.75 0 01-2-1.95v-3.7h-1v-1.35h1v-1.69zM387.88 634.65a4 4 0 01.4-1.82 2.89 2.89 0 011.13-1.24 3.33 3.33 0 011.72-.44 3.18 3.18 0 012.27.85 3.47 3.47 0 011 2.32v.47a3.58 3.58 0 01-.88 2.53 3.41 3.41 0 01-4.74 0 3.64 3.64 0 01-.89-2.59zm1.84.13a2.56 2.56 0 00.37 1.5 1.19 1.19 0 001.05.52 1.22 1.22 0 001-.51 2.83 2.83 0 00.38-1.64 2.54 2.54 0 00-.38-1.49 1.22 1.22 0 00-1.05-.53 1.19 1.19 0 00-1 .53 2.81 2.81 0 00-.37 1.62zM399.38 633a5.73 5.73 0 00-.66 0 1.36 1.36 0 00-1.37.71v4.49h-1.83v-6.87h1.73l.05.82a1.71 1.71 0 011.53-1 1.81 1.81 0 01.58.09zM402.94 635.55l1.27-4.27h2l-2.76 7.94-.16.36a2.09 2.09 0 01-2 1.34 2.94 2.94 0 01-.81-.12v-1.39h.28a1.47 1.47 0 00.78-.16 1.07 1.07 0 00.4-.53l.22-.56-2.41-6.89h2z"
              />
              <path
                className="prefix__cls-59"
                d="M332.21 677.55v-9.95h3.49a4.58 4.58 0 012.74.69 2.35 2.35 0 01.94 2 2.18 2.18 0 01-.38 1.29.85.85 0 10.17 1.59 2.31 2.31 0 01.44 1.42 2.64 2.64 0 01-.92 2.18 4.14 4.14 0 01-2.61.75zm2.05-5.78h1.52c1 0 1.55-.43 1.55-1.24a1.13 1.13 0 00-.39-1 2.08 2.08 0 00-1.24-.3h-1.44zm0 1.45v2.68H336a1.69 1.69 0 001.13-.34 1.2 1.2 0 00.41-1 1.25 1.25 0 00-1.42-1.38zM346.76 675.5h-3.59l-.69 2h-2.18l3.7-9.9h1.9l3.72 9.95h-2.18zm-3-1.66h2.49l-1.25-3.73zM358.23 674.23a3.48 3.48 0 01-1.18 2.53 4.15 4.15 0 01-2.82.93 3.73 3.73 0 01-3-1.29 5.3 5.3 0 01-1.1-3.54v-.61a5.92 5.92 0 01.51-2.53 3.78 3.78 0 011.44-1.68 4.16 4.16 0 012.19-.58 4.08 4.08 0 012.77.92 3.81 3.81 0 011.22 2.59h-2.06a2.05 2.05 0 00-.54-1.39 2 2 0 00-1.4-.44 1.75 1.75 0 00-1.54.74 4.13 4.13 0 00-.52 2.28v.75a4.39 4.39 0 00.49 2.36 1.71 1.71 0 001.54.74 2 2 0 001.42-.43 2 2 0 00.53-1.35zM362.7 673.56l-1.07 1.15v2.84h-2.05v-9.95h2.05v4.51l.9-1.24 2.54-3.27h2.52l-3.53 4.4 3.64 5.53h-2.45zM376 667.6v6.55a3.38 3.38 0 01-1 2.59 4.58 4.58 0 01-5.56 0 3.29 3.29 0 01-1.05-2.53v-6.61h2.05v6.57a1.9 1.9 0 00.47 1.42 1.8 1.8 0 001.3.45c1.15 0 1.74-.61 1.75-1.82v-6.62zM379.73 674v3.51h-2.05v-9.91h3.89a4.42 4.42 0 012 .41 3.08 3.08 0 011.31 1.16 3.32 3.32 0 01.45 1.72 2.85 2.85 0 01-1 2.31 4.17 4.17 0 01-2.77.84zm0-1.66h1.84a1.84 1.84 0 001.24-.38 1.41 1.41 0 00.42-1.09 1.64 1.64 0 00-.43-1.19 1.6 1.6 0 00-1.19-.46h-1.88zM390.16 673.5a10.47 10.47 0 01.42-3 7.49 7.49 0 011.23-2.5 4.65 4.65 0 011.76-1.52l.38 1.07a4.82 4.82 0 00-1.56 2.28 10.69 10.69 0 00-.56 3.61v.21a10.81 10.81 0 00.56 3.63 4.88 4.88 0 001.56 2.31l-.38 1a4.59 4.59 0 01-1.73-1.47 7.68 7.68 0 01-1.23-2.44 10.57 10.57 0 01-.45-2.88zM397.17 674v3.51h-2.06v-9.91H399a4.42 4.42 0 012 .41 3 3 0 011.31 1.16 3.33 3.33 0 01.46 1.72 2.88 2.88 0 01-1 2.31 4.21 4.21 0 01-2.77.8zm0-1.66H399a1.84 1.84 0 001.24-.38 1.41 1.41 0 00.43-1.09 1.65 1.65 0 00-.44-1.19 1.6 1.6 0 00-1.19-.46h-1.87zM408.55 675.5H405l-.68 2h-2.18l3.7-9.95h1.9l3.73 9.95h-2.18zm-3.05-1.66h2.5l-1.25-3.73zM414.75 672.08l2.08-4.48h2.24l-3.27 6.34v3.61h-2.09v-3.61l-3.26-6.34h2.25zM422.65 674.08h-3.85v-1.59h3.85zM430 675.5h-3.59l-.68 2h-2.19l3.71-9.95h1.9l3.73 9.95h-2.19zm-3-1.66h2.49l-1.25-3.73zM439 674.94a1 1 0 00-.41-.89 5.42 5.42 0 00-1.48-.66 11.05 11.05 0 01-1.69-.68 2.75 2.75 0 01-1.69-2.47 2.42 2.42 0 01.45-1.44 2.9 2.9 0 011.31-1 4.82 4.82 0 011.91-.36 4.45 4.45 0 011.9.39 3 3 0 011.29 1.09 2.83 2.83 0 01.46 1.6H439a1.35 1.35 0 00-.43-1.07 1.77 1.77 0 00-1.21-.38 1.91 1.91 0 00-1.17.32 1 1 0 00-.41.84 1 1 0 00.48.81 5.54 5.54 0 001.44.62 6.16 6.16 0 012.55 1.3 2.58 2.58 0 01.8 1.94 2.39 2.39 0 01-1 2 4.29 4.29 0 01-2.64.74 5.1 5.1 0 01-2.09-.42 3.3 3.3 0 01-1.44-1.16 2.92 2.92 0 01-.49-1.69h2.06c0 1.1.65 1.65 2 1.65a1.94 1.94 0 001.15-.3 1 1 0 00.4-.78zM446.1 674.08h-3.85v-1.59h3.85zM451.25 672.08l2.07-4.48h2.24l-3.26 6.34v3.61h-2.09v-3.61l-3.27-6.34h2.25zM464.45 672.8a6 6 0 01-.52 2.58 4 4 0 01-1.48 1.7 4.07 4.07 0 01-2.22.61 4.11 4.11 0 01-2.21-.6 3.92 3.92 0 01-1.51-1.7 6 6 0 01-.54-2.54v-.49a6.05 6.05 0 01.53-2.59 4 4 0 011.5-1.71 4.37 4.37 0 014.42 0 3.92 3.92 0 011.5 1.71 6 6 0 01.53 2.58zm-2.08-.45a4.12 4.12 0 00-.56-2.38 2 2 0 00-3.19 0 4.19 4.19 0 00-.57 2.35v.49a4.24 4.24 0 00.56 2.36 1.83 1.83 0 001.62.84 1.77 1.77 0 001.58-.81 4.13 4.13 0 00.56-2.36zM473.47 667.6v6.55a3.38 3.38 0 01-1 2.59 4.58 4.58 0 01-5.56 0 3.28 3.28 0 01-1-2.53v-6.61h2v6.57a1.86 1.86 0 00.47 1.42 1.78 1.78 0 001.29.45c1.15 0 1.74-.61 1.76-1.82v-6.62zM478.87 674.08H475v-1.59h3.85zM488.46 676.29a3.54 3.54 0 01-1.57 1 6.62 6.62 0 01-2.24.37 4.45 4.45 0 01-2.27-.57 3.77 3.77 0 01-1.5-1.63 5.86 5.86 0 01-.54-2.53v-.67a6.15 6.15 0 01.5-2.58 3.72 3.72 0 011.45-1.67 4.13 4.13 0 012.22-.58 4.18 4.18 0 012.77.84 3.65 3.65 0 011.18 2.46h-2a2 2 0 00-.6-1.25 2 2 0 00-1.29-.4 1.82 1.82 0 00-1.59.79 4.12 4.12 0 00-.56 2.34v.63a3.91 3.91 0 00.6 2.37 2 2 0 001.74.8 2.28 2.28 0 001.65-.49v-1.72h-1.87v-1.51h3.92zM498.3 672.8a6.12 6.12 0 01-.52 2.58 4 4 0 01-1.49 1.7 4 4 0 01-2.22.61 4.14 4.14 0 01-2.21-.6 3.9 3.9 0 01-1.5-1.7 5.68 5.68 0 01-.54-2.54v-.49a6.05 6.05 0 01.53-2.59 3.92 3.92 0 011.5-1.71 4.37 4.37 0 014.42 0 4 4 0 011.5 1.71 6 6 0 01.53 2.58zm-2.08-.45a4.2 4.2 0 00-.56-2.38 2 2 0 00-3.2 0 4.12 4.12 0 00-.56 2.35v.49a4.16 4.16 0 00.56 2.36 1.81 1.81 0 001.61.84 1.79 1.79 0 001.59-.81 4.21 4.21 0 00.56-2.36zM503.06 673.66a10.12 10.12 0 01-.44 3 8.25 8.25 0 01-1.28 2.53 4.55 4.55 0 01-1.79 1.5l-.38-1a4.68 4.68 0 001.53-2.25 10.24 10.24 0 00.58-3.51v-.36a10.72 10.72 0 00-.55-3.6 5.05 5.05 0 00-1.56-2.34l.38-1a4.63 4.63 0 011.76 1.47 7.85 7.85 0 011.27 2.46 9.6 9.6 0 01.48 2.92z"
              />
              <path
                className="prefix__cls-48"
                d="M332.18 703.89a1.39 1.39 0 01.42-1.06 1.49 1.49 0 011.08-.4 1.52 1.52 0 011.09.39 1.39 1.39 0 01.42 1v.27a1.41 1.41 0 01-.41 1 1.54 1.54 0 01-1.09.4 1.5 1.5 0 01-1.09-.4 1.39 1.39 0 01-.42-1.07zM345.62 705H342v3.78h-1.9v-9.24h6v1.54H342v2.39h3.66zM347 700.1a.9.9 0 01.28-.67 1 1 0 01.75-.27 1 1 0 01.75.27.86.86 0 01.28.67.9.9 0 01-.28.69 1 1 0 01-.75.27 1 1 0 01-.74-.27.91.91 0 01-.29-.69zm1.95 8.65h-1.84v-6.87H349zM352.44 708.75h-1.84V699h1.84zM357.11 708.88a3.36 3.36 0 01-2.46-.93 3.31 3.31 0 01-.95-2.47v-.18a4.26 4.26 0 01.4-1.85 2.94 2.94 0 011.14-1.25 3.09 3.09 0 011.67-.45 2.86 2.86 0 012.22.89 3.63 3.63 0 01.81 2.52v.75h-4.38a1.7 1.7 0 00.54 1.08 1.64 1.64 0 001.13.41 2 2 0 001.66-.77l.9 1a2.74 2.74 0 01-1.12.91 3.63 3.63 0 01-1.56.34zm-.21-5.65a1.15 1.15 0 00-.88.37 2 2 0 00-.44 1.06h2.55v-.14a1.29 1.29 0 00-.33-.95 1.19 1.19 0 00-.9-.34zM370.4 705.38a4.13 4.13 0 01-.7 2.57 2.33 2.33 0 01-2 .93 2.14 2.14 0 01-1.7-.88l-.08.73h-1.66V699h1.84v3.5a2.08 2.08 0 011.67-.75 2.35 2.35 0 012 .93 4.13 4.13 0 01.71 2.6zm-1.83-.14a2.78 2.78 0 00-.33-1.53 1.12 1.12 0 00-1-.48 1.21 1.21 0 00-1.21.72v2.72a1.22 1.22 0 001.22.73 1.14 1.14 0 001.17-.88 5 5 0 00.15-1.28zM375.51 708.75a2.29 2.29 0 01-.18-.62 2.2 2.2 0 01-1.73.75 2.46 2.46 0 01-1.68-.59 1.88 1.88 0 01-.66-1.47 2 2 0 01.81-1.68 4 4 0 012.34-.59h.84v-.39a1.14 1.14 0 00-.24-.76 1 1 0 00-.77-.29 1.1 1.1 0 00-.73.23.76.76 0 00-.26.61h-1.84a1.9 1.9 0 01.37-1.11 2.5 2.5 0 011-.8 3.84 3.84 0 011.51-.29 3 3 0 012 .64 2.24 2.24 0 01.74 1.8v3a3.32 3.32 0 00.28 1.48v.11zm-1.51-1.28a1.6 1.6 0 00.75-.18 1.22 1.22 0 00.5-.48v-1.18h-.68c-.92 0-1.41.31-1.47 1v.11a.73.73 0 00.24.56.92.92 0 00.66.17zM381.36 707.4a1.26 1.26 0 00.83-.28 1 1 0 00.33-.74h1.72a2.43 2.43 0 01-.39 1.28 2.62 2.62 0 01-1 .9 3.24 3.24 0 01-1.44.32 3 3 0 01-2.32-.94 3.69 3.69 0 01-.85-2.59v-.12a3.68 3.68 0 01.84-2.53 3 3 0 012.32-1 2.9 2.9 0 012.07.74 2.63 2.63 0 01.79 2h-1.72a1.26 1.26 0 00-.33-.87 1.15 1.15 0 00-.84-.34 1.11 1.11 0 00-1 .47 2.7 2.7 0 00-.33 1.52v.19a2.65 2.65 0 00.33 1.52 1.11 1.11 0 00.99.47zM387.78 706l-.66.66v2.09h-1.84V699h1.84v5.4l.35-.45 1.76-2.07h2.2l-2.43 2.86 2.7 4h-2.11zM396.34 708.05a2.3 2.3 0 01-1.88.83 2.14 2.14 0 01-1.68-.64 2.69 2.69 0 01-.6-1.86v-4.5H394v4.44c0 .72.32 1.08 1 1.08a1.33 1.33 0 001.28-.65v-4.87h1.84v6.87h-1.73zM405.68 705.38a4.1 4.1 0 01-.72 2.54 2.3 2.3 0 01-1.94 1 2.1 2.1 0 01-1.68-.73v3.24h-1.84v-9.51h1.7l.07.67a2.15 2.15 0 011.74-.8 2.34 2.34 0 012 .94 4.24 4.24 0 01.7 2.59zm-1.83-.14a2.66 2.66 0 00-.34-1.48 1.11 1.11 0 00-1-.53 1.2 1.2 0 00-1.18.67v2.82a1.22 1.22 0 001.2.68c.88 0 1.32-.72 1.32-2.16zM332.18 719.49a1.39 1.39 0 01.42-1.06 1.49 1.49 0 011.08-.4 1.52 1.52 0 011.09.39 1.39 1.39 0 01.42 1v.27a1.42 1.42 0 01-.41 1 1.69 1.69 0 01-2.18 0 1.39 1.39 0 01-.42-1.07zM342.08 724.35h-1.9v-9.24h1.9zM345.44 717.48l.06.77a2.42 2.42 0 012-.9 1.83 1.83 0 011.82 1 2.35 2.35 0 012.06-1 2 2 0 011.62.65 3 3 0 01.55 2v4.39h-1.84V720a1.34 1.34 0 00-.23-.86 1 1 0 00-.81-.27 1.15 1.15 0 00-1.14.79v4.73h-1.84V720a1.29 1.29 0 00-.23-.87 1 1 0 00-.8-.27 1.19 1.19 0 00-1.13.65v4.87h-1.84v-6.87zM359 724.35a2 2 0 01-.19-.62 2.2 2.2 0 01-1.73.75 2.43 2.43 0 01-1.67-.59 1.88 1.88 0 01-.66-1.47 2 2 0 01.81-1.68 4 4 0 012.33-.59h.85v-.39a1.09 1.09 0 00-.25-.76 1 1 0 00-.77-.29 1.05 1.05 0 00-.72.23.73.73 0 00-.27.6h-1.83a1.82 1.82 0 01.37-1.1 2.44 2.44 0 011-.8 3.84 3.84 0 011.51-.29 3 3 0 012 .64 2.25 2.25 0 01.75 1.8v3a3.2 3.2 0 00.27 1.48v.11zm-1.52-1.28a1.6 1.6 0 00.75-.18 1.19 1.19 0 00.51-.48v-1.18H358c-.92 0-1.4.31-1.46.95v.11a.73.73 0 00.24.56.92.92 0 00.66.22zM361.68 720.87a4 4 0 01.75-2.55 2.47 2.47 0 012-1 2.13 2.13 0 011.76.78l.08-.65H368v6.64a3 3 0 01-.41 1.57 2.72 2.72 0 01-1.15 1 4.13 4.13 0 01-1.74.34 3.75 3.75 0 01-1.47-.3 2.62 2.62 0 01-1.09-.78l.81-1.11a2.16 2.16 0 001.67.77 1.57 1.57 0 001.13-.39 1.49 1.49 0 00.41-1.11v-.37a2.11 2.11 0 01-1.67.72 2.44 2.44 0 01-2-1 4 4 0 01-.77-2.57zm1.84.13a2.48 2.48 0 00.37 1.46 1.18 1.18 0 001 .54 1.27 1.27 0 001.2-.63v-2.91a1.28 1.28 0 00-1.19-.63 1.2 1.2 0 00-1 .55 2.85 2.85 0 00-.38 1.62zM372.53 724.48a3.36 3.36 0 01-2.46-.93 3.31 3.31 0 01-.95-2.47v-.18a4.12 4.12 0 01.4-1.85 3 3 0 011.13-1.25 3.15 3.15 0 011.68-.45 2.86 2.86 0 012.22.89 3.63 3.63 0 01.8 2.52v.75H371a1.7 1.7 0 00.54 1.08 1.62 1.62 0 001.13.41 2 2 0 001.66-.77l.9 1a2.8 2.8 0 01-1.12.91 3.63 3.63 0 01-1.58.34zm-.21-5.65a1.15 1.15 0 00-.88.37 1.88 1.88 0 00-.44 1.06h2.55v-.14a1.38 1.38 0 00-.33-1 1.19 1.19 0 00-.9-.29zM385.82 721a4.13 4.13 0 01-.7 2.57 2.33 2.33 0 01-2 .93 2.14 2.14 0 01-1.78-.86l-.09.73h-1.65v-9.77h1.84v3.5a2.08 2.08 0 011.67-.75 2.35 2.35 0 012 .93 4.19 4.19 0 01.71 2.6zm-1.83-.14a2.76 2.76 0 00-.33-1.53 1.12 1.12 0 00-1-.48 1.2 1.2 0 00-1.2.72v2.72a1.22 1.22 0 001.22.73 1.12 1.12 0 001.16-.88 4.47 4.47 0 00.16-1.3zM390.93 724.35a2.29 2.29 0 01-.18-.62 2.22 2.22 0 01-1.74.75 2.43 2.43 0 01-1.67-.59 1.88 1.88 0 01-.66-1.47 2 2 0 01.81-1.68 4 4 0 012.34-.59h.84v-.39a1.14 1.14 0 00-.24-.76 1 1 0 00-.77-.29 1.08 1.08 0 00-.73.23.72.72 0 00-.26.6h-1.84a1.82 1.82 0 01.37-1.1 2.44 2.44 0 011-.8 3.84 3.84 0 011.51-.29 3 3 0 012 .64 2.27 2.27 0 01.74 1.8v3a3.32 3.32 0 00.28 1.48v.11zm-1.51-1.28a1.56 1.56 0 00.74-.18 1.19 1.19 0 00.51-.48v-1.18H390c-.92 0-1.41.31-1.47.95v.11a.73.73 0 00.24.56 1 1 0 00.65.22zM396.78 723a1.21 1.21 0 00.82-.28.94.94 0 00.33-.74h1.72a2.28 2.28 0 01-.38 1.27 2.57 2.57 0 01-1 .91 3.3 3.3 0 01-1.44.32 3 3 0 01-2.32-.94 3.69 3.69 0 01-.85-2.59v-.12a3.68 3.68 0 01.84-2.53 3 3 0 012.32-.95 2.86 2.86 0 012.06.74 2.56 2.56 0 01.79 1.95h-1.72a1.18 1.18 0 00-.33-.87 1.21 1.21 0 00-1.8.13 2.7 2.7 0 00-.33 1.52v.18a2.77 2.77 0 00.32 1.52 1.14 1.14 0 00.97.48zM403.2 721.59l-.66.66v2.1h-1.84v-9.75h1.84v5.4l.35-.46 1.76-2.06h2.2l-2.48 2.86 2.7 4H405zM411.76 723.65a2.3 2.3 0 01-1.88.83 2.19 2.19 0 01-1.69-.64 2.74 2.74 0 01-.59-1.86v-4.5h1.83v4.44c0 .72.33 1.08 1 1.08a1.33 1.33 0 001.28-.65v-4.87h1.85v6.87h-1.73zM421.1 721a4.12 4.12 0 01-.72 2.54 2.3 2.3 0 01-1.94 1 2.13 2.13 0 01-1.69-.73V727h-1.83v-9.51h1.7l.06.67a2.18 2.18 0 011.74-.8 2.35 2.35 0 012 .94 4.24 4.24 0 01.7 2.59zm-1.83-.14a2.66 2.66 0 00-.34-1.48 1.12 1.12 0 00-1-.53 1.21 1.21 0 00-1.19.67v2.82a1.24 1.24 0 001.2.68q1.33-.02 1.33-2.18zM332.18 735.09a1.39 1.39 0 01.42-1.06 1.49 1.49 0 011.08-.4 1.52 1.52 0 011.09.39 1.39 1.39 0 01.42 1v.27a1.41 1.41 0 01-.41 1 1.54 1.54 0 01-1.09.4 1.5 1.5 0 01-1.09-.4 1.39 1.39 0 01-.42-1.07zM345.27 738.05h-3.34l-.63 1.9h-2l3.45-9.24h1.76l3.46 9.24h-2zm-2.82-1.55h2.31l-1.16-3.5zM354.56 736.58a4.1 4.1 0 01-.72 2.54 2.31 2.31 0 01-1.95 1 2.13 2.13 0 01-1.68-.73v3.24h-1.83v-9.51h1.7l.06.67a2.17 2.17 0 011.74-.79 2.34 2.34 0 012 .93 4.24 4.24 0 01.7 2.59zm-1.83-.14a2.74 2.74 0 00-.34-1.48 1.12 1.12 0 00-1-.53 1.21 1.21 0 00-1.19.67v2.82a1.24 1.24 0 001.2.68q1.33 0 1.33-2.16zM361.88 736.58a4.1 4.1 0 01-.72 2.54 2.31 2.31 0 01-2 1 2.13 2.13 0 01-1.68-.73v3.24h-1.78v-9.51h1.7l.06.67a2.16 2.16 0 011.74-.79 2.32 2.32 0 012 .93 4.24 4.24 0 01.71 2.59zm-1.84-.14a2.66 2.66 0 00-.34-1.48 1.09 1.09 0 00-1-.53 1.21 1.21 0 00-1.19.67v2.82a1.22 1.22 0 001.2.68c.9 0 1.29-.72 1.29-2.16zM365 740h-1.84v-9.8H365zM366.45 731.3a.86.86 0 01.28-.67 1 1 0 01.75-.27 1 1 0 01.75.27.9.9 0 01.28.67.91.91 0 01-.29.69 1 1 0 01-.74.27 1 1 0 01-.75-.27.9.9 0 01-.28-.69zm1.95 8.7h-1.84v-6.87h1.84zM372.77 738.6a1.23 1.23 0 00.82-.28 1 1 0 00.33-.74h1.72a2.34 2.34 0 01-.38 1.28 2.59 2.59 0 01-1 .9 3.23 3.23 0 01-1.43.32 3 3 0 01-2.33-.94 3.74 3.74 0 01-.85-2.59v-.12a3.64 3.64 0 01.85-2.53 2.93 2.93 0 012.31-.94 2.89 2.89 0 012.07.73 2.6 2.6 0 01.79 1.95h-1.72a1.26 1.26 0 00-.33-.87 1.11 1.11 0 00-.84-.34 1.13 1.13 0 00-1 .47 2.8 2.8 0 00-.32 1.52v.19a2.75 2.75 0 00.32 1.52 1.14 1.14 0 00.99.47zM380.67 740a1.89 1.89 0 01-.19-.62 2.2 2.2 0 01-1.73.75 2.43 2.43 0 01-1.67-.59 1.88 1.88 0 01-.66-1.47 1.94 1.94 0 01.8-1.68 4.11 4.11 0 012.34-.59h.85v-.39a1.09 1.09 0 00-.25-.76 1 1 0 00-.77-.29 1.05 1.05 0 00-.72.23.73.73 0 00-.27.61h-1.83a1.83 1.83 0 01.37-1.11 2.44 2.44 0 011-.8 3.83 3.83 0 011.51-.28 3 3 0 012 .63 2.25 2.25 0 01.75 1.8v3a3.2 3.2 0 00.27 1.48v.08zm-1.52-1.28a1.6 1.6 0 00.75-.18 1.19 1.19 0 00.51-.48v-1.18h-.69c-.92 0-1.41.31-1.46.95v.11a.73.73 0 00.24.56.92.92 0 00.65.17zM385.85 731.39v1.69H387v1.35h-1.18v3.43a.79.79 0 00.15.54.73.73 0 00.56.17 2.92 2.92 0 00.54-.05v1.39a3.78 3.78 0 01-1.11.17 1.75 1.75 0 01-2-2v-3.7h-1v-1.35h1v-1.69zM388 731.3a.89.89 0 01.27-.67 1.05 1.05 0 01.76-.27 1 1 0 01.74.27.86.86 0 01.28.67.9.9 0 01-.28.69 1 1 0 01-.74.27 1 1 0 01-.75-.27.9.9 0 01-.28-.69zm2 8.7h-1.84v-6.87H390zM391.21 736.45a4.09 4.09 0 01.39-1.82 2.91 2.91 0 011.14-1.24 3.29 3.29 0 011.71-.43 3.1 3.1 0 012.27.85 3.33 3.33 0 011 2.31v.47a3.57 3.57 0 01-.89 2.53 3 3 0 01-2.36 1 3.1 3.1 0 01-2.37-1 3.67 3.67 0 01-.89-2.59zm1.84.13a2.62 2.62 0 00.36 1.5 1.33 1.33 0 002.1 0 2.82 2.82 0 00.37-1.64 2.54 2.54 0 00-.37-1.49 1.31 1.31 0 00-2.1 0 2.9 2.9 0 00-.36 1.63zM400.54 733.08v.8a2.38 2.38 0 012-.92 2 2 0 011.62.64 2.94 2.94 0 01.55 1.91V740h-1.81v-4.4a1.18 1.18 0 00-.25-.85 1.11 1.11 0 00-.84-.27 1.26 1.26 0 00-1.17.67V740h-1.83v-6.87zM409.85 738.05a.59.59 0 00-.34-.53 3.64 3.64 0 00-1.06-.34c-1.64-.35-2.45-1-2.45-2.09a1.9 1.9 0 01.75-1.52 3.07 3.07 0 012-.61 3.29 3.29 0 012.09.61 1.94 1.94 0 01.78 1.6h-1.83a.89.89 0 00-.26-.65 1.06 1.06 0 00-.79-.26 1.1 1.1 0 00-.72.21.66.66 0 00-.25.53.58.58 0 00.29.5 3.09 3.09 0 001 .32 7.06 7.06 0 011.16.31 1.89 1.89 0 011.45 1.85 1.81 1.81 0 01-.8 1.52 3.56 3.56 0 01-2.09.58 3.73 3.73 0 01-1.53-.31 2.55 2.55 0 01-1-.85 2 2 0 01-.38-1.15h1.74a1 1 0 00.36.75 1.46 1.46 0 00.9.26 1.37 1.37 0 00.8-.2.64.64 0 00.18-.53zM422.24 736.58a4.13 4.13 0 01-.71 2.57 2.32 2.32 0 01-2 .93 2.16 2.16 0 01-1.79-.86l-.08.73h-1.65v-9.75h1.83v3.5a2.08 2.08 0 011.67-.74 2.33 2.33 0 012 .92 4.13 4.13 0 01.72 2.6zm-1.84-.14a2.72 2.72 0 00-.33-1.52 1.09 1.09 0 00-1-.49 1.22 1.22 0 00-1.21.72v2.72a1.23 1.23 0 001.22.73 1.13 1.13 0 001.17-.88 4.54 4.54 0 00.15-1.28zM427.35 740a1.89 1.89 0 01-.19-.62 2.2 2.2 0 01-1.73.75 2.43 2.43 0 01-1.67-.59 1.88 1.88 0 01-.66-1.47 2 2 0 01.81-1.68 4.06 4.06 0 012.33-.59h.85v-.39a1.09 1.09 0 00-.25-.76 1 1 0 00-.77-.29 1.05 1.05 0 00-.72.23.73.73 0 00-.27.61h-1.83a1.83 1.83 0 01.37-1.11 2.44 2.44 0 011-.8 3.83 3.83 0 011.51-.28 3 3 0 012 .63 2.25 2.25 0 01.75 1.8v3a3.2 3.2 0 00.27 1.48v.08zm-1.52-1.28a1.6 1.6 0 00.75-.18 1.19 1.19 0 00.51-.48v-1.18h-.69c-.92 0-1.4.31-1.46.95v.11a.73.73 0 00.24.56.92.92 0 00.65.17zM433.19 738.6a1.24 1.24 0 00.83-.28 1 1 0 00.33-.74h1.72a2.34 2.34 0 01-.38 1.28 2.59 2.59 0 01-1 .9 3.23 3.23 0 01-1.43.32 3 3 0 01-2.33-.94 3.74 3.74 0 01-.85-2.59v-.12a3.64 3.64 0 01.85-2.53 2.93 2.93 0 012.31-.94 2.89 2.89 0 012.07.73 2.6 2.6 0 01.79 1.95h-1.72a1.26 1.26 0 00-.33-.87 1.22 1.22 0 00-1.81.13 2.8 2.8 0 00-.32 1.52v.19a2.75 2.75 0 00.32 1.52 1.12 1.12 0 00.95.47zM439.61 737.2l-.66.66V740h-1.83v-9.8H439v5.4l.36-.45 1.76-2.07h2.2l-2.48 2.86 2.69 4h-2.1zM448.18 739.25a2.32 2.32 0 01-1.88.83 2.16 2.16 0 01-1.69-.64 2.69 2.69 0 01-.59-1.86v-4.5h1.83v4.44c0 .72.33 1.08 1 1.08a1.33 1.33 0 001.28-.65v-4.87H450V740h-1.72zM457.52 736.58a4.1 4.1 0 01-.72 2.54 2.31 2.31 0 01-1.95 1 2.13 2.13 0 01-1.68-.73v3.24h-1.83v-9.51H453l.06.67a2.17 2.17 0 011.74-.79 2.32 2.32 0 012 .93 4.24 4.24 0 01.71 2.59zm-1.84-.14a2.66 2.66 0 00-.34-1.48 1.09 1.09 0 00-1-.53 1.21 1.21 0 00-1.19.67v2.82a1.23 1.23 0 001.2.68c.9 0 1.33-.72 1.33-2.16zM332.18 750.69a1.39 1.39 0 01.42-1.06 1.49 1.49 0 011.08-.4 1.52 1.52 0 011.09.39 1.39 1.39 0 01.42 1v.27a1.42 1.42 0 01-.41 1.05 1.54 1.54 0 01-1.09.4 1.5 1.5 0 01-1.09-.4 1.39 1.39 0 01-.42-1.07zM347.57 755.55h-1.9l-3.67-6.08v6.08h-1.9v-9.24h1.9l3.71 6.09v-6.09h1.9zM352.27 755.68a3.35 3.35 0 01-2.45-.93 3.27 3.27 0 01-.95-2.47v-.18a4.12 4.12 0 01.4-1.85 2.86 2.86 0 011.13-1.25 3.14 3.14 0 011.67-.45 2.86 2.86 0 012.22.89 3.63 3.63 0 01.81 2.52v.75h-4.37a1.69 1.69 0 00.53 1.08 1.64 1.64 0 001.14.41 2 2 0 001.65-.77l.9 1a2.71 2.71 0 01-1.11.91 3.65 3.65 0 01-1.57.34zm-.2-5.65a1.18 1.18 0 00-.89.37 1.88 1.88 0 00-.43 1.06h2.55v-.14a1.38 1.38 0 00-.33-1 1.21 1.21 0 00-.9-.32zM358.34 747v1.69h1.17V750h-1.17v3.43a.85.85 0 00.14.54.75.75 0 00.56.17 2.92 2.92 0 00.54 0v1.39a3.78 3.78 0 01-1.11.17 1.75 1.75 0 01-2-1.95V750h-1v-1.35h1V747zM366.51 753.06l.9-4.38h1.77l-1.75 6.87h-1.54l-1.3-4.32-1.3 4.32h-1.53l-1.76-6.87h1.77l.89 4.37 1.26-4.37h1.33zM369.8 752.05a4.09 4.09 0 01.39-1.82 2.91 2.91 0 011.14-1.24 3.3 3.3 0 011.71-.44 3.11 3.11 0 012.27.86 3.33 3.33 0 011 2.31v.47a3.58 3.58 0 01-.89 2.53 3 3 0 01-2.36 1 3.07 3.07 0 01-2.37-1 3.64 3.64 0 01-.89-2.59zm1.84.13a2.64 2.64 0 00.36 1.5 1.33 1.33 0 002.1 0 2.84 2.84 0 00.37-1.64 2.54 2.54 0 00-.37-1.49 1.31 1.31 0 00-2.1 0 2.9 2.9 0 00-.36 1.63zM381.3 750.4a5.73 5.73 0 00-.66 0 1.35 1.35 0 00-1.37.71v4.49h-1.83v-6.87h1.73l.05.82a1.71 1.71 0 011.53-1 1.79 1.79 0 01.57.09zM384.67 752.79l-.66.67v2.09h-1.83v-9.75H384v5.4l.36-.45 1.76-2.07h2.2l-2.48 2.86 2.7 4h-2.11zM396.08 753.65a.6.6 0 00-.33-.53 3.84 3.84 0 00-1.07-.34c-1.64-.35-2.45-1-2.45-2.09a1.87 1.87 0 01.76-1.52 3 3 0 012-.62 3.29 3.29 0 012.09.62 1.94 1.94 0 01.78 1.6H396a.92.92 0 00-.25-.65 1.1 1.1 0 00-.8-.26 1.06 1.06 0 00-.71.21.67.67 0 00-.26.53.58.58 0 00.29.5 3.09 3.09 0 001 .32 7.06 7.06 0 011.16.31 1.89 1.89 0 011.45 1.85 1.81 1.81 0 01-.8 1.52 3.53 3.53 0 01-2.08.58 3.75 3.75 0 01-1.54-.31 2.69 2.69 0 01-1.05-.85 2 2 0 01-.38-1.15h1.74a1 1 0 00.36.75 1.48 1.48 0 00.9.26 1.37 1.37 0 00.8-.2.64.64 0 00.25-.53zM400.83 749.43a2.32 2.32 0 011.84-.88c1.49 0 2.24.87 2.27 2.6v4.4h-1.84v-4.36a1.27 1.27 0 00-.25-.87 1.09 1.09 0 00-.85-.32 1.25 1.25 0 00-1.17.63v4.89H399v-9.72h1.83zM410.3 755.55a2 2 0 01-.19-.62 2.2 2.2 0 01-1.73.75 2.43 2.43 0 01-1.67-.59 1.88 1.88 0 01-.66-1.47 2 2 0 01.81-1.68 4 4 0 012.33-.59h.81V751a1.09 1.09 0 00-.25-.76 1 1 0 00-.77-.29 1.05 1.05 0 00-.72.23.73.73 0 00-.27.61h-1.79a1.83 1.83 0 01.37-1.11 2.44 2.44 0 011-.8 3.84 3.84 0 011.51-.29 3 3 0 012 .64 2.25 2.25 0 01.75 1.8v3a3.2 3.2 0 00.27 1.48v.11zm-1.52-1.28a1.6 1.6 0 00.75-.18 1.19 1.19 0 00.51-.48v-1.18h-.69c-.92 0-1.4.31-1.46 1v.11a.73.73 0 00.24.56.92.92 0 00.65.17zM417.15 750.4a5.73 5.73 0 00-.66 0 1.35 1.35 0 00-1.37.71v4.49h-1.83v-6.87H415l.05.82a1.71 1.71 0 011.53-1 1.75 1.75 0 01.57.09zM421.07 755.68a3.36 3.36 0 01-2.46-.93 3.31 3.31 0 01-.95-2.47v-.18a4.12 4.12 0 01.4-1.85 2.94 2.94 0 011.14-1.25 3.09 3.09 0 011.67-.45 2.86 2.86 0 012.22.89 3.63 3.63 0 01.81 2.52v.75h-4.38a1.7 1.7 0 00.54 1.08 1.62 1.62 0 001.13.41 2 2 0 001.66-.77l.9 1a2.8 2.8 0 01-1.12.91 3.63 3.63 0 01-1.56.34zm-.21-5.65a1.15 1.15 0 00-.88.37 1.88 1.88 0 00-.44 1.06h2.55v-.14a1.38 1.38 0 00-.33-1 1.19 1.19 0 00-.9-.32zM428.66 753.65a.61.61 0 00-.34-.53 3.72 3.72 0 00-1.07-.34c-1.63-.35-2.45-1-2.45-2.09a1.89 1.89 0 01.76-1.52 3.06 3.06 0 012-.62 3.32 3.32 0 012.1.62 1.94 1.94 0 01.78 1.6h-1.83a.89.89 0 00-.26-.65 1.07 1.07 0 00-.79-.26 1.1 1.1 0 00-.72.21.66.66 0 00-.25.53.56.56 0 00.29.5 3 3 0 001 .32 7.34 7.34 0 011.16.31 1.89 1.89 0 011.45 1.85 1.8 1.8 0 01-.81 1.52 3.51 3.51 0 01-2.08.58 3.7 3.7 0 01-1.53-.31 2.55 2.55 0 01-1-.85 1.89 1.89 0 01-.38-1.15h1.74a.94.94 0 00.36.75 1.44 1.44 0 00.9.26 1.37 1.37 0 00.8-.2.64.64 0 00.17-.53zM441.05 752.18a4.13 4.13 0 01-.71 2.57 2.32 2.32 0 01-2 .93 2.16 2.16 0 01-1.78-.86l-.08.73h-1.65v-9.75h1.83v3.5a2.09 2.09 0 011.67-.75 2.33 2.33 0 012 .93 4.13 4.13 0 01.72 2.6zm-1.84-.14a2.76 2.76 0 00-.33-1.53 1.12 1.12 0 00-1-.48 1.21 1.21 0 00-1.21.72v2.72a1.23 1.23 0 001.22.73 1.14 1.14 0 001.17-.88 4.54 4.54 0 00.15-1.32zM446.16 755.55a2 2 0 01-.19-.62 2.2 2.2 0 01-1.73.75 2.43 2.43 0 01-1.67-.59 1.86 1.86 0 01-.67-1.47 2 2 0 01.81-1.68 4 4 0 012.34-.59h.85V751a1.14 1.14 0 00-.25-.76 1 1 0 00-.77-.29 1.1 1.1 0 00-.73.23.76.76 0 00-.26.61h-1.83a1.89 1.89 0 01.36-1.11 2.57 2.57 0 011-.8 3.89 3.89 0 011.52-.29 3 3 0 012 .64 2.25 2.25 0 01.75 1.8v3a3.2 3.2 0 00.27 1.48v.11zm-1.52-1.28a1.6 1.6 0 00.75-.18 1.19 1.19 0 00.51-.48v-1.18h-.69c-.92 0-1.41.31-1.47 1v.11a.73.73 0 00.24.56.92.92 0 00.66.17zM452 754.2a1.24 1.24 0 00.83-.28 1 1 0 00.33-.74h1.72a2.34 2.34 0 01-.38 1.28 2.59 2.59 0 01-1 .9 3.23 3.23 0 01-1.43.32 3 3 0 01-2.33-.94 3.69 3.69 0 01-.85-2.59V752a3.64 3.64 0 01.85-2.53 2.94 2.94 0 012.31-1 2.9 2.9 0 012.07.74 2.6 2.6 0 01.79 2h-1.72a1.26 1.26 0 00-.33-.87 1.22 1.22 0 00-1.81.13 2.71 2.71 0 00-.32 1.52v.19a2.69 2.69 0 00.32 1.52 1.12 1.12 0 00.95.5zM458.42 752.79l-.66.67v2.09h-1.83v-9.75h1.83v5.4l.36-.45 1.75-2.07h2.21l-2.49 2.86 2.7 4h-2.1zM467 754.85a2.3 2.3 0 01-1.88.83 2.18 2.18 0 01-1.68-.64 2.64 2.64 0 01-.59-1.86v-4.5h1.83v4.44c0 .72.33 1.08 1 1.08a1.33 1.33 0 001.28-.65v-4.87h1.84v6.87H467zM476.33 752.18a4.12 4.12 0 01-.72 2.54 2.31 2.31 0 01-1.95 1A2.13 2.13 0 01472 755v3.24h-1.83v-9.51h1.7l.06.67a2.15 2.15 0 011.74-.8 2.33 2.33 0 012 .94 4.24 4.24 0 01.71 2.59zm-1.84-.14a2.66 2.66 0 00-.34-1.48 1.09 1.09 0 00-1-.53 1.2 1.2 0 00-1.19.67v2.82a1.22 1.22 0 001.2.68c.9 0 1.33-.72 1.33-2.2zM332.18 766.29a1.39 1.39 0 01.42-1.06 1.49 1.49 0 011.08-.4 1.52 1.52 0 011.09.39 1.39 1.39 0 01.42 1v.28a1.42 1.42 0 01-.41 1.05 1.69 1.69 0 01-2.18 0 1.39 1.39 0 01-.42-1.07zM340.06 771.15v-9.24h3.23a4.23 4.23 0 012.55.64 2.21 2.21 0 01.87 1.89 2 2 0 01-1.32 2 1.87 1.87 0 011.12.71 2.08 2.08 0 01.41 1.32 2.44 2.44 0 01-.85 2 3.79 3.79 0 01-2.42.7zm1.9-5.37h1.41c1 0 1.44-.4 1.44-1.15a1.05 1.05 0 00-.36-.9 1.91 1.91 0 00-1.16-.28H342zm0 1.35v2.49h1.63a1.59 1.59 0 001.05-.32 1.12 1.12 0 00.38-.89 1.16 1.16 0 00-1.31-1.28zM352.21 771.15a2.29 2.29 0 01-.18-.62 2.22 2.22 0 01-1.74.75 2.43 2.43 0 01-1.67-.59 1.88 1.88 0 01-.66-1.47 2 2 0 01.81-1.68 4 4 0 012.34-.59h.89v-.39a1.14 1.14 0 00-.24-.76 1 1 0 00-.77-.29 1.08 1.08 0 00-.73.23.72.72 0 00-.26.6h-1.84a1.82 1.82 0 01.37-1.1 2.44 2.44 0 011-.8 3.84 3.84 0 011.51-.29 3 3 0 012 .64 2.26 2.26 0 01.74 1.79v3a3.48 3.48 0 00.27 1.48v.11zm-1.52-1.28a1.57 1.57 0 00.75-.18 1.19 1.19 0 00.51-.48V768h-.68c-.92 0-1.41.31-1.47 1v.11a.73.73 0 00.24.56.94.94 0 00.65.2zM358.06 769.8a1.21 1.21 0 00.82-.28 1 1 0 00.33-.74h1.72a2.28 2.28 0 01-.38 1.27 2.57 2.57 0 01-1 .91 3.3 3.3 0 01-1.44.32 3 3 0 01-2.32-.94 3.69 3.69 0 01-.85-2.59v-.12a3.68 3.68 0 01.84-2.53 2.94 2.94 0 012.32-1 2.87 2.87 0 012.06.74 2.6 2.6 0 01.79 2h-1.72a1.26 1.26 0 00-.33-.87 1.11 1.11 0 00-.84-.34 1.1 1.1 0 00-1 .47 2.7 2.7 0 00-.33 1.52v.19a2.77 2.77 0 00.32 1.52 1.14 1.14 0 001.01.47zM364.48 768.39l-.67.66v2.1H362v-9.75h1.83v5.4l.36-.46 1.76-2.06h2.2l-2.48 2.86 2.7 4h-2.11zM373 770.45a2.3 2.3 0 01-1.88.83 2.19 2.19 0 01-1.69-.64 2.74 2.74 0 01-.59-1.86v-4.5h1.83v4.44c0 .72.33 1.08 1 1.08a1.33 1.33 0 001.28-.65v-4.87h1.85v6.87h-1.73zM382.38 767.78a4.12 4.12 0 01-.72 2.54 2.3 2.3 0 01-1.94 1 2.13 2.13 0 01-1.69-.73v3.24h-1.83v-9.51h1.7l.06.67a2.18 2.18 0 011.74-.8 2.35 2.35 0 012 .94 4.24 4.24 0 01.7 2.59zm-1.83-.14a2.74 2.74 0 00-.34-1.48 1.12 1.12 0 00-1-.53 1.21 1.21 0 00-1.19.67v2.82a1.24 1.24 0 001.2.68q1.33 0 1.33-2.16zM389 762.59v1.69h1.18v1.35H389v3.42a.8.8 0 00.15.55.73.73 0 00.56.17 2.92 2.92 0 00.54 0v1.39a3.8 3.8 0 01-1.12.17 1.75 1.75 0 01-2-1.95v-3.7h-1v-1.35h1v-1.69zM390.67 767.65a4 4 0 01.4-1.82 2.89 2.89 0 011.13-1.24 3.31 3.31 0 011.72-.44 3.14 3.14 0 012.26.85 3.43 3.43 0 011 2.32v.47a3.62 3.62 0 01-.88 2.53 3.41 3.41 0 01-4.74 0 3.64 3.64 0 01-.89-2.59zm1.84.13a2.64 2.64 0 00.36 1.5 1.33 1.33 0 002.1 0 2.84 2.84 0 00.37-1.64 2.54 2.54 0 00-.37-1.49 1.31 1.31 0 00-2.1 0 2.9 2.9 0 00-.36 1.63zM404.4 769.8a1.24 1.24 0 00.83-.28 1 1 0 00.33-.74h1.72a2.36 2.36 0 01-.38 1.27 2.6 2.6 0 01-1 .91 3.24 3.24 0 01-1.44.32 3 3 0 01-2.32-.94 3.69 3.69 0 01-.85-2.59v-.12a3.68 3.68 0 01.84-2.53 3 3 0 012.32-1 2.9 2.9 0 012.07.74 2.6 2.6 0 01.79 2h-1.72a1.26 1.26 0 00-.33-.87 1.22 1.22 0 00-1.81.13 2.7 2.7 0 00-.33 1.52v.19a2.67 2.67 0 00.33 1.52 1.11 1.11 0 00.95.47zM410.26 771.15h-1.84v-9.75h1.84zM411.49 767.65a4.09 4.09 0 01.39-1.82 2.89 2.89 0 011.13-1.24 3.36 3.36 0 011.72-.44 3.16 3.16 0 012.27.85 3.47 3.47 0 011 2.32v.47a3.58 3.58 0 01-.88 2.53 3.41 3.41 0 01-4.74 0 3.63 3.63 0 01-.88-2.59zm1.83.13a2.56 2.56 0 00.37 1.5 1.32 1.32 0 002.09 0 2.83 2.83 0 00.38-1.64 2.54 2.54 0 00-.38-1.49 1.22 1.22 0 00-1-.53 1.19 1.19 0 00-1 .53 2.81 2.81 0 00-.46 1.63zM423.24 770.45a2.32 2.32 0 01-1.88.83 2.19 2.19 0 01-1.69-.64 2.69 2.69 0 01-.59-1.86v-4.5h1.83v4.44c0 .72.33 1.08 1 1.08a1.33 1.33 0 001.28-.65v-4.87H425v6.87h-1.72zM426.11 767.67a4.12 4.12 0 01.72-2.56 2.33 2.33 0 012-1 2.11 2.11 0 011.66.75v-3.5h1.84v9.75h-1.66l-.09-.73a2.15 2.15 0 01-1.76.86 2.33 2.33 0 01-2-1 4.32 4.32 0 01-.71-2.57zm1.84.12a2.77 2.77 0 00.33 1.49 1.09 1.09 0 001 .52 1.22 1.22 0 001.2-.72v-2.73a1.22 1.22 0 00-1.19-.72q-1.29 0-1.29 2.16zM440.68 769.25a.6.6 0 00-.33-.53 3.84 3.84 0 00-1.07-.34c-1.64-.35-2.45-1-2.45-2.09a1.87 1.87 0 01.75-1.52 3.07 3.07 0 012-.62 3.29 3.29 0 012.09.62 1.94 1.94 0 01.78 1.6h-1.83a.92.92 0 00-.25-.65 1.35 1.35 0 00-1.52-.05.69.69 0 00-.25.53.58.58 0 00.29.5 3.09 3.09 0 001 .32 7.06 7.06 0 011.16.31 1.89 1.89 0 011.45 1.84 1.82 1.82 0 01-.8 1.53 3.55 3.55 0 01-2.08.58A3.75 3.75 0 01438 771a2.69 2.69 0 01-1.05-.85 2 2 0 01-.38-1.15h1.74a1 1 0 00.36.74 1.42 1.42 0 00.9.27 1.37 1.37 0 00.8-.2.64.64 0 00.31-.56zM445.84 762.59v1.69H447v1.35h-1.17v3.42a.8.8 0 00.15.55.71.71 0 00.55.17 2.76 2.76 0 00.54 0v1.39a3.78 3.78 0 01-1.11.17 1.76 1.76 0 01-2-1.95v-3.7h-1v-1.35h1v-1.69zM447.56 767.65a4.09 4.09 0 01.39-1.82 2.91 2.91 0 011.14-1.24 3.3 3.3 0 011.71-.44 3.14 3.14 0 012.27.85 3.38 3.38 0 011 2.32v.47a3.58 3.58 0 01-.89 2.53 3 3 0 01-2.36 1 3.07 3.07 0 01-2.37-1 3.59 3.59 0 01-.89-2.59zm1.83.13a2.63 2.63 0 00.37 1.5 1.33 1.33 0 002.1 0 2.84 2.84 0 00.37-1.64 2.54 2.54 0 00-.37-1.49 1.23 1.23 0 00-1.06-.53 1.2 1.2 0 00-1 .53 2.89 2.89 0 00-.41 1.63zM459.06 766a5.9 5.9 0 00-.66 0 1.35 1.35 0 00-1.37.71v4.49h-1.83v-6.87h1.73l.05.82a1.71 1.71 0 011.53-1 1.79 1.79 0 01.57.09zM463.73 771.15a2 2 0 01-.19-.62 2.2 2.2 0 01-1.73.75 2.43 2.43 0 01-1.67-.59 1.86 1.86 0 01-.67-1.47 2 2 0 01.81-1.68 4 4 0 012.34-.59h.85v-.39a1.14 1.14 0 00-.25-.76 1 1 0 00-.77-.29 1.1 1.1 0 00-.73.23.75.75 0 00-.26.6h-1.83a1.88 1.88 0 01.36-1.1 2.54 2.54 0 011.05-.8 3.8 3.8 0 011.51-.29 3 3 0 012 .64 2.24 2.24 0 01.75 1.79v3a3.2 3.2 0 00.27 1.48v.11zm-1.52-1.28a1.6 1.6 0 00.75-.18 1.19 1.19 0 00.51-.48V768h-.69c-.92 0-1.41.31-1.47 1v.11a.73.73 0 00.24.56.92.92 0 00.66.2zM466.45 767.67a4 4 0 01.75-2.55 2.45 2.45 0 012-1 2.14 2.14 0 011.76.78l.08-.65h1.66v6.64a3 3 0 01-.41 1.57 2.63 2.63 0 01-1.15 1 4 4 0 01-1.74.35 3.72 3.72 0 01-1.47-.3 2.62 2.62 0 01-1.09-.78l.81-1.11a2.15 2.15 0 001.66.76 1.62 1.62 0 001.14-.38 1.49 1.49 0 00.41-1.11v-.37a2.13 2.13 0 01-1.67.72 2.44 2.44 0 01-2-1 4 4 0 01-.77-2.57zm1.84.12a2.5 2.5 0 00.37 1.47 1.18 1.18 0 001 .54 1.27 1.27 0 001.2-.63v-2.91a1.28 1.28 0 00-1.19-.63 1.2 1.2 0 00-1 .55 2.84 2.84 0 00-.38 1.61zM477.3 771.28a3.36 3.36 0 01-2.46-.93 3.31 3.31 0 01-.95-2.47v-.18a4.12 4.12 0 01.4-1.85 2.92 2.92 0 011.13-1.25 3.14 3.14 0 011.67-.45 2.86 2.86 0 012.22.89 3.63 3.63 0 01.81 2.52v.75h-4.37a1.7 1.7 0 00.54 1.08 1.6 1.6 0 001.13.41 2 2 0 001.66-.77l.9 1a2.8 2.8 0 01-1.12.91 3.63 3.63 0 01-1.56.34zm-.21-5.65a1.18 1.18 0 00-.89.37 2 2 0 00-.43 1.06h2.55v-.14a1.38 1.38 0 00-.32-.92 1.19 1.19 0 00-.91-.37zM332.18 781.89a1.39 1.39 0 01.42-1.06 1.49 1.49 0 011.08-.4 1.52 1.52 0 011.09.39 1.39 1.39 0 01.42 1v.27a1.41 1.41 0 01-.41 1 1.54 1.54 0 01-1.09.4 1.5 1.5 0 01-1.09-.4 1.39 1.39 0 01-.42-1.07zM340.06 786.75v-9.24h3.23a4.23 4.23 0 012.55.64 2.21 2.21 0 01.87 1.89 2 2 0 01-1.32 2 1.87 1.87 0 011.12.71 2.08 2.08 0 01.41 1.32 2.44 2.44 0 01-.85 2 3.79 3.79 0 01-2.42.7zm1.9-5.37h1.41c1 0 1.44-.4 1.44-1.15a1.05 1.05 0 00-.36-.9 1.91 1.91 0 00-1.16-.28H342zm0 1.35v2.49h1.63a1.59 1.59 0 001.05-.32 1.11 1.11 0 00.36-.9 1.16 1.16 0 00-1.31-1.28zM352.21 786.75a2.29 2.29 0 01-.18-.62 2.22 2.22 0 01-1.74.75 2.43 2.43 0 01-1.67-.59 1.88 1.88 0 01-.66-1.47 2 2 0 01.81-1.68 4 4 0 012.34-.59h.89v-.39a1.14 1.14 0 00-.24-.76 1 1 0 00-.77-.29 1.08 1.08 0 00-.73.23.73.73 0 00-.26.61h-1.84a1.83 1.83 0 01.37-1.11 2.44 2.44 0 011-.8 3.84 3.84 0 011.51-.29 3 3 0 012 .64 2.27 2.27 0 01.74 1.8v3a3.48 3.48 0 00.27 1.48v.11zm-1.52-1.28a1.57 1.57 0 00.75-.18 1.19 1.19 0 00.51-.48v-1.18h-.68c-.92 0-1.41.31-1.47 1v.11a.73.73 0 00.24.56.94.94 0 00.65.17zM358.06 785.4a1.21 1.21 0 00.82-.28 1 1 0 00.33-.74h1.72a2.34 2.34 0 01-.38 1.28 2.62 2.62 0 01-1 .9 3.3 3.3 0 01-1.44.32 3 3 0 01-2.32-.94 3.69 3.69 0 01-.85-2.59v-.12a3.68 3.68 0 01.84-2.53 2.94 2.94 0 012.32-1 2.87 2.87 0 012.06.74 2.6 2.6 0 01.79 2h-1.72a1.26 1.26 0 00-.33-.87 1.11 1.11 0 00-.84-.34 1.1 1.1 0 00-1 .47 2.7 2.7 0 00-.33 1.52v.19a2.75 2.75 0 00.32 1.52 1.14 1.14 0 001.01.47zM364.48 784l-.67.66v2.09H362V777h1.83v5.4l.36-.45 1.76-2.07h2.2l-2.48 2.86 2.7 4h-2.11zM373 786.05a2.3 2.3 0 01-1.88.83 2.16 2.16 0 01-1.69-.64 2.74 2.74 0 01-.59-1.86v-4.5h1.83v4.44c0 .72.33 1.08 1 1.08a1.33 1.33 0 001.28-.65v-4.87h1.85v6.87h-1.73zM382.38 783.38a4.1 4.1 0 01-.72 2.54 2.3 2.3 0 01-1.94 1 2.13 2.13 0 01-1.69-.73v3.24h-1.83v-9.51h1.7l.06.67a2.18 2.18 0 011.74-.8 2.35 2.35 0 012 .94 4.24 4.24 0 01.7 2.59zm-1.83-.14a2.74 2.74 0 00-.34-1.48 1.12 1.12 0 00-1-.53 1.22 1.22 0 00-1.19.67v2.82a1.24 1.24 0 001.2.68q1.33 0 1.33-2.16zM389 778.19v1.69h1.18v1.35H389v3.43a.79.79 0 00.15.54.73.73 0 00.56.17 2.92 2.92 0 00.54 0v1.39a3.8 3.8 0 01-1.12.17 1.75 1.75 0 01-2-2v-3.7h-1v-1.35h1v-1.69zM390.67 783.25a4 4 0 01.4-1.82 2.89 2.89 0 011.13-1.24 3.31 3.31 0 011.72-.44 3.1 3.1 0 012.26.86 3.38 3.38 0 011 2.31v.47a3.61 3.61 0 01-.88 2.53 3.41 3.41 0 01-4.74 0 3.64 3.64 0 01-.89-2.59zm1.84.13a2.62 2.62 0 00.36 1.5 1.33 1.33 0 002.1 0 2.84 2.84 0 00.37-1.64 2.54 2.54 0 00-.37-1.49 1.31 1.31 0 00-2.1 0 2.9 2.9 0 00-.36 1.63zM403.48 786.75h-1.84V777h1.84zM404.71 783.25a4.09 4.09 0 01.39-1.82 2.89 2.89 0 011.13-1.24 3.36 3.36 0 011.72-.44 3.12 3.12 0 012.27.86 3.38 3.38 0 011 2.31v.47a3.56 3.56 0 01-.88 2.53 3.41 3.41 0 01-4.74 0 3.63 3.63 0 01-.88-2.59zm1.83.13a2.54 2.54 0 00.37 1.5 1.32 1.32 0 002.09 0 2.83 2.83 0 00.38-1.64 2.54 2.54 0 00-.38-1.49 1.22 1.22 0 00-1.05-.53 1.2 1.2 0 00-1 .53 2.81 2.81 0 00-.41 1.63zM415.2 785.4a1.21 1.21 0 00.82-.28.94.94 0 00.33-.74h1.72a2.34 2.34 0 01-.38 1.28 2.62 2.62 0 01-1 .9 3.3 3.3 0 01-1.44.32 3 3 0 01-2.32-.94 3.69 3.69 0 01-.85-2.59v-.12a3.68 3.68 0 01.84-2.53 3 3 0 012.32-1 2.86 2.86 0 012.06.74 2.56 2.56 0 01.79 2h-1.72a1.18 1.18 0 00-.33-.87 1.21 1.21 0 00-1.8.13 2.7 2.7 0 00-.33 1.52v.19a2.75 2.75 0 00.32 1.52 1.14 1.14 0 00.97.47zM423.1 786.75a2.29 2.29 0 01-.18-.62 2.22 2.22 0 01-1.74.75 2.43 2.43 0 01-1.67-.59 1.88 1.88 0 01-.66-1.47 2 2 0 01.81-1.68 4 4 0 012.34-.59h.84v-.39a1.14 1.14 0 00-.24-.76 1 1 0 00-.77-.29 1.08 1.08 0 00-.73.23.73.73 0 00-.27.61H419a1.83 1.83 0 01.37-1.11 2.44 2.44 0 011-.8 3.84 3.84 0 011.51-.29 3 3 0 012 .64 2.27 2.27 0 01.74 1.8v3a3.32 3.32 0 00.28 1.48v.11zm-1.52-1.28a1.57 1.57 0 00.75-.18 1.19 1.19 0 00.51-.48v-1.18h-.68c-.92 0-1.41.31-1.47 1v.11a.73.73 0 00.24.56.94.94 0 00.65.17zM428 786.75h-1.84V777H428zM436.5 784.85a.61.61 0 00-.34-.53 3.72 3.72 0 00-1.07-.34c-1.63-.35-2.45-1-2.45-2.09a1.91 1.91 0 01.76-1.52 3.06 3.06 0 012-.62 3.32 3.32 0 012.1.62 1.94 1.94 0 01.78 1.6h-1.83a.89.89 0 00-.26-.65 1.07 1.07 0 00-.79-.26 1.1 1.1 0 00-.72.21.66.66 0 00-.25.53.56.56 0 00.29.5 3 3 0 001 .32 7.34 7.34 0 011.16.31 1.9 1.9 0 011.45 1.85 1.8 1.8 0 01-.81 1.52 3.51 3.51 0 01-2.08.58 3.7 3.7 0 01-1.53-.31 2.55 2.55 0 01-1.05-.85 1.89 1.89 0 01-.38-1.15h1.74a.94.94 0 00.36.75 1.44 1.44 0 00.9.26 1.37 1.37 0 00.8-.2.64.64 0 00.22-.53zM441.66 778.19v1.69h1.17v1.35h-1.17v3.43a.79.79 0 00.14.54.73.73 0 00.56.17 2.92 2.92 0 00.54 0v1.39a3.78 3.78 0 01-1.11.17 1.75 1.75 0 01-2-2v-3.7h-1v-1.35h1v-1.69zM443.38 783.25a4.09 4.09 0 01.39-1.82 2.89 2.89 0 011.13-1.24 3.36 3.36 0 011.72-.44 3.12 3.12 0 012.27.86 3.38 3.38 0 011 2.31v.47a3.56 3.56 0 01-.88 2.53 3.41 3.41 0 01-4.74 0 3.63 3.63 0 01-.88-2.59zm1.83.13a2.54 2.54 0 00.37 1.5 1.32 1.32 0 002.09 0 2.83 2.83 0 00.38-1.64 2.54 2.54 0 00-.38-1.49 1.22 1.22 0 00-1.05-.53 1.2 1.2 0 00-1 .53 2.81 2.81 0 00-.41 1.63zM454.87 781.6a5.73 5.73 0 00-.66-.05 1.34 1.34 0 00-1.36.71v4.49H451v-6.87h1.74l.05.82a1.69 1.69 0 011.53-1 1.79 1.79 0 01.57.09zM459.54 786.75a2.29 2.29 0 01-.18-.62 2.2 2.2 0 01-1.73.75 2.46 2.46 0 01-1.68-.59 1.88 1.88 0 01-.66-1.47 2 2 0 01.81-1.68 4 4 0 012.34-.59h.84v-.39a1.14 1.14 0 00-.24-.76 1 1 0 00-.77-.29 1.1 1.1 0 00-.73.23.76.76 0 00-.26.61h-1.84a1.9 1.9 0 01.37-1.11 2.5 2.5 0 011-.8 3.84 3.84 0 011.51-.29 3 3 0 012 .64 2.25 2.25 0 01.75 1.8v3a3.2 3.2 0 00.27 1.48v.11zm-1.54-1.28a1.6 1.6 0 00.75-.18 1.22 1.22 0 00.5-.48v-1.18h-.68c-.92 0-1.41.31-1.47 1v.11a.73.73 0 00.24.56.92.92 0 00.66.17zM462.27 783.27a4 4 0 01.75-2.55 2.45 2.45 0 012-1 2.14 2.14 0 011.76.78l.07-.65h1.66v6.64a3 3 0 01-.4 1.57 2.75 2.75 0 01-1.16 1 4.06 4.06 0 01-1.74.34 3.79 3.79 0 01-1.47-.3 2.59 2.59 0 01-1.08-.77l.81-1.12a2.16 2.16 0 001.66.77 1.58 1.58 0 001.14-.39 1.47 1.47 0 00.4-1.11v-.37a2.11 2.11 0 01-1.67.72 2.45 2.45 0 01-2-1 4 4 0 01-.76-2.57zm1.83.13a2.54 2.54 0 00.38 1.47 1.19 1.19 0 001 .53 1.27 1.27 0 001.2-.63v-2.9a1.25 1.25 0 00-1.18-.64 1.21 1.21 0 00-1 .55 2.85 2.85 0 00-.4 1.62zM473.11 786.88a3.35 3.35 0 01-2.45-.93 3.27 3.27 0 01-1-2.47v-.18a4.12 4.12 0 01.4-1.85 2.86 2.86 0 011.13-1.25 3.14 3.14 0 011.67-.45 2.86 2.86 0 012.22.89 3.63 3.63 0 01.81 2.52v.75h-4.37a1.69 1.69 0 00.53 1.08 1.64 1.64 0 001.14.41 2 2 0 001.65-.77l.9 1a2.71 2.71 0 01-1.11.91 3.65 3.65 0 01-1.52.34zm-.2-5.65a1.18 1.18 0 00-.89.37 2 2 0 00-.44 1.06h2.56v-.14a1.38 1.38 0 00-.33-.95 1.22 1.22 0 00-.9-.34z"
              />
              <path
                className="prefix__cls-59"
                d="M381 824.35v-10h3.07a4.57 4.57 0 012.34.59 4.1 4.1 0 011.62 1.68 5.16 5.16 0 01.58 2.48v.46a5.19 5.19 0 01-.57 2.46 4.14 4.14 0 01-1.61 1.68 4.58 4.58 0 01-2.34.6zm2-8.29v6.64h1a2.22 2.22 0 001.84-.78 3.55 3.55 0 00.65-2.25v-.53a3.6 3.6 0 00-.63-2.3 2.21 2.21 0 00-1.83-.78zM392.32 824.35h-2.05v-10h2.05zM399.38 821.74a1 1 0 00-.41-.89 5.18 5.18 0 00-1.47-.66 10.64 10.64 0 01-1.69-.68 2.76 2.76 0 01-1.7-2.47 2.38 2.38 0 01.46-1.44 2.92 2.92 0 011.3-1 4.89 4.89 0 011.91-.36 4.39 4.39 0 011.9.39 3 3 0 011.3 1.09 2.83 2.83 0 01.46 1.6h-2.05a1.35 1.35 0 00-.43-1.07 1.79 1.79 0 00-1.21-.38 1.91 1.91 0 00-1.17.32 1 1 0 00-.42.84 1 1 0 00.49.81 5.54 5.54 0 001.44.62 6.16 6.16 0 012.55 1.3 2.62 2.62 0 01.8 2 2.37 2.37 0 01-1 2 4.26 4.26 0 01-2.63.74 5.1 5.1 0 01-2.09-.42 3.35 3.35 0 01-1.44-1.15 3 3 0 01-.49-1.7h2.05c0 1.1.66 1.65 2 1.65a1.89 1.89 0 001.14-.3 1 1 0 00.4-.84zM408.45 822.3h-3.6l-.68 2.05H402l3.7-10h1.9l3.73 10h-2.18zm-3-1.66h2.48l-1.25-3.73zM417.41 821.74a1 1 0 00-.41-.89 5.28 5.28 0 00-1.48-.66 11.05 11.05 0 01-1.69-.68 2.75 2.75 0 01-1.69-2.47 2.44 2.44 0 01.45-1.44 3 3 0 011.31-1 4.85 4.85 0 011.91-.36 4.45 4.45 0 011.9.39 3 3 0 011.3 1.09 2.91 2.91 0 01.46 1.6h-2.05a1.38 1.38 0 00-.43-1.07 1.79 1.79 0 00-1.21-.38 1.89 1.89 0 00-1.17.32 1 1 0 00-.42.84 1 1 0 00.49.81 5.25 5.25 0 001.44.62 6.29 6.29 0 012.55 1.3 2.62 2.62 0 01.8 2 2.39 2.39 0 01-1 2 4.28 4.28 0 01-2.63.74 5.07 5.07 0 01-2.09-.42 3.35 3.35 0 01-1.44-1.15 3 3 0 01-.5-1.7h2.06c0 1.1.66 1.65 2 1.65a1.89 1.89 0 001.14-.3 1 1 0 00.4-.84zM428.35 816.06h-3.05v8.29h-2.05v-8.29h-3v-1.66h8.11zM435.5 820h-3.93v2.68h4.62v1.65h-6.67v-10h6.65v1.66h-4.6v2.37h3.93zM441.08 820.71h-1.64v3.64h-2.05v-10h3.7a4.2 4.2 0 012.72.78 2.73 2.73 0 011 2.23 3.08 3.08 0 01-.44 1.69 3 3 0 01-1.34 1.09l2.15 4.06v.1h-2.2zm-1.64-1.66h1.66a1.65 1.65 0 001.19-.4 1.37 1.37 0 00.43-1.08 1.54 1.54 0 00-.4-1.11 1.67 1.67 0 00-1.23-.4h-1.65zM453.5 820.71h-1.64v3.64h-2.05v-10h3.7a4.2 4.2 0 012.72.78 2.73 2.73 0 011 2.23 3.08 3.08 0 01-.44 1.69 3 3 0 01-1.34 1.09l2.15 4.06v.1h-2.2zm-1.64-1.66h1.66a1.65 1.65 0 001.19-.4 1.37 1.37 0 00.43-1.08 1.54 1.54 0 00-.4-1.11 1.67 1.67 0 00-1.23-.4h-1.65zM464.74 820h-3.94v2.68h4.62v1.65h-6.67v-10h6.66v1.66h-4.61v2.37h3.94zM474.44 821a3.52 3.52 0 01-1.19 2.52 4.13 4.13 0 01-2.82.93 3.73 3.73 0 01-3-1.29 5.3 5.3 0 01-1.1-3.54v-.61a6 6 0 01.51-2.53 3.83 3.83 0 011.44-1.68 4.16 4.16 0 012.19-.58 4.06 4.06 0 012.77.92 3.81 3.81 0 011.22 2.59h-2.06a2.05 2.05 0 00-.54-1.39 2 2 0 00-1.4-.44 1.75 1.75 0 00-1.54.74 4.13 4.13 0 00-.52 2.28v.75a4.39 4.39 0 00.49 2.36 1.71 1.71 0 001.54.74 2 2 0 001.42-.43 2 2 0 00.53-1.34zM484 819.6a6 6 0 01-.52 2.58 4 4 0 01-1.49 1.71 4.37 4.37 0 01-4.42 0 3.92 3.92 0 01-1.51-1.7 6 6 0 01-.54-2.54v-.49a6 6 0 01.53-2.58 3.89 3.89 0 011.5-1.72 4.37 4.37 0 014.42 0 3.89 3.89 0 011.5 1.72 6 6 0 01.53 2.58zm-2.08-.45a4.2 4.2 0 00-.56-2.38 1.83 1.83 0 00-1.6-.81 1.8 1.8 0 00-1.59.8 4 4 0 00-.57 2.35v.49a4.24 4.24 0 00.56 2.36 2 2 0 003.2 0 4.19 4.19 0 00.56-2.37zM489 821.88l2.25-7.48h2.28l-3.46 10h-2.14l-3.45-10h2.27zM500.44 820h-3.94v2.68h4.62v1.65h-6.67v-10h6.66v1.66h-4.61v2.37h3.94zM506 820.71h-1.63v3.64h-2.05v-10H506a4.23 4.23 0 012.73.78 2.75 2.75 0 01.95 2.23 3.08 3.08 0 01-.44 1.69 3 3 0 01-1.34 1.09l2.16 4.06v.1h-2.2zm-1.63-1.66H506a1.66 1.66 0 001.2-.4 1.4 1.4 0 00.42-1.08 1.5 1.5 0 00-.4-1.11 1.66 1.66 0 00-1.23-.4h-1.64zM514.36 818.88l2.08-4.48h2.24l-3.27 6.34v3.61h-2.08v-3.61l-3.27-6.34h2.25z"
              />
              <path
                className="prefix__cls-48"
                d="M381 850.69a1.39 1.39 0 01.42-1.06 1.69 1.69 0 012.17 0 1.4 1.4 0 01.43 1v.27a1.36 1.36 0 01-.42 1.05 1.5 1.5 0 01-1.09.4 1.51 1.51 0 01-1.09-.4 1.39 1.39 0 01-.42-1.07zM395.46 847.85h-2.83v7.7h-1.9v-7.7h-2.79v-1.54h7.52zM399 855.68a3.36 3.36 0 01-2.46-.93 3.27 3.27 0 01-.95-2.47v-.18a4.12 4.12 0 01.4-1.85 2.86 2.86 0 011.13-1.25 3.14 3.14 0 011.67-.44 2.86 2.86 0 012.22.88 3.63 3.63 0 01.81 2.52v.75h-4.37a1.69 1.69 0 00.53 1.08 1.64 1.64 0 001.14.41 2 2 0 001.65-.77l.9 1a2.71 2.71 0 01-1.11.91 3.63 3.63 0 01-1.56.34zm-.21-5.64a1.17 1.17 0 00-.89.36 1.88 1.88 0 00-.43 1.06h2.55v-.14a1.38 1.38 0 00-.33-1 1.19 1.19 0 00-.87-.32zM406.61 853.65a.6.6 0 00-.33-.53 3.72 3.72 0 00-1.07-.34c-1.63-.35-2.45-1-2.45-2.08a1.88 1.88 0 01.76-1.53 3 3 0 012-.61 3.29 3.29 0 012.09.61 2 2 0 01.79 1.6h-1.84a.88.88 0 00-.25-.65 1.33 1.33 0 00-1.51 0 .67.67 0 00-.26.54.58.58 0 00.29.49 3.07 3.07 0 001 .32 8.44 8.44 0 011.15.31 1.9 1.9 0 011.46 1.85 1.8 1.8 0 01-.81 1.52 3.53 3.53 0 01-2.08.58 3.59 3.59 0 01-1.54-.31 2.67 2.67 0 01-1.05-.84 2 2 0 01-.38-1.16h1.74a1 1 0 00.36.75 1.48 1.48 0 00.9.26 1.35 1.35 0 00.8-.2.64.64 0 00.23-.58zM411.77 847v1.69H413V850h-1.18v3.43a.79.79 0 00.15.54.73.73 0 00.56.17 2.92 2.92 0 00.54 0v1.39a3.78 3.78 0 01-1.11.17 1.75 1.75 0 01-2-1.95V850h-1v-1.35h1V847zM417.71 855.55V850h-1v-1.35h1v-.58a2.36 2.36 0 01.66-1.79 2.55 2.55 0 011.86-.64 4.54 4.54 0 01.93.12v1.41a2.9 2.9 0 00-.56-.05c-.69 0-1 .32-1 1v.55h1.36V850h-1.36v5.52zM425.84 855.55a1 1 0 10-1.91.13 2.46 2.46 0 01-1.68-.59 1.88 1.88 0 01-.66-1.47 1.92 1.92 0 01.81-1.67 4 4 0 012.34-.59h.84V851a1.14 1.14 0 00-.24-.76 1 1 0 00-.77-.29 1.1 1.1 0 00-.73.23.76.76 0 00-.26.61h-1.84a1.9 1.9 0 01.37-1.11 2.5 2.5 0 011-.8 3.87 3.87 0 011.51-.28 3 3 0 012 .63 2.25 2.25 0 01.75 1.8v3a3.17 3.17 0 00.27 1.48v.11zm-1.51-1.27a1.61 1.61 0 00.75-.19 1.16 1.16 0 00.5-.48v-1.18h-.68c-.92 0-1.41.32-1.47 1v.11a.73.73 0 00.24.56.93.93 0 00.66.18zM428.82 846.91a.87.87 0 01.28-.68 1 1 0 01.75-.27 1 1 0 01.75.27.87.87 0 01.28.68.94.94 0 01-.28.68 1.18 1.18 0 01-1.5 0 .94.94 0 01-.28-.68zm1.95 8.64h-1.84v-6.87h1.84zM434.22 855.55h-1.84v-9.75h1.84zM435.44 852.05a4 4 0 01.4-1.82A3 3 0 01437 849a3.3 3.3 0 011.72-.43 3.13 3.13 0 012.27.85 3.42 3.42 0 011 2.31v.47a3.61 3.61 0 01-.88 2.53 3.42 3.42 0 01-4.74 0 3.67 3.67 0 01-.89-2.59zm1.84.13a2.62 2.62 0 00.36 1.5 1.33 1.33 0 002.1 0 2.82 2.82 0 00.37-1.64 2.54 2.54 0 00-.37-1.49 1.32 1.32 0 00-2.1 0 2.9 2.9 0 00-.36 1.63zM445.55 853.31l1.28-4.63h1.92l-2.32 6.87h-1.75l-2.32-6.87h1.92zM452.63 855.68a3.36 3.36 0 01-2.46-.93 3.31 3.31 0 01-.95-2.47v-.18a4.26 4.26 0 01.4-1.85 2.94 2.94 0 011.14-1.25 3.09 3.09 0 011.67-.44 2.86 2.86 0 012.22.88 3.63 3.63 0 01.81 2.52v.75h-4.38a1.7 1.7 0 00.54 1.08 1.62 1.62 0 001.13.41 2 2 0 001.66-.77l.9 1a2.74 2.74 0 01-1.12.91 3.63 3.63 0 01-1.56.34zm-.21-5.64a1.15 1.15 0 00-.88.36 2 2 0 00-.44 1.06h2.55v-.14a1.33 1.33 0 00-.33-1 1.19 1.19 0 00-.9-.32zM460.36 850.4a5.73 5.73 0 00-.66 0 1.35 1.35 0 00-1.37.71v4.49h-1.83v-6.87h1.73v.82a1.7 1.7 0 011.53-.94 1.75 1.75 0 01.57.08zM381 866.29a1.39 1.39 0 01.42-1.06 1.69 1.69 0 012.17 0 1.4 1.4 0 01.43 1v.27a1.38 1.38 0 01-.42 1.05 1.54 1.54 0 01-1.09.4 1.51 1.51 0 01-1.09-.4 1.39 1.39 0 01-.42-1.07zM396.14 868.07a3.22 3.22 0 01-1.1 2.35 3.86 3.86 0 01-2.62.86 3.47 3.47 0 01-2.79-1.2 4.9 4.9 0 01-1-3.28v-.57a5.6 5.6 0 01.47-2.35 3.6 3.6 0 011.34-1.56 4.2 4.2 0 014.61.32 3.5 3.5 0 011.13 2.4h-1.91a1.85 1.85 0 00-.5-1.29 1.83 1.83 0 00-1.3-.41 1.62 1.62 0 00-1.47.66 3.87 3.87 0 00-.48 2.11v.7A4.12 4.12 0 00391 869a1.6 1.6 0 001.43.69 1.88 1.88 0 001.32-.4 1.83 1.83 0 00.5-1.25zM399.21 871.15h-1.84v-9.75h1.84zM400.44 867.65a4.09 4.09 0 01.39-1.82 2.89 2.89 0 011.13-1.24 3.33 3.33 0 011.72-.43 3.12 3.12 0 012.32.84 3.42 3.42 0 011 2.31v.47a3.56 3.56 0 01-.88 2.53 3.42 3.42 0 01-4.74 0 3.66 3.66 0 01-.88-2.59zm1.83.13a2.54 2.54 0 00.37 1.5 1.19 1.19 0 001.05.52 1.21 1.21 0 001-.51 2.81 2.81 0 00.38-1.64 2.54 2.54 0 00-.38-1.49 1.22 1.22 0 00-1.05-.53 1.19 1.19 0 00-1 .53 2.81 2.81 0 00-.37 1.62zM412.18 870.45a2.28 2.28 0 01-1.87.83 2.16 2.16 0 01-1.69-.64 2.69 2.69 0 01-.59-1.86v-4.5h1.83v4.44c0 .72.33 1.08 1 1.08a1.33 1.33 0 001.28-.65v-4.87H414v6.87h-1.72zM415.06 867.67a4.12 4.12 0 01.72-2.56 2.32 2.32 0 012-1 2.14 2.14 0 011.66.74v-3.5h1.84v9.75h-1.66l-.09-.73a2.15 2.15 0 01-1.76.86 2.33 2.33 0 01-1.95-1 4.24 4.24 0 01-.76-2.56zm1.83.13a2.74 2.74 0 00.34 1.48 1.09 1.09 0 001 .52 1.22 1.22 0 001.2-.72v-2.73a1.22 1.22 0 00-1.19-.72c-.9 0-1.35.72-1.35 2.17zM426.24 867.93h-3.58v-1.48h3.58zM427.43 867.65a4.09 4.09 0 01.39-1.82 2.89 2.89 0 011.13-1.24 3.33 3.33 0 011.72-.43 3.12 3.12 0 012.27.85 3.42 3.42 0 011 2.31v.47a3.56 3.56 0 01-.88 2.53 3.42 3.42 0 01-4.74 0 3.66 3.66 0 01-.88-2.59zm1.83.13a2.54 2.54 0 00.37 1.5 1.19 1.19 0 001.05.52 1.21 1.21 0 001-.51 2.81 2.81 0 00.38-1.64 2.54 2.54 0 00-.38-1.49 1.22 1.22 0 00-1.05-.53 1.19 1.19 0 00-1 .53 2.81 2.81 0 00-.37 1.62zM436.75 864.28l.06.8a2.38 2.38 0 012-.92 2 2 0 011.63.64 3 3 0 01.54 1.91v4.44h-1.83v-4.4a1.18 1.18 0 00-.26-.85 1.1 1.1 0 00-.84-.27 1.25 1.25 0 00-1.16.67v4.85H435v-6.87zM444.28 871.15h-1.84v-9.75h1.84zM448.35 868.55l1.27-4.27h2l-2.76 7.94-.15.36a2.09 2.09 0 01-2 1.34 3 3 0 01-.82-.12v-1.39h.28a1.47 1.47 0 00.78-.16 1 1 0 00.4-.53l.22-.56-2.41-6.89h2zM459.09 868.86l2.09-7h2.12l-3.22 9.24h-2l-3.21-9.24H457zM466.08 867.89v3.26h-1.91v-9.24h3.61a4.24 4.24 0 011.83.38 2.71 2.71 0 011.21 1.08 3 3 0 01.43 1.6 2.65 2.65 0 01-.93 2.14 3.89 3.89 0 01-2.57.78zm0-1.54h1.7a1.7 1.7 0 001.15-.35 1.32 1.32 0 00.4-1 1.56 1.56 0 00-.4-1.1 1.51 1.51 0 00-1.11-.43h-1.74zM480.07 871.15h-1.9l-3.71-6.08v6.08h-1.9v-9.24h1.9l3.72 6.09v-6.09h1.89zM487.71 869.8a1.21 1.21 0 00.83-.28 1 1 0 00.33-.74h1.71a2.34 2.34 0 01-.38 1.28 2.62 2.62 0 01-1 .9 3.24 3.24 0 01-1.44.32 3 3 0 01-2.32-.94 3.69 3.69 0 01-.85-2.59v-.12a3.68 3.68 0 01.84-2.53 3 3 0 012.32-.94 2.85 2.85 0 012.06.73 2.56 2.56 0 01.79 2h-1.71a1.26 1.26 0 00-.33-.87 1.15 1.15 0 00-.84-.34 1.11 1.11 0 00-1 .47 2.7 2.7 0 00-.33 1.52v.19a2.65 2.65 0 00.33 1.52 1.11 1.11 0 00.99.42zM491.35 867.65a4.09 4.09 0 01.39-1.82 2.89 2.89 0 011.13-1.24 3.35 3.35 0 011.72-.43 3.12 3.12 0 012.27.85 3.38 3.38 0 011 2.31v.47a3.56 3.56 0 01-.88 2.53 3.42 3.42 0 01-4.74 0 3.66 3.66 0 01-.88-2.59zm1.83.13a2.54 2.54 0 00.37 1.5 1.32 1.32 0 002.09 0 2.81 2.81 0 00.38-1.64 2.54 2.54 0 00-.38-1.49 1.22 1.22 0 00-1.05-.53 1.19 1.19 0 00-1 .53 2.81 2.81 0 00-.41 1.63zM500.67 864.28l.06.8a2.38 2.38 0 012-.92 2 2 0 011.63.64 3 3 0 01.54 1.91v4.44H503v-4.4a1.18 1.18 0 00-.26-.85 1.1 1.1 0 00-.84-.27 1.25 1.25 0 00-1.16.67v4.85h-1.84v-6.87zM508 864.28l.06.8a2.38 2.38 0 012-.92 2 2 0 011.63.64 2.94 2.94 0 01.54 1.91v4.44h-1.83v-4.4a1.23 1.23 0 00-.25-.85 1.13 1.13 0 00-.85-.27 1.26 1.26 0 00-1.16.67v4.85h-1.84v-6.87zM516.71 871.28a3.36 3.36 0 01-2.46-.93 3.27 3.27 0 01-1-2.47v-.18a4.12 4.12 0 01.4-1.85 2.86 2.86 0 011.13-1.25 3.14 3.14 0 011.67-.44 2.86 2.86 0 012.22.88 3.63 3.63 0 01.81 2.52v.75h-4.37a1.69 1.69 0 00.53 1.08 1.64 1.64 0 001.14.41 2 2 0 001.65-.77l.9 1a2.71 2.71 0 01-1.11.91 3.63 3.63 0 01-1.51.34zm-.21-5.65a1.18 1.18 0 00-.89.37 1.88 1.88 0 00-.43 1.06h2.55v-.14a1.38 1.38 0 00-.33-.95 1.19 1.19 0 00-.9-.34zM523.43 869.8a1.17 1.17 0 00.82-.28 1 1 0 00.33-.74h1.72a2.34 2.34 0 01-.38 1.28 2.62 2.62 0 01-1 .9 3.3 3.3 0 01-1.44.32 3 3 0 01-2.32-.94 3.69 3.69 0 01-.85-2.59v-.12a3.68 3.68 0 01.84-2.53 2.94 2.94 0 012.32-.94 2.87 2.87 0 012.06.73 2.6 2.6 0 01.79 2h-1.72a1.26 1.26 0 00-.33-.87 1.21 1.21 0 00-1.8.13 2.7 2.7 0 00-.33 1.52v.19a2.75 2.75 0 00.32 1.52 1.14 1.14 0 00.97.42zM529.55 862.59v1.69h1.17v1.35h-1.17v3.43a.79.79 0 00.14.54.75.75 0 00.56.17 2.92 2.92 0 00.54 0v1.39a3.78 3.78 0 01-1.11.17 1.75 1.75 0 01-2-1.95v-3.7h-1v-1.35h1v-1.69zM531.73 862.5a.86.86 0 01.28-.67 1 1 0 01.75-.27 1 1 0 01.75.27.9.9 0 01.28.67.91.91 0 01-.29.69 1 1 0 01-.74.27 1 1 0 01-.75-.27.9.9 0 01-.28-.69zm1.95 8.65h-1.84v-6.87h1.84zM534.9 867.65a4 4 0 01.4-1.82 2.89 2.89 0 011.13-1.24 3.33 3.33 0 011.72-.43 3.13 3.13 0 012.27.85 3.42 3.42 0 011 2.31v.47a3.56 3.56 0 01-.88 2.53 3.42 3.42 0 01-4.74 0 3.67 3.67 0 01-.89-2.59zm1.84.13a2.54 2.54 0 00.37 1.5 1.19 1.19 0 001 .52 1.22 1.22 0 001-.51 2.81 2.81 0 00.38-1.64 2.54 2.54 0 00-.38-1.49 1.22 1.22 0 00-1.05-.53 1.19 1.19 0 00-1 .53 2.81 2.81 0 00-.32 1.62zM544.23 864.28l.06.8a2.38 2.38 0 012-.92 2 2 0 011.62.64 2.94 2.94 0 01.55 1.91v4.44h-1.86v-4.4a1.18 1.18 0 00-.26-.85 1.11 1.11 0 00-.84-.27 1.24 1.24 0 00-1.16.67v4.85h-1.84v-6.87zM386.54 894.77h-3.66v3.78H381v-9.24h6v1.54h-4.12v2.39h3.66zM390.13 898.55h-1.91v-9.24h1.91zM393.79 897h4v1.53h-5.95v-9.24h1.9zM404.49 894.53h-3.66V897h4.3v1.53h-6.2v-9.24h6.18v1.54h-4.28v2.2h3.66zM414.27 896.13a1 1 0 00-.38-.83 4.62 4.62 0 00-1.37-.61 11.5 11.5 0 01-1.57-.63 2.57 2.57 0 01-1.57-2.3 2.22 2.22 0 01.42-1.33 2.79 2.79 0 011.21-.92 4.59 4.59 0 011.78-.33 4.1 4.1 0 011.76.36 2.79 2.79 0 011.2 1 2.63 2.63 0 01.43 1.49h-1.9a1.24 1.24 0 00-.4-1 1.67 1.67 0 00-1.12-.35 1.81 1.81 0 00-1.09.29.94.94 0 00-.39.78.9.9 0 00.46.76 5.19 5.19 0 001.33.57 5.67 5.67 0 012.37 1.21 2.38 2.38 0 01.74 1.8 2.22 2.22 0 01-.9 1.88 4 4 0 01-2.45.69 4.7 4.7 0 01-1.94-.39 3.15 3.15 0 01-1.34-1.07 2.82 2.82 0 01-.46-1.58H411q0 1.53 1.83 1.53a1.81 1.81 0 001.06-.27.89.89 0 00.38-.75zM420.66 893.47l1.92-4.16h2.08l-3 5.89v3.35h-1.94v-3.35l-3-5.89h2.09zM433 898.55h-1.9l-3.71-6.08v6.08h-1.9v-9.24h1.9l3.72 6.09v-6.09H433zM441.94 895.47a3.26 3.26 0 01-1.1 2.35 3.86 3.86 0 01-2.62.86 3.47 3.47 0 01-2.79-1.2 4.9 4.9 0 01-1-3.28v-.57a5.45 5.45 0 01.47-2.35 3.49 3.49 0 011.34-1.56 4.19 4.19 0 014.6.32 3.51 3.51 0 011.14 2.4h-1.91a1.9 1.9 0 00-.5-1.29 1.83 1.83 0 00-1.3-.41 1.64 1.64 0 00-1.43.68 3.9 3.9 0 00-.48 2.12v.7a4.12 4.12 0 00.45 2.19 1.59 1.59 0 001.43.69 1.88 1.88 0 001.32-.4 1.83 1.83 0 00.5-1.25zM451.65 896.65h-3.34l-.64 1.9h-2l3.44-9.24h1.77l3.45 9.24h-2zm-2.83-1.55h2.31l-1.13-3.46zM462.69 898.55h-1.9l-3.71-6.08v6.08h-1.9v-9.24h1.9l3.71 6.09v-6.09h1.9zM464.36 898.55v-9.24h2.84a4.28 4.28 0 012.18.55 3.76 3.76 0 011.5 1.56 4.79 4.79 0 01.54 2.3v.42a4.79 4.79 0 01-.53 2.3 3.83 3.83 0 01-1.49 1.56 4.31 4.31 0 01-2.18.56zm1.9-7.7V897h.92a2.05 2.05 0 001.71-.73 3.33 3.33 0 00.6-2.09v-.49a3.32 3.32 0 00-.58-2.13 2.05 2.05 0 00-1.71-.73zM480.83 896.13a1 1 0 00-.38-.83 4.62 4.62 0 00-1.37-.61 11.5 11.5 0 01-1.57-.63 2.57 2.57 0 01-1.57-2.3 2.22 2.22 0 01.42-1.33 2.77 2.77 0 011.22-.92 4.5 4.5 0 011.77-.33 4.1 4.1 0 011.76.36 2.88 2.88 0 011.21 1 2.71 2.71 0 01.43 1.49h-1.91a1.24 1.24 0 00-.4-1 1.67 1.67 0 00-1.12-.35 1.81 1.81 0 00-1.09.29.94.94 0 00-.39.78.92.92 0 00.46.76 5.36 5.36 0 001.33.57 5.67 5.67 0 012.37 1.21 2.39 2.39 0 01.75 1.8 2.23 2.23 0 01-.91 1.88 4 4 0 01-2.45.69 4.74 4.74 0 01-1.94-.39 3.06 3.06 0 01-1.33-1.07 2.75 2.75 0 01-.47-1.58h1.92c0 1 .6 1.53 1.82 1.53a1.79 1.79 0 001.06-.27.89.89 0 00.38-.75zM491.56 898.55h-1.91v-4h-3.71v4H484v-9.24h1.91v3.74h3.71v-3.74h1.91zM498.55 896.65h-3.34l-.63 1.9h-2l3.44-9.24h1.77l3.46 9.24h-2zm-2.82-1.55H498l-1.16-3.46zM505.5 895.17H504v3.38h-1.9v-9.24h3.43a3.85 3.85 0 012.47.69 2.51 2.51 0 01.89 2.06 2.88 2.88 0 01-.41 1.58 2.8 2.8 0 01-1.24 1l2 3.78v.09h-2zm-1.5-1.55h1.54a1.58 1.58 0 001.11-.36 1.31 1.31 0 00.39-1 1.4 1.4 0 00-.37-1 1.52 1.52 0 00-1.14-.37H504zM515.94 894.53h-3.66V897h4.29v1.53h-6.19v-9.24h6.18v1.54h-4.28v2.2h3.66zM380.94 910.39a9.71 9.71 0 01.39-2.77 7.39 7.39 0 011.14-2.32 4.18 4.18 0 011.64-1.41l.35 1A4.46 4.46 0 00383 907a9.78 9.78 0 00-.52 3.35v.2a10.16 10.16 0 00.51 3.37 4.55 4.55 0 001.45 2.15l-.35 1a4.32 4.32 0 01-1.61-1.37 7.07 7.07 0 01-1.14-2.26 9.94 9.94 0 01-.42-2.68zM387.45 910.89v3.26h-1.91v-9.24h3.61a4.1 4.1 0 011.83.38 2.79 2.79 0 011.22 1.08 3.06 3.06 0 01.42 1.6 2.65 2.65 0 01-.93 2.14 3.89 3.89 0 01-2.57.78zm0-1.54h1.7a1.7 1.7 0 001.15-.35 1.29 1.29 0 00.4-1 1.56 1.56 0 00-.4-1.1 1.51 1.51 0 00-1.11-.43h-1.74zM398 912.25h-3.34l-.64 1.9h-2l3.44-9.24h1.76l3.46 9.24h-2zm-2.83-1.55h2.31l-1.16-3.46zM403.78 909.07l1.92-4.16h2.09l-3 5.89v3.35h-1.93v-3.35l-3-5.89h2.09zM411.11 910.93h-3.57v-1.48h3.57zM417.92 912.25h-3.34l-.63 1.9h-2l3.44-9.24h1.77l3.46 9.24h-2zm-2.82-1.55h2.31l-1.16-3.46zM426.24 911.72a1 1 0 00-.38-.82 4.62 4.62 0 00-1.37-.61 11.5 11.5 0 01-1.57-.63 2.59 2.59 0 01-1.57-2.3 2.22 2.22 0 01.42-1.33 2.77 2.77 0 011.22-.92 4.5 4.5 0 011.77-.33 4.1 4.1 0 011.76.36 2.88 2.88 0 011.21 1 2.71 2.71 0 01.43 1.49h-1.91a1.23 1.23 0 00-.4-1 1.67 1.67 0 00-1.12-.35 1.81 1.81 0 00-1.09.29.94.94 0 00-.39.78.92.92 0 00.46.76 5.36 5.36 0 001.33.57 5.67 5.67 0 012.37 1.21 2.39 2.39 0 01.75 1.8 2.23 2.23 0 01-.91 1.88 4 4 0 01-2.45.69 4.74 4.74 0 01-1.94-.39 3.06 3.06 0 01-1.33-1.07 2.75 2.75 0 01-.47-1.58H423c0 1 .6 1.53 1.82 1.53a1.79 1.79 0 001.06-.27.91.91 0 00.36-.76zM432.89 910.93h-3.57v-1.48h3.57zM437.67 909.07l1.92-4.16h2.09l-3 5.89v3.35h-1.93v-3.35l-3-5.89h2.09zM449.93 909.74a5.57 5.57 0 01-.48 2.39 3.67 3.67 0 01-1.39 1.59 3.81 3.81 0 01-2.06.56 3.87 3.87 0 01-2.05-.56 3.61 3.61 0 01-1.39-1.57 5.39 5.39 0 01-.5-2.36v-.46a5.5 5.5 0 01.49-2.4 3.67 3.67 0 011.39-1.59 4.05 4.05 0 014.11 0 3.73 3.73 0 011.39 1.59 5.65 5.65 0 01.49 2.4zm-1.93-.42a3.94 3.94 0 00-.52-2.21 1.84 1.84 0 00-3 0 3.89 3.89 0 00-.52 2.19v.45a3.9 3.9 0 00.52 2.19 1.67 1.67 0 001.49.78 1.7 1.7 0 001.48-.75 4 4 0 00.52-2.19zM458.31 904.91V911a3.1 3.1 0 01-.95 2.39 3.68 3.68 0 01-2.6.89 3.73 3.73 0 01-2.57-.86 3.11 3.11 0 01-1-2.36v-6.15h1.91V911a1.76 1.76 0 00.43 1.32 1.66 1.66 0 001.2.42c1.07 0 1.62-.57 1.64-1.69v-6.15zM463.31 910.93h-3.57v-1.48h3.57zM472.22 913a3.36 3.36 0 01-1.45 1 6.27 6.27 0 01-2.09.34 4.12 4.12 0 01-2.1-.53 3.5 3.5 0 01-1.4-1.52 5.45 5.45 0 01-.5-2.34v-.63a5.51 5.51 0 01.47-2.39 3.41 3.41 0 011.34-1.55 4.43 4.43 0 014.63.24 3.36 3.36 0 011.1 2.29h-1.85a1.9 1.9 0 00-.56-1.17 1.83 1.83 0 00-1.2-.36 1.68 1.68 0 00-1.48.73 3.78 3.78 0 00-.51 2.17v.59a3.61 3.61 0 00.55 2.19 1.89 1.89 0 001.62.75 2.15 2.15 0 001.53-.46v-1.65h-1.74v-1.41h3.64zM481.35 909.74a5.57 5.57 0 01-.48 2.39 3.59 3.59 0 01-1.38 1.59 4.05 4.05 0 01-4.11 0 3.63 3.63 0 01-1.4-1.57 5.53 5.53 0 01-.5-2.36v-.46a5.5 5.5 0 01.5-2.4 3.61 3.61 0 011.39-1.59 4 4 0 014.1 0 3.67 3.67 0 011.39 1.59 5.5 5.5 0 01.49 2.4zm-1.93-.42a3.86 3.86 0 00-.52-2.21 1.83 1.83 0 00-3 0 3.89 3.89 0 00-.53 2.19v.45a4 4 0 00.52 2.19 1.7 1.7 0 001.5.78 1.67 1.67 0 001.47-.75 3.81 3.81 0 00.52-2.19zM485.78 910.54a9.46 9.46 0 01-.41 2.76 7.6 7.6 0 01-1.19 2.34 4.34 4.34 0 01-1.66 1.4l-.35-1a4.51 4.51 0 001.42-2.1 9.54 9.54 0 00.54-3.25v-.34a9.82 9.82 0 00-.52-3.35 4.61 4.61 0 00-1.44-2.17l.35-1a4.22 4.22 0 011.63 1.36 7.43 7.43 0 011.19 2.29 9.15 9.15 0 01.44 2.71z"
              />
            </g>
            <g id="prefix__Workloadgraphic">
              <g mask="url(#prefix__mask-6)">
                <circle
                  cx={725}
                  cy={650}
                  r={150}
                  style={{
                    mixBlendMode: "multiply",
                  }}
                  fill="url(#prefix__radial-gradient-8)"
                />
              </g>
              <circle
                cx={700}
                cy={625}
                r={150}
                fill="url(#prefix__radial-gradient-9)"
              />
              <path
                className="prefix__cls-13"
                d="M551 626a150 150 0 01255.56-106.56 150 150 0 10-212.12 212.12A149.51 149.51 0 01551 626z"
              />
              <text
                transform="translate(606.92 677.62)"
                fontSize={25}
                fontFamily="Roboto-Bold,Roboto"
                fontWeight={700}
                fill="#474647"
              >
                {"PR"}
                <tspan className="prefix__cls-50" x={32.08} y={0}>
                  {"O"}
                </tspan>
                <tspan x={48.3} y={0} letterSpacing={0}>
                  {"TE"}
                </tspan>
                <tspan x={77.83} y={0} letterSpacing="-.01em">
                  {"C"}
                </tspan>
                <tspan x={93.84} y={0} letterSpacing="-.03em">
                  {"T"}
                </tspan>
                <tspan x={108.57} y={0}>
                  {" C"}
                </tspan>
                <tspan x={131.15} y={0} letterSpacing="-.03em">
                  {"L"}
                </tspan>
                <tspan x={143.91} y={0} letterSpacing={0}>
                  {"OUD"}
                </tspan>
              </text>
              <text
                className="prefix__cls-49"
                transform="translate(607.63 694.13)"
              >
                {"GAME-C"}
                <tspan className="prefix__cls-69" x={49.85} y={0}>
                  {"H"}
                </tspan>
                <tspan x={59.15} y={0}>
                  {"ANGING PR"}
                </tspan>
                <tspan x={127.67} y={0} letterSpacing="-.04em">
                  {"O"}
                </tspan>
                <tspan x={136.11} y={0}>
                  {"TE"}
                </tspan>
                <tspan x={151.46} y={0} letterSpacing="-.01em">
                  {"C"}
                </tspan>
                <tspan x={159.78} y={0}>
                  {"TION"}
                </tspan>
              </text>
              <path
                d="M645.47 629.89a3.68 3.68 0 01-4.1-3.51v-74.51a3.77 3.77 0 014.1-3.6l106.31 3.85a3.35 3.35 0 013.12 3.37v64.75a3.44 3.44 0 01-3.12 3.44z"
                fill="url(#prefix__linear-gradient)"
              />
              <path
                d="M714.78 638.13a5.19 5.19 0 01-3.33-4l-2.45-12.8-21.16.79-2.6 13.38c-.37 1.87 1.09 3.75 2.77 4.44l8.85 3.63a11 11 0 005.18.79l18.7-1.68a1.18 1.18 0 001-1.08c.07-.58.45-1.23-.07-1.41z"
                fill="url(#prefix__linear-gradient-2)"
              />
              <path
                d="M715 637.35a5.13 5.13 0 01-3.33-3.91l-2.47-12.68-20.64.78-2.56 13.21a3.92 3.92 0 002.28 4.39l8.84 3.58a11 11 0 005.17.78l18.69-1.66a1.19 1.19 0 001.05-1.06 1.22 1.22 0 00-.79-1.29z"
                fill="url(#prefix__linear-gradient-3)"
              />
              <path
                d="M646.31 629.89a3.67 3.67 0 01-4.09-3.51v-74.51a3.76 3.76 0 014.09-3.6l106.31 3.85a3.35 3.35 0 013.12 3.37v64.75a3.44 3.44 0 01-3.12 3.44z"
                fill="url(#prefix__linear-gradient-4)"
              />
              <path
                d="M752.62 553.65L646.31 550a2 2 0 00-2.18 1.93v74.34a2 2 0 002.18 1.88l106.31-6a1.82 1.82 0 001.67-1.83v-64.87a1.78 1.78 0 00-1.67-1.8z"
                fill="url(#prefix__linear-gradient-5)"
              />
              <path
                className="prefix__cls-13"
                d="M646.31 621.82a.77.77 0 01-.85-.74V552a.78.78 0 01.85-.75l106.31 3.49a.7.7 0 01.65.71v60.47a.71.71 0 01-.65.71z"
              />
              <text
                transform="translate(667.76 591.29)"
                fontSize={15}
                fontFamily="Roboto-Bold,Roboto"
                fontWeight={700}
                fill="#474647"
              >
                <tspan letterSpacing="-.02em">{"W"}</tspan>
                <tspan x={12.89} y={0}>
                  {"orkload"}
                </tspan>
              </text>
            </g>
            <text
              className="prefix__cls-79"
              transform="rotate(2.6 -3205.135 15547.906)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(2.85 -2895.077 14320.619)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(3.63 -2198.4 11360.538)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(4.41 -1748.133 9447.481)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(5.18 -1436.552 8124.576)"
            />
            <text
              className="prefix__cls-79"
              transform="matrix(.99 .1 -.1 .99 734.03 163.46)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(6.74 -1023.342 6369.005)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(8.1 -821.565 5807.659)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(8.31 -764.017 5266.71)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(9.09 -668.406 4860.53)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(9.88 -586.953 4514.112)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(10.66 -518.311 4222.578)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(11.45 -458.313 3967.46)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(11.5 -455.308 3780.267)"
            />
            <text
              className="prefix__cls-79"
              transform="matrix(.97 .23 -.23 .97 791 172.57)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(13.81 -319.851 3378.744)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(14.6 -283.436 3223.963)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(15.39 -250.765 3084.926)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(16.18 -221.25 2959.362)"
            />
            <text
              className="prefix__cls-79"
              transform="matrix(.96 .29 -.29 .96 822.06 180.66)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(17.75 -170.357 2743.121)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(18.55 -147.702 2646.616)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(19.33 -127.422 2560.517)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(20.12 -108.472 2479.886)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(20.91 -90.914 2405.225)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(21.7 -74.628 2336)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(22.49 -59.472 2271.563)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(23.27 -45.542 2212.36)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(24.5 -18.99 2141.266)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(24.85 -19.905 2103.332)"
            />
            <text
              className="prefix__cls-79"
              transform="matrix(.9 .43 -.43 .9 887.9 205.81)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(25.8 -11.84 2033.805)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(27.1 7.503 1953.467)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(27.99 22.515 1923.02)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(28.77 31.615 1884.266)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(29.5 43.216 1858.739)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(30.34 48.6 1812.095)"
            />
            <text
              className="prefix__cls-79"
              transform="matrix(.86 .52 -.52 .86 927.54 226.87)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(31.91 63.95 1746.84)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(32.69 71.01 1716.8)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(33.47 77.774 1688.056)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(33.9 77.805 1671.416)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(35 91.327 1645.757)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(35.81 96.29 1609.244)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(36.6 102.06 1584.73)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(37.37 107.392 1562.024)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(38.15 112.63 1539.788)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(38.93 117.644 1518.44)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(39.71 122.468 1497.906)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(40.49 127.125 1478.09)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(41.27 131.616 1459.014)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(42.05 135.934 1440.633)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(43.1 145.806 1419.548)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(43.6 144.047 1406.048)"
            />
            <text
              className="prefix__cls-79"
              transform="matrix(.71 .7 -.7 .71 1014 292.9)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(45.16 151.72 1373.42)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(45.94 155.374 1357.875)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(46.71 158.828 1343.137)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(47.49 162.256 1328.564)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(48.27 165.575 1314.43)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(49 167.523 1292.803)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(49.83 171.94 1287.407)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(50.61 174.97 1274.52)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(51.38 177.848 1262.195)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(52.4 184.595 1246.846)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(53 184.95 1233.7)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(53.72 186.237 1226.551)"
            />
            <text
              className="prefix__cls-79"
              transform="matrix(.58 .81 -.81 .58 1068.61 355.82)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(55.3 192.522 1206.763)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(56 191.953 1194.615)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(56.85 196.49 1183.072)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(57.3 197.92 1180.984)"
            />
            <text
              className="prefix__cls-79"
              transform="matrix(.52 .85 -.85 .52 1086.5 382.41)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(59.3 204.604 1150.714)"
            />
            <text
              className="prefix__cls-79"
              transform="rotate(59.97 205.696 1143.945)"
            />
            <text
              className="prefix__cls-80"
              transform="rotate(61.43 212.517 1122.145)"
            >
              {"A"}
            </text>
            <text
              className="prefix__cls-80"
              transform="rotate(63.51 217.821 1099.456)"
            >
              {"D"}
            </text>
            <text
              className="prefix__cls-80"
              transform="rotate(65.54 222.938 1078.177)"
            >
              {"V"}
            </text>
            <text
              className="prefix__cls-80"
              transform="rotate(67.52 227.73 1058.41)"
            >
              {"A"}
            </text>
            <text
              className="prefix__cls-80"
              transform="matrix(.35 .94 -.94 .35 1125.28 459.3)"
            >
              {"N"}
            </text>
            <text
              className="prefix__cls-80"
              transform="rotate(71.85 237.066 1019.066)"
            >
              {"C"}
            </text>
            <text
              className="prefix__cls-80"
              transform="rotate(73.7 240.158 1004.058)"
            >
              {"E"}
            </text>
            <text
              className="prefix__cls-80"
              transform="rotate(75.7 244.675 987.228)"
            >
              {"D"}
            </text>
            <text
              className="prefix__cls-80"
              transform="rotate(77.2 246.62 983.432)"
            />
            <text
              className="prefix__cls-80"
              transform="rotate(78.5 249.303 966.334)"
            >
              {"P"}
            </text>
            <text
              className="prefix__cls-80"
              transform="rotate(80.56 253.297 950.874)"
            >
              {"R"}
            </text>
            <text
              className="prefix__cls-80"
              transform="rotate(82.65 257.077 935.962)"
            >
              {"O"}
            </text>
            <text
              className="prefix__cls-80"
              transform="rotate(84.58 259.675 923.592)"
            >
              {"T"}
            </text>
            <text
              className="prefix__cls-80"
              transform="rotate(86.42 262.047 912.195)"
            >
              {"E"}
            </text>
            <text
              className="prefix__cls-80"
              transform="rotate(88.3 264.902 900.075)"
            >
              {"C"}
            </text>
            <text
              className="prefix__cls-80"
              transform="rotate(90.62 269.836 884.866)"
            >
              {"T"}
            </text>
            <text
              className="prefix__cls-80"
              transform="rotate(91.63 267.375 882.776)"
            >
              {"I"}
            </text>
            <text
              className="prefix__cls-80"
              transform="rotate(93.15 271.933 871.702)"
            >
              {"O"}
            </text>
            <text
              className="prefix__cls-80"
              transform="rotate(95.33 274.835 859.642)"
            >
              {"N"}
            </text>
            <path
              className="prefix__cls-81"
              d="M1160.78 721.3c-26.25 134.42-109.85 248.32-224.28 315.19M714 161.44c157.29 4.63 295.16 86.61 376.9 209.22"
            />
            <path
              className="prefix__cls-82"
              d="M722.51 160.73L705 169.97v-17.52l17.51 8.28zM951.07 1028.12l-11.31 16.26-8.05-15.56 19.36-.7z"
            />
            <g
              id="prefix__ADVANCED_EMAIL_SECURITY"
              data-name="ADVANCED EMAIL SECURITY"
            >
              <path
                d="M575 408.46A248.83 248.83 0 01700 375V200a423.05 423.05 0 00-212.53 56.88l125 216.54h0z"
                stroke="#7dcaaa"
                fill="url(#prefix__radial-gradient-10)"
                strokeMiterlimit={10}
              />
              <path
                d="M575 408.46l37.51 65a173.84 173.84 0 0120-9.94 173.73 173.73 0 0130.62-9.57c1.66-.35 3.32-.68 5-1a174.71 174.71 0 0125.87-2.81c2-.07 4-.1 6-.1V375a248.83 248.83 0 00-125 33.46z"
                fill="url(#prefix__radial-gradient-11)"
              />
              <text
                className="prefix__cls-85"
                transform="translate(554.09 255.88)"
              >
                {"\u2022 "}
                <tspan className="prefix__cls-52" x={6.08} y={0}>
                  {"A"}
                </tspan>
                <tspan x={12.58} y={0}>
                  {"nti-phishing"}
                </tspan>
                <tspan x={0} y={12}>
                  {"\u2022 "}
                </tspan>
                <tspan className="prefix__cls-52" x={6.08} y={12}>
                  {"A"}
                </tspan>
                <tspan x={12.58} y={12}>
                  {"nti-spam protection"}
                </tspan>
                <tspan x={0} y={24}>
                  {"\u2022 "}
                </tspan>
                <tspan className="prefix__cls-52" x={6.08} y={24}>
                  {"Anti-malware"}
                </tspan>
                <tspan x={0} y={36}>
                  {"\u2022 AP"}
                </tspan>
                <tspan className="prefix__cls-88" x={19.26} y={36}>
                  {"T"}
                </tspan>
                <tspan x={25.16} y={36}>
                  {" and "}
                </tspan>
                <tspan x={46.73} y={36} letterSpacing="-.01em">
                  {"zero-day protection"}
                </tspan>
                <tspan x={0} y={48}>
                  {"\u2022 Imp"}
                </tspan>
                <tspan className="prefix__cls-87" x={23.29} y={48}>
                  {"r"}
                </tspan>
                <tspan x={26.84} y={48}>
                  {"ession (BEC) protection"}
                </tspan>
                <tspan x={0} y={60}>
                  {"\u2022 "}
                </tspan>
                <tspan x={6.08} y={60} letterSpacing="-.01em">
                  {"A"}
                </tspan>
                <tspan x={12.73} y={60}>
                  {"ttachments deep scanning"}
                </tspan>
                <tspan x={0} y={72}>
                  {"\u2022 URL filtering"}
                </tspan>
                <tspan x={0} y={84}>
                  {"\u2022"}
                </tspan>
                <tspan className="prefix__cls-88" x={3.59} y={84} />
                <tspan x={5.79} y={84}>
                  {"Th"}
                </tspan>
                <tspan className="prefix__cls-87" x={17.57} y={84}>
                  {"r"}
                </tspan>
                <tspan x={21.13} y={84}>
                  {"eat intelligence"}
                </tspan>
                <tspan x={0} y={96}>
                  {"\u2022 Incident "}
                </tspan>
                <tspan className="prefix__cls-87" x={44.98} y={96}>
                  {"response services"}
                </tspan>
              </text>
              <path
                className="prefix__cls-13"
                d="M618.59 407.74h-3.34l-.63 1.91h-2l3.44-9.24h1.77l3.46 9.24h-2zm-2.82-1.54h2.31l-1.16-3.46zM622.12 409.65v-9.24H625a4.42 4.42 0 012.19.54 3.85 3.85 0 011.5 1.57 4.79 4.79 0 01.54 2.3v.42a4.84 4.84 0 01-.53 2.29 3.89 3.89 0 01-1.5 1.56 4.39 4.39 0 01-2.18.56zM624 402v6.17h1a2.07 2.07 0 001.7-.73 3.27 3.27 0 00.61-2.09v-.49a3.37 3.37 0 00-.59-2.14A2.07 2.07 0 00625 402zM633.85 407.36l2.09-6.95h2.12l-3.22 9.24h-2l-3.2-9.24h2.11zM643.67 407.74h-3.34l-.63 1.91h-2l3.44-9.24h1.77l3.46 9.24h-2zm-2.82-1.54h2.31l-1.16-3.46zM654.72 409.65h-1.91l-3.71-6.08v6.08h-1.9v-9.24h1.9l3.72 6.09v-6.09h1.9zM663.63 406.57a3.24 3.24 0 01-1.1 2.35 3.85 3.85 0 01-2.61.85 3.47 3.47 0 01-2.8-1.19 4.91 4.91 0 01-1-3.29v-.56a5.6 5.6 0 01.47-2.35 3.49 3.49 0 011.34-1.56 3.78 3.78 0 012-.54 3.73 3.73 0 012.58.86 3.5 3.5 0 011.13 2.4h-1.91a1.88 1.88 0 00-.5-1.3 1.82 1.82 0 00-1.3-.4 1.62 1.62 0 00-1.42.68 3.81 3.81 0 00-.49 2.12v.7a4.12 4.12 0 00.45 2.19 1.6 1.6 0 001.44.69 1.92 1.92 0 001.31-.4 1.83 1.83 0 00.5-1.25zM670.45 405.63h-3.66v2.49h4.29v1.53h-6.19v-9.24h6.18V402h-4.28v2.2h3.66zM672.2 409.65v-9.24h2.8a4.38 4.38 0 012.18.54 3.85 3.85 0 011.5 1.57 4.79 4.79 0 01.54 2.3v.42a4.72 4.72 0 01-.53 2.29 3.8 3.8 0 01-1.49 1.56 4.42 4.42 0 01-2.18.56zm1.9-7.7v6.17h.9a2.08 2.08 0 001.71-.73 3.33 3.33 0 00.6-2.09v-.49a3.37 3.37 0 00-.58-2.14A2.07 2.07 0 00675 402zM633.38 421.23h-3.66v2.49H634v1.53h-6.2V416h6.2v1.55h-4.28v2.2h3.66zM637.62 416l2.37 6.71 2.36-6.71h2.5v9.25h-1.91v-2.53l.19-4.36-2.49 6.89h-1.31l-2.49-6.88.19 4.35v2.53h-1.9V416zM651.85 423.34h-3.34l-.64 1.91h-2l3.44-9.25h1.76l3.46 9.25h-2zM649 421.8h2.31l-1.16-3.46zM657.4 425.25h-1.9V416h1.9zM661.07 423.72h4v1.53h-5.94V416h1.9zM623.2 438.42a1 1 0 00-.38-.83 5.19 5.19 0 00-1.38-.6 9.65 9.65 0 01-1.56-.64 2.56 2.56 0 01-1.58-2.29 2.22 2.22 0 01.42-1.33 2.75 2.75 0 011.22-.92 4.54 4.54 0 011.77-.33 4.18 4.18 0 011.77.36 2.84 2.84 0 011.2 1 2.7 2.7 0 01.43 1.48h-1.91a1.22 1.22 0 00-.4-1 1.6 1.6 0 00-1.12-.35 1.74 1.74 0 00-1.09.29 1 1 0 00-.38.78.88.88 0 00.45.75 4.65 4.65 0 001.34.57 5.8 5.8 0 012.36 1.22 2.39 2.39 0 01.75 1.8 2.23 2.23 0 01-.91 1.88 4 4 0 01-2.44.68 4.75 4.75 0 01-2-.39 3 3 0 01-1.33-1.07 2.69 2.69 0 01-.46-1.57h1.91q0 1.53 1.83 1.53a1.75 1.75 0 001.06-.28.9.9 0 00.43-.74zM632 436.83h-3.7v2.49h4.29v1.53h-6.19v-9.24h6.18v1.54h-4.28v2.2h3.7zM641 437.77a3.28 3.28 0 01-1.1 2.35 3.86 3.86 0 01-2.62.85 3.46 3.46 0 01-2.79-1.19 4.91 4.91 0 01-1-3.29v-.56a5.6 5.6 0 01.47-2.35 3.49 3.49 0 011.34-1.56 4.2 4.2 0 014.61.32 3.5 3.5 0 011.13 2.4h-1.91a1.88 1.88 0 00-.5-1.3 1.82 1.82 0 00-1.3-.4 1.64 1.64 0 00-1.43.68 3.9 3.9 0 00-.48 2.12v.7a4.12 4.12 0 00.45 2.19 1.6 1.6 0 001.43.69 1.88 1.88 0 001.32-.4 1.83 1.83 0 00.5-1.25zM649.21 431.61v6.08a3.13 3.13 0 01-1 2.4 3.65 3.65 0 01-2.59.88 3.69 3.69 0 01-2.57-.85 3 3 0 01-1-2.36v-6.15H644v6.1a1.76 1.76 0 00.43 1.32 1.68 1.68 0 001.21.42c1.07 0 1.61-.57 1.63-1.69v-6.15zM654.19 437.46h-1.51v3.39h-1.91v-9.24h3.44a3.84 3.84 0 012.52.73 2.51 2.51 0 01.89 2.06 2.9 2.9 0 01-.41 1.58 2.8 2.8 0 01-1.24 1l2 3.78v.09h-2zm-1.51-1.54h1.53a1.58 1.58 0 001.11-.36 1.33 1.33 0 00.4-1 1.41 1.41 0 00-.38-1 1.51 1.51 0 00-1.13-.37h-1.53zM661.09 440.85h-1.9v-9.24h1.9zM669.63 433.15h-2.83v7.7h-1.91v-7.7h-2.79v-1.54h7.53zM674 435.77l1.93-4.16H678l-3 5.89v3.35h-2v-3.35l-3-5.89h2.09z"
              />
            </g>
            <g
              id="prefix__ADVANCED_DATA_LOSS_PREVENTION"
              data-name="ADVANCED DATA LOSS PREVENTION"
            >
              <path
                d="M825 408.46l87.51-151.58A423.05 423.05 0 00700 200v175a248.86 248.86 0 01125 33.46z"
                stroke="#b7ce76"
                fill="url(#prefix__radial-gradient-12)"
                strokeMiterlimit={10}
              />
              <path
                d="M825 408.46A248.86 248.86 0 00700 375v75c1.8 0 3.59 0 5.38.09l1.59.06c1.31.05 2.61.12 3.91.2l1.61.1c1.62.11 3.24.25 4.86.4h.42c1.77.18 3.52.39 5.27.62l1.39.2c1.33.18 2.64.38 4 .59l1.49.25c1.54.26 3.07.55 4.6.85l.54.11q2.6.53 5.18 1.13l1.09.27c1.36.33 2.72.68 4.07 1l1.29.35q2.25.61 4.47 1.29l.52.16c1.71.52 3.4 1.08 5.09 1.65l.72.26q2.13.73 4.23 1.53l1.08.41q2.19.84 4.35 1.74l.48.19q2.49 1.05 4.95 2.17l.34.15c1.46.68 2.92 1.37 4.36 2.08l.9.45c1.4.7 2.78 1.41 4.16 2.15l.48.25q2.4 1.29 4.74 2.64z"
                fill="url(#prefix__radial-gradient-13)"
              />
              <path
                className="prefix__cls-13"
                d="M726.94 408.26h-3.33l-.64 1.9h-2l3.44-9.24h1.76l3.46 9.24h-2zm-2.82-1.55h2.31l-1.16-3.46zM730.47 410.16v-9.24h2.85a4.28 4.28 0 012.18.55A3.76 3.76 0 01737 403a4.79 4.79 0 01.54 2.3v.42a4.91 4.91 0 01-.53 2.3 3.8 3.8 0 01-1.5 1.55 4.28 4.28 0 01-2.17.56zm1.91-7.7v6.17h.92a2.08 2.08 0 001.71-.73 3.33 3.33 0 00.6-2.09v-.49a3.32 3.32 0 00-.59-2.13 2 2 0 00-1.7-.73zM742.2 407.87l2.09-6.95h2.12l-3.22 9.24h-2l-3.19-9.24h2.12zM752 408.26h-3.34l-.63 1.9h-2l3.44-9.24h1.76l3.46 9.24h-2zm-2.82-1.55h2.31l-1.16-3.46zM763.07 410.16h-1.91l-3.7-6.08v6.08h-1.91v-9.24h1.91l3.71 6.09v-6.09h1.9zM772 407.08a3.26 3.26 0 01-1.1 2.35 3.9 3.9 0 01-2.62.86 3.48 3.48 0 01-2.8-1.2 4.9 4.9 0 01-1-3.28v-.57a5.6 5.6 0 01.47-2.35 3.6 3.6 0 011.34-1.56 4.2 4.2 0 014.61.32 3.5 3.5 0 011.13 2.4h-1.9a2 2 0 00-.5-1.29 1.85 1.85 0 00-1.31-.41 1.6 1.6 0 00-1.42.69 3.77 3.77 0 00-.49 2.11v.7a4 4 0 00.46 2.19 1.59 1.59 0 001.43.69 1.85 1.85 0 001.31-.4 1.83 1.83 0 00.5-1.25zM778.8 406.14h-3.66v2.49h4.29v1.53h-6.19v-9.24h6.18v1.54h-4.28v2.2h3.66zM780.55 410.16v-9.24h2.84a4.26 4.26 0 012.18.55 3.79 3.79 0 011.51 1.56 4.79 4.79 0 01.54 2.3v.42a4.79 4.79 0 01-.54 2.3 3.83 3.83 0 01-1.49 1.55 4.29 4.29 0 01-2.18.56zm1.9-7.7v6.17h.93a2 2 0 001.7-.73 3.27 3.27 0 00.61-2.09v-.49a3.32 3.32 0 00-.59-2.13 2.05 2.05 0 00-1.71-.73zM721.78 425.76v-9.24h2.85a4.28 4.28 0 012.18.55 3.76 3.76 0 011.5 1.56 4.79 4.79 0 01.54 2.3v.42a4.91 4.91 0 01-.53 2.3 3.86 3.86 0 01-1.5 1.55 4.28 4.28 0 01-2.17.56zm1.91-7.7v6.17h.92a2.08 2.08 0 001.71-.73 3.33 3.33 0 00.6-2.09v-.49a3.32 3.32 0 00-.59-2.13 2 2 0 00-1.7-.73zM735.32 423.86H732l-.64 1.9h-2l3.44-9.24h1.76l3.46 9.24h-2zm-2.83-1.55h2.31l-1.16-3.46zM745 418.06h-2.83v7.7h-1.9v-7.7h-2.8v-1.54H745zM750.58 423.86h-3.34l-.63 1.9h-2l3.44-9.24h1.77l3.46 9.24h-2zm-2.82-1.55h2.31l-1.16-3.46zM759.25 424.23h4v1.53h-5.95v-9.24h1.9zM771.57 421.35a5.57 5.57 0 01-.48 2.39 3.59 3.59 0 01-1.38 1.59 4.05 4.05 0 01-4.11 0 3.61 3.61 0 01-1.39-1.57 5.53 5.53 0 01-.51-2.36v-.46a5.5 5.5 0 01.5-2.4 3.65 3.65 0 011.38-1.59 4.05 4.05 0 014.11 0 3.67 3.67 0 011.39 1.59 5.5 5.5 0 01.49 2.4zm-1.93-.42a3.86 3.86 0 00-.52-2.21 1.83 1.83 0 00-3 0 3.89 3.89 0 00-.53 2.19v.45a4 4 0 00.52 2.19 1.71 1.71 0 001.5.79 1.68 1.68 0 001.47-.76 3.81 3.81 0 00.52-2.19zM777.75 423.33a1 1 0 00-.38-.82 4.62 4.62 0 00-1.37-.61 11.5 11.5 0 01-1.57-.63 2.57 2.57 0 01-1.57-2.3 2.22 2.22 0 01.42-1.33 2.73 2.73 0 011.21-.92 4.59 4.59 0 011.78-.33 4.13 4.13 0 011.76.36 2.79 2.79 0 011.2 1 2.63 2.63 0 01.43 1.49h-1.9a1.27 1.27 0 00-.4-1 1.68 1.68 0 00-1.13-.35 1.8 1.8 0 00-1.08.29.94.94 0 00-.39.78.91.91 0 00.45.76 5.46 5.46 0 001.34.57 5.8 5.8 0 012.37 1.21 2.42 2.42 0 01.74 1.8 2.2 2.2 0 01-.91 1.88 3.93 3.93 0 01-2.44.69 4.7 4.7 0 01-1.94-.39 3.09 3.09 0 01-1.34-1.07 2.74 2.74 0 01-.46-1.58h1.91q0 1.53 1.83 1.53a1.81 1.81 0 001.06-.27.92.92 0 00.38-.76zM785.74 423.33a1 1 0 00-.38-.82 4.62 4.62 0 00-1.37-.61 11.5 11.5 0 01-1.57-.63 2.57 2.57 0 01-1.57-2.3 2.22 2.22 0 01.42-1.33 2.79 2.79 0 011.21-.92 4.59 4.59 0 011.78-.33 4.1 4.1 0 011.76.36 2.79 2.79 0 011.2 1 2.63 2.63 0 01.43 1.49h-1.9a1.24 1.24 0 00-.4-1 1.67 1.67 0 00-1.12-.35 1.81 1.81 0 00-1.09.29.94.94 0 00-.39.78.9.9 0 00.46.76 5.19 5.19 0 001.33.57 5.67 5.67 0 012.37 1.21 2.38 2.38 0 01.74 1.8 2.22 2.22 0 01-.9 1.88 4 4 0 01-2.45.69 4.7 4.7 0 01-1.94-.39 3.15 3.15 0 01-1.34-1.07 2.82 2.82 0 01-.46-1.58h1.91q0 1.53 1.83 1.53a1.81 1.81 0 001.06-.27.89.89 0 00.38-.76zM719.49 438.1v3.26h-1.9v-9.24h3.6a4.18 4.18 0 011.83.38 2.74 2.74 0 011.22 1.08 3.06 3.06 0 01.43 1.6 2.65 2.65 0 01-.93 2.14 3.9 3.9 0 01-2.58.78zm0-1.54h1.7a1.73 1.73 0 001.16-.35 1.32 1.32 0 00.39-1 1.52 1.52 0 00-.4-1.1 1.47 1.47 0 00-1.1-.43h-1.75zM729.39 438h-1.51v3.38H726v-9.24h3.44a3.84 3.84 0 012.52.73 2.48 2.48 0 01.89 2.06 2.79 2.79 0 01-.41 1.58 2.76 2.76 0 01-1.24 1l2 3.77v.09h-2zm-1.51-1.55h1.53a1.58 1.58 0 001.11-.36 1.28 1.28 0 00.4-1 1.42 1.42 0 00-.37-1 1.55 1.55 0 00-1.14-.38h-1.53zM739.83 437.34h-3.66v2.49h4.29v1.53h-6.19v-9.24h6.18v1.54h-4.28v2.2h3.66zM745 439.07l2.09-6.95h2.12l-3.21 9.24h-2l-3.21-9.24h2.12zM755.64 437.34H752v2.49h4.29v1.53h-6.2v-9.24h6.18v1.54H752v2.2h3.65zM764.91 441.36H763l-3.7-6.08v6.08h-1.91v-9.24h1.91l3.71 6.09v-6.09h1.9zM773.35 433.66h-2.84v7.7h-1.9v-7.7h-2.79v-1.54h7.53zM776.46 441.36h-1.91v-9.24h1.91zM785.81 437a5.57 5.57 0 01-.48 2.39 3.59 3.59 0 01-1.38 1.59 4.05 4.05 0 01-4.11 0 3.63 3.63 0 01-1.4-1.57 5.53 5.53 0 01-.5-2.36v-.46a5.65 5.65 0 01.49-2.4 3.67 3.67 0 011.39-1.59 4.05 4.05 0 014.11 0 3.67 3.67 0 011.39 1.59 5.5 5.5 0 01.49 2.4zm-1.93-.42a3.86 3.86 0 00-.52-2.21 1.84 1.84 0 00-3 0 3.89 3.89 0 00-.53 2.19v.44a4 4 0 00.52 2.2 1.7 1.7 0 001.5.78 1.68 1.68 0 001.47-.76 3.81 3.81 0 00.52-2.19zM794.71 441.36h-1.9l-3.71-6.08v6.08h-1.9v-9.24h1.9l3.71 6.09v-6.09h1.9z"
              />
              <text
                className="prefix__cls-85"
                transform="translate(738.89 285.88)"
              >
                {"\u2022 Network control"}
                <tspan x={0} y={12}>
                  {"\u2022 Content control"}
                </tspan>
                <tspan x={0} y={24}>
                  {"\u2022 User activity monitoring"}
                </tspan>
                <tspan x={0} y={36}>
                  {"\u2022 Content discovery*"}
                </tspan>
              </text>
            </g>
            <g
              id="prefix__ADVANCED_SECURITY_EDR"
              data-name="ADVANCED SECURITY + EDR"
            >
              <path
                d="M916.54 500l151.58-87.51a427.07 427.07 0 00-155.59-155.61L825 408.46A251.32 251.32 0 01916.54 500z"
                stroke="#f6bc65"
                fill="url(#prefix__radial-gradient-14)"
                strokeMiterlimit={10}
              />
              <path
                d="M916.54 500A251.32 251.32 0 00825 408.46l-37.51 65q2.29 1.33 4.55 2.73l.79.5c1.41.89 2.82 1.79 4.21 2.72l.27.18q2.29 1.53 4.54 3.15l.36.26c1.32 1 2.64 1.93 3.93 2.92l.74.57c2.84 2.19 5.62 4.48 8.32 6.84l.53.47q1.77 1.56 3.5 3.18l.63.58q3.92 3.69 7.6 7.6l.58.63q1.62 1.72 3.18 3.5l.47.53q3.54 4.05 6.84 8.32c.19.25.38.49.56.74 1 1.29 2 2.6 2.93 3.93l.26.36q1.62 2.25 3.15 4.54l.18.27c.93 1.39 1.83 2.8 2.72 4.21l.49.79c.93 1.5 1.85 3 2.73 4.55z"
                fill="url(#prefix__radial-gradient-15)"
              />
              <path
                className="prefix__cls-13"
                d="M820.94 469.26h-3.33l-.64 1.9h-2l3.44-9.24h1.76l3.46 9.24h-2zm-2.82-1.55h2.31l-1.16-3.46zM824.47 471.16v-9.24h2.85a4.28 4.28 0 012.18.55A3.76 3.76 0 01831 464a4.79 4.79 0 01.54 2.3v.42a4.91 4.91 0 01-.53 2.3 3.8 3.8 0 01-1.5 1.55 4.28 4.28 0 01-2.17.56zm1.91-7.7v6.17h.92a2.08 2.08 0 001.71-.73 3.33 3.33 0 00.6-2.09v-.49a3.32 3.32 0 00-.59-2.13 2 2 0 00-1.7-.73zM836.2 468.87l2.09-6.95h2.12l-3.22 9.24h-2l-3.19-9.24h2.12zM846 469.26h-3.34l-.63 1.9h-2l3.44-9.24h1.76l3.46 9.24h-2zm-2.82-1.55h2.31l-1.16-3.46zM857.07 471.16h-1.91l-3.7-6.08v6.08h-1.91v-9.24h1.91l3.71 6.09v-6.09h1.9zM866 468.08a3.26 3.26 0 01-1.1 2.35 3.9 3.9 0 01-2.62.86 3.48 3.48 0 01-2.8-1.2 4.9 4.9 0 01-1-3.28v-.57a5.6 5.6 0 01.47-2.35 3.6 3.6 0 011.34-1.56 4.2 4.2 0 014.61.32 3.5 3.5 0 011.13 2.4h-1.9a2 2 0 00-.5-1.29 1.85 1.85 0 00-1.31-.41 1.6 1.6 0 00-1.42.69 3.77 3.77 0 00-.49 2.11v.7a4 4 0 00.46 2.19 1.59 1.59 0 001.43.69 1.85 1.85 0 001.31-.4 1.83 1.83 0 00.5-1.25zM872.8 467.14h-3.66v2.49h4.29v1.53h-6.19v-9.24h6.18v1.54h-4.28v2.2h3.66zM874.55 471.16v-9.24h2.84a4.26 4.26 0 012.18.55 3.79 3.79 0 011.51 1.56 4.79 4.79 0 01.54 2.3v.42a4.79 4.79 0 01-.54 2.3 3.83 3.83 0 01-1.49 1.55 4.29 4.29 0 01-2.18.56zm1.9-7.7v6.17h.93a2 2 0 001.7-.73 3.27 3.27 0 00.61-2.09v-.49a3.32 3.32 0 00-.59-2.13 2.05 2.05 0 00-1.71-.73zM823.93 484.33a1 1 0 00-.38-.82 4.62 4.62 0 00-1.37-.61 11.5 11.5 0 01-1.57-.63A2.57 2.57 0 01819 480a2.22 2.22 0 01.42-1.33 2.73 2.73 0 011.21-.92 4.59 4.59 0 011.78-.33 4.13 4.13 0 011.76.36 2.79 2.79 0 011.2 1 2.63 2.63 0 01.43 1.49h-1.9a1.27 1.27 0 00-.4-1 1.68 1.68 0 00-1.13-.35 1.8 1.8 0 00-1.08.29.94.94 0 00-.39.78.9.9 0 00.46.76 5.19 5.19 0 001.33.57 5.8 5.8 0 012.37 1.21 2.42 2.42 0 01.74 1.8 2.2 2.2 0 01-.91 1.88 3.93 3.93 0 01-2.44.69 4.7 4.7 0 01-1.94-.39 3.09 3.09 0 01-1.34-1.07 2.74 2.74 0 01-.46-1.58h1.91q0 1.53 1.83 1.53a1.81 1.81 0 001.06-.27.92.92 0 00.42-.79zM832.69 482.74H829v2.49h4.3v1.53h-6.2v-9.24h6.18v1.54H829v2.2h3.66zM841.7 483.68a3.26 3.26 0 01-1.1 2.35 3.9 3.9 0 01-2.62.86 3.48 3.48 0 01-2.8-1.2 4.9 4.9 0 01-1-3.28v-.57a5.6 5.6 0 01.47-2.35 3.51 3.51 0 011.35-1.56 4.19 4.19 0 014.6.32 3.5 3.5 0 011.13 2.4h-1.9a2 2 0 00-.5-1.29A1.85 1.85 0 00838 479a1.62 1.62 0 00-1.42.68 3.81 3.81 0 00-.49 2.12v.7a4 4 0 00.46 2.19 1.59 1.59 0 001.43.69 1.57 1.57 0 001.81-1.65zM849.94 477.52v6.09a3.06 3.06 0 01-1 2.39 3.64 3.64 0 01-2.59.89 3.71 3.71 0 01-2.57-.86 3.08 3.08 0 01-1-2.36v-6.15h1.9v6.1a1.76 1.76 0 00.44 1.32 1.66 1.66 0 001.2.42 1.48 1.48 0 001.63-1.69v-6.15zM854.93 483.38h-1.52v3.38h-1.91v-9.24h3.44a3.89 3.89 0 012.53.73 2.5 2.5 0 01.88 2.06 2.79 2.79 0 01-.41 1.58 2.74 2.74 0 01-1.24 1l2 3.78v.09h-2zm-1.52-1.55H855a1.61 1.61 0 001.11-.36 1.31 1.31 0 00.39-1 1.4 1.4 0 00-.37-1 1.55 1.55 0 00-1.14-.37h-1.53zM861.83 486.76h-1.91v-9.24h1.91zM870.36 479.06h-2.83v7.7h-1.9v-7.7h-2.79v-1.54h7.52zM874.74 481.68l1.92-4.16h2.08l-3 5.89v3.35h-1.94v-3.35l-3-5.89h2.09zM837.37 497.19h2.29v1.65h-2.29v2.59h-1.75v-2.59h-2.3v-1.65h2.3v-2.48h1.75zM849.68 498.34H846v2.49h4.29v1.53h-6.19v-9.24h6.18v1.54H846v2.2h3.66zM851.43 502.36v-9.24h2.85a4.31 4.31 0 012.18.55 3.76 3.76 0 011.5 1.56 4.79 4.79 0 01.54 2.3v.47a4.89 4.89 0 01-.53 2.29 3.8 3.8 0 01-1.5 1.55 4.29 4.29 0 01-2.18.56zm1.91-7.7v6.17h.92a2 2 0 001.7-.73 3.27 3.27 0 00.61-2.09v-.49a3.32 3.32 0 00-.59-2.13 2 2 0 00-1.7-.73zM863.3 499h-1.51v3.38h-1.91v-9.24h3.43a3.85 3.85 0 012.53.73 2.51 2.51 0 01.89 2.06 2.88 2.88 0 01-.41 1.58 2.81 2.81 0 01-1.24 1l2 3.77v.09h-2zm-1.51-1.55h1.53a1.58 1.58 0 001.11-.36 1.32 1.32 0 00.4-1 1.38 1.38 0 00-.38-1 1.52 1.52 0 00-1.14-.38h-1.52z"
              />
              <text
                className="prefix__cls-85"
                transform="translate(880.89 373.88)"
              >
                {"\u2022 "}
                <tspan className="prefix__cls-91" x={6.08} y={0}>
                  {"E"}
                </tspan>
                <tspan className="prefix__cls-96" x={11.58} y={0}>
                  {"v"}
                </tspan>
                <tspan x={16.57} y={0}>
                  {"ents collection"}
                </tspan>
                <tspan x={0} y={12}>
                  {"\u2022 "}
                </tspan>
                <tspan className="prefix__cls-99" x={6.08} y={12}>
                  {"A"}
                </tspan>
                <tspan x={12.76} y={12}>
                  {"u"}
                </tspan>
                <tspan className="prefix__cls-95" x={18.35} y={12}>
                  {"t"}
                </tspan>
                <tspan x={21.59} y={12}>
                  {"omated "}
                </tspan>
                <tspan className="prefix__cls-87" x={58.17} y={12}>
                  {"r"}
                </tspan>
                <tspan x={61.72} y={12}>
                  {"esponse"}
                </tspan>
                <tspan x={0} y={24}>
                  {"\u2022 Security incident management"}
                </tspan>
                <tspan x={0} y={36}>
                  {"\u2022 Ad"}
                </tspan>
                <tspan className="prefix__cls-90" x={18.45} y={36}>
                  {"v"}
                </tspan>
                <tspan x={23.43} y={36}>
                  {"anced Security"}
                </tspan>
              </text>
            </g>
            <g id="prefix__ADVANCED_SECURITY" data-name="ADVANCED SECURITY">
              <path
                d="M950 625h175a423.05 423.05 0 00-56.88-212.53L916.54 500A249 249 0 01950 625z"
                stroke="#f26d57"
                fill="url(#prefix__radial-gradient-16)"
                strokeMiterlimit={10}
              />
              <path
                d="M916.54 500l-65 37.51q1.36 2.34 2.65 4.74l.25.48c.74 1.38 1.45 2.76 2.15 4.16l.45.9c.71 1.44 1.4 2.9 2.07 4.36l.16.34q1.13 2.46 2.17 4.95l.19.48q.9 2.16 1.74 4.35l.41 1.08q.8 2.1 1.53 4.23l.26.72c.57 1.68 1.13 3.38 1.65 5.08.06.18.1.35.16.53q.68 2.22 1.29 4.47c.12.43.24.86.35 1.29.36 1.35.71 2.7 1 4.07l.27 1.09c.4 1.72.78 3.44 1.13 5.18 0 .18.07.36.11.54.3 1.53.58 3.06.85 4.6.08.5.17 1 .25 1.49.21 1.31.41 2.62.59 4 .07.46.14.93.2 1.39.23 1.75.44 3.5.62 5.27v.42c.16 1.62.3 3.23.41 4.86 0 .53.07 1.07.1 1.61.08 1.3.15 2.6.2 3.91l.06 1.59c.05 1.79.09 3.58.09 5.38h75A249 249 0 00916.54 500z"
                fill="url(#prefix__radial-gradient-17)"
              />
              <path
                className="prefix__cls-13"
                d="M877.94 572.26h-3.33l-.64 1.9h-2l3.44-9.24h1.76l3.46 9.24h-2zm-2.82-1.55h2.31l-1.16-3.46zM881.47 574.16v-9.24h2.85a4.28 4.28 0 012.18.55A3.76 3.76 0 01888 567a4.79 4.79 0 01.54 2.3v.43a4.89 4.89 0 01-.53 2.29 3.74 3.74 0 01-1.5 1.55 4.28 4.28 0 01-2.17.56zm1.91-7.7v6.17h.92a2.08 2.08 0 001.71-.73 3.33 3.33 0 00.6-2.09v-.49a3.32 3.32 0 00-.59-2.13 2 2 0 00-1.7-.73zM893.2 571.87l2.09-7h2.12l-3.22 9.24h-2l-3.19-9.19h2.12zM903 572.26h-3.34l-.63 1.9h-2l3.44-9.24h1.76l3.46 9.24h-2zm-2.82-1.55h2.31l-1.16-3.46zM914.07 574.16h-1.91l-3.7-6.08v6.08h-1.91v-9.24h1.91l3.71 6.09v-6.09h1.9zM923 571.08a3.26 3.26 0 01-1.1 2.35 3.9 3.9 0 01-2.62.86 3.48 3.48 0 01-2.8-1.2 4.9 4.9 0 01-1-3.28v-.57a5.6 5.6 0 01.47-2.35 3.66 3.66 0 011.34-1.56 4.2 4.2 0 014.61.32 3.5 3.5 0 011.13 2.4h-1.9a2 2 0 00-.5-1.29 1.85 1.85 0 00-1.31-.41 1.6 1.6 0 00-1.42.69 3.77 3.77 0 00-.49 2.11v.7a4 4 0 00.46 2.19 1.59 1.59 0 001.43.69 1.85 1.85 0 001.31-.4 1.81 1.81 0 00.5-1.25zM929.8 570.14h-3.66v2.49h4.29v1.53h-6.19v-9.24h6.18v1.54h-4.28v2.2h3.66zM931.55 574.16v-9.24h2.84a4.26 4.26 0 012.18.55 3.79 3.79 0 011.51 1.56 4.79 4.79 0 01.54 2.3v.43a4.78 4.78 0 01-.54 2.29 3.77 3.77 0 01-1.49 1.55 4.29 4.29 0 01-2.18.56zm1.9-7.7v6.17h.93a2 2 0 001.7-.73 3.27 3.27 0 00.61-2.09v-.49a3.32 3.32 0 00-.59-2.13 2.05 2.05 0 00-1.71-.73zM882.55 587.34a1 1 0 00-.38-.83 4.75 4.75 0 00-1.37-.61 11 11 0 01-1.57-.63 2.56 2.56 0 01-1.57-2.29 2.25 2.25 0 01.42-1.34 2.73 2.73 0 011.21-.92 4.58 4.58 0 011.77-.33 4.18 4.18 0 011.77.36 2.85 2.85 0 011.2 1 2.63 2.63 0 01.43 1.49h-1.9a1.27 1.27 0 00-.4-1 1.7 1.7 0 00-1.13-.35 1.8 1.8 0 00-1.08.29.94.94 0 00-.39.78.91.91 0 00.45.76 5.46 5.46 0 001.34.57 5.8 5.8 0 012.37 1.21 2.42 2.42 0 01.74 1.8 2.2 2.2 0 01-.91 1.88 3.93 3.93 0 01-2.44.69 4.7 4.7 0 01-1.94-.39 3.09 3.09 0 01-1.34-1.07 2.74 2.74 0 01-.46-1.58h1.91q0 1.53 1.83 1.53a1.83 1.83 0 001.06-.27.91.91 0 00.38-.75zM891.31 585.74h-3.66v2.49h4.29v1.53h-6.19v-9.24h6.18v1.54h-4.28v2.2h3.66zM900.32 586.68a3.27 3.27 0 01-1.11 2.35 3.85 3.85 0 01-2.61.86 3.48 3.48 0 01-2.8-1.2 4.9 4.9 0 01-1-3.28v-.57a5.6 5.6 0 01.47-2.35 3.54 3.54 0 011.34-1.56 4.2 4.2 0 014.61.32 3.5 3.5 0 011.13 2.4h-1.91a1.9 1.9 0 00-.49-1.29 1.85 1.85 0 00-1.31-.41 1.6 1.6 0 00-1.42.69 3.77 3.77 0 00-.49 2.11v.7a4 4 0 00.46 2.19 1.57 1.57 0 001.43.69 1.87 1.87 0 001.31-.4 1.83 1.83 0 00.5-1.25zM908.56 580.52v6.09a3.06 3.06 0 01-.95 2.39 3.64 3.64 0 01-2.59.89 3.7 3.7 0 01-2.57-.86 3 3 0 01-1-2.35v-6.16h1.9v6.1a1.76 1.76 0 00.44 1.32 1.66 1.66 0 001.2.42c1.07 0 1.61-.57 1.63-1.69v-6.15zM913.54 586.38H912v3.38h-1.91v-9.24h3.44a3.84 3.84 0 012.52.73 2.48 2.48 0 01.89 2.06 2.79 2.79 0 01-.41 1.58 2.76 2.76 0 01-1.24 1l2 3.77v.09h-2zm-1.54-1.55h1.53a1.58 1.58 0 001.11-.36 1.28 1.28 0 00.4-1 1.42 1.42 0 00-.37-1 1.55 1.55 0 00-1.14-.38H912zM920.44 589.76h-1.9v-9.24h1.9zM929 582.06h-2.83v7.7h-1.9v-7.7h-2.8v-1.54H929zM933.36 584.68l1.92-4.16h2.08l-3 5.89v3.35h-1.94v-3.35l-3-5.89h2.09z"
              />
              <path
                className="prefix__cls-48"
                d="M959.55 501.14a1.08 1.08 0 01.32-.81 1.16 1.16 0 01.83-.31 1.19 1.19 0 01.85.3 1.12 1.12 0 01.32.8v.21a1.1 1.1 0 01-.32.81 1.31 1.31 0 01-1.67 0 1.07 1.07 0 01-.33-.83zM969.62 503.42h-2.56l-.49 1.46H965l2.65-7.11H969l2.66 7.11h-1.55zm-2.17-1.19h1.78l-.9-2.66zM973.31 499.6v.61a1.86 1.86 0 011.52-.71 1.53 1.53 0 011.25.5 2.22 2.22 0 01.42 1.47v3.41h-1.41v-3.38a1 1 0 00-.19-.66.9.9 0 00-.65-.2 1 1 0 00-.9.51v3.73H972v-5.28zM979.3 498.3v1.3h.91v1h-.91v2.63a.64.64 0 00.11.42.55.55 0 00.43.13 2.58 2.58 0 00.42 0v1.06a2.76 2.76 0 01-.86.13 1.35 1.35 0 01-1.51-1.5v-2.84h-.77v-1h.77v-1.3zM981 498.23a.7.7 0 01.21-.52.8.8 0 01.58-.2.79.79 0 01.58.2.7.7 0 01.21.52.71.71 0 01-.21.53.81.81 0 01-.58.21.79.79 0 01-.57-.21.68.68 0 01-.22-.53zm1.5 6.65h-1.42v-5.28h1.42zM985.62 503.16l1-3.56h1.48l-1.79 5.28H985l-1.79-5.28h1.48zM988.69 498.23a.7.7 0 01.21-.52.77.77 0 01.58-.2.76.76 0 01.57.2.67.67 0 01.22.52.68.68 0 01-.22.53.77.77 0 01-.57.21.81.81 0 01-.58-.21.71.71 0 01-.21-.53zm1.5 6.65h-1.42v-5.28h1.42zM994.32 500.92h-.51a1 1 0 00-1 .54v3.45h-1.41v-5.31h1.33v.63a1.32 1.32 0 011.18-.73 1.31 1.31 0 01.44.07zM998.16 504.35a1.78 1.78 0 01-1.45.63 1.65 1.65 0 01-1.29-.49 2.08 2.08 0 01-.46-1.43v-3.46h1.41v3.4c0 .55.25.82.75.82a1 1 0 001-.49v-3.73h1.42v5.28h-1.34zM1003.45 503.42a.44.44 0 00-.25-.4 3 3 0 00-.83-.27c-1.25-.26-1.88-.8-1.88-1.6a1.46 1.46 0 01.58-1.18 2.39 2.39 0 011.53-.47 2.53 2.53 0 011.61.48 1.48 1.48 0 01.6 1.23h-1.41a.69.69 0 00-.2-.5.83.83 0 00-.61-.2.84.84 0 00-.55.16.5.5 0 00-.19.41.43.43 0 00.22.38 2.22 2.22 0 00.75.25 7.52 7.52 0 01.89.23 1.47 1.47 0 011.11 1.43 1.34 1.34 0 01-.62 1.16 2.64 2.64 0 01-1.6.45 3 3 0 01-1.18-.23 2 2 0 01-.8-.65 1.52 1.52 0 01-.3-.9h1.34a.72.72 0 00.28.58 1.11 1.11 0 00.69.2 1.07 1.07 0 00.62-.15.51.51 0 00.2-.41zM1011.28 504.88a1.64 1.64 0 01-.14-.47 1.7 1.7 0 01-1.33.57 1.88 1.88 0 01-1.29-.45 1.43 1.43 0 01-.51-1.13 1.49 1.49 0 01.63-1.29 3 3 0 011.79-.45h.65v-.31a.87.87 0 00-.18-.58.75.75 0 00-.6-.22.83.83 0 00-.56.17.59.59 0 00-.2.47h-1.41a1.4 1.4 0 01.28-.85 1.84 1.84 0 01.8-.61 2.94 2.94 0 011.17-.23 2.36 2.36 0 011.55.49 1.73 1.73 0 01.57 1.38v2.29a2.46 2.46 0 00.21 1.14v.08zm-1.16-1a1.1 1.1 0 00.57-.14.83.83 0 00.39-.37v-.91h-.52c-.71 0-1.09.25-1.13.73v.09a.57.57 0 00.19.43.69.69 0 00.5.19zM1014.88 499.6v.61a1.84 1.84 0 011.52-.71 1.56 1.56 0 011.25.5 2.34 2.34 0 01.42 1.47v3.41h-1.42v-3.38a1 1 0 00-.19-.66.9.9 0 00-.65-.2 1 1 0 00-.89.51v3.73h-1.42v-5.28zM1019 502.2a3.15 3.15 0 01.56-2 1.8 1.8 0 011.52-.74 1.64 1.64 0 011.27.58v-2.7h1.42v7.5h-1.28l-.07-.56a1.65 1.65 0 01-1.35.66 1.78 1.78 0 01-1.5-.73 3.27 3.27 0 01-.57-2.01zm1.42.1a2.16 2.16 0 00.25 1.15.87.87 0 00.76.39.94.94 0 00.92-.55v-2.09a.94.94 0 00-.91-.56c-.72 0-1.06.56-1.06 1.66zM1030.37 504.88a1.64 1.64 0 01-.14-.47 1.71 1.71 0 01-1.33.57 1.88 1.88 0 01-1.29-.45 1.43 1.43 0 01-.51-1.13 1.51 1.51 0 01.62-1.29 3.07 3.07 0 011.8-.45h.65v-.31a.83.83 0 00-.19-.58.71.71 0 00-.59-.22.82.82 0 00-.56.17.59.59 0 00-.2.47h-1.41a1.4 1.4 0 01.28-.85 1.84 1.84 0 01.8-.61 2.89 2.89 0 011.16-.23 2.34 2.34 0 011.55.49 1.71 1.71 0 01.58 1.38v2.29a2.46 2.46 0 00.21 1.14v.08zm-1.17-1a1.16 1.16 0 00.58-.14.83.83 0 00.39-.37v-.91h-.53c-.7 0-1.08.25-1.12.73v.09a.54.54 0 00.19.43.68.68 0 00.49.19zM1034 499.6v.61a1.86 1.86 0 011.52-.71 1.53 1.53 0 011.25.5 2.22 2.22 0 01.42 1.47v3.41h-1.41v-3.38a1 1 0 00-.19-.66.9.9 0 00-.65-.2 1 1 0 00-.9.51v3.73h-1.41v-5.28zM1040 498.3v1.3h.9v1h-.9v2.63a.64.64 0 00.11.42.55.55 0 00.43.13 2.58 2.58 0 00.42 0v1.06a2.76 2.76 0 01-.86.13 1.35 1.35 0 01-1.51-1.5v-2.84h-.77v-1h.77v-1.3zM1041.64 498.23a.7.7 0 01.21-.52.94.94 0 011.16 0 .7.7 0 01.21.52.68.68 0 01-.22.53.88.88 0 01-1.14 0 .68.68 0 01-.22-.53zm1.5 6.65h-1.42v-5.28h1.42zM1047.05 502.41h-2.75v-1.14h2.75zM1049.5 499.6v.59a1.84 1.84 0 011.51-.69 1.42 1.42 0 011.41.81 1.81 1.81 0 011.58-.81 1.58 1.58 0 011.28.5 2.32 2.32 0 01.42 1.51v3.37h-1.41v-3.37a1 1 0 00-.18-.66.77.77 0 00-.62-.21.88.88 0 00-.88.61v3.63h-1.42v-3.37a1 1 0 00-.18-.66.76.76 0 00-.61-.21.92.92 0 00-.87.5v3.74h-1.41v-5.28zM1059.9 504.88a1.38 1.38 0 01-.14-.47 1.73 1.73 0 01-1.34.57 1.87 1.87 0 01-1.28-.45 1.43 1.43 0 01-.51-1.13 1.48 1.48 0 01.62-1.29 3 3 0 011.8-.45h.65v-.31a.88.88 0 00-.19-.58.73.73 0 00-.59-.22.8.8 0 00-.56.17.57.57 0 00-.21.47h-1.41a1.41 1.41 0 01.29-.85 1.73 1.73 0 01.8-.61 2.86 2.86 0 011.16-.23 2.34 2.34 0 011.55.49 1.73 1.73 0 01.57 1.38v2.29a2.75 2.75 0 00.21 1.14v.08zm-1.17-1a1.16 1.16 0 00.58-.14.93.93 0 00.39-.37v-.91h-.53c-.71 0-1.08.25-1.13.73v.09a.57.57 0 00.18.43.72.72 0 00.51.19zM1063.69 504.88h-1.42v-7.5h1.42zM1069.44 503l.7-3.37h1.36l-1.35 5.28H1069l-1-3.32-1 3.32h-1.18l-1.35-5.28h1.37l.68 3.36 1-3.36h1zM1075.26 504.88a1.38 1.38 0 01-.14-.47 1.72 1.72 0 01-1.34.57 1.87 1.87 0 01-1.28-.45 1.43 1.43 0 01-.51-1.13 1.48 1.48 0 01.62-1.29 3 3 0 011.8-.45h.65v-.31a.83.83 0 00-.19-.58.71.71 0 00-.59-.22.8.8 0 00-.56.17.56.56 0 00-.2.47h-1.42a1.41 1.41 0 01.29-.85 1.79 1.79 0 01.8-.61 2.86 2.86 0 011.16-.23 2.34 2.34 0 011.55.49 1.73 1.73 0 01.57 1.38v2.29a2.75 2.75 0 00.21 1.14v.08zm-1.17-1a1.16 1.16 0 00.58-.14.93.93 0 00.39-.37v-.91h-.53c-.7 0-1.08.25-1.13.73v.09a.57.57 0 00.18.43.72.72 0 00.51.19zM1080.53 500.92h-.51a1 1 0 00-1 .54v3.45h-1.41v-5.31h1.33v.63a1.32 1.32 0 011.18-.73 1.31 1.31 0 01.44.07zM1083.54 505a2.62 2.62 0 01-1.89-.71 2.57 2.57 0 01-.73-1.9v-.14a3.25 3.25 0 01.31-1.42 2.35 2.35 0 01.87-1 2.53 2.53 0 011.29-.34 2.16 2.16 0 011.7.69 2.75 2.75 0 01.63 1.94v.57h-3.37a1.33 1.33 0 00.42.83 1.24 1.24 0 00.87.31 1.5 1.5 0 001.27-.59l.7.78a2.2 2.2 0 01-.86.7 2.85 2.85 0 01-1.21.28zm-.16-4.34a.89.89 0 00-.68.29 1.51 1.51 0 00-.33.81h2v-.11a1.07 1.07 0 00-.25-.73.94.94 0 00-.74-.28zM971.66 514.29a3.19 3.19 0 01-.55 2 1.78 1.78 0 01-1.5.73 1.63 1.63 0 01-1.29-.55v2.49h-1.42v-7.36h1.31v.52a1.66 1.66 0 011.34-.62 1.78 1.78 0 011.52.73 3.25 3.25 0 01.54 2zm-1.41-.11A2.14 2.14 0 00970 513a.85.85 0 00-.76-.4.92.92 0 00-.91.51v2.17a.93.93 0 00.92.52c.66.04 1-.51 1-1.62zM975.5 512.92h-.5a1 1 0 00-1 .54v3.45h-1.42v-5.31h1.34v.63a1.31 1.31 0 011.17-.73 1.23 1.23 0 01.44.07zM975.79 514.19a3.16 3.16 0 01.3-1.4 2.17 2.17 0 01.87-.95 2.59 2.59 0 011.32-.34 2.41 2.41 0 011.75.66 2.61 2.61 0 01.75 1.78v.36a2.73 2.73 0 01-.68 2 2.63 2.63 0 01-3.64 0 2.78 2.78 0 01-.68-2zm1.41.1a2 2 0 00.28 1.16 1 1 0 001.61 0 2.17 2.17 0 00.29-1.26 2 2 0 00-.29-1.14.94.94 0 00-.81-.41 1 1 0 00-.8.4 2.2 2.2 0 00-.28 1.25zM983.35 510.3v1.3h.9v1h-.9v2.63a.64.64 0 00.11.42.55.55 0 00.43.13 2.58 2.58 0 00.42 0v1.06a2.76 2.76 0 01-.86.13 1.35 1.35 0 01-1.51-1.5v-2.84h-.77v-1h.77v-1.3zM987.47 517a2.62 2.62 0 01-1.89-.71 2.53 2.53 0 01-.73-1.9v-.14a3.12 3.12 0 01.31-1.42 2.22 2.22 0 01.87-1 2.47 2.47 0 011.28-.34 2.17 2.17 0 011.71.69 2.74 2.74 0 01.62 1.94v.57h-3.36a1.32 1.32 0 00.41.83 1.24 1.24 0 00.87.31 1.51 1.51 0 001.28-.59l.69.78a2.13 2.13 0 01-.86.7 2.77 2.77 0 01-1.2.28zm-.16-4.34a.88.88 0 00-.68.29 1.44 1.44 0 00-.34.81h2v-.11a1 1 0 00-.26-.73.9.9 0 00-.72-.28zM992.64 515.84a1 1 0 00.64-.21.76.76 0 00.25-.57h1.32a1.79 1.79 0 01-.29 1 1.92 1.92 0 01-.79.7 2.5 2.5 0 01-1.1.24 2.3 2.3 0 01-1.79-.72 2.83 2.83 0 01-.66-2v-.09a2.85 2.85 0 01.65-1.95 2.31 2.31 0 011.79-.73 2.21 2.21 0 011.59.57 2 2 0 01.6 1.5h-1.32a1 1 0 00-.25-.67.87.87 0 00-.65-.26.83.83 0 00-.74.36 2.07 2.07 0 00-.25 1.17v.14a2.19 2.19 0 00.24 1.18.86.86 0 00.76.34zM997.35 510.3v1.3h.9v1h-.9v2.63a.64.64 0 00.11.42.55.55 0 00.43.13 2.58 2.58 0 00.42 0v1.06a2.8 2.8 0 01-.86.13 1.35 1.35 0 01-1.51-1.5v-2.84h-.77v-1h.77v-1.3zM999 510.23a.7.7 0 01.21-.52.79.79 0 01.58-.2.8.8 0 01.58.2.7.7 0 01.21.52.68.68 0 01-.22.53.88.88 0 01-1.14 0 .68.68 0 01-.22-.53zm1.5 6.65h-1.42v-5.28h1.42zM1001.47 514.19a3.16 3.16 0 01.3-1.4 2.17 2.17 0 01.87-.95 2.59 2.59 0 011.32-.34 2.39 2.39 0 011.75.66 2.61 2.61 0 01.75 1.78v.36a2.77 2.77 0 01-.67 2 2.65 2.65 0 01-3.65 0 2.82 2.82 0 01-.68-2zm1.41.1a2.07 2.07 0 00.28 1.16.94.94 0 00.81.39 1 1 0 00.81-.39 2.17 2.17 0 00.28-1.26 2 2 0 00-.28-1.14 1 1 0 00-.82-.41 1 1 0 00-.8.4 2.29 2.29 0 00-.28 1.25zM1008.64 511.6l.05.61a1.84 1.84 0 011.52-.71 1.54 1.54 0 011.25.5 2.34 2.34 0 01.42 1.47v3.41h-1.42v-3.38a1 1 0 00-.19-.66.9.9 0 00-.65-.2 1 1 0 00-.89.51v3.73h-1.42v-5.28zM1020 515l.69-3.37h1.36l-1.34 5.28h-1.18l-1-3.32-1 3.32h-1.17l-1.36-5.31h1.36l.69 3.36 1-3.36h1zM1022.77 510.23a.67.67 0 01.22-.52.76.76 0 01.57-.2.77.77 0 01.58.2.74.74 0 010 1.05.89.89 0 01-1.15 0 .72.72 0 01-.22-.53zm1.5 6.65h-1.41v-5.28h1.41zM1027.12 510.3v1.3h.91v1h-.91v2.63a.59.59 0 00.12.42c.07.09.21.13.43.13a2.54 2.54 0 00.41 0v1.06a2.74 2.74 0 01-.85.13 1.35 1.35 0 01-1.52-1.5v-2.84h-.77v-1h.77v-1.3zM1030.19 512.18a1.77 1.77 0 011.41-.68c1.15 0 1.73.67 1.74 2v3.38h-1.41v-3.35a1 1 0 00-.19-.67.82.82 0 00-.65-.22 1 1 0 00-.9.48v3.76h-1.41v-7.5h1.41zM1038.39 516.88H1037v-7.5h1.42zM1039.33 514.19a3.16 3.16 0 01.3-1.4 2.29 2.29 0 01.87-.95 2.63 2.63 0 011.33-.34 2.38 2.38 0 011.74.66 2.66 2.66 0 01.76 1.78v.36a2.77 2.77 0 01-.68 2 2.65 2.65 0 01-3.65 0 2.82 2.82 0 01-.68-2zm1.41.1a2 2 0 00.29 1.16.92.92 0 00.81.39 1 1 0 00.8-.39 2.17 2.17 0 00.28-1.26 2 2 0 00-.28-1.14 1 1 0 00-.81-.41.92.92 0 00-.8.4 2.2 2.2 0 00-.29 1.25zM1047.4 515.84a1 1 0 00.64-.21.76.76 0 00.25-.57h1.32a1.79 1.79 0 01-.29 1 1.92 1.92 0 01-.79.7 2.5 2.5 0 01-1.1.24 2.3 2.3 0 01-1.79-.72 2.82 2.82 0 01-.65-2v-.09a2.85 2.85 0 01.64-1.95 2.31 2.31 0 011.79-.73 2.21 2.21 0 011.59.57 1.94 1.94 0 01.6 1.5h-1.32a1 1 0 00-.25-.67.87.87 0 00-.65-.26.84.84 0 00-.74.36 2.07 2.07 0 00-.25 1.17v.14a2.09 2.09 0 00.25 1.18.83.83 0 00.75.34zM1053.48 516.88a1.64 1.64 0 01-.14-.47 1.71 1.71 0 01-1.33.57 1.88 1.88 0 01-1.29-.45 1.43 1.43 0 01-.51-1.13 1.51 1.51 0 01.62-1.29 3.07 3.07 0 011.8-.45h.65v-.31a.83.83 0 00-.19-.58.71.71 0 00-.59-.22.82.82 0 00-.56.17.59.59 0 00-.2.47h-1.41a1.4 1.4 0 01.28-.85 1.84 1.84 0 01.8-.61 2.89 2.89 0 011.16-.23 2.34 2.34 0 011.55.49 1.71 1.71 0 01.58 1.38v2.29a2.46 2.46 0 00.21 1.14v.08zm-1.17-1a1.16 1.16 0 00.58-.14.83.83 0 00.39-.37v-.91h-.53c-.7 0-1.08.25-1.12.73v.09a.54.54 0 00.19.43.68.68 0 00.49.19zM1057.27 516.88h-1.42v-7.5h1.42zM969.77 527.42a.45.45 0 00-.26-.4 3 3 0 00-.82-.27c-1.26-.26-1.89-.8-1.89-1.6a1.47 1.47 0 01.59-1.18 2.34 2.34 0 011.52-.47 2.51 2.51 0 011.61.48 1.48 1.48 0 01.6 1.23h-1.41a.68.68 0 00-.19-.5.84.84 0 00-.61-.2.87.87 0 00-.56.16.5.5 0 00-.19.41.43.43 0 00.22.38 2.22 2.22 0 00.75.25 7.52 7.52 0 01.89.23 1.47 1.47 0 011.12 1.43 1.36 1.36 0 01-.62 1.16 2.68 2.68 0 01-1.6.45 2.89 2.89 0 01-1.18-.23 2 2 0 01-.81-.65 1.51 1.51 0 01-.29-.9H968a.76.76 0 00.28.58 1.14 1.14 0 00.7.2 1 1 0 00.61-.15.49.49 0 00.18-.41zM972 522.23a.7.7 0 01.21-.52.77.77 0 01.58-.2.76.76 0 01.57.2.67.67 0 01.22.52.68.68 0 01-.22.53.77.77 0 01-.57.21.81.81 0 01-.58-.21.71.71 0 01-.21-.53zm1.5 6.65h-1.42v-5.28h1.42zM974.49 526.2a3.1 3.1 0 01.58-2 1.88 1.88 0 011.56-.75 1.63 1.63 0 011.35.6l.06-.5h1.28v5.11a2.23 2.23 0 01-.31 1.2 2 2 0 01-.89.79 3.27 3.27 0 01-1.34.26 2.82 2.82 0 01-1.13-.23 1.94 1.94 0 01-.84-.6l.63-.86a1.64 1.64 0 001.28.6 1.21 1.21 0 00.87-.3 1.15 1.15 0 00.32-.86v-.28a1.64 1.64 0 01-1.29.55 1.89 1.89 0 01-1.54-.74 3.13 3.13 0 01-.59-2zm1.41.1a2 2 0 00.29 1.14.92.92 0 00.79.4 1 1 0 00.93-.48v-2.23a1 1 0 00-.92-.49.93.93 0 00-.8.42 2.2 2.2 0 00-.29 1.24zM981.7 523.6v.61a1.85 1.85 0 011.52-.71 1.54 1.54 0 011.25.5 2.34 2.34 0 01.42 1.47v3.41h-1.41v-3.38a1 1 0 00-.2-.66.9.9 0 00-.65-.2 1 1 0 00-.89.51v3.73h-1.41v-5.28zM989.07 528.88a1.38 1.38 0 01-.14-.47 1.73 1.73 0 01-1.34.57 1.87 1.87 0 01-1.28-.45 1.43 1.43 0 01-.51-1.13 1.48 1.48 0 01.62-1.29 3 3 0 011.8-.45h.65v-.31a.88.88 0 00-.19-.58.73.73 0 00-.59-.22.8.8 0 00-.56.17.57.57 0 00-.21.47h-1.41a1.41 1.41 0 01.29-.85 1.79 1.79 0 01.8-.61 2.86 2.86 0 011.16-.23 2.34 2.34 0 011.55.49 1.73 1.73 0 01.57 1.38v2.29a2.75 2.75 0 00.21 1.14v.08zm-1.17-1a1.16 1.16 0 00.58-.14.93.93 0 00.39-.37v-.91h-.53c-.71 0-1.08.25-1.13.73v.09a.57.57 0 00.18.43.72.72 0 00.51.19zM993.06 522.3v1.3h.9v1h-.9v2.63a.59.59 0 00.11.42.54.54 0 00.43.13 2.54 2.54 0 00.41 0v1.06a2.7 2.7 0 01-.85.13 1.35 1.35 0 01-1.51-1.5v-2.84h-.78v-1h.78v-1.3zM997.91 528.35a1.78 1.78 0 01-1.45.63 1.65 1.65 0 01-1.29-.49 2.08 2.08 0 01-.46-1.43v-3.46h1.41v3.4c0 .55.25.82.76.82a1 1 0 001-.49v-3.73h1.42v5.28H998zM1003.31 524.92h-.51a1 1 0 00-1 .54v3.45h-1.41v-5.31h1.33v.63a1.33 1.33 0 011.18-.73 1.27 1.27 0 01.44.07zM1006.33 529a2.59 2.59 0 01-1.89-.71 2.53 2.53 0 01-.73-1.9v-.14a3.25 3.25 0 01.3-1.42 2.3 2.3 0 01.88-1 2.47 2.47 0 011.28-.34 2.2 2.2 0 011.71.69 2.79 2.79 0 01.62 1.94v.57h-3.36a1.27 1.27 0 00.41.83 1.24 1.24 0 00.87.31 1.53 1.53 0 001.28-.59l.69.78a2.13 2.13 0 01-.86.7 2.77 2.77 0 01-1.2.28zm-.16-4.34a.88.88 0 00-.68.29 1.44 1.44 0 00-.34.81h2v-.11a1 1 0 00-.25-.73.9.9 0 00-.73-.28zM1012.05 526.41h-2.75v-1.14h2.75zM1017.94 526.29a3.19 3.19 0 01-.54 2 1.79 1.79 0 01-1.52.71 1.65 1.65 0 01-1.37-.66l-.06.56h-1.27v-7.5h1.41v2.69a1.61 1.61 0 011.28-.57 1.82 1.82 0 011.52.71 3.19 3.19 0 01.55 2zm-1.41-.11a2.11 2.11 0 00-.26-1.17.83.83 0 00-.75-.37.94.94 0 00-.93.55v2.1a.94.94 0 00.94.55.88.88 0 00.9-.67 4 4 0 00.1-.99zM1021.87 528.88a1.38 1.38 0 01-.14-.47 1.71 1.71 0 01-1.33.57 1.88 1.88 0 01-1.29-.45 1.43 1.43 0 01-.51-1.13 1.51 1.51 0 01.62-1.29 3.07 3.07 0 011.8-.45h.65v-.31a.83.83 0 00-.19-.58.71.71 0 00-.59-.22.8.8 0 00-.56.17.56.56 0 00-.2.47h-1.41a1.4 1.4 0 01.28-.85 1.84 1.84 0 01.8-.61 2.86 2.86 0 011.16-.23 2.34 2.34 0 011.55.49 1.74 1.74 0 01.58 1.38v2.29a2.46 2.46 0 00.21 1.14v.08zm-1.17-1a1.16 1.16 0 00.58-.14.88.88 0 00.39-.37v-.91h-.53c-.7 0-1.08.25-1.13.73v.09a.54.54 0 00.19.43.68.68 0 00.5.19zM1027 527.42a.44.44 0 00-.26-.4 2.87 2.87 0 00-.82-.27c-1.25-.26-1.88-.8-1.88-1.6a1.46 1.46 0 01.58-1.18 2.39 2.39 0 011.53-.47 2.53 2.53 0 011.61.48 1.48 1.48 0 01.6 1.23H1027a.69.69 0 00-.2-.5 1 1 0 00-1.16 0 .51.51 0 00-.2.41.44.44 0 00.23.38 2.07 2.07 0 00.75.25 8.08 8.08 0 01.89.23 1.47 1.47 0 011.11 1.43 1.34 1.34 0 01-.62 1.16 2.64 2.64 0 01-1.6.45 3 3 0 01-1.18-.23 2.1 2.1 0 01-.81-.65 1.58 1.58 0 01-.29-.9h1.34a.7.7 0 00.28.58 1.11 1.11 0 00.69.2 1 1 0 00.61-.15.49.49 0 00.16-.45zM1031.74 529a2.62 2.62 0 01-1.89-.71 2.53 2.53 0 01-.73-1.9v-.14a3.12 3.12 0 01.31-1.42 2.22 2.22 0 01.87-1 2.53 2.53 0 011.29-.34 2.16 2.16 0 011.7.69 2.75 2.75 0 01.63 1.94v.57h-3.37a1.32 1.32 0 00.41.83 1.25 1.25 0 00.88.31 1.51 1.51 0 001.27-.59l.69.78a2.07 2.07 0 01-.86.7 2.77 2.77 0 01-1.2.28zm-.16-4.34a.89.89 0 00-.68.29 1.51 1.51 0 00-.33.81h2v-.11a1.07 1.07 0 00-.25-.73.94.94 0 00-.74-.28zM1034.5 526.2a3.15 3.15 0 01.55-2 1.81 1.81 0 011.52-.74 1.62 1.62 0 011.27.58v-2.7h1.42v7.5H1038l-.06-.56a1.68 1.68 0 01-1.36.66 1.8 1.8 0 01-1.5-.73 3.27 3.27 0 01-.58-2.01zm1.41.1a2.06 2.06 0 00.26 1.15.84.84 0 00.75.39.93.93 0 00.92-.55v-2.09a.93.93 0 00-.91-.56c-.68 0-1.02.56-1.02 1.66zM1042.62 526.2a3.15 3.15 0 01.56-2 1.79 1.79 0 011.51-.74 1.64 1.64 0 011.28.58v-2.7h1.41v7.5h-1.27l-.07-.56a1.65 1.65 0 01-1.36.66 1.77 1.77 0 01-1.49-.73 3.27 3.27 0 01-.57-2.01zm1.41.1a2.15 2.15 0 00.26 1.15.84.84 0 00.75.39 1 1 0 00.93-.55v-2.09a.94.94 0 00-.92-.56c-.68 0-1.05.56-1.05 1.66zM1050.91 529a2.59 2.59 0 01-1.89-.71 2.53 2.53 0 01-.73-1.9v-.14a3.25 3.25 0 01.3-1.42 2.3 2.3 0 01.88-1 2.47 2.47 0 011.28-.34 2.2 2.2 0 011.71.69 2.79 2.79 0 01.62 1.94v.57h-3.36a1.27 1.27 0 00.41.83 1.24 1.24 0 00.87.31 1.53 1.53 0 001.28-.59l.69.78a2.13 2.13 0 01-.86.7 2.77 2.77 0 01-1.2.28zm-.16-4.34a.88.88 0 00-.68.29 1.44 1.44 0 00-.34.81h2v-.11a1 1 0 00-.25-.73.9.9 0 00-.73-.28zM1055.57 522.3v1.3h.9v1h-.9v2.63a.64.64 0 00.11.42.55.55 0 00.43.13 2.58 2.58 0 00.42 0v1.06a2.76 2.76 0 01-.86.13 1.35 1.35 0 01-1.51-1.5v-2.84h-.77v-1h.77v-1.3zM1059.69 529a2.62 2.62 0 01-1.89-.71 2.53 2.53 0 01-.73-1.9v-.14a3.12 3.12 0 01.31-1.42 2.22 2.22 0 01.87-1 2.51 2.51 0 011.29-.34 2.16 2.16 0 011.7.69 2.75 2.75 0 01.63 1.94v.57h-3.37a1.32 1.32 0 00.41.83 1.25 1.25 0 00.88.31 1.51 1.51 0 001.27-.59l.69.78a2.13 2.13 0 01-.86.7 2.77 2.77 0 01-1.2.28zm-.16-4.34a.88.88 0 00-.68.29 1.43 1.43 0 00-.33.81h2v-.11a1 1 0 00-.26-.73.9.9 0 00-.73-.28zM1064.86 527.84a1 1 0 00.64-.21.73.73 0 00.25-.57h1.33a1.88 1.88 0 01-.3 1 1.92 1.92 0 01-.79.7 2.5 2.5 0 01-1.1.24 2.3 2.3 0 01-1.79-.72 2.82 2.82 0 01-.65-2v-.09a2.8 2.8 0 01.65-1.95 2.27 2.27 0 011.78-.73 2.21 2.21 0 011.59.57 2 2 0 01.61 1.5h-1.33a.94.94 0 00-.25-.67.87.87 0 00-.65-.26.84.84 0 00-.74.36 2.07 2.07 0 00-.25 1.17v.14a2.09 2.09 0 00.25 1.18.83.83 0 00.75.34zM1069.57 522.3v1.3h.9v1h-.9v2.63a.64.64 0 00.11.42.55.55 0 00.43.13 2.58 2.58 0 00.42 0v1.06a2.76 2.76 0 01-.86.13 1.35 1.35 0 01-1.51-1.5v-2.84h-.77v-1h.77v-1.3zM1071.25 522.23a.7.7 0 01.21-.52.79.79 0 01.58-.2.8.8 0 01.58.2.7.7 0 01.21.52.68.68 0 01-.22.53.88.88 0 01-1.14 0 .68.68 0 01-.22-.53zm1.5 6.65h-1.42v-5.28h1.42zM1073.69 526.19a3.16 3.16 0 01.3-1.4 2.25 2.25 0 01.88-.95 2.59 2.59 0 011.32-.34 2.38 2.38 0 011.74.66 2.66 2.66 0 01.76 1.78v.36a2.77 2.77 0 01-.68 2 2.65 2.65 0 01-3.65 0 2.82 2.82 0 01-.68-2zm1.41.1a2 2 0 00.29 1.16.92.92 0 00.81.39 1 1 0 00.8-.39 2.17 2.17 0 00.29-1.26 2 2 0 00-.29-1.14 1 1 0 00-.81-.41.92.92 0 00-.8.4 2.2 2.2 0 00-.29 1.25zM1080.86 523.6l.05.61a1.85 1.85 0 011.52-.71 1.54 1.54 0 011.25.5 2.34 2.34 0 01.42 1.47v3.41h-1.41v-3.38a1 1 0 00-.2-.66.9.9 0 00-.65-.2 1 1 0 00-.89.51v3.73h-1.41v-5.28zM959.55 537.14a1.08 1.08 0 01.32-.81 1.16 1.16 0 01.83-.31 1.19 1.19 0 01.85.3 1.12 1.12 0 01.32.8v.21a1.1 1.1 0 01-.32.81 1.31 1.31 0 01-1.67 0 1.07 1.07 0 01-.33-.83zM971 533.77v4.69a2.37 2.37 0 01-.73 1.84 2.78 2.78 0 01-2 .68 2.85 2.85 0 01-2-.66 2.35 2.35 0 01-.75-1.81v-4.74H967v4.7a1.39 1.39 0 00.33 1 1.3 1.3 0 00.93.32c.82 0 1.24-.44 1.25-1.3v-4.74zM974.82 538.28h-1.16v2.6h-1.47v-7.11h2.64a3 3 0 011.95.57 1.94 1.94 0 01.68 1.58 2.21 2.21 0 01-.31 1.22 2.15 2.15 0 01-1 .77l1.54 2.91v.06h-1.57zm-1.16-1.18h1.18a1.18 1.18 0 00.85-.29 1 1 0 00.31-.81 1.08 1.08 0 00-.29-.79 1.19 1.19 0 00-.88-.29h-1.17zM980 539.71h3.11v1.17h-4.58v-7.11H980zM986.77 540.88v-4.24H986v-1h.78v-.45a1.83 1.83 0 01.51-1.38 2 2 0 011.43-.49 3 3 0 01.72.1v1.08a1.74 1.74 0 00-.43 0c-.53 0-.79.25-.79.75v.43h1v1h-1v4.24zM990 534.23a.7.7 0 01.21-.52.8.8 0 01.58-.2.79.79 0 01.58.2.7.7 0 01.21.52.71.71 0 01-.21.53.81.81 0 01-.58.21.77.77 0 01-.57-.21.68.68 0 01-.22-.53zm1.5 6.65H990v-5.28h1.42zM994.11 540.88h-1.41v-7.5h1.41zM997 534.3v1.3h.91v1H997v2.63a.59.59 0 00.12.42.51.51 0 00.42.13 2.58 2.58 0 00.42 0v1.06a2.74 2.74 0 01-.85.13 1.35 1.35 0 01-1.52-1.5v-2.84h-.77v-1h.77v-1.3zM1001.08 541a2.62 2.62 0 01-1.89-.71 2.57 2.57 0 01-.73-1.9v-.14a3.12 3.12 0 01.31-1.42 2.28 2.28 0 01.87-1 2.53 2.53 0 011.29-.34 2.16 2.16 0 011.7.69 2.75 2.75 0 01.63 1.94v.57h-3.37a1.33 1.33 0 00.42.83 1.24 1.24 0 00.87.31 1.5 1.5 0 001.27-.59l.69.78a2.1 2.1 0 01-.85.7 2.85 2.85 0 01-1.21.28zm-.16-4.34a.89.89 0 00-.68.29 1.51 1.51 0 00-.33.81h2v-.11a1.07 1.07 0 00-.25-.73.94.94 0 00-.74-.28zM1007 536.92h-.51a1 1 0 00-1 .54v3.45h-1.41v-5.31h1.33v.63a1.32 1.32 0 011.18-.73 1.31 1.31 0 01.44.07zM1007.7 534.23a.7.7 0 01.21-.52.77.77 0 01.58-.2.76.76 0 01.57.2.67.67 0 01.22.52.68.68 0 01-.22.53.79.79 0 01-.57.21.81.81 0 01-.58-.21.71.71 0 01-.21-.53zm1.49 6.65h-1.41v-5.28h1.41zM1011.66 535.6v.61a1.85 1.85 0 011.52-.71 1.54 1.54 0 011.25.5 2.34 2.34 0 01.42 1.47v3.41h-1.41v-3.38a1 1 0 00-.2-.66.9.9 0 00-.65-.2 1 1 0 00-.89.51v3.73h-1.41v-5.28zM1015.75 538.2a3 3 0 01.58-2 1.88 1.88 0 011.56-.75 1.63 1.63 0 011.35.6l.06-.5h1.28v5.11a2.23 2.23 0 01-.31 1.2 2 2 0 01-.89.79 3.27 3.27 0 01-1.34.26 2.79 2.79 0 01-1.13-.23 1.94 1.94 0 01-.84-.6l.63-.86a1.64 1.64 0 001.28.6 1.21 1.21 0 00.87-.3 1.15 1.15 0 00.32-.86v-.28a1.64 1.64 0 01-1.29.55 1.89 1.89 0 01-1.54-.74 3.13 3.13 0 01-.59-2zm1.41.1a2 2 0 00.29 1.14.92.92 0 00.79.4 1 1 0 00.93-.48v-2.23a1 1 0 00-.92-.49.93.93 0 00-.8.42 2.2 2.2 0 00-.29 1.24zM959.55 549.14a1.08 1.08 0 01.32-.81 1.16 1.16 0 01.83-.31 1.19 1.19 0 01.85.3 1.12 1.12 0 01.32.8v.21a1.1 1.1 0 01-.32.81 1.31 1.31 0 01-1.67 0 1.07 1.07 0 01-.33-.83zM969.89 550h-2.81v2.9h-1.47v-7.11h4.63V547h-3.16v1.84h2.81zM970.67 550.19a3.17 3.17 0 01.31-1.4 2.17 2.17 0 01.87-.95 2.59 2.59 0 011.32-.34 2.42 2.42 0 011.75.66 2.61 2.61 0 01.75 1.78v.36a2.77 2.77 0 01-.68 2 2.63 2.63 0 01-3.64 0 2.78 2.78 0 01-.69-2zm1.41.1a2 2 0 00.29 1.16 1 1 0 001.61 0 2.17 2.17 0 00.29-1.26 2 2 0 00-.29-1.14 1 1 0 00-1.61 0 2.2 2.2 0 00-.29 1.24zM979.52 548.92h-.51a1 1 0 00-1 .54v3.45h-1.41v-5.31h1.33v.63a1.32 1.32 0 011.18-.73 1.31 1.31 0 01.44.07zM982.53 553a2.62 2.62 0 01-1.89-.71 2.57 2.57 0 01-.73-1.9v-.14a3.12 3.12 0 01.31-1.42 2.28 2.28 0 01.87-1 2.53 2.53 0 011.29-.34 2.16 2.16 0 011.7.69 2.75 2.75 0 01.63 1.94v.57h-3.37a1.33 1.33 0 00.42.83 1.24 1.24 0 00.87.31 1.5 1.5 0 001.27-.59l.69.78a2.1 2.1 0 01-.85.7 2.85 2.85 0 01-1.21.28zm-.16-4.34a.89.89 0 00-.68.29 1.51 1.51 0 00-.33.81h2v-.11a1.07 1.07 0 00-.25-.73.94.94 0 00-.74-.28zM986.81 547.6v.61a1.85 1.85 0 011.52-.71 1.53 1.53 0 011.25.5 2.34 2.34 0 01.42 1.47v3.41h-1.41v-3.38a1 1 0 00-.2-.66.89.89 0 00-.65-.2 1 1 0 00-.89.51v3.73h-1.41v-5.28zM994 551.42a.45.45 0 00-.26-.4 2.87 2.87 0 00-.82-.27c-1.26-.26-1.88-.8-1.88-1.6a1.46 1.46 0 01.58-1.18 2.39 2.39 0 011.53-.47 2.48 2.48 0 011.6.48 1.46 1.46 0 01.61 1.23h-1.41a.69.69 0 00-.2-.5 1 1 0 00-1.16 0 .51.51 0 00-.2.41.44.44 0 00.23.38 2.08 2.08 0 00.74.25 7 7 0 01.89.23 1.47 1.47 0 011.12 1.43 1.34 1.34 0 01-.62 1.16 2.66 2.66 0 01-1.6.45 2.92 2.92 0 01-1.18-.23 2.1 2.1 0 01-.81-.65 1.58 1.58 0 01-.29-.9h1.34a.7.7 0 00.28.58 1.11 1.11 0 00.69.2 1 1 0 00.61-.15.49.49 0 00.21-.45zM996.24 546.23a.7.7 0 01.21-.52.79.79 0 01.58-.2.8.8 0 01.58.2.7.7 0 01.21.52.71.71 0 01-.21.53.81.81 0 01-.58.21.77.77 0 01-.57-.21.68.68 0 01-.22-.53zm1.5 6.65h-1.42v-5.28h1.42zM1001.1 551.84a.92.92 0 00.63-.21.73.73 0 00.26-.57h1.32a1.79 1.79 0 01-.29 1 2 2 0 01-.79.7 2.51 2.51 0 01-1.11.24 2.28 2.28 0 01-1.78-.72 2.83 2.83 0 01-.66-2v-.09a2.85 2.85 0 01.65-1.95 2.28 2.28 0 011.78-.73 2.21 2.21 0 011.59.57 2 2 0 01.61 1.5H1002a.94.94 0 00-.26-.67.84.84 0 00-.64-.26.86.86 0 00-.75.36 2.16 2.16 0 00-.25 1.17v.14a2.18 2.18 0 00.25 1.18.86.86 0 00.75.34zM1011.37 550.29a3.19 3.19 0 01-.54 2 1.8 1.8 0 01-1.52.71 1.65 1.65 0 01-1.37-.66l-.06.56h-1.27v-7.5h1.39v2.69a1.59 1.59 0 011.28-.57 1.82 1.82 0 011.52.71 3.26 3.26 0 01.55 2zm-1.41-.11a2.11 2.11 0 00-.26-1.17.85.85 0 00-.75-.37.94.94 0 00-.93.55v2.1a.93.93 0 00.94.55.86.86 0 00.89-.67 3.45 3.45 0 00.15-.99zM1015.3 552.88a1.38 1.38 0 01-.14-.47 1.73 1.73 0 01-1.34.57 1.87 1.87 0 01-1.28-.45 1.43 1.43 0 01-.51-1.13 1.48 1.48 0 01.62-1.29 3 3 0 011.8-.45h.65v-.31a.83.83 0 00-.19-.58.73.73 0 00-.59-.22.8.8 0 00-.56.17.57.57 0 00-.21.47h-1.41a1.41 1.41 0 01.29-.85 1.79 1.79 0 01.8-.61 2.86 2.86 0 011.16-.23 2.34 2.34 0 011.55.49 1.73 1.73 0 01.57 1.38v2.29a2.75 2.75 0 00.21 1.14v.08zm-1.17-1a1.16 1.16 0 00.58-.14.93.93 0 00.39-.37v-.91h-.53c-.71 0-1.08.25-1.13.73v.09a.57.57 0 00.18.43.72.72 0 00.51.19zM1019.79 551.84a.93.93 0 00.64-.21.73.73 0 00.25-.57h1.32a1.79 1.79 0 01-.3 1 1.92 1.92 0 01-.79.7 2.5 2.5 0 01-1.1.24 2.3 2.3 0 01-1.79-.72 2.87 2.87 0 01-.65-2v-.09a2.8 2.8 0 01.65-1.95 2.27 2.27 0 011.78-.73 2.21 2.21 0 011.59.57 2 2 0 01.61 1.5h-1.33a.94.94 0 00-.25-.67.85.85 0 00-.64-.26.86.86 0 00-.75.36 2.07 2.07 0 00-.25 1.17v.14a2.09 2.09 0 00.25 1.18.84.84 0 00.76.34zM1024.73 550.77l-.51.5v1.61h-1.41v-7.5h1.41v4.16l.28-.35 1.35-1.59h1.69l-1.91 2.2 2.08 3.08h-1.62zM1031.32 552.35a1.78 1.78 0 01-1.45.63 1.64 1.64 0 01-1.29-.49 2.08 2.08 0 01-.46-1.43v-3.46h1.41v3.4c0 .55.25.82.75.82a1 1 0 001-.49v-3.73h1.42v5.28h-1.33zM1038.51 550.29a3.19 3.19 0 01-.56 2 1.77 1.77 0 01-1.49.73 1.65 1.65 0 01-1.3-.55v2.49h-1.41v-7.36h1.31v.52a1.66 1.66 0 011.34-.62 1.76 1.76 0 011.51.73 3.18 3.18 0 01.55 2zm-1.42-.11a2 2 0 00-.26-1.14.83.83 0 00-.76-.4.92.92 0 00-.91.51v2.17a.93.93 0 00.92.52c.68 0 1.01-.55 1.01-1.66zM1039.75 554.67l-.74-.39.17-.32a2.53 2.53 0 00.34-1.18v-1.1h1.19v1a2.45 2.45 0 01-.28 1.09 2.66 2.66 0 01-.68.9zM1047.17 551.42a.44.44 0 00-.25-.4 3 3 0 00-.83-.27c-1.25-.26-1.88-.8-1.88-1.6a1.46 1.46 0 01.58-1.18 2.39 2.39 0 011.53-.47 2.51 2.51 0 011.61.48 1.48 1.48 0 01.6 1.23h-1.41a.69.69 0 00-.2-.5.83.83 0 00-.61-.2.84.84 0 00-.55.16.5.5 0 00-.19.41.43.43 0 00.22.38 2.22 2.22 0 00.75.25 7.52 7.52 0 01.89.23 1.47 1.47 0 011.11 1.43 1.34 1.34 0 01-.62 1.16 2.64 2.64 0 01-1.6.45 3 3 0 01-1.18-.23 2 2 0 01-.8-.65 1.52 1.52 0 01-.3-.9h1.34a.72.72 0 00.28.58 1.11 1.11 0 00.69.2 1 1 0 00.61-.15.49.49 0 00.21-.41zM1051.65 551.84a1 1 0 00.64-.21.76.76 0 00.25-.57h1.32a1.79 1.79 0 01-.29 1 2 2 0 01-.79.7 2.51 2.51 0 01-1.11.24 2.28 2.28 0 01-1.78-.72 2.83 2.83 0 01-.66-2v-.09a2.85 2.85 0 01.65-1.95 2.31 2.31 0 011.79-.73 2.17 2.17 0 011.58.57 2 2 0 01.61 1.5h-1.32a1 1 0 00-.25-.67.87.87 0 00-.65-.26.83.83 0 00-.74.36 2.06 2.06 0 00-.26 1.17v.14a2.18 2.18 0 00.25 1.18.86.86 0 00.76.34zM1057.73 552.88a1.38 1.38 0 01-.14-.47 1.72 1.72 0 01-1.34.57 1.87 1.87 0 01-1.28-.45 1.43 1.43 0 01-.51-1.13 1.51 1.51 0 01.62-1.29 3.07 3.07 0 011.8-.45h.65v-.31a.83.83 0 00-.19-.58.71.71 0 00-.59-.22.8.8 0 00-.56.17.56.56 0 00-.2.47h-1.41a1.4 1.4 0 01.28-.85 1.79 1.79 0 01.8-.61 2.86 2.86 0 011.16-.23 2.34 2.34 0 011.55.49 1.74 1.74 0 01.58 1.38v2.29a2.46 2.46 0 00.21 1.14v.08zm-1.17-1a1.16 1.16 0 00.58-.14.93.93 0 00.39-.37v-.91h-.53c-.7 0-1.08.25-1.13.73v.09a.57.57 0 00.18.43.72.72 0 00.51.19zM1061.33 547.6v.61a1.86 1.86 0 011.52-.71 1.53 1.53 0 011.25.5 2.34 2.34 0 01.42 1.47v3.41h-1.41v-3.38a1 1 0 00-.2-.66.89.89 0 00-.65-.2 1 1 0 00-.89.51v3.73H1060v-5.28zM1072.88 550.29a3.19 3.19 0 01-.54 2 1.78 1.78 0 01-1.51.71 1.65 1.65 0 01-1.38-.66l-.06.56h-1.27v-7.5h1.41v2.69a1.63 1.63 0 011.29-.57 1.82 1.82 0 011.51.71 3.19 3.19 0 01.55 2zm-1.41-.11a2.21 2.21 0 00-.25-1.17.86.86 0 00-.76-.37.94.94 0 00-.93.55v2.1a.94.94 0 00.94.55.88.88 0 00.9-.67 3.52 3.52 0 00.1-.99zM1076.81 552.88a1.64 1.64 0 01-.14-.47 1.71 1.71 0 01-1.33.57 1.88 1.88 0 01-1.29-.45 1.43 1.43 0 01-.51-1.13 1.51 1.51 0 01.62-1.29 3.07 3.07 0 011.8-.45h.65v-.31a.83.83 0 00-.19-.58.71.71 0 00-.59-.22.82.82 0 00-.56.17.59.59 0 00-.2.47h-1.41a1.4 1.4 0 01.28-.85 1.84 1.84 0 01.8-.61 2.89 2.89 0 011.16-.23 2.34 2.34 0 011.55.49 1.71 1.71 0 01.58 1.38v2.29a2.46 2.46 0 00.21 1.14v.08zm-1.17-1a1.16 1.16 0 00.58-.14.83.83 0 00.39-.37v-.91h-.53c-.7 0-1.08.25-1.12.73v.09a.54.54 0 00.19.43.68.68 0 00.49.19zM1081.31 551.84a.92.92 0 00.63-.21.73.73 0 00.26-.57h1.32a1.79 1.79 0 01-.29 1 2 2 0 01-.79.7 2.51 2.51 0 01-1.11.24 2.28 2.28 0 01-1.78-.72 2.83 2.83 0 01-.66-2v-.09a2.85 2.85 0 01.65-1.95 2.28 2.28 0 011.78-.73 2.21 2.21 0 011.59.57 2 2 0 01.61 1.5h-1.32a.94.94 0 00-.26-.67.84.84 0 00-.64-.26.86.86 0 00-.75.36 2.16 2.16 0 00-.25 1.17v.14a2.18 2.18 0 00.25 1.18.86.86 0 00.76.34zM1086.25 550.77l-.51.5v1.61h-1.41v-7.5h1.41v4.16l.27-.35 1.35-1.59h1.7l-1.91 2.2 2.07 3.08h-1.62zM1092.83 552.35a1.77 1.77 0 01-1.44.63 1.66 1.66 0 01-1.3-.49 2.08 2.08 0 01-.46-1.43v-3.46h1.37v3.4c0 .55.26.82.76.82a1 1 0 001-.49v-3.73h1.42v5.28h-1.33zM1100 550.29a3.25 3.25 0 01-.55 2 1.78 1.78 0 01-1.5.73 1.65 1.65 0 01-1.3-.55v2.49h-1.41v-7.36h1.31v.52a1.66 1.66 0 011.34-.62 1.78 1.78 0 011.52.73 3.25 3.25 0 01.54 2zm-1.41-.11a2.14 2.14 0 00-.26-1.14.85.85 0 00-.76-.4.94.94 0 00-.92.51v2.17a1 1 0 00.93.52c.69 0 1.03-.55 1.03-1.66zM1103.75 551.42a.44.44 0 00-.25-.4 3 3 0 00-.82-.27c-1.26-.26-1.89-.8-1.89-1.6a1.47 1.47 0 01.59-1.18 2.34 2.34 0 011.52-.47 2.51 2.51 0 011.61.48 1.48 1.48 0 01.6 1.23h-1.41a.68.68 0 00-.19-.5 1 1 0 00-1.17 0 .5.5 0 00-.19.41.43.43 0 00.22.38 2.22 2.22 0 00.75.25 7.52 7.52 0 01.89.23 1.48 1.48 0 011.12 1.43 1.36 1.36 0 01-.62 1.16 2.68 2.68 0 01-1.6.45 2.89 2.89 0 01-1.18-.23 2 2 0 01-.81-.65 1.51 1.51 0 01-.29-.9h1.37a.76.76 0 00.28.58 1.11 1.11 0 00.69.2 1 1 0 00.62-.15.48.48 0 00.16-.45zM967.29 564.88v-4.24h-.79v-1h.79v-.45a1.83 1.83 0 01.51-1.38 2 2 0 011.43-.49 3.14 3.14 0 01.72.1v1.08a1.8 1.8 0 00-.43 0c-.53 0-.79.25-.79.75v.43h1v1h-1v4.24zM970.27 562.19a3.16 3.16 0 01.3-1.4 2.17 2.17 0 01.87-.95 2.59 2.59 0 011.32-.34 2.39 2.39 0 011.75.66 2.61 2.61 0 01.75 1.78v.36a2.73 2.73 0 01-.68 2 2.63 2.63 0 01-3.64 0 2.82 2.82 0 01-.68-2zm1.41.1a2 2 0 00.28 1.16.94.94 0 00.81.39.93.93 0 00.8-.39 2.09 2.09 0 00.29-1.26 1.89 1.89 0 00-.29-1.14.94.94 0 00-.81-.41 1 1 0 00-.8.4 2.2 2.2 0 00-.28 1.25zM979.11 560.92h-.51a1 1 0 00-1.05.54v3.45h-1.41v-5.31h1.34v.63a1.33 1.33 0 011.18-.73 1.27 1.27 0 01.44.07zM983.6 559.6v.59a1.85 1.85 0 011.52-.69 1.41 1.41 0 011.4.81 1.81 1.81 0 011.58-.81 1.58 1.58 0 011.28.5 2.32 2.32 0 01.42 1.51v3.37h-1.41v-3.37a1 1 0 00-.18-.66.77.77 0 00-.62-.21.89.89 0 00-.88.61v3.63h-1.41v-3.37a1 1 0 00-.18-.66.79.79 0 00-.62-.21.92.92 0 00-.87.5v3.74h-1.41v-5.28zM994 564.88a1.38 1.38 0 01-.14-.47 1.72 1.72 0 01-1.34.57 1.87 1.87 0 01-1.28-.45 1.43 1.43 0 01-.51-1.13 1.51 1.51 0 01.62-1.29 3.07 3.07 0 011.8-.45h.65v-.31a.83.83 0 00-.19-.58.71.71 0 00-.59-.22.8.8 0 00-.56.17.56.56 0 00-.2.47h-1.42a1.41 1.41 0 01.29-.85 1.79 1.79 0 01.8-.61 2.86 2.86 0 011.16-.23 2.34 2.34 0 011.55.49 1.73 1.73 0 01.57 1.38v2.29a2.75 2.75 0 00.21 1.14v.08zm-1.17-1a1.16 1.16 0 00.58-.14.93.93 0 00.39-.37v-.91h-.53c-.7 0-1.08.25-1.13.73v.09a.57.57 0 00.18.43.72.72 0 00.51.19zM997.79 564.88h-1.42v-7.5h1.42zM1003.54 563l.7-3.37h1.36l-1.35 5.28h-1.18l-1-3.32-1 3.32h-1.18l-1.35-5.28h1.37l.69 3.36 1-3.36h1zM1009.36 564.88a1.64 1.64 0 01-.14-.47 1.71 1.71 0 01-1.33.57 1.88 1.88 0 01-1.29-.45 1.43 1.43 0 01-.51-1.13 1.51 1.51 0 01.62-1.29 3.07 3.07 0 011.8-.45h.65v-.31a.83.83 0 00-.19-.58.71.71 0 00-.59-.22.82.82 0 00-.56.17.56.56 0 00-.2.47h-1.41a1.4 1.4 0 01.28-.85 1.84 1.84 0 01.8-.61 2.89 2.89 0 011.16-.23 2.34 2.34 0 011.55.49 1.74 1.74 0 01.58 1.38v2.29a2.46 2.46 0 00.21 1.14v.08zm-1.17-1a1.16 1.16 0 00.58-.14.83.83 0 00.39-.37v-.91h-.53c-.7 0-1.08.25-1.13.73v.09a.54.54 0 00.19.43.68.68 0 00.5.19zM1014.63 560.92h-.51a1 1 0 00-1 .54v3.45h-1.41v-5.31h1.29v.63a1.33 1.33 0 011.18-.73 1.27 1.27 0 01.44.07zM1017.65 565a2.63 2.63 0 01-1.9-.71 2.57 2.57 0 01-.73-1.9v-.14a3.25 3.25 0 01.31-1.42 2.35 2.35 0 01.87-1 2.53 2.53 0 011.29-.34 2.2 2.2 0 011.71.69 2.79 2.79 0 01.62 1.94v.57h-3.36a1.27 1.27 0 00.41.83 1.24 1.24 0 00.87.31 1.5 1.5 0 001.27-.59l.7.78a2.13 2.13 0 01-.86.7 2.77 2.77 0 01-1.2.28zm-.16-4.34a.91.91 0 00-.69.29 1.51 1.51 0 00-.33.81h2v-.11a1 1 0 00-.25-.73.9.9 0 00-.73-.28zM1021 566.67l-.74-.39.17-.32a2.53 2.53 0 00.34-1.18v-1.1h1.23v1a2.45 2.45 0 01-.28 1.09 2.66 2.66 0 01-.72.9zM1028.41 563.42a.44.44 0 00-.25-.4 3 3 0 00-.83-.27c-1.25-.26-1.88-.8-1.88-1.6a1.46 1.46 0 01.55-1.15 2.39 2.39 0 011.53-.47 2.51 2.51 0 011.61.48 1.48 1.48 0 01.6 1.23h-1.41a.69.69 0 00-.2-.5.83.83 0 00-.61-.2.84.84 0 00-.55.16.5.5 0 00-.19.41.43.43 0 00.22.38 2.22 2.22 0 00.75.25 7.52 7.52 0 01.89.23 1.48 1.48 0 011.12 1.43 1.36 1.36 0 01-.62 1.16 2.69 2.69 0 01-1.61.45 3 3 0 01-1.18-.23 2 2 0 01-.8-.65 1.52 1.52 0 01-.3-.9h1.34a.72.72 0 00.28.58 1.11 1.11 0 00.69.2 1.07 1.07 0 00.62-.15.51.51 0 00.23-.44zM1033.75 564.88a1.64 1.64 0 01-.14-.47 1.7 1.7 0 01-1.33.57 1.88 1.88 0 01-1.29-.45 1.43 1.43 0 01-.51-1.13 1.49 1.49 0 01.63-1.29 3 3 0 011.8-.45h.64v-.31a.87.87 0 00-.18-.58.75.75 0 00-.6-.22.83.83 0 00-.56.17.59.59 0 00-.2.47h-1.41a1.47 1.47 0 01.28-.85 1.84 1.84 0 01.8-.61 2.94 2.94 0 011.17-.23 2.36 2.36 0 011.55.49 1.73 1.73 0 01.57 1.38v2.29a2.46 2.46 0 00.21 1.14v.08zm-1.16-1a1.1 1.1 0 00.57-.14.83.83 0 00.39-.37v-.91h-.55c-.71 0-1.08.25-1.13.73v.09a.57.57 0 00.19.43.69.69 0 00.53.19zM1036.44 564.88v-4.24h-.79v-1h.79v-.45a1.83 1.83 0 01.51-1.38 2 2 0 011.43-.49 3.14 3.14 0 01.72.1v1.08a1.8 1.8 0 00-.43 0c-.53 0-.79.25-.79.75v.43h1.05v1h-1.05v4.24zM1042 565a2.62 2.62 0 01-1.89-.71 2.53 2.53 0 01-.73-1.9v-.14a3.12 3.12 0 01.31-1.42 2.22 2.22 0 01.87-1 2.53 2.53 0 011.29-.34 2.16 2.16 0 011.7.69 2.75 2.75 0 01.63 1.94v.57h-3.37a1.32 1.32 0 00.41.83 1.25 1.25 0 00.88.31 1.51 1.51 0 001.27-.59l.69.78a2.07 2.07 0 01-.86.7 2.77 2.77 0 01-1.2.28zm-.16-4.34a.89.89 0 00-.68.29 1.51 1.51 0 00-.33.81h2v-.11a1.07 1.07 0 00-.25-.73.94.94 0 00-.79-.28zM1050.39 560.92h-.51a1 1 0 00-1.05.54v3.45h-1.41v-5.31h1.33v.63a1.34 1.34 0 011.62-.66zM1053.4 565a2.62 2.62 0 01-1.89-.71 2.53 2.53 0 01-.73-1.9v-.14a3.12 3.12 0 01.31-1.42 2.22 2.22 0 01.87-1 2.53 2.53 0 011.29-.34 2.16 2.16 0 011.7.69 2.75 2.75 0 01.63 1.94v.57h-3.37a1.28 1.28 0 00.42.83 1.2 1.2 0 00.87.31 1.51 1.51 0 001.27-.59l.69.78a2.07 2.07 0 01-.86.7 2.77 2.77 0 01-1.2.28zm-.16-4.34a.89.89 0 00-.68.29 1.51 1.51 0 00-.33.81h2v-.11a1.07 1.07 0 00-.25-.73.94.94 0 00-.74-.28zM1058.57 563.84a1 1 0 00.64-.21.73.73 0 00.25-.57h1.33a1.79 1.79 0 01-.3 1 1.92 1.92 0 01-.79.7 2.5 2.5 0 01-1.1.24 2.3 2.3 0 01-1.79-.72 2.87 2.87 0 01-.65-2v-.09a2.8 2.8 0 01.65-1.95 2.27 2.27 0 011.78-.73 2.21 2.21 0 011.59.57 2 2 0 01.61 1.5h-1.33a.94.94 0 00-.25-.67.94.94 0 00-1.39.1 2.07 2.07 0 00-.25 1.17v.14a2.09 2.09 0 00.25 1.18.84.84 0 00.75.34zM1061.37 562.19a3.16 3.16 0 01.3-1.4 2.25 2.25 0 01.88-.95 2.59 2.59 0 011.32-.34 2.38 2.38 0 011.74.66 2.62 2.62 0 01.76 1.78v.36a2.77 2.77 0 01-.68 2 2.35 2.35 0 01-1.82.73 2.39 2.39 0 01-1.83-.73 2.82 2.82 0 01-.68-2zm1.41.1a2 2 0 00.29 1.16 1 1 0 001.61 0 2.17 2.17 0 00.29-1.26 2 2 0 00-.29-1.14.94.94 0 00-.81-.41.92.92 0 00-.8.4 2.2 2.2 0 00-.29 1.25zM1069.15 563.16l1-3.56h1.48l-1.79 5.28h-1.34l-1.79-5.28h1.48zM1074.59 565a2.62 2.62 0 01-1.89-.71 2.57 2.57 0 01-.73-1.9v-.14a3.25 3.25 0 01.31-1.42 2.35 2.35 0 01.87-1 2.53 2.53 0 011.29-.34 2.16 2.16 0 011.7.69 2.75 2.75 0 01.63 1.94v.57h-3.37a1.33 1.33 0 00.42.83 1.22 1.22 0 00.87.31 1.5 1.5 0 001.27-.59l.7.78a2.2 2.2 0 01-.86.7 2.85 2.85 0 01-1.21.28zm-.16-4.34a.89.89 0 00-.68.29 1.51 1.51 0 00-.33.81h2v-.11a1.07 1.07 0 00-.25-.73.94.94 0 00-.74-.28zM1080.54 560.92h-.51a1 1 0 00-1 .54v3.45h-1.41v-5.31h1.33v.63a1.32 1.32 0 011.18-.73 1.31 1.31 0 01.44.07zM1083.28 562.89l1-3.29h1.52l-2.13 6.1-.11.28a1.62 1.62 0 01-1.57 1 2.27 2.27 0 01-.62-.09v-1.07h.21a1.17 1.17 0 00.6-.12.79.79 0 00.31-.41l.17-.43-1.85-5.3h1.51zM1085.87 566.67l-.73-.39.17-.32a2.53 2.53 0 00.34-1.18v-1.1h1.19v1a2.59 2.59 0 01-.28 1.09 2.82 2.82 0 01-.69.9zM969.1 575.84a1 1 0 00.64-.21.76.76 0 00.25-.57h1.32a1.79 1.79 0 01-.29 1 1.92 1.92 0 01-.79.7 2.5 2.5 0 01-1.1.24 2.3 2.3 0 01-1.79-.72 2.83 2.83 0 01-.66-2v-.09a2.85 2.85 0 01.65-1.95 2.31 2.31 0 011.79-.73 2.21 2.21 0 011.59.57 2 2 0 01.6 1.5H970a1 1 0 00-.25-.67.87.87 0 00-.65-.26.83.83 0 00-.74.36 2.07 2.07 0 00-.25 1.17v.14a2.19 2.19 0 00.24 1.18.86.86 0 00.75.34zM971.9 574.19a3.16 3.16 0 01.3-1.4 2.17 2.17 0 01.87-.95 2.59 2.59 0 011.32-.34 2.39 2.39 0 011.75.66 2.61 2.61 0 01.75 1.78v.36a2.77 2.77 0 01-.67 2 2.65 2.65 0 01-3.65 0 2.82 2.82 0 01-.68-2zm1.41.1a2.07 2.07 0 00.28 1.16.94.94 0 00.81.39 1 1 0 00.81-.39 2.17 2.17 0 00.28-1.26 2 2 0 00-.28-1.14 1 1 0 00-.82-.41 1 1 0 00-.8.4 2.29 2.29 0 00-.28 1.25zM980.74 572.92h-.51a1 1 0 00-1.05.54v3.45h-1.41v-5.31h1.34v.63a1.31 1.31 0 011.17-.73 1.23 1.23 0 01.44.07zM986.18 574.29a3.19 3.19 0 01-.56 2 1.77 1.77 0 01-1.49.73 1.65 1.65 0 01-1.3-.55v2.49h-1.41v-7.36h1.31v.52a1.66 1.66 0 011.34-.62 1.76 1.76 0 011.51.73 3.18 3.18 0 01.55 2zm-1.41-.11a2 2 0 00-.27-1.14.83.83 0 00-.75-.4.93.93 0 00-.92.51v2.17a.93.93 0 00.92.52c.68 0 1.02-.55 1.02-1.66zM986.83 574.19a3.16 3.16 0 01.3-1.4 2.25 2.25 0 01.88-.95 2.57 2.57 0 011.32-.34 2.38 2.38 0 011.74.66 2.66 2.66 0 01.76 1.78v.36a2.77 2.77 0 01-.68 2 2.65 2.65 0 01-3.65 0 2.82 2.82 0 01-.68-2zm1.41.1a2 2 0 00.29 1.16.92.92 0 00.81.39.94.94 0 00.8-.39 2.17 2.17 0 00.28-1.26 2 2 0 00-.28-1.14 1 1 0 00-.81-.41.92.92 0 00-.8.4 2.2 2.2 0 00-.29 1.25zM995.67 572.92h-.5a1 1 0 00-1 .54v3.45h-1.41v-5.31H994v.63a1.31 1.31 0 011.17-.73 1.23 1.23 0 01.44.07zM999.27 576.88a1.38 1.38 0 01-.14-.47 1.73 1.73 0 01-1.34.57 1.87 1.87 0 01-1.28-.45 1.43 1.43 0 01-.51-1.13 1.48 1.48 0 01.62-1.29 3 3 0 011.8-.45h.65v-.31a.88.88 0 00-.19-.58.73.73 0 00-.59-.22.8.8 0 00-.56.17.57.57 0 00-.21.47h-1.41a1.41 1.41 0 01.29-.85 1.79 1.79 0 01.8-.61 2.86 2.86 0 011.16-.23 2.34 2.34 0 011.55.49 1.73 1.73 0 01.57 1.38v2.29a2.75 2.75 0 00.21 1.14v.08zm-1.17-1a1.16 1.16 0 00.58-.14.93.93 0 00.39-.37v-.91h-.53c-.71 0-1.08.25-1.13.73v.09a.57.57 0 00.18.43.72.72 0 00.51.19zM1003.26 570.3v1.3h.9v1h-.9v2.63a.59.59 0 00.11.42.54.54 0 00.43.13 2.46 2.46 0 00.41 0v1.06a2.7 2.7 0 01-.85.13 1.35 1.35 0 01-1.51-1.5v-2.84h-.78v-1h.78v-1.3zM1007.38 577a2.59 2.59 0 01-1.89-.71 2.53 2.53 0 01-.73-1.9v-.14a3.25 3.25 0 01.3-1.42 2.3 2.3 0 01.88-1 2.47 2.47 0 011.28-.34 2.2 2.2 0 011.71.69 2.79 2.79 0 01.62 1.94v.57h-3.36a1.27 1.27 0 00.41.83 1.24 1.24 0 00.87.31 1.53 1.53 0 001.28-.59l.69.78a2.13 2.13 0 01-.86.7 2.77 2.77 0 01-1.2.28zm-.16-4.34a.88.88 0 00-.68.29 1.44 1.44 0 00-.34.81h2v-.11a1 1 0 00-.25-.73.9.9 0 00-.73-.28zM1015.9 576.88a1.64 1.64 0 01-.14-.47 1.7 1.7 0 01-1.33.57 1.88 1.88 0 01-1.29-.45 1.43 1.43 0 01-.51-1.13 1.51 1.51 0 01.62-1.29 3.07 3.07 0 011.8-.45h.65v-.31a.83.83 0 00-.19-.58.71.71 0 00-.59-.22.82.82 0 00-.56.17.59.59 0 00-.2.47h-1.41a1.4 1.4 0 01.28-.85 1.84 1.84 0 01.8-.61 2.94 2.94 0 011.17-.23 2.36 2.36 0 011.55.49 1.73 1.73 0 01.57 1.38v2.29a2.46 2.46 0 00.21 1.14v.08zm-1.16-1a1.12 1.12 0 00.57-.14.83.83 0 00.39-.37v-.91h-.52c-.71 0-1.09.25-1.13.73v.09a.54.54 0 00.19.43.69.69 0 00.5.19zM1019.69 576.88h-1.41v-7.5h1.41zM1022.34 576.88h-1.41v-7.5h1.41zM1023.29 574.19a3.16 3.16 0 01.3-1.4 2.17 2.17 0 01.87-.95 2.59 2.59 0 011.32-.34 2.41 2.41 0 011.75.66 2.61 2.61 0 01.75 1.78v.36a2.77 2.77 0 01-.68 2 2.63 2.63 0 01-3.64 0 2.78 2.78 0 01-.68-2zm1.41.1a2 2 0 00.28 1.16 1 1 0 001.61 0 2.17 2.17 0 00.29-1.26 2 2 0 00-.29-1.14.94.94 0 00-.81-.41 1 1 0 00-.8.4 2.2 2.2 0 00-.28 1.25zM1033.75 575l.7-3.37h1.36l-1.35 5.28h-1.18l-1-3.32-1 3.32h-1.18l-1.35-5.28h1.37l.69 3.36 1-3.36h1zM1038 576.88h-1.42v-7.5h1.42zM1039.15 570.23a.7.7 0 01.21-.52.79.79 0 01.58-.2.8.8 0 01.58.2.7.7 0 01.21.52.68.68 0 01-.22.53.88.88 0 01-1.14 0 .68.68 0 01-.22-.53zm1.5 6.65h-1.42v-5.28h1.42zM1044.67 575.42a.44.44 0 00-.25-.4 3 3 0 00-.83-.27c-1.25-.26-1.88-.8-1.88-1.6a1.46 1.46 0 01.58-1.18 2.39 2.39 0 011.53-.47 2.51 2.51 0 011.61.48 1.48 1.48 0 01.6 1.23h-1.41a.69.69 0 00-.2-.5.83.83 0 00-.61-.2.84.84 0 00-.55.16.5.5 0 00-.19.41.43.43 0 00.22.38 2.22 2.22 0 00.75.25 7.52 7.52 0 01.89.23 1.47 1.47 0 011.11 1.43 1.34 1.34 0 01-.62 1.16 2.64 2.64 0 01-1.6.45 3 3 0 01-1.18-.23 2 2 0 01-.8-.65 1.52 1.52 0 01-.3-.9h1.34a.72.72 0 00.28.58 1.11 1.11 0 00.69.2 1 1 0 00.61-.15.49.49 0 00.21-.41zM1048.64 570.3v1.3h.91v1h-.91v2.63a.64.64 0 00.11.42.55.55 0 00.43.13 2.58 2.58 0 00.42 0v1.06a2.74 2.74 0 01-.85.13 1.35 1.35 0 01-1.52-1.5v-2.84h-.77v-1h.77v-1.3zM959.55 585.14a1.08 1.08 0 01.32-.81 1.16 1.16 0 01.83-.31 1.19 1.19 0 01.85.3 1.12 1.12 0 01.32.8v.21a1.1 1.1 0 01-.32.81 1.31 1.31 0 01-1.67 0 1.07 1.07 0 01-.33-.83zM969.3 587a.75.75 0 00-.3-.64 3.79 3.79 0 00-1-.47 7.22 7.22 0 01-1.21-.48 2 2 0 01-1.21-1.77 1.68 1.68 0 01.33-1 2.07 2.07 0 01.93-.71 3.51 3.51 0 011.36-.25 3.24 3.24 0 011.36.27 2.24 2.24 0 01.93.78 2.05 2.05 0 01.33 1.14h-1.52a1 1 0 00-.31-.76 1.3 1.3 0 00-.86-.27 1.38 1.38 0 00-.84.23.73.73 0 00-.29.6.68.68 0 00.35.58 3.85 3.85 0 001 .44 4.51 4.51 0 011.83.93 1.87 1.87 0 01.57 1.39 1.74 1.74 0 01-.7 1.45 3.06 3.06 0 01-1.88.52 3.65 3.65 0 01-1.5-.3 2.34 2.34 0 01-1-.82 2.08 2.08 0 01-.36-1.21h1.47q0 1.17 1.41 1.17a1.35 1.35 0 00.81-.21.68.68 0 00.3-.61zM973 583.6v.59a1.86 1.86 0 011.52-.69 1.4 1.4 0 011.4.81 1.81 1.81 0 011.59-.81 1.59 1.59 0 011.28.5 2.32 2.32 0 01.42 1.51v3.37h-1.42v-3.37a1.07 1.07 0 00-.17-.66.79.79 0 00-.62-.21.87.87 0 00-.88.61v3.63h-1.41v-3.37a1 1 0 00-.18-.66.76.76 0 00-.61-.21.91.91 0 00-.87.5v3.74h-1.41v-5.28zM983.38 588.88a1.64 1.64 0 01-.14-.47 1.7 1.7 0 01-1.33.57 1.88 1.88 0 01-1.29-.45 1.43 1.43 0 01-.51-1.13 1.49 1.49 0 01.63-1.29 3 3 0 011.79-.45h.65v-.31a.87.87 0 00-.18-.58.75.75 0 00-.6-.22.83.83 0 00-.56.17.59.59 0 00-.2.47h-1.41a1.4 1.4 0 01.28-.85 1.84 1.84 0 01.8-.61 2.94 2.94 0 011.17-.23 2.36 2.36 0 011.52.5 1.73 1.73 0 01.57 1.38v2.29a2.46 2.46 0 00.21 1.14v.08zm-1.16-1a1.1 1.1 0 00.57-.14.83.83 0 00.39-.37v-.91h-.52c-.71 0-1.09.25-1.13.73v.09a.57.57 0 00.19.43.69.69 0 00.5.19zM988.65 584.92h-.51a1 1 0 00-1 .54v3.45h-1.41v-5.31H987v.63a1.31 1.31 0 011.17-.73 1.23 1.23 0 01.44.07zM991.26 582.3v1.3h.91v1h-.91v2.63a.59.59 0 00.12.42.54.54 0 00.43.13 2.54 2.54 0 00.41 0v1.06a2.7 2.7 0 01-.85.13 1.35 1.35 0 01-1.52-1.5v-2.84h-.77v-1h.77v-1.3zM1000.2 586.29a3.19 3.19 0 01-.55 2 1.78 1.78 0 01-1.5.73 1.63 1.63 0 01-1.29-.55v2.49h-1.42v-7.36h1.31v.52a1.66 1.66 0 011.34-.62 1.78 1.78 0 011.52.73 3.25 3.25 0 01.54 2zm-1.41-.11a2.14 2.14 0 00-.26-1.14.85.85 0 00-.76-.4.92.92 0 00-.91.51v2.17a.93.93 0 00.92.52c.67 0 1.01-.55 1.01-1.66zM1004 584.92h-.5a1 1 0 00-1 .54v3.45h-1.42v-5.31h1.34v.63a1.31 1.31 0 011.17-.73 1.23 1.23 0 01.44.07zM1004.33 586.19a3.16 3.16 0 01.3-1.4 2.17 2.17 0 01.87-.95 2.59 2.59 0 011.32-.34 2.41 2.41 0 011.75.66 2.61 2.61 0 01.75 1.78v.36a2.73 2.73 0 01-.68 2 2.63 2.63 0 01-3.64 0 2.78 2.78 0 01-.68-2zm1.41.1a2 2 0 00.28 1.16 1 1 0 001.61 0 2.17 2.17 0 00.29-1.26 2 2 0 00-.29-1.14.94.94 0 00-.81-.41 1 1 0 00-.8.4 2.2 2.2 0 00-.28 1.25zM1011.89 582.3v1.3h.9v1h-.9v2.63a.64.64 0 00.11.42.55.55 0 00.43.13 2.58 2.58 0 00.42 0v1.06a2.76 2.76 0 01-.86.13 1.35 1.35 0 01-1.51-1.5v-2.84h-.77v-1h.77v-1.3zM1016 589a2.62 2.62 0 01-1.89-.71 2.53 2.53 0 01-.73-1.9v-.14a3.12 3.12 0 01.31-1.42 2.22 2.22 0 01.87-1 2.47 2.47 0 011.28-.34 2.17 2.17 0 011.71.69 2.74 2.74 0 01.62 1.94v.57h-3.36a1.32 1.32 0 00.41.83 1.24 1.24 0 00.87.31 1.51 1.51 0 001.28-.59l.69.78a2.13 2.13 0 01-.86.7 2.77 2.77 0 01-1.2.28zm-.16-4.34a.88.88 0 00-.68.29 1.44 1.44 0 00-.34.81h2v-.11a1 1 0 00-.26-.73.9.9 0 00-.71-.28zM1021.18 587.84a1 1 0 00.64-.21.76.76 0 00.25-.57h1.32a1.79 1.79 0 01-.29 1 1.92 1.92 0 01-.79.7 2.5 2.5 0 01-1.1.24 2.3 2.3 0 01-1.79-.72 2.83 2.83 0 01-.66-2v-.09a2.85 2.85 0 01.65-1.95 2.31 2.31 0 011.79-.73 2.21 2.21 0 011.59.57 2 2 0 01.6 1.5h-1.32a1 1 0 00-.25-.67.87.87 0 00-.65-.26.83.83 0 00-.74.36 2.07 2.07 0 00-.25 1.17v.14a2.19 2.19 0 00.24 1.18.86.86 0 00.76.34zM1025.89 582.3v1.3h.9v1h-.9v2.63a.64.64 0 00.11.42.55.55 0 00.43.13 2.58 2.58 0 00.42 0v1.06a2.8 2.8 0 01-.86.13 1.35 1.35 0 01-1.51-1.5v-2.84h-.77v-1h.77v-1.3zM1027.57 582.23a.7.7 0 01.21-.52.79.79 0 01.58-.2.8.8 0 01.58.2.7.7 0 01.21.52.68.68 0 01-.22.53.88.88 0 01-1.14 0 .68.68 0 01-.22-.53zm1.5 6.65h-1.42v-5.28h1.42zM1030 586.19a3.16 3.16 0 01.3-1.4 2.17 2.17 0 01.87-.95 2.59 2.59 0 011.32-.34 2.39 2.39 0 011.75.66 2.61 2.61 0 01.75 1.78v.36a2.77 2.77 0 01-.67 2 2.65 2.65 0 01-3.65 0 2.82 2.82 0 01-.68-2zm1.41.1a2.07 2.07 0 00.28 1.16.94.94 0 00.81.39 1 1 0 00.81-.39 2.17 2.17 0 00.28-1.26 2 2 0 00-.28-1.14 1 1 0 00-.82-.41 1 1 0 00-.8.4 2.29 2.29 0 00-.27 1.25zM1037.18 583.6v.61a1.84 1.84 0 011.52-.71 1.56 1.56 0 011.25.5 2.34 2.34 0 01.42 1.47v3.41H1039v-3.38a1 1 0 00-.19-.66.9.9 0 00-.65-.2 1 1 0 00-.89.51v3.73h-1.42v-5.28zM1048.73 586.29a3.19 3.19 0 01-.55 2 1.78 1.78 0 01-1.5.73 1.63 1.63 0 01-1.29-.55v2.49H1044v-7.36h1.31v.52a1.66 1.66 0 011.34-.62 1.78 1.78 0 011.52.73 3.25 3.25 0 01.54 2zm-1.41-.11a2.14 2.14 0 00-.26-1.14.85.85 0 00-.76-.4.92.92 0 00-.91.51v2.17a.93.93 0 00.92.52c.69 0 1.01-.55 1.01-1.66zM1051.09 588.88h-1.41v-7.5h1.41zM1055.32 588.88a1.38 1.38 0 01-.14-.47 1.73 1.73 0 01-1.34.57 1.87 1.87 0 01-1.28-.45 1.43 1.43 0 01-.51-1.13 1.48 1.48 0 01.62-1.29 3 3 0 011.8-.45h.65v-.31a.88.88 0 00-.19-.58.73.73 0 00-.59-.22.8.8 0 00-.56.17.57.57 0 00-.21.47h-1.41a1.41 1.41 0 01.29-.85 1.73 1.73 0 01.8-.61 2.86 2.86 0 011.16-.23 2.34 2.34 0 011.55.49 1.73 1.73 0 01.57 1.38v2.29a2.75 2.75 0 00.21 1.14v.08zm-1.17-1a1.16 1.16 0 00.58-.14.93.93 0 00.39-.37v-.91h-.53c-.71 0-1.08.25-1.13.73v.09a.57.57 0 00.18.43.72.72 0 00.51.19zM1058.92 583.6v.61a1.85 1.85 0 011.52-.71 1.53 1.53 0 011.25.5 2.34 2.34 0 01.42 1.47v3.41h-1.41v-3.38a1 1 0 00-.2-.66.89.89 0 00-.65-.2 1 1 0 00-.89.51v3.73h-1.41v-5.28zM1066.08 587.42a.45.45 0 00-.26-.4 2.87 2.87 0 00-.82-.27c-1.26-.26-1.88-.8-1.88-1.6a1.46 1.46 0 01.58-1.18 2.38 2.38 0 011.52-.47 2.49 2.49 0 011.61.48 1.46 1.46 0 01.61 1.23H1066a.69.69 0 00-.2-.5 1 1 0 00-1.16 0 .51.51 0 00-.2.41.44.44 0 00.23.38 2.08 2.08 0 00.74.25 7 7 0 01.89.23 1.47 1.47 0 011.12 1.43 1.36 1.36 0 01-.62 1.16 2.66 2.66 0 01-1.6.45 2.92 2.92 0 01-1.18-.23 2.1 2.1 0 01-.81-.65 1.58 1.58 0 01-.29-.9h1.34a.7.7 0 00.28.58 1.11 1.11 0 00.69.2 1 1 0 00.61-.15.49.49 0 00.24-.45zM959.55 597.14a1.08 1.08 0 01.32-.81 1.16 1.16 0 01.83-.31 1.19 1.19 0 01.85.3 1.12 1.12 0 01.32.8v.21a1.1 1.1 0 01-.32.81 1.31 1.31 0 01-1.67 0 1.07 1.07 0 01-.33-.83zM969.89 597.79h-2.81v1.92h3.3v1.17h-4.77v-7.11h4.76V595h-3.29v1.7h2.81zM973.15 597.18l.89-1.58h1.51l-1.5 2.59 1.57 2.69h-1.52l-.94-1.66-.94 1.66h-1.52l1.57-2.69-1.5-2.59h1.52zM981 598.29a3.19 3.19 0 01-.56 2 1.77 1.77 0 01-1.49.73 1.65 1.65 0 01-1.3-.55v2.49h-1.41v-7.36h1.31l.05.52a1.66 1.66 0 011.34-.62 1.76 1.76 0 011.51.73 3.18 3.18 0 01.55 2zm-1.41-.11a2 2 0 00-.27-1.14.83.83 0 00-.76-.4.92.92 0 00-.91.51v2.17a.93.93 0 00.92.52c.67 0 1.01-.55 1.01-1.66zM983.35 600.88h-1.42v-7.5h1.42zM984.29 598.19a3.16 3.16 0 01.3-1.4 2.25 2.25 0 01.88-.95 2.59 2.59 0 011.32-.34 2.38 2.38 0 011.74.66 2.62 2.62 0 01.76 1.78v.36a2.77 2.77 0 01-.68 2 2.35 2.35 0 01-1.82.73 2.39 2.39 0 01-1.83-.73 2.82 2.82 0 01-.68-2zm1.41.1a2 2 0 00.29 1.16 1 1 0 001.61 0 2.17 2.17 0 00.29-1.26 2 2 0 00-.29-1.14 1 1 0 00-1.61 0 2.2 2.2 0 00-.29 1.24zM990.16 594.23a.7.7 0 01.21-.52.77.77 0 01.58-.2.76.76 0 01.57.2.67.67 0 01.22.52.68.68 0 01-.22.53.77.77 0 01-.57.21.81.81 0 01-.58-.21.71.71 0 01-.21-.53zm1.5 6.65h-1.42v-5.28h1.42zM994.51 594.3v1.3h.9v1h-.9v2.63a.59.59 0 00.11.42.54.54 0 00.43.13 2.46 2.46 0 00.41 0v1.06a2.7 2.7 0 01-.85.13 1.35 1.35 0 01-1.51-1.5v-2.84h-.78v-1h.78v-1.3zM1003.44 598.29a3.19 3.19 0 01-.55 2 1.78 1.78 0 01-1.5.73 1.64 1.64 0 01-1.29-.55v2.49h-1.41v-7.36h1.31v.52a1.68 1.68 0 011.34-.62 1.78 1.78 0 011.52.73 3.25 3.25 0 01.54 2zm-1.41-.11a2.14 2.14 0 00-.26-1.14.84.84 0 00-.76-.4.92.92 0 00-.91.51v2.17a.93.93 0 00.92.52c.67 0 .98-.55.98-1.66zM1007.29 596.92h-.51a1 1 0 00-1 .54v3.45h-1.41v-5.31h1.33v.63a1.31 1.31 0 011.18-.73 1.21 1.21 0 01.43.07zM1010.3 601a2.62 2.62 0 01-1.89-.71 2.53 2.53 0 01-.73-1.9v-.14a3.12 3.12 0 01.31-1.42 2.22 2.22 0 01.87-1 2.53 2.53 0 011.29-.34 2.16 2.16 0 011.7.69 2.75 2.75 0 01.63 1.94v.57h-3.37a1.32 1.32 0 00.41.83 1.25 1.25 0 00.88.31 1.51 1.51 0 001.27-.59l.69.78a2.07 2.07 0 01-.86.7 2.77 2.77 0 01-1.2.28zm-.16-4.34a.88.88 0 00-.68.29 1.43 1.43 0 00-.33.81h2v-.11a1 1 0 00-.26-.73.9.9 0 00-.73-.28zM1015.19 599.16l1-3.56h1.48l-1.79 5.28h-1.34l-1.79-5.28h1.48zM1020.63 601a2.62 2.62 0 01-1.89-.71 2.57 2.57 0 01-.73-1.9v-.14a3.25 3.25 0 01.31-1.42 2.35 2.35 0 01.87-1 2.53 2.53 0 011.29-.34 2.16 2.16 0 011.7.69 2.75 2.75 0 01.63 1.94v.57h-3.37a1.33 1.33 0 00.42.83 1.22 1.22 0 00.87.31 1.5 1.5 0 001.27-.59l.7.78a2.2 2.2 0 01-.86.7 2.85 2.85 0 01-1.21.28zm-.16-4.34a.89.89 0 00-.68.29 1.51 1.51 0 00-.33.81h2v-.11a1.07 1.07 0 00-.25-.73.94.94 0 00-.74-.28zM1024.91 595.6v.61a1.85 1.85 0 011.52-.71 1.53 1.53 0 011.25.5 2.34 2.34 0 01.42 1.47v3.41h-1.41v-3.38a1 1 0 00-.2-.66.89.89 0 00-.65-.2 1 1 0 00-.89.51v3.73h-1.41v-5.28zM1030.9 594.3v1.3h.9v1h-.9v2.63a.64.64 0 00.11.42.55.55 0 00.43.13 2.58 2.58 0 00.42 0v1.06a2.8 2.8 0 01-.86.13 1.35 1.35 0 01-1.51-1.5v-2.84h-.77v-1h.77v-1.3zM1032.58 594.23a.7.7 0 01.21-.52.79.79 0 01.58-.2.8.8 0 01.58.2.7.7 0 01.21.52.68.68 0 01-.22.53.88.88 0 01-1.14 0 .68.68 0 01-.22-.53zm1.5 6.65h-1.42v-5.28h1.42zM1035 598.19a3.16 3.16 0 01.3-1.4 2.17 2.17 0 01.87-.95 2.59 2.59 0 011.32-.34 2.39 2.39 0 011.75.66 2.61 2.61 0 01.75 1.78v.36a2.77 2.77 0 01-.67 2 2.65 2.65 0 01-3.65 0 2.82 2.82 0 01-.68-2zm1.41.1a2.07 2.07 0 00.28 1.16.94.94 0 00.81.39 1 1 0 00.81-.39 2.17 2.17 0 00.28-1.26 2 2 0 00-.28-1.14 1 1 0 00-.82-.41 1 1 0 00-.8.4 2.29 2.29 0 00-.26 1.25zM1042.19 595.6v.61a1.83 1.83 0 011.51-.71 1.53 1.53 0 011.25.5 2.22 2.22 0 01.42 1.47v3.41H1044v-3.38a1 1 0 00-.19-.66.9.9 0 00-.65-.2 1 1 0 00-.89.51v3.73h-1.42v-5.28z"
              />
            </g>
            <g id="prefix__ADVANCED_MANAGEMENT" data-name="ADVANCED MANAGEMENT">
              <path
                d="M950 625a249 249 0 01-33.46 125l151.58 87.51A423.05 423.05 0 001125 625z"
                stroke="#e64e7d"
                fill="url(#prefix__radial-gradient-18)"
                strokeMiterlimit={10}
              />
              <path
                d="M916.54 750A249 249 0 00950 625h-75c0 1.8 0 3.59-.09 5.38l-.06 1.59c-.05 1.31-.12 2.61-.2 3.91 0 .54-.06 1.08-.1 1.61-.11 1.63-.25 3.24-.41 4.86v.42c-.18 1.77-.39 3.52-.62 5.27-.06.46-.13.93-.2 1.39-.18 1.33-.38 2.64-.59 4-.08.5-.17 1-.25 1.49-.27 1.54-.55 3.07-.85 4.6 0 .18-.07.36-.11.54-.35 1.74-.73 3.46-1.13 5.18l-.27 1.09c-.33 1.36-.68 2.72-1 4.07-.11.43-.23.86-.35 1.29q-.62 2.25-1.29 4.47c-.06.18-.1.35-.16.52-.52 1.71-1.08 3.41-1.65 5.09l-.26.72q-.74 2.13-1.53 4.23l-.41 1.08q-.84 2.19-1.74 4.35l-.19.48q-1.05 2.49-2.17 4.95l-.16.34c-.67 1.46-1.36 2.92-2.07 4.36l-.45.9c-.7 1.4-1.41 2.78-2.15 4.16l-.25.48q-1.29 2.4-2.65 4.74z"
                fill="url(#prefix__radial-gradient-19)"
              />
              <path
                className="prefix__cls-13"
                d="M880.94 673.26h-3.33l-.64 1.9h-2l3.44-9.24h1.76l3.46 9.24h-2zm-2.82-1.55h2.31l-1.16-3.46zM884.47 675.16v-9.24h2.85a4.28 4.28 0 012.18.55A3.76 3.76 0 01891 668a4.79 4.79 0 01.54 2.3v.43a4.86 4.86 0 01-.53 2.29 3.74 3.74 0 01-1.5 1.55 4.28 4.28 0 01-2.17.56zm1.91-7.7v6.17h.92a2.08 2.08 0 001.71-.73 3.31 3.31 0 00.6-2.09v-.49a3.32 3.32 0 00-.59-2.13 2 2 0 00-1.7-.73zM896.2 672.87l2.09-7h2.12l-3.22 9.24h-2l-3.19-9.19h2.12zM906 673.26h-3.34l-.63 1.9h-2l3.44-9.24h1.76l3.46 9.24h-2zm-2.82-1.55h2.31l-1.16-3.46zM917.07 675.16h-1.91l-3.7-6.08v6.08h-1.91v-9.24h1.91l3.71 6.09v-6.09h1.9zM926 672.08a3.26 3.26 0 01-1.1 2.35 3.9 3.9 0 01-2.62.86 3.48 3.48 0 01-2.8-1.2 4.9 4.9 0 01-1-3.28v-.57a5.6 5.6 0 01.47-2.35 3.66 3.66 0 011.34-1.56 4.2 4.2 0 014.61.32 3.5 3.5 0 011.13 2.4h-1.9a2 2 0 00-.5-1.29 1.85 1.85 0 00-1.31-.41 1.6 1.6 0 00-1.42.69 3.77 3.77 0 00-.49 2.11v.7a4 4 0 00.46 2.19 1.59 1.59 0 001.43.69 1.85 1.85 0 001.31-.4 1.81 1.81 0 00.5-1.25zM932.8 671.14h-3.66v2.49h4.29v1.53h-6.19v-9.24h6.18v1.54h-4.28v2.2h3.66zM934.55 675.16v-9.24h2.84a4.26 4.26 0 012.18.55 3.79 3.79 0 011.51 1.56 4.79 4.79 0 01.54 2.3v.43a4.75 4.75 0 01-.54 2.29 3.77 3.77 0 01-1.49 1.55 4.29 4.29 0 01-2.18.56zm1.9-7.7v6.17h.93a2 2 0 001.7-.73 3.25 3.25 0 00.61-2.09v-.49a3.32 3.32 0 00-.59-2.13 2.05 2.05 0 00-1.71-.73zM880.55 681.52l2.37 6.7 2.37-6.7h2.5v9.24h-1.91v-2.53l.19-4.36-2.5 6.89h-1.31l-2.48-6.88.19 4.35v2.53h-1.91v-9.24zM894.78 688.86h-3.34l-.63 1.9h-2l3.44-9.24H894l3.46 9.24h-2zm-2.78-1.55h2.31l-1.16-3.46zM905.83 690.76h-1.91l-3.7-6.08v6.08h-1.91v-9.24h1.91l3.71 6.09v-6.09h1.9zM912.82 688.86h-3.34l-.63 1.9h-2l3.44-9.24H912l3.46 9.24h-2zm-2.82-1.55h2.31l-1.16-3.46zM923.53 689.59a3.36 3.36 0 01-1.45 1 6.26 6.26 0 01-2.08.34 4.13 4.13 0 01-2.11-.53 3.5 3.5 0 01-1.4-1.52 5.45 5.45 0 01-.5-2.34v-.63a5.51 5.51 0 01.47-2.39 3.46 3.46 0 011.34-1.55 3.86 3.86 0 012.06-.54 3.82 3.82 0 012.57.79 3.31 3.31 0 011.1 2.28h-1.85a1.85 1.85 0 00-.56-1.16 1.78 1.78 0 00-1.2-.37 1.68 1.68 0 00-1.48.73 3.78 3.78 0 00-.51 2.17v.59a3.66 3.66 0 00.55 2.2 1.91 1.91 0 001.62.74 2.11 2.11 0 001.53-.46v-1.59h-1.74v-1.4h3.64zM930.63 686.74H927v2.49h4.29v1.53h-6.2v-9.24h6.19v1.54H927v2.2h3.65zM939.07 687.54h-3.57v-1.48h3.57zM895.79 697.12l2.38 6.7 2.36-6.7H903v9.24h-1.91v-2.53l.19-4.36-2.5 6.89h-1.28l-2.5-6.88.19 4.35v2.53h-1.89v-9.24zM910.25 702.34h-3.66v2.49h4.3v1.53h-6.2v-9.24h6.18v1.54h-4.28v2.2h3.66zM919.52 706.36h-1.91l-3.7-6.08v6.08H912v-9.24h1.91l3.71 6.09v-6.09h1.9zM928 698.66h-2.84v7.7h-1.9v-7.7h-2.79v-1.54H928z"
              />
              <text
                className="prefix__cls-85"
                transform="translate(976.89 665.88)"
              >
                {"\u2022 "}
                <tspan className="prefix__cls-99" x={6.08} y={0}>
                  {"P"}
                </tspan>
                <tspan x={12.48} y={0}>
                  {"atch management"}
                </tspan>
                <tspan x={0} y={12}>
                  {"\u2022 HDD health"}
                </tspan>
                <tspan x={0} y={24}>
                  {"\u2022 Software inventory"}
                </tspan>
                <tspan x={0} y={36}>
                  {"\u2022 "}
                </tspan>
                <tspan x={6.08} y={36} letterSpacing="-.02em">
                  {"F"}
                </tspan>
                <tspan x={11.4} y={36}>
                  {"ail safe patching"}
                </tspan>
                <tspan x={0} y={48}>
                  {"\u2022 Cyber scripting*"}
                </tspan>
                <tspan x={0} y={60}>
                  {"\u2022"}
                </tspan>
                <tspan className="prefix__cls-88" x={3.59} y={60} />
                <tspan x={5.79} y={60} letterSpacing="-.1em">
                  {"T"}
                </tspan>
                <tspan x={10.96} y={60}>
                  {"oolb"}
                </tspan>
                <tspan x={30.55} y={60} letterSpacing="-.01em">
                  {"o"}
                </tspan>
                <tspan x={36.1} y={60}>
                  {"x for MSP*"}
                </tspan>
                <tspan x={0} y={72}>
                  {"\u2022 AI-based monitoring*"}
                </tspan>
                <tspan x={0} y={84}>
                  {"\u2022 Software deployment*"}
                </tspan>
              </text>
            </g>
            <g id="prefix__ADVANCED_BACKUP" data-name="ADVANCED BACKUP">
              <path
                d="M825 841.54l87.51 151.58a427.07 427.07 0 00155.59-155.59L916.54 750A251.32 251.32 0 01825 841.54z"
                stroke="#5e4b9f"
                fill="url(#prefix__radial-gradient-20)"
                strokeMiterlimit={10}
              />
              <path
                d="M825 841.54A251.32 251.32 0 00916.54 750l-65-37.51c-.88 1.53-1.8 3-2.73 4.55l-.49.79c-.89 1.41-1.79 2.82-2.72 4.21l-.18.27q-1.53 2.29-3.15 4.54l-.26.36c-1 1.33-1.93 2.64-2.93 3.93-.18.25-.37.49-.56.74q-3.3 4.26-6.84 8.32l-.47.53q-1.56 1.77-3.18 3.5l-.58.63q-3.69 3.92-7.6 7.6l-.63.58q-1.72 1.62-3.5 3.18l-.53.47c-2.7 2.36-5.48 4.65-8.32 6.84l-.74.57c-1.29 1-2.61 2-3.93 2.92l-.36.26q-2.25 1.62-4.54 3.15l-.27.18c-1.39.93-2.8 1.83-4.21 2.72l-.79.49q-2.25 1.41-4.55 2.73z"
                fill="url(#prefix__radial-gradient-21)"
              />
              <path
                className="prefix__cls-13"
                d="M824.94 773.26h-3.33l-.64 1.9h-2l3.44-9.24h1.76l3.46 9.24h-2zm-2.82-1.55h2.31l-1.16-3.46zM828.47 775.16v-9.24h2.85a4.28 4.28 0 012.18.55A3.76 3.76 0 01835 768a4.79 4.79 0 01.54 2.3v.43a4.86 4.86 0 01-.53 2.29 3.74 3.74 0 01-1.5 1.55 4.28 4.28 0 01-2.17.56zm1.91-7.7v6.17h.92a2.08 2.08 0 001.71-.73 3.31 3.31 0 00.6-2.09v-.49a3.32 3.32 0 00-.59-2.13 2 2 0 00-1.7-.73zM840.2 772.87l2.09-7h2.12l-3.22 9.24h-2l-3.19-9.19h2.12zM850 773.26h-3.34l-.63 1.9h-2l3.44-9.24h1.76l3.46 9.24h-2zm-2.82-1.55h2.31l-1.16-3.46zM861.07 775.16h-1.91l-3.7-6.08v6.08h-1.91v-9.24h1.91l3.71 6.09v-6.09h1.9zM870 772.08a3.26 3.26 0 01-1.1 2.35 3.9 3.9 0 01-2.62.86 3.48 3.48 0 01-2.8-1.2 4.9 4.9 0 01-1-3.28v-.57a5.6 5.6 0 01.47-2.35 3.66 3.66 0 011.34-1.56 4.2 4.2 0 014.61.32 3.5 3.5 0 011.13 2.4h-1.9a2 2 0 00-.5-1.29 1.85 1.85 0 00-1.31-.41 1.6 1.6 0 00-1.42.69 3.77 3.77 0 00-.49 2.11v.7a4 4 0 00.46 2.19 1.59 1.59 0 001.43.69 1.85 1.85 0 001.31-.4 1.81 1.81 0 00.5-1.25zM876.8 771.14h-3.66v2.49h4.29v1.53h-6.19v-9.24h6.18v1.54h-4.28v2.2h3.66zM878.55 775.16v-9.24h2.84a4.26 4.26 0 012.18.55 3.79 3.79 0 011.51 1.56 4.79 4.79 0 01.54 2.3v.43a4.75 4.75 0 01-.54 2.29 3.77 3.77 0 01-1.49 1.55 4.29 4.29 0 01-2.18.56zm1.9-7.7v6.17h.93a2 2 0 001.7-.73 3.25 3.25 0 00.61-2.09v-.49a3.32 3.32 0 00-.59-2.13 2.05 2.05 0 00-1.71-.73zM829.68 790.76v-9.24h3.23a4.26 4.26 0 012.56.64 2.22 2.22 0 01.86 1.89 2.13 2.13 0 01-.34 1.2 2.08 2.08 0 01-1 .76 2 2 0 011.13.71 2.13 2.13 0 01.4 1.32 2.42 2.42 0 01-.85 2 3.79 3.79 0 01-2.42.7zm1.9-5.37H833c1 0 1.44-.4 1.44-1.15a1.05 1.05 0 00-.36-.9 1.91 1.91 0 00-1.16-.28h-1.33zm0 1.35v2.49h1.63a1.59 1.59 0 001-.32 1.11 1.11 0 00.38-.89 1.16 1.16 0 00-1.31-1.28zM843.19 788.86h-3.34l-.63 1.9h-2l3.44-9.24h1.77l3.46 9.24h-2zm-2.82-1.55h2.31l-1.17-3.46zM853.84 787.68a3.26 3.26 0 01-1.1 2.35 3.86 3.86 0 01-2.62.86 3.47 3.47 0 01-2.79-1.2 4.9 4.9 0 01-1-3.28v-.57a5.45 5.45 0 01.47-2.35 3.6 3.6 0 011.34-1.56 4.19 4.19 0 014.6.32 3.46 3.46 0 011.13 2.4H852a1.92 1.92 0 00-.5-1.29 1.83 1.83 0 00-1.3-.41 1.62 1.62 0 00-1.43.69 3.87 3.87 0 00-.48 2.11v.7a4.12 4.12 0 00.45 2.19 1.59 1.59 0 001.43.69 1.88 1.88 0 001.32-.4 1.81 1.81 0 00.5-1.25zM858 787.05l-1 1.07v2.64h-1.91v-9.24H857v4.19l.83-1.15 2.36-3h2.34l-3.28 4.11 3.38 5.13h-2.27zM870.34 781.52v6.09a3.1 3.1 0 01-1 2.39 3.65 3.65 0 01-2.59.89 3.7 3.7 0 01-2.57-.86 3 3 0 01-1-2.35v-6.16h1.9v6.1a1.75 1.75 0 00.43 1.32 1.68 1.68 0 001.21.42c1.07 0 1.61-.57 1.63-1.69v-6.15zM873.81 787.5v3.26h-1.91v-9.24h3.61a4.24 4.24 0 011.83.38 2.71 2.71 0 011.21 1.08 3 3 0 01.43 1.6 2.65 2.65 0 01-.93 2.14 3.9 3.9 0 01-2.58.78zm0-1.54h1.7a1.72 1.72 0 001.15-.35 1.32 1.32 0 00.4-1 1.56 1.56 0 00-.4-1.1 1.51 1.51 0 00-1.11-.43h-1.74z"
              />
              <path
                className="prefix__cls-48"
                d="M879.55 829.14a1.07 1.07 0 01.32-.81 1.14 1.14 0 01.83-.31 1.17 1.17 0 01.84.3 1.12 1.12 0 01.33.8v.21a1.1 1.1 0 01-.32.81 1.31 1.31 0 01-1.67 0 1.07 1.07 0 01-.33-.83zM887.52 825.77l1.83 5.16 1.82-5.16h1.92v7.11h-1.47v-1.94l.15-3.35-1.92 5.29h-1l-1.91-5.29.15 3.35v1.94h-1.47v-7.11zM894.27 826.23a.7.7 0 01.21-.52.77.77 0 01.58-.2.76.76 0 01.57.2.67.67 0 01.22.52.68.68 0 01-.22.53.77.77 0 01-.57.21.81.81 0 01-.58-.21.71.71 0 01-.21-.53zm1.5 6.65h-1.42v-5.28h1.42zM899.13 831.84a.92.92 0 00.63-.21.74.74 0 00.25-.57h1.33a1.79 1.79 0 01-.3 1 2 2 0 01-.78.7 2.57 2.57 0 01-1.11.24 2.3 2.3 0 01-1.79-.72 2.87 2.87 0 01-.65-2v-.09a2.8 2.8 0 01.65-1.95 2.27 2.27 0 011.78-.73 2.21 2.21 0 011.59.57 2 2 0 01.61 1.5H900a.94.94 0 00-.25-.67.85.85 0 00-.64-.26.86.86 0 00-.75.36 2.07 2.07 0 00-.25 1.17v.14a2.09 2.09 0 00.25 1.18.88.88 0 00.77.34zM905.11 828.92h-.51a1 1 0 00-1.05.55v3.45h-1.41v-5.32h1.34v.63a1.31 1.31 0 011.17-.73 1.23 1.23 0 01.44.07zM905.4 830.19a3.16 3.16 0 01.3-1.4 2.17 2.17 0 01.87-.95 2.59 2.59 0 011.32-.34 2.41 2.41 0 011.75.66 2.6 2.6 0 01.75 1.77v.37a2.77 2.77 0 01-.68 2 2.63 2.63 0 01-3.64 0 2.78 2.78 0 01-.68-2zm1.41.1a2 2 0 00.28 1.16 1 1 0 001.61 0 2.17 2.17 0 00.29-1.26 2 2 0 00-.29-1.14 1 1 0 00-1.61 0 2.2 2.2 0 00-.28 1.24zM914.13 831.42a.45.45 0 00-.26-.4 2.87 2.87 0 00-.82-.27c-1.26-.26-1.88-.8-1.88-1.6a1.46 1.46 0 01.58-1.18 2.39 2.39 0 011.53-.47 2.48 2.48 0 011.6.48 1.46 1.46 0 01.61 1.23h-1.41a.67.67 0 00-.2-.5 1 1 0 00-1.16 0 .51.51 0 00-.2.41.44.44 0 00.23.38 2.28 2.28 0 00.75.25 7.31 7.31 0 01.88.23 1.47 1.47 0 011.12 1.43 1.34 1.34 0 01-.62 1.16 2.64 2.64 0 01-1.6.45 3 3 0 01-1.18-.23 2 2 0 01-.81-.66 1.53 1.53 0 01-.29-.89h1.34a.7.7 0 00.28.58 1.11 1.11 0 00.69.2 1 1 0 00.61-.15.49.49 0 00.21-.45zM916.19 830.19a3.16 3.16 0 01.3-1.4 2.25 2.25 0 01.88-.95 2.57 2.57 0 011.32-.34 2.38 2.38 0 011.74.66 2.66 2.66 0 01.76 1.77v.37a2.77 2.77 0 01-.68 2 2.65 2.65 0 01-3.65 0 2.82 2.82 0 01-.68-2zm1.41.1a2 2 0 00.29 1.16.92.92 0 00.81.39 1 1 0 00.8-.39 2.17 2.17 0 00.29-1.26 2 2 0 00-.29-1.14 1 1 0 00-.81-.41.92.92 0 00-.8.4 2.2 2.2 0 00-.29 1.25zM922.45 832.88v-4.24h-.78v-1h.78v-.45a1.83 1.83 0 01.51-1.38 2 2 0 011.43-.49 3.14 3.14 0 01.72.1v1.08a1.74 1.74 0 00-.43 0c-.53 0-.79.25-.79.75v.43h1v1h-1v4.24zM927.34 826.3v1.3h.9v1h-.9v2.63a.64.64 0 00.11.42.55.55 0 00.43.13 2.67 2.67 0 00.42 0v1.06a2.8 2.8 0 01-.86.13 1.35 1.35 0 01-1.51-1.5v-2.84h-.77v-1h.77v-1.3zM935.3 831a.75.75 0 00-.3-.64 3.79 3.79 0 00-1-.47 7.22 7.22 0 01-1.21-.48 2 2 0 01-1.21-1.77 1.68 1.68 0 01.33-1 2 2 0 01.93-.71 3.52 3.52 0 011.37-.25 3.22 3.22 0 011.35.27 2.24 2.24 0 01.93.78 2.05 2.05 0 01.33 1.14h-1.52a1 1 0 00-.3-.76 1.29 1.29 0 00-.87-.27 1.32 1.32 0 00-.83.23.71.71 0 00-.3.6.68.68 0 00.35.58 3.8 3.8 0 001 .44 4.46 4.46 0 011.82.93 1.87 1.87 0 01.57 1.39 1.71 1.71 0 01-.7 1.45 3.06 3.06 0 01-1.88.52 3.57 3.57 0 01-1.49-.3 2.31 2.31 0 01-1-.82 2.08 2.08 0 01-.36-1.21h1.47q0 1.17 1.41 1.17a1.35 1.35 0 00.81-.21.68.68 0 00.3-.61zM943.59 829.49a4.38 4.38 0 01-.32 1.73 3.07 3.07 0 01-.9 1.18l1.18.93-.93.82-1.51-1.21a3.12 3.12 0 01-.54 0 3 3 0 01-1.58-.42 2.83 2.83 0 01-1.07-1.22 4.3 4.3 0 01-.39-1.81v-.35a4.3 4.3 0 01.38-1.85 2.93 2.93 0 011.09-1.19 3.18 3.18 0 013.16 0 2.86 2.86 0 011.07 1.23 4.29 4.29 0 01.38 1.84zm-1.49-.32a3 3 0 00-.4-1.7 1.28 1.28 0 00-1.14-.58 1.32 1.32 0 00-1.14.57 3 3 0 00-.4 1.68v.35a3 3 0 00.4 1.69 1.3 1.3 0 001.15.6 1.27 1.27 0 001.13-.58 2.93 2.93 0 00.4-1.69zM946.13 831.71h3.11v1.17h-4.58v-7.11h1.47zM956.25 831a.74.74 0 00-.29-.64 3.79 3.79 0 00-1.05-.47 7.22 7.22 0 01-1.21-.48 2 2 0 01-1.21-1.77 1.74 1.74 0 01.32-1 2.08 2.08 0 01.94-.71 3.47 3.47 0 011.36-.25 3.27 3.27 0 011.36.27 2.15 2.15 0 01.92.78 2 2 0 01.33 1.14h-1.46a1 1 0 00-.31-.76 1.25 1.25 0 00-.86-.27 1.38 1.38 0 00-.84.23.7.7 0 00-.29.6.69.69 0 00.34.58 4.1 4.1 0 001 .44 4.39 4.39 0 011.82.93 1.87 1.87 0 01.57 1.39 1.73 1.73 0 01-.69 1.45 3.08 3.08 0 01-1.88.52 3.65 3.65 0 01-1.5-.3 2.28 2.28 0 01-1-.82 2.08 2.08 0 01-.36-1.21h1.47q0 1.17 1.41 1.17a1.35 1.35 0 00.81-.21.67.67 0 00.3-.61zM961.05 833a2.62 2.62 0 01-1.89-.71 2.57 2.57 0 01-.73-1.9v-.14a3.25 3.25 0 01.31-1.42 2.35 2.35 0 01.87-1 2.53 2.53 0 011.29-.34 2.16 2.16 0 011.7.69 2.75 2.75 0 01.63 1.94v.57h-3.37a1.33 1.33 0 00.42.83 1.22 1.22 0 00.87.31 1.5 1.5 0 001.27-.59l.7.78a2.2 2.2 0 01-.86.7 2.85 2.85 0 01-1.21.28zm-.16-4.34a.92.92 0 00-.68.28 1.58 1.58 0 00-.33.82h2v-.11a1.07 1.07 0 00-.25-.73.94.94 0 00-.74-.28zM967 828.92h-.51a1 1 0 00-1 .55v3.45H964v-5.32h1.33v.63a1.32 1.32 0 011.18-.73 1.31 1.31 0 01.44.07zM969.74 831.16l1-3.56h1.48l-1.78 5.28h-1.35l-1.78-5.28h1.47zM975.19 833a2.63 2.63 0 01-1.9-.71 2.57 2.57 0 01-.73-1.9v-.14a3.25 3.25 0 01.31-1.42 2.35 2.35 0 01.87-1 2.53 2.53 0 011.29-.34 2.2 2.2 0 011.71.69 2.79 2.79 0 01.62 1.94v.57H974a1.33 1.33 0 00.42.83 1.24 1.24 0 00.87.31 1.5 1.5 0 001.27-.59l.7.78a2.2 2.2 0 01-.86.7 2.77 2.77 0 01-1.21.28zm-.17-4.34a.92.92 0 00-.68.28 1.58 1.58 0 00-.33.82h2v-.11a1.07 1.07 0 00-.25-.73.94.94 0 00-.76-.28zM981.13 828.92h-.51a1 1 0 00-1 .55v3.45h-1.41v-5.32h1.33v.63a1.32 1.32 0 011.18-.73 1.31 1.31 0 01.44.07zM987.36 832.88a1.38 1.38 0 01-.14-.47 1.72 1.72 0 01-1.34.57 1.87 1.87 0 01-1.28-.45 1.43 1.43 0 01-.51-1.13 1.48 1.48 0 01.62-1.29 3 3 0 011.8-.45h.65v-.31a.83.83 0 00-.19-.58.73.73 0 00-.59-.22.8.8 0 00-.56.17.56.56 0 00-.2.47h-1.42a1.41 1.41 0 01.29-.85 1.79 1.79 0 01.8-.61 2.86 2.86 0 011.16-.23 2.34 2.34 0 011.55.5 1.73 1.73 0 01.57 1.38v2.29a2.75 2.75 0 00.21 1.14v.08zm-1.17-1a1.16 1.16 0 00.58-.14.93.93 0 00.39-.37v-.91h-.53c-.71 0-1.08.25-1.13.73v.09a.57.57 0 00.18.43.72.72 0 00.51.19zM991 827.6v.61a1.85 1.85 0 011.52-.71 1.53 1.53 0 011.25.5 2.34 2.34 0 01.42 1.47v3.41h-1.41v-3.38a1 1 0 00-.2-.66.89.89 0 00-.65-.2 1 1 0 00-.89.51v3.73h-1.41v-5.28zM995 830.2a3.15 3.15 0 01.55-2 1.81 1.81 0 011.52-.74 1.62 1.62 0 011.27.58v-2.7h1.42v7.5h-1.27l-.07-.56a1.67 1.67 0 01-1.36.66 1.8 1.8 0 01-1.5-.73 3.33 3.33 0 01-.56-2.01zm1.41.1a2.15 2.15 0 00.26 1.15.84.84 0 00.75.39.92.92 0 00.92-.55v-2.09a.93.93 0 00-.91-.56c-.64 0-.98.56-.98 1.66zM887.92 837.77l1.82 5.16 1.82-5.16h1.92v7.11H892v-1.94l.15-3.35-1.92 5.29h-1l-1.91-5.29.15 3.35v1.94H886v-7.11zM894.66 838.23a.7.7 0 01.21-.52.79.79 0 01.58-.2.8.8 0 01.58.2.7.7 0 01.21.52.68.68 0 01-.22.53.88.88 0 01-1.14 0 .68.68 0 01-.22-.53zm1.5 6.65h-1.42v-5.28h1.42zM899.52 843.84a.92.92 0 00.63-.21.78.78 0 00.26-.57h1.32a1.87 1.87 0 01-.29 1 2.06 2.06 0 01-.79.7 2.57 2.57 0 01-1.11.24 2.31 2.31 0 01-1.79-.72 2.87 2.87 0 01-.65-2v-.09a2.85 2.85 0 01.65-1.95 2.28 2.28 0 011.78-.73 2.21 2.21 0 011.59.57 2 2 0 01.61 1.5h-1.32a1 1 0 00-.26-.67.85.85 0 00-.64-.26.86.86 0 00-.75.36 2.07 2.07 0 00-.25 1.17v.14a2.09 2.09 0 00.25 1.18.88.88 0 00.76.34zM905.5 840.92h-.5a1 1 0 00-1 .55v3.45h-1.42v-5.32h1.34v.63a1.31 1.31 0 011.17-.73 1.23 1.23 0 01.44.07zM905.79 842.19a3.16 3.16 0 01.3-1.4 2.17 2.17 0 01.87-.95 2.59 2.59 0 011.32-.34 2.41 2.41 0 011.75.66 2.6 2.6 0 01.75 1.77v.37a2.77 2.77 0 01-.68 2 2.63 2.63 0 01-3.64 0 2.78 2.78 0 01-.68-2zm1.41.1a2 2 0 00.28 1.16 1 1 0 001.61 0 2.17 2.17 0 00.29-1.26 2 2 0 00-.29-1.14.94.94 0 00-.81-.41 1 1 0 00-.8.4 2.2 2.2 0 00-.28 1.25zM914.52 843.42a.44.44 0 00-.26-.4 2.87 2.87 0 00-.82-.27c-1.25-.26-1.88-.8-1.88-1.6a1.46 1.46 0 01.58-1.18 2.39 2.39 0 011.53-.47 2.53 2.53 0 011.61.48 1.48 1.48 0 01.6 1.23h-1.41a.67.67 0 00-.2-.5 1 1 0 00-1.16 0 .5.5 0 00-.19.41.43.43 0 00.22.38 2.47 2.47 0 00.75.25 8.08 8.08 0 01.89.23 1.47 1.47 0 011.11 1.43 1.34 1.34 0 01-.62 1.16 2.64 2.64 0 01-1.6.45 3 3 0 01-1.18-.23 2 2 0 01-.81-.66 1.53 1.53 0 01-.29-.89h1.34a.7.7 0 00.28.58 1.11 1.11 0 00.69.2 1 1 0 00.61-.15.49.49 0 00.21-.45zM916.58 842.19a3.16 3.16 0 01.3-1.4 2.25 2.25 0 01.88-.95 2.59 2.59 0 011.32-.34 2.38 2.38 0 011.74.66 2.66 2.66 0 01.76 1.77v.37a2.77 2.77 0 01-.68 2 2.35 2.35 0 01-1.82.73 2.39 2.39 0 01-1.83-.73 2.82 2.82 0 01-.68-2zm1.41.1a2 2 0 00.29 1.16 1 1 0 001.61 0 2.17 2.17 0 00.29-1.26 2 2 0 00-.29-1.14 1 1 0 00-.81-.41.92.92 0 00-.8.4 2.2 2.2 0 00-.28 1.25zM922.84 844.88v-4.24h-.78v-1h.78v-.45a1.83 1.83 0 01.51-1.38 2 2 0 011.43-.49 3.07 3.07 0 01.72.1v1.08a1.74 1.74 0 00-.43 0c-.53 0-.79.25-.79.75v.43h1v1h-1v4.24zM927.73 838.3v1.3h.9v1h-.9v2.63a.64.64 0 00.11.42.55.55 0 00.43.13 2.58 2.58 0 00.42 0v1.06a2.76 2.76 0 01-.86.13 1.35 1.35 0 01-1.51-1.5v-2.84h-.77v-1h.77v-1.3zM936.28 841.79h-2.81v1.92h3.3v1.17H932v-7.11h4.76V839h-3.29v1.7h2.81zM939.55 841.18l.88-1.58h1.51l-1.5 2.59 1.57 2.69h-1.52l-.94-1.66-.94 1.66h-1.52l1.57-2.69-1.5-2.59h1.52zM944.72 843.84a1 1 0 00.64-.21.78.78 0 00.25-.57h1.32a1.79 1.79 0 01-.29 1 1.92 1.92 0 01-.79.7 2.5 2.5 0 01-1.1.24 2.3 2.3 0 01-1.79-.72 2.83 2.83 0 01-.66-2v-.09a2.85 2.85 0 01.65-1.95 2.31 2.31 0 011.79-.73 2.21 2.21 0 011.59.57 2 2 0 01.6 1.5h-1.32a1 1 0 00-.25-.67.87.87 0 00-.65-.26.83.83 0 00-.74.36 2.07 2.07 0 00-.25 1.17v.14a2.19 2.19 0 00.24 1.18.88.88 0 00.76.34zM950.8 844.88a1.64 1.64 0 01-.14-.47 1.71 1.71 0 01-1.33.57 1.88 1.88 0 01-1.29-.45 1.43 1.43 0 01-.51-1.13 1.51 1.51 0 01.62-1.29 3.07 3.07 0 011.8-.45h.65v-.31a.83.83 0 00-.19-.58.71.71 0 00-.59-.22.82.82 0 00-.56.17.59.59 0 00-.2.47h-1.41a1.4 1.4 0 01.28-.85 1.84 1.84 0 01.8-.61 2.89 2.89 0 011.16-.23 2.34 2.34 0 011.55.49 1.71 1.71 0 01.58 1.38v2.29a2.46 2.46 0 00.21 1.14v.08zm-1.17-1a1.16 1.16 0 00.58-.14.83.83 0 00.39-.37v-.91h-.53c-.7 0-1.08.25-1.12.73v.09a.54.54 0 00.19.43.68.68 0 00.49.19zM954.48 840.18a1.75 1.75 0 011.41-.68c1.14 0 1.73.67 1.74 2v3.38h-1.41v-3.35a1 1 0 00-.19-.67.82.82 0 00-.65-.22 1 1 0 00-.9.48v3.76h-1.41v-7.5h1.41zM960 839.6v.61a1.85 1.85 0 011.52-.71 1.54 1.54 0 011.25.5 2.34 2.34 0 01.42 1.47v3.41h-1.41v-3.38a1 1 0 00-.2-.66.9.9 0 00-.65-.2 1 1 0 00-.89.51v3.73h-1.41v-5.28zM964.09 842.2a3 3 0 01.58-2 1.88 1.88 0 011.56-.75 1.63 1.63 0 011.35.6l.06-.5h1.28v5.11a2.23 2.23 0 01-.31 1.2 2 2 0 01-.89.79 3.27 3.27 0 01-1.34.26 2.79 2.79 0 01-1.13-.23 1.94 1.94 0 01-.84-.6l.63-.86a1.64 1.64 0 001.28.6 1.26 1.26 0 00.87-.3 1.15 1.15 0 00.31-.86v-.28a1.61 1.61 0 01-1.28.55 1.89 1.89 0 01-1.54-.74 3.13 3.13 0 01-.59-2zm1.41.1a2 2 0 00.29 1.13.9.9 0 00.79.41 1 1 0 00.92-.48v-2.23a1 1 0 00-.91-.49.93.93 0 00-.8.42 2.2 2.2 0 00-.29 1.24zM972.44 845a2.63 2.63 0 01-1.9-.71 2.57 2.57 0 01-.73-1.9v-.14a3.25 3.25 0 01.31-1.42 2.35 2.35 0 01.87-1 2.53 2.53 0 011.29-.34 2.2 2.2 0 011.71.69 2.79 2.79 0 01.62 1.94v.57h-3.36a1.27 1.27 0 00.41.83 1.24 1.24 0 00.87.31 1.5 1.5 0 001.27-.59l.7.78a2.13 2.13 0 01-.86.7 2.77 2.77 0 01-1.2.28zm-.16-4.34a.94.94 0 00-.69.28 1.58 1.58 0 00-.33.82h2v-.11a1 1 0 00-.25-.73.9.9 0 00-.73-.28zM980.1 843.84a.92.92 0 00.63-.21.75.75 0 00.26-.57h1.32a1.79 1.79 0 01-.29 1 2.06 2.06 0 01-.79.7 2.54 2.54 0 01-1.11.24 2.31 2.31 0 01-1.79-.72 2.87 2.87 0 01-.65-2v-.09a2.85 2.85 0 01.65-1.95 2.28 2.28 0 011.78-.73 2.21 2.21 0 011.59.57 2 2 0 01.61 1.5H981a.94.94 0 00-.26-.67.85.85 0 00-.64-.26.86.86 0 00-.75.36 2.16 2.16 0 00-.25 1.17v.14a2.09 2.09 0 00.25 1.18.88.88 0 00.75.34zM984.6 844.88h-1.41v-7.5h1.41zM988.93 844.35a1.77 1.77 0 01-1.44.63 1.66 1.66 0 01-1.3-.49 2.08 2.08 0 01-.46-1.43v-3.46h1.41v3.4c0 .55.25.82.76.82a1 1 0 001-.5v-3.72h1.42v5.28H989zM994.22 843.42a.44.44 0 00-.25-.4 3 3 0 00-.83-.27c-1.25-.26-1.88-.8-1.88-1.6a1.46 1.46 0 01.58-1.18 2.39 2.39 0 011.53-.47 2.51 2.51 0 011.63.5 1.48 1.48 0 01.6 1.23h-1.41a.67.67 0 00-.2-.5.83.83 0 00-.61-.2.84.84 0 00-.55.16.5.5 0 00-.19.41.43.43 0 00.22.38 2.47 2.47 0 00.75.25 7.52 7.52 0 01.89.23 1.48 1.48 0 011.12 1.43 1.36 1.36 0 01-.62 1.16 2.69 2.69 0 01-1.61.45 2.87 2.87 0 01-1.17-.23 1.91 1.91 0 01-.81-.66 1.47 1.47 0 01-.3-.89h1.34a.72.72 0 00.28.58 1.11 1.11 0 00.69.2 1.07 1.07 0 00.62-.15.51.51 0 00.18-.43zM998.19 838.3v1.3h.91v1h-.91v2.63a.59.59 0 00.12.42c.07.09.21.13.43.13a2.54 2.54 0 00.41 0v1.06a2.74 2.74 0 01-.85.13 1.35 1.35 0 01-1.52-1.5v-2.84H996v-1h.77v-1.3zM1002.31 845a2.62 2.62 0 01-1.89-.71 2.57 2.57 0 01-.73-1.9v-.14a3.12 3.12 0 01.31-1.42 2.35 2.35 0 01.87-1 2.53 2.53 0 011.29-.34 2.16 2.16 0 011.7.69 2.75 2.75 0 01.63 1.94v.57h-3.37a1.33 1.33 0 00.42.83 1.22 1.22 0 00.87.31 1.5 1.5 0 001.27-.59l.7.78a2.2 2.2 0 01-.86.7 2.85 2.85 0 01-1.21.28zm-.16-4.34a.92.92 0 00-.68.28 1.58 1.58 0 00-.33.82h2v-.11a1.07 1.07 0 00-.25-.73.94.94 0 00-.74-.28zM1008.26 840.92h-.51a1 1 0 00-1 .55v3.45h-1.41v-5.32h1.33v.63a1.32 1.32 0 011.18-.73 1.31 1.31 0 01.44.07zM1011.8 843.42a.45.45 0 00-.26-.4 2.87 2.87 0 00-.82-.27c-1.26-.26-1.89-.8-1.89-1.6a1.47 1.47 0 01.59-1.18 2.36 2.36 0 011.52-.47 2.51 2.51 0 011.61.48 1.48 1.48 0 01.6 1.23h-1.41a.66.66 0 00-.19-.5.84.84 0 00-.61-.2.82.82 0 00-.55.16.51.51 0 00-.2.41.43.43 0 00.22.38 2.47 2.47 0 00.75.25 7.52 7.52 0 01.89.23 1.47 1.47 0 011.12 1.43 1.36 1.36 0 01-.62 1.16 2.66 2.66 0 01-1.6.45 2.89 2.89 0 01-1.18-.23 2 2 0 01-.81-.66 1.46 1.46 0 01-.29-.89h1.33a.76.76 0 00.28.58 1.16 1.16 0 00.7.2 1 1 0 00.61-.15.49.49 0 00.21-.41zM879.55 853.14a1.07 1.07 0 01.32-.81 1.14 1.14 0 01.83-.31 1.17 1.17 0 01.84.3 1.12 1.12 0 01.33.8v.21a1.1 1.1 0 01-.32.81 1.31 1.31 0 01-1.67 0 1.07 1.07 0 01-.33-.83zM891.45 853.49a4.26 4.26 0 01-.37 1.84 2.76 2.76 0 01-1.06 1.22 2.91 2.91 0 01-1.59.43 3 3 0 01-1.57-.42 2.86 2.86 0 01-1.08-1.22 4.15 4.15 0 01-.38-1.81v-.35a4.3 4.3 0 01.37-1.85 2.93 2.93 0 011.07-1.23 3.18 3.18 0 013.16 0 2.86 2.86 0 011.07 1.23 4.29 4.29 0 01.38 1.84zm-1.48-.32a3 3 0 00-.4-1.7 1.31 1.31 0 00-1.15-.58 1.29 1.29 0 00-1.13.57 2.89 2.89 0 00-.41 1.68v.35a3 3 0 00.4 1.69 1.41 1.41 0 002.29 0 3.1 3.1 0 00.4-1.69zM895.39 852.92h-.51a1 1 0 00-1 .55v3.45h-1.41v-5.32h1.33v.63a1.33 1.33 0 011.18-.73 1.27 1.27 0 01.44.07zM899 856.88a1.64 1.64 0 01-.14-.47 1.7 1.7 0 01-1.33.57 1.88 1.88 0 01-1.29-.45 1.43 1.43 0 01-.51-1.13 1.51 1.51 0 01.62-1.29 3.07 3.07 0 011.8-.45h.65v-.31a.87.87 0 00-.18-.58.75.75 0 00-.6-.22.82.82 0 00-.56.17.59.59 0 00-.2.47h-1.41a1.4 1.4 0 01.28-.85 1.84 1.84 0 01.8-.61 2.94 2.94 0 011.17-.23 2.36 2.36 0 011.55.49 1.73 1.73 0 01.57 1.38v2.29a2.46 2.46 0 00.21 1.14v.08zm-1.16-1a1.1 1.1 0 00.57-.14.83.83 0 00.39-.37v-.91h-.52c-.71 0-1.09.25-1.13.73v.09a.57.57 0 00.19.43.69.69 0 00.48.19zM903.48 855.84a1 1 0 00.64-.21.78.78 0 00.25-.57h1.32a1.79 1.79 0 01-.29 1 1.92 1.92 0 01-.79.7 2.5 2.5 0 01-1.1.24 2.28 2.28 0 01-1.79-.72 2.83 2.83 0 01-.66-2v-.09a2.85 2.85 0 01.65-1.95 2.31 2.31 0 011.79-.73 2.17 2.17 0 011.58.57 2 2 0 01.61 1.5h-1.32a1 1 0 00-.25-.67.87.87 0 00-.65-.26.83.83 0 00-.74.36 2.07 2.07 0 00-.25 1.17v.14a2.19 2.19 0 00.24 1.18.88.88 0 00.76.34zM908 856.88h-1.42v-7.5H908zM911.58 857a2.62 2.62 0 01-1.89-.71 2.53 2.53 0 01-.73-1.9v-.14a3.12 3.12 0 01.31-1.42 2.22 2.22 0 01.87-1 2.48 2.48 0 011.29-.34 2.16 2.16 0 011.7.69 2.74 2.74 0 01.62 1.94v.57h-3.36a1.32 1.32 0 00.41.83 1.24 1.24 0 00.87.31 1.51 1.51 0 001.28-.59l.69.78a2.13 2.13 0 01-.86.7 2.77 2.77 0 01-1.2.28zm-.16-4.34a.9.9 0 00-.68.28 1.5 1.5 0 00-.33.82h2v-.11a1 1 0 00-.26-.73.9.9 0 00-.73-.28zM917.14 856.88v-7.11h2.19a3.32 3.32 0 011.67.43 2.92 2.92 0 011.16 1.2 3.79 3.79 0 01.41 1.77v.33a3.74 3.74 0 01-.4 1.76 3 3 0 01-1.15 1.19 3.28 3.28 0 01-1.68.43zm1.46-5.88v4.75h.71a1.63 1.63 0 001.32-.56 2.59 2.59 0 00.46-1.61v-.38a2.56 2.56 0 00-.45-1.64 1.6 1.6 0 00-1.31-.56zM923.64 856.88v-7.11h2.49a3.28 3.28 0 012 .5 1.68 1.68 0 01.67 1.45 1.57 1.57 0 01-1 1.51 1.48 1.48 0 01.87.55 1.6 1.6 0 01.31 1 1.9 1.9 0 01-.65 1.56 2.93 2.93 0 01-1.87.53zm1.46-4.13h1.09c.73 0 1.1-.3 1.1-.88a.83.83 0 00-.28-.7 1.46 1.46 0 00-.88-.21h-1zm0 1v1.92h1.26a1.21 1.21 0 00.81-.25.85.85 0 00.29-.68.89.89 0 00-1-1zM879.55 865.14a1.07 1.07 0 01.32-.81 1.14 1.14 0 01.83-.31 1.17 1.17 0 01.84.3 1.12 1.12 0 01.33.8v.21a1.1 1.1 0 01-.32.81 1.31 1.31 0 01-1.67 0 1.07 1.07 0 01-.33-.83zM889.3 867a.75.75 0 00-.3-.64 3.79 3.79 0 00-1-.47 7.22 7.22 0 01-1.21-.48 2 2 0 01-1.21-1.77 1.68 1.68 0 01.33-1 2 2 0 01.93-.71 3.47 3.47 0 011.36-.25 3.27 3.27 0 011.36.27 2.24 2.24 0 01.93.78 2.05 2.05 0 01.33 1.14h-1.52a1 1 0 00-.31-.76 1.25 1.25 0 00-.86-.27 1.38 1.38 0 00-.84.23.73.73 0 00-.29.6.68.68 0 00.35.58 3.85 3.85 0 001 .44 4.51 4.51 0 011.83.93 1.87 1.87 0 01.57 1.39 1.74 1.74 0 01-.7 1.45 3.06 3.06 0 01-1.88.52 3.65 3.65 0 01-1.5-.3 2.34 2.34 0 01-1-.82 2.08 2.08 0 01-.36-1.21h1.47q0 1.17 1.41 1.17a1.35 1.35 0 00.81-.21.68.68 0 00.3-.61zM895.77 867.42h-2.57l-.49 1.46h-1.55l2.64-7.11h1.36l2.66 7.11h-1.56zm-2.17-1.19h1.78l-.9-2.66zM900 866.38v2.5h-1.46v-7.11h2.77a3.18 3.18 0 011.41.3 2.15 2.15 0 01.93.83 2.31 2.31 0 01.33 1.23 2.06 2.06 0 01-.72 1.65 3 3 0 01-2 .6zm0-1.19h1.31a1.32 1.32 0 00.89-.27 1 1 0 00.3-.78 1.17 1.17 0 00-.31-.85 1.16 1.16 0 00-.85-.33H900zM913.21 868.88h-1.46v-3h-2.86v3h-1.46v-7.11h1.46v2.89h2.86v-2.89h1.46zM918.59 867.42H916l-.49 1.46H914l2.65-7.11H918l2.66 7.11h-1.55zm-2.17-1.19h1.78l-.9-2.66zM927.09 868.88h-1.46l-2.86-4.67v4.67h-1.46v-7.11h1.46l2.86 4.69v-4.69h1.46zM932.47 867.42h-2.57l-.49 1.46h-1.55l2.64-7.11h1.36l2.66 7.11H933zm-2.17-1.19h1.78l-.9-2.66zM879.55 877.14a1.07 1.07 0 01.32-.81 1.14 1.14 0 01.83-.31 1.17 1.17 0 01.84.3 1.12 1.12 0 01.33.8v.21a1.1 1.1 0 01-.32.81 1.31 1.31 0 01-1.67 0 1.07 1.07 0 01-.33-.83zM885.61 880.88v-7.11h2.19a3.32 3.32 0 011.67.43 2.92 2.92 0 011.16 1.2 3.67 3.67 0 01.41 1.77v.33a3.74 3.74 0 01-.4 1.76 2.93 2.93 0 01-1.15 1.19 3.28 3.28 0 01-1.68.43zm1.47-5.92v4.75h.7a1.62 1.62 0 001.32-.56 2.59 2.59 0 00.46-1.61v-.38a2.56 2.56 0 00-.45-1.64 1.6 1.6 0 00-1.31-.56zM895.08 880.88a1.38 1.38 0 01-.14-.47 1.73 1.73 0 01-1.34.57 1.87 1.87 0 01-1.28-.45 1.43 1.43 0 01-.51-1.13 1.48 1.48 0 01.62-1.29 3 3 0 011.8-.45h.65v-.31a.83.83 0 00-.19-.58.73.73 0 00-.59-.22.8.8 0 00-.56.17.57.57 0 00-.21.47h-1.41a1.41 1.41 0 01.29-.85 1.79 1.79 0 01.8-.61 2.86 2.86 0 011.16-.23 2.34 2.34 0 011.55.49 1.73 1.73 0 01.57 1.38v2.29a2.75 2.75 0 00.21 1.14v.08zm-1.17-1a1.16 1.16 0 00.58-.14.93.93 0 00.39-.37v-.91h-.53c-.71 0-1.08.25-1.13.73v.09a.57.57 0 00.18.43.72.72 0 00.51.19zM899.07 874.3v1.3h.9v1h-.9v2.63a.59.59 0 00.11.42.54.54 0 00.43.13 2.46 2.46 0 00.41 0v1.06a2.7 2.7 0 01-.85.13 1.35 1.35 0 01-1.51-1.5v-2.84h-.78v-1h.78v-1.3zM903.82 880.88a1.38 1.38 0 01-.14-.47 1.73 1.73 0 01-1.34.57 1.87 1.87 0 01-1.28-.45 1.43 1.43 0 01-.51-1.13 1.48 1.48 0 01.62-1.29 3 3 0 011.8-.45h.65v-.31a.83.83 0 00-.19-.58.73.73 0 00-.59-.22.8.8 0 00-.56.17.56.56 0 00-.2.47h-1.42a1.41 1.41 0 01.29-.85 1.79 1.79 0 01.8-.61 2.86 2.86 0 011.16-.23 2.34 2.34 0 011.55.49 1.73 1.73 0 01.57 1.38v2.29a2.75 2.75 0 00.21 1.14v.08zm-1.17-1a1.16 1.16 0 00.58-.14.93.93 0 00.39-.37v-.91h-.53c-.71 0-1.08.25-1.13.73v.09a.57.57 0 00.18.43.72.72 0 00.51.19zM910.17 878.38v2.5h-1.47v-7.11h2.77a3.12 3.12 0 011.41.3 2.12 2.12 0 01.94.83 2.31 2.31 0 01.33 1.23 2.06 2.06 0 01-.72 1.65 3 3 0 01-2 .6zm0-1.19h1.3a1.3 1.3 0 00.89-.27 1 1 0 00.31-.78 1.22 1.22 0 00-.31-.85 1.19 1.19 0 00-.85-.33h-1.34zM918 876.92h-.51a1 1 0 00-1 .55v3.45h-1.41v-5.32h1.33v.63a1.32 1.32 0 011.18-.73 1.31 1.31 0 01.44.07zM918.31 878.19a3.16 3.16 0 01.3-1.4 2.23 2.23 0 01.87-.95 2.6 2.6 0 011.33-.34 2.38 2.38 0 011.74.66 2.66 2.66 0 01.76 1.77v.37a2.77 2.77 0 01-.68 2 2.65 2.65 0 01-3.65 0 2.82 2.82 0 01-.68-2zm1.41.1a2.07 2.07 0 00.28 1.16 1 1 0 001.62 0 2.17 2.17 0 00.28-1.26 2 2 0 00-.28-1.14 1 1 0 00-1.62 0 2.29 2.29 0 00-.28 1.24zM925.87 874.3v1.3h.91v1h-.91v2.63a.59.59 0 00.12.42c.07.09.21.13.43.13a2.54 2.54 0 00.41 0v1.06a2.74 2.74 0 01-.85.13 1.35 1.35 0 01-1.52-1.5v-2.84h-.77v-1h.77v-1.3zM930 881a2.63 2.63 0 01-1.9-.71 2.57 2.57 0 01-.73-1.9v-.14a3.25 3.25 0 01.31-1.42 2.35 2.35 0 01.87-1 2.53 2.53 0 011.29-.34 2.16 2.16 0 011.7.69 2.75 2.75 0 01.63 1.94v.57h-3.37a1.33 1.33 0 00.42.83 1.24 1.24 0 00.87.31 1.5 1.5 0 001.27-.59l.7.78a2.2 2.2 0 01-.86.7 2.84 2.84 0 01-1.2.28zm-.17-4.34a.92.92 0 00-.68.28 1.58 1.58 0 00-.33.82h2v-.11a1.07 1.07 0 00-.25-.73.94.94 0 00-.74-.28zM935.17 879.84a.92.92 0 00.63-.21.74.74 0 00.25-.57h1.33a1.72 1.72 0 01-.3 1 2 2 0 01-.78.7 2.57 2.57 0 01-1.11.24 2.31 2.31 0 01-1.79-.72 2.87 2.87 0 01-.65-2v-.09a2.8 2.8 0 01.65-1.95 2.28 2.28 0 011.78-.73 2.21 2.21 0 011.59.57 2 2 0 01.61 1.5h-1.33a.94.94 0 00-.25-.67.85.85 0 00-.64-.26.86.86 0 00-.75.36 2.07 2.07 0 00-.25 1.17v.14a2.09 2.09 0 00.25 1.18.88.88 0 00.76.34zM939.87 874.3v1.3h.91v1h-.91v2.63a.59.59 0 00.12.42c.07.09.21.13.43.13a2.54 2.54 0 00.41 0v1.06a2.74 2.74 0 01-.85.13 1.35 1.35 0 01-1.52-1.5v-2.84h-.77v-1h.77v-1.3zM941.55 874.23a.7.7 0 01.21-.52.8.8 0 01.58-.2.79.79 0 01.58.2.7.7 0 01.21.52.71.71 0 01-.21.53.89.89 0 01-1.15 0 .72.72 0 01-.22-.53zm1.5 6.65h-1.41v-5.28h1.41zM944 878.19a3 3 0 01.31-1.4 2.17 2.17 0 01.87-.95 2.59 2.59 0 011.32-.34 2.38 2.38 0 011.74.66 2.57 2.57 0 01.76 1.77v.37a2.77 2.77 0 01-.68 2 2.63 2.63 0 01-3.64 0 2.78 2.78 0 01-.69-2zm1.42.1a2 2 0 00.28 1.16 1 1 0 001.61 0 2.17 2.17 0 00.29-1.26 2 2 0 00-.29-1.14 1 1 0 00-1.61 0 2.2 2.2 0 00-.29 1.24zM951.17 875.6v.61a1.85 1.85 0 011.52-.71 1.53 1.53 0 011.25.5 2.34 2.34 0 01.42 1.47v3.41H953v-3.38a1 1 0 00-.2-.66.89.89 0 00-.65-.2 1 1 0 00-.89.51v3.73h-1.41v-5.28zM960 873.77l1.82 5.16 1.82-5.16h1.92v7.11h-1.47v-1.94l.15-3.35-1.92 5.29h-1l-1.91-5.29.15 3.35v1.94h-1.47v-7.11zM969.78 880.88a1.38 1.38 0 01-.14-.47 1.71 1.71 0 01-1.33.57 1.88 1.88 0 01-1.29-.45 1.43 1.43 0 01-.51-1.13 1.51 1.51 0 01.62-1.29 3.07 3.07 0 011.8-.45h.65v-.31a.83.83 0 00-.19-.58.71.71 0 00-.59-.22.82.82 0 00-.56.17.56.56 0 00-.2.47h-1.41a1.4 1.4 0 01.28-.85 1.84 1.84 0 01.8-.61 2.86 2.86 0 011.16-.23 2.34 2.34 0 011.55.49 1.74 1.74 0 01.58 1.38v2.29a2.46 2.46 0 00.21 1.14v.08zm-1.17-1a1.16 1.16 0 00.58-.14.83.83 0 00.39-.37v-.91h-.53c-.7 0-1.08.25-1.13.73v.09a.54.54 0 00.19.43.68.68 0 00.5.19zM976.84 878.29a3.19 3.19 0 01-.56 2 1.77 1.77 0 01-1.49.73 1.63 1.63 0 01-1.3-.56v2.5h-1.41v-7.36h1.31l.05.52a1.66 1.66 0 011.34-.62 1.76 1.76 0 011.51.73 3.18 3.18 0 01.55 2zm-1.42-.11a2 2 0 00-.26-1.14.83.83 0 00-.76-.4.92.92 0 00-.91.51v2.17a.93.93 0 00.92.52c.68 0 1.01-.55 1.01-1.66zM879.55 889.14a1.07 1.07 0 01.32-.81 1.14 1.14 0 01.83-.31 1.17 1.17 0 01.84.3 1.12 1.12 0 01.33.8v.21a1.1 1.1 0 01-.32.81 1.31 1.31 0 01-1.67 0 1.07 1.07 0 01-.33-.83zM891.19 890.52a2.49 2.49 0 01-.85 1.8 3 3 0 01-2 .66 2.68 2.68 0 01-2.15-.92 3.77 3.77 0 01-.78-2.53v-.43a4.3 4.3 0 01.36-1.81 2.7 2.7 0 011-1.2 3 3 0 011.56-.41 2.89 2.89 0 012 .66 2.71 2.71 0 01.87 1.85h-1.46a1.49 1.49 0 00-.39-1 1.39 1.39 0 00-1-.31 1.25 1.25 0 00-1.1.52 3 3 0 00-.37 1.63v.54a3.14 3.14 0 00.35 1.68 1.21 1.21 0 001.1.54 1.47 1.47 0 001-.31 1.42 1.42 0 00.39-1zM891.84 890.19a3.16 3.16 0 01.3-1.4 2.23 2.23 0 01.87-.95 2.6 2.6 0 011.33-.34 2.38 2.38 0 011.74.66 2.66 2.66 0 01.76 1.77v.37a2.77 2.77 0 01-.68 2 2.65 2.65 0 01-3.65 0 2.82 2.82 0 01-.68-2zm1.41.1a2 2 0 00.29 1.16.92.92 0 00.81.39 1 1 0 00.8-.39 2.17 2.17 0 00.28-1.26 2 2 0 00-.28-1.14 1 1 0 00-.81-.41.92.92 0 00-.8.4 2.2 2.2 0 00-.29 1.25zM899 887.6v.61a1.84 1.84 0 011.52-.71 1.54 1.54 0 011.25.5 2.34 2.34 0 01.42 1.47v3.41h-1.42v-3.38a1 1 0 00-.19-.66.9.9 0 00-.65-.2 1 1 0 00-.89.51v3.73h-1.41v-5.28zM905 886.3v1.3h.91v1H905v2.63a.59.59 0 00.12.42c.07.09.21.13.43.13a2.54 2.54 0 00.41 0v1.06a2.74 2.74 0 01-.85.13 1.35 1.35 0 01-1.52-1.5v-2.84h-.77v-1h.77v-1.3zM906.68 886.23a.67.67 0 01.22-.52.77.77 0 01.58-.2.76.76 0 01.57.2.74.74 0 010 1 .89.89 0 01-1.15 0 .72.72 0 01-.22-.48zm1.5 6.65h-1.41v-5.28h1.41zM910.64 887.6l.05.61a1.85 1.85 0 011.52-.71 1.54 1.54 0 011.25.5 2.34 2.34 0 01.42 1.47v3.41h-1.41v-3.38a1 1 0 00-.2-.66.9.9 0 00-.65-.2 1 1 0 00-.89.51v3.73h-1.41v-5.28zM918.11 892.35a1.77 1.77 0 01-1.44.63 1.66 1.66 0 01-1.3-.49 2.08 2.08 0 01-.46-1.43v-3.46h1.41v3.4c0 .55.25.82.76.82a1 1 0 001-.5v-3.72h1.42v5.28h-1.33zM920.32 890.19a3 3 0 01.31-1.4 2.17 2.17 0 01.87-.95 2.59 2.59 0 011.32-.34 2.38 2.38 0 011.74.66 2.66 2.66 0 01.76 1.77v.37a2.77 2.77 0 01-.68 2 2.35 2.35 0 01-1.82.73 2.39 2.39 0 01-1.83-.73 2.82 2.82 0 01-.68-2zm1.41.1a2 2 0 00.29 1.16 1 1 0 001.61 0 2.17 2.17 0 00.29-1.26 2 2 0 00-.29-1.14 1 1 0 00-1.61 0 2.2 2.2 0 00-.29 1.24zM929.36 892.35a1.77 1.77 0 01-1.44.63 1.66 1.66 0 01-1.3-.49 2.08 2.08 0 01-.46-1.43v-3.46h1.41v3.4c0 .55.25.82.76.82a1 1 0 001-.5v-3.72h1.42v5.28h-1.35zM934.65 891.42a.44.44 0 00-.25-.4 3 3 0 00-.83-.27c-1.25-.26-1.88-.8-1.88-1.6a1.46 1.46 0 01.58-1.18 2.39 2.39 0 011.53-.47 2.51 2.51 0 011.61.48 1.48 1.48 0 01.6 1.23h-1.41a.67.67 0 00-.2-.5.83.83 0 00-.61-.2.84.84 0 00-.55.16.5.5 0 00-.19.41.43.43 0 00.22.38 2.47 2.47 0 00.75.25 7.52 7.52 0 01.89.23 1.48 1.48 0 011.12 1.43 1.36 1.36 0 01-.62 1.16 2.69 2.69 0 01-1.61.45 3 3 0 01-1.18-.23 1.94 1.94 0 01-.8-.66 1.47 1.47 0 01-.3-.89h1.34a.72.72 0 00.28.58 1.11 1.11 0 00.69.2 1.07 1.07 0 00.62-.15.51.51 0 00.2-.41zM939.52 892.88v-7.11h2.18a3.33 3.33 0 011.68.43 3 3 0 011.16 1.2 3.79 3.79 0 01.41 1.77v.33a3.63 3.63 0 01-.41 1.76 2.87 2.87 0 01-1.15 1.19 3.22 3.22 0 01-1.67.43zM941 887v4.75h.71a1.6 1.6 0 001.31-.56 2.53 2.53 0 00.47-1.61v-.38a2.56 2.56 0 00-.45-1.64 1.6 1.6 0 00-1.32-.56zM949 892.88a1.64 1.64 0 01-.14-.47 1.7 1.7 0 01-1.33.57 1.88 1.88 0 01-1.29-.45 1.43 1.43 0 01-.51-1.13 1.49 1.49 0 01.63-1.29 3 3 0 011.79-.45h.65v-.31a.87.87 0 00-.18-.58.75.75 0 00-.6-.22.83.83 0 00-.56.17.59.59 0 00-.2.47h-1.41a1.4 1.4 0 01.28-.85 1.84 1.84 0 01.8-.61 2.94 2.94 0 011.17-.23 2.36 2.36 0 011.55.49 1.73 1.73 0 01.57 1.38v2.29a2.46 2.46 0 00.21 1.14v.08zm-1.16-1a1.1 1.1 0 00.57-.14.83.83 0 00.39-.37v-.91h-.52c-.71 0-1.09.25-1.13.73v.09a.57.57 0 00.19.43.69.69 0 00.48.19zM953 886.3v1.3h.91v1H953v2.63a.59.59 0 00.12.42c.07.09.21.13.43.13a2.54 2.54 0 00.41 0v1.06a2.74 2.74 0 01-.85.13 1.35 1.35 0 01-1.52-1.5v-2.84h-.77v-1h.77v-1.3zM957.72 892.88a1.64 1.64 0 01-.14-.47 1.7 1.7 0 01-1.33.57 1.88 1.88 0 01-1.29-.45 1.43 1.43 0 01-.51-1.13 1.49 1.49 0 01.63-1.29 3 3 0 011.8-.45h.64v-.31a.87.87 0 00-.18-.58.75.75 0 00-.6-.22.83.83 0 00-.56.17.59.59 0 00-.2.47h-1.41a1.47 1.47 0 01.28-.85 1.84 1.84 0 01.8-.61 2.94 2.94 0 011.17-.23 2.36 2.36 0 011.55.49 1.73 1.73 0 01.57 1.38v2.29a2.46 2.46 0 00.21 1.14v.08zm-1.16-1a1.1 1.1 0 00.57-.14.83.83 0 00.39-.37v-.91H957c-.71 0-1.08.25-1.13.73v.09a.57.57 0 00.19.43.69.69 0 00.5.19zM964.07 890.38v2.5h-1.46v-7.11h2.77a3.15 3.15 0 011.41.3 2 2 0 01.93.83 2.31 2.31 0 01.33 1.23 2.08 2.08 0 01-.71 1.65 3 3 0 01-2 .6zm0-1.19h1.31a1.32 1.32 0 00.89-.27 1 1 0 00.3-.78 1.17 1.17 0 00-.31-.85 1.15 1.15 0 00-.84-.33h-1.35zM971.93 888.92h-.5a1 1 0 00-1 .55v3.45H969v-5.32h1.34v.63a1.31 1.31 0 011.17-.73 1.23 1.23 0 01.44.07zM972.22 890.19a3.16 3.16 0 01.3-1.4 2.17 2.17 0 01.87-.95 2.59 2.59 0 011.32-.34 2.41 2.41 0 011.75.66 2.6 2.6 0 01.75 1.77v.37a2.73 2.73 0 01-.68 2 2.63 2.63 0 01-3.64 0 2.78 2.78 0 01-.68-2zm1.41.1a2 2 0 00.28 1.16 1 1 0 001.61 0 2.17 2.17 0 00.29-1.26 2 2 0 00-.29-1.14.94.94 0 00-.81-.41 1 1 0 00-.8.4 2.2 2.2 0 00-.28 1.25zM979.78 886.3v1.3h.9v1h-.9v2.63a.64.64 0 00.11.42.55.55 0 00.43.13 2.58 2.58 0 00.42 0v1.06a2.76 2.76 0 01-.86.13 1.35 1.35 0 01-1.51-1.5v-2.84h-.77v-1h.77v-1.3zM983.9 893a2.62 2.62 0 01-1.89-.71 2.53 2.53 0 01-.73-1.9v-.14a3.12 3.12 0 01.31-1.42 2.22 2.22 0 01.87-1 2.48 2.48 0 011.29-.34 2.16 2.16 0 011.7.69 2.74 2.74 0 01.62 1.94v.57h-3.36a1.32 1.32 0 00.41.83 1.24 1.24 0 00.87.31 1.51 1.51 0 001.28-.59l.69.78a2.13 2.13 0 01-.86.7 2.77 2.77 0 01-1.2.28zm-.16-4.34a.9.9 0 00-.68.28 1.5 1.5 0 00-.34.82h2v-.11a1 1 0 00-.26-.73.9.9 0 00-.72-.28zM989.07 891.84a1 1 0 00.64-.21.78.78 0 00.25-.57h1.32a1.79 1.79 0 01-.29 1 1.92 1.92 0 01-.79.7 2.5 2.5 0 01-1.1.24 2.3 2.3 0 01-1.79-.72 2.82 2.82 0 01-.65-2v-.09a2.85 2.85 0 01.64-1.95 2.31 2.31 0 011.79-.73 2.21 2.21 0 011.59.57 1.94 1.94 0 01.6 1.5H990a1 1 0 00-.25-.67.87.87 0 00-.65-.26.84.84 0 00-.74.36 2.07 2.07 0 00-.25 1.17v.14a2.09 2.09 0 00.25 1.18.85.85 0 00.71.34zM993.78 886.3v1.3h.9v1h-.9v2.63a.64.64 0 00.11.42.55.55 0 00.43.13 2.58 2.58 0 00.42 0v1.06a2.8 2.8 0 01-.86.13 1.35 1.35 0 01-1.51-1.5v-2.84h-.77v-1h.77v-1.3zM995.46 886.23a.7.7 0 01.21-.52.79.79 0 01.58-.2.8.8 0 01.58.2.7.7 0 01.21.52.68.68 0 01-.22.53.88.88 0 01-1.14 0 .68.68 0 01-.22-.53zm1.5 6.65h-1.42v-5.28H997zM997.9 890.19a3.16 3.16 0 01.3-1.4 2.29 2.29 0 01.87-.95 2.6 2.6 0 011.33-.34 2.38 2.38 0 011.74.66 2.66 2.66 0 01.76 1.77v.37a2.77 2.77 0 01-.68 2 2.65 2.65 0 01-3.65 0 2.82 2.82 0 01-.68-2zm1.41.1a2.07 2.07 0 00.28 1.16 1 1 0 001.62 0 2.17 2.17 0 00.28-1.26 2 2 0 00-.28-1.14 1 1 0 00-1.62 0 2.29 2.29 0 00-.28 1.24zM1005.07 887.6v.61a1.85 1.85 0 011.52-.71 1.54 1.54 0 011.25.5 2.34 2.34 0 01.42 1.47v3.41h-1.42v-3.38a1 1 0 00-.19-.66.9.9 0 00-.65-.2 1 1 0 00-.89.51v3.73h-1.41v-5.28z"
              />
            </g>
            <g
              id="prefix__ADVANCED_DISASTER_RECOVERY"
              data-name="ADVANCED DISASTER RECOVERY"
            >
              <path
                d="M700 875v175a423.05 423.05 0 00212.53-56.88L825 841.54A249 249 0 01700 875z"
                stroke="#3696cd"
                fill="url(#prefix__radial-gradient-22)"
                strokeMiterlimit={10}
              />
              <path
                d="M825 841.54l-37.51-65q-2.34 1.35-4.74 2.64l-.48.25c-1.38.74-2.76 1.45-4.16 2.15l-.9.45c-1.44.71-2.9 1.4-4.36 2.07l-.34.16q-2.46 1.13-4.95 2.17l-.48.19q-2.16.9-4.35 1.74l-1.08.41q-2.1.8-4.23 1.53l-.72.26c-1.69.57-3.38 1.13-5.09 1.65l-.52.16q-2.22.68-4.47 1.29l-1.29.35c-1.35.36-2.71.71-4.07 1l-1.09.27q-2.58.6-5.18 1.13l-.54.11c-1.53.3-3.06.59-4.6.85l-1.49.25c-1.31.21-2.62.41-4 .59l-1.39.2c-1.75.23-3.5.44-5.27.62h-.42c-1.62.16-3.24.3-4.86.41l-1.61.1c-1.3.08-2.6.15-3.91.2l-1.59.06c-1.79.05-3.58.09-5.38.09v75A249 249 0 00825 841.54z"
                fill="url(#prefix__radial-gradient-23)"
              />
              <path
                className="prefix__cls-13"
                d="M726.94 818.26h-3.33l-.64 1.9h-2l3.44-9.24h1.76l3.46 9.24h-2zm-2.82-1.55h2.31l-1.16-3.46zM730.47 820.16v-9.24h2.85a4.28 4.28 0 012.18.55A3.76 3.76 0 01737 813a4.79 4.79 0 01.54 2.3v.42a4.91 4.91 0 01-.53 2.3 3.8 3.8 0 01-1.5 1.55 4.28 4.28 0 01-2.17.56zm1.91-7.7v6.17h.92a2.08 2.08 0 001.71-.73 3.33 3.33 0 00.6-2.09v-.49a3.38 3.38 0 00-.58-2.13 2.05 2.05 0 00-1.71-.73zM742.2 817.87l2.09-7h2.12l-3.22 9.24h-2l-3.19-9.19h2.12zM752 818.26h-3.33l-.64 1.9h-2l3.44-9.24h1.76l3.46 9.24h-2zm-2.82-1.55h2.31l-1.16-3.46zM763.07 820.16h-1.9l-3.71-6.08v6.08h-1.91v-9.24h1.91l3.71 6.09v-6.09h1.9zM772 817.08a3.26 3.26 0 01-1.1 2.35 3.9 3.9 0 01-2.62.86 3.48 3.48 0 01-2.8-1.2 4.9 4.9 0 01-1-3.28v-.57a5.6 5.6 0 01.47-2.35 3.56 3.56 0 011.35-1.56 4.19 4.19 0 014.6.32 3.5 3.5 0 011.13 2.4h-1.9a2 2 0 00-.5-1.29 1.85 1.85 0 00-1.31-.41 1.6 1.6 0 00-1.42.69 3.77 3.77 0 00-.49 2.11v.7a4 4 0 00.46 2.19 1.59 1.59 0 001.43.69 1.85 1.85 0 001.31-.4 1.78 1.78 0 00.5-1.25zM778.8 816.14h-3.66v2.49h4.29v1.53h-6.19v-9.24h6.18v1.54h-4.28v2.2h3.66zM780.55 820.16v-9.24h2.84a4.32 4.32 0 012.19.55 3.76 3.76 0 011.5 1.56 4.79 4.79 0 01.54 2.3v.42a4.91 4.91 0 01-.53 2.3 3.92 3.92 0 01-1.5 1.55 4.29 4.29 0 01-2.18.56zm1.91-7.7v6.17h.92a2 2 0 001.7-.73 3.27 3.27 0 00.61-2.09v-.49a3.32 3.32 0 00-.59-2.13 2.05 2.05 0 00-1.71-.73zM725.05 835.76v-9.24h2.85a4.28 4.28 0 012.18.55 3.76 3.76 0 011.5 1.56 4.79 4.79 0 01.54 2.3v.42a4.91 4.91 0 01-.53 2.3 3.86 3.86 0 01-1.5 1.55 4.28 4.28 0 01-2.17.56zm1.91-7.7v6.17h.92a2 2 0 001.7-.73 3.27 3.27 0 00.61-2.09v-.49a3.32 3.32 0 00-.59-2.13 2 2 0 00-1.7-.73zM735.53 835.76h-1.91v-9.24h1.91zM742.08 833.33a1 1 0 00-.38-.82 4.62 4.62 0 00-1.37-.61 11.5 11.5 0 01-1.57-.63 2.57 2.57 0 01-1.57-2.3 2.22 2.22 0 01.42-1.33 2.79 2.79 0 011.21-.92 4.59 4.59 0 011.78-.33 4.1 4.1 0 011.76.36 2.88 2.88 0 011.21 1 2.7 2.7 0 01.42 1.49h-1.9a1.24 1.24 0 00-.4-1 1.67 1.67 0 00-1.12-.35 1.81 1.81 0 00-1.09.29.94.94 0 00-.39.78.92.92 0 00.46.76 5.36 5.36 0 001.33.57 5.67 5.67 0 012.37 1.21 2.38 2.38 0 01.74 1.8 2.22 2.22 0 01-.9 1.88 4 4 0 01-2.45.69 4.7 4.7 0 01-1.94-.39 3.15 3.15 0 01-1.34-1.07 2.82 2.82 0 01-.46-1.58h1.91q0 1.53 1.83 1.53a1.79 1.79 0 001.06-.27.89.89 0 00.38-.76zM750.5 833.86h-3.34l-.63 1.9h-2l3.44-9.24h1.77l3.46 9.24h-2zm-2.82-1.55H750l-1.16-3.46zM758.82 833.33a1 1 0 00-.38-.82 4.62 4.62 0 00-1.37-.61 11.5 11.5 0 01-1.57-.63 2.57 2.57 0 01-1.57-2.3 2.22 2.22 0 01.42-1.33 2.79 2.79 0 011.21-.92 4.59 4.59 0 011.78-.33 4.1 4.1 0 011.76.36 2.79 2.79 0 011.2 1 2.63 2.63 0 01.43 1.49h-1.9a1.24 1.24 0 00-.4-1 1.67 1.67 0 00-1.12-.35 1.81 1.81 0 00-1.09.29.94.94 0 00-.39.78.9.9 0 00.46.76 5.19 5.19 0 001.33.57 5.67 5.67 0 012.37 1.21 2.38 2.38 0 01.74 1.8 2.22 2.22 0 01-.9 1.88 4 4 0 01-2.45.69 4.7 4.7 0 01-1.94-.39 3.15 3.15 0 01-1.34-1.07 2.82 2.82 0 01-.46-1.58h1.91q0 1.53 1.83 1.53a1.81 1.81 0 001.06-.27.89.89 0 00.38-.76zM769 828.06h-2.83v7.7h-1.91v-7.7h-2.79v-1.54H769zM775.63 831.74H772v2.49h4.29v1.53h-6.2v-9.24h6.19v1.54H772v2.2h3.66zM780.8 832.38h-1.52v3.38h-1.9v-9.24h3.43a3.87 3.87 0 012.53.73 2.51 2.51 0 01.89 2.06 2.57 2.57 0 01-1.65 2.58l2 3.78v.09h-2.05zm-1.52-1.55h1.54a1.59 1.59 0 001.11-.36 1.31 1.31 0 00.39-1 1.4 1.4 0 00-.37-1 1.55 1.55 0 00-1.14-.37h-1.53zM728 848h-1.52v3.38h-1.9v-9.24H728a3.89 3.89 0 012.53.73 2.51 2.51 0 01.89 2.06 2.59 2.59 0 01-1.65 2.59l2 3.77v.09h-2zm-1.52-1.55H728a1.59 1.59 0 001.11-.36 1.31 1.31 0 00.39-1 1.38 1.38 0 00-.37-1 1.55 1.55 0 00-1.14-.38h-1.53zM738.44 847.34h-3.65v2.49h4.29v1.53h-6.2v-9.24h6.19v1.54h-4.28v2.2h3.65zM747.45 848.28a3.26 3.26 0 01-1.1 2.35 3.88 3.88 0 01-2.62.86 3.49 3.49 0 01-2.8-1.2 5 5 0 01-1-3.28v-.57a5.45 5.45 0 01.47-2.35 3.6 3.6 0 011.34-1.56 4.19 4.19 0 014.6.32 3.46 3.46 0 011.13 2.4h-1.9a1.9 1.9 0 00-.5-1.29 1.83 1.83 0 00-1.3-.41 1.62 1.62 0 00-1.43.69 3.78 3.78 0 00-.48 2.11v.7a4.12 4.12 0 00.45 2.19 1.59 1.59 0 001.43.69 1.57 1.57 0 001.82-1.65zM756.29 847a5.57 5.57 0 01-.48 2.39 3.59 3.59 0 01-1.38 1.59 4.05 4.05 0 01-4.11 0 3.63 3.63 0 01-1.4-1.57 5.53 5.53 0 01-.5-2.36v-.46a5.65 5.65 0 01.49-2.4 3.73 3.73 0 011.39-1.59 4.05 4.05 0 014.11 0 3.67 3.67 0 011.39 1.59 5.5 5.5 0 01.49 2.4zm-1.93-.42a3.86 3.86 0 00-.52-2.21 1.84 1.84 0 00-3 0 3.89 3.89 0 00-.53 2.19v.44a4 4 0 00.52 2.2 1.7 1.7 0 001.5.78 1.68 1.68 0 001.47-.76 3.81 3.81 0 00.52-2.19zM761 849.07l2.1-7h2.12l-3.22 9.29h-2l-3.2-9.24h2.11zM771.6 847.34h-3.66v2.49h4.29v1.53H766v-9.24h6.18v1.54h-4.28v2.2h3.66zM776.77 848h-1.52v3.38h-1.9v-9.24h3.43a3.85 3.85 0 012.53.73 2.51 2.51 0 01.89 2.06 2.88 2.88 0 01-.41 1.58 2.81 2.81 0 01-1.24 1l2 3.77v.09h-2zm-1.52-1.55h1.54a1.58 1.58 0 001.11-.36 1.31 1.31 0 00.39-1 1.38 1.38 0 00-.37-1 1.55 1.55 0 00-1.14-.38h-1.53zM784.53 846.28l1.92-4.16h2.08l-3 5.89v3.35h-1.94V848l-3-5.89h2.09z"
              />
              <text
                className="prefix__cls-85"
                transform="translate(714.89 927.88)"
              >
                {"\u2022 P"}
                <tspan className="prefix__cls-86" x={12.53} y={0}>
                  {"r"}
                </tspan>
                <tspan x={16.01} y={0}>
                  {"oduction and test failover"}
                </tspan>
                <tspan x={0} y={12}>
                  {"\u2022 Cloud-only and site-to-site"}
                </tspan>
                <tspan x={6} y={24}>
                  {"VPN connections"}
                </tspan>
                <tspan x={0} y={36}>
                  {"\u2022 Multiple templates"}
                </tspan>
                <tspan x={0} y={48}>
                  {"\u2022 Cyber Protected Disaster Recovery*"}
                </tspan>
                <tspan x={0} y={60}>
                  {"\u2022 Runbooks"}
                </tspan>
              </text>
            </g>
            <g
              id="prefix__ADVANCED_FILE_SYNC_AND_SHARE"
              data-name="ADVANCED FILE SYNC AND SHARE"
            >
              <path
                d="M575 841.54l37.51-65h0l-125 216.54A423.05 423.05 0 00700 1050V875a248.93 248.93 0 01-125-33.46z"
                stroke="#62cbe7"
                fill="url(#prefix__radial-gradient-24)"
                strokeMiterlimit={10}
              />
              <path
                d="M575 841.54A248.93 248.93 0 00700 875v-75c-2 0-4 0-6-.1a174.71 174.71 0 01-25.87-2.81c-1.68-.31-3.34-.64-5-1a173.73 173.73 0 01-30.62-9.57 175.47 175.47 0 01-20-9.94z"
                fill="url(#prefix__radial-gradient-25)"
              />
              <path
                className="prefix__cls-13"
                d="M617.94 816.26h-3.33l-.64 1.9h-2l3.44-9.24h1.76l3.46 9.24h-2zm-2.82-1.55h2.31l-1.16-3.46zM621.47 818.16v-9.24h2.85a4.28 4.28 0 012.18.55A3.76 3.76 0 01628 811a4.79 4.79 0 01.54 2.3v.42a4.91 4.91 0 01-.53 2.3 3.8 3.8 0 01-1.5 1.55 4.28 4.28 0 01-2.17.56zm1.91-7.7v6.17h.92a2.08 2.08 0 001.71-.73 3.33 3.33 0 00.6-2.09v-.49a3.32 3.32 0 00-.59-2.13 2 2 0 00-1.7-.73zM633.2 815.87l2.09-7h2.12l-3.22 9.24h-2l-3.19-9.19h2.12zM643 816.26h-3.33l-.64 1.9h-2l3.44-9.24h1.76l3.46 9.24h-2zm-2.82-1.55h2.31l-1.16-3.46zM654.07 818.16h-1.91l-3.7-6.08v6.08h-1.91v-9.24h1.91l3.71 6.09v-6.09h1.9zM663 815.08a3.26 3.26 0 01-1.1 2.35 3.9 3.9 0 01-2.62.86 3.48 3.48 0 01-2.8-1.2 4.9 4.9 0 01-1-3.28v-.57a5.6 5.6 0 01.47-2.35 3.56 3.56 0 011.35-1.56 4.19 4.19 0 014.6.32 3.5 3.5 0 011.13 2.4h-1.9a2 2 0 00-.5-1.29 1.85 1.85 0 00-1.31-.41 1.6 1.6 0 00-1.42.69 3.77 3.77 0 00-.49 2.11v.7a4 4 0 00.46 2.19 1.59 1.59 0 001.43.69 1.85 1.85 0 001.31-.4 1.83 1.83 0 00.5-1.25zM669.8 814.14h-3.66v2.49h4.29v1.53h-6.19v-9.24h6.18v1.54h-4.28v2.2h3.66zM671.55 818.16v-9.24h2.84a4.26 4.26 0 012.18.55 3.73 3.73 0 011.51 1.56 4.79 4.79 0 01.54 2.3v.42a4.91 4.91 0 01-.53 2.3 3.92 3.92 0 01-1.5 1.55 4.29 4.29 0 01-2.18.56zm1.9-7.7v6.17h.93a2 2 0 001.7-.73 3.27 3.27 0 00.61-2.09v-.49a3.32 3.32 0 00-.59-2.13 2.05 2.05 0 00-1.71-.73zM620.82 830h-3.66v3.78h-1.9v-9.24h6v1.54h-4.11v2.39h3.66zM624.4 833.76h-1.9v-9.24h1.9zM628.07 832.23h4v1.53h-6v-9.24h1.9zM638.77 829.74h-3.66v2.49h4.29v1.53h-6.19v-9.24h6.18v1.54h-4.28v2.2h3.66zM648.55 831.33a1 1 0 00-.38-.82 4.75 4.75 0 00-1.37-.61 11 11 0 01-1.57-.63 2.57 2.57 0 01-1.57-2.3 2.22 2.22 0 01.42-1.33 2.73 2.73 0 011.21-.92 4.58 4.58 0 011.77-.33 4.18 4.18 0 011.77.36 2.85 2.85 0 011.2 1 2.63 2.63 0 01.43 1.49h-1.9a1.27 1.27 0 00-.4-1 1.7 1.7 0 00-1.13-.35 1.8 1.8 0 00-1.08.29.94.94 0 00-.39.78.91.91 0 00.45.76 5.46 5.46 0 001.34.57 5.8 5.8 0 012.37 1.21 2.42 2.42 0 01.74 1.8 2.2 2.2 0 01-.91 1.88 3.93 3.93 0 01-2.44.69 4.7 4.7 0 01-1.94-.39 3.09 3.09 0 01-1.34-1.07 2.74 2.74 0 01-.46-1.58h1.91q0 1.53 1.83 1.53a1.83 1.83 0 001.06-.27.92.92 0 00.38-.76zM654.94 828.68l1.92-4.16h2.08l-3 5.89v3.35H654v-3.35l-3-5.89h2zM667.3 833.76h-1.9l-3.71-6.08v6.08h-1.91v-9.24h1.91l3.71 6.09v-6.09h1.9zM676.22 830.68a3.26 3.26 0 01-1.1 2.35 3.88 3.88 0 01-2.62.86 3.48 3.48 0 01-2.8-1.2 4.9 4.9 0 01-1-3.28v-.57a5.6 5.6 0 01.47-2.35 3.51 3.51 0 011.35-1.56 4.19 4.19 0 014.6.32 3.5 3.5 0 011.13 2.4h-1.9a2 2 0 00-.5-1.29 1.85 1.85 0 00-1.31-.41 1.62 1.62 0 00-1.42.68 3.81 3.81 0 00-.49 2.12v.7a4.1 4.1 0 00.46 2.19 1.59 1.59 0 001.43.69 1.88 1.88 0 001.32-.4 1.82 1.82 0 00.49-1.25zM617.57 847.46h-3.34l-.63 1.9h-2l3.44-9.24h1.77l3.46 9.24h-2zm-2.82-1.55h2.31l-1.17-3.46zM628.61 849.36h-1.9l-3.71-6.08v6.08h-1.9v-9.24h1.9l3.72 6.09v-6.09h1.89zM630.28 849.36v-9.24h2.84a4.28 4.28 0 012.18.55 3.76 3.76 0 011.5 1.56 4.79 4.79 0 01.54 2.3v.47a4.78 4.78 0 01-.53 2.29 3.77 3.77 0 01-1.49 1.55 4.31 4.31 0 01-2.18.56zm1.9-7.7v6.17h.92a2.05 2.05 0 001.71-.73 3.33 3.33 0 00.6-2.09v-.49a3.32 3.32 0 00-.58-2.13 2.05 2.05 0 00-1.71-.73zM646.76 846.94a1 1 0 00-.38-.83 5.14 5.14 0 00-1.38-.61 10.79 10.79 0 01-1.56-.63 2.57 2.57 0 01-1.58-2.29 2.25 2.25 0 01.42-1.34 2.82 2.82 0 011.22-.92 4.54 4.54 0 011.77-.33 4.18 4.18 0 011.77.36 2.91 2.91 0 011.2 1 2.71 2.71 0 01.43 1.49h-1.91a1.24 1.24 0 00-.4-1 1.65 1.65 0 00-1.12-.35 1.81 1.81 0 00-1.09.29 1 1 0 00-.38.78.91.91 0 00.45.76 5.29 5.29 0 001.34.57 5.68 5.68 0 012.36 1.21 2.39 2.39 0 01.75 1.8 2.23 2.23 0 01-.91 1.88 4 4 0 01-2.44.69 4.75 4.75 0 01-2-.39A3.06 3.06 0 01642 848a2.74 2.74 0 01-.46-1.58h1.91q0 1.53 1.83 1.53a1.83 1.83 0 001.06-.27.91.91 0 00.42-.74zM657.48 849.36h-1.91v-4h-3.71v4H650v-9.24h1.9v3.74h3.71v-3.74h1.91zM664.47 847.46h-3.34l-.63 1.9h-2l3.44-9.24h1.77l3.46 9.24h-2zm-2.82-1.55H664l-1.16-3.46zM671.42 846h-1.51v3.38H668v-9.24h3.44a3.84 3.84 0 012.52.73 2.51 2.51 0 01.89 2.06 2.88 2.88 0 01-.41 1.58 2.81 2.81 0 01-1.24 1l2 3.77v.09h-2zm-1.51-1.55h1.53a1.58 1.58 0 001.11-.36 1.28 1.28 0 00.4-1 1.42 1.42 0 00-.37-1 1.55 1.55 0 00-1.14-.38h-1.53zM681.86 845.34h-3.66v2.49h4.29v1.53h-6.19v-9.24h6.18v1.54h-4.28v2.2h3.66z"
              />
              <text
                className="prefix__cls-85"
                transform="translate(537.89 928.88)"
              >
                {"\u2022 Notarization and eSignature"}
                <tspan x={0} y={12}>
                  {"\u2022 Document templates*"}
                </tspan>
                <tspan x={0} y={24}>
                  {"\u2022 On-p"}
                </tspan>
                <tspan className="prefix__cls-87" x={28.1} y={24}>
                  {"r"}
                </tspan>
                <tspan x={31.65} y={24}>
                  {"emises content "}
                </tspan>
                <tspan x={0} y={36} />
                <tspan className="prefix__cls-87" x={7.47} y={36}>
                  {"respositories (NAS, SharePoint)*"}
                </tspan>
                <tspan x={0} y={48}>
                  {"\u2022 Backup of sync and share files*"}
                </tspan>
                <tspan className="prefix__cls-87" x={112.48} y={48}>
                  {""}
                </tspan>
                <tspan x={116.04} y={48}>
                  {""}
                </tspan>
              </text>
            </g>
          </g>
        </g>
      </g>
    </SvgAnime>
  )
}

export default SvgComponent

