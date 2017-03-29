
function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.getElementById('nested').querySelector('div')
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0, l = lis.length; i < l; i++) {
  lis[i].innerHTML = (parseInt(lis[i].innerHTML, 10) + n).toString()
  }
}

function deepestChild(){
  var y = document.getElementById('grand-node')
  var z = document.getElementById('grand-node').querySelector('div')
  while (z){
    y = y.querySelector('div')
    z = z.querySelector('div')
  }
  return y
}
