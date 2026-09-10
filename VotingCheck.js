function checkVoting(age) {
  if (age >= 18) {
    return "✅ Yes, You can VOTE!";
  } else {
    let wait = 18 - age;
    return `❌ No, You cannot vote. Wait ${wait} more years.`;
  }
}

// Test karo
console.log(checkVoting(20)); // ✅ Yes, You can VOTE!
console.log(checkVoting(16)); // ❌ No, You cannot vote. Wait 2 more years.

// User se input lena ho to
let userAge = prompt("Enter your age:");
alert(checkVoting(userAge));
