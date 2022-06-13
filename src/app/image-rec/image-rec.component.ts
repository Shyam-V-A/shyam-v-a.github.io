import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MsServiceService } from '../ms-service.service';

@Component({
  selector: 'app-image-rec',
  templateUrl: './image-rec.component.html',
  styleUrls: ['./image-rec.component.css']
})
export class ImageRecComponent implements OnInit {

  constructor(private msService: MsServiceService) { }

  imageURLPreview = '';
  analyzedImageData;

  ngOnInit(): void {
  }

  imageURL(){
    this.imageURL = this.imageURL
  }

  analyzeImage(imageData: NgForm) {
    console.log(imageData.value.imageURL);
    this.imageURLPreview = imageData.value.imageURL;
    this.msService.computerVisionService(this.imageURLPreview).subscribe(res => {
      console.log(res);
      this.analyzedImageData = res;
    }, err => {
      console.log(err);
    })
    imageData.reset();
  }
}
