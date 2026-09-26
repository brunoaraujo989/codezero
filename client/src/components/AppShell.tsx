import { useEffect, useState, type ReactNode } from 'react';
import { Link, useLocation } from 'wouter';
import { Bell, BookOpen, ChevronRight, CircleHelp, Compass, Flame, FolderKanban, Gauge, Github, Grid2X2, LayoutDashboard, Menu, PanelLeftClose, PanelLeftOpen, PlayCircle, Search, Settings, Sparkles, TerminalSquare, Trophy, UserRound, X, Zap } from 'lucide-react';
import { globalResults } from '@/data/content';

const navGroups = [
  { label: 'APRENDER', items: [
    { label: 'Início', href: '/app/dashboard', icon: LayoutDashboard },
    { label: 'Cursos', href: '/app/courses', icon: BookOpen },
    { label: 'Trilhas', href: '/app/tracks', icon: Compass },
    { label: 'Exercícios', href: '/app/exercises', icon: Zap },
    { label: 'Quizzes', href: '/app/quizzes', icon: Trophy },
  ]},
  { label: 'CONSTRUIR', items: [
    { label: 'Projetos', href: '/app/projects', icon: FolderKanban },
    { label: 'Vídeos', href: '/app/videos', icon: PlayCircle },
    { label: 'Termux Lab', href: '/app/lab', icon: TerminalSquare },
    { label: 'GitHub', href: '/app/github', icon: Github },
  ]},
  { label: 'SUA JORNADA', items: [
    { label: 'Progresso', href: '/app/progress', icon: Gauge },
    { label: 'Perfil', href: '/app/profile', icon: UserRound },
  ]},
];

function Logo({ compact = false }: { compact?: boolean }) {
  return <Link href="/" className="flex items-center gap-3 group" aria-label="CodeZero home">
    <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-[#b9ee83] text-[#14180e] shadow-[0_8px_24px_rgba(185,238,131,.14)]">
      <span className="font-mono text-[17px] font-bold">&gt;_</span>
      <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-[#b9ee83] shadow-[0_0_8px_#b9ee83]" />
    </span>
    {!compact && <span className="font-display text-lg font-bold tracking-[-.04em] text-white">code<span className="text-[#a88cff]">zero</span></span>}
  </Link>;
}

function NavLink({ href, label, icon: Icon, collapsed, onClick }: { href: string; label: string; icon: typeof LayoutDashboard; collapsed: boolean; onClick?: () => void }) {
  const [location] = useLocation();
  const active = location === href || (href === '/app/dashboard' && location === '/app');
  return <Link href={href} onClick={onClick} className={`group relative flex items-center gap-3 rounded-lg border px-3 py-2.5 text-[13px] font-semibold transition-all duration-200 ${active ? 'border-[#9b7bff]/25 bg-[#9b7bff]/[.06] text-[#e8e1ff]' : 'border-transparent text-[#7f879e] hover:bg-white/[.035] hover:text-[#e8eaf3]'}`}>
    {active && <span className="absolute -left-[1px] top-2 bottom-2 w-[2px] rounded-full bg-[#b9ee83] shadow-[0_0_8px_#b9ee83]" />}
    <Icon size={17} strokeWidth={active ? 2.2 : 1.8} className={active ? 'text-[#a790ff]' : 'text-[#727a91] group-hover:text-[#c6cbe0]'} />
    {!collapsed && <span className="truncate">{label}</span>}
    {!collapsed && active && <ChevronRight size={13} className="ml-auto text-[#8d77ed]" />}
  </Link>;
}

export default function AppShell({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);
  const [query, setQuery] = useState('');
  const [location, navigate] = useLocation();
  const searchResults = query.trim().length > 1 ? globalResults.filter((item) => `${item.title} ${item.description} ${item.type}`.toLowerCase().includes(query.toLowerCase())) : [];

  useEffect(() => {
    setMobileOpen(false);
    setIsNavigating(true);
    const timer = window.setTimeout(() => setIsNavigating(false), 260);
    return () => window.clearTimeout(timer);
  }, [location]);

  return <div className="min-h-screen bg-[#080a11] text-[#f3f5fb]">
    <aside className={`fixed inset-y-0 left-0 z-50 flex w-[244px] flex-col border-r border-white/[.07] bg-[#0b0e17]/95 px-3 py-5 backdrop-blur-xl transition-transform duration-200 lg:translate-x-0 ${collapsed ? 'lg:w-[78px]' : ''} ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className={`mb-9 flex items-center px-2 ${collapsed ? 'justify-center' : 'justify-between'}`}>
        <Logo compact={collapsed} />
        {!collapsed && <button onClick={() => setCollapsed(true)} className="hidden rounded-lg p-1.5 text-[#667087] hover:bg-white/[.05] hover:text-white lg:block" aria-label="Recolher menu"><PanelLeftClose size={17} /></button>}
        <button onClick={() => setMobileOpen(false)} className="rounded-lg p-1.5 text-[#667087] hover:bg-white/[.05] lg:hidden" aria-label="Fechar menu"><X size={17} /></button>
      </div>
      {collapsed && <button onClick={() => setCollapsed(false)} className="mb-5 hidden w-full rounded-lg p-2 text-[#667087] hover:bg-white/[.05] hover:text-white lg:block" aria-label="Expandir menu"><PanelLeftOpen size={18} className="mx-auto" /></button>}
      <nav className="scrollbar-none flex-1 space-y-7 overflow-y-auto">
        {navGroups.map((group) => <div key={group.label}>
          {!collapsed && <p className="mb-2 px-3 text-[10px] font-bold tracking-[.16em] text-[#50596d]">{group.label}</p>}
          <div className="space-y-1">{group.items.map((item) => <NavLink key={item.href} {...item} collapsed={collapsed} onClick={() => setMobileOpen(false)} />)}</div>
        </div>)}
      </nav>
      {!collapsed && <div className="mt-5 rounded-2xl border border-[#9b7bff]/20 bg-gradient-to-br from-[#5d43aa]/25 to-[#0d1924]/70 p-3.5">
        <div className="mb-2 flex items-center gap-2 text-[11px] font-bold text-[#c9bdff]"><Sparkles size={14} /> PROGRESSO DA SEMANA</div>
        <p className="mb-3 text-[12px] leading-relaxed text-[#8992ab]">Você está a <span className="font-semibold text-[#edf0ff]">2 dias</span> de bater sua meta.</p>
        <div className="progress-track"><div className="progress-fill violet" style={{ width: '68%' }} /></div>
        <div className="mt-2 flex justify-between text-[10px] font-medium text-[#737d98]"><span>4 / 6 sessões</span><span className="text-[#b5a6ff]">68%</span></div>
      </div>}
      <div className={`mt-5 border-t border-white/[.07] pt-4 ${collapsed ? 'flex justify-center' : ''}`}>
        {!collapsed ? <Link href="/app/settings" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[13px] font-semibold text-[#737b91] hover:bg-white/[.04] hover:text-white"><Settings size={17} /><span>Configurações</span></Link> : <Link href="/app/settings" className="rounded-xl p-2 text-[#737b91] hover:bg-white/[.04] hover:text-white"><Settings size={18} /></Link>}
      </div>
    </aside>

    <div className={`min-h-screen transition-[padding] duration-200 lg:pl-[244px] ${collapsed ? 'lg:pl-[78px]' : ''}`}>
      <header className="sticky top-0 z-30 border-b border-white/[.07] bg-[#080a11]/85 backdrop-blur-xl">
        <div className="flex h-[70px] items-center gap-3 px-4 sm:px-7">
          <button onClick={() => setMobileOpen(true)} className="rounded-xl p-2 text-[#8790a6] hover:bg-white/[.05] lg:hidden" aria-label="Abrir menu"><Menu size={21} /></button>
          <div className="relative hidden max-w-[390px] flex-1 sm:block">
            <Search size={17} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#596276]" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Escape') setQuery(''); }} placeholder="Buscar cursos, comandos, conceitos..." className="h-10 w-full rounded-xl border border-white/[.08] bg-white/[.035] pl-10 pr-10 text-[12px] text-white outline-none placeholder:text-[#596276] focus:border-[#8d74ef]/45 focus:bg-white/[.055]" />
            <kbd className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md border border-white/[.09] px-1.5 py-0.5 font-mono text-[10px] text-[#657089]">⌘ K</kbd>
            {searchResults.length > 0 && <div className="absolute left-0 right-0 top-12 z-50 overflow-hidden rounded-2xl border border-white/[.12] bg-[#131725] p-1.5 shadow-2xl">
              {searchResults.slice(0, 4).map((result) => <button key={result.title} onClick={() => { setQuery(''); navigate(result.href); }} className="flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left hover:bg-white/[.06]"><span className="mt-0.5 rounded-md bg-[#8d74ef]/15 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-[#b9aaff]">{result.type}</span><span><span className="block text-[12px] font-semibold text-[#e9ebf5]">{result.title}</span><span className="block text-[10px] text-[#737c91]">{result.description}</span></span></button>)}
            </div>}
          </div>
          <div className="ml-auto flex items-center gap-2.5 sm:gap-4">
            <button className="relative rounded-xl p-2 text-[#7b849a] hover:bg-white/[.05] hover:text-white" aria-label="Notificações"><Bell size={18} /><span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[#55e7dd] shadow-[0_0_7px_#55e7dd]" /></button>
            <div className="hidden h-7 w-px bg-white/[.08] sm:block" />
            <Link href="/app/profile" className="flex items-center gap-2.5 rounded-xl p-1.5 pr-2 hover:bg-white/[.04]"><div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#a888ff] to-[#4eddd4] font-display text-[12px] font-bold text-[#11101b]">AS</div><div className="hidden text-left sm:block"><p className="text-[11px] font-bold text-[#eef0f8]">Alex Silva</p><p className="text-[10px] text-[#717b91]">Nível 07</p></div></Link>
          </div>
        </div>
      </header>
      <main className="relative min-h-[calc(100vh-70px)]">
        {isNavigating && <div className="route-loader" aria-label="Carregando página" />}
        <div className="route-enter">{children}</div>
      </main>
    </div>
  </div>;
}
