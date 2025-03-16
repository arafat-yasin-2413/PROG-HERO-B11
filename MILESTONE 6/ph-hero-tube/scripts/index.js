const showLoader = () => {
    document.getElementById('loader').classList.remove('hidden');
    document.getElementById('video-container').classList.add('hidden');
};

const hideLoader = () => {
    document.getElementById('loader').classList.add('hidden');
    document.getElementById('video-container').classList.remove('hidden');
};



function loadData() {
	fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
		.then((res) => res.json())
		.then((data) => displayCategories(data.categories));
}

function removeActiveClass() {
    const activeButtons = document.getElementsByClassName("active");
    // console.log(activeButtons);

    for (let btn of activeButtons) {
        btn.classList.remove('active');
    }
}



function displayCategories(categories) {
	// get the container
	const categoryContainer = document.getElementById("category-container");

	// loop operation on array of objects
	for (let cat of categories) {
		// create element
		// console.log(cat.category_id);
		const categoryDiv = document.createElement("div");
		categoryDiv.innerHTML = `
            <button id="btn-${cat.category_id}" onclick="loadCategoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>

        `;
		// append element

		categoryContainer.appendChild(categoryDiv);
	}
}

function loadVideos(searchText="") {
    showLoader();
	fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
		.then((response) => response.json())
		.then((data) => {
            removeActiveClass();
            document.getElementById('btn-all').classList.add("active");
            displayVideos(data.videos);
        });
}

const loadCategoryVideos = (id) => {
    showLoader();
	// console.log(id);

	const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;

	fetch(url)
		.then((response) => response.json())
		.then((data) => {
            removeActiveClass();
            const clickedButton = document.getElementById(`btn-${id}`);
            // console.log(clickedButton);
            clickedButton.classList.add("active");
            displayVideos(data.category);
        })
            
    
};


const loadVideoDetails = (videoId) => {
    // console.log(videoId);    

    const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        displayVideoDetails(data.video);
    })
};


const displayVideoDetails=(video)=>{
    console.log(video);
    document.getElementById('video_details').showModal();

    const detailsContainer = document.getElementById('details-container');

    detailsContainer.innerHTML = `
        <h2>${video.title}</h2>
    
    `;

};


const displayVideos = (videos) => {
	const videoContainer = document.getElementById("video-container");
    videoContainer.innerHTML = '';

    if (videos.length === 0) {
        videoContainer.innerHTML = `
            <div class="col-span-full flex flex-col justify-center items-center py-20">
                <img class="w-[120px]" src="./assets/images/Icon.png" alt="">
                <h2 class="text-2xl font-bold">Oops!! Sorry, There is no content here</h2>
            </div>
        `;
        hideLoader();
        return;
    }

	videos.forEach((video) => {
		// console.log(video);

		let timeInSeconds = video.others.posted_date;
        let hour = Math.floor(timeInSeconds / 3600);
        let minute = Math.floor( (timeInSeconds % 3600) / 60);
        

		const videoCard = document.createElement("div");
		videoCard.innerHTML = `
            <div class="card bg-base-100 ">

                <figure class="relative">
                    <img class="h-[150px] w-full object-cover   " src="${video.thumbnail}" alt="thumbnail" />

                    <span class="absolute bottom-2 right-2 bg-black text-white text-sm px-2 rounded opacity-70">${hour}hrs ${minute} min
                        ago</span>
                </figure>

                <div class="flex gap-3 px-0 py-5">
                    <div>
                        <div class="avatar">
                            <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                                <img src="${video.authors[0].profile_picture}" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 class="text-sm font-semibold">${video.title}</h2>
                        <p class="text-sm text-gray-400 flex gap-1">${video.authors[0].profile_name}
                             
                            ${video.authors[0].verified === true ? `<img class="w-5 h-5"
                           src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt="">` : `` }  
                        
                        </p>
                        <p class="text-sm text-gray-400">${video.others.views} views</p>
                    </div>

                </div>

                <button onclick = loadVideoDetails('${video.video_id}') class="btn btn-block">Show Details</button>
            </div>
        `;

        // <span class="verified-span"></span> 
        // if(video.authors[0].verified) {
        //     // console.log('this is verifid');
        //     const verifiedSpan = videoCard.querySelector('.verified-span')
        //     verifiedSpan.innerHTML = `
        //         <img class="w-5 h-5"
        //                     src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt="">
        //     `
        // }


		videoContainer.appendChild(videoCard);
        hideLoader();
	});
};



// const displayCategoryVideos = (videos) => {
// 	console.log(videos);

//     const videoContainer = document.getElementById("video-container");
//     videoContainer.innerHTML = '';

//     if (videos.length === 0) {
//         videoContainer.innerHTML = `
//             <div class="col-span-full flex flex-col justify-center items-center py-20">
//                 <img class="w-[120px]" src="./assets/images/Icon.png" alt="">
//                 <h2 class="text-2xl font-bold">Oops!! Sorry, There is no content here</h2>
//             </div>
//         `;
//         return;
//     }

// 	videos.forEach((video) => {
// 		console.log(video);

// 		let timeInSeconds = video.others.posted_date;

// 		const videoCard = document.createElement("div");
// 		videoCard.innerHTML = `
//             <div class="card bg-base-100 ">

//             <figure class="relative">
//                 <img class="h-[150px] w-full object-cover   " src="${video.thumbnail}" alt="thumbnail" />

//                 <span class="absolute bottom-2 right-2 bg-black text-white text-sm px-2 rounded opacity-70">3hrs 56 min
//                     ago</span>
//             </figure>

//             <div class="flex gap-3 px-0 py-5">
//                 <div>
//                     <div class="avatar">
//                         <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
//                             <img src="${video.authors[0].profile_picture}" />
//                         </div>
//                     </div>
//                 </div>

//                 <div>
//                     <h2 class="text-sm font-semibold">Midnight Serenade</h2>
//                     <p class="text-sm text-gray-400 flex gap-1">${video.authors[0].profile_name}<img class="w-5 h-5"
//                             src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt=""></p>
//                     <p class="text-sm text-gray-400">${video.others.views} views</p>
//                 </div>
//             </div>
//         </div>
//         `;

// 		videoContainer.appendChild(videoCard);
// 	});
// };




document.getElementById('search-input').addEventListener('keyup', (event) => {
    const input = (event.target.value);
    loadVideos(input);
});

loadData();
