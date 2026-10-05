// ========================================
// PLANETCELL LIMEIRA - JAVASCRIPT
// ========================================


// ========================================
// 1. ROLAGEM SUAVE DO MENU
// ========================================

const linksMenu = document.querySelectorAll('nav a[href^="#"]');

linksMenu.forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {
            destino.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});


// ========================================
// 2. ANIMAÇÃO DAS SEÇÕES
// ========================================

const elementos = document.querySelectorAll(
    "section h2, section > p, .servicos article, .acessorios article, .contato-info"
);

const observador = new IntersectionObserver(
    (entradas) => {

        entradas.forEach(entrada => {

            if (entrada.isIntersecting) {

                entrada.target.classList.add("aparecer");

                observador.unobserve(entrada.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);

elementos.forEach(elemento => {
    observador.observe(elemento);
});


// ========================================
// 3. BOTÃO VOLTAR AO TOPO
// ========================================

const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "↑";
botaoTopo.setAttribute("aria-label", "Voltar ao topo");

botaoTopo.style.position = "fixed";
botaoTopo.style.bottom = "25px";
botaoTopo.style.right = "25px";
botaoTopo.style.width = "50px";
botaoTopo.style.height = "50px";
botaoTopo.style.border = "none";
botaoTopo.style.borderRadius = "50%";
botaoTopo.style.backgroundColor = "#FF7A00";
botaoTopo.style.color = "#FFFFFF";
botaoTopo.style.fontSize = "24px";
botaoTopo.style.fontWeight = "bold";
botaoTopo.style.cursor = "pointer";
botaoTopo.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.20)";
botaoTopo.style.display = "none";
botaoTopo.style.zIndex = "999";
botaoTopo.style.transition = "0.3s ease";

document.body.appendChild(botaoTopo);


// Mostrar botão depois de rolar

window.addEventListener("scroll", function() {

    if (window.scrollY > 400) {
        botaoTopo.style.display = "block";
    } else {
        botaoTopo.style.display = "none";
    }

});


// Voltar para o topo

botaoTopo.addEventListener("click", function() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// ========================================
// 4. EFEITO NO BOTÃO DO TOPO
// ========================================

botaoTopo.addEventListener("mouseenter", function() {

    botaoTopo.style.backgroundColor = "#E96800";
    botaoTopo.style.transform = "scale(1.1)";

});

botaoTopo.addEventListener("mouseleave", function() {

    botaoTopo.style.backgroundColor = "#FF7A00";
    botaoTopo.style.transform = "scale(1)";

});


// ========================================
// 5. WHATSAPP
// ========================================

const botoesWhatsApp = document.querySelectorAll(
    'a[href*="wa.me"]'
);

botoesWhatsApp.forEach(botao => {

    botao.addEventListener("click", function() {

        console.log(
            "Cliente direcionado para o WhatsApp da PlanetCell."
        );

    });

});


// ========================================
// 6. INSTAGRAM
// ========================================

const botaoInstagram = document.querySelector(
    'a[href*="instagram.com"]'
);

if (botaoInstagram) {

    botaoInstagram.addEventListener("click", function() {

        console.log(
            "Cliente direcionado para o Instagram da PlanetCell."
        );

    });

}


// ========================================
// 7. ANIMAÇÃO DE ENTRADA DO SITE
// ========================================

window.addEventListener("load", function() {

    const hero = document.querySelector(".hero");

    if (hero) {
        hero.style.opacity = "1";
    }

});


// ========================================
// 8. ANO AUTOMÁTICO NO FOOTER
// ========================================

const ano = new Date().getFullYear();

const textosFooter = document.querySelectorAll("footer p");

textosFooter.forEach(texto => {

    if (texto.textContent.includes("2026")) {

        texto.textContent =
            texto.textContent.replace("2026", ano);

    }

});