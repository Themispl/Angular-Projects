import { EPerson, ManyPerson } from './../../shared/interfaces/person';
import { Component, EventEmitter, Output } from '@angular/core';
import{sortBy} from 'lodash-es';

@Component({
  selector: 'app-simple-datatable',
  standalone: true,
  imports: [],
  templateUrl: './simple-datatable.component.html',
  styleUrl: './simple-datatable.component.css'
})
export class SimpleDatatableComponent {
  @Output() personClicked = new EventEmitter<EPerson>();
  manyPerson = ManyPerson 


sortOrder: EPerson = {
  givenName :'none',
  surName :'none',
  age :'none',
  email :'none',
  address:'none'

}

sortData(sortKey: keyof EPerson):void{
  if(this.sortOrder[sortKey]==='asc'){
    this.sortOrder[sortKey]='desc'
    this.manyPerson= sortBy(this.manyPerson,sortKey).reverse()
  }else{
    this.sortOrder[sortKey]==='asc'
    console.log(sortKey);
    this.manyPerson = sortBy(this.manyPerson,sortKey)
  }

  for(let key in this.sortOrder){
    if(key != sortKey){
      this.sortOrder
    }
  }
}
  // sortSign(sortKey: keyof EPerson) {
    //     if (this.sortOrder[sortKey] === 'asc')
    //         return '↑'
    //     else if (this.sortOrder[sortKey]==='desc')
    //         return '↓'
    //     else return ''
    // }

    sortSign(sortKey: keyof EPerson): string {
      if (this.sortOrder[sortKey] ==='asc')
          return '&uarr;'
      else if (this.sortOrder[sortKey] === 'desc')
          return '&darr;'
      else return ''
  }

  onPersonClick(person: EPerson){
      console.log(person);
      this.personClicked.emit(person)
  }
}