//Travanti Lipson Jr
// Palindrome Checking Function
function checkPalindrome() 
{
    // recieves user input
    let inputText = document.getElementById("userInput").value;
    
    // removes the spaces and converts text to lowercase
    let cleanText = "";
    for (let i = 0; i < inputText.length; i++) 
    {
        // Only add characters that are not spaces
        if (inputText[i] !== " ") 
        {
            // change each character to lowercase and add to cleanText
            cleanText += inputText[i].toLowerCase();
        }
    }

    // Checks if the cleaned text is a palindrome
    let isPalindrome = true;  // Flag to track if the text is a palindrome
    let length = cleanText.length;
    
    for (let i = 0; i < length / 2; i++) 
    {
        // compares text from the start and end
        if (cleanText[i] !== cleanText[length - 1 - i]) 
        {
            // not a palindrome flag
            isPalindrome = false;
            break;
        }
    }

    // Display message text
    let resultMessage = document.getElementById("resultMessage");
    if (isPalindrome) 
    {
        resultMessage.textContent = `"${inputText}" is a palindrome! ✅`;
        resultMessage.style.color = "green";
    } 
    
    else 
    {
        resultMessage.textContent = `"${inputText}" is not a palindrome. ❌`;
        resultMessage.style.color = "red";
    }
}
