var productName = document.getElementById("ProductName");
var productPrice = document.getElementById("Productprice");
var productCategory = document.getElementById("Productcate");
var productDescription = document.getElementById("productdesc");
var productImg = document.getElementById("productimg");
var productList = []
if(localStorage.getItem("productList") !=null){
  productList = JSON.parse(localStorage.getItem("productList"))
  displayProduct( productList)
}


function addProduct() {
    var product = {
        name: ProductName.value,
        price: Productprice.value,
        cate: Productcate.value,
        des: productdesc.value,
        img: productimg.value,
    }
    clear()
    productList.push(product);
    localStorage.setItem( "productList",JSON.stringify(productList))
    displayProduct(productList)
    console.log(productList);
}





function displayProduct(list) {
    var cartona = "";
    for (var i = 0; i < list.length; i++) {
        cartona += `
        <div class="col-4 gy-3">
        <div class="item border border-primary mb-3 rounded-3 overflow-hidden">
          <img class="w-100" src="imges/81GggrhYxWL.jpg" alt="Item image">
          <div class="content p-3">
            <h5>Name: ${list[i].name}</h5>
            <h5>Price: ${list[i].price}</h5>
            <h5>Category: ${list[i].cate}</h5>
            <h5>Description: ${list[i].des}</h5>
          </div>
      
        <div class="d-grid gap-2 m-1">
        <button onclick="updateProduct()" class="btn btn-outline-info" type="button">Update</button>
        <button onclick="deletProduct(${i})" class="btn  btn-outline-danger" type="button">Delete</button>
       </div>
      

        </div>
      </div>

    `;
    }
    document.getElementById("data").innerHTML = cartona;
}



function clear() {
    ProductName.value = null;
    Productprice.value = null;
    Productcate.value = null;
    productdesc.value = null;
    productimg.value = null;
}


function deletProduct(index){
    productList.splice(index,1)
    localStorage.setItem( "productList",JSON.stringify(productList))
    displayProduct(productList)

}