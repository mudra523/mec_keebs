import { getFirestore, collection, getDocs, getDoc, updateDoc, doc, addDoc, query, where, orderBy } from 'firebase/firestore';
import app from './firebase';
import { Link } from 'react-router-dom'

const db = getFirestore(app);

const updateProductDatabase = async () => {
    const product = {
        image: 'https://stackskb.com/wp-content/uploads/2021/06/kailh_speed_copper.jpg',
        name: 'Kailh Speed Copper',
        type: 'Key Switches',
        price: 80000,
        color: 'White and Black',
        switch: 'Tactile',
        stock: 700
    }
    await addDoc(collection(db, 'products'), product)
}       

const getProducts = async (categories) => {

    if (categories.length <= 0) {
        return []
    }

    const q = query(collection(db, 'products'), where('type', 'in', categories))

    var productList = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        productList.push({
            id: doc.id,
            ...doc.data()
        });
    });
    return productList;
}

const getProduct = async (categoryID, productID) => {
    return (await getDoc(doc(db, `categories/${categoryID}/products`, productID))).data();
}

const updateSoldCount = async (categoryID, productID, quantity) => {
    let product = await getProduct(categoryID, productID);
    const sold = product.sold + quantity;
    const stock = product.stock - quantity;
    await updateDoc(doc(db, `categories/${categoryID}/products`, productID), {
        sold: sold,
        stock: stock
    })
}

export { getProducts, getProduct, updateSoldCount, updateProductDatabase }