/*
 * Cross-device account synchronization.
 *
 * Create a Firebase Realtime Database and put its database URL below.
 * The database must allow the web app to read/write /entsprint/accounts.
 * Leave cloudEnabled false until endpoint is filled; localStorage remains the fallback.
 */
window.ENTSPRINT_CONFIG = {
    cloudEnabled: false,
    provider: "firebase",
    endpoint: "", // Example: https://your-project-default-rtdb.firebaseio.com
    apiKey: ""
};
