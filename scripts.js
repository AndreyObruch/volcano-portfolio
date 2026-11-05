(function () {
    const overlay = document.getElementById('modal');
    const box = overlay.querySelector('.modal-box');
    const closeBtn = document.getElementById('modalClose');
    const titleEl = document.getElementById('modalTitle');
    const descEl = document.getElementById('modalDesc');
    const linkEl = document.getElementById('modalLink');
    const cards = document.querySelectorAll('.project-card');

    function openModal(card) {
        titleEl.textContent = card.dataset.title || '';
        descEl.textContent = card.dataset.desc || '';
        linkEl.href = card.dataset.url || '#';
        overlay.classList.add('is-open');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.classList.add('modal-open');
    }

    function closeModal() {
        overlay.classList.remove('is-open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('modal-open');
    }

    cards.forEach((card) => {
        card.addEventListener('click', () => openModal(card));
    });

    closeBtn.addEventListener('click', closeModal);

    overlay.addEventListener('click', (e) => {
        if (!box.contains(e.target)) closeModal();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeModal();
    });
})();