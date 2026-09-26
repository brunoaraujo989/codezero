O próximo ajuste visual do CodeZero deve adotar os princípios de legibilidade, contexto e acessibilidade encontrados na Wikipédia e no sistema Codex, mas traduzi-los em uma linguagem própria. A direção recomendada é uma interface de conteúdo com medida de leitura controlada (65–75 caracteres por linha), uma área de trabalho mais ampla para navegação e utilidades, três camadas de escopo claramente nomeadas e divulgação progressiva no mobile. O CodeZero deve parecer um produto editorial contemporâneo e independente — não uma variação da Wikipédia —, com tokens, ícones, tipografia, cores e componentes próprios.

## 1. Padrões visuais encontrados

### 1.1 Wikipédia no desktop: leitura delimitada e contexto persistente

O Vector 2022 separa três problemas de escala: o **content container**, limitado a aproximadamente 960 px; o **workspace container**, de cerca de 1.440 px; e o **page container**, de até aproximadamente 1.650 px. Essa arquitetura permite que o artigo permaneça confortável para leitura sem desperdiçar todo o espaço lateral: cabeçalho, navegação, sumário e ferramentas ocupam o espaço excedente quando têm utilidade.

Os padrões mais relevantes são:

- **Largura de leitura limitada:** linhas longas aumentam a fadiga e dificultam localizar o início da linha seguinte. A limitação é tratada como decisão funcional, não como falha de aproveitamento da tela.
- **Navegação global separada das ações da página:** menu principal, conta e utilidades do site não competem visualmente com editar, discutir, consultar histórico ou alternar idioma do item atual.
- **Navegação estrutural persistente:** o sumário fica ao lado do artigo, acompanha a rolagem e destaca a seção atual. Subseções podem ser recolhidas em documentos muito longos, mantendo a visão geral navegável.
- **Cabeçalho sticky com poucas funções de alta frequência:** busca, identidade, contexto da página e ações recorrentes continuam disponíveis sem exigir retorno ao topo.
- **Busca e idioma mais descobríveis:** a busca ganhou maior proeminência e o idioma foi aproximado do título, reduzindo o custo de encontrar essas tarefas.
- **Controles de leitura explícitos:** largura, tamanho do texto e tema claro/escuro são preferências reconhecíveis, não opções escondidas em uma configuração genérica.
- **Whitespace como estrutura:** o espaço vazio demarca as bordas do artigo e separa conteúdo de utilidades. Não é necessário preencher cada região da tela com links ou cards.

Há compromissos importantes. A largura limitada pode aumentar a rolagem e prejudicar tabelas, código ou outros blocos largos; um sumário em coluna estreita pode quebrar títulos extensos; e elementos sticky podem consumir área vertical em telas menores. Portanto, esses padrões devem ser tratados como hipóteses a validar no contexto do CodeZero, não como regras universais.

### 1.2 Wikipédia no mobile: compressão sem perder a tarefa principal

O Minerva transforma a mesma base editorial em uma experiência vertical e mais leve. O topo compacto combina menu, marca, busca e menu do usuário. Ações como item atual, discussão, idioma, PDF, acompanhamento e fonte aparecem como ações contextuais em vez de uma barra lateral sempre visível. Painéis secundários ficam ocultos por padrão e seções podem ser expandidas ou recolhidas.

O padrão não é simplesmente “encolher o desktop”. Ele preserva a rota direta para ler e buscar, reduz a quantidade de escolhas no primeiro viewport e transforma navegação lateral em drawer ou painel contextual. Isso favorece toque, carregamento e progressão incremental, mas exige nomes claros, alvos confortáveis e equivalentes de teclado e leitor de tela.

### 1.3 Codex: sistema antes de decoração

O Codex organiza a interface em tokens, componentes, padrões de interação e documentação. A separação entre valores primitivos, tokens semânticos, tokens de componente e modos como escuro/alto contraste reduz valores hard-coded e permite evolução consistente.

Os princípios transferíveis ao CodeZero são:

- semântica antes de estilo: **Link** navega; **Button** executa uma ação;
- composição de componentes existentes antes de criar variantes monolíticas;
- estados de foco, hover, ativo, desabilitado, erro e carregamento documentados;
- contraste AA, zoom com unidades relativas, HTML semântico, nomes acessíveis para ícones e ausência de dependência exclusiva de cor;
- suporte planejado a idiomas, strings longas, RTL e propriedades CSS lógicas;
- ficha de especificação para cada componente, com anatomia, limites, variantes, breakpoints, teclado e exemplos do/don’t.

### 1.4 Identidade Wikimedia: princípios úteis, ativos protegidos

A Wikimedia e a Wikipédia combinam uma identidade sóbria, monocromática e orientada a conteúdo com marcas protegidas: globo-puzzle, W, wordmarks, ícones e composições institucionais. A referência segura para o CodeZero está nos princípios — neutralidade, clareza, legibilidade, acessibilidade e documentação —, não na reprodução de símbolos, fontes de marca, proporções, SVGs, clear space ou combinações que possam sugerir afiliação ou endosso.

O Codex é um sistema de produto distinto das cores e marcas institucionais. Isso reforça uma decisão importante: o CodeZero deve possuir tokens e ativos visuais originais, mesmo quando adota boas práticas semelhantes.

## 2. O que adotar, adaptar e evitar

| Decisão | Adotar no CodeZero | Adaptar ao produto | Evitar |
|---|---|---|---|
| Medida de leitura | Limitar o corpo a 65–75 caracteres por linha; usar uma unidade como `ch` e preservar largura confortável | Oferecer modo expandido para tabelas, código, mapas ou comparações, sem esticar automaticamente parágrafos | Fazer o texto ocupar toda a largura do viewport ou impor uma largura única a qualquer conteúdo |
| Arquitetura | Separar navegação global, ações do item atual e preferências de leitura | Nomear as camadas com vocabulário do CodeZero e recolher cada uma no desktop | Copiar a hierarquia, nomenclatura ou aparência da Wikipédia |
| Sumário/contexto | Manter posição/seção atual disponível em documentos longos | Transformar o índice em painel contextual conforme o tipo de conteúdo; abaixo de um breakpoint, usar drawer | Criar uma segunda navegação concorrente ou deixar um sticky alto demais |
| Cabeçalho | Tornar sticky apenas identidade, contexto e poucas ações comprovadamente frequentes | Testar quais ações devem aparecer por persona e estado de login | Fixar todas as ferramentas e ocupar a área de leitura |
| Tipografia | Stack do sistema, escala em `rem`, line-height entre 1,5 e 1,6, títulos semanticamente ordenados | Escolher uma personalidade própria, preferencialmente sans-serif neutra para interface e conteúdo | Imitar wordmarks, serifas ou construção tipográfica associada à Wikimedia |
| Cor | Tokens semânticos para superfície, texto, ação e estados; contraste AA em claro e escuro | Definir uma cor de ação original e validar contraste com cada fundo | Reutilizar HEX, azul/cinza e hierarquia de marca que façam o produto parecer oficial |
| Cards | Usar cards para unidades autônomas como salvos, relacionados, resultados ou status | Variar elevação, borda e densidade conforme a função | Colocar cada parágrafo, link ou controle dentro de um card decorativo |
| Ícones e ilustrações | Formas simples, monocromáticas, legíveis e com nome acessível | Criar grade, stroke, metáforas e comportamento RTL próprios | Traçar ou adaptar globo-puzzle, W, ícones do Codex ou SVGs oficiais |
| Pesquisa e validação | Testar com conteúdo real, idiomas, comprimentos e tarefas mensuráveis | Instrumentar rolagem, sucesso, tempo, busca e uso de preferências | Avaliar apenas semelhança visual com a Wikipédia |

## 3. Direção visual concreta para o próximo incremento

### 3.1 Layout e responsividade

**Desktop largo (a partir de 1.200 px):**

- page container com `max-width: 1.440px` e gutters responsivos;
- navegação global recolhível de 224–256 px;
- coluna de leitura com `max-width: 72ch` (ajustar após teste para manter 65–75 caracteres reais em português e idiomas prioritários);
- painel contextual de 224–280 px para índice, progresso, relacionados ou ações do item atual;
- utilidades laterais apenas quando tiverem tarefa comprovada;
- cabeçalho sticky compacto, com identidade, busca, contexto da página e ação primária.

A coluna editorial deve permanecer central e visualmente dominante. Quando houver um bloco largo, ele pode escapar controladamente da medida de leitura com um modo `wide`, sem alterar a largura dos parágrafos ao redor.

**Desktop médio e tablet (900–1.199 px):**

- recolher a navegação global por padrão;
- manter a leitura em aproximadamente 65–75ch;
- converter o painel contextual em botão “Neste conteúdo”, “Contexto” ou rótulo equivalente;
- não empilhar três colunas estreitas.

**Mobile (até 899 px):**

- primeiro viewport com apenas identidade, busca, título e ação primária;
- navegação global em drawer;
- ações do item atual em painel contextual ou barra de ações horizontalmente rolável, com rótulos claros;
- preferências de leitura em disclosure separado;
- sumário, metadados e seções secundárias recolhidos, mas com estado anunciado e facilmente reaberto;
- alvos de toque de pelo menos 44 × 44 CSS px e rota equivalente por teclado.

As três camadas devem ser visíveis na arquitetura de informação mesmo quando seus painéis estão fechados: **Navegação**, **Ações deste item** e **Leitura**. Essa nomeação evita que o usuário precise descobrir por tentativa onde está cada configuração.

### 3.2 Tipografia e conteúdo

Usar uma stack de sistema que não dependa de uma única fonte:

```css
font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
  "Segoe UI", sans-serif;
```

Proposta inicial, a validar com conteúdo real:

- corpo: `1rem` / `1.6`, peso 400;
- texto auxiliar: `0.875rem` / `1.5`, sem reduzir a ponto de perder legibilidade;
- título da página: `2rem` / `1.2`, peso 700;
- headings de seção: `1.5rem` / `1.3` e `1.25rem` / `1.35`;
- labels e controles: `0.875–1rem` / `1.4`, peso 600 quando necessário;
- espaçamento baseado em múltiplos de 4 ou 8 px, com exceções documentadas.

A ordem `h1`–`h6` deve refletir a estrutura, não apenas o tamanho visual. Textos longos, traduções, números e nomes próprios devem quebrar e expandir; evitar truncamento que esconda contexto. Preferências de tamanho devem usar unidades relativas e continuar funcionando com zoom do navegador.

### 3.3 Paleta, tokens e temas

A paleta deve ser própria do CodeZero e semanticamente nomeada. Exemplo inicial de direção — os valores devem passar por validação automatizada de contraste e teste visual:

```text
surface/default:  #FBFCFE
surface/raised:   #FFFFFF
surface/muted:    #F1F4F8
text/primary:     #17212B
text/secondary:   #536273
border/subtle:    #D8E0E8
action/default:   #1B5FBF
action/hover:     #154A93
focus/ring:       #0B716B
success:          #18794E
warning:          #8A5700
danger:           #B42318
```

Esses tokens são uma proposta de trabalho, não uma autorização para replicar a paleta Wikimedia. Cada combinação deve atingir pelo menos 4,5:1 para texto normal e 3:1 para texto grande ou elementos gráficos relevantes, conforme aplicável. Estados devem combinar cor com texto, ícone, sublinhado, contorno, posição ou mudança de comportamento. O tema escuro deve ser um modo semântico próprio, não apenas uma inversão mecânica.

### 3.4 Densidade e cards

Adotar uma densidade editorial confortável: corpo com respiro generoso, separação por espaço e divisores de 1 px somente quando ajudarem a agrupar. A interface de utilidades pode ser mais compacta, desde que preserve foco e toque.

Cards não devem virar o componente padrão da página. Recomenda-se:

- conteúdo principal em superfície plana, sem moldura pesada;
- cards com borda sutil e raio moderado para “Salvos”, “Relacionados”, resultados de busca, status ou uma tarefa autônoma;
- nenhum card envolvendo cada parágrafo ou seção apenas para produzir textura;
- hierarquia por espaçamento, tipografia e alinhamento antes de sombra;
- estados de card documentados para repouso, hover, foco, selecionado, carregando, vazio e erro.

### 3.5 Navegação, hover e estados de interação

- **Link:** texto com affordance de navegação; sublinhado ou outro indicador persistente no corpo, não apenas mudança de cor.
- **Button:** ação local com rótulo claro; botão somente com ícone exige nome acessível e tooltip opcional, nunca tooltip como único rótulo.
- **Hover:** leve mudança de superfície ou sublinhado e preservação de contraste; não transformar o hover em salto de layout.
- **Focus-visible:** anel de foco de 2–3 px, com espaço suficiente e contraste, sempre visível no teclado.
- **Active/selected:** combinar indicador estrutural (barra, contorno, peso tipográfico ou ícone) com cor; manter indicação ao trocar tema.
- **Disabled:** reduzir disponibilidade sem depender apenas de baixa opacidade; explicar o motivo quando isso evitar confusão.
- **Error/success/warning:** usar ícone, título e mensagem textual, além de cor; posicionar a mensagem junto ao campo ou tarefa afetada.
- **Sticky:** definir altura máxima, comportamento ao rolar e compensação de âncora para headings. Validar se não encobre o início de uma seção.

### 3.6 Loading, vazio e falha

O loading deve preservar o esqueleto do conteúdo para evitar deslocamento: reservar espaço para título, metadados, índice e blocos principais. Usar skeleton discreto ou indicador de progresso contextual; respeitar `prefers-reduced-motion` e não usar animação decorativa como única informação.

Cada carregamento precisa ter três saídas explícitas:

1. sucesso, com transição curta e estável;
2. vazio, com explicação e próximo passo útil;
3. erro, com causa compreensível, ação de tentar novamente e, quando possível, alternativa offline ou retorno à última informação válida.

Durante carregamento parcial, manter navegação e título disponíveis quando isso permitir que o usuário se oriente. Não substituir a página inteira por um spinner sem contexto.

## 4. Checklist de implementação

### Fundação visual

- [ ] Criar arquivo de tokens primitives, semânticos, de componente e modos claro/escuro.
- [ ] Remover valores visuais hard-coded dos componentes novos.
- [ ] Registrar nome, propósito, não propósito e contexto de uso de cada token.
- [ ] Definir logo, wordmark, ícones e ilustrações originais do CodeZero; revisar risco de semelhança ou associação indevida.
- [ ] Documentar licença e origem de qualquer asset externo.

### Layout e conteúdo

- [ ] Implementar medida editorial em `ch` e confirmar 65–75 caracteres por linha em telas e idiomas prioritários.
- [ ] Separar content, workspace e page containers sem criar colunas concorrentes estreitas.
- [ ] Implementar as camadas Navegação, Ações deste item e Leitura com estados recolhido/aberto.
- [ ] Definir modo `wide` para tabelas, código e blocos que realmente necessitem de largura.
- [ ] Garantir que títulos, labels e mensagens longas quebrem sem truncamento destrutivo.
- [ ] Provar o comportamento em artigos curtos, médios, muito longos e com mais de 28 seções.

### Tipografia e acessibilidade

- [ ] Usar HTML semântico e uma sequência correta de headings.
- [ ] Validar zoom, tamanho de texto e reflow sem perda de conteúdo ou função.
- [ ] Verificar contraste AA para texto, links, controles, foco e estados em claro e escuro.
- [ ] Testar navegação completa por teclado, foco visível, leitor de tela e ordem de leitura.
- [ ] Dar nomes acessíveis a controles somente com ícone e alt text funcional a imagens.
- [ ] Manter alvos de toque confortáveis e equivalentes de teclado para disclosures e drawers.
- [ ] Testar `prefers-reduced-motion` e ausência de animação essencial.

### Responsividade e internacionalização

- [ ] Testar pelo menos desktop largo, desktop médio, tablet e mobile real.
- [ ] Testar português, inglês e strings 30–50% mais longas, além de títulos sem espaços quando aplicável.
- [ ] Implementar strings via API de tradução com chaves estáveis, parâmetros e fallback.
- [ ] Validar RTL com propriedades CSS lógicas; espelhar somente elementos direcionais.
- [ ] Preservar URLs, e-mails, números, moeda, horários e visualizações de dados sem espelhamento indevido.

### Qualidade e aprendizado

- [ ] Prototipar com conteúdo real antes de polir a aparência.
- [ ] Medir tempo para encontrar uma página, alternar contexto, retomar uma seção e ajustar legibilidade.
- [ ] Medir rolagem desnecessária, sucesso por teclado/toque, descoberta de busca e uso do índice.
- [ ] Comparar baseline e nova versão com teste qualitativo e quantitativo; não usar semelhança com a Wikipédia como métrica.
- [ ] Publicar demos executáveis dos componentes e registrar decisões, exceções e evidências.
- [ ] Fazer revisão de acessibilidade, internacionalização, marca e conteúdo antes do rollout.

## 5. Recomendações prioritárias para o próximo ciclo

1. **Começar pela medida de leitura e pelo sistema de containers:** implementar `max-width` editorial em `ch`, workspace separado e modo `wide` para conteúdo excepcionalmente largo.
2. **Reorganizar a arquitetura em três escopos:** navegação global, ações do item atual e preferências de leitura, com recolhimento no desktop e drawers contextuais no mobile.
3. **Criar tokens e uma paleta própria do CodeZero:** incluir claro/escuro, foco, estados semânticos e uma política explícita contra valores hard-coded e comunicação exclusivamente por cor.
4. **Consolidar tipografia acessível:** stack de sistema, escala em `rem`, line-height de 1,5–1,6, headings semânticos e testes com strings longas, zoom e múltiplos idiomas.
5. **Redesenhar cards e navegação por função:** superfície plana para leitura; cards apenas para unidades autônomas; sticky limitado a identidade, contexto e ações frequentes.
6. **Especificar estados antes do acabamento visual:** hover, foco, ativo, desabilitado, loading, vazio e erro, incluindo redução de movimento e equivalentes para teclado/leitor de tela.
7. **Rodar um protótipo instrumentado com conteúdo real:** comparar tarefas de busca, navegação, retomada e ajuste de legibilidade, medindo tempo, rolagem, sucesso e compreensão.
8. **Concluir uma revisão de diferenciação de marca:** garantir que logo, ícones, cores, tipografia e composição sejam independentes das marcas Wikipédia/Wikimedia e não sugiram autorização ou afiliação.

## Referências

1. https://www.mediawiki.org/wiki/Skin:Vector/2022
2. https://www.mediawiki.org/wiki/Skin/Vector/2022/Design_documentation
3. https://www.mediawiki.org/wiki/Reading/Web/Desktop_Improvements/Features/Limiting_content_width
4. https://www.mediawiki.org/wiki/Reading/Web/Desktop_Improvements/Features/Sticky_Header
5. https://www.mediawiki.org/wiki/Reading/Web/Desktop_Improvements/Features/Table_of_contents
6. https://www.mediawiki.org/wiki/Skin/Minerva_Neue
7. https://doc.wikimedia.org/codex/latest/design-tokens/overview.html
8. https://doc.wikimedia.org/codex/latest/contributing/designing-components.html
9. https://doc.wikimedia.org/codex/latest/style-guide/accessibility.html
10. https://doc.wikimedia.org/codex/latest/style-guide/typography.html
11. https://doc.wikimedia.org/codex/latest/style-guide/bidirectionality.html
12. https://doc.wikimedia.org/codex/latest/style-guide/using-links-and-buttons.html
13. https://foundation.wikimedia.org/wiki/Legal:Visual_identity_guidelines
14. https://meta.wikimedia.org/wiki/Brand/logo
15. https://wikimediafoundation.org/news/2023/01/18/wikipedia-gets-a-fresh-new-look-first-desktop-update-in-a-decade-puts-usability-at-the-forefront/
