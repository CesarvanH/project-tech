document.addEventListener('DOMContentLoaded', function(){

    const recipeList = document.querySelector('#content');


    //Delete recipes
    recipeList.addEventListener('click', function(e){
        if(e.target.className == "delete"){
            const recipe = e.target.parentElement;
            recipe.parentNode.remove(recipe);
        }
    });

    //Add recipes

    const addForm = document.forms['addRecipe'];

    addForm.addEventListener('submit', function(e){
        e.preventDefault()
        const valueName = addForm.querySelector('input[name="naam"]').value;
        const valueDesc = addForm.querySelector('input[name="desc"]').value;


        //Create elements
        const recipe = document.createElement('article');
        const itemHolder = document.createElement('section');
        const recipeName = document.createElement('h4');
        const recipeDesc = document.createElement('p');
        const deleteBtn = document.createElement('button');
        const imageHolder = document.createElement('section');
        const image = document.createElement('img');

        //Add content
        deleteBtn.textContent = 'Delete';
        recipeName.textContent = valueName;
        recipeDesc.textContent = valueDesc;
        image.setAttribute('src', 'images/dish-1.png');

        //add classes
        itemHolder.classList.add('item');
        imageHolder.classList.add('image');
        deleteBtn.classList.add('delete');

        //Append to DOM
        itemHolder.appendChild(recipeName);
        itemHolder.appendChild(recipeDesc);
        itemHolder.appendChild(deleteBtn);
        recipe.appendChild(itemHolder);
        imageHolder.appendChild(image);
        recipe.appendChild(imageHolder);

        recipeList.appendChild(recipe);
    });

    //hide recipes

    const hideBox = document.querySelector('#hide');

    hideBox.addEventListener('change', function(e){
        if(hideBox.checked){
            recipeList.style.display = "none";
        } else {
            recipeList.style.display  = "block";
        }
    });

    //filter recipes

    const searchBar = document.forms['searchRecipes'].querySelector('input');
    searchBar.addEventListener('keydown', function(e){
        const term = e.target.value.toLowerCase();
        const recipes = recipeList.getElementsByClassName('item');
        Array.from(recipes).forEach(function(recipe){
            const title = recipe.firstElementChild.textContent;
            if(title.toLowerCase().indexOf(term) !=-1){
                recipe.parentNode.style.display = 'flex';
            } else {
                recipe.parentNode.style.display = 'none';
            }
        })
    })

});