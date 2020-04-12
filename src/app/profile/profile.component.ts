import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { getUserInfo, getUpdateInfo } from '../root-state/user/user.selectors';
import { loadBooks, declineBook, loadSitters } from '../root-state/sitter/sitter.actions';
import { getBooksByCustomerId } from '../root-state/sitter/sitter.selectors';
import { getActiveId } from '../root-state/user/user.selectors';
import { Book } from '../root-state/sitter/sitter.interfaces';
import { Router } from '@angular/router';
import { UpdateInfo } from '../root-state/user/user.interfaces';

@Component({
  selector: 'grape-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  updateInfo: UpdateInfo = {
    animals: null,
    photo: null,
    years: null,
    address: null
  };
  user: any;
  responses: Book[] = [];
  activeId: string;
  constructor(private _store: Store, private _router: Router) { }

  ngOnInit(): void {
    this._store.dispatch(loadSitters());
    this._store.pipe(
      select(getActiveId)
    ).subscribe(res => this.activeId = res);
    this._store.pipe(
      select(getUserInfo)
    ).subscribe(res => this.user = res);
    this._store.dispatch(loadBooks());
    setTimeout(() => {
      this._store.pipe(
        select(getBooksByCustomerId(this.activeId))
      ).subscribe(res => this.responses = res);
    }, 1000);
    this._store.pipe(
      select(getUpdateInfo)
    ).subscribe(res => {
      if(res) {
        this.updateInfo = res
      }
    })
  }

  onDecline(id: string): void {
    this._store.dispatch(declineBook(id));
    setTimeout(() => {
      this._store.dispatch(loadBooks());
      this._store.pipe(
        select(getBooksByCustomerId(this.activeId))
      ).subscribe(res => this.responses = res);
    }, 1000)
  }

  switchToUpdate(): void {
    this._router.navigateByUrl('profile-update')
  }
}
