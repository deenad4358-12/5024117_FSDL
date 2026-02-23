const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout});
function validatePassword(password) {
  if (password.length < 6) {
    return "Password must be at least 6 characters";}
  return "Valid Password";}
rl.question("Enter password: ", function(password) {
  let result = validatePassword(password);
  console.log(result);
  rl.close();});