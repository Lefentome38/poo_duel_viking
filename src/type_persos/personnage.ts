import { Parramettre_metier } from "../parrametres_metier"
// import { arcV1 } from "../équipements/arc"
// import { Bouclier,bouclierV1, bouclierV2 } from "../équipements/bouclier"
import { EpeeV1, EpeeV2 } from "../objets/equipables/armes/epee"
import { bouclierV1, bouclierV2 } from "../objets/equipables/armures/bouclier"
// import { Equipement } from "../équipements/equipements"
import { Equipable } from "../objets/equipables/equipables"
import { Arme } from "../objets/equipables/armes/arme"
// import { Archer1 } from "./archer"
import { Chevalier1 } from "./chevalier"
import { Viking1, Viking2 } from "./vikings"
import { Armure } from "../objets/equipables/armures/armure"
import { HacheV1 } from "../objets/equipables/armes/hache"
import { Bouclier } from "../objets/equipables/armures/bouclier"

export class Personnage {
    private _nom: string = ""
    private job: Parramettre_metier
    private _sante_base: number = 10 //50
    private _force_base: number = 5 //10
    private _critique_base: number = 2 //2
    private _intel_base: number = 2 //10
    private _mana_base: number = 10 //50
    private _vitesse_base: number = 2 //10

    private _equipableArme: Arme
    private _equipableArmure: Armure


    constructor(job:Parramettre_metier, equipableArme:Arme, equipementArmure:Armure) {
        this.job = job
        this._sante_base = this._sante_base + this.job.sante_bonus
        this._force_base = this.force_cumuler + this.job.force_bonus
        this._critique_base = this.critique_cumuler + this.job.critique_bonus
        this._intel_base = this.intel_cumuler + this.job.intelligence_bonus
        this._mana_base = this.mana_cumuler + this.job.mana_bonus
        this._vitesse_base = this.vitesse_cumuler + this.job.vitesse_bonus

        this._equipableArme = equipableArme
        this._equipableArmure = equipementArmure
    }

    info_viking() {
        console.log(`${this.job.name_bonus} ${this.sante_cumuler}hp, équipement de type ${this._equipableArmure.typeEquitable} '${this._equipableArmure.name_armure}' de résistence ${this._equipableArmure.defence_armure}, chance critique "+${this._critique_base}%" force d'attaque ${this.force_cumuler}`);
    }
    info_chavalier() {
        console.log(`${this.job.name_bonus} ${this.sante_cumuler}hp, équipement de type ${this._equipableArme.typeEquitable} '${this._equipableArme.name_arme}' de force ${this._equipableArme.force_arme}, chance critique "+${this._critique_base}%" force d'attaque ${this.force_cumuler}`);
    }
    // info_archer() {
    //     console.log(`${this.job.name_bonus} ${this.sante_cumuler}hp, équipement de type ${this._type_equipement.type} '${this._type_equipement.name_equipement}' de force ${this._type_equipement.force_equipement}, chance critique "+${this._critique_base}%" force d'attaque ${this.force_cumuler}`);
    // }

    estVivant(){
        return this.sante_cumuler > 0
    }

    recupererForce(){
        return Math.floor(Math.random() * this.force_cumuler + 1) 
    }

    prendDesDegats(degats: number){
        let chancecritique = Math.floor(Math.random()*101)
        let degat_pris = 0
                
        if(degats < this._equipableArmure.defence_armure){
            if(this.hasBouclier()){
                degat_pris = this.getBouclier().degatspare(degats)
            }
        }

        else if(chancecritique <= (10 + this.critique_cumuler)) {
            degat_pris = degats *= 2
            console.log(`critique réussie: ${degats} de dégats`);
        }
        
        else{
            degat_pris = degats
        }

        this.sante_cumuler = this.sante_cumuler - degat_pris
    }

    attaque(adversaire: Personnage){
        adversaire.prendDesDegats(this.recupererForce())
    }

    hasBouclier(){
        return this._equipableArmure.typeEquitable === "Bouclier"
    } 
    getBouclier(){
        return this._equipableArmure as Bouclier
    }


 /* 
////////////////////////////////////////////////////////////////////////////////////////////////
  ____      _   _                                  _            _   _                
 / ___| ___| |_| |_ ___ _ __ ___    __ _ _ __   __| |  ___  ___| |_| |_ ___ _ __ ___ 
| |  _ / _ \ __| __/ _ \ '__/ __|  / _` | '_ \ / _` | / __|/ _ \ __| __/ _ \ '__/ __|
| |_| |  __/ |_| ||  __/ |  \__ \ | (_| | | | | (_| | \__ \  __/ |_| ||  __/ |  \__ \
 \____|\___|\__|\__\___|_|  |___/  \__,_|_| |_|\__,_| |___/\___|\__|\__\___|_|  |___/*/
////////////////////////////////////////////////////////////////////////////////////////////////

    public get jobP(): Parramettre_metier {
        return this.job
    }
    public set jobP(value: Parramettre_metier) {
        this.job = value
    }

    public get nom_cumuler(): string {
        return this.job.name_bonus
    }
    public set nom(value: string) {
        this._nom = value
    }

    public get sante_cumuler(): number {
        return this._sante_base
    }
    public set sante_cumuler(value: number) {
        this._sante_base = value
    }

    public get force_cumuler(): number {
        return this._force_base
    }
    public set force_cumuler(value: number) {
        this._force_base = value
    }

    public get critique_cumuler(): number {
        return this._critique_base
    }
    public set critique_cumuler(value: number) {
        this._critique_base = value
    }

    public get intel_cumuler(): number {
        return this._intel_base
    }
    public set intel_cumuler(value: number) {
        this._intel_base = value
    }

    public get mana_cumuler(): number {
        return this._mana_base
    }
    public set mana_cumuler(value: number) {
        this._mana_base = value
    }

    public get vitesse_cumuler(): number {
        return this._vitesse_base
    }
    public set vitesse_cumuler(value: number) {
        this._vitesse_base = value
    }
}
export const combatant1_viking1 = new Personnage(Viking1, EpeeV1, bouclierV1) // perso | arme | armure
export const combatant2_viking2 = new Personnage(Viking2, HacheV1,bouclierV2)
export const combatant3_chevalier1 = new Personnage(Chevalier1, EpeeV1,bouclierV1)
export const combatant4_archer1 = new Personnage(Chevalier1,EpeeV1,bouclierV1)