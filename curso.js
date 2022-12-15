const {listaEstudantes,Aluno} =require("./aluno")
function Curso(nomeCurso, notaAprovacao, limiteFaltas, listaEstudantes) {
    this.nomeCurso = nomeCurso;
    this.notaAprovacao = notaAprovacao;
    this.limiteFaltas = limiteFaltas;
    this.listaEstudantes = listaEstudantes;
  
    this.adicionarAluno = function(aluno) {
      this.listaEstudantes.push(aluno);
    }
  
  this.addAluno = function(aluno) {
    this.listaEstudantes.push(new Aluno("Khaled", 0, [7,8,7,7]));
  }

  this.aprovado = function(aluno) {

    const media = aluno.notas.reduce((a, b) => a + b, 0) / aluno.notas.length;
    return media >= this.notaAprovacao && aluno.numeroFaltas <= this.limiteFaltas;
  }
  
  this.listaAprovados = function() {
 
    return this.listaEstudantes.filter(aluno => this.aprovado(aluno));
  }
}
const curso1 = new Curso("Ciências da Computação", 7, 5, []);
const curso2 = new Curso("Design de Moda", 6, 5, []);

curso1.addAluno(new Aluno("Khaled", 0, [7,8,7,7]));
console.log(curso1.listaEstudantes);

if (curso1.aprovado(curso1.listaEstudantes[0])) {
  console.log(curso1.listaAprovados()); 
}
let curso = [
{
    nomeCurso:"ciencias da computacao",
    notaAprovacao:7,
    limiteFaltas:5,
    listaEstudantes:[]

},
{
    nomeCurso:"design de moda",
    notaAprovacao:6,
    limiteFaltas:5,
    listaEstudantes:   [
       'bruno','mateus','giovana','barbara'
    ]  
},
{
    nomeCurso:"medicina veterinaria",
    notaAprovacao:8,
    limiteFaltas:3,
    listaEstudantes:[
        'luiza','marcelo','thiago','kevin'
    ]
},
{
    nomeCurso:"educação fisica",
    notaAprovacao:7,
    limiteFaltas:4,
    listaEstudantes: [
        'fabio','rodrigo','larissa','ana_maria'
    ]
},

{
    nomeCurso:"engenharia",
    notaAprovacao:7,
    limiteFaltas:5,
    listaEstudantes:[
        'fernanda','carol','wesley'
        
    ]
}];
// finish