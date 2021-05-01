const form = document.getElementById('form');
const tbody = document.getElementById('tbody')
const total = document.getElementById('total-show')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let income = document.getElementById('income').value
  let amount = document.getElementById('amount').value

  form.reset();
  
  trGenerator(tbody, income, amount);

  [...tbody.children].map((tr, index)=>{
    let deleteBtn = document.querySelectorAll('tr .delete-btn')[index]

    deleteBtn.addEventListener('click', (e) => {
      tr.remove()
      total.innerHTML =  sum('tr .amount')
    });
  })

  total.innerHTML =  sum('tr .amount')
});


// tr generator start
const trGenerator = (tbody, income, amount) => {
  let tr = document.createElement('tr')
  
  let tdIncome = document.createElement('td')
  tdIncome.innerHTML = income
  
  let tdAmount = document.createElement('td')
  tdAmount.innerHTML = amount
  tdAmount.classList.add('amount')

  let tdAction = document.createElement('td')
  tdAction.classList.add('text-end')
  let deleteBtn = document.createElement('button')
  deleteBtn.value = amount
  deleteBtn.innerHTML = 'X'
  deleteBtn.type = 'button'
  deleteBtn.classList.add('btn', 'delete-btn', 'btn-danger', 'btn-sm')
  tdAction.appendChild(deleteBtn)

  tr.appendChild(tdIncome)
  tr.appendChild(tdAmount)
  tr.appendChild(tdAction)

  tbody.appendChild(tr)
}
// tr generator end



// calculate start
let sum = (column)=>{

  let TotalValue = 0;

  $(column).each(function(index,value){
    currentRow = parseFloat($(this).text());
    TotalValue += currentRow
  });

  return TotalValue;
}
// calculate end

