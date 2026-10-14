---
name: Eliel Cezar · Manual de identidade profissional
description: Portfólio como folha técnica de manual de marca: papel branco, tinta preta, azul de cota e malha de construção exposta.
colors:
  paper: "#ffffff"
  ink: "#111111"
  cota-blue: "#1866c1"
  deep-blue: "#124d94"
  blue-mist: "#e4edf8"
  hairline: "#dcdfda"
  graphite: "#4a4d49"
typography:
  display:
    fontFamily: "Schibsted Grotesk, Arial Narrow, sans-serif"
    fontSize: "clamp(4.6rem, 13.4vw, 12.6rem)"
    fontWeight: 900
    lineHeight: 0.8
    letterSpacing: "-0.05em"
  headline:
    fontFamily: "Schibsted Grotesk, Arial Narrow, sans-serif"
    fontSize: "clamp(2.8rem, 5.6vw, 5.4rem)"
    fontWeight: 900
    lineHeight: 0.9
    letterSpacing: "-0.045em"
  title:
    fontFamily: "Schibsted Grotesk, Arial Narrow, sans-serif"
    fontSize: "1.55rem"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 700
    letterSpacing: "0.08em"
  annotation:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "0.08em"
    fontFeature: "tnum"
rounded:
  none: "0px"
spacing:
  gutter: "clamp(16px, 2vw, 28px)"
  side: "clamp(20px, 4.4vw, 64px)"
  step: "clamp(88px, 11vw, 168px)"
  prot: "clamp(14px, 1.6vw, 22px)"
components:
  button-primary:
    backgroundColor: "{colors.cota-blue}"
    textColor: "{colors.paper}"
    typography: "{typography.title}"
    rounded: "{rounded.none}"
    height: "56px"
    padding: "0 24px"
  button-primary-hover:
    backgroundColor: "{colors.deep-blue}"
  button-inverse:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.cota-blue}"
    rounded: "{rounded.none}"
    height: "56px"
    padding: "0 24px"
  button-inverse-hover:
    backgroundColor: "{colors.blue-mist}"
  link-outline:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    height: "56px"
    padding: "0 18px"
  link-outline-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  tag-current:
    backgroundColor: "{colors.cota-blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "6px 8px"
  annotation-chip:
    backgroundColor: "{colors.cota-blue}"
    textColor: "{colors.paper}"
    typography: "{typography.annotation}"
    rounded: "{rounded.none}"
    padding: "5px 8px"
  annotation-pin:
    backgroundColor: "{colors.cota-blue}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    size: "26px"
  annotation-balloon:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    width: "212px"
    padding: "10px 12px 11px"
  annotation-handle:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.none}"
    size: "7px"
---

# Design System: Eliel Cezar · Manual de identidade profissional

## Overview

**Creative North Star: "O Arquivo do Designer"**

O site é um arquivo de projeto aberto sobre a mesa: a folha branca mostra como foi construída. A malha de 12 colunas fica visível, linhas de base e áreas de proteção são desenhadas, e cada seção é uma prancha numerada com legenda. Quem olha vê o design e o código ao mesmo tempo, como numa revisão de arquivo antes da entrega.

O tom é técnico e seguro, sem cerimônia. Preto desenha a estrutura, azul é a tinta da anotação (cotas, números, ações), e variações de azul (profundo e névoa) respondem em estado e em fundo suave. Tipografia grande e comprimida faz a assinatura; tudo o mais é preciso e miúdo, como texto de manual.

A linguagem foi ampliada com uma camada de anotação (cotas, régua de colunas, seleção, chips de componente, comentários assinados, linhas-guia e rótulo de frame), sempre visível e decorativa, e com a prancha 06 Sistema, que mostra o próprio sistema (cores com hex e contraste, tipos, medidas, peças) lido do DOM em tempo de execução. O site é lido como um arquivo de Figma sobre ele mesmo.

**Key Characteristics:**
- Papel branco, tinta preta, anotação azul; azul profundo e azul névoa só como estado e fundo suave.
- Zero raio e zero sombra: tudo é reto e plano.
- A estrutura (malha, filetes, cotas) é exibida, nunca escondida.
- Hierarquia por contraste de escala: títulos enormes, rótulos minúsculos em caixa alta.
- Numeração de pranchas (01 a 07) como sistema de navegação e de ritmo.
- Camada de anotação em azul sobre o conteúdo: aria-hidden, sem eventos de ponteiro, valores medidos no DOM, removível sem alterar a página.

## Colors

Paleta de manual técnico: um branco, um preto, um azul de anotação e duas variações de apoio (profundo e névoa). No CSS, o azul profundo é `--blue-deep` e o azul névoa é `--blue-mist`.

### Primary
- **Azul de Cota** (#1866c1): a tinta de anotação. Números de prancha, rótulos, linhas do hero, botões principais, tag "Atual", links de acessibilidade e foco; na camada de anotação, cotas, seleção, chips, pinos e bordas de balão. Sobre branco tem contraste 5,66:1, o que sustenta rótulos de 0.72rem.

### Secondary
- **Azul Profundo** (#124d94): estado hover do botão principal.
- **Azul Névoa** (#e4edf8): fundo suave de itens ativos e hover em listas, e texto secundário sobre o bloco azul de contato.

### Neutral
- **Papel** (#ffffff): fundo da página e do cabeçalho (com 94% de opacidade).
- **Tinta** (#111111): texto, filetes estruturais, bordas de botões de contorno.
- **Grafite** (#4a4d49): texto secundário, descrições, legendas.
- **Filete** (#dcdfda): divisórias finas, colunas da malha, fundo de espera do retrato.

### Named Rules
**A Regra da Tinta de Cota.** Azul é anotação e ação: se um elemento é um número, uma medida, um comentário ou algo clicável principal, é azul. Texto corrido nunca é azul; o texto do balão de comentário é tinta preta, só a assinatura é azul.

**A Regra da Variação Contida.** Azul profundo e azul névoa nunca assumem uma superfície grande; só respondem (hover, ativo, fundo suave). O bloco de contato é o azul de cota pleno; nele a camada de anotação inverte para branco.

## Typography

**Display Font:** Schibsted Grotesk (com Arial Narrow, sans-serif)
**Body Font:** Hanken Grotesk (com system-ui, sans-serif)

**Character:** Um grotesco condensado e pesado para a assinatura e os títulos, e um grotesco neutro de leitura para o corpo. O contraste de peso (900 contra 400) faz o trabalho de hierarquia.

### Hierarchy
- **Display** (900, clamp(4.6rem, 13.4vw, 12.6rem), 0.8): assinatura "ELIEL CEZAR" em caixa alta, tracking -0.05em.
- **Headline** (900, clamp(2.8rem, 5.6vw, 5.4rem), 0.9): título de cada prancha (h2), tracking -0.045em.
- **Title** (800, 1.55rem, 1.1): empresa na trajetória, nome do projeto, cargo; subtítulos em 500, 1rem, grafite.
- **Body** (400, 1.0625rem, 1.55): textos de apoio, com `max-width` de 40 a 62ch e `text-wrap: pretty`.
- **Label** (700, 0.72 a 0.78rem, 0.08em, caixa alta): rótulos de especificação, metas e cotas em azul.
- **Annotation** (700, 0.72rem, 1, 0.08em, caixa alta, numerais tabulares, azul #1866c1): valores da camada de anotação (cotas, rótulo de frame, pílula de medida em branco sobre azul, chips). O texto do balão é Hanken 500, 0.82rem, 1.35, em tinta preta, sem caixa alta.

### Named Rules
**A Regra do Número Tabular.** Todo número de prancha, data ou contador usa `font-variant-numeric: tabular-nums`, para alinhar como numa tabela técnica.

## Layout

Grade de 12 colunas com `gutter` fluido (16 a 28px) dentro de um contêiner de 1440px com margens laterais de 20 a 64px. A grade é desenhada na tela por uma camada fixa de colunas com filetes laterais (a "malha"), que o visitante liga e desliga com o botão ou a tecla G.

Cada prancha abre com um cabeçalho de três zonas: número (colunas 1-2), título (3-8) e frase de apoio (9-12), sob um filete preto de 2px. Entre pranchas há um respiro vertical fluido de 88 a 168px. Conteúdo repetido (trajetória, ferramentas, formação) é organizado em tabelas e listas alinhadas à mesma grade.

Em até 900px, a navegação some e as zonas do cabeçalho empilham; em até 600px a malha cai para 4 colunas e tudo vai para coluna única.

A camada de anotação acompanha a grade: a régua de colunas põe uma cota por vão de coluna e some em até 900px; comentários ficam fora do layout, na margem direita, e só aparecem quando a margem comporta pino e balão legível (viewport a partir de cerca de 1820px); em qualquer largura menor não há comentário na tela. O rótulo "FRAME 1440 x N" fica ao pé de cada prancha, alinhado à margem lateral. A área de proteção do retrato usa `prot` (14 a 22px). A prancha 06 organiza cores em 7 colunas (4 até 900px, 2 até 600px), tipos em 7 + 5 colunas e peças em vãos de 4 colunas (6 até 900px, 12 até 600px).

## Elevation & Depth

Plano por princípio: nenhuma sombra no sistema. A profundidade vem de camadas de papel (a malha atrás, o conteúdo à frente), de filetes de espessura crescente (1px, 2px) e de inversão de cor em estados (hover escurece, o botão preenche de preto). O cabeçalho fixo ganha só um filete preto ao rolar.

### Named Rules
**A Regra do Plano Chapado.** Nada flutua: sem sombra, sem blur. Quem precisa se destacar usa filete, cor sólida ou escala.

## Shapes

Geometria reta: raio zero em tudo, bordas de 1px, retângulos e linhas. O tracejado é exceção documentada e vem do vocabulário de manual e de wireframe: a área de proteção do retrato e as caixas de peça da prancha 06 (artboards de wireframe) usam 1px dashed azul. Em qualquer outro lugar a borda é contínua. Imagens de projeto têm moldura de 1px preta com legenda abaixo.

## Components

Retos e confiantes: blocos sólidos de cor e contornos pretos, ação clara em primeiro lugar.

### Buttons
- **Shape:** retângulo sem raio, 56px de altura (38px na versão pequena do cabeçalho).
- **Primary:** fundo azul de cota, texto branco, Schibsted 800 a 1.05rem, ícone de download de 20px, padding 0 24px.
- **Hover / Focus:** fundo vira azul profundo e o ícone desce 3px; foco com contorno azul de 2px e offset de 3px (branco sobre o bloco azul).
- **Inverse:** fundo branco, texto azul, para uso sobre o bloco azul; hover em azul névoa.
- **Outline (link):** borda preta de 1px, fundo transparente, 56px; hover inverte para preto com texto branco e o ícone anda 2px na diagonal.

### Navigation
- Links do cabeçalho em Schibsted 600 a 0.95rem com número em azul à frente; sublinhado que cresce da esquerda no hover (0.35s). Some em até 900px; ficam a marca, o botão de malha e o currículo.
- Botão de malha: 34px, borda preta, ícone de grade; pressionado fica preto com texto branco.

### Tabela de trajetória
- Linha com data, empresa+cargo e descrição na grade de 12 colunas; filetes de 1px; hover com gradiente de azul névoa para transparente; item atual com data e título em azul e tag "Atual".

### Visualizador de trabalhos (signature)
- Índice numerado à esquerda (some em até 900px), item ativo com fundo azul névoa e recuo de 10px; moldura de imagem com legenda numerada; descrição, link e setas quadradas de 48px com contagem à direita. Troca de imagem com fade de 0.3s.

### Tag
- "Atual": caixa alta, 0.75rem, 800, tracking 0.08em, branco sobre azul, padding 6px 8px.

### Camada de anotação (signature)
Decorativa e sempre visível: aria-hidden, pointer-events none, valores preenchidos em tempo de execução a partir do DOM. Tudo reto, 1px, sem sombra; usa o tipo Annotation.
- **Cota:** linha horizontal de 1px com marcas de 1px nas pontas e o rótulo interrompendo a linha sobre fundo branco; variante vertical com rótulo à esquerda.
- **Régua de colunas:** uma cota por vão da malha de 12 colunas.
- **Seleção:** contorno de 1px azul, quatro alças quadradas brancas de 7px com borda azul e pílula de medida azul com texto branco (padding 5px 8px) abaixo.
- **Chip de componente:** fundo azul, texto branco, nome e medida (padding 5px 8px).
- **Comentário:** vive na margem externa do layout (nunca sobre o conteúdo), ligado à prancha por um traço de 14px. Pino quadrado azul de 26px com rabo triangular e número; balão branco plano de até 212px com borda de 1px azul, texto em tinta preta e assinatura "Eliel" com avatar quadrado de 18px. No bloco de contato, pino, borda e linha ficam brancos.
- **Linha-guia:** linha de 1px com ponta quadrada de 5px sobre o sujeito.
- **Rótulo de frame:** "FRAME 1440 x N" ao pé de cada prancha, em azul (branco no contato).

### Peças do Sistema (prancha 06)
- Amostras de cor: retângulo com borda preta de 1px, nome, hex e razão de contraste lidos das cores computadas.
- Especimes tipográficos: display 900 e texto 400 em escala grande, com lista de especificação.
- Medidas: cotas do espaçamento (gutter, margem, respiro) com valor medido.
- Peças: botão, link, tag, alternador e seta dentro de caixas 1px dashed azul de 72px de altura mínima, com chip de nome e medida; inertes (sem ponteiro, sem hover).

## Do's and Don'ts

### Do:
- **Do** manter raio zero, borda de 1px e nenhuma sombra em qualquer elemento novo.
- **Do** usar azul (#1866c1) para anotação, número e ação principal.
- **Do** expor a estrutura: cotas, filetes e legendas com rótulos em caixa alta a 0.72 a 0.78rem e tracking 0.08em.
- **Do** manter novas anotações decorativas (aria-hidden, sem ponteiro), com valores medidos do DOM e não digitados, e azul #1866c1 sobre branco (ou branco sobre o azul de contato).
- **Do** usar o tracejado azul de 1px só para área de proteção e para caixas de peça de wireframe.
- **Do** numerar pranchas e legendas, com algarismos tabulares.
- **Do** respeitar `prefers-reduced-motion` e manter foco visível com contorno de 2px.

### Don't:
- **Don't** introduzir cantos arredondados, sombras, gradientes decorativos ou vidro (os gradientes das cotas são só técnica para desenhar linhas de 1px).
- **Don't** transformar a camada de anotação em interface: sem foco, sem clique, sem informação que só ela carregue.
- **Don't** usar azul profundo ou azul névoa como superfície grande, nem azul como cor de texto corrido.
- **Don't** esconder a malha como se fosse ruído: ela é parte da identidade (com toggle para quem prefere sem).
- **Don't** usar mais de duas famílias tipográficas nem pesos intermediários sem papel claro.
