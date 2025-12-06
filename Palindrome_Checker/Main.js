const input = document.getElementById("input");
const result = document.getElementById("result");
const checkBtn = document.getElementById("checkBtn");

function reverseString(str) {
  return str.split("").reverse().join("");
}

function isPalindrome(str) {
  // Remove spaces and non-alphanumeric characters, convert to lowercase
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversed = reverseString(cleaned);
  return cleaned && cleaned === reversed;
}

function check() {
  const value = input.value.trim();

  if (!value) {
    result.textContent = "Please type something first.";
    result.className = "result-message result-error";
    return;
  }

  if (isPalindrome(value)) {
    result.textContent = `"${value}" is a palindrome 🎉`;
    result.className = "result-message result-success";
  } else {
    result.textContent = `"${value}" is not a palindrome ❌`;
    result.className = "result-message result-error";
  }

  input.value = "";
  input.focus();
}

// Button click
checkBtn.addEventListener("click", check);

// Enter key support
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    check();
  }
});
