import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AuthGuard } from './guards/auth-guard.guard';
import { QuestionsPageComponent } from './questions-page/questions-page.component';
import { LoginComponent } from './widgets/login/login.component';
import { QuestionComponent } from './widgets/question/question.component';

const routes: Routes = [
    {
        path: "", component: LoginComponent
    },
    {
        path: "login", component: LoginComponent,
    },
    {
        path: "questions", component: QuestionsPageComponent, canActivate: [AuthGuard]
    },
    {
        path: "**", component: LoginComponent
    }
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }