import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import sparklesLottie from "./imports/Zoom_AI_Visual.json";
import svgPaths from "@/imports/A1디폴트Light/svg-4y01c2e055";
export function OriginalLottie() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const anim = lottie.loadAnimation({
      container: ref.current, renderer: "svg", loop: true, autoplay: true,
      animationData: sparklesLottie,
    });
    return () => anim.destroy();
  }, []);
  return <div ref={ref} className="relative shrink-0" style={{ width: 40, height: 40 }} />;
}

export function OriginalBackground({ dark }: { dark: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      <div className="absolute inset-0 transition-all duration-500" style={{
        backgroundImage: dark
          ? "linear-gradient(152.54deg, rgb(10,14,30) 0%, rgb(18,24,48) 100%)"
          : "linear-gradient(152.54deg, rgb(212, 223, 241) 62.32%, rgb(255, 255, 255) 101.43%)"
      }} />
      <div className="absolute blob-1 transition-opacity duration-500" style={{ height: "585px", right: "-80px", top: "-361px", width: "693px", opacity: dark ? 0.15 : 0.7 }}>
        <div className="absolute inset-[-42.74%_-36.08%]">
          <svg fill="none" height="1085" preserveAspectRatio="none" viewBox="0 0 1193 1085" width="1193" className="block size-full">
            <g filter="url(#f1)"><path clipRule="evenodd" d={svgPaths.p3c499380} fill="#D6CBFF" fillOpacity="0.7" fillRule="evenodd" /></g>
            <defs><filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1085" id="f1" width="1193" x="0" y="0"><feFlood floodOpacity="0" result="BackgroundImageFix" /><feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" /><feGaussianBlur result="effect1" stdDeviation="125" /></filter></defs>
          </svg>
        </div>
      </div>
      <div className="absolute blob-2 transition-opacity duration-500" style={{ height: "856px", left: "33%", top: "-401px", width: "774px", opacity: dark ? 0.08 : 1 }}>
        <div className="absolute inset-[-29.21%_-32.3%]">
          <svg fill="none" height="1356" preserveAspectRatio="none" viewBox="0 0 1274 1356" width="1274" className="block size-full">
            <g filter="url(#f2)"><path clipRule="evenodd" d={svgPaths.p3e7bd700} fill="#7BCCFF" fillOpacity="0.1" fillRule="evenodd" /></g>
            <defs><filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1356" id="f2" width="1274" x="0" y="0"><feFlood floodOpacity="0" result="BackgroundImageFix" /><feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" /><feGaussianBlur result="effect2" stdDeviation="125" /></filter></defs>
          </svg>
        </div>
      </div>
      <div className="absolute blob-3 transition-opacity duration-500" style={{ height: "716px", right: "10%", top: "-379px", width: "566px", opacity: dark ? 0.1 : 1 }}>
        <div className="absolute inset-[-34.9%_-44.18%]">
          <svg fill="none" height="1216.33" preserveAspectRatio="none" viewBox="0 0 1065.92 1216.33" width="1065.92" className="block size-full">
            <g filter="url(#f3)"><path clipRule="evenodd" d={svgPaths.p1dad1300} fill="#CDBCFF" fillOpacity="0.5" fillRule="evenodd" /></g>
            <defs><filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="1216.33" id="f3" width="1065.92" x="0" y="0"><feFlood floodOpacity="0" result="BackgroundImageFix" /><feBlend in="SourceGraphic" in2="BackgroundImageFix" mode="normal" result="shape" /><feGaussianBlur result="effect3" stdDeviation="125" /></filter></defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

export function ComposerGlow({visible}: {visible:boolean}) {
const formRef = useRef<HTMLDivElement>(null);
const borderRectRef = useRef<SVGRectElement>(null);
useEffect(() => {
    if (!visible) return;
    const SEGMENT = 220, DURATION = 2000, DELAY = 350;
    let raf: number;
    const tid = setTimeout(() => {
      const form = formRef.current, rect = borderRectRef.current;
      if (!form || !rect) return;
      const { width, height } = form.getBoundingClientRect();
      const rx = 22, w = Math.max(width - 2, 4), h = Math.max(height - 2, 4);
      const perimeter = 2 * (w - 2 * rx) + 2 * (h - 2 * rx) + 2 * Math.PI * rx;
      rect.setAttribute("width", String(w)); rect.setAttribute("height", String(h)); rect.setAttribute("rx", String(rx));
      rect.style.strokeDasharray = `${SEGMENT} ${perimeter + SEGMENT}`;
      rect.style.strokeDashoffset = String(SEGMENT); rect.style.opacity = "0";
      let startTime: number | null = null;
      const animate = (ts: number) => {
        if (startTime === null) startTime = ts;
        const elapsed = ts - startTime;
        if (elapsed < DELAY) { raf = requestAnimationFrame(animate); return; }
        const t = Math.min((elapsed - DELAY) / DURATION, 1);
        const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
        const offset = SEGMENT - eased * (perimeter + SEGMENT);
        const opacity = t < 0.08 ? t / 0.08 : t > 0.85 ? (1 - t) / 0.15 : 1;
        rect.style.strokeDashoffset = String(offset); rect.style.opacity = String(Math.max(0, opacity));
        if (t < 1) raf = requestAnimationFrame(animate); else rect.style.opacity = "0";
      };
      raf = requestAnimationFrame(animate);
    }, 50);
    return () => { clearTimeout(tid); cancelAnimationFrame(raf); };
  }, [visible]);
return <div className="composer-glow" ref={formRef} aria-hidden="true"><svg width="100%" height="100%" style={{overflow:"visible"}}><defs><filter id="border-glow" x="-10%" y="-30%" width="120%" height="160%"><feGaussianBlur stdDeviation="1.2" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><rect ref={borderRectRef} x="1" y="1" fill="none" stroke="rgba(90,180,255,0.82)" strokeWidth="2" strokeLinecap="round" filter="url(#border-glow)" style={{opacity:0}}/></svg></div>
}
