import { count } from "console";
import { Viking } from "./vikings";
import { Bouclier } from "./bouclier";

export class Commbat{
    private _viking_1: Viking
    private _viking_2: Viking

    constructor(viking_1:Viking, viking_2:Viking) { 
        this._viking_1 = viking_1
        this._viking_2 = viking_2
    }

    public lancer_combat(): void {
        console.log(`le combat va commencer: nos deux vikings sont '${this._viking_1.name}' et '${this._viking_2.name}'`);
    }

    public simulation_combat() {
        console.log("debut de la simulation");

        let attaquant = this._viking_1
        let defenseur = this._viking_2
        
        while (this._viking_1.estVivant() && this._viking_2.estVivant()) {
            const forcePourCeTour = attaquant.recupererForce()
            console.log(`${attaquant.name} attaque, sa force est de ${forcePourCeTour}`);
            defenseur.prendDesDegats(forcePourCeTour)
            console.log(`${defenseur.name} à ${defenseur.sante}hp restant`);
            console.log()

            const intermediaire = attaquant
            attaquant = defenseur
            defenseur = intermediaire
       }
    }


    public getGagnan() {
        if (this._viking_1.sante > this._viking_2.sante) {
            console.log("le vainqueur est",this._viking_1.name);
        }
        else{
            console.log("le vainqueur est",this._viking_2.name);
        }
    }
    
} 
