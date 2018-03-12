import { Pipe, PipeTransform } from '@angular/core';
import { MODES, StateService } from './state.service';
import { RepositoryService } from '../model/repository.service';

@Pipe({
  name: 'state'
})
export class StatePipe implements PipeTransform {

  constructor(private repository: RepositoryService) { }

  transform(value: any): string {
    if (value instanceof StateService) {
      const state = value as StateService;
      return MODES[state.mode] + (state.id !== undefined
          ? ` ${this.repository.getProduct(state.id).name}` : '');
    } else {
      return '<No Data>';
    }
  }

}
