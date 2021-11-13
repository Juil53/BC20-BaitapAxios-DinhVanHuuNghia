function ProductSerive(){
    this.getListProductAPI = function(){
        return axios({
            // url: "https://6183caea91d76c00172d1b61.mockapi.io/api/products",
            url:"https://618eab9a50e24d0017ce13c9.mockapi.io/products",
            method: "GET",
        })
    };
    this.deleteProductAPI = function(id){
        return axios({
            // url: `https://6183caea91d76c00172d1b61.mockapi.io/api/products/${id}`,
            url:"https://618eab9a50e24d0017ce13c9.mockapi.io/products/${id}",
            method:"DELETE",
        })
    };
    this.addProductAPI = function(product){
        return axios({
            // url:"https://6183caea91d76c00172d1b61.mockapi.io/api/products",
            url: "https://618eab9a50e24d0017ce13c9.mockapi.io/products",
            method: "POST",
            data:product,
        })
    };
    this.getProductById = function(id){
        return axios({
            url: "https://618eab9a50e24d0017ce13c9.mockapi.io/products/${id}",
            method:"GET",
        })
    };
    this.updateProductAPI = function(product){
        return axios({
            url: "https://618eab9a50e24d0017ce13c9.mockapi.io/products${product.id}",
            method: "PUT",
            data: product,
        })
    };
}