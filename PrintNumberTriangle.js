function printNumberTriangle(totalRows) {
  let currentNumber = 1;

  for (let row = 1; row <= totalRows; row++) {  
    let outputRow = "";

    for (let col = 1; col <= row; col++) {      
      outputRow += currentNumber;

      if (col < row) {                          
        outputRow += " ";
      }

      currentNumber++;
    }

    console.log(outputRow);                     
  }
}

printNumberTriangle(5);