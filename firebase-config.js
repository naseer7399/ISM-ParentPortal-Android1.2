/* ===================================================================
   Ikhlas Parent Portal — Firebase connection
   ===================================================================

   This app has nothing to show without the cloud, so it always
   requires Firebase — there's no offline/local mode like the main
   school app has. Paste in the SAME config object you already used
   in the main Ikhlas School Manager's own firebase-config.js (Project
   settings > General > "Your apps" in the Firebase console).

   You do NOT need to create a second Firebase project — this app
   reads from the same project, just a different, parent-safe slice
   of it (see README.md > "Parent Portal" for what it can and can't
   see, and the extra Firestore security rules it needs).
   ------------------------------------------------------------------ */

const FIREBASE_CONFIG = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};
