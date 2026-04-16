function openPopup(type) {
  const dialog = document.getElementById('popup-dialog');
  const title = document.getElementById('popup-title');
  const details = document.getElementById('popup-details');
  const table = document.getElementById('popup-table');
    
  if (type === 'income'){
    title.innerText = "Income Details";
    details.innerHTML = `<p><b>Total income : </b>₹95000</p>`;                       
    table.innerHTML = `<table>
                          <caption>Month : April</caption>
                          <tr>
                            <th>Description</th>
                            <th>Amount Received</th>
                          </tr>
                          <tr>
                            <td>Salary</td>
                            <td>₹95000</td>
                          </tr>`;

    dialog.showModal();
  }

  if (type === 'expense'){
    title.innerText = "Expense Details";
    details.innerHTML = `<p><b>Total expense : </b>₹20189</p>`;                       
    table.innerHTML = `<table>
                          <caption>Month : April</caption>
                          <tr>
                            <th>Description</th>
                            <th>Amount Spent</th>
                          </tr>
                          <tr>
                            <td>Food&Groceries</td>
                            <td>₹5000</td>
                          </tr>
                          <tr>
                            <td>Travel</td>
                            <td>₹6000</td>
                          </tr>
                          <tr>
                            <td>Bills</td>
                            <td>₹3421</td>
                          </tr>
                          <tr>
                            <td>Entertainment</td>
                            <td>₹1567</td>
                          </tr>
                          <tr>
                            <td>Health</td>
                            <td>₹3110</td>
                          </tr>
                           <tr>
                            <td>Others</td>
                            <td>₹1091</td>
                          </tr>`;

    dialog.showModal();
  }

  if (type === 'savings'){
    title.innerText = "Savings Details";
    details.innerHTML = `<p><b>Amount in savings : </b>₹20000</p>`;                     
    table.innerHTML = `<table>
                          <caption>Month : April</caption>
                          <tr>
                            <th>Description</th>
                            <th>Amount</th>
                          </tr>
                          <tr>
                            <td>Life Insurance</td>
                            <td>₹10000</td>
                          </tr>
                          <tr>
                            <td>Health Insurance</td>
                            <td>₹5000</td>
                          </tr>
                          <tr>
                            <td>General Insurance</td>
                            <td>₹5000</td>
                          </tr>`;

    dialog.showModal();
  }

  if (type === "balance"){
    title.innerText = "Balance Details";
    details.innerHTML = `<p><b>Balance : </b>₹54811</p>`;
                        
    table.innerHTML = `<table>
                          <caption>Month : April</caption>
                          <tr>
                            <th>Balance</th>
                            <th>₹54811</th>
                          </tr>`
    dialog.showModal();
  }

  if (type === 'transactions'){
    title.innerText = "Transaction Details";
    table.innerHTML = `<table>
                          <caption>Month : April</caption>
                          <tr>
                            <th>Date</th>                       
                            <th>Description</th>
                            <th>Type</th>
                            <th>Amount</th>
                          </tr>
                          <tr>
                            <td>01 Apr 2026</td>
                            <td>Salary</td>
                            <td>Income</td>
                            <td>₹95000</td>
                          </tr>
                          <tr>
                            <td>03 Apr 2026</td>
                            <td>Expense</td>
                            <td>Health Insurance</td>
                            <td>₹5000</td>
                          </tr>
                          <tr>
                            <td>03 Apr 2026</td>
                            <td>Expense</td>
                            <td>General Insurance</td>
                            <td>₹5000</td>
                          </tr>
                          <tr>
                            <td>05 Apr 2026</td>
                            <td>Expense</td>
                            <td>Beverage</td>
                            <td>₹100</td>
                          </tr>
                          <tr>
                            <td>05 Apr 2026</td>
                            <td>Expense</td>
                            <td>Room Rent</td>
                            <td>₹10000</td>
                          </tr>
                          <tr>
                            <td>05 Apr 2026</td>
                            <td>Expense</td>
                            <td>Gift</td>
                            <td>₹800</td>
                          </tr>
                          <tr>
                            <td>05 Apr 2026</td>
                            <td>Expense</td>
                            <td>Shoes</td>
                            <td>₹1900</td>
                          </tr>`;

    dialog.showModal();
  }
  }

function closePopup(id){
  const dialog = document.getElementById('popup-dialog');
  dialog.close();
}
