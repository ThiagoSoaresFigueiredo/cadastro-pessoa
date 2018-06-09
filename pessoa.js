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

        let pessoa = {
            nome: nome,
            sexo: sexo
        };

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

    listarSexoMasculino() { //Mostra na tela as pessoas do sexo Masculino
        this.verificarSexoDasPessoas();

        if (this.qtdSexoM > 0) {
            console.log(this.sexoM);
        } else {
            alert("Não existem Homens cadastrados");
        }
    }

    listarSexoFeminino() { //Mostra na tela as pessoas do sexo Feminino
        this.verificarSexoDasPessoas();

        if (this.qtdSexoF > 0) {
            console.log(this.sexoF);
        } else {
            alert("Não existem Mulheres cadastradas");
        }
    }
} //Fim da classe

var pessoa = new Pessoa();