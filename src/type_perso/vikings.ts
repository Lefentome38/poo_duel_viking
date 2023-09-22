import { Parramettre_metier } from "../parrametres_metier"
import { Bouclier } from "../équipements/bouclier"

export class Viking extends Parramettre_metier {

    constructor( name: string, arme: string, bouclier:Bouclier){
        let sante : number = 25
        let force : number = 4
        let vitesse : number = 2
        let critique = 8

        super(name, sante, force, vitesse, critique, arme, bouclier)
    }

    info_viking(){
        console.log(`${this.name_get} ${this.sante_get}hp, arme '${this.arme_get}' bouclier '${this.bouclier_get.b_name_get}' de résistence ${this.bouclier_get.defense_get} "${this.critique_get}"`);
    }
}