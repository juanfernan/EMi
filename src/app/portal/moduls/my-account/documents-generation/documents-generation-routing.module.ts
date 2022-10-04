import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HaveBeLoggedInGuard } from 'src/app/core/guard/have-be-logged-in.guard';
import { DocumentsGenerationPage } from './documents-generation.page';
import { RedSiemPage } from './components/red-siem/red-siem.page';

const routes: Routes = [
  {
    path: '',
    component: DocumentsGenerationPage,
    canActivate: [HaveBeLoggedInGuard]
  },
  // {
  //   path: 'red-siem/:this.certificates/:valueCertificateCode/:this.certificateUserInfo.Document/:this.certificateUserInfo.DocumentType/:this.certificateUserInfo.RequestGroup/:this.certificateUserInfo.GroupCode/:this.certificateUserInfo.Name',
  //   canActivate: [HaveBeLoggedInGuard],
  //   component: RedSiemPage,
  //   pathMatch: 'full'
  // },
  {
    path: 'red-siem',
    canActivate: [HaveBeLoggedInGuard],
    component: RedSiemPage,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentsGenerationRoutingModule { }
