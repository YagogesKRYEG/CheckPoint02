const aluno = [
{
    nome: "marcos",
    faltas: 3,
    notas: [7,3,9,10]
},
{
    nome: "julia",
    faltas: 0,
    notas: [9,7,9,9]
},
{
    nome: "alex",
    faltas: 2,
    notas: [8,6,6,8]
},
{
    nome: "joao",
    faltas: 1,
    notas: [7,7,3,7]

},
{
    nome: "nicole",
    faltas: 1,
    notas: [8,9,9,10]
},
{
    nome: "bruno",
    faltas: 5,
    notas: [6,5,5,7]
},
{
    nome: "mateus",
    faltas: 6,
    notas: [5,4,7,8]
},
{
    nome: "giovana",
    faltas: 0,
    notas: [6,8,8,7]
},
{
    nome: "barbara",
    faltas: 1,
    notas: [8,7,7,9]
},
{
    nome: "luiza",
    faltas: 4,
    notas: [7,5,8,7]
},
{
    nome: "marcelo",
    faltas: 2,
    notas: [5,4,7,10]
},
{
    nome: "thiago",
    faltas: 2,
    notas: [6,3,9,7]
},
{
    nome: "kevin",
    faltas: 3,
    notas: [5,5,6,6]
},
{
    nome: "fabio",
    faltas: 3,
    notas: [6,6,5,7]
},
{
    nome: "rodrigo",
    faltas: 0,
    notas: [7,7,9,10]
},
{
    nome: "larissa",
    faltas: 6,
    notas: [1,3,10,10]
},
{
    nome: "giulia",
    faltas: 4,
    notas: [2,5,9,9]
},
{
    nome: "ana maria",
    faltas: 2,
    notas: [9,9,7,7]
},
{
    nome: "fernanda",
    faltas: 3,
    notas: [6,8,8,7]
},
{
    nome: "carol",
    faltas: 3,
    notas: [6,6,6,6]
},
{
    nome: "wesley",
    faltas: 5,
    notas: [4,4,5,3]
}
];
function Aluno (nome, faltas, notas){
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;


    this.calcularMedia = function() {
        const soma = this.notas.reduce((total, nota) => total + nota, 0);
        return soma / this.notas.length;
      }
      
      this.registrarFalta = function() {
        
        this.faltas++;
      }
    }




const marcos = new Aluno('marcos', 3, [7,3,9,10]);
const julia = new Aluno('julia', 0, [9,7,9,9]);
const alex = new Aluno('alex', 0, [8,6,6,8]);
const nicole = new Aluno('nicole', 1, [8,9,9,10]);
const bruno = new Aluno('bruno', 5, [6,5,5,7]);
const mateus = new Aluno('mateus', 6, [5,4,7,8]);
const giovana = new Aluno('giovana', 0, [6,8,8,7]);
const barbara = new Aluno('barbara', 1, [8,7,7,9]);
const luiza = new Aluno('luiza', 4, [7,5,8,7]);
const marcelo = new Aluno('marcelo', 2, [5,4,7,10]);
const thiago = new Aluno('thiago', 2, [6,3,9,7]);
const kevin = new Aluno('Kevin', 3, [5,5,6,6]);
const fabio = new Aluno('fabio', 3, [6,6,5,7]);
const rodrigo = new Aluno('rodrigo', 0, [7,7,9,10]);
const larissa = new Aluno('larissa', 6, [1,3,10,10]);
const ana_maria = new Aluno('ana maria', 2, [9,9,7,7]);
const fernanda = new Aluno('fernanda', 3, [6,8,8,7]);
const carol = new Aluno('carol', 3, [6,6,6,6]);
const wesley = new Aluno('wesley', 5, [4,4,5,3]);
const ana = new Aluno('Ana', 8, [6.0, 7.0, 9.0]);

 let listaAluno =  [
        marcos,
        julia,
        alex,
        nicole,
        bruno,
        mateus,
        giovana,
        barbara,
        luiza,
        marcelo,
        thiago,
        kevin,
        fabio,
        rodrigo,
        larissa,
        ana_maria,
        fernanda,
        carol,
        wesley,
        ana 
]


console.log(julia.calcularMedia());
julia.registrarFalta();
console.log(julia.faltas); 

module.exports = {Aluno};


