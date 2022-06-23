import {initializeApp} from 'firebase/app';
import {initializeFirestore} from '@firebase/firestore';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBvWBYAVBZiOitTA4p9QGNQ8atF1JW05ak',
  authDomain: 'fir-news-410f3.firebaseapp.com',
  databaseURL: 'https://fir-news-410f3-default-rtdb.firebaseio.com',
  projectId: 'fir-news-410f3',
  storageBucket: 'fir-news-410f3.appspot.com',
  messagingSenderId: '1088824268980',
  appId: '1:1088824268980:web:449cfa13095d850cc09fe1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const authentication = getAuth(app);

const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
// export const db = getFirestore(app);
export {db, authentication};
