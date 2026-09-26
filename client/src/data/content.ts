import type { LucideIcon } from 'lucide-react';
import { Braces, Code2, GitBranch, LayoutGrid, TerminalSquare, Smartphone, Bot, Database, Globe2, Zap, ShieldCheck, FileCode2 } from 'lucide-react';

export type Course = {
  id: string;
  title: string;
  description: string;
  level: 'Iniciante' | 'Intermediário' | 'Avançado';
  lessons: number;
  minutes: string;
  progress: number;
  accent: string;
  icon: LucideIcon;
  tag: string;
};

export const courses: Course[] = [
  { id: 'fundamentos', title: 'Fundamentos', description: 'A lógica por trás de qualquer código.', level: 'Iniciante', lessons: 18, minutes: '4h 20min', progress: 68, accent: '#9b7bff', icon: Braces, tag: 'base' },
  { id: 'python', title: 'Python na prática', description: 'Do primeiro print até APIs e automação.', level: 'Iniciante', lessons: 32, minutes: '8h 10min', progress: 34, accent: '#55d7cb', icon: Code2, tag: 'popular' },
  { id: 'web', title: 'Web moderna', description: 'HTML, CSS e JavaScript construindo interfaces.', level: 'Intermediário', lessons: 26, minutes: '6h 40min', progress: 12, accent: '#f2ad65', icon: Globe2, tag: 'novo' },
  { id: 'git', title: 'Git & GitHub', description: 'Controle seu código e construa seu portfólio.', level: 'Iniciante', lessons: 14, minutes: '2h 50min', progress: 0, accent: '#ef79ab', icon: GitBranch, tag: 'essencial' },
  { id: 'linux', title: 'Linux & Terminal', description: 'Domine a linha de comando sem medo.', level: 'Intermediário', lessons: 22, minutes: '4h 55min', progress: 0, accent: '#7ba7ff', icon: TerminalSquare, tag: 'prática' },
  { id: 'termux', title: 'Termux Lab', description: 'Seu laboratório portátil de programação.', level: 'Intermediário', lessons: 16, minutes: '3h 30min', progress: 0, accent: '#63e7cf', icon: Smartphone, tag: 'lab' },
];

export type CourseLesson = { id: string; title: string; summary: string; duration: string; youtubeQuery: string };

export const courseLessons: Record<string, CourseLesson[]> = {
  fundamentos: [
    { id: 'f1', title: 'Como pensar como programador', summary: 'Lógica, problemas e como transformar uma ideia em passos.', duration: '18 min', youtubeQuery: 'lógica de programação para iniciantes' },
    { id: 'f2', title: 'Variáveis e tipos', summary: 'Guarde informações e entenda os tipos mais comuns.', duration: '16 min', youtubeQuery: 'variáveis e tipos programação iniciantes' },
    { id: 'f3', title: 'Condições e decisões', summary: 'Use if, else e comparações para criar comportamentos.', duration: '20 min', youtubeQuery: 'if else condições programação iniciantes' },
  ],
  python: [
    { id: 'p1', title: 'Seu primeiro script em Python', summary: 'Sintaxe básica, print e entrada de dados.', duration: '22 min', youtubeQuery: 'Python para iniciantes primeiro programa' },
    { id: 'p2', title: 'Variáveis, listas e dicionários', summary: 'Estruturas essenciais para guardar e organizar dados.', duration: '25 min', youtubeQuery: 'Python listas dicionários para iniciantes' },
    { id: 'p3', title: 'Funções na prática', summary: 'Crie blocos reutilizáveis e deixe seu código organizado.', duration: '24 min', youtubeQuery: 'Python funções def para iniciantes' },
  ],
  web: [
    { id: 'w1', title: 'HTML: estrutura da página', summary: 'Monte uma página com elementos semânticos.', duration: '20 min', youtubeQuery: 'HTML para iniciantes curso' },
    { id: 'w2', title: 'CSS: estilo e layout', summary: 'Cores, espaçamento, flexbox e responsividade.', duration: '26 min', youtubeQuery: 'CSS flexbox responsivo iniciantes' },
    { id: 'w3', title: 'JavaScript e DOM', summary: 'Faça sua página responder aos cliques e entradas.', duration: '28 min', youtubeQuery: 'JavaScript DOM para iniciantes' },
  ],
  git: [
    { id: 'g1', title: 'Git do zero', summary: 'Repositório, status, add e commit sem decorar no escuro.', duration: '18 min', youtubeQuery: 'Git para iniciantes curso português' },
    { id: 'g2', title: 'Branches', summary: 'Crie versões paralelas do projeto com segurança.', duration: '17 min', youtubeQuery: 'Git branches para iniciantes' },
    { id: 'g3', title: 'GitHub na prática', summary: 'Envie seu projeto e entenda o fluxo básico.', duration: '21 min', youtubeQuery: 'GitHub para iniciantes português' },
  ],
  linux: [
    { id: 'l1', title: 'Terminal sem medo', summary: 'Navegue por pastas e arquivos usando comandos básicos.', duration: '20 min', youtubeQuery: 'terminal Linux comandos básicos iniciantes' },
    { id: 'l2', title: 'Arquivos e permissões', summary: 'Entenda criação, leitura e permissões essenciais.', duration: '23 min', youtubeQuery: 'Linux permissões arquivos chmod iniciantes' },
    { id: 'l3', title: 'Pipes e redirecionamento', summary: 'Combine comandos para trabalhar de forma mais eficiente.', duration: '19 min', youtubeQuery: 'Linux pipe redirecionamento terminal' },
  ],
  termux: [
    { id: 't1', title: 'Primeiros passos no Termux', summary: 'Prepare o ambiente e aprenda os comandos essenciais.', duration: '20 min', youtubeQuery: 'Termux para iniciantes português' },
    { id: 't2', title: 'Python no Termux', summary: 'Instale e rode seus primeiros scripts no celular.', duration: '22 min', youtubeQuery: 'Python no Termux Android iniciantes' },
    { id: 't3', title: 'Projetos no armazenamento', summary: 'Organize arquivos e trabalhe com pastas do Android.', duration: '18 min', youtubeQuery: 'Termux armazenamento Android storage setup' },
  ],
};

export const tracks = [
  { title: 'Comece do zero', eyebrow: 'TRILHA 01', description: 'Uma base sólida para destravar sua lógica.', items: ['Lógica', 'Variáveis', 'Condições', 'Loops'], progress: 68, color: '#9b7bff', icon: Zap },
  { title: 'Construa com Python', eyebrow: 'TRILHA 02', description: 'Automatize tarefas e crie projetos que mostram seu potencial.', items: ['Sintaxe', 'Funções', 'APIs', 'Projetos'], progress: 34, color: '#55d7cb', icon: Code2 },
  { title: 'Lance na web', eyebrow: 'TRILHA 03', description: 'Do layout responsivo à primeira aplicação publicada.', items: ['HTML/CSS', 'JavaScript', 'DOM', 'Deploy'], progress: 12, color: '#f2ad65', icon: LayoutGrid },
];

export const projects = [
  { title: 'Painel de hábitos', description: 'Um dashboard pessoal para visualizar sua rotina.', difficulty: 'Intermediário', tech: ['React', 'CSS', 'LocalStorage'], progress: 72, icon: LayoutGrid, color: '#9b7bff' },
  { title: 'API de frases', description: 'Sua primeira API REST com rotas, dados e documentação.', difficulty: 'Intermediário', tech: ['Python', 'Flask', 'JSON'], progress: 30, icon: Bot, color: '#55d7cb' },
  { title: 'Portfólio terminal', description: 'Uma experiência de portfólio para quem vive no código.', difficulty: 'Avançado', tech: ['HTML', 'JavaScript', 'Git'], progress: 0, icon: TerminalSquare, color: '#f2ad65' },
  { title: 'Banco de ideias', description: 'Organize e pesquise suas ideias com persistência local.', difficulty: 'Avançado', tech: ['React', 'SQLite', 'API'], progress: 0, icon: Database, color: '#ef79ab' },
];

export const videos = [
  { title: 'Como pensar como programador', category: 'Fundamentos', duration: '12:48', level: 'Iniciante', color: '#9b7bff', art: '01' },
  { title: 'Seu primeiro script em Python', category: 'Python', duration: '18:22', level: 'Iniciante', color: '#55d7cb', art: '02' },
  { title: 'Git sem decorar comandos', category: 'Git & GitHub', duration: '09:34', level: 'Iniciante', color: '#f2ad65', art: '03' },
  { title: 'DOM: dê vida à sua página', category: 'Web', duration: '21:05', level: 'Intermediário', color: '#ef79ab', art: '04' },
];

export const achievements = [
  { title: 'Primeiro código', note: 'Você começou.', icon: FileCode2, done: true, color: '#55d7cb' },
  { title: 'Primeiro projeto', note: 'Em construção.', icon: LayoutGrid, done: true, color: '#9b7bff' },
  { title: '7 dias estudando', note: 'Faltam 2 dias.', icon: Zap, done: false, color: '#f2ad65' },
  { title: 'Mestre do Termux', note: 'Bloqueada', icon: ShieldCheck, done: false, color: '#ef79ab' },
];

export const globalResults = [
  { title: 'ModuleNotFoundError', type: 'Erro', description: 'O Python não encontrou o módulo que você tentou importar.', href: '/app/courses' },
  { title: 'Como usar funções em Python', type: 'Aula', description: 'Organize seu código em blocos reutilizáveis.', href: '/app/courses' },
  { title: 'git commit', type: 'Comando', description: 'Registra uma nova versão no histórico local.', href: '/app/lab' },
  { title: 'Construindo um conversor', type: 'Projeto', description: 'Pratique variáveis, inputs e funções com um projeto guiado.', href: '/app/projects' },
];
