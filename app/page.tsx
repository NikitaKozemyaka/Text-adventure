import { ScrollText, Flame, Route, Crosshair } from "lucide-react";

const storyTitle = "Пролог: Холодный рассвет";
const storyText =
  "Ты очнулся на каменной дороге среди молчаливого леса. Изморозь цепляет плащ, а вдали, за кромкой чёрных елей, медленно разгорается багряное зарево — там, где по преданиям стоит сгоревший город Даргвар. В руке — обломок старого меча, покрытый тусклой коркой льда. Дорога разбегается на несколько троп, и тишина давит на плечи.";

const choices = [
  {
    icon: Flame,
    label: "Двинуться на зарево",
    hint: "К пепелищу Даргвара",
  },
  {
    icon: Route,
    label: "Углубиться в лес",
    hint: "Под полог молчаливых елей",
  },
  {
    icon: Crosshair,
    label: "Остаться на дороге",
    hint: "Дождаться рассвета в тишине",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-9rem)] relative overflow-hidden bg-[#0c0f16] px-4 py-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(212,151,66,0.15) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-2xl w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-amber-300">
            Тёмные развилки
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
            Холодный рассвет
          </h1>
          <p className="text-sm text-slate-400">
            История, где каждый выбор меняет судьбу
          </p>
        </header>

        <section className="rounded-2xl border border-slate-700/60 bg-[#12161f]/80 p-6 sm:p-8 shadow-2xl backdrop-blur">
          <div className="mb-4 flex items-center gap-2 text-amber-400/90">
            <ScrollText className="h-5 w-5" />
            <span className="text-xs uppercase tracking-[0.2em]">
              {storyTitle}
            </span>
          </div>
          <p className="text-lg leading-relaxed text-slate-200">{storyText}</p>
        </section>

        <section className="space-y-3">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-300/80">
            Выбери путь
          </p>
          <div className="space-y-3">
            {choices.map((choice) => {
              const Icon = choice.icon;
              return (
                <button
                  key={choice.label}
                  type="button"
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
    </div>
  );
}
