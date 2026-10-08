/* =========================================================
   script.js | Portfólio de Gustavo Denardi França
   Módulos: tema, revelação ao rolar, parallax, busca e onda
   Cada módulo só roda se os elementos dele existirem na página,
   então o mesmo arquivo serve para o index e para os projetos.
   ========================================================= */
(() => {
  'use strict';

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Remove acentos e caixa para a busca ("eletrônica" casa com "eletronica")
  const normalizar = (txt) =>
    txt.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().trim();

  /* ---------- Tema claro / escuro ---------- */
  function iniciarTema() {
    const raiz = document.documentElement;
    const botao = $('#tema');
    const metaCor = $('meta[name="theme-color"]');
    const CORES = { dark: '#0c1624', light: '#f4f7fb' };

    const aplicar = (tema, salvar) => {
      raiz.dataset.theme = tema;
      if (metaCor) metaCor.setAttribute('content', CORES[tema]);
      if (botao) {
        botao.setAttribute(
          'aria-label',
          tema === 'dark' ? 'Mudar para o tema claro' : 'Mudar para o tema escuro'
        );
      }
      if (salvar) {
        try {
          localStorage.setItem('tema', tema);
        } catch (_) {
          /* armazenamento indisponível: o tema vale só nesta visita */
        }
      }
      document.dispatchEvent(new CustomEvent('temamudou', { detail: tema }));
    };

    // O <head> já definiu data-theme (escuro por padrão); aqui só sincroniza o botão
    aplicar(raiz.dataset.theme === 'light' ? 'light' : 'dark', false);

    if (botao) {
      botao.addEventListener('click', () => {
        aplicar(raiz.dataset.theme === 'dark' ? 'light' : 'dark', true);
      });
    }
  }

  /* ---------- Elementos que aparecem ao rolar ---------- */
  function iniciarReveal() {
    // Atraso escalonado para os filhos de [data-stagger]
    $$('[data-stagger]').forEach((grupo) => {
      Array.from(grupo.children).forEach((el, i) => {
        el.style.setProperty('--d', `${i * 90}ms`);
      });
    });

    const alvos = $$('.reveal');
    if (reduzMovimento || !('IntersectionObserver' in window)) {
      alvos.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observador = new IntersectionObserver(
      (entradas, obs) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.classList.add('is-visible');
            obs.unobserve(entrada.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    alvos.forEach((el) => observador.observe(el));
  }

  /* ---------- Parallax do fundo ---------- */
  function iniciarParallax() {
    const imagem = $('.bg-parallax__img');
    if (!imagem || reduzMovimento) return;

    const VELOCIDADE = 0.35; // 0 = parado, 1 = acompanha a rolagem
    let agendado = false;

    const atualizar = () => {
      imagem.style.transform = `translate3d(0, ${(window.scrollY * VELOCIDADE).toFixed(1)}px, 0)`;
      agendado = false;
    };

    window.addEventListener(
      'scroll',
      () => {
        if (!agendado) {
          agendado = true;
          requestAnimationFrame(atualizar);
        }
      },
      { passive: true }
    );
    atualizar();
  }

  /* ---------- Busca de projetos em tempo real ---------- */
  function iniciarBusca() {
    const input = $('#busca');
    const lista = $('#projetos-lista');
    if (!input || !lista) return;

    const contagem = $('#contagem');
    const vazio = $('#vazio');
    const termoVazio = $('#termo-vazio');
    const limpar = $('#limpar-busca');
    const chips = $$('[data-filtro]');

    // Texto pesquisável de cada projeto: título + tags
    const itens = $$(':scope > li', lista).map((el) => ({
      el,
      texto: normalizar(
        [
          $('.card__title', el)?.textContent ?? '',
          ...$$('.tag', el).map((t) => t.textContent),
        ].join(' ')
      ),
    }));

    const filtrar = () => {
      const bruto = input.value.trim();
      const termos = normalizar(bruto).split(/\s+/).filter(Boolean);
      let visiveis = 0;

      itens.forEach(({ el, texto }) => {
        const combina = termos.every((t) => texto.includes(t));
        el.hidden = !combina;
        if (combina) visiveis += 1;
      });

      if (bruto) {
        contagem.textContent =
          visiveis === 1 ? '1 projeto encontrado' : `${visiveis} projetos encontrados`;
      } else {
        contagem.textContent = visiveis === 1 ? '1 projeto' : `${visiveis} projetos`;
      }

      vazio.hidden = visiveis !== 0;
      termoVazio.textContent = bruto;

      chips.forEach((chip) => {
        const ativo = bruto !== '' && normalizar(chip.dataset.filtro) === normalizar(bruto);
        chip.setAttribute('aria-pressed', String(ativo));
      });
    };

    input.addEventListener('input', filtrar);

    input.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape' && input.value) {
        input.value = '';
        filtrar();
      }
    });

    // Atalho "/" foca a busca (fora de campos de texto)
    document.addEventListener('keydown', (ev) => {
      const emCampo = /^(input|textarea|select)$/i.test(document.activeElement?.tagName ?? '');
      if (ev.key === '/' && !emCampo && !ev.ctrlKey && !ev.metaKey && !ev.altKey) {
        ev.preventDefault();
        input.focus();
      }
    });

    // Botões de tecnologia do hero: aplicam (ou removem) o filtro
    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        const alvo = chip.dataset.filtro;
        input.value = normalizar(input.value) === normalizar(alvo) ? '' : alvo;
        filtrar();
        $('#projetos')?.scrollIntoView({
          behavior: reduzMovimento ? 'auto' : 'smooth',
          block: 'start',
        });
      });
    });

    if (limpar) {
      limpar.addEventListener('click', () => {
        input.value = '';
        filtrar();
        input.focus();
      });
    }

    // Permite links como index.html?busca=ESP32#projetos
    const inicial = new URLSearchParams(window.location.search).get('busca');
    if (inicial) input.value = inicial;
    filtrar();
  }

  /* ---------- Onda interativa (oscilação na rede) ---------- */
  function iniciarOnda() {
    const canvas = $('#onda');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dica = $('.wave__hint');

    // Parâmetros da onda
    const BASE = 5; // amplitude de repouso (px)
    const K = 0.045; // número de onda (rad/px)
    const W = 7.5; // frequência angular (rad/s)
    const TAU = 2.6; // tempo de amortecimento (s)
    const ALCANCE = 320; // distância em que a perturbação some (px)

    const eventos = []; // perturbações ativas: { x, t, a }
    const inicio = performance.now();
    const agora = () => (performance.now() - inicio) / 1000;

    let w = 0;
    let h = 0;
    let cor = '#f5b941';
    let eixo = '#243955';
    let raf = 0;
    let visivel = true;
    let ultimoX = null;
    let ultimoT = 0;

    const lerCores = () => {
      const estilo = getComputedStyle(document.documentElement);
      cor = estilo.getPropertyValue('--accent').trim() || cor;
      eixo = estilo.getPropertyValue('--line').trim() || eixo;
    };

    const medir = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const caixa = canvas.getBoundingClientRect();
      w = caixa.width;
      h = caixa.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    // Deslocamento vertical da onda no ponto x, no instante t
    const altura = (x, t) => {
      let v = BASE * Math.sin(x * 0.011 - t * 0.9) + BASE * 0.5 * Math.sin(x * 0.027 + t * 1.4);
      for (const e of eventos) {
        const dt = t - e.t;
        if (dt < 0) continue;
        const d = Math.abs(x - e.x);
        v += e.a * Math.exp(-dt / TAU) * Math.exp(-d / ALCANCE) * Math.cos(d * K - dt * W);
      }
      return v;
    };

    const desenhar = (t) => {
      ctx.clearRect(0, 0, w, h);

      // Eixo de referência (frequência nominal)
      ctx.strokeStyle = eixo;
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 6]);
      ctx.beginPath();
      ctx.moveTo(0, h / 2);
      ctx.lineTo(w, h / 2);
      ctx.stroke();
      ctx.setLineDash([]);

      // Curva
      const limite = h / 2 - 4;
      ctx.strokeStyle = cor;
      ctx.lineWidth = 2;
      ctx.lineJoin = 'round';
      ctx.beginPath();
      for (let x = 0; x <= w; x += 3) {
        const v = Math.max(-limite, Math.min(limite, altura(x, t)));
        if (x === 0) ctx.moveTo(x, h / 2 + v);
        else ctx.lineTo(x, h / 2 + v);
      }
      ctx.stroke();
    };

    const quadro = () => {
      const t = agora();
      desenhar(t);

      // Descarta perturbações que já amorteceram
      for (let i = eventos.length - 1; i >= 0; i -= 1) {
        const e = eventos[i];
        if (t - e.t > TAU * Math.log(Math.max(e.a, 1) / 0.35)) eventos.splice(i, 1);
      }

      raf = visivel ? requestAnimationFrame(quadro) : 0;
    };

    const iniciar = () => {
      if (!raf && visivel) raf = requestAnimationFrame(quadro);
    };

    const perturbar = (x, amplitude) => {
      if (eventos.length >= 12) eventos.shift();
      eventos.push({ x, t: agora(), a: amplitude });
    };

    medir();
    lerCores();
    document.addEventListener('temamudou', () => {
      lerCores();
      if (reduzMovimento) desenhar(0);
    });
    new ResizeObserver(() => {
      medir();
      if (reduzMovimento) desenhar(0);
    }).observe(canvas);

    // Com movimento reduzido: desenha uma vez, sem animação nem interação
    if (reduzMovimento) {
      if (dica) dica.hidden = true;
      desenhar(0);
      return;
    }

    // Primeira perturbação, logo após o carregamento
    eventos.push({ x: w * 0.22, t: 0.6, a: h * 0.3 });

    canvas.addEventListener('pointermove', (ev) => {
      const t = agora();
      if (t - ultimoT < 0.07) return;
      const x = ev.clientX - canvas.getBoundingClientRect().left;
      const deslocamento = ultimoX === null ? 0 : Math.abs(x - ultimoX);
      perturbar(x, 16 + Math.min(24, deslocamento * 0.5));
      ultimoX = x;
      ultimoT = t;
    });

    canvas.addEventListener('pointerleave', () => {
      ultimoX = null;
    });

    canvas.addEventListener('pointerdown', (ev) => {
      const x = ev.clientX - canvas.getBoundingClientRect().left;
      perturbar(x, h * 0.4);
    });

    // Pausa a animação quando a onda sai da tela
    new IntersectionObserver(([entrada]) => {
      visivel = entrada.isIntersecting;
      if (visivel) iniciar();
    }).observe(canvas);

    iniciar();
  }

  /* ---------- Rodapé ---------- */
  function iniciarAno() {
    const ano = $('#ano');
    if (ano) ano.textContent = String(new Date().getFullYear());
  }

  iniciarTema();
  iniciarReveal();
  iniciarParallax();
  iniciarBusca();
  iniciarOnda();
  iniciarAno();
})();
