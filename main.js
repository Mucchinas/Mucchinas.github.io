// Aspetta che il DOM sia completamente caricato
document.addEventListener('DOMContentLoaded', () => {

    // Seleziona gli elementi del DOM
    const modal = document.getElementById('project-modal');
    const modalCloseBtn = document.querySelector('.modal-close');
    const modalTitle = document.getElementById('modal-title');
    const modalMediaContainer = document.getElementById('modal-media-container');
    const modalDescription = document.getElementById('modal-description');
    
    // Seleziona TUTTE le card dei progetti
    const projectCards = document.querySelectorAll('.project');

    // Funzione per aprire il modale
    function openModal(projectCard) {
        // 1. Prendi i dati dalla card cliccata
        const title = projectCard.querySelector('h3').textContent;
        
        // --- MODIFICA CHIAVE ---
        // Cerca la descrizione solo nel contenitore specifico
        const descriptionEl = projectCard.querySelector('.project-description');
        const description = descriptionEl ? descriptionEl.innerHTML : '';

        // --- MODIFICA CHIAVE ---
        // Cerca il media solo nel contenitore specifico
        const mediaWrapper = projectCard.querySelector('.project-modal-media');
        const mediaImg = mediaWrapper ? mediaWrapper.querySelector('img') : null;
        const mediaVideo = mediaWrapper ? mediaWrapper.querySelector('video') : null;
        
        // 2. Popola il modale con i dati
        modalTitle.textContent = title;
        modalDescription.innerHTML = description;
        
        // 3. Pulisci il contenitore media e aggiungi il nuovo media (se esiste)
        modalMediaContainer.innerHTML = ''; // Pulisce media precedenti
        
        if (mediaImg) {
            // Clona l'immagine per evitare che venga "spostata" dalla card
            modalMediaContainer.appendChild(mediaImg.cloneNode(true));
        } else if (mediaVideo) {
            // Clona il video
            const videoClone = mediaVideo.cloneNode(true);
            videoClone.controls = true; // Assicurati che i controlli siano visibili
            modalMediaContainer.appendChild(videoClone);
        }
        
        // 4. Mostra il modale
        modal.style.display = 'block';
    }

    // Funzione per chiudere il modale
    function closeModal() {
        modal.style.display = 'none';
        // Ferma qualsiasi video in riproduzione pulendo l'HTML
        modalMediaContainer.innerHTML = '';
    }

    // Aggiungi un event listener a OGNI card
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            openModal(card);
        });
    });

    // Aggiungi event listener per chiudere il modale
    modalCloseBtn.addEventListener('click', closeModal);

    // Chiudi il modale anche cliccando sull'overlay (lo sfondo)
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Chiudi il modale premendo il tasto "Escape"
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });

});