//procurar o botão
document
    .querySelector("#add-time")
    // qnd clicar no botao
    .addEventListener("click", cloneField);
// executar uma ação
function cloneField() {
    // ---Duplicar os campos. Que campos?
    const newFieldContainer = document
        .querySelector(".schedule-item")
        .cloneNode(true); //boolean: true ou false
    // Pegar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll("input");
    //---- para cada campo, limpar
    fields.forEach(function (field) {
        //pega o field do momento e limpa ele
        field.value = "";
    });

    document.querySelector("#schedule-items").appendChild(newFieldContainer);
}
