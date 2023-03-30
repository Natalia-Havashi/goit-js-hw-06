

const bntDecrement = document.querySelector("[data-action='decrement']");
const bntIncrement = document.querySelector("[data-action='increment']");
const spanValue = document.querySelector("#value");
  
  let counterValue = 0;

  const decrementBtnClick = () => {
    counterValue -= 1;
    value.textContent = counterValue;
  };
  
  const incrementBtnClick = () => {
    counterValue += 1;
    spanValue.textContent = counterValue;
  };
  
  bntDecrement.addEventListener("click", decrementBtnClick);
  bntIncrement.addEventListener("click", incrementBtnClick);
