// Liste de citations
const citations = [
  "La vie est comme une boîte de chocolats, on ne sait jamais sur quoi on va tomber. - Forrest Gump",
  "La simplicité est la sophistication suprême. - Leonardo da Vinci",
  "Le plus grand risque est de ne prendre aucun risque. - Mark Zuckerberg",
  "L'avenir appartient à ceux qui croient en la beauté de leurs rêves. - Eleanor Roosevelt",
  "Chaque jour est une nouvelle chance de changer votre vie. - Inconnu"
];

// Fonction pour obtenir une citation aléatoire
function citationAleatoire() {
  const randomIndex = Math.floor(Math.random() * citations.length);
  return citations[randomIndex];
}

// Affichage de la citation aléatoire dans la console
console.log("Voici une citation aléatoire pour vous :");
console.log(citationAleatoire());
