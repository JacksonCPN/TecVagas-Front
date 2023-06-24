const cadastro = document.querySelector("form");


const inome = document.querySelector(".nome");
const iemail = document.querySelector(".email");
const itelefone = document.querySelector(".telefone");
const isenha = document.querySelector(".senha");
const icargo = document.querySelector(".cargo");
const isalario = document.querySelector(".salario");
const iestado = document.querySelector(".estado");
const icpf = document.querySelector(".cpf");


function cadastrar() {

    fetch('http://localhost:8080/candidato',
     {
       headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
           

       },
       
       method: "POST",
       body: JSON.stringify({
        nome : inome.value,
        email : iemail.value,
        telefone : itelefone.value,
        senha : isenha.value,
        cargoDesejado : icargo.value,
        pretensaoSalarial : isalario.value,
        estado : iestado.value,
        cpf : icpf.value
    })
    })
    .then(function (res) {console.log(res) })
    .catch(function (res) { console.log(res) })

};



cadastro.addEventListener('submit', function (event){
    event.preventDefault();
   

    cadastrar();
    // const dados = {
    //     nome : inome.value,
    //     email : iemail.value,
    //     telefone : itelefone.value,
    //     senha : isenha.value,
    //     cargo : icargo.value,
    //     salario : isalario.value,
    //     estado : iestado.value,
    // };

    // verifica se os dados estão sendo inseridos corretamente
    // console.log(dados);



});
