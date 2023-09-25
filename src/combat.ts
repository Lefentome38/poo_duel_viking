import { Archer } from "./type_perso/archer";
import { Viking } from "./type_perso/vikings";
import { Chevalier } from "./type_perso/chevalier";
import { Personnage } from "./type_perso/personnage";

export class Commbat{
    private _P_1: Personnage;
    private _P_2: Personnage;

    private _combattant: []

    constructor(p1: Personnage, p2:Personnage ) {
        this._P_1 = p1
        this._P_2 = p2
        this._combattant = []
    }

    public lancer_combat() {
        console.log(`le combat va commencer: nos deux combattans sont '${this._P_1.name}' et '${this._P_2.name}'`);
    }

    public simulation_combat() {
        console.log("debut de la simulation");
        
        let attaquant = this._P_1
        let defenseur = this._P_2
        
        while (attaquant.estVivant() && defenseur.estVivant()) {
            const forcePourCeTour = attaquant.recupererForce()
            console.log(`${attaquant.name_get} attaque, sa force est de ${forcePourCeTour}`);
            defenseur.prendDesDegats(forcePourCeTour) 
            console.log(`${defenseur.name_get} à ${defenseur.sante_get}hp restant`);
            console.log()

            const intermediaire = attaquant
            attaquant = defenseur
            defenseur = intermediaire
       }
    }

    public getGagnan() {
        if (this._P_1.sante_get > this._P_2.sante_get) {
            console.log("le vainqueur est",this._P_1.name_get);
        }
        else{
            console.log("le vainqueur est",this._P_2.name_get);
        }
    }
}