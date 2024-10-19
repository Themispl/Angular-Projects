import { Routes } from '@angular/router';
import { InputExampleComponent } from './components/input-example/input-example.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { EventBindExapleComponent } from './components/event-bind-exaple/event-bind-exaple.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SimpleDatatableComponent } from './components/simple-datatable/simple-datatable.component';
import { ComponentOutputExampleComponent } from './components/component-output-example/component-output-example.component';


export const routes: Routes = [
    {path: 'component-input-example', component: InputExampleComponent},
    {path: 'for-directive-example', component: ForDirectiveExampleComponent},
    {path: 'event-bind-example', component: EventBindExapleComponent},
    {path:'welcome', component: WelcomeComponent},
    {path: '', redirectTo: '/welcome', pathMatch: 'full'},
    {path: 'simple-data-table', component: SimpleDatatableComponent},
    {path:'component-output-example', component:ComponentOutputExampleComponent}

];
