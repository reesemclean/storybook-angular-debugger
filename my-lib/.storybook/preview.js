import { moduleMetadata } from '@storybook/angular';
import { APP_INITIALIZER } from '@angular/core';

import {
  SampleInjectionToken,
  SampleModule,
} from '../src/lib/sample-injection-token';

export const decorators = [
  moduleMetadata({
    imports: [SampleModule.forRoot()],
    providers: [
      {
        provide: APP_INITIALIZER,
        useFactory: (service) => () => {
          console.log('HERE');
          service.next('Second Value');
        },
        deps: [SampleInjectionToken],
        multi: true,
      },
    ],
  }),
];
