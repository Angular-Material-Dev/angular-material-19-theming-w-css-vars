import { Component } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { TableComponent } from './table/table.component';

@Component({
  selector: 'app-root',
  imports: [
    NavigationComponent,
    DashboardComponent,
    AddressFormComponent,
    TableComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-material-19-theming';
}
