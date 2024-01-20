//your JS code here. If required.
        function generateNumbersArray() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([1, 2, 3, 4]);
                }, 3000);
            });
        }

        // Function to filter out odd numbers from an array after 1 second
        function filterOddNumbers(arr) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const filteredArray = arr.filter(num => num % 2 === 0);
                    resolve(filteredArray);
                }, 1000);
            });
        }

        // Function to multiply even numbers by 2 from an array after 2 seconds
        function multiplyEvenNumbersBy2(arr) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const multipliedArray = arr.map(num => num % 2 === 0 ? num * 2 : num);
                    resolve(multipliedArray);
                }, 2000);
            });
        }

        // Function to update the text of an HTML element with an ID of "output"
        function updateOutputText(text) {
            const outputElement = document.getElementById('output');
            outputElement.textContent = text;
        }

        // Chain promises and update the HTML element
        generateNumbersArray()
            .then(numbersArray => {
                updateOutputText(`Original Array: [${numbersArray.join(', ')}]`);
                return filterOddNumbers(numbersArray);
            })
            .then(filteredArray => {
                updateOutputText(`Filtered Array (Even Numbers Only): [${filteredArray.join(', ')}]`);
                return multiplyEvenNumbersBy2(filteredArray);
            })
            .then(finalArray => {
                updateOutputText(`Final Result: [${finalArray.join(', ')}]`);
            })
            .catch(error => {
                console.error('An error occurred:', error);
            });