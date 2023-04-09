import Hello from "./Hello.js";
function App() {
  return React.createElement(
    "div",
    { style: { backgroundColor: "#46B1DE" }, className: "wrapper" },
    React.createElement(Hello, null),
    React.createElement(
      "button",
      { onClick: function onClick() {
          return console.log("Click on button");
        } },
      "Button"
    )
  );
}
var domContainer = document.querySelector("#root");
var root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(App, null));

// Task 1

// let usersNames = ["Mike", "Bob", "Nikola"];
// let users = {};

// [users.mike, users.bob, users.nikola] = usersNames;

// console.log(users);

// Task 2

// let salaries = {
//   Mike: 1500,
//   Bob: 1800,
//   Nikola: 1700,
// };

// function maxSalary(salaries) {
//   let max = 0;
//   for (const [key, value] of Object.entries(salaries)) {
//     if (value > max) {
//       max = value;
//     }
//   }
//   return max;
// }

// console.log(maxSalary(salaries));

// Task 3

// let users = { mike: "Mike", bob: "Bob", nikola: "Nikola" };

// let { mike: userMike, bob: userBob, nikola: userNikola } = users;

// console.log(`userMike: ${userMike}`);
// console.log(`userBob: ${userBob}`);
// console.log(`userNikola: ${userNikola}`);