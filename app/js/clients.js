/* =========================================================
   FIELDOPS CLIENTES
   JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       ELEMENTOS DA UI
       ========================= */
    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebarOverlay");
    const openSidebarBtn = document.getElementById("openSidebar");
    const closeSidebarBtn = document.getElementById("closeSidebar");
    const searchInput = document.getElementById("searchInput");


    /* =========================
       SIDEBAR MOBILE
       ========================= */
    function showSidebar() {
        sidebar.classList.add("open");
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    function hideSidebar() {
        sidebar.classList.remove("open");
        overlay.classList.remove("active");
        document.body.style.overflow = "";
    }

    if (openSidebarBtn) {
        openSidebarBtn.addEventListener("click", showSidebar);
    }
    if (closeSidebarBtn) {
        closeSidebarBtn.addEventListener("click", hideSidebar);
    }
    if (overlay) {
        overlay.addEventListener("click", hideSidebar);
    }


    /* =========================
       SIDEBAR NAV — active state
       ========================= */
    const navItems = document.querySelectorAll(".sidebar-nav .nav-item");
    navItems.forEach(item => {
        item.addEventListener("click", function(e) {
            const href = this.getAttribute("href");
            if (!href || href === "#") e.preventDefault();
            navItems.forEach(n => n.classList.remove("active"));
            this.classList.add("active");
            if (window.innerWidth <= 991) hideSidebar();
        });
    });


    /* =========================
       ATALHO CTRL + K → focar busca
       ========================= */
    document.addEventListener("keydown", event => {
        if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
            event.preventDefault();
            if (searchInput) {
                searchInput.focus();
                searchInput.select();
            }
        }
    });


    /* =========================
       BUSCA NA TABELA DE CLIENTES
       ========================= */
    if (searchInput) {
        searchInput.addEventListener("input", () => {
            const termo = searchInput.value.toLowerCase().trim();
            const linhas = document.querySelectorAll(".operational-table tbody tr");
            let visiveis = 0;
            linhas.forEach(linha => {
                const texto = linha.textContent.toLowerCase();
                if (texto.includes(termo)) {
                    linha.style.display = "";
                    visiveis++;
                } else {
                    linha.style.display = "none";
                }
            });

            const contador = document.querySelector(".header-counter");
            if (contador) {
                contador.textContent = `${visiveis} registros`;
            }
        });
    }


    /* =========================
       BOTÕES AÇÃO NA TABELA
       (feedback visual rápido)
       ========================= */
    const actionButtons = document.querySelectorAll(".table-actions .icon-button");
    actionButtons.forEach(btn => {
        btn.addEventListener("click", function() {
            const icon = this.querySelector("i");
            const originalClass = icon.className;
            const originalColor = this.style.color;

            this.style.background = "var(--success-light)";
            this.style.color = "var(--success)";
            icon.className = "bi bi-check2";

            setTimeout(() => {
                this.style.background = "";
                this.style.color = originalColor;
                icon.className = originalClass;
            }, 900);
        });
    });


    /* =========================
       BOTÕES — feedback loading
       ========================= */
    const primaryButtons = document.querySelectorAll(".btn-primary-custom, .btn-light-custom");
    primaryButtons.forEach(button => {
        button.addEventListener("click", function(e) {
            if (this.disabled) return;

            const htmlOriginal = this.innerHTML;
            const texto = this.textContent.trim().toLowerCase();

            if (texto.includes("novo") || texto.includes("cadastrar")) {
                e.preventDefault();
                this.disabled = true;
                this.innerHTML = `
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true" style="width:14px;height:14px;border-width:2px;"></span>
                    Processando...
                `;
                setTimeout(() => {
                    this.innerHTML = `<i class="bi bi-check2"></i> Sucesso`;
                    setTimeout(() => {
                        this.disabled = false;
                        this.innerHTML = htmlOriginal;
                    }, 1200);
                }, 1100);
            }
        });
    });


    /* =========================
       LIMPAR FILTROS
       ========================= */
    const limparBtn = document.querySelector(".btn-link-custom");
    if (limparBtn) {
        limparBtn.addEventListener("click", e => {
            e.preventDefault();
            const selects = document.querySelectorAll(".form-select-custom");
            selects.forEach(s => s.selectedIndex = 0);
            if (searchInput) searchInput.value = "";
            searchInput && searchInput.dispatchEvent(new Event("input"));
        });
    }


    /* =========================
       RELÓGIO AO VIVO (topbar)
       ========================= */
    function atualizarRelogio() {
        const agora = new Date();
        const hh = String(agora.getHours()).padStart(2, "0");
        const mm = String(agora.getMinutes()).padStart(2, "0");
        const ss = String(agora.getSeconds()).padStart(2, "0");
        const clockEl = document.querySelector(".sync-status");
        if (clockEl) {
            clockEl.innerHTML = `
                <span class="status-dot"></span>
                Sincronização em tempo real
                <strong>Ativa</strong>
                <small style="margin-left:6px;opacity:.75;">${hh}:${mm}:${ss}</small>
            `;
        }
    }
    atualizarRelogio();
    setInterval(atualizarRelogio, 1000);


    /* =========================
       PAGINAÇÃO (simulada)
       ========================= */
    const pageBtns = document.querySelectorAll(".pagination-custom .page-btn");
    pageBtns.forEach(btn => {
        btn.addEventListener("click", function() {
            const item = this.closest(".page-item");
            if (!item || item.classList.contains("disabled")) return;

            const pagItems = document.querySelectorAll(".pagination-custom .page-item");
            pagItems.forEach(li => li.classList.remove("active"));
            item.classList.add("active");

            const toast = document.createElement("div");
            toast.className = "position-fixed bottom-0 end-0 m-3 p-3 rounded-3 text-white shadow";
            toast.style.background = "var(--primary)";
            toast.style.zIndex = "9999";
            toast.innerHTML = `
                <div class="d-flex align-items-center gap-2">
                    <i class="bi bi-arrow-left-right"></i>
                    <small>Página ${this.textContent.trim()} selecionada</small>
                </div>
            `;
            document.body.appendChild(toast);
            setTimeout(() => toast.remove(), 1500);
        });
    });


    /* =========================
       RESPONSIVE — resize handler
       ========================= */
    window.addEventListener("resize", () => {
        if (window.innerWidth > 991) hideSidebar();
    });


    /* =========================
       LOG DE INICIALIZAÇÃO (debug)
       ========================= */
    console.log(
        "%c🌾 FieldOps — Módulo Clientes",
        "color:#1747d4;font-weight:bold;font-size:14px;"
    );
    console.log(
        `%c→ ${document.querySelectorAll(".operational-table tbody tr").length} clientes carregados`,
        "color:#667085;"
    );

});
