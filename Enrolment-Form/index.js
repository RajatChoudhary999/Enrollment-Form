const LOCAL_RECORDS = "LOCAL_RECORDS";
const enrollmentForm = document.getElementById("enrollment-form");
const enrollmentRecords = document.getElementById("enrollment-records");



// Creating data and storing it
const handleSumbit = (e) => {

    // Preventing from refreshing
    e.preventDefault();
    
    var formInput = enrollmentForm;
    var name = formInput.name.value;
    var email = formInput.email.value;
    var gender = formInput.gender.value;
    var website = formInput.website.value;
    var imageLink = formInput.imageLink.value;
    var skills = [];
    if (document.getElementById("java").checked) {
        skills.push("Java")
    }
    if (document.getElementById("html").checked) {
        skills.push("HTML")
    }
    if (document.getElementById("css").checked) {
        skills.push("CSS")
    }

    const rec = {name, email, gender, website, imageLink, skills}
    
    // console.log(rec.skills([0]));
    
    //Adding new enrollment
    addNewEnrollment(rec);


    //Resseting the form
    e.target.reset();
}

// Adding new  data
const addNewEnrollment = (rec) =>{

    // console.log(rec);

    const {name, email, gender, website, imageLink, skills} = rec;

    // console.log(rec.skills[1]);
    newData =
        `
        <tr class="record">
          <td class="border-end">
                <div>
                    <p class="m-0"><b>${name}</b></p>
                    <p class="m-0">${email}</p>
                    <a class="m-0" target="_blank" href=${website}>
                        Website
                    </a>
                    <p class="m-0">${gender}</p>
                    <p>${skills.join()}</p>
                </div>
          </td>
          <td>
                <div class="h-100 w-100">
                    <img
                        src=${imageLink}
                        class="img-thumbnail w-100 h-100 border "
                        alt="image"
                    />
                </div>
            </td>
        </tr>
    `;

    // saving data to local storage
    storeRecords(newData);

    // showRecords();
    showRecords(newData);
}



// Function to store records
const storeRecords = (data) => {
    const prevRecords = getStoredRecords();
    arr = prevRecords ? JSON.parse(prevRecords) : []
    arr.push(data);
    localStorage.setItem(LOCAL_RECORDS, JSON.stringify(arr));
}

// Function to fetch records
const getStoredRecords = () =>{
    return localStorage.getItem(LOCAL_RECORDS);
    }


// Function to display record
const showRecords = (data) => {
    const td1 = enrollmentRecords;
    td1.innerHTML += data;
    // localStorage.clear();

}



    