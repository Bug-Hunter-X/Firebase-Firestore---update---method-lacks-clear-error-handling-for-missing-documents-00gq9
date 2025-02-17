The following code snippet demonstrates an uncommon error in Firebase when using Cloud Firestore:

```javascript
db.collection('users').doc(userId).update({lastLogin: Date.now()}).then(() => {
  console.log('User login updated successfully');
}).catch(error => {
  console.error('Error updating user login:', error);
});
```

This seems straightforward, but if `userId` is not found in the `users` collection, the `update()` method will throw an error, and the `catch` block will execute.  However, it's easy to miss that the error doesn't provide enough information to identify the root cause. The error message may be generic and doesn't necessarily tell you that the document was missing.

This is uncommon because developers usually expect `set()` to silently create a new document if one doesn't exist, but `update()` behaves differently. It operates under the expectation that the document already exists.