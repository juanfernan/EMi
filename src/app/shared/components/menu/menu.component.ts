import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { SidenavItem } from '../../models/side-nav-item';
import { MenuItemsServices } from '../../services/menu-items-service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { $ } from 'protractor';
import { AvailableResult, BiometryType, NativeBiometric } from 'capacitor-native-biometric-auth';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  items: SidenavItem[];
  version: string;
  isLoading: boolean
  logo: string;
  dataUser: any;
  selectedPath: string;
  environment: any;
  country: string;
  fingerprintIsAvalaible:boolean;

  constructor(
    private menuItemsServices: MenuItemsServices,
    private menu: MenuController,
    private router: Router
  ) {
    this.environment = environment;
    this.country = environment.country;
    this.logo = `${environment.imagesRoute}LogoFalck.svg`;
    
    this.dataUser = {
      Email: localStorage.getItem("userName"),
      FullName: `${localStorage.getItem('NameOne') ?? ''} ${localStorage.getItem('NameTwo') ?? ''} ${localStorage.getItem('LastNameOne') ?? ''} ${localStorage.getItem('LastNameTwo') ?? ''}`
    }
    this.isAvailable()
  }

  ngOnInit(): void {
   //this.isAvailable()
  }

  isAvailable(){

    console.log("menu")
    NativeBiometric.isAvailable().then(
      (result: AvailableResult) => {
        const isAvailable = result.isAvailable;
        const isFingerPrint = result.biometryType == BiometryType.FINGERPRINT;
        console.log("isAvailable", isAvailable)
        const isTouchId = result.biometryType == BiometryType.TOUCH_ID;
        console.log("isTouchId", isTouchId)
        if (isAvailable) {
          this.isLoading = true;
          this.menuItemsServices.getListAssociatedMenus().subscribe(
            resp => {
              console.log("menu line57")
              this.addCloseItem(resp.Menus);
              this.addFingerItem(resp.Menus);
              this.getVersionSoftware();
              this.isLoading = false;
            }
          )
        } else {console.log("menu line64"),this.getIcons()}
      },
      (error) => { this.getIcons()
      // Couldn't check availability
    } 
    );
  }

  getIcons() {
    this.isLoading = true;
    this.menuItemsServices.getListAssociatedMenus().subscribe(
      resp => {
        this.addCloseItem(resp.Menus);
        this.getVersionSoftware();
        this.isLoading = false;

      }
    )
  }

  getVersionSoftware() {
    this.menuItemsServices.GetSoftwareVersion().subscribe(resp => {
      this.version = resp.Value;
    })
  }

  addCloseItem(menu: SidenavItem[]) {
    let close =
    {
      IcoWeb: "fa fa-sign-out",
      Id: 500,
      ImageApp: "close.png",
      MenuChilds: [],
      MenuName: "Cerrar Sesión",
      MenuUrl: "/logout",
      Order: 1,
      Parent_MenuID: "*",
      ResourceApp: 0,
      Open: false
    }
    menu.push(close);
    this.items = menu;
  }

  addFingerItem(menu: SidenavItem[]) {
    console.log("addFingerItem")
    let finger =
    {
      IcoWeb: "fa fa-sign-out",
      Id: 144,
      ImageApp: "close.png",
      MenuChilds: [],
      MenuName: "Huella Dactilar",
      MenuUrl: "/my-account/fingerprint",
      Order: 8,
      Parent_MenuID: '136',
      ResourceApp: 10,
      Open: false
    }

    //menu.push(finger);
    this.items = menu;
    this.items[1].MenuChilds.push(finger)
  }

  navigate(url) {
    const redirecTo = (u) => this.router.navigate([u]);

    switch (url) {
      case '/admin/home':
        //redirecTo('onboarding');
        this.router.navigate(['/portal/home']);
        break;
      case "/requestservice":
        this.router.navigate(['/portal/service-solicitud']);
        break;
      case "/my-account/my-beneficiaries":
        this.router.navigate(['portal/my-account/my-afiliates']);
        break;
      case "/my-account/my-plans-and-products":
        this.router.navigate(['/portal/my-account/my-plans']);
        break;
      case "/my-account/my-factures":
        this.router.navigate(['portal/my-account/my-invoices']);
        break;
      case "/myhealth/scheduledservices":
        this.router.navigate(['/portal/myhealth/scheduledservices']);
        break;
      case "/expired-medical-services":
        this.router.navigate(['/portal/myhealth/expired-medical-services']);
        break;
      case '/admin/clinics':
        this.router.navigate(['portal/medical-centers/map-clinics-nearby']);
        break;
      case '/my-account/account-setup-options':
        this.router.navigate(['/portal/my-account/account-configuration']);
        break;
      case '/my-account/my-family/show':
        this.router.navigate(['portal/my-account/my-afiliates/new-afiliate']);
        break;
      case '/myhealth/servicehistory':
        this.router.navigate(['/portal/myhealth/service-history']);
        break;
      case '/customerservice/faqs':
        this.router.navigate(['/portal/customer-service/faqs']);
        break;
      case '/customerservice/optionseventtypes':
        this.router.navigate(['/portal/customer-service/optionseventtypes']);
        break;
      case '/customerservice/terms':
        this.router.navigate(['/portal/customer-service/terms']);
        break;
      case '/customerservice/policies':
        this.router.navigate(['/portal/customer-service/policies']);
        break;
      case '/logout':
        window.localStorage.clear();
        this.router.navigate(['onboarding/welcome']);
        break;
      case '/nearestSpecialist':
        this.router.navigate(['/portal/specialists'])
        break;
      default:
        this.router.navigate(['portal/' + url])
        break;
    }
  }
  
  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }
}
