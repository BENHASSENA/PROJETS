console.log('hello');

const addButton = document.querySelector('.btn-add');  // la variable addButton selectionne la classe .btn-add
const suppButton = document.querySelector('.btn-supp')  // la variable suppButton selectionne la classe .btn-supp
const userList = document.querySelector('#userlist');  // la variable userList selectionne l'id userlist
const nameInput = document.querySelector('#Name');  // la variable nameInput selectionne l'id Name
const emailInput = document.querySelector('#Email');  // la variable emailInput selectionne l'id Email

// console.log(window);

addButton.addEventListener('click',(e) =>{  // J'enregistre un gestionnaire d'évènement pour le click sur le bouton addButton

        e.preventDefault(); //  Annuler le comportement par défaut du bouton (si c'est un submit par exemple)

        const li = document.createElement('li'); // la variable li créé la balise li

        li.className = "user";  // je donne une class user à la li

        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
        // je récupere la valeur de l'id Name et de l'id Email avec lesquelles je créé un contenu temporaire que je vais insérer dans le li

        if(userList.appendChild(li)){ 0   // J'essaie d'ajouter un élément à ma liste et si je réussis ALORS effectue ce qui est dans les accolades. Sinon ne fais rien
            nameInput.value = ' ';
            emailInput.value = ' ';
        }

});


suppButton.addEventListener('click',(e) =>{

        li.remove;


});
