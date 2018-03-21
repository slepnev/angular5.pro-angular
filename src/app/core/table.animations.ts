import { animate, style, transition, trigger } from '@angular/animations';

export const HighlightTrigger = trigger(
  'slideUp',
  [
    transition(
      ':enter', [
        style({transform: 'translate(0, -25%)', opacity: 1}),
        animate('300ms', style({transform: 'translate(0, 0)', 'opacity': 1}))
      ]
    ),
    transition(
      ':leave', [
        style({transform: 'translate(0, 0)', 'opacity': 1}),
        animate('300ms', style({transform: 'translate(0, -25%)', 'opacity': 0}))
      ]
    )]
);

