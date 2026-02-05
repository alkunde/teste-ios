function salvar() {
    const input = document.querySelector("input");
    localStorage.setItem("teste", input.value);

    document.getElementById("status").innerText = "Salvo no LocalStorage: " + input.value;
}

window.onload = function() {
    const valor = this.localStorage.getItem("teste");
    if (valor) {
        document.querySelector("input").value = valor;
    }
};
