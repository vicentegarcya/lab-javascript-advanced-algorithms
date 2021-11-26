const stackList = document.getElementById('stack-list');
const stackInput = document.getElementById('stack-input');
const container = document.getElementById('container');
const warningTopStack = document.querySelector('#stack-container .warning-top');
const warningBottomStack = document.querySelector(
  '#stack-container .warning-bottom'
);
const addStackBtn = document.getElementById('add-stack');
const takeStackBtn = document.getElementById('take-stack');

const newStack = new Stack();

const clearStackInput = () => {
  stackInput.value = '';
};

const renderListStack = () => {
    const child = document.createElement('li');
    child.innerText = stackInput.value;
    stackList.appendChild(child);
};

const generateWarningStack = (type) => {
  if (type === 'underflow') {

  } else if (type === 'overflow') {

  }
};

const addToStack = () => {
  try {
    newStack.push(stackInput.value);
    renderListStack();
    clearStackInput();
  } catch (error) {
    console.log(error);
  }
};

const removeFromStack = () => {
  try {
    newStack.pop();
    stackList.removeChild(stackList.lastChild);
  } catch (STACK_UNDERFLOW) {
    console.log(error);
  }
};



addStackBtn.addEventListener('click', addToStack);
takeStackBtn.addEventListener('click', removeFromStack);
