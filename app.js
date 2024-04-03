const iniciarJogo = document.querySelector(".btn");
const musica = new Audio('/musica/Missao impossivel.mp3');
const titulo = document.querySelector('.titulo');

let numeroMaximo = 300;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);

let chute;
let tentativas = 1;





iniciarJogo.addEventListener("click", ()=>{

  musica.loop = true;

  if(musica.paused){
    musica.play()
  }else{
    musica.pause()
  };

  iniciarJogo.style.display = "none"  

  titulo.innerHTML = `
  <h2>Escolha um número de 0 a 100:</h2>
  <input type="number" id="numero-sugerido" class="form-control">
  <button id="chutar" class="btn" aria-placeholder="btn" onclick="capturarValor()"><p>Chutar :)</p></button>
  `;
})

function capturarValor(){

  const valorDoChute = parseInt(document.getElementById("numero-sugerido").value);

  if(valorDoChute == numeroSecreto){
    titulo.textContent = `Parabéns, você acertou!`
  }else{
    if(valorDoChute > numeroSecreto){
      titulo.textContent= `O número secreto é menor que ${valorDoChute}!`
      ;
    }else{
      titulo.textContent=`O número secreto é maior que ${valorDoChute}`;
    }
  }
}