function signup() {


	let Username = document.getElementById("name").value;
	let UserEmail = document.getElementById("Email").value;
	let password = document.getElementById("Password").value;
	// console.log(Username);
	// console.log(UserEmail);
	// console.log(password);
	let person = {
		UserName: Username,
		UserEmail: UserEmail,
		UserPassword: password,
	};

	let teamdata = JSON.parse(localStorage.getItem("persons")) || [];
	teamdata.push(person);
	localStorage.setItem("persons", JSON.stringify(teamdata));


}
function Login() {
	let Username = document.getElementById("Username").value;
	let password = document.getElementById("UserPassword").value;


	let teamdata = JSON.parse(localStorage.getItem("persons")) || [];
	let flag = false;

	teamdata.forEach((item, index) => {
		// console.log(item.UserName);
		console.log(item.UserPassword);
		console.log(index);
		if (Username === item.UserEmail && password === item.UserPassword) {
			
			flag = true;

			localStorage.setItem("personIndex",index);
			window.location.href = "../project_task/welcome.html";

		}
	});
	if (flag == false ){
		console.log("error");
	}

}
