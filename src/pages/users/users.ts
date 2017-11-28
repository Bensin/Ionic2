import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { User } from '../../models/user';

import {  GithubUsersProvider } from '../../providers/github-users/github-users';
import { UserDetailsPage } from '../user-details/user-details';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  users: User[]

  constructor(public navCtrl: NavController, private githubUsers: GithubUsersProvider) {
    githubUsers.load().subscribe(users => {
      this.users = users;
    })
  }


   goToDetails(login:string){
     this.navCtrl.push(UserDetailsPage,{login});
   }

}
