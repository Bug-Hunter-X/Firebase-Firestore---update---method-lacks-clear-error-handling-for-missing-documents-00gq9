To solve this issue, explicitly check if the document exists before attempting an update:

```javascript
db.collection('users').doc(userId).get().then(doc => {
  if (doc.exists) {
    db.collection('users').doc(userId).update({lastLogin: Date.now()}).then(() => {
      console.log('User login updated successfully');
    }).catch(error => {
      console.error('Error updating user login:', error);
    });
  } else {
    console.log('User document not found. Creating new user document instead.');
    db.collection('users').doc(userId).set({lastLogin: Date.now()}).then(() => {
      console.log('User document created successfully');
    }).catch(error => {
      console.error('Error creating user document:', error);
    })
  }
}).catch(error => {
  console.error('Error checking for user document:', error);
});
```

This improved code first retrieves the document using `get()`. If the document exists (`doc.exists`), it proceeds with the update. Otherwise, it logs a more informative message and can optionally create a new document with a more controlled approach.