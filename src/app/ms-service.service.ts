import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MsServiceService {

  constructor(private http: HttpClient) {  }
  public computerVisionService(imageURL) {
    const API = 'https://imagerecognitionfrt.cognitiveservices.azure.com/vision/v2.0/analyze?visualFeatures=Categories,Description,Tags,Color,Brands,Faces,ImageType';
      
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': '1690cbb1635849d99eb97712aa3044ec'
    });
    return this.http.post(API, { url : imageURL}, { headers: headers });
  }

  public translateText (text) {
    const API = 'https://api.cognitive.microsofttranslator.com/translate?api-version=3.0&from=en&to=hi';
    ;
      
    const headers = new HttpHeaders({
      'Ocp-Apim-Subscription-Key': '2738315e3b88472696974735a9fa27db',
      'Ocp-Apim-Subscription-Region': 'southeastasia',
      'Content-Type': 'application/json',
});
    return this.http.post(API, [{ 'Text' : text }], { headers: headers });
  }
}   