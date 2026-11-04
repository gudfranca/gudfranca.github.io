/* =========================================================
   script.js | Portfólio de Gustavo Denardi França
   Módulos: idioma (EN/FR/PT), projetos dinâmicos, tema,
   revelação ao rolar, parallax, busca e onda interativa.
   ========================================================= */
(() => {
  'use strict';

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const reduzMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const IDIOMAS_VALIDOS = ['en', 'fr', 'pt'];
  let idiomaAtual = 'en';
  let atualizarFiltroBusca = null;

  // Remove acentos e caixa para a busca ("eletrônica" / "électronique" casa com "eletronica")
  const normalizar = (txt) =>
    String(txt || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim();

  // Busca valor aninhado no objeto de traduções, ex: obterTexto("hero.role")
  const obterTexto = (chave, lang = idiomaAtual) => {
    const dic = (window.TRADUCOES && window.TRADUCOES[lang]) || (window.TRADUCOES && window.TRADUCOES.en) || {};
    return chave.split('.').reduce((acc, parte) => (acc && acc[parte] !== undefined ? acc[parte] : null), dic);
  };

  /* ---------- Internacionalização (EN padrão / FR / PT) ---------- */
  function detectarIdiomaInicial() {
    try {
      const param = new URLSearchParams(window.location.search).get('lang');
      if (param && IDIOMAS_VALIDOS.includes(param.toLowerCase())) {
        return param.toLowerCase();
      }
      const salvo = localStorage.getItem('idioma');
      if (salvo && IDIOMAS_VALIDOS.includes(salvo)) {
        return salvo;
      }
    } catch (_) {}
    return 'en';
  }

  function atualizarTextosEstaticos() {
    document.documentElement.lang = idiomaAtual === 'pt' ? 'pt-BR' : idiomaAtual;

    $$('[data-i18n]').forEach((el) => {
      const val = obterTexto(el.dataset.i18n);
      if (val !== null) el.textContent = val;
    });

    $$('[data-i18n-placeholder]').forEach((el) => {
      const val = obterTexto(el.dataset.i18nPlaceholder);
      if (val !== null) el.setAttribute('placeholder', val);
    });

    $$('[data-i18n-aria]').forEach((el) => {
      const val = obterTexto(el.dataset.i18nAria);
      if (val !== null) el.setAttribute('aria-label', val);
    });

    $$('[data-i18n-alt]').forEach((el) => {
      const val = obterTexto(el.dataset.i18nAlt);
      if (val !== null) el.setAttribute('alt', val);
    });

    // Atualiza estado visual dos botões EN | FR | PT
    $$('.lang-btn').forEach((btn) => {
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === idiomaAtual));
    });

    // Atualiza aria-label do botão de tema conforme idioma atual
    const botaoTema = $('#tema');
    if (botaoTema) {
      const temaEscuro = document.documentElement.dataset.theme !== 'light';
      botaoTema.setAttribute(
        'aria-label',
        obterTexto(temaEscuro ? 'a11y.themeToLight' : 'a11y.themeToDark') || 'Toggle theme'
      );
    }

    // Se estiver na página inicial, atualiza <title> e <meta name="description"> gerais
    if ($('#projetos-lista')) {
      const tituloMeta = obterTexto('meta.title');
      const descMeta = obterTexto('meta.description');
      if (tituloMeta) document.title = tituloMeta;
      const metaDescEl = $('meta[name="description"]');
      if (metaDescEl && descMeta) metaDescEl.setAttribute('content', descMeta);
    }
  }

  /* ---------- Renderização da Lista de Projetos (index.html) ---------- */
  function renderizarListaProjetos() {
    const lista = $('#projetos-lista');
    if (!lista || !Array.isArray(window.PROJETOS)) return;

    const projetosOrdenados = [...window.PROJETOS].sort((a, b) => {
      if (Boolean(b.destaque) !== Boolean(a.destaque)) {
        return b.destaque ? 1 : -1;
      }
      return (a.ordem ?? 999) - (b.ordem ?? 999);
    });

    const txtVerDetalhes = obterTexto('projectsSection.viewDetails') || 'View details';
    const txtDeProjeto = obterTexto('projectsSection.viewDetailsOf') || ' of project ';
    const txtDestaque = obterTexto('projectsSection.featuredBadge') || 'Featured';

    lista.innerHTML = '';

    projetosOrdenados.forEach((proj, idx) => {
      const t = (proj.textos && (proj.textos[idiomaAtual] || proj.textos.en)) || {};
      const tags = Array.isArray(t.tags) ? t.tags : [];
      // Inclui termos de todos os idiomas no índice invisível de busca para que "ESP32", "Embarcados" ou "Embedded" funcionem sempre
      const todasTagsBusca = ['en', 'fr', 'pt']
        .map((l) => {
          const tl = proj.textos && proj.textos[l];
          return tl ? [tl.titulo, ...(tl.tags || [])].join(' ') : '';
        })
        .join(' ');

      const li = document.createElement('li');
      li.className = 'reveal is-visible';
      li.style.setProperty('--d', `${idx * 90}ms`);
      li.dataset.busca = normalizar(`${todasTagsBusca} ${proj.categoria || ''}`);

      const article = document.createElement('article');
      article.className = 'card';

      const media = document.createElement('div');
      media.className = 'card__media placeholder';
      if (proj.imagemCapa) {
        const img = document.createElement('img');
        img.src = proj.imagemCapa;
        img.alt = t.altCapa || t.titulo || '';
        img.loading = 'lazy';
        img.onerror = function () {
          this.remove();
        };
        media.appendChild(img);
      }

      const body = document.createElement('div');
      body.className = 'card__body';

      if (proj.destaque) {
        const badge = document.createElement('span');
        badge.className = 'card__badge';
        badge.textContent = txtDestaque;
        body.appendChild(badge);
      }

      const h3 = document.createElement('h3');
      h3.className = 'card__title';
      h3.textContent = t.titulo || proj.id;

      const p = document.createElement('p');
      p.className = 'card__text';
      p.textContent = t.resumo || '';

      const ulTags = document.createElement('ul');
      ulTags.className = 'tags';
      tags.forEach((tagTxt) => {
        const liTag = document.createElement('li');
        liTag.className = 'tag';
        liTag.textContent = tagTxt;
        ulTags.appendChild(liTag);
      });

      const link = document.createElement('a');
      link.className = 'card__link';
      link.href = `projeto-modelo.html?id=${encodeURIComponent(proj.id)}`;

      const spanVisivel = document.createElement('span');
      spanVisivel.textContent = txtVerDetalhes;
      const spanOculto = document.createElement('span');
      spanOculto.className = 'visually-hidden';
      spanOculto.textContent = `${txtDeProjeto}${t.titulo || proj.id}`;

      link.append(spanVisivel, spanOculto);
      body.append(h3, p, ulTags, link);
      article.append(media, body);
      li.appendChild(article);
      lista.appendChild(li);
    });

    if (typeof atualizarFiltroBusca === 'function') {
      atualizarFiltroBusca();
    }
  }

  /* ---------- Renderização da Página de Projeto (projeto-modelo.html) ---------- */
  function renderizarPaginaProjeto() {
    const tituloEl = $('#proj-titulo');
    if (!tituloEl || !Array.isArray(window.PROJETOS) || window.PROJETOS.length === 0) return;

    const params = new URLSearchParams(window.location.search);
    const idBuscado = params.get('id');
    const proj =
      window.PROJETOS.find((p) => p.id === idBuscado) || window.PROJETOS[0];

    const t = (proj.textos && (proj.textos[idiomaAtual] || proj.textos.en)) || {};

    // Metadados da aba do navegador
    document.title = `${t.titulo || proj.id} | Gustavo Denardi França`;
    const metaDesc = $('meta[name="description"]');
    if (metaDesc && t.resumo) metaDesc.setAttribute('content', t.resumo);

    // Cabeçalho e resumo
    tituloEl.textContent = t.titulo || '';
    const resumoEl = $('#proj-resumo');
    if (resumoEl) resumoEl.textContent = t.resumo || '';

    // Tags clicáveis que levam para a busca na página inicial
    const tagsEl = $('#proj-tags');
    if (tagsEl) {
      tagsEl.innerHTML = '';
      (t.tags || []).forEach((tagTxt) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.className = 'tag';
        a.href = `index.html?busca=${encodeURIComponent(tagTxt)}#projetos`;
        a.textContent = tagTxt;
        li.appendChild(a);
        tagsEl.appendChild(li);
      });
    }

    // Metadados técnicos (Função, Período, Ferramentas, Contexto)
    const mapaMeta = {
      '#proj-funcao': t.funcao,
      '#proj-periodo': t.periodo,
      '#proj-ferramentas': t.ferramentas,
      '#proj-contexto': t.contexto
    };
    Object.entries(mapaMeta).forEach(([seletor, valor]) => {
      const el = $(seletor);
      if (el) el.textContent = valor || '—';
    });

    // Vídeo de demonstração (opcional)
    const videoSecao = $('#proj-video-secao');
    const videoContainer = $('#proj-video-container');
    if (videoSecao && videoContainer) {
      const urlVideo = proj.video && proj.video.url ? proj.video.url.trim() : '';
      if (urlVideo) {
        videoSecao.hidden = false;
        videoContainer.innerHTML = '';
        if (proj.video.tipo === 'mp4' || urlVideo.endsWith('.mp4')) {
          const video = document.createElement('video');
          video.controls = true;
          video.preload = 'metadata';
          if (proj.video.poster) video.poster = proj.video.poster;
          const source = document.createElement('source');
          source.src = urlVideo;
          source.type = 'video/mp4';
          video.appendChild(source);
          videoContainer.appendChild(video);
        } else {
          const iframe = document.createElement('iframe');
          iframe.src = urlVideo;
          iframe.title = t.titulo || 'Project demonstration video';
          iframe.loading = 'lazy';
          iframe.allowFullscreen = true;
          iframe.setAttribute(
            'allow',
            'accelerometer; encrypted-media; gyroscope; picture-in-picture'
          );
          videoContainer.appendChild(iframe);
        }
      } else {
        videoSecao.hidden = true;
        videoContainer.innerHTML = '';
      }
    }

    // Galeria de imagens
    const galeriaSecao = $('#proj-galeria-secao');
    const galeriaEl = $('#proj-galeria');
    if (galeriaSecao && galeriaEl) {
      const itensGaleria = Array.isArray(proj.galeria) ? proj.galeria : [];
      if (itensGaleria.length > 0) {
        galeriaSecao.hidden = false;
        galeriaEl.innerHTML = '';
        itensGaleria.forEach((item) => {
          const fig = document.createElement('figure');
          fig.className = `gallery__item${item.larga ? ' gallery__item--wide' : ''} reveal is-visible`;

          const mediaDiv = document.createElement('div');
          mediaDiv.className = 'gallery__media placeholder';

          const img = document.createElement('img');
          img.src = item.src;
          img.alt = (item.alt && (item.alt[idiomaAtual] || item.alt.en)) || t.titulo || '';
          img.loading = 'lazy';
          img.onerror = function () {
            this.remove();
          };
          mediaDiv.appendChild(img);
          fig.appendChild(mediaDiv);

          const textoLegenda = item.legenda && (item.legenda[idiomaAtual] || item.legenda.en);
          if (textoLegenda) {
            const figcap = document.createElement('figcaption');
            figcap.textContent = textoLegenda;
            fig.appendChild(figcap);
          }

          galeriaEl.appendChild(fig);
        });
      } else {
        galeriaSecao.hidden = true;
      }
    }

    // Contexto técnico (parágrafos)
    const proseEl = $('#proj-prose');
    if (proseEl) {
      proseEl.innerHTML = '';
      (t.contextoTecnico || []).forEach((paragrafo) => {
        const p = document.createElement('p');
        p.textContent = paragrafo;
        proseEl.appendChild(p);
      });
    }

    // Diagrama SVG e Tabela de Resultados
    const diagEl = $('#proj-diagrama');
    if (diagEl) {
      if (t.diagrama && t.diagrama.mostrar) {
        diagEl.hidden = false;
        const mapaSvg = {
          '#dg-titulo': t.diagrama.tituloSvg,
          '#dg-desc': t.diagrama.descSvg,
          '#dg-b1-t': t.diagrama.bloco1Titulo,
          '#dg-b1-s': t.diagrama.bloco1Sub,
          '#dg-b2-t': t.diagrama.bloco2Titulo,
          '#dg-b2-s': t.diagrama.bloco2Sub,
          '#dg-bc-t': t.diagrama.blocoCentralTitulo,
          '#dg-bc-s': t.diagrama.blocoCentralSub,
          '#dg-bs-t': t.diagrama.blocoSaidaTitulo,
          '#dg-bs-s': t.diagrama.blocoSaidaSub,
          '#dg-legenda': t.diagrama.legenda
        };
        Object.entries(mapaSvg).forEach(([sel, val]) => {
          const nodo = $(sel);
          if (nodo && val) nodo.textContent = val;
        });
      } else {
        diagEl.hidden = true;
      }
    }

    const tabelaWrap = $('#proj-tabela-wrap');
    const tabelaCorpo = $('#proj-tabela-corpo');
    if (tabelaWrap && tabelaCorpo) {
      const linhas = Array.isArray(t.resultados) ? t.resultados : [];
      if (linhas.length > 0) {
        tabelaWrap.hidden = false;
        tabelaCorpo.innerHTML = '';
        linhas.forEach((linha) => {
          const tr = document.createElement('tr');
          ['metrica', 'valor', 'obs'].forEach((campo) => {
            const td = document.createElement('td');
            td.textContent = linha[campo] || '';
            tr.appendChild(td);
          });
          tabelaCorpo.appendChild(tr);
        });
      } else {
        tabelaWrap.hidden = true;
      }
    }

    // Links externos do projeto
    const linksSecao = $('#proj-links-secao');
    const linksContainer = $('#proj-links');
    if (linksSecao && linksContainer) {
      linksContainer.innerHTML = '';
      const cfgLinks = proj.links || {};
      const botoes = [
        { url: cfgLinks.github, chaveTexto: 'projectPage.btnGithub', primario: true },
        { url: cfgLinks.relatorio, chaveTexto: 'projectPage.btnReport', primario: false },
        { url: cfgLinks.demo, chaveTexto: 'projectPage.btnDemo', primario: false }
      ];

      let algumLink = false;
      botoes.forEach((b) => {
        if (b.url && b.url.trim() !== '' && b.url.trim() !== '#') {
          algumLink = true;
          const a = document.createElement('a');
          a.className = `btn${b.primario ? ' btn--primary' : ''}`;
          a.href = b.url;
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
          a.textContent = obterTexto(b.chaveTexto) || 'Link';
          linksContainer.appendChild(a);
        }
      });
      linksSecao.hidden = !algumLink;
    }
  }

  function definirIdioma(novoIdioma, salvar = true) {
    if (!IDIOMAS_VALIDOS.includes(novoIdioma)) return;
    idiomaAtual = novoIdioma;
    if (salvar) {
      try {
        localStorage.setItem('idioma', idiomaAtual);
      } catch (_) {}
    }
    atualizarTextosEstaticos();
    renderizarListaProjetos();
    renderizarPaginaProjeto();
  }

  function iniciarIdioma() {
    idiomaAtual = detectarIdiomaInicial();
    definirIdioma(idiomaAtual, false);

    $$('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        definirIdioma(btn.dataset.lang, true);
      });
    });
  }

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
          obterTexto(tema === 'dark' ? 'a11y.themeToLight' : 'a11y.themeToDark') ||
            (tema === 'dark' ? 'Switch to light theme' : 'Switch to dark theme')
        );
      }
      if (salvar) {
        try {
          localStorage.setItem('tema', tema);
        } catch (_) {}
      }
      document.dispatchEvent(new CustomEvent('temamudou', { detail: tema }));
    };

    aplicar(raiz.dataset.theme === 'light' ? 'light' : 'dark', false);

    if (botao) {
      botao.addEventListener('click', () => {
        aplicar(raiz.dataset.theme === 'dark' ? 'light' : 'dark', true);
      });
    }
  }

  /* ---------- Elementos que aparecem ao rolar ---------- */
  function iniciarReveal() {
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

    const VELOCIDADE = 0.35;
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

    const filtrar = () => {
      const bruto = input.value.trim();
      const termos = normalizar(bruto).split(/\s+/).filter(Boolean);
      let visiveis = 0;

      const itens = $$(':scope > li', lista);
      itens.forEach((el) => {
        const textoCard =
          el.dataset.busca ||
          normalizar(
            [
              $('.card__title', el)?.textContent ?? '',
              ...$$('.tag', el).map((t) => t.textContent)
            ].join(' ')
          );
        const combina = termos.every((t) => textoCard.includes(t));
        el.hidden = !combina;
        if (combina) visiveis += 1;
      });

      if (contagem) {
        if (bruto) {
          const molde =
            visiveis === 1
              ? obterTexto('projectsSection.foundSingle') || '1 project found'
              : obterTexto('projectsSection.foundPlural') || '{n} projects found';
          contagem.textContent = molde.replace('{n}', String(visiveis));
        } else {
          const molde =
            visiveis === 1
              ? obterTexto('projectsSection.countSingle') || '1 project'
              : obterTexto('projectsSection.countPlural') || '{n} projects';
          contagem.textContent = molde.replace('{n}', String(visiveis));
        }
      }

      if (vazio) vazio.hidden = visiveis !== 0;
      if (termoVazio) termoVazio.textContent = bruto;

      chips.forEach((chip) => {
        const ativo = bruto !== '' && normalizar(chip.dataset.filtro) === normalizar(bruto);
        chip.setAttribute('aria-pressed', String(ativo));
      });
    };

    atualizarFiltroBusca = filtrar;

    input.addEventListener('input', filtrar);

    input.addEventListener('keydown', (ev) => {
      if (ev.key === 'Escape' && input.value) {
        input.value = '';
        filtrar();
      }
    });

    document.addEventListener('keydown', (ev) => {
      const emCampo = /^(input|textarea|select)$/i.test(document.activeElement?.tagName ?? '');
      if (ev.key === '/' && !emCampo && !ev.ctrlKey && !ev.metaKey && !ev.altKey) {
        ev.preventDefault();
        input.focus();
      }
    });

    chips.forEach((chip) => {
      chip.addEventListener('click', () => {
        const alvo = chip.dataset.filtro;
        input.value = normalizar(input.value) === normalizar(alvo) ? '' : alvo;
        filtrar();
        $('#projetos')?.scrollIntoView({
          behavior: reduzMovimento ? 'auto' : 'smooth',
          block: 'start'
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

    const BASE = 5;
    const K = 0.045;
    const W = 7.5;
    const TAU = 2.6;
    const ALCANCE = 320;

    const eventos = [];
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

      ctx.strokeStyle = eixo;
      ctx.lineWidth = 1;
      ctx.setLineDash([2, 6]);
      ctx.beginPath();
      ctx.moveTo(0, h / 2);
      ctx.lineTo(w, h / 2);
      ctx.stroke();
      ctx.setLineDash([]);

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

    if (reduzMovimento) {
      if (dica) dica.hidden = true;
      desenhar(0);
      return;
    }

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

  iniciarBusca();
  iniciarIdioma();
  iniciarTema();
  iniciarReveal();
  iniciarParallax();
  iniciarOnda();
  iniciarAno();
})();
