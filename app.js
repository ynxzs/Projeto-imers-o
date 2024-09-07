function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById ("campo-pesquisa").value
      
    if (campoPesquisa == "") {
      section.innerHTML = "<p class='mensagem-nao-encontrada'> Você não digitou nada. </p>" 
      return 
    }

    campoPesquisa=campoPesquisa.toLowerCase()

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo ="";
    let descricao ="";
    let tags = "";
  
    // Itera sobre os dados e constrói o HTML para cada resultado
    for (let dado of dados) {
      titulo = dado.titulo.toLocaleLowerCase()
      descricao = dado.descricao.toLocaleLowerCase()
      tags = dado.tags.toLocaleLowerCase()
      if (titulo.includes(campoPesquisa) || descricao.includes (campoPesquisa)||tags.includes(campoPesquisa)) {
        //Cria um novo elemento HTML para cada resultado
        resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}
            </a>
          </h2>
          <p  class="descricao-meta">${dado.descricao}</p>
          <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
      `;
      }    
    }
  
    if (!resultados) {
      resultados = "<p>NADA FOI ENCONTRADO! <p>"
    }

    // Atribui o HTML gerado à seção de resultados  
    section.innerHTML = resultados;
  }

