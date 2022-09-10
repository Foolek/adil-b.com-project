/* Réglage des audio  */
let audio = document.getElementById("myaudio");
audio.volume = 0.5;


/* GET ELEMENTS */
const papyrusParagraphe = document.getElementById('Phrase');
const combat = document.getElementById('COMBAT');
const action = document.getElementById('ACTION');
const item = document.getElementById('ITEM');
const mercy = document.getElementById('MERCY');
const bip = document.getElementById("bip");
const papyrusVoice = document.getElementById("papyrusVoice");
const papyrusVoice2 = document.getElementById("papyrusVoice2");
const papyrusImage = document.getElementById("papyrusImage");
const box1 = document.getElementById("sectionBox1");

/* Variables */

let posX = 0;
let posY = 0;


/* MENU D'ÉVENEMENTS AVEC PAPYRUS */


window.onload = function () { //windows.onload = au chargement de la fenetre entière
    papyrusParagraphe.replaceChildren();

    let text0 = "Vous entendez une voix... ";
    let i = 0;
    setTimeout(()=>{
        let delai = setInterval(() => {
            if (i < text0.length) {
                papyrusParagraphe.innerHTML += text0[i++];
            }
            else clearInterval(delai);
        }, 30);
    }, 1000);

    let text1 = "Elle semble vous ordonner d'intéragir avec le menu ci-dessous...";
    setTimeout(()=>{
        i = 0;
        linebreak = document.createElement("br");
        papyrusParagraphe.appendChild(linebreak);
        let delai = setInterval(() => {
            if (i < text1.length) {
                papyrusParagraphe.innerHTML += text1[i++];
            }
            else clearInterval(delai);
        }, 30);
    }, 3000);

    papyrusParagraphe.replaceChildren();

}



combat.addEventListener('click', () => {
    bip.play(); // Joue un son au clic

    let i = 0;
    let text = "Je suis pas sûr d'avoir compris la blague..."
    papyrusParagraphe.replaceChildren();


    //Mise en place d'un délai + écriture lettre par lettre

    // La méthode setInterval() appelle de manière répétée une fonction
    // ou exécute un extrait de code, avec un délai fixe entre chaque appel.
    // Setinterval est composé de handler et timeout (+ args)
    // handler = manipulateur = peut être un boucle, condition etc...

    // La méthode setTimeout() définit une minuterie qui exécute une fonction ou
    // un morceau de code spécifique une fois que la minuterie a expiré.

    let delai = setInterval(() => {
        if (i < text.length) {

            papyrusParagraphe.innerHTML += text[i++];

            papyrusVoice.play();
            papyrusVoice.playbackRate=1.1; // Vitesse de lecture du son
            papyrusVoice2.play();
            papyrusVoice2.playbackRate=1;

        }else(clearInterval());
    }, 30);


})





let b = 0;
action.addEventListener('click', () => {
    bip.play();

    papyrusImage.replaceChildren()



    // let delai = setInterval(() => {
    //
    //     if (b < 50) {
    //         papyrusImage.style.marginLeft = [b++]+"%";
    //
    //     }else (clearInterval())
    //
    // }, 0.1);



})



item.addEventListener('click', function (){
    bip.play();
})

mercy.addEventListener('click', function (){
    bip.play();
})