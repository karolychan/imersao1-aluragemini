
function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    // Conferir se a pesquisa está vazia
    if (!campoPesquisa ) {
        section.innerHTML = `<p>Banda não encontrada digite um conceito ou nome.</p>`;
        return;
    }
    campoPesquisa = campoPesquisa.toLowerCase()


    // Inicializa as string de guarda result 
    let resultados = "";
    let titulo = ""; 
    let descricao = "";
    let tags = "";

    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.map(tag => tag.toLowerCase()) 

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Cria resultado da banda
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="#" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Wiki da banda</a>
                    <h5 class="membros-meta">${dado.membros}</h5>
                </div>`;
        }
    }

  if (!resultados) {
    resultados = '<p>  nao existem resultados </p>'} 
    //
    section.innerHTML = resultados;
}

//console.log(section);



