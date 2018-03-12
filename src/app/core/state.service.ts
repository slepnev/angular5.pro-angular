import { Injectable, InjectionToken } from '@angular/core';

export enum MODES {
  CREATE, EDIT
}

@Injectable()
export class StateService {

  constructor(public mode: MODES, public id?: number) {
  }

}

export const SHARED_STATE = new InjectionToken('shared_state');
