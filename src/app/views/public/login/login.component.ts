import { Component, AfterViewInit, OnInit } from '@angular/core';
import { DataSessionService } from '../../../services/dataSession/data-session.service';
import { SEOService } from '../../../services/seo/seo.service';
import { UtilitiesService } from '../../../services/utilities/utilities.service';
import { LoggedResponse } from '../../../classes/loggedResponse.class';
import { ServerMessage } from '../../../classes/serverMessage.class';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormControl } from '@angular/forms';
import { ApiDataService } from '../../../services/apiData/api-data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  awaitAnimation: boolean;
  recoverEmail: string;

  loginform = true;
  recoverform = false;
  validEmail: boolean = true;

  newSessionDataForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.required]),
  });

  re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(public dataSessionService: DataSessionService, private utilitiesService: UtilitiesService,
    private formBuilder: FormBuilder, private SEOService: SEOService,
    private apiDataService: ApiDataService) {
    SEOService.updateMeta(() => { });
    this.awaitAnimation = false;
    this.validEmail = true;
    this.recoverEmail = "";

    this.newSessionDataForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(8), Validators.required]),
    });
  }

  ngOnInit(): void {

    this.initForm();
    /* user types
           1 = Root admin
           2 = Organization Admin
           3 = Warehouse user
           4 = Conta
           5 = Driver
           6 = Technician
           7 = Final User
           8 = Produccion
       */
    // this.dataSessionService.logOut();
    // console.log(this.dataSessionService.user);
    this.dataSessionService.checkLogin((logedResponse: LoggedResponse) => {
      if (this.dataSessionService.user.idRole == 1) {                                              //1 = Root admin
        console.log("Root admin");
        //this.utilitiesService.showSuccessToast(response.message, "Éxito!");
        this.dataSessionService.navigateByUrl("/dashboard-admin/home");
      } else if (this.dataSessionService.user.idRole == 2) {                                              //2 = Organization Admin
        console.log("Organization Admin");
        this.dataSessionService.navigateByUrl("/dashboard-organization/home");
      } else if (this.dataSessionService.user.idRole == 3) {                                              //3 = Warehouse user
        console.log("Warehouse user ");
        this.dataSessionService.navigateByUrl("/dashboard-warehouse/home");
      } else if (this.dataSessionService.user.idRole == 4) {                                              //4 = Conta
        console.log("Conta");
        this.dataSessionService.navigateByUrl("/dashboard-counter/home");
      } else if (this.dataSessionService.user.idRole == 5) {                                              //5 = Driver
        console.log("Driver");
        this.dataSessionService.navigateByUrl("/dashboard-driver/home");
      } else if (this.dataSessionService.user.idRole == 6) {                                              //6 = Technician
        console.log("Technician");
        this.dataSessionService.logOut();
        //this.dataSessionService.navigateByUrl("/dashboard-technician/home");
      } else if (this.dataSessionService.user.idRole == 7) {                                              //7 = Final User
        console.log("Final User");
        this.utilitiesService.showInfoToast("Aun no se cuenta con este servicio");
        //this.dataSessionService.navigateByUrl("/login");
      }
      else if (this.dataSessionService.user.idRole == 8) {
        console.log("produccion");
        this.dataSessionService.navigateByUrl("/dashboard-production/home");

      } else {
        this.utilitiesService.showErrorToast("Usuario desconocido.", "Error!");
        this.dataSessionService.logOut();
      }
    }, (noLoginResponse: LoggedResponse) => {
      //console.log(noLoginResponse);
    });
  }

  get email(): AbstractControl {
    return this.newSessionDataForm?.get('email') as FormGroup | AbstractControl;
  }

  get password(): AbstractControl {
    return this.newSessionDataForm?.get('password') as FormGroup | AbstractControl;
  }

  initForm() {
    this.awaitAnimation = false;
    this.validEmail = true;
    this.recoverEmail = "";
    this.newSessionDataForm = this.formBuilder.group({
      // credenciales para cualquier usuario de IMTECH
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]],
      //email: ['@ingmulti.com', [Validators.email, Validators.required]],
      //password: ['ingmulti', [Validators.minLength(8), Validators.required]],

      // credenciales para el administrador
      // email: ['admin@ingmulti.com', [Validators.email, Validators.required]],
      // password: ['ingmulti', [Validators.minLength(8), Validators.required]],

      // credenciales para el tecnico
      // email: ['tecnico@ingmulti.com', [Validators.email, Validators.required]],
      // password: ['ingmulti', [Validators.minLength(8), Validators.required]],

      // credenciales para el almacen
      //email: ['almacen@ingmulti.com', [Validators.email, Validators.required]],
      //password: ['ingmulti', [Validators.minLength(8), Validators.required]],
    });
  }

  onFocusOutFormRecoverEmail(event: any) {
    if (!this.re.test(String(this.recoverEmail).toLowerCase())) {
      this.utilitiesService.showInfoToast("Correo invalido.");
      this.validEmail = false;
    } else {
      this.validEmail = true;
    }
  }

  loginUser() {
    this.awaitAnimation = true;

    this.dataSessionService.loginUser(this.email.value, this.password.value).then((response: ServerMessage) => {
      if (response.error == true) {
        this.utilitiesService.showWarningToast(response.message, "Error!");
      } else if (response.error == false) {
        //load user data
        this.initForm();

        this.dataSessionService.setUserData(response.data.user);
        /* user types
            1 = Root admin
            2 = Organization Admin
            3 = Warehouse user
            4 = Conta
            5 = Driver
            6 = Technician
            7 = Final User
            8 = Produccion
        */
        //console.log(this.dataSessionService.user);

        if (this.dataSessionService.user.idRole == 1) {                                              //1 = Root admin
          console.log("Root admin");
          this.utilitiesService.showSuccessToast(response.message, "Éxito!");
          this.dataSessionService.navigateByUrl("/dashboard-admin/home");
        } else if (this.dataSessionService.user.idRole == 2) {                                              //2 = Organization Admin
          console.log("Organization Admin");
          this.utilitiesService.showSuccessToast(response.message, "Éxito!");
          this.dataSessionService.navigateByUrl("/dashboard-organization/home");
        } else if (this.dataSessionService.user.idRole == 3) {                                              //3 = Warehouse user
          console.log("Warehouse user ");
          this.utilitiesService.showSuccessToast(response.message, "Éxito!");
          this.dataSessionService.navigateByUrl("/dashboard-warehouse/home");
        } else if (this.dataSessionService.user.idRole == 4) {                                              //4 = Conta
          console.log("Conta");
          this.utilitiesService.showSuccessToast(response.message, "Éxito!");
          this.dataSessionService.navigateByUrl("/dashboard-counter/home");
        } else if (this.dataSessionService.user.idRole == 5) {                                              //5 = Driver
          console.log("Driver");
          this.utilitiesService.showSuccessToast(response.message, "Éxito!");
          this.dataSessionService.navigateByUrl("/dashboard-driver/home");
        } else if (this.dataSessionService.user.idRole == 6) {                                              //6 = Technician
          console.log("Technician");
          this.utilitiesService.showSuccessToast(response.message, "Éxito!");
          this.dataSessionService.navigateByUrl("/dashboard-technician/home");
        } else if (this.dataSessionService.user.idRole == 7) {                                              //7 = Final User
          console.log("Final User");
          this.utilitiesService.showSuccessToast(response.message, "Éxito!");
          this.utilitiesService.showInfoToast("Aun no se cuenta con este servicio");
          //this.dataSessionService.navigateByUrl("/dashboard-final-user/home");
          this.dataSessionService.logOut();

        } else if (this.dataSessionService.user.idRole == 8) {
          console.log("produccion");
          this.dataSessionService.navigateByUrl("/dashboard-production/home");

        } else {
          this.utilitiesService.showErrorToast("Usuario desconocido.", "Error!");
          this.dataSessionService.logOut();
        }

        this.awaitAnimation = false;
      }
    }, (error) => {
      console.log(error);
      this.utilitiesService.showWarningToast(error.message, "Error!");
      this.awaitAnimation = false;
    });

  }

  test() {
    this.awaitAnimation = true;
    this.apiDataService.doResetPassword(this.recoverEmail).then((response: ServerMessage) => {
      if (response.error) {
        console.log(response);
        this.utilitiesService.showErrorToast(response.message, 'Error');
      } else {
        this.utilitiesService.showSuccessToast(response.message, 'Éxito');
        this.recoverEmail = "";
        this.showRecoverForm();
      }
      this.awaitAnimation = false;
    }).catch((error) => {
      console.log(error);
      this.utilitiesService.showErrorToast('Ups! Ha ucurrido un error', 'Error');
    });
  }

  showRecoverForm() {
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }
}
