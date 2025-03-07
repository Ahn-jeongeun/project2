window.onload = async() => {
    let response = await axios.get("http://localhost:8080/getAllProducts");
    console.log(response);
    let productList = response.data;

    productList.array.forEach(element => {
        productListDiv += `<div class="card mt-2" style="width: 10rem;">
                          <img src="img/${element.pimg}" class="card-img-top" alt="${item.prodname}" height="150">
                          <div class="card-body">
                            <b class="card-title">${element.prodname}</b><br>
                            <span class="card-text text-danger">${element.price}원</span>
                            <a href="#" class="btn btn-outline-info">담기</a>
                          </div>
                        </div>`;
    });
    document.getElementById("productListDiv").innerHTML=productListDiv;
}