db.collection('Cafes').get().then(snapshot => {
    console.log(snapshot.docs);
    });
