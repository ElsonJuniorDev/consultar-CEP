function consultarEndereco() {
  let cep = document.querySelector("#cep").value;

  if (cep.length !== 8) {
    alert("CEP inválido");
    return;
  }

  let url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url).then((response) => {
    response.json().then((data) => {
      exibirEndereco(data);
    });
  });
}

function exibirEndereco(dados) {
  let resultado = document.querySelector("#resultado");

  if (dados.erro) {
    resultado.innerHTML = `<p>CEP não encontrado.</p>`;
  } else {
    resultado.innerHTML = `
        <p>Bairro:     ${dados.bairro}</p>
        <p>Cidade: ${dados.localidade} - ${dados.uf} </p>
        <p>Complemento: ${dados.complemento}</p>
        <p>Endereço: ${dados.logradouro}</p>
        <p>DDD: ${dados.ddd}</p>
        `;
  }
}
