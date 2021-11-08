var service = new ProductSerive();
function getListProduct(){
    service
    .getListProductAPI()
    .then(function(result){
        console.log(result);
        renderData(result.data);
    })
    .catch(function(error){
        console.log(error);
    });
}
getListProduct();

function renderData(data){
    var html = "";
    data.forEach(function(item){
        var trSP = `<tr>
        <td>${item.id}</td>
        <td>${item.tenSP}</td>
        <td>${item.gia}</td>
        <td><img style="width:10%"; src="../../assets/img/${item.hinhAnh}" alt=""></td>
        <td>${item.moTa}</td>
        </tr>`;
        html += trSP;
    });
    document.getElementById("tblDanhSachSP").innerHTML = html;
}
