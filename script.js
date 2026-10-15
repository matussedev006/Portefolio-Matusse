/**
 * Portefólio — Eufrasio Matusse
 * Funcionalidades:
 * 1. Internacionalização (i18n) PT / EN com persistência e auto-detecção
 * 2. Integração com tradutor multilingue (Google Translate / Navegador)
 * 3. Scroll-spy para navegação ativa
 * 4. Atualização dinâmica do ano corrente no footer
 */

(function () {
  'use strict';

  /* =========================================================
     1. DICIONÁRIO DE TRADUÇÕES (PT / EN)
     ========================================================= */
  const translations = {
    pt: {
      page_title: "Eufrasio Matusse — Portefólio",
      hero: {
        photo_alt: "Fotografia de Eufrasio Matusse",
        roles: "Software Developer · Help Desk · Project & Product Management · AI & Machine Learning"
      },
      nav: {
        sobre: "Sobre",
        formacao: "Formação",
        skills: "Skills",
        experiencia: "Experiência",
        projetos: "Projetos",
        contacto: "Contacto",
        more_languages: "Outras",
        translate_page: "Traduzir página:",
        browser_hint: "Tradução via Navegador / Google"
      },
      sobre: {
        title: "Sobre Mim",
        bio: "Actualmente a cursar <strong>Engenharia de Tecnologias e Sistemas de Informação</strong> na <span translate=\"no\">Universidade Joaquim Chissano</span>, Faculdade de Ciências e Tecnologias. Experiência prática em Desenvolvimento Full Stack, suporte técnico (HelpDesk), manutenção de hardware e Project &amp; Product Management."
      },
      formacao: {
        title: "Formação Académica",
        item1_title: "Licenciatura em Engenharia de Tecnologias e Sistemas de Informação",
        item1_period: "2024 – Presente",
        item1_desc: "Formação abrangente em desenvolvimento de software, sistemas computacionais, redes de computadores e princípios de engenharia.",
        item2_title: "Ensino Secundário",
        item2_desc: "Ciências Exactas e Desenho Geométrico Descritivo."
      },
      skills: {
        title: "Technical Skills",
        web_title: "Desenvolvimento Web",
        languages_title: "Linguagens",
        db_title: "Bases de Dados",
        other_title: "Outras Áreas",
        other_desc: "IT Support, Análise de Sistemas, Scrum, Gestão de Projectos, Segurança de Sistemas, Cloud/Docker/Kubernetes (essencial)"
      },
      experiencia: {
        title: "Experiência Profissional",
        item1_title: "Técnico de Informática (Voluntariado)",
        item1_desc: "Suporte técnico e resolução de problemas em computadores e software; manutenção e configuração de sistemas.",
        item2_title: "Mentoria Comunitária",
        item2_desc: "Ações comunitárias, organização de eventos e campanhas."
      },
      certificacoes: {
        title: "Capacitações e Certificações",
        item1: "Curso de Programação em Python — Santander Open Academy",
        item2: "Capacitação em Matéria de Bitcoin — Trezor Academy",
        item3: "Imersão IA 4ª Edição — Alura e Google",
        item4: "Night Hack First Edition — MozCyber Community",
        item5: "NLW Pocket para Iniciantes Full Stack — Rocketseat",
        item6: "Programa Source Jam — MozDevz",
        item7: "NLW Operator Full Stack — Rocketseat",
        item8: "Coding Sprint AIxProduct Edition — MozDevz",
        item9: "Regional DataScience Hackathon - Hack4dev"
      },
      projetos: {
        title: "Projectos",
        item1_title: "Plataforma Open Source de Gestão Escolar",
        item1_desc: "Aproxima Professor, Aluno e Encarregado de Educação no acompanhamento académico.",
        item2_title: "Sistema de Gestão Comercial",
        item2_desc: "Voltado para Pequenas e Médias Empresas.",
        item3_title: "Sistema de Gestão de Prompts",
        item4_title: "Sistema de Gestão de Salões",
        item5_title: "Sistema de Gestão para Escolas de Condução"
      },
      contacto: {
        title: "Vamos Conversar",
        desc: "Aberto a colaborações e oportunidades.",
        btn: "Enviar E-mail"
      },
      footer: {
        portfolio: "Portefólio"
      }
    },
    en: {
      page_title: "Eufrasio Matusse — Portfolio",
      hero: {
        photo_alt: "Photo of Eufrasio Matusse",
        roles: "Software Developer · Help Desk · Project & Product Management · AI & Machine Learning"
      },
      nav: {
        sobre: "About",
        formacao: "Education",
        skills: "Skills",
        experiencia: "Experience",
        projetos: "Projects",
        contacto: "Contact",
        more_languages: "More",
        translate_page: "Translate page:",
        browser_hint: "Translation via Browser / Google"
      },
      sobre: {
        title: "About Me",
        bio: "Currently pursuing a degree in <strong>Information Systems and Technology Engineering</strong> at <span translate=\"no\">Joaquim Chissano University</span>, Faculty of Science and Technology. Hands-on experience in Full Stack Development, technical support (Help Desk), hardware maintenance, and Project &amp; Product Management."
      },
      formacao: {
        title: "Academic Education",
        item1_title: "Bachelor's in Information Systems and Technology Engineering",
        item1_period: "2024 – Present",
        item1_desc: "Comprehensive education in software development, computing systems, computer networks, and engineering principles.",
        item2_title: "High School Education",
        item2_desc: "Exact Sciences and Descriptive Geometric Drawing."
      },
      skills: {
        title: "Technical Skills",
        web_title: "Web Development",
        languages_title: "Programming Languages",
        db_title: "Databases",
        other_title: "Other Areas",
        other_desc: "IT Support, Systems Analysis, Scrum, Project Management, Systems Security, Cloud/Docker/Kubernetes (essential)"
      },
      experiencia: {
        title: "Professional Experience",
        item1_title: "IT Support Technician (Volunteer)",
        item1_desc: "Technical support and hardware/software troubleshooting; systems maintenance and setup.",
        item2_title: "Community Mentorship",
        item2_desc: "Community outreach initiatives, event planning, and campaign organization."
      },
      certificacoes: {
        title: "Training & Certifications",
        item1: "Python Programming Course — Santander Open Academy",
        item2: "Bitcoin Fundamentals & Training — Trezor Academy",
        item3: "AI Immersion 4th Edition — Alura and Google",
        item4: "Night Hack First Edition — MozCyber Community",
        item5: "NLW Pocket for Full Stack Beginners — Rocketseat",
        item6: "Source Jam Program — MozDevz",
        item7: "NLW Operator Full Stack — Rocketseat",
        item8: "Coding Sprint AIxProduct Edition — MozDevz",
        item9: "Regional DataScience Hackathon — Hack4dev"
      },
      projetos: {
        title: "Projects",
        item1_title: "Open Source School Management Platform",
        item1_desc: "Connects Teachers, Students, and Parents/Guardians for academic tracking and engagement.",
        item2_title: "Commercial Management System",
        item2_desc: "Tailored for Small and Medium Enterprises (SMEs).",
        item3_title: "Prompt Management System",
        item4_title: "Salon Management System",
        item5_title: "Driving School Management System"
      },
      contacto: {
        title: "Let's Talk",
        desc: "Open to collaborations and new opportunities.",
        btn: "Send Email"
      },
      footer: {
        portfolio: "Portfolio"
      }
    }
  };

  /* =========================================================
     2. GESTÃO DE IDIOMAS (i18n)
     ========================================================= */
  function getNestedValue(obj, path) {
    return path.split('.').reduce(function (prev, curr) {
      return prev ? prev[curr] : null;
    }, obj);
  }

  function applyLanguage(lang) {
    if (!translations[lang]) lang = 'pt';

    // 1. Atualizar atributos HTML para o navegador reconhecer o idioma
    document.documentElement.lang = lang;
    const metaContentLang = document.querySelector('meta[http-equiv="content-language"]');
    if (metaContentLang) {
      metaContentLang.setAttribute('content', lang);
    }

    // 2. Atualizar título da página
    if (translations[lang].page_title) {
      document.title = translations[lang].page_title;
    }

    // 3. Atualizar elementos com data-i18n
    const translatableElements = document.querySelectorAll('[data-i18n]');
    translatableElements.forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const val = getNestedValue(translations[lang], key);
      if (val !== null && val !== undefined) {
        if (val.indexOf('<') !== -1) {
          el.innerHTML = val;
        } else {
          el.textContent = val;
        }
      }
    });

    // 4. Atualizar atributos específicos (alt, title, placeholder)
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-alt');
      const val = getNestedValue(translations[lang], key);
      if (val) el.setAttribute('alt', val);
    });

    document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
      const key = el.getAttribute('data-i18n-title');
      const val = getNestedValue(translations[lang], key);
      if (val) el.setAttribute('title', val);
    });

    // 5. Atualizar estado visual e acessibilidade dos botões
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(function (btn) {
      const btnLang = btn.getAttribute('data-lang');
      const isActive = btnLang === lang;
      btn.classList.toggle('is-active', isActive);
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });

    // 6. Guardar preferência no localStorage
    try {
      localStorage.setItem('portfolio_language', lang);
    } catch (e) {
      // localStorage pode estar bloqueado em certas configurações de privacidade
    }
  }

  // Inicialização do idioma: verificar localStorage ou idioma do navegador
  function initLanguage() {
    let saved = null;
    try {
      saved = localStorage.getItem('portfolio_language');
    } catch (e) {}

    if (saved && translations[saved]) {
      applyLanguage(saved);
      return;
    }

    // Detetar idioma preferido do navegador do visitante
    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (browserLang.startsWith('en')) {
      applyLanguage('en');
    } else {
      applyLanguage('pt');
    }
  }

  /* =========================================================
     3. INTEGRAÇÃO MULTILÍNGUE (GOOGLE TRANSLATE ON-DEMAND)
     ========================================================= */
  let isGoogleTranslateLoaded = false;

  function loadGoogleTranslate() {
    if (isGoogleTranslateLoaded) return;
    isGoogleTranslateLoaded = true;

    window.googleTranslateElementInit = function () {
      new window.google.translate.TranslateElement({
        pageLanguage: document.documentElement.lang || 'pt',
        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false
      }, 'google_translate_element');
    };

    const script = document.createElement('script');
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    script.onerror = function () {
      console.warn('Não foi possível carregar o widget do Google Translate (verifique a sua ligação ou bloqueador de anúncios).');
    };
    document.head.appendChild(script);
  }

  /* =========================================================
     4. SCROLL-SPY (DESTAQUE DA SECÇÃO ATIVA NA NAV)
     ========================================================= */
  function initScrollSpy() {
    const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');
    const sections = [];

    navLinks.forEach(function (link) {
      const id = link.getAttribute('href').substring(1);
      const section = document.getElementById(id);
      if (section) {
        sections.push({ id: id, element: section, link: link });
      }
    });

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            navLinks.forEach(function (l) { return l.classList.remove('is-active'); });
            const activeLink = document.querySelector('.site-nav a[href="#' + entry.target.id + '"]');
            if (activeLink) activeLink.classList.add('is-active');
          }
        });
      }, {
        rootMargin: '-20% 0px -70% 0px'
      });

      sections.forEach(function (sec) {
        observer.observe(sec.element);
      });
    }
  }

  /* =========================================================
     5. INICIALIZAÇÃO DE EVENTOS AO CARREGAR DOM
     ========================================================= */
  document.addEventListener('DOMContentLoaded', function () {
    // 1. Iniciar idioma
    initLanguage();

    // 2. Eventos nos botões PT / EN
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        const lang = this.getAttribute('data-lang');
        applyLanguage(lang);
      });
    });

    // 3. Dropdown de "Outras Línguas"
    const moreBtn = document.getElementById('more-lang-btn');
    const moreMenu = document.getElementById('more-lang-menu');

    if (moreBtn && moreMenu) {
      moreBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        const isHidden = moreMenu.hasAttribute('hidden');
        if (isHidden) {
          moreMenu.removeAttribute('hidden');
          moreBtn.setAttribute('aria-expanded', 'true');
          loadGoogleTranslate();
        } else {
          moreMenu.setAttribute('hidden', '');
          moreBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Fechar ao clicar fora
      document.addEventListener('click', function (e) {
        if (!moreMenu.contains(e.target) && e.target !== moreBtn) {
          moreMenu.setAttribute('hidden', '');
          moreBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Fechar com Escape
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !moreMenu.hasAttribute('hidden')) {
          moreMenu.setAttribute('hidden', '');
          moreBtn.setAttribute('aria-expanded', 'false');
          moreBtn.focus();
        }
      });
    }

    // 4. Scroll-spy
    initScrollSpy();

    // 5. Ano dinâmico no rodapé
    const anoEl = document.getElementById('ano-corrente');
    if (anoEl) {
      anoEl.textContent = new Date().getFullYear();
    }
  });

})();

