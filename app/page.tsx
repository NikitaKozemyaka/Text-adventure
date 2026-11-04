import { StoryPlayer } from "@/components/story-player";

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

        <StoryPlayer />
      </div>
    </div>
  );
}
