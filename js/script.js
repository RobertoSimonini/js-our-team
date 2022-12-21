
/*
   # CONSEGNA
     Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.

    Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
    #MILESTONE 0:
    Creare l’array di oggetti con le informazioni fornite.
    #MILESTONE 1:
    Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
    #MILESTONE 3:
    Stampare le stesse informazioni su DOM sottoforma di stringhe

*/

// Prendo l'elemento dal DOM
const target = document.getElementById('target');

const teamMembers = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        picture : 'immagine',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        picture : 'immagine',
    },
    {
        name: 'Walter Gordon',
        role: 'Office manager',
        picture : 'immagine',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        picture : 'immagine',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        picture : 'immagine',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic designer',
        picture : 'immagine',
    }
];


for (let i = 0; i < teamMembers.length; i++) {
    let teamMember = teamMembers[i];
    // Loggo le proprietà in pagina ma senza style
    const teamMemberElement = document.createElement('div');
    teamMemberElement.innerText = `${teamMember.name}  ${teamMember.role} ${teamMember.picture}`;
    target.appendChild(teamMemberElement);
    
}


