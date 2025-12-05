import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

let clientsArr=[ 
  {id:1, fam:"Иванов", name: "Иван", otch: "Иванович", balance:200}, 
  {id:2, fam:"Сидоров", name: "Сидор", otch: "Сидорович", balance:250}, 
  {id:3, fam:"Петров", name: "Пётр", otch: "Петрович", balance:180},
  {id:4, fam:"Григорьев", name: "Григорий", otch: "Григорьевич", balance:-220},
];

ReactDOM.render(
  <MobileCompany 
    clients={clientsArr}
  />
  , document.getElementById('container') 
);

