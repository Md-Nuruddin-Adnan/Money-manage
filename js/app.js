const form = document.getElementById('form');
const tbody = document.getElementById('tbody')

let total = [];


form.addEventListener('submit', (e) => {
  e.preventDefault();
  let income = document.getElementById('income').value
  let amount = document.getElementById('amount').value

  let num = parseInt(amount)
  total.push(num)
  let x = total.reduce((a, b) => a + b, 0)
  console.log(x);

  form.reset();
  
  trGenerator(tbody, income, amount);

  [...tbody.children].forEach((tr, index)=>{
    const deleteBtn = document.querySelectorAll('tr .delete-btn')[index]
    deleteBtn.addEventListener('click', (e) => {
      tr.remove()
    })


  })


});


// tr generator start
const trGenerator = (tbody, income, amount) => {
  let tr = document.createElement('tr')
  
  let tdIncome = document.createElement('td')
  tdIncome.innerHTML = income

  let tdAmount = document.createElement('td')
  tdAmount.innerHTML = amount

  let tdAction = document.createElement('td')
  let deleteBtn = document.createElement('button')
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


// sum start

// sum end

