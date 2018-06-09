class Pessoa {

    constructor() {
        this.pessoas = [];
        this.sexoM = [];
        this.sexoF = [];
        this.qtdSexoM = 0;
        this.qtdSexoF = 0;
    }

    adicionar() { //Adiciona uma pessoa na lista
        let nome = document.getElementById("nome").value;
        let sexo = document.querySelector("[name=sexo]:checked").value;
        let btnM = document.getElementById("btnM");
        let btnF = document.getElementById("btnF");
        let btnAdd = document.getElementById("btnAdicionar");

        let pessoa = {
            nome: nome,
            sexo: sexo
        };

        if (sexo == "M") {
            this.qtdSexoM++;
            btnM.innerText = "";
            btnM.innerText = "Listar homens (" + this.qtdSexoM + ")";
        } else {
            this.qtdSexoF++;
            btnF.innerText = "";
            btnF.innerText = "Listar mulheres (" + this.qtdSexoF + ")";
        }

        if ((this.qtdSexoM + this.qtdSexoF) > 0) {
            let total = this.qtdSexoM + this.qtdSexoF;
            btnAdd.innerText = "Adicionar (" + total + ")";
        }
        this.pessoas.push(pessoa);
    } //Fim de adicionar()

    verificarSexoDasPessoas() {
        for (let i = 0; i < this.pessoas.length; i++) {
            if (this.pessoas[i].sexo == "M") {
                this.sexoM.push(this.pessoas[i]);
                this.qtdSexoM++;
            } else {
                this.sexoF.push(this.pessoas[i]);
                this.qtdSexoF++;
            }
        }
    }

    montarLista(vet) {
        let divLista = document.getElementById("lista");
        divLista.innerText = "";

        for (let i = 0; i < vet.length; i++) {
            let divPessoa = document.createElement("div");
            divPessoa.innerText = (i+1) + " - " + vet[i].nome;
            divLista.appendChild(divPessoa);
        }
    }

    listarSexoMasculino() { //Mostra na tela as pessoas do sexo Masculino
        this.sexoM = [];
        this.verificarSexoDasPessoas();

        if (this.qtdSexoM > 0) {
            this.montarLista(this.sexoM);
        } else {
            alert("Não existem Homens cadastrados");
        }
    }

    listarSexoFeminino() { //Mostra na tela as pessoas do sexo Feminino
        this.sexoF = [];
        this.verificarSexoDasPessoas();

        if (this.qtdSexoF > 0) {
            this.montarLista(this.sexoF);
        } else {
            alert("Não existem Mulheres cadastradas");
        }
    }
} //Fim da classe

var pessoa = new Pessoa();