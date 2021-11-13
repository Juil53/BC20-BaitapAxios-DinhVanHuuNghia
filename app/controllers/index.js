var service = new ProductSerive();
function getListProduct() {
    service
        .getListProductAPI()
        .then(function (result) {
            renderData(result.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}
getListProduct();

function renderData(data) {
    var contenthtml = "";
    data.forEach(function (item, index) {
        var trSP =
            `<tr>
        <td>${index + 1}</td>
        <td>${item.tenSP}</td>
        <td>${item.gia}</td>
        <td><img style="width:50px"; src="../../assets/img/${item.hinhAnh}" alt=""></td>
        <td>${item.moTa}</td>
        <td>
            <button class="btnSuaSP btn btn-info" data-toggle="modal" data-target="#myModal" onclick="editProduct(${item.id})">Edit</button>
            <button class="btn btn-danger" onclick="deleteProduct(${item.id})">Delete</button>
        </td>
        </tr>`;
        contenthtml += trSP;
    });
    document.getElementById("tblDanhSachSP").innerHTML = contenthtml;
}

/**
 * Delete product
 */
function deleteProduct(id) {
    console.log(id);
    service.deleteProductAPI(id)
        .then(function () {
            alert("Delete sucess!");
            //Làm mới dữ liệu mới nhất từ server
            getListProduct();
        })
        .catch(function (error) {
            console.log(error);
        });
}

document.getElementById("btnThemSP").addEventListener("click", function () {
    document.getElementsByClassName("modal-title")[0].innerHTML = "Add Product";
    var footerModal = `<button class="btn btn-success" onclick="addProduct()">Add Product</button>`;
    document.getElementsByClassName("modal-footer")[0].innerHTML = footerModal;
})
/**
 * Add Product
 * 
 */
function addProduct() {
    //Lấy value từ các thẻ input
    var tensp = document.getElementById("TenSP").value;
    var giasp = document.getElementById("GiaSP").value;
    var hinhsp = document.getElementById("HinhSP").value;
    var motasp = document.getElementById("moTa").value;
    var product = new Product("", tensp, giasp, hinhsp, motasp);
    console.log(product);
    service.addProductAPI(product)
        .then(function (result) {
            //Tắt modal
            document.getElementsByClassName("close")[0].click();
            getListProduct();
        })
        .catch(function (error) {
            console.log(error);
        })
}

/**
 * Edit Product
 */

function editProduct(id) {
    document.getElementsByClassName("modal-title")[0].innerHTML = "Edit Product";
    var footerModal = `<button class="btn btn-primary" onclick="updateProduct(${id})">Update Product</button>`;
    document.getElementsByClassName("modal-footer")[0].innerHTML = footerModal;

    service
        .getProductById(id)
        .then(function (result) {
            //show thông tin ra UI
            console.log(result.data);
            document.getElementById("TenSP").value = result.data.tenSP;
            document.getElementById("GiaSP").value = result.data.gia;
            document.getElementById("HinhSP").value = result.data.hinhAnh;
            document.getElementById("moTa").value = result.data.moTa;
        })
        .catch(function (error) {
            console.log(error);
        })
}
/**
 * Update Product
 */
function updateProduct(id) {
    var tensp = document.getElementById("TenSP").value;
    var giasp = document.getElementById("GiaSP").value;
    var hinhsp = document.getElementById("HinhSP").value;
    var motasp = document.getElementById("moTa").value;
    var product = new Product(id, tensp, giasp, hinhsp, motasp);
    service.updateProductAPI(product)
    .then(function (result) {
        //Tắt modal
        document.getElementsByClassName("close")[0].click();
        //Làm mới Data
        getListProduct();
    })
    .catch(function (error) {
        console.log(error);
    })
}