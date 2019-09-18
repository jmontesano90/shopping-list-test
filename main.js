function toggleItem(){
    $('ul').on('click', '.shopping-item-toggle', function(event){
        event.preventDefault();
        const liCheck = $(this).parent().parent();
        const checkedItem = liCheck.eq(0);
        checkedItem.toggleClass('shopping-item__checked');
        console.log(checkedItem);
    });
}

function removeItem(){
   $('ul').on('click', '.shopping-item-delete', function(event) {
    event.preventDefault();
    const liCheck = $(this).parent().parent();
    liCheck.remove();
    console.log('deleted');
  });
}

function addItem(){
  $('#js-shopping-list-form button').click(function(event){
  event.preventDefault();
  let newItem = $("#shopping-list-entry").val();
  $('.shopping-list').append('<li><span class="shopping-item ">' + newItem +'</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
      console.log('hello yes addItem ran');
      console.log(newItem);
});
}

$(removeItem);
$(addItem);
$(toggleItem);

