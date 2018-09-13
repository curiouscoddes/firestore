import { AngularFirestore } from 'angularfire2/firestore';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

/*
  Generated class for the ImghandlerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ImghandlerProvider {
  nativepath:any;
  firestorage = firebase.storage();
  constructor(public filechooser: FileChooser, public afs: AngularFirestore) {
    console.log('image handler fired');
  }

  uploadimage(){
    var promise = new Promise((resolve, reject) => {
      this.filechooser.open().then((url) => {
        (<any>window).FilePath.resolveNativePath(url, (result) => {
          this.nativepath = result;
          (<any>window).resolveLocalFileSystemURL(this.nativepath, (res) => {
            res.file((resFile) => {
              var reader = new FileReader();
              reader.readAsArrayBuffer(resFile);

              reader.onloadend = (evt: any) => {
                var imgBlob = new Blob([evt.target.result], { type: 'image/jpeg' });

                let randomString = Math.random().toString(36).substring(7);
                
                var imageStore = this.firestorage.ref('/productimages').child('prod'+randomString);
                imageStore.put(imgBlob).then((res) => {
                  this.firestorage.ref('/productimages').getDownloadURL().then((url) => {
                    resolve(url);
                  }).catch((err) => {
                      reject(err);
                  })
                }).catch((err) => {
                  reject(err);
                })
              }
            })
          })
        })
    })
  })    
   return promise;   
}

}
