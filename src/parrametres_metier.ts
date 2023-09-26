import { Bouclier } from "./équipements/bouclier"
import { Equipement } from "./équipements/equipements"
// class mère
export class Parramettre_metier{


    private _name: string = ""
    private _sante: number = 0
    private _force: number = 0
    private _critique: number = 0
    private _intelligence: number = 0
    private _mana: number = 0
    private _vitesse: number = 0

    private _equipement: Equipement

    constructor(name:string,sante:number,force:number,critique:number,intelligence:number,mana:number,vitesse:number,equipement:Equipement){
        this._name = name
        this._sante = sante
        this._force = force
        this._critique = critique
        this. _intelligence = intelligence
        this. _mana = mana
        this._vitesse = vitesse

        this._equipement = equipement
    }

    estVivant(){
        return this._sante > 0
    }  

    recupererForce(){
        return Math.floor(Math.random() * this._force + 1) 
    }

    prendDesDegats(degats: number){
        let chancecritique = Math.floor(Math.random()*101)
        let degat_pris = 0
        
        if(degats < this._equipement.defense){
            if(this.hasBouclier()){
                degat_pris = this.getBouclier().degatspare(degats)
            }
        }

        else if(chancecritique <= (10 + this._critique)) {
            degats *= 2
            console.log(`critique réussie: ${degats} de dégats`);
        }
        
        else{
            degat_pris = degats
        }

        this._sante = this._sante - degat_pris
    }




    attaque(adversaire: Parramettre_metier){
        adversaire.prendDesDegats(this.recupererForce())
    }

    hasBouclier(){
        return this._equipement.type === "Bouclier"
    } 
    getBouclier(){
        return this._equipement as Bouclier
    }
    


 /* 
////////////////////////////////////////////////////////////////////////////////////////////////
  ____      _   _                                  _            _   _                
 / ___| ___| |_| |_ ___ _ __ ___    __ _ _ __   __| |  ___  ___| |_| |_ ___ _ __ ___ 
| |  _ / _ \ __| __/ _ \ '__/ __|  / _` | '_ \ / _` | / __|/ _ \ __| __/ _ \ '__/ __|
| |_| |  __/ |_| ||  __/ |  \__ \ | (_| | | | | (_| | \__ \  __/ |_| ||  __/ |  \__ \
 \____|\___|\__|\__\___|_|  |___/  \__,_|_| |_|\__,_| |___/\___|\__|\__\___|_|  |___/*/
////////////////////////////////////////////////////////////////////////////////////////////////


    public get name_bonus():string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value
    }

    public get sante_bonus():number {
        return this._sante;
    }
    public set sante(value: number) {
        this._sante = value
    }

    public get force_bonus():number {
        return this._force;
    }
    public set force(value: number) {
        this._force = value
    }

    public get vitesse_bonus(): number {
        return this._vitesse
    }
    public set vitesse(value: number) {
        this._vitesse = value
    }

    public get intelligence_bonus(): number {
        return this._intelligence
    }
    public set intelligence(value: number) {
        this._intelligence = value
    }

    public get mana_bonus(): number {
        return this._mana
    }
    public set mana(value: number) {
        this._mana = value
    }

    public get critique_bonus(): number {
        return this._critique
    }
    public set critique(value: number) {
        this._critique = value
    }

    public get bouclier_bonus():Equipement {
        return this._equipement;
    }
    public set bouclier(value: Bouclier) {
        this.bouclier = value
    }

    public get arme_bonus():string {
        return this.arme;
    }
    public set arme(value: string) {
        this.arme = value
    }
    
    public get equipement_bonus(): Equipement {
        return this._equipement
    }
    public set equipement_bonus(value: Equipement) {
        this._equipement = value
    }
}