import { expenses } from './data.js';

//로컬스토리지에서 data가져올게-> 짐 풀기
//rawData로 따로 변수정의없이, const myExpenses = JSON.parse(localStorage.getItem("expenseData"));
//위 코드와 아래 코드 어떤 방법이 더 유용한가?
let myExpenses = JSON.parse(localStorage.getItem("expenseData"));

if (!myExpenses) {
  //처음 접속시, 초기 데이터에 ID 심어서 저장
  myExpenses = expenses.map((item, index) => ({
    id: Date.now() + index,
    type: item.type || (item.amount < 0 ? 'expense' : 'income'),
    ...item
  }));
  //(전용창고)로컬스토리지에 data넣어줄게-> 짐 싸기
  localStorage.setItem("expenseData", JSON.stringify(myExpenses));
}

//HTML에서 해당 녀석을 찾아올게
const listContainer = document.querySelector("#expense-list");
const totalAmountBox = document.querySelector("#total-amount");

//새 데이터가 중복으로 쌓임방지로 싸악 초기화
//=마치 whitebard같음
function renderWhiteboard(data) {
  listContainer.innerHTML = "";
  let total = 0;

  //data항목 공장 무한가동해라
  //붕어빵 틀(row)
  data.forEach(function (expense) {
    const row = document.createElement("tr");

    //틀에내용 채워넣기
    //td<tr(개념의크기)
    //백틱 활용의 순간
    //삭제할 때,몇번째데이터지? 추가
    row.dataset.id = expense.id;
    //row.innerHTML = `
    //<td><input type="checkbox" class="item-check"></td>
    //<td>${expense.title}</td>
    //<td>${expense.amount.toLocaleString()}</td> 
    //<td>${expense.date}</td>
    //<td>${expense.category}</td>
    //<td>${expense.payment}</td>
    //`;
    const checkCell = document.createElement("td");
    checkCell.innerHTML = `<input type="checkbox" class="item-check">`;
    row.appendChild(checkCell);

    const titleCell = document.createElement("td");
    titleCell.textContent = expense.title;
    row.appendChild(titleCell);

    const amountCell = document.createElement("td");
    amountCell.textContent = expense.amount.toLocaleString();
    row.appendChild(amountCell);

    const dateCell = document.createElement("td");
    dateCell.textContent = expense.date;
    row.appendChild(dateCell);

    const categoryCell = document.createElement("td");
    categoryCell.textContent = expense.category;
    row.appendChild(categoryCell);

    const paymentCell = document.createElement("td");
    paymentCell.textContent = expense.payment;
    row.appendChild(paymentCell);

    listContainer.appendChild(row);
    total += Number(expense.amount);
  });

  //완성된 붕어빵 상자에 정리할게
  //listContainer.appendChild(row);
  //total += Number(expense.amount);
  //});
  //totalAmountBox.textContent = `${total.toLocaleString('ko-KR')}원`;
  totalAmountBox.textContent = total.toLocaleString();
}
//공장 첫 가동0n!
renderWhiteboard(myExpenses);

//[모달 비서의 하루]
//나지금모달파트 너무너무너무 함겨워서 눈물나는데?
//버튼눌러도안나타나는데?
//버튼을 눌렀을 때 일어나는 일들 정의
const addBtn = document.querySelector("#addBtn"); //메인의 추가버튼
const modal = document.querySelector("#modal-backdrop"); //모달 백그라운드
const closeBtn = document.querySelector("#closeBtn"); //모달 닫기버튼

//메인의 추가 버튼 클릭시-> 모달 나타나렴!
addBtn.addEventListener("click", function () {
  modal.style.display = "flex";
});
//X 버튼 클릭시-> 모달 숨어보렴!
closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});
//[심화]
modal.addEventListener("click", function (event) {
  //if 클릭한 곳이 바깥배경이면 숨어보렴!
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

//(심화)HTML에서 새로고침 버튼 찾아올게// 
const refreshBtn = document.querySelector("#refreshBtn");
if (refreshBtn) {
  refreshBtn.addEventListener("click", function () {
    location.reload();
  });
}

//진짜 모달 시행
//버튼타입 공부 더 할 것(타입별특징)
const addForm = document.querySelector("#form-add");
if (addForm) {
  addForm.addEventListener("submit", function (event) {
    event.preventDefault();

    //입력값 싹 호출해보자
    const itemTitle = document.querySelector("#add-title").value;
    const itemType = document.querySelector("#modal-type").value;
    const itemAmount = document.querySelector("#add-amount").value;
    const itemDate = document.querySelector("#add-date").value;
    const itemCategory = document.querySelector("#add-category").value;
    const itemPayment = document.querySelector("#add-payment").value;

    //빈칸점호: 하나라도 데이터입력없으면 "안돼,돌아가!"라고
    //기호 ||: 하나라도 걸리면 끝장이다=깐깐한 검문소
    if (!itemTitle || !itemAmount || !itemDate || !itemCategory || !itemPayment) {
      alert("안돼,돌아가! 다 채우고 와.");
      return; //Done
    }

    const rawAmount = Math.abs(Number(itemAmount));
    if (isNaN(rawAmount) || rawAmount <= 0) {
      alert("금액은 숫자로만 정확히 입력해주세요!");
      return;
    }

    //new 데이터 덩어리
    const newItem = {
      id: Date.now(), //중복방지
      title: itemTitle.trim(),
      type: itemType, //항상정의필요
      //유효성검사핵심, 지출이면-, 수입이면+로 저장
      amount: itemType === 'expense' ? -rawAmount : rawAmount,
      date: itemDate,
      category: itemCategory,
      payment: itemPayment
    };

    //창고에 위 데이터 넣고,다시 짐싸서 저장
    myExpenses.push(newItem);
    localStorage.setItem("expenseData", JSON.stringify(myExpenses));
    renderWhiteboard(myExpenses);

    modal.style.display = "none";
    addForm.reset(); //입력창 싸악 비울 것  
  });
}

//필터링 비서 추가고용
const filterForm = document.querySelector("#filterForm");
filterForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const searchTitle = document.querySelector("#search-title").value.trim().toLowerCase();
  const filterType = document.querySelector("#f-type").value;
  const filterCategory = document.querySelector("#f-category").value;
  const filterPayment = document.querySelector("#f-payment").value;

  const filtered = myExpenses.filter(item => {
    const matchTitle = item.title.toLowerCase().includes(searchTitle);
    const matchType = (filterType === "all") || (item.type === filterType);
    const matchCategory = (filterCategory === "all") || (item.category === filterCategory);
    const matchPayment = (filterPayment === "all") || (item.payment === filterPayment);
    return matchTitle && matchType && matchCategory && matchPayment;
  });
  renderWhiteboard(filtered); //필터링된 결과만 GoOut
});

//삭제 비서 추가고용
const deleteBtn = document.querySelector("#deleteBtn");
deleteBtn.addEventListener("click", function () {
  const checkboxes = document.querySelectorAll(".item-check:checked");
  if (checkboxes.length === 0) {
    return alert("삭제할 항목 SelectPlz");
  }

  //체크Out 빼고 다시 창고에 저장
  const checkedIds = Array.from(checkboxes).map(cb => Number(cb.closest('tr').dataset.id));
  myExpenses = myExpenses.filter(item => !checkedIds.includes(item.id));

  localStorage.setItem("expenseData", JSON.stringify(myExpenses));
  renderWhiteboard(myExpenses);
});

