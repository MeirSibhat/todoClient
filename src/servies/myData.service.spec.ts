/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyDataService } from './myData.service';

describe('Service: MyData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyDataService]
    });
  });

  it('should ...', inject([MyDataService], (service: MyDataService) => {
    expect(service).toBeTruthy();
  }));
});
