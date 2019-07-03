const admin = require('firebase-admin');
const firebaseConfig = {
    
}
admin.initializeApp(firebaseConfig);
const db = admin.firestore()

module.exports = { admin, db }
