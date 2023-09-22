import { Archer } from "./type_perso/archer";
import { Viking } from "./type_perso/vikings";
import { Parramettre_metier } from "./parrametres_metier";
import { Bouclier } from "./équipements/bouclier";

export class Commbat{
    private _viking_1: Viking;
    private _viking_2: Viking;
    private _archer_1: Archer;



    constructor(viking_1:Viking, viking_2:Viking, archer_2: Archer) { 
        this._viking_1 = viking_1
        this._viking_2 = viking_2
        this._archer_1 = archer_2
    }

    public lancer_combat(): void {
        console.log(`le combat va commencer: nos deux vikings sont '${this._viking_1.name_get}' et '${this._viking_2.name_get}'`);
    }

    public simulation_combat() {
        console.log("debut de la simulation");

        let attaquant = this._viking_1
        let defenseur = this._viking_2
        
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
        if (this._viking_1.sante_get > this._viking_2.sante_get) {
            console.log("le vainqueur est",this._viking_1.name_get);
        }
        else{
            console.log("le vainqueur est",this._viking_2.name_get);
        }
    }



    public get viking_2_get(): Viking {
        return this._viking_2;
    }
    public set viking_2(viking_2_set: Viking) {
        this._viking_2 = viking_2_set;
    }

    public get viking_1_get(): Viking {
        return this._viking_1;
    }
    public set viking_1(viking_1_set: Viking) {
        this._viking_1 = viking_1_set;
    }
} 
