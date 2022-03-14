import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'court-case',
        data: { pageTitle: 'eCourtApp.courtCase.home.title' },
        loadChildren: () => import('./court-case/court-case.module').then(m => m.CourtCaseModule),
      },
      {
        path: 'hearing',
        data: { pageTitle: 'eCourtApp.hearing.home.title' },
        loadChildren: () => import('./hearing/hearing.module').then(m => m.HearingModule),
      },
      {
        path: 'user-data',
        data: { pageTitle: 'eCourtApp.userData.home.title' },
        loadChildren: () => import('./user-data/user-data.module').then(m => m.UserDataModule),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
