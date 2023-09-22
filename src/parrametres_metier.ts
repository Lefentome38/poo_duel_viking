import { Viking } from "./type_perso/vikings"
import { Bouclier } from "./équipements/bouclier"

export class Parramettre_metier{

    private _name: string
    private _sante: number 
    private _force: number
    private _vitesse: number
    private _critique: number
    private _bouclier: Bouclier
    private _arme: string
    
    constructor( name: string, sante: number, force: number,critique:number, arme: string, bouclier:Bouclier, vitesse: number){
        this._name = name
        this._sante = sante
        this._force = force
        this._vitesse = vitesse
        this._critique = critique
        this._bouclier = bouclier
        this._arme = arme
    }

    estVivant(){
        return this._sante > 0
    }  

    recupererForce(){
        return Math.floor(Math.random() * this._force + 1) 
    }

    prendDesDegats(degats: number){
        let chancecritique = Math.floor(Math.random()*101)   

        if (degats < this._bouclier.defense_get) {
            degats = 0
            console.log(`${this._name} à paré, dégat ${degats}`);
        }       
        
        else if(chancecritique <= this._critique) {
            degats *= 2
            console.log(`critique réussie: ${degats} de dégats`);
        }
        this._sante = this._sante - degats
    }

    attaque(adversaire: Viking){
        adversaire.prendDesDegats(this.recupererForce())
    }



    public get name_get():string {
        return this._name;
    }
    public set name(name_set: string) {
        this._name = name_set
    }

    public get sante_get():number {
        return this._sante;
    }
    public set sante(sante_set: number) {
        this._sante = sante_set
    }

    public get force_get():number {
        return this._force;
    }
    public set force(force_set: number) {
        this._force = force_set
    }

    public get vitesse(): number {
        return this._vitesse
    }
    public set vitesse(value: number) {
        this._vitesse = value
    }

    public get critique_get(): number {
        return this._critique
    }
    public set critique(critique_set: number) {
        this._critique = critique_set
    }

    public get bouclier_get():Bouclier {
        return this._bouclier;
    }
    public set bouclier(bouclier_set: Bouclier) {
        this._bouclier = bouclier_set
    }

    public get arme_get():string {
        return this._arme;
    }
    public set arme(arme_set: string) {
        this._arme = arme_set
    }
}