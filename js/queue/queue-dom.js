const queueUL = document.querySelector('.list-queue');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector(
  '#queue-container .warning-bottom'
);
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new Queue();

const clearQueueInput = () => {
  queueInput.value = '';
};

const generateListQueue = () => {
  const child = document.createElement('li');
  child.innerText = queueInput.value;
  queueUL.appendChild(child);
};

const generateWarningQueue = (type) => {
  if (type === 'underflow') {
    // ... your code goes here
  } else if (type === 'overflow') {
    // ... your code goes here
  }
};

const addToQueue = () => {
  try {
    queue.enqueue(queueInput.value);
    generateListQueue();
    clearQueueInput();
  } catch (error) {
    console.log(error);
  }
};

const removeFromQueue = () => {
  try {
    queue.dequeue();
    queueUL.removeChild(queueUL.firstChild);
  } catch (error) {
    console.log(error);
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
