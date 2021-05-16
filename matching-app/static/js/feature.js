document.addEventListener('DOMContentLoaded', function(){

    const recepeList = document.querySelector('#content');


    //Delete recepes
    recepeList.addEventListener('click', function(e){
        if(e.target.className == "delete"){
            const recepe = e.target.parentElement;
            recepe.parentNode.remove(recepe);
        }
    });

    //Add recepes

    const addForm = document.forms['addRecepe'];

    addForm.addEventListener('submit', function(e){
        e.preventDefault()
        const valueName = addForm.querySelector('input[name="naam"]').value;
        const valueDesc = addForm.querySelector('input[name="desc"]').value;


        //Create elements
        const recepe = document.createElement('article');
        const itemHolder = document.createElement('section');
        const recepeName = document.createElement('h4');
        const recepeDesc = document.createElement('p');
        const deleteBtn = document.createElement('button');
        const imageHolder = document.createElement('section');
        const image = document.createElement('img');

        //Add content
        deleteBtn.textContent = 'Delete';
        recepeName.textContent = valueName;
        recepeDesc.textContent = valueDesc;
        image.setAttribute('src', 'images/dish-1.png');

        //add classes
        itemHolder.classList.add('item');
        imageHolder.classList.add('image');
        deleteBtn.classList.add('delete');

        //Append to DOM
        itemHolder.appendChild(recepeName);
        itemHolder.appendChild(recepeDesc);
        itemHolder.appendChild(deleteBtn);
        recepe.appendChild(itemHolder);
        imageHolder.appendChild(image);
        recepe.appendChild(imageHolder);

        recepeList.appendChild(recepe);
    });

    //hide recepes

    const hideBox = document.querySelector('#hide');

    hideBox.addEventListener('change', function(e){
        if(hideBox.checked){
            recepeList.style.display = "none";
        } else {
            recepeList.style.display  = "block";
        }
    });

    //filter recepes

    const searchBar = document.forms['searchRecepes'].querySelector('input');
    searchBar.addEventListener('keyup', function(e){
        const term = e.target.value.toLowerCase();
        const recepes = recepeList.getElementsByClassName('item');
        Array.from(recepes).forEach(function(recepe){
            const title = recepe.firstElementChild.textContent;
            if(title.toLowerCase().indexOf(term) !=-1){
                recepe.parentNode.style.display = 'flex';
            } else {
                recepe.parentNode.style.display = 'none';
            }
        })
    })

});