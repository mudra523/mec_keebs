import { getFirestore, collection, getDocs, doc, setDoc, addDoc, query, where} from 'firebase/firestore';
import app from './firebase';



const db = getFirestore(app);

const createUserDatabase = async (userDetails) => {

    const data = await findUser(userDetails.email);
    if (!data) {
        return await addDoc(collection(db, 'users'), {
            ...userDetails
        })
    } else {
        alert('User already exists!');
    }

}

const signinUser = async (userDetails) => {
    const q = query(collection(db, 'users'), where('email', '==', userDetails.email), where('password', '==', userDetails.password));
    const querySnapshot = await getDocs(q);
    var dataList = [];
    querySnapshot.forEach((doc) => {

        if (doc.exists) {
            const data = {
                uid: doc.id,
                ...doc.data()
            }
            dataList.push(data)
        }
    })
    return dataList[0];
}

const findUser = async (email) => {
    const q = query(collection(db, 'users'), where('email', '==', email));
    const querySnapshot = await getDocs(q);
    var dataList = [];
    querySnapshot.forEach((doc) => {

        if (doc.exists) {
            const data = {
                uid: doc.id,
                ...doc.data()
            }
            dataList.push(data)
        }
    })
    return dataList[0];
}

const updateUserData = async (uid, userDetails) => {
    await setDoc(doc(db, 'users', uid), userDetails);
}


export { createUserDatabase, findUser, signinUser, updateUserData };
