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

buttons.forEach(button=>{
  button.addEventListener('click', event => {
    // console.log(event.target.textContent)
    fetchProductsByCategory(event.target.textContent)
  } )
})
function fetchProductsByCategory (categoryName) {
 console.log(categoryName)
}


}
renderCategories()