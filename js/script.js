// Initialize Lucide Icons
lucide.createIcons();

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.card-hover').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Language switch (initial language is set by the inline script in <head>)
function applyLang(lang) {
    const isEn = lang === 'en';
    document.documentElement.lang = isEn ? 'en' : 'pt-BR';
    document.title = isEn
        ? 'David Xavier Brito — Python Backend Engineer'
        : 'David Xavier Brito — Engenheiro Backend Python';
    document.querySelectorAll('[data-set-lang]').forEach(btn => {
        btn.setAttribute('aria-pressed', String(btn.dataset.setLang === (isEn ? 'en' : 'pt')));
    });
}

document.querySelectorAll('[data-set-lang]').forEach(btn => {
    btn.addEventListener('click', () => {
        applyLang(btn.dataset.setLang);
        try { localStorage.setItem('lang', btn.dataset.setLang); } catch (e) {}
    });
});

applyLang(document.documentElement.lang === 'en' ? 'en' : 'pt');
