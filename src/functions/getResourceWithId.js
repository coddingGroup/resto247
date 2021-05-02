import {firestore} from "../firebase/firebase";

export const getResourceWithId = (resourceId) =>{
    firestore.collection('resources').doc(resourceId).get()
        .then(document =>{
            if(document.exists){
                document.data();
                console.log(JSON.stringify(document.data()));
                return (document.data());
            }
            else{
                console.log("data not found " );
            }
        }).catch(error =>{
        console.log('error occur ' + error.message);
})
}