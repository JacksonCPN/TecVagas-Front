const cadastro = document.querySelector("form");

const Inome = document.querySelector(".nomecandidato")
const Iempresa = document.querySelector(".nome_empresa");
const Icnpj = document.querySelector(".cnpj")
const Iemail = document.querySelector(".email");
const Itelefone = document.querySelector(".telefone");
const Isenha = document.querySelector(".senha");

const dados = {
       nome : Inome.value,
    //     email : iemail.value,
    //     telefone : itelefone.value,
    //     senha : isenha.value,
    //     cargo : icargo.value,
    //     salario : isalario.value,
    //     estado : iestado.value,
    };

    




function cadastrar() {


   

    const form = {
        nome : Inome.value,
        nomeEmpresa : Iempresa.value,
        cnpj : Icnpj.value,
        email : Iemail.value,
        telefone : Itelefone.value,
        senha : Isenha.value,
    }

   

    fetch('http://localhost:8080/empresa',
     {
       headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
           

       },
       
       method: "POST",
       body: JSON.stringify(
        form
    )
    })
    .then(function (res) {console.log(res) })
    .catch(function (res) { console.log(res) })
};



cadastro.addEventListener('submit', function (event){
    event.preventDefault();
   

    cadastrar();
  


});