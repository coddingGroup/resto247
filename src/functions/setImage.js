import {firebaseStorage} from "../firebase/firebase";

export const setImage = (image, classN=null) => {

    if(classN === null){
        classN = image;
    }
    let ref = firebaseStorage.ref();
    let fullRef = ref.child(image);
    fullRef.getDownloadURL()
        .then((url) => {
            //setImage(url);
            //let img = document.getElementById(item.image);
            let elements = document.getElementsByClassName(classN);
            //elements[0].setAttribute('src', url);
            // elements.map(img =>{
            //     img.setAttribute('src',url);
            // });
            for (let i = 0; i < elements.length; i++) {
                elements[i].setAttribute('src', url);
            }
            //elements.setAttribute('src', url);

        })
        .catch((error) => {
            console.log(error.message);
            //setImage('https://firebasestorage.googleapis.com/v0/b/resto247-2c1f2.appspot.com/o/images%2Flogo.jpg?alt=media&token=6296ddb1-0cda-4a2a-8956-50209dc3a992');
        });

}