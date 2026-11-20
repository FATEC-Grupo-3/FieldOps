document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");
    const authButton = document.getElementById("authButton");

    const passwordInput =
        document.getElementById("password");

    const togglePassword =
        document.getElementById("togglePassword");

    const authAlert =
        document.getElementById("authAlert");

    const authAlertText =
        document.getElementById("authAlertText");


    /* ==========================================
       MOSTRAR / OCULTAR SENHA
    ========================================== */

    togglePassword.addEventListener("click", function () {

        if (passwordInput.type === "password") {

            passwordInput.type = "text";

            this.innerHTML =
                '<i class="bi bi-eye-slash"></i>';

        } else {

            passwordInput.type = "password";

            this.innerHTML =
                '<i class="bi bi-eye"></i>';

        }

    });


    /* ==========================================
       LOGIN
    ========================================== */

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const email =
            document.getElementById("corporateId").value.trim();

        const password =
            passwordInput.value.trim();


        /* Validação */

        if (!email || !password) {

            mostrarAlerta(
                "Preencha todos os campos obrigatórios.",
                "danger"
            );

            return;
        }


        /* Botão carregando */

        authButton.disabled = true;

        authButton.innerHTML = `
            <span
                class="spinner-border spinner-border-sm">
            </span>

            <span>
                Autenticando...
            </span>
        `;


        mostrarAlerta(
            "Validando suas credenciais...",
            "info"
        );


        /*
         * Simulação de autenticação.
         *
         * Aqui futuramente você pode
         * conectar sua API/backend.
         */

        setTimeout(function () {

            mostrarAlerta(
                "Acesso autorizado. Redirecionando...",
                "success"
            );


            authButton.innerHTML = `
                <i class="bi bi-check-circle"></i>

                <span>
                    Acesso autorizado
                </span>
            `;


            /*
             * REDIRECIONA PARA O DASHBOARD
             */

            setTimeout(function () {

                window.location.href = "dashboard.html";

            }, 600);


        }, 1000);

    });


    /* ==========================================
       ALERTA
    ========================================== */

    function mostrarAlerta(mensagem, tipo) {

        authAlert.className =
            `alert alert-${tipo}`;

        authAlert.classList.remove("d-none");

        authAlertText.textContent = mensagem;

    }

});
