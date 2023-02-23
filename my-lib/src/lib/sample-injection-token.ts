import { EnvironmentProviders, InjectionToken, NgModule } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export const SampleInjectionToken = new InjectionToken<BehaviorSubject<string>>(
  'SAMPLE_INJECTION_TOKEN'
);

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
})
export class SampleModule {
  static forRoot() {
    return {
      ngModule: SampleModule,
      providers: [
        {
          provide: SampleInjectionToken,
          useValue: new BehaviorSubject('First Value'),
        },
      ],
    };
  }
}
