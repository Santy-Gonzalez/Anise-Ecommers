import { doc, getDoc, getFirestore, getDocs, collection, orderBy, query, where, limit } from "firebase/firestore";


export const traerProducto = (id) => {
    const db = getFirestore();
    const prodRef = doc(db, "Products", id);

    return getDoc(prodRef);
}

export const detailProduct = (id) => {
    const db = getFirestore();
    const productsRef = collection(db, "Products");
    const q = query(productsRef, orderBy("category.id", "id"));

    return getDocs(q);
}

export const getProductsCategory = (id) => {
    const db = getFirestore();
    const productsRef = collection(db, "Products");
    const q = query(productsRef, where("category.id", "==", id));

    return getDocs(q);
}
