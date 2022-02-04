export type User = {
    name : string,
    age: number,
    occupation: string,
    compentences ?: string[],
    adresse ?: { rue : string, cp: number, ville: string}
};
export const users: User[] = [
    {
    name: 'Alain',
    age: 25,
    occupation: 'Boulanger',
    compentences : ["js", "node"]
    },
    {
        name: 'Béatrice',
        age: 23,
        occupation: 'Astronaute',
        adresse : {
        rue : "75 rue de Paris",
        cp : 75000,
        ville : "Paris"
        }
    }
];
export function logPerson(user: User) {
 console.log(` - ${user.name}, ${user.age}`);
}

//Exercie 2 

interface Administrateur {
    nom : string,
    email : string ,
    ip : string ,
    dt_connexion : Date ,
    login : string,
    password : string
}

type UtilisateurAnonyme1 = Pick<Administrateur, "nom" | "ip">;
   