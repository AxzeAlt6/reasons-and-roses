import { createFileRoute } from "@tanstack/react-router";
import { Fragment, useEffect, useRef, useState } from "react";
import { reasons } from "@/data/reasons";
import song from "@/assets/our-song.mp3.asset.json";
import p1 from "@/assets/photo1.jpeg.asset.json";
import p2 from "@/assets/photo2.jpeg.asset.json";
import p3 from "@/assets/photo3.jpeg.asset.json";
import p4 from "@/assets/photo4.jpeg.asset.json";
import p5 from "@/assets/photo5.jpeg.asset.json";
import p6 from "@/assets/photo6.jpg.asset.json";
import p7 from "@/assets/photo7.jpg.asset.json";
import p8 from "@/assets/photo8.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "500 Reasons Why I Love You — for my Nhicolit" },
      {
        name: "description",
        content:
          "A handmade digital love letter for Nhicolit: 500 reasons why I love you, our photos, and our song playing softly.",
      },
      { property: "og:title", content: "500 Reasons Why I Love You" },
      {
        property: "og:description",
        content: "A warm, sunny digital love letter with 500 reasons, our photos, and our song.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoveLetter,
});

const photos: { src: string; caption: string }[] = [
  { src: p8.url, caption: "the day you graduated — my proudest moment." },
  { src: p1.url, caption: "sharing one dessert, like always." },
  { src: p2.url, caption: "matcha dates with you." },
  { src: p3.url, caption: "our chaotic mirror selfies." },
  { src: p7.url, caption: "you fixing my cap, me falling harder." },
  { src: p4.url, caption: "just us, being silly again." },
  { src: p5.url, caption: "enjoy the moment — with you, always." },
  { src: p6.url, caption: "our little photobooth strip. 2026.05.29." },
];

function Daisy({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
        <ellipse
          key={a}
          cx="50"
          cy="26"
          rx="9"
          ry="20"
          fill="currentColor"
          transform={`rotate(${a} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="12" className="text-gold" fill="currentColor" />
    </svg>
  );
}

function Sprig({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 40" className={className} aria-hidden="true">
      <path
        d="M4 20 C 30 4, 60 36, 116 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="30" cy="12" r="4" fill="currentColor" />
      <circle cx="60" cy="28" r="4" fill="currentColor" />
      <circle cx="90" cy="14" r="4" fill="currentColor" />
    </svg>
  );
}

function Heart({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 21s-7.5-4.7-9.6-9.2C.7 8.2 2.6 4.5 6.2 4.5c2 0 3.4 1.1 4.3 2.3l1.5 2 1.5-2c.9-1.2 2.3-2.3 4.3-2.3 3.6 0 5.5 3.7 3.8 7.3C19.5 16.3 12 21 12 21z" />
    </svg>
  );
}

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

function ReasonRow({ index, text }: { index: number; text: string }) {
  const { ref, shown } = useReveal<HTMLLIElement>();
  return (
    <li
      ref={ref}
      data-reason={index}
      className={`reason-card ${shown ? "reason-in" : "reason-out"}`}
    >
      <span className="reason-badge">
        <Heart className="h-4 w-4 text-gold" />
        <span>{index}</span>
      </span>
      <p className="reason-text">{text}</p>
    </li>
  );
}

function PhotoCard({ src, caption }: { src: string; caption: string }) {
  const { ref, shown } = useReveal<HTMLLIElement>();
  return (
    <li ref={ref} className={`photo-card ${shown ? "reason-in" : "reason-out"}`}>
      <img src={src} alt={caption} loading="lazy" className="photo-img" />
      <p className="photo-caption">{caption}</p>
    </li>
  );
}

function LoveLetter() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [count, setCount] = useState(1);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const nodes = document.querySelectorAll<HTMLElement>("[data-reason]");
        let current = 0;
        const line = window.innerHeight * 0.6;
        nodes.forEach((n) => {
          if (n.getBoundingClientRect().top <= line) {
            current = Number(n.dataset['reason']);
          }
        });
        setCount(Math.min(Math.max(current, 1), reasons.length));
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }
    try {
      await audio.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  // interleave photos through the list
  const step = Math.floor(reasons.length / (photos.length + 1));

  return (
    <main className="petal-bg relative min-h-screen overflow-x-hidden pb-32">
      <audio ref={audioRef} src={song.url} preload="none" loop />

      <Daisy className="pointer-events-none absolute -left-8 -top-8 h-32 w-32 rotate-12 text-bloom opacity-40" />
      <Daisy className="pointer-events-none absolute -right-10 top-24 h-24 w-24 -rotate-12 text-bloom opacity-30" />

      <section className="relative mx-auto flex max-w-2xl flex-col items-center px-6 pt-16 text-center sm:pt-24">
        <Sprig className="mb-4 h-8 w-32 text-gold/70" />
        <p className="font-script text-3xl text-gold sm:text-4xl">
          Hellouu my nhicolit my lab!
        </p>
        <p className="mt-3 font-script text-2xl text-gold-deep">this is…</p>
        <h1 className="font-script mt-2 text-5xl leading-tight text-gold drop-shadow-sm sm:text-7xl">
          500 Reasons Why I Love You
        </h1>
        <p className="mt-5 max-w-md text-base text-foreground/70">
          Scroll slowly. Play our song. Every single one of these is true, and I ran
          out of space before I ran out of reasons.
        </p>
        <Sprig className="mt-6 h-8 w-32 rotate-180 text-gold/70" />
      </section>

      <ul className="mx-auto mt-12 flex w-full max-w-2xl flex-col gap-4 px-4 sm:px-6">
        {reasons.map((r, i) => {
          const photoIndex = (i + 1) % step === 0 ? (i + 1) / step - 1 : -1;
          const photo = photoIndex >= 0 ? photos[photoIndex] : undefined;
          return (
            <Fragment key={i}>
              <ReasonRow index={i + 1} text={r} />
              {photo ? <PhotoCard src={photo.src} caption={photo.caption} /> : null}
            </Fragment>
          );
        })}
      </ul>

      <section className="mx-auto mt-16 max-w-2xl px-6 text-center">
        <Daisy className="mx-auto h-12 w-12 text-bloom" />
        <p className="font-script mt-4 text-3xl text-gold">and 500 more tomorrow.</p>
      </section>

      <div className="counter-pill">
        <Heart className="h-4 w-4 text-gold" />
        <span>
          {count} / {reasons.length}
        </span>
      </div>

      <div className="music-dock">
        <button onClick={toggle} className="music-btn" aria-pressed={playing}>
          <span className="music-note">{playing ? "❚❚" : "♫"}</span>
          <span className="music-label">{playing ? "Pause Music" : "Play Music"}</span>
        </button>
      </div>
    </main>
  );
}
