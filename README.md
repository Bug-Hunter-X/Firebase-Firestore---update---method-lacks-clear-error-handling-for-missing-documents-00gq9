# Firebase Firestore: Handling Missing Documents in update()

This repository demonstrates an uncommon error when using the `update()` method in Firebase Cloud Firestore.  The `update()` method silently fails if the specified document does not exist, providing a generic error message that doesn't clearly indicate the missing document.

## The Problem
The `update()` method is designed to modify an existing document.  If the document doesn't exist, it throws an error, but the nature of the error doesn't explicitly mention the missing document.  This can lead to debugging challenges, as the root cause is not immediately apparent.

## The Solution
To address this, you can check for the document's existence before attempting to update it using the `get()` method.  This ensures a more robust and informative error handling mechanism.