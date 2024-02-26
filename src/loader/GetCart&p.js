import { getStoredJobApplication } from "../Component/Utility/Utlity";



export const productsAndCartData = async () => {
    const productData = await fetch('product.json')
    const product = await productData.json()

    const saveCart = getStoredJobApplication();

    let newArr = [];
    for (const id in saveCart) {
        const foundProduct = product.find(product => product.id == id)
        if (foundProduct) {
            newArr.push(foundProduct)
        }

    }

    return { newArr, product }


}