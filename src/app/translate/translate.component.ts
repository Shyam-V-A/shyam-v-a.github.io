import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MsServiceService } from '../ms-service.service';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {

  translatedText;
  constructor(private msService: MsServiceService) { }

  ngOnInit(): void {
  }

  translateText(translateForm: NgForm) {
    console.log(translateForm.value.translateText);
    const text = translateForm.value.translateText;
    this.msService.translateText(text).subscribe(
      (res) => {
        console.log(res);
        this.translatedText = res;
      },
        err => {
          console.log(err);
        
      }
    )
  }
}
