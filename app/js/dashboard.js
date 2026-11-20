/* =========================================================
   FIELDOPS DASHBOARD
   JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("sidebarOverlay");

    const openSidebar = document.getElementById("openSidebar");
    const closeSidebar = document.getElementById("closeSidebar");


    /* =========================
       MOBILE SIDEBAR
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


    if (openSidebar) {
        openSidebar.addEventListener("click", showSidebar);
    }

    if (closeSidebar) {
        closeSidebar.addEventListener("click", hideSidebar);
    }

    if (overlay) {
        overlay.addEventListener("click", hideSidebar);
    }


    /* =========================
       SIDEBAR NAVIGATION
       ========================= */

    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(item => {

        item.addEventListener("click", function(event) {

            event.preventDefault();

            navItems.forEach(nav => {
                nav.classList.remove("active");
            });

            this.classList.add("active");

            if (window.innerWidth <= 991) {
                hideSidebar();
            }

        });

    });


    /* =========================
       SEARCH — CTRL + K
       ========================= */

    const searchInput = document.getElementById("searchInput");

    document.addEventListener("keydown", event => {

        if (
            (event.ctrlKey || event.metaKey) &&
            event.key.toLowerCase() === "k"
        ) {

            event.preventDefault();

            if (searchInput) {
                searchInput.focus();
            }

        }

    });


    /* =========================
       SEARCH TABLE
       ========================= */

    if (searchInput) {

        searchInput.addEventListener("input", () => {

            const value =
                searchInput.value.toLowerCase().trim();

            const rows =
                document.querySelectorAll(
                    ".operational-table tbody tr"
                );

            rows.forEach(row => {

                const text =
                    row.textContent.toLowerCase();

                row.style.display =
                    text.includes(value)
                        ? ""
                        : "none";

            });

        });

    }


    /* =========================
       BUTTON FEEDBACK
       ========================= */

    const buttons =
        document.querySelectorAll(
            ".alert-action button, .shortcut"
        );

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            const originalHTML =
                button.innerHTML;

            button.disabled = true;

            button.innerHTML = `
                <i class="bi bi-check2"></i>
                Concluído
            `;

            setTimeout(() => {

                button.disabled = false;

                button.innerHTML =
                    originalHTML;

            }, 1800);

        });

    });


    /* =========================
       LIVE CLOCK
       ========================= */

    function updateClock() {

        const now = new Date();

        const hours =
            String(now.getHours()).padStart(2, "0");

        const minutes =
            String(now.getMinutes()).padStart(2, "0");

        const seconds =
            String(now.getSeconds()).padStart(2, "0");

        const clock =
            document.querySelector(".sync-status");

        if (clock) {

            clock.innerHTML = `
                <span class="status-dot"></span>
                Sincronização em tempo real
                <strong>Ativa</strong>
                <small style="
                    margin-left:5px;
                    opacity:.7;
                ">
                    ${hours}:${minutes}:${seconds}
                </small>
            `;

        }

    }

    updateClock();

    setInterval(updateClock, 1000);


    /* =========================
       RESPONSIVE
       ========================= */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 991) {
            hideSidebar();
        }

    });

});
