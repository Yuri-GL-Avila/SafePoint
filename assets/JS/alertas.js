function filtrarAlertas() {
    const estadoSelecionado = document.getElementById("estado").value;
    const alertas = document.querySelectorAll(".card-alerta");

    alertas.forEach(card => {
        const estado = card.getAttribute("data-estado");
        if (estadoSelecionado === "todos" || estado === estadoSelecionado) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}