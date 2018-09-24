import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'wallet',
    templateUrl: '/o/angular-npm-portlet/lib/app/wallet/wallet.component.html',
    styleUrls: ['/o/angular-npm-portlet/lib/app/wallet/wallet.component.css']
})

export class WalletComponent {
    model: any = {};
    loading = false;

    constructor(
        private router: Router){}

    submit(theForm: NgForm) {
        alert(`Hello ${theForm.value.name}!`);
    }


    register() {
       return null;
    }
}