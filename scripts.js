(function () {
    var overlay = document.getElementById('projectModal');
    var titleEl = document.getElementById('modalTitle');
    var descEl = document.getElementById('modalDesc');
    var closeBtn = document.getElementById('modalClose');

    function openModal(btn) {
        titleEl.textContent = btn.getAttribute('data-title') || '';
        descEl.textContent = btn.getAttribute('data-desc') || '';
        overlay.classList.add('is-open');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        overlay.classList.remove('is-open');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.btn-more').forEach(function (btn) {
        btn.addEventListener('click', function () { openModal(btn); });
    });

    closeBtn.addEventListener('click', closeModal);

    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeModal();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeModal();
    });
})();