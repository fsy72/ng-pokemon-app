import { ElementRef } from '@angular/core';
import { BorderCardDirective } from './border-card.directive';

describe('BorderCardDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(document.createElement('div'));
    const directive = new BorderCardDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});
