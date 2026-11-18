/*
 * Cross-device account synchronization.
 *
 * Create a Firebase Realtime Database and put its database URL below.
 * The database must allow the web app to read/write /entsprint/accounts.
 * Leave cloudEnabled false until endpoint is filled; localStorage remains the fallback.
 */
window.ENTSPRINT_CONFIG = {
    cloudEnabled: true,
    provider: "firebase_firestore",
    endpoint: "https://firestore.googleapis.com/v1/projects/entsprint-1ad47/databases/(default)/documents",
    apiKey: "AIzaSyCKdRPrItcGJ7fCsPfLs34Z8qxxYvfhyss"
};
