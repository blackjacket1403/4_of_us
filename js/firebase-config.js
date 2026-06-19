/* TUMBLER — Firebase config (for cross-device online rooms)
 * ----------------------------------------------------------------------------
 * Online play uses a free Firebase Realtime Database. Until you paste your own
 * config below, "Play Online" runs in same-browser DEMO mode (great for trying
 * it on one machine, but it will NOT sync across devices).
 *
 * ONE-TIME SETUP (~2 minutes, free, no card):
 *   1. Go to https://console.firebase.google.com → "Add project" (any name).
 *   2. In the project, open  Build → Realtime Database → "Create Database".
 *        - pick a location, start in "locked mode" (we set rules in step 4).
 *   3. Project settings (⚙) → "Your apps" → Web app (</>) → register an app.
 *        Copy the firebaseConfig values into the object below.
 *   4. Realtime Database → "Rules" tab → paste the rules from README.md
 *        (section "Firebase rules"), then Publish.
 *   5. Commit & push this file. Done — rooms now sync across devices.
 *
 * These values are NOT secrets. A Firebase web config is meant to live in the
 * client; access is controlled by the database rules, not by hiding this.
 * ----------------------------------------------------------------------------
 */
window.TUMBLER_FIREBASE = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT.firebaseapp.com",
  databaseURL: "PASTE_https://PASTE_PROJECT-default-rtdb.firebaseio.com",
  projectId: "PASTE_PROJECT",
  appId: "PASTE_APP_ID",
};
