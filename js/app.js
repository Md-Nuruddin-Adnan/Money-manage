const incomeAddBtn = document.getElementById('income-add-btn');
const expenseAddBtn = document.getElementById('expense-add-btn');

const incomeForm = document.getElementById('income-form');
const expenseForm = document.getElementById('expense-form');

const incomeTbody = document.getElementById('income-tbody')
const expenseTbody = document.getElementById('expense-tbody')

const totalIncomeShow = document.getElementById('total-income')
const totalExpenseShow = document.getElementById('total-expense')

const toggleClick = document.querySelectorAll('.toggle-click');

const balanceAmountShow = document.getElementById('balance-amount')

let globalIncome = '0';
let globalExpense = '0';
let globalBalance = globalIncome - globalExpense;

balance(globalIncome, globalExpense, balanceAmountShow);


// Chart js start
{
  var ctx = document.getElementById('myChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'doughnut',
      data: {
          labels: ['Income', 'Expense'],
          datasets: [{
              label: 'of Votes',
              data: [50, 50],
              backgroundColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
              ],
              borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(255, 99, 132, 1)',
                'rgba(255, 206, 86, 1)',
              ],
              borderWidth: 0,
              hoverOffset: 5,
          }]
      },
      options: {
          scales: false,
          plugins: {
            legend: {
                labels: {
                    // This more specific font property overrides the global property
                    font: {
                        size: 20
                    }
                }
            }
        },
      }
  });
}

 

// Chart js end

// incomeForm show hide start
incomeAddBtn.addEventListener('click', (e)=>{
  if(e.target.innerHTML !== 'Add New'){
    e.target.innerHTML = 'Add New';
  }else {
    e.target.innerHTML = 'Balance'
  }
  incomeForm.classList.toggle('d-none');
  [...toggleClick].forEach((item)=>{
    item.classList.toggle('d-none');
  })
})
// incomeForm show hide end

// expenseForm show hide start
expenseAddBtn.addEventListener('click', (e)=>{
  if(e.target.innerHTML !== 'Add New'){
    e.target.innerHTML = 'Add New';
  }else {
    e.target.innerHTML = 'Balance'
  }
  expenseForm.classList.toggle('d-none');
  [...toggleClick].forEach((item)=>{
    item.classList.toggle('d-none');
  })
})
// expenseForm show hide end


// income event start
incomeForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let income = document.getElementById('income-source-input').value
  let amount = document.getElementById('income-amount-input').value

  incomeForm.reset();
  
  trGenerator(incomeTbody, income, amount);

  [...incomeTbody.children].map((tr, index)=>{
    let deleteBtn = document.querySelectorAll('#income-tbody .delete-btn')[index]

    deleteBtn.addEventListener('click', (e) => {
      tr.remove()
      totalIncomeShow.innerHTML =  sum('#income-tbody .amount')
      globalIncome = sum('#income-tbody .amount');
      balance(globalIncome, globalExpense, balanceAmountShow);
    });
  })

  totalIncomeShow.innerHTML =  sum('#income-tbody .amount')
  globalIncome = sum('#income-tbody .amount');
  balance(globalIncome, globalExpense, balanceAmountShow);
});
// income event end



// expense event start
expenseForm.addEventListener('submit', (e) => {
  e.preventDefault();
  let expense = document.getElementById('expense-source-input').value
  let amount = document.getElementById('expense-amount-input').value

  expenseForm.reset();
  
  trGenerator(expenseTbody, expense, amount);

  [...expenseTbody.children].map((tr, index)=>{
    let deleteBtn = document.querySelectorAll('#expense-tbody .delete-btn')[index]

    deleteBtn.addEventListener('click', (e) => {
      tr.remove()
      totalExpenseShow.innerHTML =  sum('#expense-tbody .amount')
      globalExpense = sum('#expense-tbody .amount')
      balance(globalIncome, globalExpense, balanceAmountShow);
    });
  })

  totalExpenseShow.innerHTML =  sum('#expense-tbody .amount')
  globalExpense = sum('#expense-tbody .amount')
  balance(globalIncome, globalExpense, balanceAmountShow);
});
// expense event end


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

// scroll top start
let incomeTab = document.getElementById('income-tab');
let expenseTab = document.getElementById('expense-tab');
incomeTab.addEventListener('click', function(){
  document.body.scrollTop = 500;
  document.documentElement.scrollTop = 500;
})
expenseTab.addEventListener('click', function(){
  document.body.scrollTop = 500;
  document.documentElement.scrollTop = 500;
})
// scroll top end


// balance calculator start 
function balance(income, expense, showArea){
  let bl = income - expense;
  showArea.innerHTML = bl
}
// balance calculator end