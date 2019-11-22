import { PipeTransform, Pipe } from '@angular/core';
import { Hero } from './hero.model'

@Pipe({
    name: 'herosFilter'
})
export class HerosFilterPipe implements PipeTransform {
    transform(heros: Hero[], searchTerm) {
        if (!heros || !searchTerm) {
            return heros;
        }
        return heros.filter(hero =>
            hero.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 || hero.powers.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1)
    }
}