import svgPaths from "./svg-4y01c2e055";
import imgSparklesLoopLoaderAi1 from "./91f885eacde538ca88ade03ed2ee279d62b0b563.png";
type IconProps = {
  className?: string;
  property1?: "default" | "actived";
};

function Icon({ className, property1 = "actived" }: IconProps) {
  return (
    <div className={className || `relative rounded-[1234px] size-[40px] ${property1 === "actived" ? "bg-[#2c66ff] shadow-[0px_5px_7px_0px_rgba(0,60,220,0.34)]" : "bg-[#c6cfdc]"}`}>
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="line/Arrow_up">
            <div className="absolute h-[16.5px] left-[5.63px] top-[3.75px] w-[12.375px]">
              <div className="absolute inset-[-3.7%_-7.58%_-5.68%_-7.58%]">
                <svg className="block size-full" fill="none" height="18.048" preserveAspectRatio="none" viewBox="0 0 14.25 18.048" width="14.25">
                  <g id="Group 2116931749">
                    <path d="M7.3125 17.1105V1.36053" id="Vector 1194233812" stroke="white" strokeLinecap="round" strokeWidth="1.875" />
                    <path d={svgPaths.p2674f570} id="Vector 1194233811" stroke="white" strokeLinecap="round" strokeWidth="1.875" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
type ConicGradientAnimatedProps = {
  className?: string;
  property1?: "Default" | "Variant2" | "Variant3" | "Variant4";
};

function ConicGradientAnimated({ className, property1 = "Default" }: ConicGradientAnimatedProps) {
  const isVariant2OrVariant3OrVariant4 = ["Variant2", "Variant3", "Variant4"].includes(property1);
  return (
    <div className={className || "h-[83px] relative rounded-[24px] w-[174px]"}>
      <div className={`absolute inset-0 rounded-[24px] ${isVariant2OrVariant3OrVariant4 ? "blur-[1px]" : ""}`} style={property1 === "Variant4" ? { backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 174 83' preserveAspectRatio='none'><g transform='matrix(8.9278e-16 8.7 -6.9644 7.3534e-15 87 41.5)'><foreignObject x='-237.35' y='-237.35' width='474.7' height='474.7'><div xmlns='http://www.w3.org/1999/xhtml' style='background-image: conic-gradient(from 90deg, rgba(185, 191, 200, 0) -0.044459%, rgba(193, 166, 214, 0.25) 3.7336%, rgba(201, 140, 228, 0.5) 7.5116%, rgba(208, 115, 241, 0.75) 11.29%, rgb(216, 89, 255) 15.068%, rgb(173, 92, 255) 18.713%, rgb(130, 96, 255) 22.359%, rgb(87, 99, 255) 26.005%, rgb(44, 102, 255) 29.65%, rgb(64, 134, 255) 33.432%, rgb(85, 166, 255) 37.214%, rgb(125, 229, 255) 44.778%, rgb(189, 210, 255) 59.96%, rgba(187, 201, 228, 0.625) 67.541%, rgba(185, 191, 200, 0.25) 75.123%, rgba(185, 191, 200, 0) 99.956%, rgba(193, 166, 214, 0.25) 103.73%, rgba(201, 140, 228, 0.5) 107.51%, rgba(208, 115, 241, 0.75) 111.29%, rgb(216, 89, 255) 115.07%); opacity:1; height: 100%; width: 100%;'></div></foreignObject></g></svg>\")" } : property1 === "Variant3" ? { backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 174 83' preserveAspectRatio='none'><g transform='matrix(8.7 -3.6005e-16 6.927e-15 6.9644 87 41.5)'><foreignObject x='-190' y='-190' width='380' height='380'><div xmlns='http://www.w3.org/1999/xhtml' style='background-image: conic-gradient(from 90deg, rgba(185, 191, 200, 0) -0.044459%, rgba(193, 166, 214, 0.25) 3.7336%, rgba(201, 140, 228, 0.5) 7.5116%, rgba(208, 115, 241, 0.75) 11.29%, rgb(216, 89, 255) 15.068%, rgb(173, 92, 255) 18.713%, rgb(130, 96, 255) 22.359%, rgb(87, 99, 255) 26.005%, rgb(44, 102, 255) 29.65%, rgb(64, 134, 255) 33.432%, rgb(85, 166, 255) 37.214%, rgb(125, 229, 255) 44.778%, rgb(189, 210, 255) 59.96%, rgba(187, 201, 228, 0.625) 67.541%, rgba(185, 191, 200, 0.25) 75.123%, rgba(185, 191, 200, 0) 99.956%, rgba(193, 166, 214, 0.25) 103.73%, rgba(201, 140, 228, 0.5) 107.51%, rgba(208, 115, 241, 0.75) 111.29%, rgb(216, 89, 255) 115.07%); opacity:1; height: 100%; width: 100%;'></div></foreignObject></g></svg>\")" } : property1 === "Variant2" ? { backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 174 83' preserveAspectRatio='none'><g transform='matrix(1.7267e-16 -8.7 6.9644 -6.5005e-15 87 41.5)'><foreignObject x='-237.35' y='-237.35' width='474.7' height='474.7'><div xmlns='http://www.w3.org/1999/xhtml' style='background-image: conic-gradient(from 90deg, rgba(185, 191, 200, 0) -0.044459%, rgba(193, 166, 214, 0.25) 3.7336%, rgba(201, 140, 228, 0.5) 7.5116%, rgba(208, 115, 241, 0.75) 11.29%, rgb(216, 89, 255) 15.068%, rgb(173, 92, 255) 18.713%, rgb(130, 96, 255) 22.359%, rgb(87, 99, 255) 26.005%, rgb(44, 102, 255) 29.65%, rgb(64, 134, 255) 33.432%, rgb(85, 166, 255) 37.214%, rgb(125, 229, 255) 44.778%, rgb(189, 210, 255) 59.96%, rgba(187, 201, 228, 0.625) 67.541%, rgba(185, 191, 200, 0.25) 75.123%, rgba(185, 191, 200, 0) 99.956%, rgba(193, 166, 214, 0.25) 103.73%, rgba(201, 140, 228, 0.5) 107.51%, rgba(208, 115, 241, 0.75) 111.29%, rgb(216, 89, 255) 115.07%); opacity:1; height: 100%; width: 100%;'></div></foreignObject></g></svg>\")" } : { backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 174 83' preserveAspectRatio='none'><g transform='matrix(-8.7 -7.0539e-16 -6.0741e-15 -6.9644 87 41.5)'><foreignObject x='-190' y='-190' width='380' height='380'><div xmlns='http://www.w3.org/1999/xhtml' style='background-image: conic-gradient(from 90deg, rgba(185, 191, 200, 0) -0.044459%, rgba(193, 166, 214, 0.25) 3.7336%, rgba(201, 140, 228, 0.5) 7.5116%, rgba(208, 115, 241, 0.75) 11.29%, rgb(216, 89, 255) 15.068%, rgb(173, 92, 255) 18.713%, rgb(130, 96, 255) 22.359%, rgb(87, 99, 255) 26.005%, rgb(44, 102, 255) 29.65%, rgb(64, 134, 255) 33.432%, rgb(84, 165, 255) 37.214%, rgb(125, 229, 255) 44.778%, rgb(189, 210, 255) 59.96%, rgba(187, 200, 227, 0.625) 67.541%, rgba(185, 191, 200, 0.25) 75.123%, rgba(185, 191, 200, 0) 99.956%, rgba(193, 166, 214, 0.25) 103.73%, rgba(201, 140, 228, 0.5) 107.51%, rgba(208, 115, 241, 0.75) 111.29%, rgb(216, 89, 255) 115.07%); opacity:1; height: 100%; width: 100%;'></div></foreignObject></g></svg>\")" }} data-name="bg" />
      {isVariant2OrVariant3OrVariant4 && <div className="absolute inset-0 rounded-[24px]" data-name="bg" />}
    </div>
  );
}
type Component15Props = {
  className?: string;
  prop1?: "1" | "2" | "3" | "베리언트4";
};

function Component15({ className, prop1 = "1" }: Component15Props) {
  return (
    <div className={className || "relative"}>
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[8px] items-center justify-center relative size-full">
          <div className="relative shrink-0 size-[80px]" data-name="Sparkles Loop Loader ai 1">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSparklesLoopLoaderAi1} />
          </div>
          <p className={`[word-break:break-word] font-["Pretendard_Variable:ExtraBold",sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] whitespace-pre ${prop1 === "베리언트4" ? "text-[#293657]" : prop1 === "3" ? "bg-clip-text bg-gradient-to-r from-[#293657] from-[58.66%] text-[transparent] to-[#5542ff] to-[139.37%] via-[#23cfff] via-[89.747%]" : prop1 === "2" ? "bg-clip-text bg-gradient-to-r from-[#293657] from-[40.033%] text-[transparent] to-[#5542ff] to-[105.42%] via-[#23cfff] via-[65.217%]" : "bg-clip-text bg-gradient-to-r from-[#293657] text-[transparent] to-[#5542ff] to-[64.906%] via-1/4 via-[#23cfff]"}`}>{`KEC조항에 대해  무엇이든 물어보세요`}</p>
        </div>
      </div>
    </div>
  );
}
type Component14Props = {
  className?: string;
  prop1?: "1" | "2" | "4" | "베리언트6" | "베리언트7";
};

function Component14({ className, prop1 = "베리언트7" }: Component14Props) {
  const is1Or2 = ["1", "2"].includes(prop1);
  const is2Or4Or6Or6 = ["2", "4", "베리언트6", "베리언트6"].includes(prop1);
  const is6 = prop1 === "베리언트6";
  const is7 = prop1 === "베리언트7";
  return (
    <div className={className || "relative w-[1000px]"}>
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[50px] items-center relative size-full">
          <div className="content-stretch flex flex-col items-start relative shrink-0 w-[760px]">
            {["1", "베리언트7", "2"].includes(prop1) && (
              <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0 w-full" data-name="Component 391/1">
                {is1Or2 && (
                  <>
                    <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Component 420">
                      <div className="relative shrink-0 size-[80px]" data-name="Sparkles Loop Loader ai 1">
                        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSparklesLoopLoaderAi1} />
                      </div>
                      <p className="[word-break:break-word] bg-clip-text font-['Pretendard_Variable:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-[transparent] whitespace-pre" style={{ backgroundImage: "linear-gradient(90deg, rgb(41, 54, 87) 0%, rgb(41, 54, 87) 100%), linear-gradient(90deg, rgb(41, 54, 87) 0%, rgb(117, 170, 255) 25%, rgb(85, 66, 255) 64.906%)" }}>{`KEC조항에 대해  무엇이든 물어보세요`}</p>
                    </div>
                    <div className="bg-[rgba(255,255,255,0.87)] relative rounded-[24px] shrink-0 w-[760px]" data-name="chat-input">
                      <div className="content-stretch flex flex-col items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
                        <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Input">
                          <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="top-area">
                            <div className="overflow-clip relative shrink-0 size-[30px]" data-name="icon/plus">
                              <div className="absolute contents left-[7.5px] top-[7.5px]" data-name="plus">
                                <div className="absolute h-0 left-[7.5px] top-[15px] w-[15px]" data-name="Vector">
                                  <div className="absolute inset-[-0.65px_-8.12%]">
                                    <svg className="block size-full" fill="none" height="1.3" preserveAspectRatio="none" viewBox="0 0 9.3 1.3" width="9.3">
                                      <path d="M0.65 0.65H8.65" id="Vector" stroke="#AEB4C0" strokeLinecap="round" strokeWidth="1.3" />
                                    </svg>
                                  </div>
                                </div>
                                <div className="absolute h-[15px] left-[15px] top-[7.5px] w-0" data-name="Vector">
                                  <div className="absolute inset-[-8.12%_-0.65px]">
                                    <svg className="block size-full" fill="none" height="9.3" preserveAspectRatio="none" viewBox="0 0 1.3 9.3" width="1.3">
                                      <path d="M0.65 0.65L0.65 8.65" id="Vector" stroke="#AEB4C0" strokeLinecap="round" strokeWidth="1.3" />
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px relative">
                              <div className="bg-[#2c66ff] h-[20px] relative rounded-[10px] shrink-0 w-[2px]" data-name="cursor" />
                              <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard_Variable:Medium',sans-serif] leading-[1.6] min-w-px not-italic relative text-[#aeb4c0] text-[16px]">어떤 도움이 필요하신가요?</p>
                            </div>
                            <Icon className="bg-[#2c66ff] relative rounded-[1234px] shadow-[0px_5px_7px_0px_rgba(0,60,220,0.34)] shrink-0 size-[40px]" />
                          </div>
                        </div>
                      </div>
                      <div aria-hidden className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[24px] shadow-[0px_12px_30px_-4px_rgba(56,96,143,0.19)]" />
                    </div>
                  </>
                )}
                {is7 && (
                  <>
                    <Component15 className="relative shrink-0" />
                    <div className="drop-shadow-[0px_3px_35px_rgba(183,120,255,0.25)] h-[72px] relative shrink-0 w-full">
                      <ConicGradientAnimated className="-translate-x-1/2 -translate-y-1/2 absolute h-[75px] left-1/2 rounded-[24px] top-[calc(50%-0.5px)] w-[764px]" />
                      <div className="absolute bg-white left-[-0.5px] rounded-[24px] top-[-0.5px] w-[760px]" data-name="chat-input">
                        <div className="content-stretch flex flex-col items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
                          <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Input">
                            <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="top-area">
                              <div className="overflow-clip relative shrink-0 size-[30px]" data-name="icon/plus">
                                <div className="absolute contents left-[7.5px] top-[7.5px]" data-name="plus">
                                  <div className="absolute h-0 left-[7.5px] top-[15px] w-[15px]" data-name="Vector">
                                    <div className="absolute inset-[-0.65px_-8.12%]">
                                      <svg className="block size-full" fill="none" height="1.3" preserveAspectRatio="none" viewBox="0 0 9.3 1.3" width="9.3">
                                        <path d="M0.65 0.65H8.65" id="Vector" stroke="#AEB4C0" strokeLinecap="round" strokeWidth="1.3" />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="absolute h-[15px] left-[15px] top-[7.5px] w-0" data-name="Vector">
                                    <div className="absolute inset-[-8.12%_-0.65px]">
                                      <svg className="block size-full" fill="none" height="9.3" preserveAspectRatio="none" viewBox="0 0 1.3 9.3" width="1.3">
                                        <path d="M0.65 0.65L0.65 8.65" id="Vector" stroke="#AEB4C0" strokeLinecap="round" strokeWidth="1.3" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="content-stretch flex flex-[1_0_0] gap-[2px] items-center min-w-px relative">
                                <div className="bg-[#2c66ff] h-[20px] relative rounded-[10px] shrink-0 w-[2px]" data-name="cursor" />
                                <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard_Variable:Medium',sans-serif] leading-[1.6] min-w-px not-italic relative text-[#aeb4c0] text-[16px]">어떤 도움이 필요하신가요?</p>
                              </div>
                              <Icon className="bg-[#2c66ff] relative rounded-[1234px] shadow-[0px_5px_7px_0px_rgba(0,60,220,0.34)] shrink-0 size-[40px]" />
                            </div>
                          </div>
                        </div>
                        <div aria-hidden className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[24px] shadow-[0px_12px_30px_-4px_rgba(56,96,143,0.19)]" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
            {["4", "베리언트6"].includes(prop1) && (
              <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0" data-name="Component 391/3">
                <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Component 420">
                  <div className="relative shrink-0 size-[80px]" data-name="Sparkles Loop Loader ai 1">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSparklesLoopLoaderAi1} />
                  </div>
                  <p className="[word-break:break-word] bg-clip-text font-['Pretendard_Variable:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-[transparent] whitespace-pre" style={{ backgroundImage: "linear-gradient(90deg, rgb(41, 54, 87) 0%, rgb(41, 54, 87) 100%), linear-gradient(90deg, rgb(41, 54, 87) 0%, rgb(117, 170, 255) 25%, rgb(85, 66, 255) 64.906%)" }}>{`KEC조항에 대해  무엇이든 물어보세요`}</p>
                </div>
                <div className="bg-[rgba(255,255,255,0.87)] relative rounded-[24px] shrink-0 w-[760px]" data-name="chat-input">
                  <div className="content-stretch flex flex-col gap-[10px] items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Input">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="top-area">
                        <div className="overflow-clip relative shrink-0 size-[30px]" data-name="icon/plus">
                          <div className="absolute contents left-[7.5px] top-[7.5px]" data-name="plus">
                            <div className="absolute h-0 left-[7.5px] top-[15px] w-[15px]" data-name="Vector">
                              <div className="absolute inset-[-0.65px_-8.12%]">
                                <svg className="block size-full" fill="none" height="1.3" preserveAspectRatio="none" viewBox="0 0 9.3 1.3" width="9.3">
                                  <path d="M0.65 0.65H8.65" id="Vector" stroke="#AEB4C0" strokeLinecap="round" strokeWidth="1.3" />
                                </svg>
                              </div>
                            </div>
                            <div className="absolute h-[15px] left-[15px] top-[7.5px] w-0" data-name="Vector">
                              <div className="absolute inset-[-8.12%_-0.65px]">
                                <svg className="block size-full" fill="none" height="9.3" preserveAspectRatio="none" viewBox="0 0 1.3 9.3" width="1.3">
                                  <path d="M0.65 0.65L0.65 8.65" id="Vector" stroke="#AEB4C0" strokeLinecap="round" strokeWidth="1.3" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
                          <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#222] text-[16px] whitespace-nowrap">{is6 ? "테슬라 최근 기업 정보" : prop1 === "4" ? "테슬라 최근 기업 정보와 주가를 분석하고 요약해줘" : ""}</p>
                        </div>
                        <Icon className="bg-[#2c66ff] relative rounded-[1234px] shadow-[0px_5px_7px_0px_rgba(0,60,220,0.34)] shrink-0 size-[40px]" />
                      </div>
                    </div>
                    <div className={`absolute contents top-[23px] ${is6 ? "left-[50px]" : "left-[370px]"}`}>
                      <div className={`absolute bg-[#2c66ff] h-[20px] rounded-[10px] top-[25px] w-[2px] ${is6 ? "left-[50px]" : "left-[370px]"}`} data-name="cursor" />
                      <div className={`absolute h-[26px] top-[23px] w-[208px] ${is6 ? "bg-gradient-to-r from-[#f3f6fa] from-[65%] left-[54px] to-[rgba(255,255,255,0)]" : "bg-[rgba(255,255,255,0.1)] left-[374px]"}`} />
                    </div>
                  </div>
                  <div aria-hidden className="absolute border-2 border-[#2d65ff] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_12px_30px_-4px_rgba(56,96,143,0.19)]" />
                </div>
              </div>
            )}
            {is6 && (
              <div className="content-stretch flex flex-col gap-[32px] items-center relative shrink-0" data-name="Component 391/4">
                <div className="content-stretch flex gap-[8px] items-center justify-center relative shrink-0" data-name="Component 420">
                  <div className="relative shrink-0 size-[80px]" data-name="Sparkles Loop Loader ai 1">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgSparklesLoopLoaderAi1} />
                  </div>
                  <p className="[word-break:break-word] bg-clip-text font-['Pretendard_Variable:ExtraBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[32px] text-[transparent] whitespace-pre" style={{ backgroundImage: "linear-gradient(90deg, rgb(41, 54, 87) 0%, rgb(41, 54, 87) 100%), linear-gradient(90deg, rgb(41, 54, 87) 0%, rgb(117, 170, 255) 25%, rgb(85, 66, 255) 64.906%)" }}>{`KEC조항에 대해  무엇이든 물어보세요`}</p>
                </div>
                <div className="bg-[rgba(255,255,255,0.87)] relative rounded-[24px] shrink-0 w-[760px]" data-name="chat-input">
                  <div className="content-stretch flex flex-col items-start overflow-clip p-[16px] relative rounded-[inherit] size-full">
                    <div className="content-stretch flex flex-col items-end relative shrink-0 w-full" data-name="Input">
                      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="top-area">
                        <div className="overflow-clip relative shrink-0 size-[30px]" data-name="icon/plus">
                          <div className="absolute contents left-[7.5px] top-[7.5px]" data-name="plus">
                            <div className="absolute h-0 left-[7.5px] top-[15px] w-[15px]" data-name="Vector">
                              <div className="absolute inset-[-0.65px_-8.12%]">
                                <svg className="block size-full" fill="none" height="1.3" preserveAspectRatio="none" viewBox="0 0 9.3 1.3" width="9.3">
                                  <path d="M0.65 0.65H8.65" id="Vector" stroke="#AEB4C0" strokeLinecap="round" strokeWidth="1.3" />
                                </svg>
                              </div>
                            </div>
                            <div className="absolute h-[15px] left-[15px] top-[7.5px] w-0" data-name="Vector">
                              <div className="absolute inset-[-8.12%_-0.65px]">
                                <svg className="block size-full" fill="none" height="9.3" preserveAspectRatio="none" viewBox="0 0 1.3 9.3" width="1.3">
                                  <path d="M0.65 0.65L0.65 8.65" id="Vector" stroke="#AEB4C0" strokeLinecap="round" strokeWidth="1.3" />
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative">
                          <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#222] text-[16px] whitespace-nowrap">테슬라 최근 기업 정보와 주가를 분석하고 요약해줘</p>
                          <div className="bg-[#1c1f26] h-[18px] opacity-0 relative shrink-0 w-px" data-name="cursor" />
                        </div>
                        <Icon className="bg-[#2c66ff] relative rounded-[1234px] shadow-[0px_5px_7px_0px_rgba(0,60,220,0.34)] shrink-0 size-[40px]" />
                        {is6 && (
                          <div className="bg-[#c6cfdc] relative rounded-[1234px] shrink-0 size-[40px]" data-name="icon">
                            <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
                              <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
                                <div className="overflow-clip relative shrink-0 size-[24px]" data-name="line/Arrow_up">
                                  <div className="absolute h-[16.5px] left-[5.63px] top-[3.75px] w-[12.375px]">
                                    <div className="absolute inset-[-3.7%_-7.58%_-5.68%_-7.58%]">
                                      <svg className="block size-full" fill="none" height="18.048" preserveAspectRatio="none" viewBox="0 0 14.25 18.048" width="14.25">
                                        <g id="Group 2116931749">
                                          <path d="M7.3125 17.1105V1.36053" id="Vector 1194233812" stroke="white" strokeLinecap="round" strokeWidth="1.875" />
                                          <path d={svgPaths.p2674f570} id="Vector 1194233811" stroke="white" strokeLinecap="round" strokeWidth="1.875" />
                                        </g>
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div aria-hidden className={is6 ? "absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[24px] shadow-[0px_12px_30px_-4px_rgba(56,96,143,0.19)]" : undefined} />
                </div>
              </div>
            )}
          </div>
          {["1", "베리언트7", "2", "4", "베리언트6", "베리언트6"].includes(prop1) && (
            <div className="content-stretch flex flex-col gap-[14px] items-center relative shrink-0 w-full" data-name="btm">
              <div className="content-stretch flex items-center py-[8px] relative rounded-[10px] shrink-0 w-full" data-name="title-area">
                <div className="relative shrink-0" data-name="heading-text">
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[6px] items-center relative size-full">
                      <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#293657] text-[18px] whitespace-nowrap">
                        <p className="leading-[normal]">이번 달 질문 Top 3</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0 w-full" data-name="history-box-list">
                <div className={`bg-gradient-to-b relative rounded-[24px] ${is2Or4Or6Or6 ? "content-stretch flex flex-col from-[rgba(255,255,255,0.82)] gap-[4px] items-start justify-center p-[24px] shrink-0 to-[rgba(255,255,255,0.34)] w-[320px]" : "flex-[1_0_0] from-[rgba(255,255,255,0.77)] min-w-px to-[rgba(255,255,255,0.32)]"}`} data-name="prompt-card-1">
                  <div aria-hidden className={`absolute border-[1.8px] border-solid inset-0 pointer-events-none rounded-[24px] ${is2Or4Or6Or6 ? "border-[#668cff] shadow-[0px_1px_28px_0px_rgba(56,96,143,0.23)]" : "border-white shadow-[0px_2px_10px_0px_rgba(174,180,192,0.36)]"}`} />
                  {is2Or4Or6Or6 && (
                    <>
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="head">
                        <div className="bg-white content-stretch flex h-[30px] items-center justify-center px-[8px] relative rounded-[8px] shrink-0" data-name="rank-badge">
                          <div aria-hidden className="absolute border border-[#e2e4e9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
                          <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4a4f5c] text-[15px] text-center whitespace-nowrap">701</p>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[30px]" data-name="rank-badge">
                          <div aria-hidden className="absolute border border-[#e2e4e9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
                          <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4a4f5c] text-[15px] text-center whitespace-nowrap">1</p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center justify-end relative rounded-[16px] shrink-0 w-full" data-name="item">
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative rounded-[6px]" data-name="text">
                          <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] h-[81px] justify-center leading-[0] not-italic relative shrink-0 text-[#4a4f5c] text-[16px] w-full">
                            <p className="leading-[1.4]">발전용 수력설비는 기술기준 어떻게 검사해야 하나요?</p>
                          </div>
                        </div>
                        <Icon className="bg-[#2c66ff] relative rounded-[1234px] shadow-[0px_5px_7px_0px_rgba(0,60,220,0.34)] shrink-0 size-[40px]" />
                      </div>
                    </>
                  )}
                  {["1", "베리언트7"].includes(prop1) && (
                    <div className="flex flex-col justify-center size-full">
                      <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[24px] relative size-full">
                        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="head">
                          <div className="bg-white content-stretch flex h-[30px] items-center justify-center px-[8px] relative rounded-[8px] shrink-0" data-name="rank-badge">
                            <div aria-hidden className="absolute border border-[#e2e4e9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
                            <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4a4f5c] text-[15px] text-center whitespace-nowrap">701</p>
                          </div>
                          <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[30px]" data-name="rank-badge">
                            <div aria-hidden className="absolute border border-[#e2e4e9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
                            <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4a4f5c] text-[15px] text-center whitespace-nowrap">1</p>
                          </div>
                        </div>
                        <div className="content-stretch flex gap-[8px] items-center justify-end relative rounded-[16px] shrink-0 w-full" data-name="item">
                          <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative rounded-[6px]" data-name="text">
                            <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] h-[81px] justify-center leading-[0] not-italic relative shrink-0 text-[#4a4f5c] text-[16px] w-full">
                              <p className="leading-[1.4]">발전용 수력설비는 기술기준 어떻게 검사해야 하나요?</p>
                            </div>
                          </div>
                          <Icon className="bg-[#c6cfdc] relative rounded-[1234px] shrink-0 size-[40px]" property1="default" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="bg-gradient-to-b flex-[1_0_0] from-[rgba(255,255,255,0.77)] min-w-px relative rounded-[24px] to-[rgba(255,255,255,0.32)]" data-name="prompt-card-1">
                  <div aria-hidden className="absolute border-[1.8px] border-solid border-white inset-0 pointer-events-none rounded-[24px] shadow-[0px_2px_10px_0px_rgba(174,180,192,0.36)]" />
                  <div className="flex flex-col justify-center size-full">
                    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[24px] relative size-full">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="head">
                        <div className="bg-white content-stretch flex h-[30px] items-center justify-center px-[8px] relative rounded-[8px] shrink-0" data-name="rank-badge">
                          <div aria-hidden className="absolute border border-[#e2e4e9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
                          <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4a4f5c] text-[15px] text-center whitespace-nowrap">130</p>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[30px]" data-name="rank-badge">
                          <div aria-hidden className="absolute border border-[#e2e4e9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
                          <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4a4f5c] text-[15px] text-center whitespace-nowrap">2</p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center justify-end relative rounded-[16px] shrink-0 w-full" data-name="item">
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative rounded-[6px]" data-name="text">
                          <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] h-[81px] justify-center leading-[0] not-italic relative shrink-0 text-[#4a4f5c] text-[16px] w-full">
                            <p className="leading-[1.4]">발전용 수력설비는 기술기준 어떻게 검사해야 하나요?</p>
                          </div>
                        </div>
                        <Icon className="bg-[#c6cfdc] relative rounded-[1234px] shrink-0 size-[40px]" property1="default" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-b flex-[1_0_0] from-[rgba(255,255,255,0.77)] min-w-px relative rounded-[24px] to-[rgba(255,255,255,0.32)]" data-name="prompt-card-1">
                  <div aria-hidden className="absolute border-[1.8px] border-solid border-white inset-0 pointer-events-none rounded-[24px] shadow-[0px_2px_10px_0px_rgba(174,180,192,0.36)]" />
                  <div className="flex flex-col justify-center size-full">
                    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[24px] relative size-full">
                      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="head">
                        <div className="bg-white content-stretch flex h-[30px] items-center justify-center px-[8px] relative rounded-[8px] shrink-0" data-name="rank-badge">
                          <div aria-hidden className="absolute border border-[#e2e4e9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
                          <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4a4f5c] text-[15px] text-center whitespace-nowrap">150</p>
                        </div>
                        <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[30px]" data-name="rank-badge">
                          <div aria-hidden className="absolute border border-[#e2e4e9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
                          <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4a4f5c] text-[15px] text-center whitespace-nowrap">3</p>
                        </div>
                      </div>
                      <div className="content-stretch flex gap-[8px] items-center justify-end relative rounded-[16px] shrink-0 w-full" data-name="item">
                        <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative rounded-[6px]" data-name="text">
                          <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] h-[81px] justify-center leading-[0] not-italic relative shrink-0 text-[#4a4f5c] text-[16px] w-full">
                            <p className="leading-[1.4]">발전용 수력설비는 기술기준 어떻게 검사해야 하나요?</p>
                          </div>
                        </div>
                        <Icon className="bg-[#c6cfdc] relative rounded-[1234px] shrink-0 size-[40px]" property1="default" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="absolute left-[838px] size-[40px] top-[154px]" data-name="mouse cursor-direct">
            <div className="absolute left-0 size-[40px] top-0" data-name="mouse cursor">
              <div className="absolute inset-[-5%_-30%_-55%_-30%]">
                <svg className="block size-full" fill="none" height="64" preserveAspectRatio="none" viewBox="0 0 64 64" width="64">
                  <g id="mouse cursor">
                    <g filter="url(#filter0_f_0_2214)" id="shadow">
                      <circle cx="32" cy="24.6641" fill="black" fillOpacity="0.2" r="20" />
                    </g>
                    <g filter="url(#filter1_di_0_2214)" id="cursor">
                      <circle cx="32" cy="22" fill="white" fillOpacity="0.5" r="20" shapeRendering="crispEdges" />
                      <circle cx="32" cy="22" r="19.6667" shapeRendering="crispEdges" stroke="#F0F0F0" strokeWidth="0.666667" />
                    </g>
                  </g>
                  <defs>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="46.6667" id="filter0_f_0_2214" width="46.6667" x="8.66667" y="1.33073">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                      <feGaussianBlur result="effect1_foregroundBlur_0_2214" stdDeviation="1.66667" />
                    </filter>
                    <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="64" id="filter1_di_0_2214" width="64" x="0" y="0">
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feOffset dy="10" />
                      <feGaussianBlur stdDeviation="6" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                      <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_0_2214" />
                      <feBlend in="SourceGraphic" in2="effect1_dropShadow_0_2214" mode="normal" result="shape" />
                      <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                      <feMorphology in="SourceAlpha" operator="erode" radius="1.33333" result="effect2_innerShadow_0_2214" />
                      <feOffset />
                      <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic" />
                      <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0" />
                      <feBlend in2="shape" mode="normal" result="effect2_innerShadow_0_2214" />
                    </filter>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col gap-[14px] items-center relative shrink-0 w-full" data-name="btm">
            <div className="content-stretch flex items-center py-[8px] relative rounded-[10px] shrink-0 w-full" data-name="title-area">
              <div className="relative shrink-0" data-name="heading-text">
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[6px] items-center relative size-full">
                    <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#293657] text-[18px] whitespace-nowrap">
                      <p className="leading-[normal]">이번 달 질문 Top 3</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0 w-full" data-name="history-box-list">
              <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.82)] gap-[4px] items-start justify-center p-[24px] relative rounded-[24px] shrink-0 to-[rgba(255,255,255,0.34)] w-[320px]" data-name="prompt-card-1">
                <div aria-hidden className="absolute border-[#668cff] border-[1.8px] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_1px_28px_0px_rgba(56,96,143,0.23)]" />
                <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="head">
                  <div className="bg-white content-stretch flex h-[30px] items-center justify-center px-[8px] relative rounded-[8px] shrink-0" data-name="rank-badge">
                    <div aria-hidden className="absolute border border-[#e2e4e9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
                    <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4a4f5c] text-[15px] text-center whitespace-nowrap">701</p>
                  </div>
                  <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[30px]" data-name="rank-badge">
                    <div aria-hidden className="absolute border border-[#e2e4e9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
                    <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4a4f5c] text-[15px] text-center whitespace-nowrap">1</p>
                  </div>
                </div>
                <div className="content-stretch flex gap-[8px] items-center justify-end relative rounded-[16px] shrink-0 w-full" data-name="item">
                  <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative rounded-[6px]" data-name="text">
                    <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] h-[81px] justify-center leading-[0] not-italic relative shrink-0 text-[#4a4f5c] text-[16px] w-full">
                      <p className="leading-[1.4]">발전용 수력설비는 기술기준 어떻게 검사해야 하나요?</p>
                    </div>
                  </div>
                  <Icon className="bg-[#2c66ff] relative rounded-[1234px] shadow-[0px_5px_7px_0px_rgba(0,60,220,0.34)] shrink-0 size-[40px]" />
                </div>
              </div>
              <div className="bg-gradient-to-b flex-[1_0_0] from-[rgba(255,255,255,0.77)] min-w-px relative rounded-[24px] to-[rgba(255,255,255,0.32)]" data-name="prompt-card-1">
                <div aria-hidden className="absolute border-[1.8px] border-solid border-white inset-0 pointer-events-none rounded-[24px] shadow-[0px_2px_10px_0px_rgba(174,180,192,0.36)]" />
                <div className="flex flex-col justify-center size-full">
                  <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[24px] relative size-full">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="head">
                      <div className="bg-white content-stretch flex h-[30px] items-center justify-center px-[8px] relative rounded-[8px] shrink-0" data-name="rank-badge">
                        <div aria-hidden className="absolute border border-[#e2e4e9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
                        <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4a4f5c] text-[15px] text-center whitespace-nowrap">130</p>
                      </div>
                      <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[30px]" data-name="rank-badge">
                        <div aria-hidden className="absolute border border-[#e2e4e9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
                        <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4a4f5c] text-[15px] text-center whitespace-nowrap">2</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center justify-end relative rounded-[16px] shrink-0 w-full" data-name="item">
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative rounded-[6px]" data-name="text">
                        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] h-[81px] justify-center leading-[0] not-italic relative shrink-0 text-[#4a4f5c] text-[16px] w-full">
                          <p className="leading-[1.4]">발전용 수력설비는 기술기준 어떻게 검사해야 하나요?</p>
                        </div>
                      </div>
                      <Icon className="bg-[#c6cfdc] relative rounded-[1234px] shrink-0 size-[40px]" property1="default" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-b flex-[1_0_0] from-[rgba(255,255,255,0.77)] min-w-px relative rounded-[24px] to-[rgba(255,255,255,0.32)]" data-name="prompt-card-1">
                <div aria-hidden className="absolute border-[1.8px] border-solid border-white inset-0 pointer-events-none rounded-[24px] shadow-[0px_2px_10px_0px_rgba(174,180,192,0.36)]" />
                <div className="flex flex-col justify-center size-full">
                  <div className="content-stretch flex flex-col gap-[4px] items-start justify-center p-[24px] relative size-full">
                    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="head">
                      <div className="bg-white content-stretch flex h-[30px] items-center justify-center px-[8px] relative rounded-[8px] shrink-0" data-name="rank-badge">
                        <div aria-hidden className="absolute border border-[#e2e4e9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
                        <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4a4f5c] text-[15px] text-center whitespace-nowrap">150</p>
                      </div>
                      <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex items-center justify-center px-[8px] relative rounded-[8px] shrink-0 size-[30px]" data-name="rank-badge">
                        <div aria-hidden className="absolute border border-[#e2e4e9] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
                        <p className="[word-break:break-word] font-['Pretendard_Variable:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#4a4f5c] text-[15px] text-center whitespace-nowrap">3</p>
                      </div>
                    </div>
                    <div className="content-stretch flex gap-[8px] items-center justify-end relative rounded-[16px] shrink-0 w-full" data-name="item">
                      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-w-px relative rounded-[6px]" data-name="text">
                        <div className="[word-break:break-word] flex flex-col font-['Pretendard_Variable:Medium',sans-serif] h-[81px] justify-center leading-[0] not-italic relative shrink-0 text-[#4a4f5c] text-[16px] w-full">
                          <p className="leading-[1.4]">발전용 수력설비는 기술기준 어떻게 검사해야 하나요?</p>
                        </div>
                      </div>
                      <Icon className="bg-[#c6cfdc] relative rounded-[1234px] shrink-0 size-[40px]" property1="default" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame6({ className }: { className?: string }) {
  return (
    <div className={className || "bg-[#89b2ff] h-[20px] relative rounded-[4px]"}>
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[2px] relative size-full">
          <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.2px] w-full">1</p>
        </div>
      </div>
    </div>
  );
}

function Bg() {
  return (
    <div className="absolute h-[1024px] left-0 top-0 w-[1920px]" data-name="bg">
      <div className="absolute h-[1024px] left-0 right-0 top-0" style={{ backgroundImage: "linear-gradient(152.54448108528413deg, rgb(212, 223, 241) 62.32%, rgb(255, 255, 255) 101.43%)" }} data-name="Gradient Background 1" />
      <div className="absolute h-[1147px] left-[283px] overflow-clip right-[-48px] top-[-259px]" data-name="Gradients - Light">
        <div className="absolute flex h-[914.429px] items-center justify-center left-[24px] top-[60px] w-[956.584px]">
          <div className="flex-none rotate-[-34.05deg]">
            <div className="h-[595.324px] relative w-[752.223px]">
              <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
                <g id="Vector 7" />
              </svg>
            </div>
          </div>
        </div>
        <div className="absolute h-[585px] left-[953px] top-[-361px] w-[693px]">
          <div className="absolute inset-[-42.74%_-36.08%]">
            <svg className="block size-full" fill="none" height="1085" preserveAspectRatio="none" viewBox="0 0 1193 1085" width="1193">
              <g filter="url(#filter0_f_0_2352)" id="Vector 6">
                <path clipRule="evenodd" d={svgPaths.p3c499380} fill="#D6CBFF" fillOpacity="0.7" fillRule="evenodd" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1085" id="filter0_f_0_2352" width="1193" x="-1.61849e-08" y="1.34988e-07">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_0_2352" stdDeviation="125" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute h-[856px] left-[283px] top-[-401px] w-[774px]">
          <div className="absolute inset-[-29.21%_-32.3%]">
            <svg className="block size-full" fill="none" height="1356" preserveAspectRatio="none" viewBox="0 0 1274 1356" width="1274">
              <g filter="url(#filter0_f_0_2252)" id="Vector 5">
                <path clipRule="evenodd" d={svgPaths.p3e7bd700} fill="#7BCCFF" fillOpacity="0.1" fillRule="evenodd" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1356" id="filter0_f_0_2252" width="1274" x="2.38135e-07" y="9.52247e-09">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_0_2252" stdDeviation="125" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="absolute h-[556px] left-[545px] top-[455px] w-[713px]">
          <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
            <g id="Vector 4" />
          </svg>
        </div>
        <div className="absolute h-[754px] left-[1068px] top-[140px] w-[806px]">
          <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
            <g id="Vector 3" />
          </svg>
        </div>
        <div className="absolute h-[716.328px] left-[873px] top-[-379px] w-[565.922px]">
          <div className="absolute inset-[-34.9%_-44.18%]">
            <svg className="block size-full" fill="none" height="1216.33" preserveAspectRatio="none" viewBox="0 0 1065.92 1216.33" width="1065.92">
              <g filter="url(#filter0_f_0_2349)" id="Vector 2">
                <path clipRule="evenodd" d={svgPaths.p1dad1300} fill="#CDBCFF" fillOpacity="0.5" fillRule="evenodd" />
              </g>
              <defs>
                <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1216.33" id="filter0_f_0_2349" width="1065.92" x="-1.04383e-08" y="1.44468e-10">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" />
                  <feGaussianBlur result="effect1_foregroundBlur_0_2349" stdDeviation="125" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarLeft() {
  return (
    <div className="absolute inset-[8.33%]" data-name="sidebar-left">
      <svg className="absolute block inset-0 size-full" fill="none" height="16.6667" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667" width="16.6667">
        <g id="sidebar-left">
          <path d={svgPaths.p2c054500} fill="#A3B1C5" id="Vector" />
          <path d={svgPaths.p205cb680} fill="#A3B1C5" id="Vector_2" />
          <g id="Vector_3" opacity="0" />
        </g>
      </svg>
    </div>
  );
}

function IconSideNavPanel() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[20px]" data-name="icon/side-nav/panel">
      <SidebarLeft />
    </div>
  );
}

function ListArea() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="list-area">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard_Variable:Bold',sans-serif] leading-[1.6] min-w-px not-italic relative text-[#293657] text-[15px] tracking-[-0.2px] whitespace-pre-wrap">{`KEC  Navigator`}</p>
      <IconSideNavPanel />
    </div>
  );
}

function Component2() {
  return (
    <div className="relative rounded-[12px] shrink-0 w-full" data-name="Component 10">
      <div className="content-stretch flex flex-col items-start p-[8px] relative size-full">
        <ListArea />
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 size-[24px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="24" preserveAspectRatio="none" viewBox="0 0 24 24" width="24">
        <g id="Frame 2147237083">
          <path d={svgPaths.p444f700} fill="white" id="Vector" />
          <foreignObject height="17.1429" width="17.1429" x="6" y="4.28571">
            <div style={{ backdropFilter: "blur(1.29px)", clipPath: "url(#bgblur_0_0_2339_clip_path)", height: "100%", width: "100%" }} />
          </foreignObject>
          <g id="Subtract" data-figma-bg-blur-radius="2.57143">
            <mask fill="white" id="path-2-inside-1_0_2339">
              <path d={svgPaths.p3e37d680} />
            </mask>
            <path d={svgPaths.p3e37d680} fill="#9CB8FF" fillOpacity="0.6" />
            <path d={svgPaths.p2eee8700} fill="url(#paint0_linear_0_2339)" mask="url(#path-2-inside-1_0_2339)" />
          </g>
          <path d={svgPaths.p28529288} fill="white" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="bgblur_0_0_2339_clip_path" transform="translate(-6 -4.28571)">
            <path d={svgPaths.p3e37d680} />
          </clipPath>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_2339" x1="10.2857" x2="20.1429" y1="8.57143" y2="18.8571">
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ListArea1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full" data-name="list-area">
      <Frame5 />
      <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[15px] text-white tracking-[-0.2px] whitespace-nowrap">Chat</p>
    </div>
  );
}

function Component1() {
  return (
    <div className="content-stretch drop-shadow-[4px_6px_7px_rgba(83,103,254,0.34)] flex flex-col items-start justify-center p-[8px] relative rounded-[999px] shrink-0 w-[225px]" style={{ backgroundImage: "linear-gradient(135.34807249951717deg, rgb(44, 102, 255) 9.767%, rgb(89, 83, 254) 92.435%)" }} data-name="Component 7">
      <ListArea1 />
    </div>
  );
}

function System() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="system">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="system">
          <path d={svgPaths.p297c0740} id="Rectangle 2 copy 23" stroke="#ADB2B9" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame6 className="bg-[#89b2ff] h-[20px] relative rounded-[4px] shrink-0" />
      <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#293657] text-[15px] tracking-[-0.2px] whitespace-nowrap">공통사항</p>
    </div>
  );
}

function ListArea2() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="list-area">
      <System />
      <Frame7 />
    </div>
  );
}

function Component4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center py-[4px] relative rounded-[12px] shrink-0 w-full" data-name="Component 26">
      <ListArea2 />
    </div>
  );
}

function System1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="system">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="system">
          <path d={svgPaths.p2cb9ad80} id="Rectangle 2 copy 23" stroke="#ADB2B9" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="bg-[#89b2ff] h-[20px] relative rounded-[4px] shrink-0">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="content-stretch flex flex-col items-center justify-center px-[8px] py-[2px] relative size-full">
            <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[12px] text-center text-white tracking-[-0.2px] w-full">100</p>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#293657] text-[15px] tracking-[-0.2px] whitespace-nowrap">총칙</p>
    </div>
  );
}

function ListArea3() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="list-area">
      <System1 />
      <Frame8 />
    </div>
  );
}

function Component11() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[12px] py-[4px] relative rounded-[12px] shrink-0 w-full" data-name="Component 33">
      <ListArea3 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame6 className="bg-[#89b2ff] h-[20px] relative rounded-[4px] shrink-0" />
      <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#293657] text-[15px] tracking-[-0.2px] whitespace-nowrap">목적</p>
    </div>
  );
}

function ListArea4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="list-area">
      <Frame9 />
    </div>
  );
}

function Component12() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center pl-[48px] py-[4px] relative rounded-[12px] shrink-0 w-full" data-name="Component 34">
      <ListArea4 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
      <Component4 />
      <Component11 />
      <Component12 />
    </div>
  );
}

function System2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="system">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="system">
          <path d={svgPaths.p297c0740} id="Rectangle 2 copy 23" stroke="#ADB2B9" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame6 className="bg-[#89b2ff] h-[20px] relative rounded-[4px] shrink-0" />
      <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#293657] text-[15px] tracking-[-0.2px] whitespace-nowrap">저압 전기설비</p>
    </div>
  );
}

function ListArea5() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="list-area">
      <System2 />
      <Frame10 />
    </div>
  );
}

function Component5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center py-[4px] relative rounded-[12px] shrink-0 w-full" data-name="Component 27">
      <ListArea5 />
    </div>
  );
}

function System3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="system">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="system">
          <path d={svgPaths.p297c0740} id="Rectangle 2 copy 23" stroke="#ADB2B9" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame6 className="bg-[#89b2ff] h-[20px] relative rounded-[4px] shrink-0" />
      <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#293657] text-[15px] tracking-[-0.2px] whitespace-nowrap">고압특고압 전기설비</p>
    </div>
  );
}

function ListArea6() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="list-area">
      <System3 />
      <Frame12 />
    </div>
  );
}

function Component6() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center py-[4px] relative rounded-[12px] shrink-0 w-full" data-name="Component 28">
      <ListArea6 />
    </div>
  );
}

function System4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="system">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="system">
          <path d={svgPaths.p297c0740} id="Rectangle 2 copy 23" stroke="#ADB2B9" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame6 className="bg-[#89b2ff] h-[20px] relative rounded-[4px] shrink-0" />
      <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#293657] text-[15px] tracking-[-0.2px] whitespace-nowrap">전기철도설비</p>
    </div>
  );
}

function ListArea7() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="list-area">
      <System4 />
      <Frame13 />
    </div>
  );
}

function Component7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center py-[4px] relative rounded-[12px] shrink-0 w-full" data-name="Component 29">
      <ListArea7 />
    </div>
  );
}

function System5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="system">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="system">
          <path d={svgPaths.p297c0740} id="Rectangle 2 copy 23" stroke="#ADB2B9" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame6 className="bg-[#89b2ff] h-[20px] relative rounded-[4px] shrink-0" />
      <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#293657] text-[15px] tracking-[-0.2px] whitespace-nowrap">분산형전원설비</p>
    </div>
  );
}

function ListArea8() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="list-area">
      <System5 />
      <Frame14 />
    </div>
  );
}

function Component8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center py-[4px] relative rounded-[12px] shrink-0 w-full" data-name="Component 30">
      <ListArea8 />
    </div>
  );
}

function System6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="system">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="system">
          <path d={svgPaths.p297c0740} id="Rectangle 2 copy 23" stroke="#ADB2B9" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame6 className="bg-[#89b2ff] h-[20px] relative rounded-[4px] shrink-0" />
      <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#293657] text-[15px] tracking-[-0.2px] whitespace-nowrap">발전용 화력설비</p>
    </div>
  );
}

function ListArea9() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="list-area">
      <System6 />
      <Frame15 />
    </div>
  );
}

function Component9() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center py-[4px] relative rounded-[12px] shrink-0 w-full" data-name="Component 31">
      <ListArea9 />
    </div>
  );
}

function System7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="system">
      <svg className="absolute block inset-0 size-full" fill="none" height="20" preserveAspectRatio="none" viewBox="0 0 20 20" width="20">
        <g id="system">
          <path d={svgPaths.p297c0740} id="Rectangle 2 copy 23" stroke="#ADB2B9" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame6 className="bg-[#89b2ff] h-[20px] relative rounded-[4px] shrink-0" />
      <p className="[word-break:break-word] font-['Pretendard_Variable:Medium',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#293657] text-[15px] tracking-[-0.2px] whitespace-nowrap">발전용 수력설비</p>
    </div>
  );
}

function ListArea10() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0 w-full" data-name="list-area">
      <System7 />
      <Frame16 />
    </div>
  );
}

function Component10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center py-[4px] relative rounded-[12px] shrink-0 w-full" data-name="Component 32">
      <ListArea10 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame11 />
      <Component5 />
      <Component6 />
      <Component7 />
      <Component8 />
      <Component9 />
      <Component10 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <p className="[word-break:break-word] font-['Pretendard_Variable:Regular',sans-serif] leading-[1.6] not-italic relative shrink-0 text-[#848d9a] text-[13px] tracking-[-0.2px] w-full">규정 목차 트리</p>
      <Frame4 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px relative w-full">
      <Component1 />
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px relative w-full">
      <Component2 />
      <Frame3 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px pb-[12px] pt-[16px] px-[16px] relative rounded-[138px] w-full" data-name="text">
      <Frame1 />
    </div>
  );
}

function Text1() {
  return <div className="absolute h-[904px] left-0 rounded-[137.143px] top-0 w-[260px]" data-name="text" />;
}

function SideNavArea() {
  return (
    <div className="bg-gradient-to-b from-[rgba(255,255,255,0)] h-[26px] opacity-0 overflow-clip relative shrink-0 to-white w-full" data-name="side-nav-area">
      <Text1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="relative shrink-0 size-[32px]">
      <svg className="absolute block inset-0 size-full" fill="none" height="32" preserveAspectRatio="none" viewBox="0 0 32 32" width="32">
        <g id="Frame 2147224327">
          <rect fill="url(#paint0_linear_0_2346)" fillOpacity="0.7" height="32" rx="16" width="32" />
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.pe628b00} fill="url(#paint1_linear_0_2346)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p23044a00} fill="url(#paint2_linear_0_2346)" fillRule="evenodd" />
          </g>
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_2346" x1="3.33333" x2="35.3333" y1="1.98931e-06" y2="36">
            <stop stopColor="#F9EEFF" />
            <stop offset="1" stopColor="#C5EBFF" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_2346" x1="7.04367" x2="25.6205" y1="9.52414" y2="9.86871">
            <stop stopColor="#32DAFF" />
            <stop offset="1" stopColor="#003CDC" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_2346" x1="7.04367" x2="25.6205" y1="9.52414" y2="9.86871">
            <stop stopColor="#32DAFF" />
            <stop offset="1" stopColor="#003CDC" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function ListArea11() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="list-area">
      <Frame2 />
      <p className="[word-break:break-word] flex-[1_0_0] font-['Pretendard_Variable:SemiBold',sans-serif] leading-[1.6] min-w-px not-italic relative text-[#293657] text-[16px] tracking-[-0.2px]">KEC</p>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="icon/logout">
        <div className="absolute inset-[16.67%_12.5%]" data-name="logout">
          <div className="absolute inset-[-4.87%_-4.33%]">
            <svg className="block size-full" fill="none" height="14.6333" preserveAspectRatio="none" viewBox="0 0 16.3 14.6333" width="16.3">
              <path d={svgPaths.p14fe2dc0} id="logout" stroke="#AEB4C0" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.3" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Component3() {
  return (
    <div className="bg-white relative rounded-bl-[24px] rounded-br-[24px] shrink-0 w-full" data-name="Component 18">
      <div aria-hidden className="absolute border-[#efefef] border-solid border-t inset-0 pointer-events-none rounded-bl-[24px] rounded-br-[24px]" />
      <div className="flex flex-col justify-center size-full">
        <div className="content-stretch flex flex-col items-start justify-center p-[16px] relative size-full">
          <ListArea11 />
        </div>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="김삼성">
      <SideNavArea />
      <Component3 />
    </div>
  );
}

function Menu() {
  return (
    <div className="bg-gradient-to-b content-stretch flex flex-col from-[rgba(255,255,255,0.8)] h-[984px] items-start justify-between relative rounded-[24px] shrink-0 to-[rgba(255,255,255,0.46)] w-[260px]" data-name="menu">
      <div aria-hidden className="absolute border-[1.5px] border-solid border-white inset-0 pointer-events-none rounded-[24px] shadow-[0px_12px_60px_0px_rgba(56,96,143,0.5)]" />
      <Text />
      <Component />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="icon_16">
      <svg className="absolute block inset-0 size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18 18" width="18">
        <g clipPath="url(#clip0_0_2245)" id="icon_16">
          <g id="Vector" />
          <g id="magnifying-glass--glass-search-magnifying">
            <path d={svgPaths.p2fede000} id="Vector_2" stroke="#848D9A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
            <path d="M15.268 15.268L11.893 11.893" id="Vector_3" stroke="#848D9A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.125" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_0_2245">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function RankBadge() {
  return (
    <div className="bg-[rgba(255,255,255,0.68)] content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="rank-badge">
      <div aria-hidden className="absolute border-[1.3px] border-solid border-white inset-[-0.65px] pointer-events-none rounded-[12.65px] shadow-[0px_4px_9px_0px_rgba(0,0,0,0.08)]" />
      <Icon1 />
    </div>
  );
}

function Component13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] items-start left-[1626px] top-0" data-name="Component 377">
      <RankBadge />
    </div>
  );
}

function Center() {
  return (
    <div className="flex-[1_0_0] h-full min-w-px relative" data-name="center">
      <div className="flex flex-col items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-center justify-center px-[50px] relative size-full">
          <Component14 className="relative shrink-0 w-[1000px]" />
          <Component13 />
        </div>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[3.57%_3.57%_3.57%_3.58%]" data-name="Group">
      <div className="absolute inset-[-3.85%]">
        <svg className="block size-full" fill="none" height="18" preserveAspectRatio="none" viewBox="0 0 18.0001 18" width="18.0001">
          <g id="Group">
            <path d={svgPaths.p367aa200} fill="#848D9A" id="Vector" />
            <path d="M9.00008 0.642857V1.92857" id="Vector_2" stroke="#848D9A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.28571" />
            <path d="M9.00008 16.0714V17.3571" id="Vector_3" stroke="#848D9A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.28571" />
            <path d="M17.3573 9.00031H16.0715" id="Vector_4" stroke="#848D9A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.28571" />
            <path d="M1.92857 9.00031H0.642857" id="Vector_5" stroke="#848D9A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.28571" />
            <path d={svgPaths.p13793780} id="Vector_6" stroke="#848D9A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.28571" />
            <path d={svgPaths.pc390300} id="Vector_7" stroke="#848D9A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.28571" />
            <path d={svgPaths.p3e73bee0} id="Vector_8" stroke="#848D9A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.28571" />
            <path d={svgPaths.p2e91bf90} id="Vector_9" stroke="#848D9A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.28571" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function InterfaceLightingBrightness4BrightAdjustBrightnessAdjustmentSunRaiseControlsDotStreamlineCore() {
  return (
    <div className="overflow-clip relative shrink-0 size-[18px]" data-name="interface-lighting-brightness-4--bright-adjust-brightness-adjustment-sun-raise-controls-dot--Streamline-Core">
      <Group />
    </div>
  );
}

function RankBadge1() {
  return (
    <div className="bg-[rgba(255,255,255,0.68)] content-stretch flex flex-col items-center justify-center relative rounded-[12px] shrink-0 size-[40px]" data-name="rank-badge">
      <div aria-hidden className="absolute border-[1.3px] border-solid border-white inset-[-0.65px] pointer-events-none rounded-[12.65px] shadow-[0px_4px_9px_0px_rgba(0,0,0,0.08)]" />
      <InterfaceLightingBrightness4BrightAdjustBrightnessAdjustmentSunRaiseControlsDotStreamlineCore />
    </div>
  );
}

function ContainerMain() {
  return (
    <div className="absolute content-stretch flex h-[1024px] items-start justify-between left-0 p-[20px] right-0 top-0" data-name="container-main">
      <Menu />
      <Center />
      <div className="absolute left-[1860px] top-[964px]" data-name="Component 377">
        <div className="content-stretch flex flex-col gap-[12px] items-start relative size-full">
          <RankBadge1 />
        </div>
      </div>
    </div>
  );
}

export default function A1Light() {
  return (
    <div className="bg-white relative size-full" data-name="A-1_디폴트_light">
      <Bg />
      <ContainerMain />
    </div>
  );
}