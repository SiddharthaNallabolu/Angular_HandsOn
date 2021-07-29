import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { BasicsComponent } from './basics/basics.component';
import { QuantityIncrementComponent } from './quantity-increment/quantity-increment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmpReactiveComponent } from './edit-emp-reactive/edit-emp-reactive.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { FilterPipe } from './emp-list/filter.pipe';
import { EmpInfoComponent } from './emp-info/emp-info.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpDetailsComponent,
    EditEmpComponent,
    BasicsComponent,
    QuantityIncrementComponent,
    EditEmpReactiveComponent,
    EmpListComponent,
    FilterPipe,
    EmpInfoComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: EmpDetailsComponent },
      { path: 'app-empDetails', component: EmpDetailsComponent },
      { path: 'app-edit-emp', component: EditEmpComponent, canActivate: [AuthGuard] },
      { path: 'app-basics', component: BasicsComponent },
      { path: 'app-quantity-increment', component: QuantityIncrementComponent },
      { path: 'app-edit-emp-reactive', component: EditEmpReactiveComponent, canActivate: [AuthGuard] },
      { path: 'app-emp-list', component: EmpListComponent },
      { path: 'app-emp-info/:Id', component: EmpInfoComponent, canActivate: [AuthGuard] },
      { path: 'app-login', component: LoginComponent },
      { path: 'app-user', component: UserComponent }
    ]),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
