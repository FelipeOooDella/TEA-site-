// Espera o carregamento da página antes de ativar
document.addEventListener("DOMContentLoaded", () => {
  const chatbox = document.getElementById("chatbox");
  const input = document.getElementById("userInput");

  window.sendMessage = () => {
    const userText = input.value.trim();
    if (userText === "") return;

    // Mostra a mensagem do usuário
    addMessage(userText, "user");

    // Simula resposta da IA após 1 segundo
    setTimeout(() => {
      const botResponse = generateBotResponse(userText);
      addMessage(botResponse, "bot");
    }, 1000);

    input.value = ""; // Limpa campo
  };

  function addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.className = "message " + sender;
    msg.innerText = text;
    chatbox.appendChild(msg);
    chatbox.scrollTop = chatbox.scrollHeight;
  }

  function generateBotResponse(input) {
    // Respostas simuladas simples (você pode expandir)
    const respostaPadrao = "Obrigado pela mensagem! Em breve um profissional entrará em contato.";
    const texto = input.toLowerCase();

    if (texto.includes("consulta") || texto.includes("agendar")) {
      return "Claro! Você gostaria de agendar uma consulta presencial ou online?";
    } else if (texto.includes("sintomas")) {
      return "Você pode descrever os sintomas observados? Isso nos ajuda a entender melhor o caso.";
    } else if (texto.includes("oi") || texto.includes("olá")) {
      return "Olá! Sou a assistente virtual do Dr. João. Como posso ajudar?";
    } else {
      return respostaPadrao;
    }
  }
});
