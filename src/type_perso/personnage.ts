import { Parramettre_metier } from "../parrametres_metier"
import { bouclierV1, bouclierV2 } from "../équipements/bouclier"
import { EpeeV1 } from "../équipements/epee"
import { Equipement } from "../équipements/equipements"
import { Chevalier, Chevalier1 } from "./chevalier"
import { Viking, Viking1, Viking2 } from "./vikings"

export class Personnage {
    private _nom: string = ""
    private job: Parramettre_metier
    private _sante_base: number = 20
    private _force_base: number = 5
    private _critique_base: number = 2
    private _intel_base: number = 2
    private _mana_base: number = 2
    private _vitesse_base: number = 2

    private _type_equipement: Equipement

    constructor(job: Parramettre_metier, type_equipement: Equipement) {
        this.job = job
        this._sante_base = 20 + this.job.sante_bonus
        this._force_base = 5 + this.job.force_bonus
        this._critique_base = 2 + this.job.critique_bonus
        this._intel_base = 2 + this.job.intelligence_bonus
        this._mana_base = 2 + this.job.mana_bonus
        this._vitesse_base = 2 + this.job.vitesse_bonus

        this._type_equipement = type_equipement
    }

    info_viking() {
        console.log(`${this.job.name_bonus} ${this._sante_base}hp, équipement de type ${this._type_equipement.type} '${this._type_equipement.name_equipement}' de résistence ${this._type_equipement.defense_equipement}, chance critique "+${this._critique_base}%"`);
    }
    info_chavalier() {
        console.log(`${this.job.name_bonus} ${this._sante_base}hp, équipement de type ${this._type_equipement.type} '${this._type_equipement.name_equipement}' de force ${this._type_equipement.force_equipement}, chance critique "+${this._critique_base}%"`);
    }
    info_archer() {
        console.log(`${this.job.name_bonus} ${this._sante_base}hp, équipement de type ${this._type_equipement.type} '${this._type_equipement.name_equipement}' de force ${this._type_equipement.force_equipement}, chance critique "+${this._critique_base}%"`);
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
    public set sante_base(value: number) {
        this._sante_base = value
    }
}
export const combatant1 = new Personnage(Viking1, bouclierV1)
export const combatant2 = new Personnage(Viking2, bouclierV2)
export const combatant3 = new Personnage(Chevalier1, EpeeV1)