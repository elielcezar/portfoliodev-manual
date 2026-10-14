# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Recrutadores e gestores de tecnologia avaliando a senioridade e a liderança de Eliel Cezar para vagas (o site informa abertura a vagas remotas). Depois da visita, a ação esperada é baixar o currículo ou entrar em contato (LinkedIn, e-mail, WhatsApp).

## Product Purpose
Portfólio profissional oficial de Eliel Cezar, desenvolvedor front end e UI designer em Curitiba, designer gráfico de formação, na web desde 2007, hoje tech lead de um time de 5 desenvolvedores. O site existe para provar, em uma página, que ele une design e código e lidera pessoas. Sucesso: o visitante baixa o currículo ou inicia contato.

## Positioning
Um designer gráfico que virou desenvolvedor e lidera time: o próprio site é a prova, apresentado como um manual de identidade profissional, algo que um dev puro não montaria com esse repertório de marca.

## Capabilities and Constraints
- Página única em HTML, CSS e JavaScript puros, sem build nem dependências; feito à mão (afirmado no rodapé).
- Seções (pranchas): 01 Assinatura (hero), 02 Trajetória, 03 Trabalhos (visualizador com 11 projetos, deep link `#trabalho-<id>`), 04 Ferramentas, 05 Formação, 06 Contato.
- Ações: baixar currículo (PDF em `assets/docs/`), LinkedIn, GitHub, e-mail, WhatsApp.
- Idioma: português do Brasil.
- Em aberto: o contador "/ 11" do visualizador é fixo no HTML; a lista de projetos pode mudar.

## Brand Commitments
- Nome e voz: Eliel Cezar, primeira pessoa, direta e bem-humorada.
- O conceito "manual de identidade profissional" (pranchas numeradas, malha de construção, cotas, legendas) é bom e deve ser mantido.
- Direção declarada pelo dono para a próxima evolução, registrada sem expandir: aprofundar o conceito com mais elementos de design system, manual de marca e wireframe; mais elementos em azul com setas e comentários sobre os elementos em tela e anotações de medidas, como se o site fosse um projeto no Figma.

## Evidence on Hand
- Projetos reais com URL e thumbnail em `assets/img/work/` (Assaí, Retail Media Assaí, Churrasco Assaí, Fort Atacadista, Psicodelia, Task List, Truss Professional, DH Law, Fora dos Autos, Pura Web, Detail).
- Trajetória: Grupo Uninter (2007-2010), eBehavior (2010-2011), Buscapé (2011-2014), M2E Comunicação (2014-2016), MegaMidia (2016-hoje).
- Formação: Design Gráfico (UTFPR, 2003-2007) e pós em Software para Dispositivos Móveis (UTFPR, 2015-2017).
- Retrato em `assets/img/eliel.webp` e currículo em PDF.
- Não há depoimentos, métricas de resultado nem prêmios; não inventar.

## Product Principles
1. O site é a demonstração: cada detalhe de design e de código deve poder ser inspecionado como prova de ofício.
2. O conceito de manual de marca organiza o conteúdo; nunca atrapalha a leitura nem o caminho até o currículo e os contatos.
3. Mostrar trabalho real e verificável (links vivos), sem inflar claims.
4. Liderança e design aparecem ao lado do código, não escondidos atrás dele.
5. Leve, rápido e acessível: sem dependências, funciona sem JavaScript.

## Accessibility & Inclusion
Já praticado e a preservar: skip link, navegação por teclado (setas no visualizador, tecla G para a malha), `prefers-reduced-motion` respeitado, estados de foco visíveis, `aria-current`/`aria-pressed`.
