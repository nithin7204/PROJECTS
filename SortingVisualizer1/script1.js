const ctx = myCanvas.getContext("2d");
myCanvas.width = 800;
myCanvas.height = 400;
const margin = 30;

const n = 20;
const array = [];
let moves = [];
const cols = [];
const spacing = (myCanvas.width - margin * 2) / n;
const maxColumnHeight = 300;
let animationSpeed = 5;
let animationFrameId;

function init() {
    cancelAnimationFrame(animationFrameId);  // Ensure the previous animation is cancelled
    array.length = 0;
    moves.length = 0;
    for (let i = 0; i < n; i++) {
        array[i] = Math.random();
    }
    for (let i = 0; i < array.length; i++) {
        const x = i * spacing + spacing / 2 + margin;
        const y = myCanvas.height - margin - i * 3;
        const width = spacing - 4;
        const height = maxColumnHeight * array[i];
        cols[i] = new Column(x, y, width, height);
        cols[i].draw(ctx);
    }
    updateDescription();
}

function play() {
    const algorithmSelect = document.getElementById("algorithmSelect");
    const selectedAlgorithm = algorithmSelect.value;

    if (selectedAlgorithm === "insertionSort") {
        moves = insertionSort(array.slice());  // Pass a copy of the array
    } else if (selectedAlgorithm === "bubbleSort") {
        moves = bubbleSort(array.slice());
    } else if (selectedAlgorithm === "selectionSort") {
        moves = selectionSort(array.slice());
    }

    animate();
}

function pause() {
    cancelAnimationFrame(animationFrameId);
}

function reset() {
    cancelAnimationFrame(animationFrameId);
    init();
}

function updateSpeed(value) {
    animationSpeed = 11 - value;
}

function insertionSort(array) {
    const moves = [];
    for (let i = 1; i < array.length; i++) {
        const key = array[i];
        let j = i - 1;
        moves.push({ indices: [i], swap: false, key: true });
        while (j >= 0 && array[j] > key) {
            moves.push({ indices: [j, j + 1], swap: true, key: false });
            array[j + 1] = array[j];
            j--;
        }
        moves.push({ indices: [j + 1], swap: false, key: true });
        array[j + 1] = key;
    }
    return moves;
}

function bubbleSort(array) {
    const moves = [];
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                moves.push({ indices: [j, j + 1], swap: true });
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
            } else {
                moves.push({ indices: [j, j + 1], swap: false });
            }
        }
    }
    return moves;
}

function selectionSort(array) {
    const moves = [];
    for (let i = 0; i < array.length - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIdx]) {
                minIdx = j;
            }
        }
        if (minIdx !== i) {
            moves.push({ indices: [i, minIdx], swap: true });
            [array[i], array[minIdx]] = [array[minIdx], array[i]];
        }
    }
    return moves;
}

function animate() {
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
    let changed = false;
    for (let i = 0; i < cols.length; i++) {
        changed = cols[i].draw(ctx) || changed;
    }
    if (!changed && moves.length > 0) {
        const move = moves.shift();
        const [i, j] = move.indices;

        if (move.swap) {
            cols[i].moveTo(cols[j]);
            cols[j].moveTo(cols[i], -1);
            [cols[i], cols[j]] = [cols[j], cols[i]];
        } else if (move.key) {
            cols[i].highlightKey();
        }
    }
    animationFrameId = requestAnimationFrame(() => setTimeout(animate, animationSpeed * 10));
}

function updateDescription() {
    const description = document.getElementById('description');
    const algorithmSelect = document.getElementById("algorithmSelect");
    const selectedAlgorithm = algorithmSelect.value;
    let text = '';

    if (selectedAlgorithm === 'insertionSort') {
        text = 'Insertion Sort is a simple sorting algorithm that builds the final sorted array one item at a time.';
    } else if (selectedAlgorithm === 'bubbleSort') {
        text = 'Bubble Sort is a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.';
    } else if (selectedAlgorithm === 'selectionSort') {
        text = 'Selection Sort is a simple sorting algorithm that divides the input list into two parts: the sublist of items already sorted and the sublist of items remaining to be sorted.';
    }

    description.innerText = text;
}

document.getElementById('algorithmSelect').addEventListener('change', updateDescription);
