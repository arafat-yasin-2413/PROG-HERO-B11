const completedButtons = document.querySelectorAll(".completed-btn");

// taskassigned , totaltask er html ke dhorlam
const taskAssigned = document.getElementById("task-assigned");
const totalTask = document.getElementById("total-task");

// activity div ke dhori
activityDiv = document.getElementById("activity-div");

// button gular upore loop chalai

// last card paisi kina check korar jonno
let count = 0;

for (let i = 0; i < completedButtons.length; i++) {
	let button = completedButtons[i];
	// console.log(button);
	button.addEventListener("click", function () {
		// showing alert
		alert("Board updated successfully");

		// console.log("okay te click korar por dekhacchi...");
		// ok te click korar por nicher kaj gulo hobe

		
        

        // ei button jei card er
        // setar title dhortesi
		let dynamicCardTitleId = `card-title-${i + 1}`;
		let cardTitle = document.getElementById(dynamicCardTitleId).innerText;



        
        // protibar number gulo ke dhori
		let taskAssignedInt = parseInt(taskAssigned.innerText);
		let totalTaskInt = parseInt(totalTask.innerText);

		// protibar number gulo ke update kori
		taskAssigned.innerText = taskAssignedInt - 1;
		totalTask.innerText = totalTaskInt + 1;

		// activity te likha add kori
		const liveTime = new Date().toLocaleTimeString();
		activityDiv.innerHTML += `
            <p class="bg-[#F4F7FF] text-sm p-2 rounded mb-6">
                You have completed the task <b>"${cardTitle}"</b> at ${liveTime}
            </p>
        `;

		// button ta disable kori
		button.disabled = true;
		button.classList.add("opacity-50", "cursor-not-allowed", "bg-gray-400");
        count++;

        if(count === 6) {
            alert('Congrats!!! You have completed all the current task')
        }

	});
}
