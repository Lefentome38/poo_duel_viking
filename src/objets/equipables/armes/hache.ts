import { Arme } from "./arme"

class Hache extends Arme{
    constructor(name:string, force:number){
        let critique = 0
        let prix = 0
        let poid = 0
        let niveau = 0
        super(name,critique,force,prix,poid,niveau,"Hache")
    }    
}

export const HacheV1 = new Hache("hache d'odin",7)
