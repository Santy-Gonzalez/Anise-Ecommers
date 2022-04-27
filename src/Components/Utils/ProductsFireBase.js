import {getDocs, getFirestore, query, where, collection} from "firebase/firestore";

export const traerProducto = () => {
    const db = getFirestore();
    const products = collection(db, "Products");

    return getDocs(products)
}

export const getProductsCategory = (categoryId) => {
    console.log(categoryId);
    const db = getFirestore();
    const products = collection(db, "Products");
    const q = query(products, where("categoryId", "==", categoryId));
    
    return getDocs(q);
}

/* export const getProductCategory = (categoryName) => {
    console.log(categoryName);
    const db = getFirestore();
    const products = collection(db, "Products");
    const q = query(products, where("categoryName", "==", categoryName));
    
    return getDocs(q);
}

 */