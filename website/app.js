// const fetch = require('node-fetch'); 


// async function 

// async function submitData() {
//     const animalValue = document.getElementById('animalInput').value;
//     if (animalValue) {
//         const result = await postData('http://localhost:3000/animal', { animal: animalValue });
//         console.log(result);
//     } else {
//         console.log("Please enter an animal name.");
//     }
// }


    


// Function to POST data 
// const postData = async (url = '', data = {}) => {
//     console.log(data)
//     const response = await fetch(url, {
//         method: 'POST', // *GET, POST, PUT, DELETE, etc.
//         credentials: 'same-origin', // include, *same-origin, omit
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(data), // body data type must match "Content-Type" header        
//     });

//     try {
//         const newData = await response.json();
//         // console.log(newData);
//         return newData
//     } catch (error) {
//         console.log("error", error);
//         // appropriately handle the error
//     }
// }

// TODO-Call Function

// postData('/addAnimal', { animal: 'lion' });