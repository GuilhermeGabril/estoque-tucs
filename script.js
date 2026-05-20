const form = document.getElementById("form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = {
    nome: document.getElementById("nome").value,
    qtd: parseInt(document.getElementById("qtd").value),
    categoria: document.getElementById("categoria").value,
    link: document.getElementById("link").value
  };

  console.log("Tentando enviar os seguintes dados para a planilha:", data);

  try {
    const url = "https://script.google.com/macros/s/AKfycbyRQzzMuPTJNx1jAoZkBv2pG-yWSHzKTH3VJTbVOLWaP5GM0kceH5Ld8SVc4q8g48f9Ag/exec";
    
    const response = await fetch(url, {
      method: "POST",
      mode: "no-cors", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    // Log para inspecionar o objeto de resposta (deve aparecer type: "opaque")
    console.log("Resposta recebida do fetch (modo no-cors):", response);

    alert("Salvo com sucesso!");
    form.reset();

  } catch (err) {
    // Este log só dispara se a URL estiver errada ou se você estiver totalmente sem internet
    console.error("Erro crítico detectado no catch do bloco fetch:", err);
    alert("Erro ao conectar com o servidor.");
  }
});