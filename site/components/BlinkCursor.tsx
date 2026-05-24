"use client";

import { useEffect, useState } from "react";

const FRAMES = ["", "_"];

export default function BlinkCursor() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setFrame((p) => (p + 1) % FRAMES.length), 530);
    return () => clearInterval(id);
  }, []);

  return <span className="font-mono text-muted">{FRAMES[frame]}</span>;
}
