var productList = document.querySelector("#productList");
var searchInput = document.querySelector("#searchInput");
var clearBtn = document.querySelector("#clearSearch");

let allProducts = [];

// Fetch products
fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((data) => {
    allProducts = data;
    Display(allProducts);
  })
  .catch((error) => console.log(error));

function Display(products) {
  productList.innerHTML = "";
  if (products.length === 0) {
    productList.innerHTML = `<p class="text-muted fw-bold text-center mt-4">No products found</p>`;
    return;
  }

  products.forEach((p) => {
    productList.innerHTML += `
      <div class="col-md-3 mb-4">
        <div class="card h-100 shadow-sm border-0">
          <img src="${p.image}" class="card-img-top p-3" alt="${p.title}" style="height:220px; object-fit:contain;">
          <div class="card-body d-flex flex-column">
            <h5 class="fw-semibold mb-2" style="font-size:15px;">${p.title}</h5>
            <p class="card-text text-muted small">${p.description.slice(0, 80)}...</p>
            <p class="fw-bold text-dark mb-2">$${p.price}</p>
            <a href="#" class="btn btn-dark btn-sm mt-auto">Buy Now</a>
          </div>
        </div>
      </div>`;
  });
}

//Search filter
searchInput.addEventListener("input", function () {
  const input = searchInput.value.toLowerCase();
  clearBtn.style.display = input ? "block" : "none"; 

  const filter = allProducts.filter((p) =>
    p.title.toLowerCase().includes(input)
  );
  Display(filter);
});

// Clear input 
clearBtn.addEventListener("click", function () {
  searchInput.value = "";
  clearBtn.style.display = "none";
  Display(allProducts);
  searchInput.focus();
});
