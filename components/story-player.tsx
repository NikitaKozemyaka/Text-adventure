"use client";

import { useState } from "react";
import { ScrollText } from "lucide-react";
import { storyFragments, startFragmentId } from "@/lib/data";

export function StoryPlayer() {
  const [fragmentId, setFragmentId] = useState(startFragmentId);
  const fragment = storyFragments[fragmentId];

  return (
    <div className="space-y-8">
      <section
        key={fragment.id}
        className="rounded-2xl border border-slate-700/60 bg-[#12161f]/80 p-6 sm:p-8 shadow-2xl backdrop-blur animate-in fade-in slide-in-from-bottom-4 duration-500"
      >
        <div className="mb-4 flex items-center gap-2 text-amber-400/90">
          <ScrollText className="h-5 w-5" />
          <span className="text-xs uppercase tracking-[0.2em]">
            {fragment.title}
          </span>
        </div>
        <p className="text-lg leading-relaxed text-slate-200">
          {fragment.text}
        </p>
      </section>

      <section className="space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-amber-300/80">
          Выбери путь
        </p>
        <div className="space-y-3">
          {fragment.choices.map((choice) => {
            const Icon = choice.icon;
            return (
              <button
                key={choice.label}
                type="button"
                onClick={() => setFragmentId(choice.nextId)}
                className="group flex w-full items-center gap-4 rounded-xl border border-slate-700/60 bg-[#12161f]/80 p-4 text-left transition-colors hover:border-amber-500/50 hover:bg-amber-500/5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-700/60 bg-[#1a2029] text-slate-400 transition-colors group-hover:border-amber-500/50 group-hover:text-amber-300">
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
    </div>
  );
}
