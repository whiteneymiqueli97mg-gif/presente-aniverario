
function perguntaUm(resposta) {
    const resposta1 = document.getElementById("resposta1");
    const pergunta2 = document.getElementById("pergunta2");

    if (resposta === "Sim") {
        resposta1.textContent = "Oba! 🥰 Então vamos lá!";
        pergunta2.style.display = "block";
    } else {
        resposta1.textContent = "Tudo bem! Respire fundo e venha descobrir. 💕";
        pergunta2.style.display = "block";
    }
}

function surpresa(desejo) {
    const mensagem = document.getElementById("mensagem");

    mensagem.innerHTML = `
        <h2>Feliz aniversário! 🎉🎂</h2>
        <p>Que seu novo ciclo seja cheio de ${desejo.toLowerCase()},
        saúde, carinho e momentos inesquecíveis!você é uma pessoa muito importante para mim,e uma 
        pessoa foda pra carai,obrigado por sua amizade,sempre estarei contigo pro que precisar!!!</p>
        <p>Que todos os seus sonhos encontrem um caminho para se realizar.</p>
        <h3>Você merece tudo que há de bom nesse mundo!❤️🎁</h3>
        <p>Espero um dia te ver,pra tomarmos aquele café ☕️!!
        <p>RUSSINHA.❤️</p>
    `;
}
