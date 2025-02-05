// Controleer of Phantom Wallet beschikbaar is
const connectWalletBtn = document.getElementById('connectWalletBtn');
const claimBtn = document.getElementById('claimBtn');
const statusDiv = document.getElementById('status');

// Functie om de wallet te verbinden
async function connectWallet() {
  if (window.solana && window.solana.isPhantom) {
    try {
      // Vraag de gebruiker om te verbinden
      const resp = await window.solana.connect();
      statusDiv.innerText = `Wallet verbonden: ${resp.publicKey.toString()}`;
      // Schakel de claim-knop in als de wallet is verbonden
      claimBtn.disabled = false;
    } catch (err) {
      statusDiv.innerText = 'Wallet connectie geannuleerd';
    }
  } else {
    statusDiv.innerText = 'Phantom Wallet niet gevonden. Installeer Phantom om door te gaan.';
  }
}

connectWalletBtn.addEventListener('click', connectWallet);

// Functie om tokens te claimen (basisvoorbeeld)
async function claimTokens() {
  // Hier voeg je de logica toe om een transactie te maken die jouw tokens verstuurt naar de gebruiker.
  // Dit is een basisvoorbeeld. Je zult hier de interactie met je smart contract of backend moeten inbouwen.
  
  try {
    // Toon een voorbeeldbericht
    statusDiv.innerText = 'Tokens claimen... (hier komt de transactie logica)';
    
    // Voeg hier de code toe voor de transactie
    // Bijvoorbeeld: gebruik window.solana.request om een transactie te versturen
    
    // Zodra de transactie voltooid is:
    statusDiv.innerText = 'Tokens succesvol geclaimd!';
  } catch (error) {
    console.error(error);
    statusDiv.innerText = 'Er is een fout opgetreden bij het claimen van tokens.';
  }
}

claimBtn.addEventListener('click', claimTokens);


