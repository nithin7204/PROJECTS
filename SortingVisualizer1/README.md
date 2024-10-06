# Sorting Algorithm Visualizer

This is a web-based **Sorting Algorithm Visualizer** that allows you to understand and visualize the execution of different sorting algorithms in real-time. It provides a user-friendly interface where you can select an algorithm, control the speed of the animation, and visualize how the algorithm sorts an array.

## Features

- **Interactive Visualization**: Select a sorting algorithm and visualize the sorting process in real-time.
- **Multiple Sorting Algorithms**:
  - Insertion Sort
  - Bubble Sort
  - Selection Sort
- **Control Speed**: Adjust the speed of the animation using a slider.
- **Play, Pause, and Reset**: Control the flow of the animation with buttons.
- **Responsive Design**: The layout adapts to various screen sizes for an optimal user experience.

## Technologies Used

- **HTML5 Canvas**: For rendering the visual representation of the sorting process.
- **JavaScript**: For handling the algorithms, animation, and user interaction.
- **CSS**: For styling and providing a visually appealing interface.

## Project Structure

The project is organized into the following files:

- **`index1.html`**: The main HTML file that sets up the page structure, including the canvas for rendering the sorting animations, control buttons, and dropdown for selecting sorting algorithms.
  
- **`style1.css`**: Contains the styling for the page. It includes styling for the layout, header, buttons, and canvas. This file ensures that the visualizer has a clean and responsive design.

- **`script1.js`**: The main JavaScript file responsible for:
  - Initializing the canvas and the array to be sorted.
  - Handling the animation and visualization of different sorting algorithms.
  - Implementing the logic for `insertionSort`, `bubbleSort`, and `selectionSort` algorithms.
  - Handling user interactions such as Play, Pause, and Reset.
  
- **`math.js`**: A utility file that contains helper functions like `lerp` (linear interpolation) used for smooth animation of column transitions.

- **`column.js`**: This file defines the `Column` class, which is used to represent each bar or column in the visualizer. It handles the properties and methods related to drawing and animating the columns during the sorting process.

- **`bgm_image.jpg`**: (Optional) The background image used for styling the page. The file is referenced in the CSS for a visually appealing background.

## How to Run

1. Download or clone the repository to your local machine.
2. Open the `index1.html` file in any modern web browser.
3. Select a sorting algorithm from the dropdown menu, then click the **Play** button to start the visualization.
4. Use the **Speed** slider to adjust the animation speed.
5. You can pause or reset the visualization using the respective buttons.

## Future Improvements

- **Add More Sorting Algorithms**: Incorporate additional algorithms like Merge Sort, Quick Sort, or Heap Sort.
- **Enhance Visual Effects**: Add more visual feedback during the sorting process, such as color changes to indicate comparisons and swaps.
- **Sound Effects**: Optionally, include sound effects that play when swaps occur to further enhance the user experience.
- **Mobile Optimization**: Improve the layout and interaction for smaller screen sizes for a better mobile experience.
