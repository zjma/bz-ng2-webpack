import {
  addProviders,
  inject
} from '@angular/core/testing';

// Load the implementations that should be tested
import {About} from './about.component';

describe('About', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEach(() => {
    addProviders([
      About
    ])
  });

  it('should log ngOnInit', inject([About], (about) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

    about.ngOnInit();
    expect(console.log).toHaveBeenCalled();
  }));

});
