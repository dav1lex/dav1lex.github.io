"use client";

import { useRef, useState, useCallback } from "react";

interface AudioPlayerProps {
  src: string;
  label: string;
  sublabel?: string;
}

export default function AudioPlayer({ src, label, sublabel }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const toggle = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  }, []);

  const onTimeUpdate = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const pct = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
    setProgress(pct);
    setCurrentTime(audio.currentTime);
  }, []);

  const onLoadedMetadata = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    setDuration(audio.duration);
  }, []);

  const onEnded = useCallback(() => {
    setPlaying(false);
    setProgress(0);
    setCurrentTime(0);
  }, []);

  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div
      onClick={toggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && toggle()}
      className="group cursor-pointer select-none border border-rule bg-block
                 transition-colors duration-200 hover:border-accent"
    >
      <div className="flex items-center gap-4 p-4">
        {/* Play button */}
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-full border
            flex items-center justify-center transition-all duration-200
            ${playing
              ? "border-accent bg-accent text-black"
              : "border-rule text-accent group-hover:border-accent"
            }`}
        >
          {playing ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
              <rect x="1" y="1" width="4" height="12" rx="1" />
              <rect x="9" y="1" width="4" height="12" rx="1" />
            </svg>
          ) : (
            <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor" className="ml-0.5">
              <path d="M0 0 L14 8 L0 16 Z" />
            </svg>
          )}
        </div>

        {/* Info + progress */}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span
              className={`font-mono text-sm transition-colors duration-200
                ${playing ? "text-accent" : "text-link group-hover:text-link-hover"}`}
            >
              {label}
            </span>
            {sublabel && (
              <span className="font-mono text-xs text-muted">{sublabel}</span>
            )}
          </div>

          {/* Progress bar */}
          <div className="mt-1.5 h-[3px] bg-rule rounded-full overflow-hidden">
            <div
              className="h-full bg-accent rounded-full transition-all duration-150 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Time */}
          <div className="flex justify-between mt-1">
            <span className="font-mono text-[10px] text-muted tabular-nums">
              {formatTime(currentTime)}
            </span>
            <span className="font-mono text-[10px] text-muted tabular-nums">
              {playing ? "▶ playing" : "▷ click to play"}
            </span>
            <span className="font-mono text-[10px] text-muted tabular-nums">
              {duration ? formatTime(duration) : "--:--"}
            </span>
          </div>
        </div>
      </div>

      <audio
        ref={audioRef}
        src={src}
        preload="metadata"
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={onLoadedMetadata}
        onEnded={onEnded}
      />
    </div>
  );
}
