import { Pipe, PipeTransform } from "@angular/core";
import { Employee } from './../emp-details/Employee';

@Pipe({
    name: "filter"
})

export class FilterPipe implements PipeTransform {
    transform(value: Employee[], args:string ) {
        return value.filter(i => i.Name.toLowerCase().includes(args.toLowerCase()));
    }
}