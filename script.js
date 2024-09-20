pwd = [
  "1001",
  "2212",
  "9876",
  "3103",
  "9797",
  "2112",
  "4321",
  "0203",
  "3003",
  "6769",
  "2545",
  "8192",
  "4826",
  "7531",
  "1980",
  "1945",
  "6398",
  "7935",
  "8426",
  "9146",
  "3579",
  "1947",
  "9204",
  "4729",
  "1937",
  "7462",
  "5391",
  "8361",
];

function func(ele, password) {
  let foo = prompt("Enter password");
  var id = ele.id;
  console.log(id);
  console.log(foo);
  if (foo == null) {
    return;
  }
  if (foo == password) {
    window.alert("correct");
    document.getElementById(String(id)).className = "card-finished";
    document.getElementById(String(id)).removeAttribute("onclick");
  } else {
    window.alert("wrong");
  }
  return;
}

document.onkeydown = (e) => {
  if (e.key == 123) {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == "I") {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == "C") {
    e.preventDefault();
  }
  if (e.ctrlKey && e.shiftKey && e.key == "J") {
    e.preventDefault();
  }
  if (e.ctrlKey && e.key == "U") {
    e.preventDefault();
  }
};
