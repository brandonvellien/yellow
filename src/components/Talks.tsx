"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { TalkData } from "@/sanity/lib/fallbackData";

interface TalksProps {
  talks: TalkData[];
}

export default function Talks({ talks }: TalksProps) {
  const [selectedTalk, setSelectedTalk] = useState<TalkData | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedTalk) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedTalk]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedTalk(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="talks">
      <h2 className="label">Talks</h2>
      <div className="grid wide">
        {talks.map((talk) => (
          <div
            key={talk._id || talk.title}
            className="cell"
            onClick={() => setSelectedTalk(talk)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setSelectedTalk(talk);
              }
            }}
            aria-label={`Découvrir le talk : ${talk.title}`}
          >
            <Image
              src={talk.imageUrl}
              alt={`Conférence ${talk.title}`}
              fill
              sizes="(max-width: 860px) 50vw, 25vw"
              style={{ objectFit: "cover" }}
            />
            <div className="cap">
              <h3>{talk.title}</h3>
              <span className="discover-hint">
                Lire le synopsis <span>→</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* POPUP MODALE FLUIDE DU TALK */}
      {selectedTalk && (
        <div
          className="talk-modal-backdrop"
          onClick={() => setSelectedTalk(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-talk-title"
        >
          <div
            className="talk-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="talk-modal-close"
              onClick={() => setSelectedTalk(null)}
              aria-label="Fermer la fenêtre"
            >
              ✕
            </button>

            <div className="talk-modal-media">
              <Image
                src={selectedTalk.imageUrl}
                alt={selectedTalk.title}
                fill
                sizes="(max-width: 760px) 100vw, 320px"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className="talk-modal-body">
              <div>
                {selectedTalk.category && (
                  <span className="talk-modal-category">
                    {selectedTalk.category}
                  </span>
                )}
                <h3 id="modal-talk-title" className="talk-modal-title">
                  {selectedTalk.title}
                </h3>

                <div className="talk-modal-meta">
                  {selectedTalk.speakers && (
                    <span>
                      <strong>Intervenant :</strong> {selectedTalk.speakers}
                    </span>
                  )}
                  {selectedTalk.duration && (
                    <span>
                      <strong>Format :</strong> {selectedTalk.duration}
                    </span>
                  )}
                </div>

                <p className="talk-modal-synopsis">{selectedTalk.synopsis}</p>

                {selectedTalk.keyPoints && selectedTalk.keyPoints.length > 0 && (
                  <div className="talk-modal-keypoints">
                    <h4>Au programme</h4>
                    <ul>
                      {selectedTalk.keyPoints.map((point, index) => (
                        <li key={index}>{point}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div className="talk-modal-action">
                <a
                  href={`mailto:hello@yellow.agency?subject=${encodeURIComponent(
                    `Demande d'intervention — ${selectedTalk.title}`
                  )}`}
                  className="talk-modal-btn"
                >
                  Demander cette intervention →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
