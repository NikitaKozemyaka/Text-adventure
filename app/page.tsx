import { StoryPlayer } from "@/components/story-player";

export default function HomePage() {
  return (
    <div className="min-h-[calc(100vh-9rem)] relative overflow-hidden bg-[#070b16] px-4 py-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(85,230,255,0.16) 0%, transparent 70%), radial-gradient(circle at 10% 80%, rgba(173,145,255,0.12), transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-2xl w-full space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <header className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-cyan-300">
            Полевой архив · Астра
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
            Пробуждение
          </h1>
          <p className="text-sm text-slate-400">
            «Рейс-01», Рея-7, капсула, километр на восток — к убежищу (0:0).
          </p>
        </header>

        <StoryPlayer />
      </div>
    </div>
  );
}
