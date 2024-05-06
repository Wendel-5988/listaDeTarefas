$(document).ready(function(){
  
  $('form').on('submit', function(e){
    e.preventDefault();
    adicionaTarefa();
    limpaCampo();
  })

  

  function adicionaTarefa(){
    const newTask = $('#taskInput').val();
    $(`<li class="task">${newTask}</li>`).appendTo('ul')
    riscaTarefa();
  }
  
  function limpaCampo(){
    $('#taskInput').val('');
  }

  function riscaTarefa(){
    $('li').click(function(){
      $(this).addClass('checked');   
    }) 
  }
})
