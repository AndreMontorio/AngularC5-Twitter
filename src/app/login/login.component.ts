import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbActiveModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers:[NgbModal,NgbActiveModal]
})
export class LoginComponent {
    modal: NgbModalRef;
    
    closeResult: string;

    authError = false;
    dataSource: any = {};

    constructor(private modalService: NgbModal,
        public activeModal: NgbActiveModal,
        private serviceHelper: AppService,
        private router: Router
    ) { }

    open(content) {
        this.modal = this.modalService.open(content);
        this.modal.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    onSubmit() {
        
        this.authError = false;

        if (this.dataSource.Usuario === undefined) {
            alert('Digite um nome de usuário!');
            return;
        }

        if (this.dataSource.Usuario === 'twitter' && this.dataSource.Senha === '123') {
            localStorage.setItem(this.serviceHelper.AUTH_COOKIE, 'Usuário Logado!');
            this.modal.close();
            this.router.navigate(['']);
        } else {
            this.authError = true;
        }
    }
}
