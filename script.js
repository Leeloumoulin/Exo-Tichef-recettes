//on donne l'url du site à appeller
fetch('data.json')
    .then((rep) => {
        
        return rep.json()
    })
    .then(donnee => {
        //ensuite j'ai accès à ma donnée
        console.log(donnee)
        //ici j'ai une liste de produits
        //je boucle sur le tableau de données
        donnee.forEach(prod => {
            affiche(prod)
        });
    })

// Rôle : Afficher un produit dans la page HTML sous forme de cartes 
// Paramètre : "recette", 
// Retour : Cette fonction ne retourne rien (elle effectue des manipulations DOM)

//on boucle sur chaque étape à injecter + sur les sous catégories : ingrédients, étapes

    function affiche(recette){
        let nom = recette.nom
        let img = recette.img
        let niveau = recette.difficulte
        let duree = recette.tempPreparation
        let cuisson = recette.tempCuisson
        let portions = recette.portions
        let saison = recette.saison
        let ingredients = recette.ingredients
        let liste = ""
        let steps = ""
        ingredients.forEach(ing => {
            let quantite = ing.quantite
            let unite = ing.unite
            let aliment = ing.aliment
            liste = `<li>${quantite}${unite}${aliment}</li>`
        });
        let etapes = recette.etapes
        etapes.forEach(step => {
            let numEtape= step.numeroEtape
            let descEtape = step.descEtape
            steps = `<li>${numEtape}${descEtape}</li>`
        });

document.querySelector(".containerRecettes").innerHTML +=
        `
         <div class="card">
                <h3>${nom}</h3>
                <ul class="flex">
                    <li><span>Difficulté : </span>${niveau}</li>
                    <li><span>Portions : </span>${portions}</li>
                    <li><span>Temps de préparation : </span>${duree}</li>
                    <li><span>Temps de cuisson : </span>${cuisson}</li>
                </ul>
                <div class="flex">
                    <div>
                        <h4>Ingrédients : </h4>
                        <ul>
                        ${liste}
                        </ul>
                    </div>
                    <div>
                        <h4>Etapes : </h4>
                        <ol>
                        ${steps}
                        </ol>
                    </div>
                    <div>
                    ${img}
                    </div>
                </div>
            </div>
        `
    }

