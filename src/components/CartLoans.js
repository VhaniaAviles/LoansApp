import firebase from '../../Firebase';

export const addToCartFirebase = (productDetail, quantityRequested, userUID) => {
  return new Promise((resolve, reject) => {
    const loansHistoryRef = firebase.database().ref("LoansHistory");

    const currentDate = new Date();
    const formattedDate = `${currentDate
      .toISOString()
      .slice(0, 10)} ${currentDate.getHours()}:${currentDate.getMinutes()}`;

      const newLoanRef = loansHistoryRef.push({
        categoria: productDetail.categoria,
        foto: productDetail.foto,
        marca: productDetail.marca,
        modelo: productDetail.modelo,
        nombre: productDetail.nombre,
        productID: productDetail.productID,
        cantidadSolicitada: quantityRequested,
        userUID: userUID,
        fechaPrestamo: formattedDate,
        estado: "EN PRESTAMO",
        loansHistoryID: null,
      });

      const loansHistoryID = newLoanRef.key;

      newLoanRef.update({
        loansHistoryID: loansHistoryID,
      })
      .then(() => {
        const productsRef = firebase.database().ref("Products");

        return productsRef.orderByChild("productID").equalTo(productDetail.productID).once("value");
      })
      .then((snapshot) => {
        if (snapshot.exists()) {
          const productNode = Object.keys(snapshot.val())[0];
          const stock = parseInt(snapshot.val()[productNode].stock);

          return firebase.database().ref(`Products/${productNode}`).update({
            stock: (stock - quantityRequested).toString(),
          });
        } else {
          resolve(false);
        }
      })
      .then(() => {
        resolve(true);
      })
      .catch((error) => {
        console.error("Error al buscar el nodo:", error);
        resolve(false);
      });
  });
};




