let myObj = {
	name: "John Doe",
	age: 25,
	city: "Example City",
	isStudent: true,
};


for (let obj in myObj) {
    console.log(obj,' : ',myObj[obj], ' | ', 'type: ', typeof myObj[obj]);
}