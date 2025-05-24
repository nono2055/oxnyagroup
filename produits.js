fetch('produits.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('produits-list');
    data.forEach(categorie => {
      const catTitle = document.createElement('h3');
      catTitle.textContent = categorie.categorie;
      catTitle.style.color = 'var(--accent)';
      catTitle.style.marginTop = '2em';
      container.appendChild(catTitle);

      categorie.produits.forEach(produit => {
        const card = document.createElement('div');
        card.className = 'produit-card';
        card.innerHTML = `
          <h4>${produit.nom}</h4>
          <p>${produit.description}</p>
          <button class="btn-demander-prix" onclick="window.location.href='contact.html?produit=${encodeURIComponent(produit.nom)}'">Demander les prix</button>
        `;
        container.appendChild(card);
      });
    });
  });
