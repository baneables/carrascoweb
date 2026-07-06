import { useEffect, useMemo, useState } from 'react';

const socialLinks = [
  { name: 'Twitch', url: 'hhttps://www.twitch.tv/twich_alecarrasco', handle: '@carrasco', emoji: '📹' },
  { name: 'YouTube', url: 'https://youtube.com', handle: '@carrasco', emoji: '▶️' },
  {/*{ name: 'TikTok', url: 'https://tiktok.com', handle: '@carrasco', emoji: '🎵' },*/}
  { name: 'Discord', url: 'https://discord.com', handle: 'Comunidad', emoji: '💬' },
];

const highlights = [
  'Streaming en directo',
  'Eventos',
  'Contenido de humor y retos',
  'Comunidad de +1k',
];

const agenda = [
  { date: '12 Ago', title: 'Live especial', time: '20:00' },
  { date: '22 Ago', title: 'Meet & greet', time: '18:30' },
  { date: '02 Sep', title: 'Evento sorpresa', time: '21:00' },
];

const gallery = [
  'Rivals',
  'Missing Texture',
];

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [cursorGlow, setCursorGlow] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  useEffect(() => {
    const handlePointerMove = (event) => {
      setCursorGlow({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  const cursorStyle = useMemo(
    () => ({
      background: darkMode
        ? `radial-gradient(circle at ${cursorGlow.x}px ${cursorGlow.y}px, rgba(255,255,255,0.22), transparent 24%)`
        : `radial-gradient(circle at ${cursorGlow.x}px ${cursorGlow.y}px, rgba(34,211,238,0.22), transparent 24%)`,
    }),
    [cursorGlow, darkMode]
  );

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.14),_transparent_30%),linear-gradient(135deg,_#fdf2f8,_#f5f3ff_55%,_#ecfeff)] text-slate-900 transition-colors duration-500 dark:bg-[radial-gradient(circle_at_top,_rgba(34,211,238,0.18),_transparent_30%),linear-gradient(135deg,_#020617,_#111827_55%,_#0f172a)] dark:text-slate-100" style={cursorStyle}>
      <div className="pointer-events-none fixed inset-0 z-0 opacity-70" style={cursorStyle} />
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-500">carrasco</p>
          <h1 className="text-2xl font-black sm:text-3xl">carrasco Web</h1>
        </div>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="rounded-full border border-white/40 bg-white/70 px-4 py-2 text-sm font-semibold shadow-lg backdrop-blur transition hover:-translate-y-1 hover:shadow-cyan-400/40 dark:border-slate-700 dark:bg-slate-900/70"
        >
          {darkMode ? '☀️ Día' : '🌙 Noche'}
        </button>
      </header>

      <main className="mx-auto flex max-w-7xl flex-col gap-8 px-6 pb-16 lg:px-8">
        <section className="grid items-center gap-8 rounded-[2rem] border border-white/60 bg-white/60 p-8 shadow-2xl backdrop-blur-xl transition hover:scale-[1.01] dark:border-slate-800 dark:bg-slate-900/60 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
          <div className="space-y-6">
            <span className="inline-block rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-600 dark:text-cyan-300">
              Creator • Eventos • Comunidad
            </span>
            <h2 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              La web que une tu contenido, tus fans y tus próximos eventos.
            </h2>
            <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              El mejor streamer del mundo.
            </p>
            <div className="flex flex-wrap gap-3">
              {highlights.map((item) => (
                <span key={item} className="rounded-full border border-cyan-400/30 bg-cyan-500/10 px-3 py-2 text-sm transition hover:-translate-y-1 hover:bg-cyan-500/20">
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="#social" className="rounded-full bg-slate-900 px-5 py-3 font-semibold text-white transition hover:-translate-y-1 hover:bg-cyan-500 dark:bg-cyan-500 dark:text-slate-950">
                Ver redes
              </a>
              <a href="#agenda" className="rounded-full border border-slate-300 px-5 py-3 font-semibold transition hover:-translate-y-1 dark:border-slate-700">
                Ver calendario
              </a>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <div className="animate-float absolute h-48 w-48 rounded-full bg-cyan-400/30 blur-3xl" />
            <div className="relative w-full max-w-md rounded-[2rem] border border-white/60 bg-gradient-to-br from-cyan-500/20 via-fuchsia-500/15 to-amber-400/20 p-6 shadow-2xl backdrop-blur-xl">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">Live ahora</p>
                  <h3 className="text-xl font-bold">carrasco en directo</h3>
                </div>
                <div className="rounded-full bg-rose-500 px-3 py-1 text-sm font-semibold text-white">En vivo</div>
              </div>
              <div className="rounded-2xl border border-white/50 bg-slate-950/90 p-4 text-slate-100 shadow-inner">
                <p className="text-sm text-slate-400">Próximo evento</p>
                <p className="mt-2 text-2xl font-black">Noche de retos + giveaways</p>
                <p className="mt-3 text-sm text-slate-300">Sábado · 22:00 · Discord + YouTube</p>
              </div>
            </div>
          </div>
        </section>

        <section id="social" className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[2rem] border border-white/60 bg-white/60 p-6 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/60">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-500">Redes</p>
            <h3 className="mt-3 text-2xl font-black">Conecta con carrasco</h3>
            <p className="mt-3 text-slate-600 dark:text-slate-300">Todos tus canales en un solo lugar, con estética elegante y navegación fluida.</p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {socialLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="group rounded-[1.5rem] border border-white/60 bg-white/70 p-5 shadow-lg backdrop-blur-xl transition hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-cyan-400/20 dark:border-slate-800 dark:bg-slate-900/70"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-lg font-bold">{link.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{link.handle}</p>
                  </div>
                  <span className="text-2xl transition group-hover:scale-125">{link.emoji}</span>
                </div>
                <div className="mt-4 h-1.5 w-0 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </section>

        <section id="agenda" className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-white/60 bg-white/60 p-6 shadow-xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/60">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-500">Calendario</p>
            <h3 className="mt-3 text-2xl font-black">Próximos eventos</h3>
            <div className="mt-6 space-y-4">
              {agenda.map((item) => (
                <div key={item.title} className="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-slate-50/80 p-4 transition hover:-translate-y-1 dark:border-slate-700 dark:bg-slate-800/70">
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.time}</p>
                  </div>
                  <div className="rounded-full bg-cyan-500/10 px-3 py-2 text-sm font-bold text-cyan-600 dark:text-cyan-300">{item.date}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/60 bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20 p-6 shadow-xl backdrop-blur-xl dark:border-slate-800">
            <p className="text-sm uppercase tracking-[0.3em] text-fuchsia-500">Moments</p>
            <h3 className="mt-3 text-2xl font-black">Galería y highlights</h3>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {gallery.map((item) => (
                <div key={item} className="rounded-2xl border border-white/60 bg-white/70 p-4 text-sm font-semibold shadow transition hover:scale-105 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900/70">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/40 px-6 py-8 text-center text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400">
        Diseñado con ❤️ para carrasco.
      </footer>
    </div>
  );
}

export default App;
