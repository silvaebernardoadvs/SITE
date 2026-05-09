# Proposta de Novo Conceito Visual (v9)

Baseado na referência `mont-fort.com` e na nossa conversa, a proposta é modernizar a landing page do Silva & Bernardo Advogados incorporando elementos visuais sofisticados e animações sutis, sem comprometer a clareza, profissionalismo e desempenho. O foco será em criar uma experiência fluida e elegante, utilizando as cores institucionais (verde inglês #1B4D3E e dourado #D4AF37) de forma estratégica.

## Elementos Chave:

1.  **Layout Geral:**
    *   Manter uma estrutura clara e de fácil navegação, similar à atual, mas com um design mais espaçado e moderno.
    *   Utilizar mais "espaço em branco" para melhorar a legibilidade e dar um ar mais sofisticado.
    *   Revisar a tipografia, talvez utilizando uma combinação de fontes serifadas (para títulos, transmitindo tradição e confiança) e sans-serif (para corpo de texto, garantindo legibilidade).

2.  **Cores:**
    *   **Verde Inglês (#1B4D3E):** Usar como cor principal para fundos de seções escuras, textos importantes sobre fundos claros e elementos gráficos.
    *   **Dourado (#D4AF37):** Utilizar como cor de destaque para botões de ação (CTAs), links importantes, títulos na seção hero, ícones e detalhes sutis em animações (como partículas ou brilhos discretos).
    *   **Cores Neutras:** Manter fundos claros (branco ou cinza muito claro) para seções de conteúdo principal para garantir contraste e legibilidade.

3.  **Animações e Efeitos (WebGL/JS/CSS):**
    *   **Hero Section (Início):**
        *   **Fundo:** Em vez de uma imagem estática com overlay, considerar um fundo com gradiente suave em tons de verde escuro ou um vídeo/animação abstrata muito sutil em loop (ex: partículas douradas flutuando lentamente sobre fundo verde escuro, ou linhas geométricas se movendo devagar). Isso pode ser feito com CSS ou uma biblioteca JS leve.
        *   **Texto e CTA:** Animação de entrada suave (fade-in e leve slide-up) para o título, parágrafo e botão CTA.
    *   **Transições de Seção:** Implementar transições suaves (fade ou slide sutil) quando o usuário rola a página e uma nova seção entra na visão. Isso pode ser feito com JavaScript (Intersection Observer API + CSS/GSAP).
    *   **Efeitos de Rolagem (Parallax):** Aplicar um efeito parallax discreto em imagens de fundo de algumas seções (se aplicável) ou em elementos gráficos decorativos para adicionar profundidade.
    *   **Hover Effects:**
        *   **Botões e Links:** Efeitos de hover mais pronunciados, talvez com mudança de cor/sombra mais suave ou um leve crescimento.
        *   **Cards (Nichos de Atuação/Equipe):** Efeito de "lift" (leve elevação e sombra) ao passar o mouse, talvez com um brilho sutil na borda usando a cor dourada.
    *   **Elementos Interativos:** Pequenas microinterações em elementos como o formulário de contato (feedback visual ao preencher campos).

4.  **Tecnologias:**
    *   Utilizar CSS moderno para layout (Flexbox/Grid) e animações básicas.
    *   Empregar JavaScript para controle de animações mais complexas (ex: transições de seção, parallax) usando bibliotecas como GSAP (GreenSock Animation Platform) que é performática e versátil.
    *   Para efeitos de partículas ou fundos animados mais elaborados, avaliar bibliotecas como `particles.js` ou, se estritamente necessário e de forma otimizada, `Three.js` para um canvas WebGL discreto (evitando modelos 3D pesados).

## Próximos Passos (Plano):

*   **003: Propor novo layout e experiência visual:** Esboçar a nova estrutura no `index.html` e `style.css`, definindo as novas fontes, layout das seções e posicionamento dos elementos.
*   **004: Planejar implementação com WebGL ou similar:** Detalhar quais bibliotecas JS serão usadas e como integrar os efeitos animados planejados.
*   **005: Adaptar conteúdo e identidade visual:** Ajustar o conteúdo existente ao novo layout e garantir a aplicação consistente das cores e fontes.
*   **006: Validar protótipo:** Testar visualmente e funcionalmente as animações e a responsividade.
*   **007: Gerar e enviar nova versão:** Criar o ZIP para aprovação.
*   **008: Implantar:** Publicar a versão final.

Esta abordagem busca um equilíbrio entre modernidade visual inspirada na referência e a funcionalidade/profissionalismo necessários para o site do escritório.
