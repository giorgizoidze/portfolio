"use client";

import { useState } from "react";
import Image from "next/image";

export type DetailGalleryItem = {
  title: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  description: string;
};

type DetailGalleryProps = {
  sheet: string;
  items: DetailGalleryItem[];
};

export default function DetailGallery({ sheet, items }: DetailGalleryProps) {
  const [active, setActive] = useState(0);
  const current = items[active];

  if (!current) return null;

  return (
    <div className="detail-gallery">
      <div className="sheet-head" style={{ marginTop: 8 }}>
        <span className="tag">{sheet}.D</span>
        <h2>Detail gallery</h2>
        <span className="fill" />
      </div>
      <p className="prose" style={{ marginBottom: 24 }}>
        A closer look at specific screens and the engineering behind them.
      </p>

      <div className="detail-viewer">
        <div className="detail-media-col">
          <figure className="detail-stage">
            <Image
              key={active}
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              priority={active === 0}
              style={{ aspectRatio: `${current.width} / ${current.height}` }}
            />
          </figure>

          <div className="detail-thumbs" role="tablist" aria-label="Detail screens">
            {items.map((item, i) => (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={i === active}
                aria-label={`${String(i + 1).padStart(2, "0")} — ${item.title}`}
                className={`detail-thumb${i === active ? " is-active" : ""}`}
                onClick={() => setActive(i)}
              >
                <Image src={item.src} alt="" width={140} height={80} />
                <span className="detail-thumb-num">{String(i + 1).padStart(2, "0")}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="detail-info">
          <div className="detail-kicker">
            <span className="detail-num">
              {String(active + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
            </span>
            <h3>{current.title}</h3>
          </div>
          <p>{current.description}</p>
        </div>
      </div>
    </div>
  );
}
