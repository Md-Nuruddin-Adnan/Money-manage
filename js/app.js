const form = document.getElementById('form');
const tbody = document.getElementById('tbody')
const totalShow = document.getElementById('total-show')

let total = [];


form.addEventListener('submit', (e) => {
  e.preventDefault();
  let income = document.getElementById('income').value
  let amount = document.getElementById('amount').value

  total.push(parseInt(amount))
  let sum = total.reduce((a, b) => a + b, 0)
  totalShow.innerHTML = sum

  form.reset();
  
  trGenerator(tbody, income, amount);

  [...tbody.children].forEach((tr, index)=>{
    const deleteBtn = document.querySelectorAll('tr .delete-btn')[index]

    deleteBtn.addEventListener('click', (e) => {
      tr.remove()
      if (index > -1) {
        total.splice(index, 1);
        sum = total.reduce((a, b) => a + b, 0)
        totalShow.innerHTML = sum
      }
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
  tdAction.classList.add('text-end')
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

