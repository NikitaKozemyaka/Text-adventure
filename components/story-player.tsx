"use client";

import { useEffect, useState } from "react";
import { RotateCcw, ScrollText, Send } from "lucide-react";
import { storyFragments, startFragmentId } from "@/lib/data";
import {
  ADVENTURE_TOKEN_STORAGE_KEY,
  adventureStartUrl,
  parseAdventureToken,
} from "@/lib/stw";

function readStoredToken(): string | null {
  if (typeof window === "undefined") return null;
  const fromUrl = parseAdventureToken(
    new URLSearchParams(window.location.search).get("t"),
  );
  if (fromUrl) {
    sessionStorage.setItem(ADVENTURE_TOKEN_STORAGE_KEY, fromUrl);
    return fromUrl;
  }
  return parseAdventureToken(sessionStorage.getItem(ADVENTURE_TOKEN_STORAGE_KEY));
}

export function StoryPlayer() {
  const [fragmentId, setFragmentId] = useState(startFragmentId);
  const [token, setToken] = useState<string | null>(null);
  const fragment = storyFragments[fragmentId];
  const isEnding = fragment.choices.length === 0;
  const outcome = fragment.outcome;

  useEffect(() => {
    setToken(readStoredToken());
  }, []);

  return (
    <div className="space-y-8">
      <section
        key={fragment.id}
        className="rounded-2xl border border-cyan-400/25 bg-[#0b1220]/85 p-6 sm:p-8 shadow-2xl backdrop-blur animate-in fade-in slide-in-from-bottom-4 duration-500"
      >
        <div className="mb-4 flex items-center gap-2 text-cyan-300/90">
          <ScrollText className="h-5 w-5" />
          <span className="text-xs uppercase tracking-[0.2em]">
            {fragment.title}
          </span>
        </div>
        <p className="text-lg leading-relaxed text-slate-200">{fragment.text}</p>
      </section>

      {isEnding ? (
        <section className="rounded-2xl border border-cyan-400/30 bg-cyan-500/5 p-6 text-center shadow-2xl backdrop-blur animate-in fade-in slide-in-from-bottom-4 duration-500 space-y-4">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/80">
            {outcome === "failure" ? "Провал вылазки" : "Финал вылазки"}
          </p>
          {outcome === "failure" ? (
            <p className="text-sm text-slate-300">
              Попытка провалена — новая попытка будет доступна через 24 часа
            </p>
          ) : null}
          {token && outcome ? (
            <a
              href={adventureStartUrl(token, outcome)}
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/50 bg-cyan-400 px-6 py-3 font-medium text-slate-950 transition-colors hover:bg-cyan-300"
            >
              <Send className="h-4 w-4" />
              {outcome === "success"
                ? "Получить награду в боте"
                : "Вернуться в бот"}
            </a>
          ) : (
            <p className="text-sm text-slate-400">
              Чтобы получить награду, открой приключение из бота STW
            </p>
          )}
          <div>
            <button
              type="button"
              onClick={() => setFragmentId(startFragmentId)}
              className="inline-flex items-center gap-2 rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-6 py-3 font-medium text-cyan-100 transition-colors hover:border-cyan-300/60 hover:bg-cyan-500/20"
            >
              <RotateCcw className="h-4 w-4" />
              Начать заново
            </button>
          </div>
        </section>
      ) : (
        <section className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-cyan-200/80">
            Выбери путь
          </p>
          <div className="space-y-3">
            {fragment.choices.map((choice) => {
              const Icon = choice.icon;
              return (
                <button
                  key={`${choice.nextId}-${choice.label}`}
                  type="button"
                  onClick={() => setFragmentId(choice.nextId)}
                  className="group flex w-full items-center gap-4 rounded-xl border border-slate-700/60 bg-[#0b1220]/85 p-4 text-left transition-colors hover:border-cyan-400/50 hover:bg-cyan-500/5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-700/60 bg-[#101b30] text-slate-400 transition-colors group-hover:border-cyan-400/50 group-hover:text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-0.5">
                    <p className="font-medium text-slate-100">{choice.label}</p>
                    <p className="text-sm text-slate-400">{choice.hint}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
