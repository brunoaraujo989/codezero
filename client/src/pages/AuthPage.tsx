import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Github, LockKeyhole, ShieldCheck, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { startLogin } from '@/const';
import { useAuth } from '@/_core/hooks/useAuth';

export default function AuthPage({ initialMode = 'login' }: { initialMode?: 'login' | 'signup' }) {
  const [, navigate] = useLocation();
  const { isAuthenticated, loading } = useAuth();
  const [mode, setMode] = useState(initialMode);

  useEffect(() => {
    if (!loading && isAuthenticated) navigate('/app/dashboard');
  }, [isAuthenticated, loading, navigate]);

  const isSignup = mode === 'signup';
  const switchMode = () => setMode(isSignup ? 'login' : 'signup');

  return <div className="min-h-screen bg-[#0d0f13] text-[#f1f2f4]">
    <header className="border-b border-white/[.1]"><div className="container flex h-[72px] items-center justify-between"><Link href="/" className="flex items-center gap-3"><span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#b9ee83] font-mono text-[14px] font-bold text-[#14180e]">&gt;_</span><span className="font-display text-[20px] font-semibold tracking-[-.04em]">codezero</span></Link><Link href="/" className="flex items-center gap-2 text-[11px] font-semibold text-[#919aa6] hover:text-white"><ArrowLeft size={14} /> Voltar para início</Link></div></header>
    <main className="container grid min-h-[calc(100vh-72px)] items-center gap-12 py-14 lg:grid-cols-[1fr_420px]">
      <section className="hidden max-w-[610px] lg:block"><p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[.18em] text-[#b9ee83]"><Sparkles size={13} /> sua jornada começa aqui</p><h1 className="mt-6 max-w-[600px] font-display text-6xl leading-[.95] tracking-[-.07em] text-white">Um lugar para<br/><span className="text-[#b9ee83]">aprender fazendo.</span></h1><p className="mt-7 max-w-[480px] text-[15px] leading-[1.75] text-[#a3acb8]">Salve seu progresso, acompanhe suas trilhas e volte exatamente de onde parou.</p><div className="mt-9 space-y-3 text-[12px] text-[#a4adb9]"><Benefit text="Seu progresso sincronizado" /><Benefit text="Cursos e projetos no seu ritmo" /><Benefit text="Acesso protegido por OAuth" /></div></section>
      <section className="w-full max-w-[420px] justify-self-center lg:justify-self-end"><div className="mb-7 lg:hidden"><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#b9ee83]">sua jornada começa aqui</p><h1 className="mt-3 font-display text-4xl leading-[.95] tracking-[-.06em] text-white">Aprenda fazendo<span className="text-[#b9ee83]">.</span></h1></div><div className="glass rounded-[18px] p-6 sm:p-8"><div className="flex items-center justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[.16em] text-[#7d8793]">{isSignup ? 'novo por aqui?' : 'bem-vindo de volta'}</p><h2 className="mt-2 font-display text-3xl tracking-[-.05em] text-white">{isSignup ? 'Crie seu perfil' : 'Entre no CodeZero'}</h2></div><span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#b9ee83]/10 text-[#b9ee83]"><LockKeyhole size={19} /></span></div><p className="mt-4 text-[12px] leading-[1.65] text-[#8f99a6]">{isSignup ? 'Seu primeiro acesso cria automaticamente um perfil seguro para acompanhar sua evolução.' : 'Continue sua jornada de onde parou e mantenha seu progresso por perto.'}</p><button onClick={() => startLogin()} className="mt-7 flex w-full items-center justify-center gap-2 rounded-md bg-[#b9ee83] px-4 py-3.5 text-[12px] font-bold text-[#14180e] transition-transform hover:bg-[#c7f59a] active:scale-[.98]"><ShieldCheck size={16} /> {isSignup ? 'Criar conta com acesso seguro' : 'Entrar com acesso seguro'} <ArrowRight size={14} /></button><div className="my-6 flex items-center gap-3 text-[10px] uppercase tracking-[.16em] text-[#68727e]"><span className="h-px flex-1 bg-white/[.1]" /> seguro por padrão <span className="h-px flex-1 bg-white/[.1]" /></div><div className="space-y-3 rounded-md border border-white/[.1] bg-[#111419] p-4"><div className="flex items-start gap-3"><span className="mt-0.5 text-[#b9ee83]"><Check size={14} /></span><p className="text-[11px] leading-[1.55] text-[#a3acb8]">O CodeZero não armazena sua senha. A autenticação acontece no provedor seguro.</p></div><div className="flex items-start gap-3"><span className="mt-0.5 text-[#b9ee83]"><Check size={14} /></span><p className="text-[11px] leading-[1.55] text-[#a3acb8]">No primeiro acesso, sua conta e perfil são criados automaticamente.</p></div></div><p className="mt-6 text-center text-[11px] text-[#7f8995]">{isSignup ? 'Já tem uma conta?' : 'Ainda não tem uma conta?'} <button onClick={switchMode} className="font-bold text-[#b9ee83] hover:text-white">{isSignup ? 'Entrar' : 'Criar meu perfil'}</button></p></div><p className="mt-5 text-center text-[10px] leading-relaxed text-[#6c7683]">Ao continuar, você concorda com os termos de uso do CodeZero e com o uso de uma sessão segura para acessar a plataforma.</p></section>
    </main>
  </div>;
}

function Benefit({ text }: { text: string }) { return <div className="flex items-center gap-3"><span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#b9ee83]/10 text-[#b9ee83]"><Check size={13} /></span>{text}</div>; }
