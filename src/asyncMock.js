import img1 from "./Components/Item/assets/milka.3.webp";
import img2 from "./Components/Item/assets/milka.2.webp";
import img3 from "./Components/Item/assets/cofler.3.webp";


const products = [
    {
        id: '1',
        name: 'Chocolate Milka Oreo',
        price: 1350,
        img: img1,
        category: 'Chocolates',
        stock: 23,
    },
    { id: '2', name: 'Chocolate Milka Caramelo', price: 1350, img: img2, category: 'Chocolates', stock: 23 },
    { id: '3', name: 'Chocolate Block', price: 1250, img: img3, category: 'Chocolates', stock: 23 },
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((prod) => prod.id === productId));
        }, 500);
    });
};

export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const filteredProducts = products.filter((product) => product.category === category);
        resolve(filteredProducts);
      }, 500);
    });
  };