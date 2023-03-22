<script>
    var valor =0
    var elemento = document.getElementById('display1');
elemento.innerText = valor;

function num(value) {
  var display1 = document.getElementById('display1');
  display1.innerText += value;
}

  function operacion(value) {
  valor2 = parseFloat(document.getElementById('display1').innerText);
  operacion = value;
  document.getElementById('display1').innerText = operando1 + ' ' + operacion;
  document.getElementById('display1').innerText = '';

}
function limpiar {
    var valor = document.getElementById('display2');
valor = 0();
}

function igual() {
  var total = document.getElementById('display1').value;
  var resultado = eval(total);
  document.getElementById('display2').value = resultado;

}

    
    </script>    