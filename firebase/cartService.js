import { db } from "./config";
import { collection, addDoc, getDocs, query, where, deleteDoc, doc } from "firebase/firestore";

// Agregar producto al carrito
export const addToCart = async (userId, product) => {
  try {
    await addDoc(collection(db, "products"), {
      userId,
      productId: product.id,
      name: product.name,
      price: product.price,
      quantity: 1
    });
  } catch (error) {
    console.error("Error al agregar producto al carrito:", error);
  }
};

// Obtener productos del carrito
export const getCart = async (userId) => {
  try {
    const q = query(collection(db, "products"), where("userId", "==", userId));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error al obtener el carrito:", error);
  }
};

// Eliminar un producto del carrito
export const removeFromCart = async (cartItemId) => {
  try {
    await deleteDoc(doc(db, "products", cartItemId));
  } catch (error) {
    console.error("Error al eliminar producto del carrito:", error);
  }
};
