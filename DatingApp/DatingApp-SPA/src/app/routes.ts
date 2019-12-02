import { Routes } from '@angular/router';

// Guards
import { AuthGuard } from './_guards/auth.guard';
import { PreventUnsavedChangesGuard } from './_guards/prevent-unsaved-changes.guard';

// Resolvers
import { MemberDetailResolver } from './_resolvers/member-detail.resolver';
import { MemberListResolver } from './_resolvers/member-list.resolver';
import { MemberEditResolver } from './_resolvers/member-edit.resolver';

// Components
import { MemberListComponent } from './members/member-list/member-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { ListsResolver } from './_resolvers/lists.resolver';


export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'members', component: MemberListComponent,
        resolve: { users: MemberListResolver }
      },
      {
        path: 'members/:id', component: MemberDetailComponent,
        resolve: { user: MemberDetailResolver }
      },
      {
        path: 'member/edit', component: MemberEditComponent,
        resolve: { user: MemberEditResolver }, canDeactivate: [PreventUnsavedChangesGuard]
      },
      { path: 'lists', component: ListsComponent, resolve: {users: ListsResolver} },
      { path: 'messages', component: MessagesComponent }
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
