const input = document.querySelector("#input");
const inputButton = document.querySelector("#inputButton");
const inputCheck = document.querySelector("#inputCheck");
const inputImage = document.querySelector("#inputImage");
const inputText = document.querySelector("#inputText");


inputText.addEventListener("change", function(e) {
    // set to the width of the image
    inputImage.style.width = inputText.value + "px";

});
// read the inputText as a url and set it as the image src
input.addEventListener("change", function(e) {
    inputImage.src = URL.createObjectURL(input.files.item(0));
});


// listen for inputCheck to be checked
// inputCheck.addEventListener("change", function() {
//     if (inputCheck.checked) {
//         console.log("checked");
//     }
//     if (!inputCheck.checked) {
//             console.log("unchecked");
//         }
//     });

// // 
// inputButton.addEventListener("click", () => {
//     // output hello world
//     console.log("Hello World");
// });


// input.addEventListener("change", () => {
//   const file = input.files.item(0);
//   fileToText(file, (text) => {
//     console.log(text);
//     save(text, "fileName.txt", "text/plain");
//   });
// });

function fileToText(file, callback) {
  const reader = new FileReader();
  reader.readAsText(file);
  reader.onload = () => {
    callback(reader.result);
  };
}

function save(content, fileName, mime) {
  const blob = new Blob([content], {
    tipe: mime
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  a.click();
  //console.log(a);
}
