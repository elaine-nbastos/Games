const numeroMaximo = 100
const numeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
const musica = new Audio('/musica/Missao impossivel.mp3');
const aplausos = new Audio("./musica/aplausos.mp3");

let tentativas = 0;

musica.loop=true;


function guessNumber() {
    const guess = parseInt(document.getElementById('guess').value);
    const mensagem = document.getElementById('mensagem');

    musica.play();
    
    if (isNaN(guess) || guess < 1 || guess > numeroMaximo) {
        mensagem.textContent = `Por favor, insira um número válido entre 1 e ${numeroMaximo}.`;
        return;
    }

    tentativas++;

    if (guess === numeroSecreto) {
        mensagem.textContent = `Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativas!`;
        statusImage.style.display= "block";
        musica.pause();
        aplausos.play();
    } else if (guess < numeroSecreto) {
        mensagem.textContent = 'Tente um número maior.';
        // Limpar o campo de entrada após um palpite incorreto
        document.getElementById('guess').value = '';
    } else {
        mensagem.textContent = 'Tente um número menor.';
        // Limpar o campo de entrada após um palpite incorreto
        document.getElementById('guess').value = '';
        
    }
}
