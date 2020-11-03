//listen for form submit

  // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCqMolGIVm-ediTqkKCg0pVOoGQSuoVR28",
    authDomain: "contactform-27475.firebaseapp.com",
    databaseURL: "https://contactform-27475.firebaseio.com",
    projectId: "contactform-27475",
    storageBucket: "contactform-27475.appspot.com",
    messagingSenderId: "431230346073",
    appId: "1:431230346073:web:c2997018b69b7813e26248",
    measurementId: "G-B02CY2ZYEQ"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



// //nosql has tables called collection which are created on the go implicitly
// // reference messages collection
// var messagesRef = firebase.database().ref('messages');  //initialize firebase database and get the reference the to messages collection.

// document.getElementById('contactForm').addEventListener('submit',submitForm);


// //function to get form values
// function getInputVal(id){return document.getElementById(id).value;}



// //save message to firebase
// function saveMessage(name, company, email, phone, message){
//     var messageValues = messagesRef.push();  //append  the 
//     messageValues.set({
//         name : name,
//         company : company,
//         email : email,
//         phone : phone,
//         message : message
//     });
// }

// //submit form
// function submitForm(e){
//     e.preventDefault(); //prevents form doing what that element does. In this case, subbmitting

//     //get values
//     var name = getInputVal('name');
//     var company = getInputVal('company');
//     var email = getInputVal('email');
//     var phone = getInputVal('phone');
//     var message = getInputVal('message');
  
//     // save message
//     saveMessage(name, company, email, phone, message);
    
//     //show alert
//     document.querySelector('.alert').style.display = "block";

//     //hide alert after 3 secs
//     setTimeout(()=>{
//         document.querySelector('.alert').style.display = "none";
//     },3000);


//     //clear form
//     document.getElementById('contactForm').reset();
// }


document.addEventListener("DOMContentLoaded",(e)=>{
    const app = firebase.app();

    const db = firebase.firestore();
    const myPost = db.collection('posts').doc('firstPost');

    myPost.onSnapshot(doc => {
        const data = doc.data();
        
        document.getElementById('userName').innerHTML = data.title;
    })
    // console.log(app);


    const productRef  = db.collection('products');

    const query = productRef.where('price','>',10)
    query.get().then(products =>{
        products.forEach(doc => {
            data = doc.data();
            document.getElementById('products').append(`${data.name} at $${data.price} ` );
        });
    });

    const query1 = productRef.orderBy('price','desc')
    query1.get().then(products =>{
        products.forEach(doc => {
            data = doc.data();
            document.getElementById('products').append(`${data.name} at $${data.price} ` );
        });
    });

    const query2 = productRef.orderBy('price','desc').limit(1)
    query2.get().then(products =>{
        products.forEach(doc => {
            data = doc.data();
            document.getElementById('products').append(`${data.name} at $${data.price} ` );
        });
    });
});

function updatePost(e){
    const db = firebase.firestore();
    const myPost = db.collection('posts').doc('firstPost');
    myPost.update({
        title: e.target.value
    })
}   

function googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(result => {
                            const user = result.user;
                            
                           document.getElementById('userName').append(`${user.displayName}`);
                            console.log(user)
                        })   //its async so returns with a promise which can be used to get the user 
                        .catch(console.log);
}

function uploadFile(files){
    const storageRef = firebase.storage().ref();
    const img = storageRef.child('img.jpg');

    const file = files.item(0);

    const task = img.put(file);

    
    task.snapshot.ref.getDownloadURL().then(url => {
        // console.log(image);
        //  url = (String)(image.downloadURL);
        console.log(url);
        document.getElementById('upImg').src = url;
        
    })
}