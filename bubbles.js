document.addEventListener('DOMContentLoaded', () => {
    const bubbleContainer = document.querySelector('.background-bubbles');
    
    if (!bubbleContainer) {
        console.warn('Contenitore bolle non trovato.');
        return;
    }

    const bubblesUpCount = 25; // Quante verdi che salgono
    const bubblesDownCount = 15; // Quante verde acqua che scendono
    const totalBubbles = bubblesUpCount + bubblesDownCount;

    for (let i = 0; i < totalBubbles; i++) {
        const bubble = document.createElement('li');

        // Impostazioni casuali comuni
        const size = Math.random() * 70 + 10; // Dimensione (10px - 80px)
        const delay = Math.random() * 7; // Ritardo (0s - 10s)
        const duration = Math.random() * 20 + 3; // Durata

        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.animationDelay = `${delay}s`;
        bubble.style.animationDuration = `${duration}s`;

        // Decide se la bolla sale o scende
        if (i < bubblesUpCount) {
            
            // --- Bolla che SALE (Verde) ---
            bubble.classList.add('bubble-up');
            
            // Posizione casuale su tutta la larghezza (0% - 100%)
            const position = Math.random() * 100;
            bubble.style.left = `${position}%`;

        } else {
            
            // --- Bolla che SCENDE (Verde Acqua) ---
            bubble.classList.add('bubble-down');

            const position = Math.random() * 100;
            bubble.style.left = `${position}%`;
        }

        bubbleContainer.appendChild(bubble);
    }
});