import { Component, AfterViewInit, EventEmitter, Output } from '@angular/core';
import {
  NgbModal,
  ModalDismissReasons,
  NgbPanelChangeEvent,
  NgbCarouselConfig
} from '@ng-bootstrap/ng-bootstrap';
import { DataSessionService } from '../../../services/dataSession/data-session.service';
declare var $: any;

@Component({
  selector: 'app-footer-public',
  templateUrl: './footer-public.component.html',
  styleUrls: ['./footer-public.component.scss']
})
export class FooterPublicComponent implements AfterViewInit {

  constructor(public dataSessionService: DataSessionService,private modalService: NgbModal) {}

  ngAfterViewInit() {}

  logOut(){
    this.dataSessionService.logOut();
  }
}
