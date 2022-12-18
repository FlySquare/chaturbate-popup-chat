import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../../services/global.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit{
  constructor(private globalService: GlobalService,private route: ActivatedRoute) {}
  username = '';
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.globalService.getChat(params['userId']).subscribe((data:any)=>{
        console.log(data);
      });
    });


  }
}
