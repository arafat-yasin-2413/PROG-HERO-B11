const showLoader = () => {
	document.getElementById("loader-section").classList.remove("hidden");
	document.getElementById("card-container").classList.add("hidden");
};

const hideLoader = () => {
	document.getElementById("loader-section").classList.add("hidden");
	document.getElementById("card-container").classList.remove("hidden");
};

const loginValidation = () => {
	const name = document.getElementById("name").value;
	const password = parseInt(document.getElementById("pass").value);
	const getStartedButton = document.getElementById("get-started-btn");

	console.log(name);
	console.log(password);
	console.log(getStartedButton);

	if (!name) {
		alert("Please enter a name");
	}
	if (password !== 123456) {
		alert("Incorrect password");
	}

	if (name && password === 123456) {
		alert("Login Successfull");
		const bannerSection = document
			.getElementById("banner")
			.classList.add("hidden");
		const navBar = document
			.getElementById("navbar")
			.classList.remove("hidden");
		const vocabulary = document
			.getElementById("vocabulary-section")
			.classList.remove("hidden");
		const faqSection = document
			.getElementById("faq-section")
			.classList.remove("hidden");
		loadButtons();
		hideCardContainer();
		const loaderSection = document
			.getElementById("loader-section")
			.classList.add("hidden");
	}
};

const logOutFunctionality = () => {
	const navBar = document.getElementById("navbar").classList.add("hidden");
	const vocabulary = document
		.getElementById("vocabulary-section")
		.classList.add("hidden");
	const faqSection = document
		.getElementById("faq-section")
		.classList.add("hidden");
};

const loadButtons = () => {
	fetch("https://openapi.programming-hero.com/api/levels/all")
		.then((response) => response.json())
		.then((data) => displayButtons(data.data));
};

const displayButtons = (buttons) => {
	const buttonContainer = document.getElementById("button-container");

	for (let button of buttons) {
		// console.log(button.level_no);
		const singleId = button.id % 100;
		// console.log(singleId);

		const singleButtonDiv = document.createElement("div");
		singleButtonDiv.innerHTML = `
            <button onclick = "loadWordsByLevel(${button.level_no},${button.id})" id="btn-${button.id}" class="btn text-[#422AD5] btn-outline hover:bg-[#422AD5] hover:text-white">
                <i class="fa-solid fa-book-open"></i>
                Lesson - ${singleId}
            </button>
        `;

		buttonContainer.appendChild(singleButtonDiv);
	}
};

const showCardContainer = () => {
	document.getElementById("card-container").classList.remove("hidden");
};

const hideCardContainer = () => {
	document.getElementById("card-container").classList.add("hidden");
};

const removeActiveClass = () => {
	const activeButtons = document.getElementsByClassName("active");
	// console.log('call hoisi');
	// console.log(activeButtons);

	for (let button of activeButtons) {
		// console.log('active class remove korte aschi.');
		button.classList.remove("active");
		// console.log('active class remove done');
	}
};

const loadWordsByLevel = (levelNo, buttonId) => {
	// console.log(levelNo);

	showLoader();

	console.log(buttonId);
	const url = `https://openapi.programming-hero.com/api/level/${levelNo}`;
	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			removeActiveClass();
			const clickedButton = document.getElementById(`btn-${buttonId}`);
			clickedButton.classList.add("active");
			const selectLesson = document
				.getElementById("select-lesson")
				.classList.add("hidden");
			displayWordsByLevel(data);
		});
};

const displayWordsByLevel = (allWordsData) => {
	const cardContainer = document.getElementById("card-container");
	// console.log(allWordsData);
	// console.log(allWordsData.data); // array of objects
	// console.log(allWordsData.data.length);

	if (allWordsData.data.length === 0) {
		cardContainer.innerHTML = `
            <!-- এই লেসনে ডাটা নেই -->
            <div id="no-data-alert" class="bg-[#F8F8F8] flex justify-center grid col-span-full items-center rounded-xl py-16 mt-10">

                <div class="flex flex-col items-center">

                    <img src="./assets/alert-error.png" alt="">
                    <p class="text-sm text-center hind-siliguri text-[#79716B] mb-6">
                        এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।
                    </p>

                    <p class="font-medium hind-siliguri text-4xl text-center">
                        নেক্সট Lesson এ যান
                    </p>
                </div>

            </div>
        `;
		hideLoader();
		return;
	}

	showCardContainer();
	cardContainer.innerHTML = "";

	for (word of allWordsData.data) {
		// console.log(word);

		const card = document.createElement("div");
		card.innerHTML = `
            <div class="card shadow-lg bg-base-100 hover:bg-sky-100">
                <div class="flex flex-col items-center border-sky-100 border-2 rounded-md m-2">
                
                    <p class="card-title mb-3 mt-10 font-bold text-3xl">${
						word.word
					}</p>

                    <p class="mb-3 text-xl font-medium inter">
                        Meaning / Pronunciation
                    </p>

                    <p class="text-3xl font-bold hind-siliguri mb-6"> 
                        ${
							word.meaning === null
								? `"<span class='hind-siliguri'>অর্থ নেই</span> / ${word.pronunciation}"`
								: `"${word.meaning} / ${word.pronunciation}"`
						}
                        
                    </p>

                    <div class="flex justify-between px-16 mt-6 mb-16 w-full">

                        <p onclick = "loadCardDetails(${word.id})" class="bg-blue-100 hover:bg-amber-400 rounded-md px-3 py-2">
                            <i class="fa-solid fa-circle-info fa-lg"></i>
                        </p>


                        <p class="bg-blue-100 rounded-md px-3 py-2">
                            <i class="fa-solid fa-volume-high fa-lg"></i>
                        </p>


                    </div>

                </div>



            </div>
        
        `;

		cardContainer.appendChild(card);
		hideLoader();
	}
};

const loadCardDetails = (wordId) => {
	console.log(wordId);
	const url = `https://openapi.programming-hero.com/api/word/${wordId}`;

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
			displayCardDetails(data);
		});
};

const displayCardDetails = (data) => {
	console.log(data.data);
	document.getElementById("card_details").showModal();
	console.log(data.data.synonyms.length);

	const detailsContainer = document.getElementById("details-container");

	detailsContainer.innerHTML = `
        <div class="card bg-base-100 shadow-sm p-4 max-w-full">
            <div class="border border-blue-200 p-4 rounded-md">
                <h2 class="card-title font-semibold text-2xl mb-4">
                    ${data.data.word}
                    <span class="flex gap-1">

                        ( <i class="fa-solid fa-microphone-lines"></i> :${
							data.data.pronunciation
						} )
                        
                    </span>
                </h2>
                
                <div class="mb-6">
                    <h5 class="font-semibold text-lg mb-3">
                        Meaning
                    </h5>
    
                    <h4 class=" text-lg font-medium hind-siliguri">
                        ${data.data.meaning === null ? `<span class="hind-siliguri">অর্থ নেই</span>` : data.data.meaning }

                    </h4>
                </div>

                <div class="mb-6">
                    <h4 class="font-semibold text-lg mb-2">
                        Example
                    </h4>
    
                    <p class="font-normal">
                        ${data.data.sentence}
                    </p>
                </div>
                

                <div class="mb-2">
                    <h4 class="font-medium hind-siliguri text-lg mb-3">
                        সমার্থক শব্দ গুলো
                    </h4>
    
                    <p class="flex flex-wrap gap-4">
                        ${
							data.data.synonyms.length === 0
								? `<span class="hind-siliguri">সমার্থক শব্দ নেই</span>`
								: data.data.synonyms
										.map(
											(synonym) =>
												`<button class="btn text-sm font-normal btn-sm bg-[#EDF7FF] rounded-md">${synonym}</button>`
										)
										.join(" ")
						}
                        
                    </p>
                </div>
            
            </div>


            <div class="modal-action flex justify-start">
                <form method="dialog">

                    <button class="btn bg-[#422AD5] hover:bg-green-500  text-white font-medium rounded-md">Complete Learning</button>
                </form>
            </div>
        </div>  
    `;
};

// hideCardContainer();
// loadButtons();

document.getElementById("no-data-alert").classList.remove("hidden");
