/*
 * Cross-device account synchronization.
 *
 * Create a Firebase project with Firestore and put the REST documents endpoint below.
 * The database must allow the web app to read/write the accounts document and feedback collection.
 * Leave cloudEnabled false until endpoint is filled; localStorage remains the fallback.
 */
window.ENTSPRINT_CONFIG = {
    cloudEnabled: true,
    provider: "firebase_firestore",
    endpoint: "https://firestore.googleapis.com/v1/projects/entsprint-1ad47/databases/(default)/documents",
    apiKey: "AIzaSyCKdRPrItcGJ7fCsPfLs34Z8qxxYvfhyss"
};
