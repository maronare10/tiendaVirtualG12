async function renderCategories() {
  const response = await fetch('https://fakestoreapi.com/products/categories')
  // console.log(response)
  const categorias = await response.json()
  // console.log(categorias)

  const categoriesSection = document.querySelector('.categories')
  let categoryButtons = ''

  categorias.forEach(category => {
    categoryButtons = categoryButtons + `<button>${category}</button>`
    // categoryButtons += `<button>${category}</button>`
  })

  categoriesSection.innerHTML = categoryButtons

  const buttons = document.querySelectorAll('button')

  buttons.forEach(button => {
    button.addEventListener('click', event => {
      // console.log(event.target.textContent)
      fetchProductsByCategory(event.target.textContent)
    })

    button.addEventListener('click', event => {
      // console.log(button.classList)
      button.classList.toggle("red")
    })

  })


 

}
renderCategories()

async function fetchProductsByCategory(categoryName) {
  const response = await fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
  // console.log(response)
  const products = await response.json()
  console.log(products)



  const productSection = document.querySelector('.products')
  let productElements = ''

  products.forEach(product => {
    productElements = productElements + `
<article class="product card">
<img class="product__image card-img-top w-25" src="${product.image}" alt="imagen de producto">
<div class="product__description card-body" >
  <h2 class="product__title card-text fs-6">${product.title}</h2>
  <p class="product__price card-text">S/${product.price}</p>
</div>
</article>
`
  })

  productSection.innerHTML = productElements
}