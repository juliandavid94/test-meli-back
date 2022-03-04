/**
  * @desc ordened array 
  * @param products $products - products received from endpoint
  * @return array
*/
exports.processProducts = (data) => {
    return data.map((product) => {
        return basicDataProducts(product)
    });
}

/**
  * @desc ordened array 
  * @param data $data - product basic info received from endpoint
  * @return array
*/
exports.processDataProduct = (data, description) => {
    return basicDataProducts(data, description);
}

/**
  * @desc ordened array 
  * @param product $product - product basic info received from processDataProduct, processProducts
  * @return array
*/
basicDataProducts = (product, description = '') => {
    let descr = '';
    if (description !== ''){
        descr = {
            description: description.plain_text,
            img: product.pictures,
        }
    }
    return {
        id: product.id,
        title: product.title,
        price: {
            currency: product.currency_id,
            amount: product.price
        },
        picture: product.thumbnail,
        condition: product.condition,
        free_shipping: product.shipping.free_shipping,
        sold_quantity: product.sold_quantity,
        address: product.address,
        tags: product.tags,
        ...descr,
    }
}

/**
  * @desc breadcrumbs
  * @param categories $categories - filter the most relevant category according to the search 
  * @return object
*/
exports.processCategories = (data) => {
    return data.length > 0 ?
    data.find((categorie) => categorie.id === 'category').values[0].path_from_root.map((value) => value.name) : null;
}