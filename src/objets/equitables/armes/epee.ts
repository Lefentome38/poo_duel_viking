import { Equitable } from "../equitables"

class Epee extends Equitable{
    constructor(name:string, force:number){
        let critique = 0
        let defense = 0
        super(name,'Epee', critique,force,defense)
    }    
}

export const EpeeV1 = new Epee("Epée de lumière",5)

