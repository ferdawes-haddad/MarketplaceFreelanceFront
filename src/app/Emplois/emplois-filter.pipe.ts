import { Pipe, PipeTransform } from "@angular/core";
import { Emplois } from "../Model/Emplois";

@Pipe({
    name: 'emploisFilter'
})
export class EmploisFilterPipe implements PipeTransform {
    transform(emplois: Emplois[], searchTerm: string): Emplois[] {
        if (!emplois || !searchTerm) {
            return emplois;
        }
        return emplois.filter(emplois =>
            emplois.titre.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
    }
}