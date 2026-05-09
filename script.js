document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".site-header");
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const mainNav = document.getElementById("mainNav");
    const year = document.getElementById("currentYear");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (year) {
        year.textContent = String(new Date().getFullYear());
    }

    const syncHeader = () => {
        if (!header) return;
        header.classList.toggle("scrolled", window.scrollY > 12);
    };

    syncHeader();
    window.addEventListener("scroll", syncHeader, { passive: true });

    const closeMenu = () => {
        if (!hamburgerBtn || !mainNav) return;
        hamburgerBtn.classList.remove("active");
        hamburgerBtn.setAttribute("aria-expanded", "false");
        hamburgerBtn.setAttribute("aria-label", "Abrir menu");
        mainNav.classList.remove("nav-open");
        document.body.classList.remove("menu-open");
    };

    if (hamburgerBtn && mainNav) {
        hamburgerBtn.addEventListener("click", () => {
            const isOpen = mainNav.classList.toggle("nav-open");
            hamburgerBtn.classList.toggle("active", isOpen);
            hamburgerBtn.setAttribute("aria-expanded", String(isOpen));
            hamburgerBtn.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
            document.body.classList.toggle("menu-open", isOpen);
        });

        mainNav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", closeMenu);
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") closeMenu();
        });

        document.addEventListener("click", (event) => {
            const target = event.target;
            if (!(target instanceof Node)) return;
            if (!mainNav.classList.contains("nav-open")) return;
            if (mainNav.contains(target) || hamburgerBtn.contains(target)) return;
            closeMenu();
        });
    }

    document.querySelectorAll(".faq-question").forEach((question) => {
        question.addEventListener("click", () => {
            const currentItem = question.closest(".faq-item");
            if (!currentItem) return;
            const shouldOpen = !currentItem.classList.contains("active");

            document.querySelectorAll(".faq-item").forEach((item) => {
                item.classList.remove("active");
            });

            if (shouldOpen) currentItem.classList.add("active");
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (event) => {
            const id = anchor.getAttribute("href");
            if (!id || id === "#") return;
            const target = document.querySelector(id);
            if (!target) return;
            event.preventDefault();
            target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
        });
    });

    const revealElements = document.querySelectorAll(".reveal");

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
        revealElements.forEach((element) => element.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    revealElements.forEach((element) => observer.observe(element));
});
