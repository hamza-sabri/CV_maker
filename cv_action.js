var rounded = false;
var switchButton = document.getElementById('my_lever');
const informationCollectorDiv = document.getElementById('information_collector');
const pages = [];

let myUser = {
    uid: '',
    resumeTitle: '',
    firstName: '',
    lastName: '',
    address: '',
    nationality: '',
    birthDay: '',
    phoneNumber: '',
    email: '',
    website: '',
    linkedIn: '',
    gitHub: '',
    introduction: '',
    skills: [],
    languages: [],
    education: [],
    courses: [],
    projectLinks: [],
    experiences: [],
    other: '',
    summary: ''

};

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems);
});

var times = 0;
switchButton.addEventListener('click', function () {
    roundImage();
});

function roundImage() {
    times++;
    if (times % 2 == 1) return;
    times = 0;
    rounded = !rounded;
    const img = document.getElementById('profile_img');
    const img1 = document.getElementById('my_img');
    if (rounded) {
        img.src = "https://www.w3schools.com/howto/img_avatar.png";
        img.style.borderRadius = "50%";
        img.style.width = "90px";
        img1.src = "https://www.w3schools.com/howto/img_avatar.png";
        img1.style.borderRadius = "50%";
    } else {
        img.style.borderRadius = "10px";
        img1.style.borderRadius = "10px";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const elems = document.querySelectorAll('.datepicker');
    const instances = M.Datepicker.init(elems, true);
});
var pageIndex = 1;

function showNext() {
    if (pageIndex <= 0) {
        personalInfo()
        //initializing the date thing
        const elems = document.querySelectorAll('.datepicker');
        const instances = M.Datepicker.init(elems, true);

    } else if (pageIndex == 1) {
        /*
        * when going to the second page save the first one
        * */
        addPersonalInfoToMyUser();
        realTimeChanging('date');
        contacts();
    } else if (pageIndex == 2) {
        /*
        * when going to the second page save the first one
        * */
        addContactsToMyUser();
        introduction();
    } else if (pageIndex == 3) {
        /*
        * when going to the second page save the first one
        * */
        saveIntroductionToMyUser();
        skillsAndLanguages();
    } else if (pageIndex == 4) {
        /*
       * when going to the second page save the first one
       * */
        savingSkillsAndLanguagesToMyUser();
        educationAndCourses();
    } else if (pageIndex == 5) {
        savingEduAndCoursesToMyUser();
        projects();
    } else {
        savingprojectsAndExperiencesToMyUser();
        othersAndSummary();
    }
    inilization();
    pageIndex++;
    console.log(myUser);

}

function showPrevious() {
    pageIndex -= 2;
    showNext();
}

function personalInfo() {
    informationCollectorDiv.innerHTML = "<h2>Personal Information :</h2>\n" +
        "        <!-- data-position can be : bottom, top, left, or right -->\n" +
        "        <!-- data-tooltip defines the tooltip text -->\n" +
        "\n" +
        "        <span>Enter your contact information so employers know how to get in touch with you for interviews.</span>\n" +
        "        <div id=\"adding_img\">\n" +
        "            <div id=\"img_div\">\n" +
        "                <img alt=\"profile\" id=\"profile_img\" src=\"https://www.w3schools.com/howto/img_avatar.png\">\n" +
        "                <span>Profile Photo</span>\n" +
        "                <a href=\"#\">\n" +
        "                    <div id=\"container_of_rounded_div\">\n" +
        "                        <div id=\"rounded_div\">↑</div>\n" +
        "                        <pre>Add Image</pre>\n" +
        "                    </div>\n" +
        "                </a>\n" +
        "                <div class=\"switch\">\n" +
        "                    <label id=\"my_lever\">\n" +
        "                        <input id=\"my_lever_checkButton\" type=\"checkbox\">\n" +
        "                        <span class=\"lever\" id=\"lever\"></span>\n" +
        "                        round photo\n" +
        "                    </label>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div id=\"text_collector\">\n" +
        "            <div class=\"input-field col s6 tooltipped\" data-position=\"right\" data-tooltip=\"add only first name\">\n" +
        "                <input class=\"validate custom_input\" id=\"first_name\" oninput=\"realTimeChanging(this.id)\" type=\"text\">\n" +
        "                <label for=\"first_name\">First Name</label>\n" +
        "            </div>\n" +
        "            <div class=\"input-field col s5 tooltipped\" data-position=\"right\" data-tooltip=\"add your last name\">\n" +
        "                <input class=\"validate custom_input\" id=\"last_name\" oninput=\"realTimeChanging(this.id)\" type=\"text\">\n" +
        "                <label for=\"last_name\">Last Name</label>\n" +
        "            </div>\n" +
        "\n" +
        "            <div class=\"input-field col s5 tooltipped\" data-position=\"right\"\n" +
        "                 data-tooltip=\"what is your address in your country\">\n" +
        "                <input class=\"validate custom_input\" id=\"address\" oninput=\"realTimeChanging(this.id)\" type=\"text\">\n" +
        "                <label for=\"address\">Address</label>\n" +
        "            </div>\n" +
        "\n" +
        "            <div class=\"input-field col s5 tooltipped\" data-position=\"right\" data-tooltip=\"add your nationality here\">\n" +
        "                <input class=\"validate custom_input\" id=\"nationality\" oninput=\"realTimeChanging(this.id)\" type=\"text\">\n" +
        "                <label for=\"nationality\">Nationality</label>\n" +
        "            </div>\n" +
        "\n" +
        "\n" +
        "            <div class=\"input-field col s5 tooltipped\" data-position=\"right\" data-tooltip=\"select your birth day\">\n" +
        "                <input class=\"datepicker custom_input\" id=\"date\" onclick=\"realTimeChanging(this.id)\"\n" +
        "                       oninput=\"realTimeChanging(this.id)\"\n" +
        "                       type=\"text\">\n" +
        "                <label for=\"date\">Birth Date</label>\n" +
        "            </div>\n" +
        "\n" +
        "            <button class=\"next\" onclick=\"showNext()\">\n" +
        "                <div><span>Next</span></div>\n" +
        "            </button>\n" +
        "\n" +
        "        </div>\n" +
        "\n" +
        "    </div>";
    switchButton = document.getElementById('my_lever');
    switchButton.addEventListener('click', function () {
        roundImage();
    });
    console.log(rounded);
    if (rounded) {
        rounded = !rounded;
        times = 1;
        roundImage();
        const bt = document.getElementById('my_lever_checkButton');
        bt.checked = true;
    }

}

function contacts() {
    informationCollectorDiv.innerHTML =
        "<h2 style='margin-left: 0;'>Contacts : </h2>" +
        "<p>it is so important to have a way of communication so the cusstomer or the client can contact you if they found what they are looking for in your resume</p>" +
        //this is the contacts list
        "<ul id='input_list'>" +
        "<li><div class=\"input-field col s5 tooltipped\" data-position=\"right\" data-tooltip=\"what is your phone number\">\n" +
        "<input class=\"validate custom_input\" id=\"phone\" type=\"number\" oninput=\"realTimeChanging(this.id)\">\n" +
        "<label for=\"phone\">Phone Number :</label>\n" +
        "</div></li>" +
        "<li><div class=\"input-field col s5 tooltipped\" data-position=\"right\" data-tooltip=\"what is your email\">\n" +
        "<input class=\"validate custom_input\" id=\"email\" type=\"email\" oninput=\"realTimeChanging(this.id)\">\n" +
        "<label for=\"email\">Email :</label>\n" +
        "</div></li>" +
        "<li><div class=\"input-field col s5 tooltipped\" data-position=\"right\" data-tooltip=\"do you have any kind of \">\n" +
        "<input class=\"validate custom_input\" id=\"website\" type=\"text\" oninput=\"realTimeChanging(this.id)\">\n" +
        "<label for=\"website\">Social media or personal website :</label>\n" +
        "</div></li>" +
        "<li><div class=\"input-field col s5\ tooltipped\" data-position=\"right\" data-tooltip=\"do you have any kind of \">\n" +
        "<input class=\"validate custom_input\" id=\"linkedIn\" type=\"text\" oninput=\"realTimeChanging(this.id)\">\n" +
        "<label for=\"linkedIn\">LinkedIn :</label>\n" +
        "</div></li>" +
        "<li><div class=\"input-field col s5\ tooltipped\" data-position=\"right\" data-tooltip=\"gitHub page link\">\n" +
        "<input class=\"validate custom_input\" id=\"gitHub\" type=\"text\" oninput=\"realTimeChanging(this.id)\">\n" +
        "<label for=\"gitHub\">GitHub :</label>\n" +
        "</div></li>" +
        "</ul>" + "<br><br>" +
        "<button class=\"next\" onclick=\"showNext()\"><div><span>Next</span></div></button>\n" +
        "<button class=\"previous\" onclick=\"showPrevious()\"><div><span>Previous</span></div></button>";
}

function introduction() {
    informationCollectorDiv.innerHTML = "<h2 style='margin-left: 0;'>Introduction :</h2>" +
        "<p style='color: gray;font-size: 16px; max-width: 400px;'>Introduce yourself a bit " +
        "the key for a good CV is a good introduction it should be really interesting and eye catching so the reader will found it valuable to read the rest of your CV</p>" +
        "<div class=\"input-field col s5 tooltipped\" data-position=\"right\" data-tooltip=\"write a brief intro about yourself\">\n" +
        "<textarea id='introduction' style='height: 180px; background: white; width: 90% ; padding: 10px'></textarea>\n" +
        "<label for=\"introduction\">Introduction</label>\n" +
        "</div>\n" +
        "<button class=\"next\" onclick=\"showNext()\"><div><span>Next</span></div></button>" +
        "<button class=\"previous\" onclick=\"showPrevious()\"><div><span>Previous</span></div></button>";
}

function skillsAndLanguages() {
    informationCollectorDiv.innerHTML =
        "<h2 style='margin-left: 0;'>Skills :</h2>" +
        "<p style='color: gray;font-size: 16px; max-width: 400px;'>what are your skills :\ what are the thing that you are the best on add them here.</p>" +
        "<ul id='input_list'>" +
        "<li><div class=\"input-field col s5 tooltipped\" data-position=\"right\" data-tooltip=\"what are your skills\">\n" +
        "<input class=\"validate custom_input\" id=\"skills\" type=\"text\">\n" +
        "<label for=\"skills\">Skills </label>\n" +
        "</div></li>" +
        "</ul>" +
        "<button onclick='getList1(\"Skills\" , \"what are your skills?\")' id='more_options'>Add</button>" +
        "<h2 style='margin-left:0;'>Languages :</h2>" +
        "<p style='color: gray;font-size: 16px; max-width: 400px;'>what languages do you speak my friend</p>" +
        "<ul id='input_list2'>" +
        "<li><div class=\"input-field col s5 tooltipped\" data-position=\"right\" data-tooltip=\"what languages do you speak\">\n" +
        "<input class=\"validate custom_input\" id=\"language\" type=\"text\">\n" +
        "<label for=\"language\">Language :</label>\n" +
        "</div></li>" +
        "</ul>" + "" +
        "<button onclick='getList2(\"Language :\" , \"what languages do you speak?\")' id='more_options'>Add</button>" +
        "<br><br>" +
        "<button class=\"next\" onclick=\"showNext()\"><div><span>Next</span></div></button>\n" +
        "<button class=\"previous\" onclick=\"showPrevious()\"><div><span>Previous</span></div></button>";
}

function educationAndCourses() {
    informationCollectorDiv.innerHTML = "<h2 style='margin-left: 0;'>Education :</h2>" +
        "<p style='color: gray;font-size: 16px; max-width: 400px;'>Your relevant qualifications (or your highest level of education). Include dates, grades, locations, and a brief description of what you achieved.</p>" +
        "<ul id='input_list'>" +
        "<li><div class=\"input-field col s5 tooltipped\" data-position=\"right\" data-tooltip=\"list your educations from the newest to the oldest\">\n" +
        "<input class=\"validate custom_input\" id=\"education\" type=\"text\">\n" +
        "<label for=\"education\">Education</label>\n" +
        "</div></li>" +
        "</ul>" +
        "<button onclick='getList1(\"Education\" ,\"list your educations degrees \")' id='more_options'>Add</button>" +
        "<h2 style='margin-left:0;'>Courses :</h2>" +
        "<p style='color: gray;font-size: 16px; max-width: 400px;'>If you took any courses wither they are relative to your field or not put them here it would be a nice touch it reveals that you are always ready to learn new stuff</p>" +
        "<ul id='input_list2'>" +
        "<li><div class=\"input-field col s5 tooltipped\" data-position=\"right\" data-tooltip=\"it is a huge advantage having some courses so list them in\">\n" +
        "<input class=\"validate custom_input\" id=\"courses\" type=\"text\">\n" +
        "<label for=\"courses\">Courses</label>\n" +
        "</div></li>" +
        "</ul>" + "" +
        "<button onclick='getList2(\"Courses\",\"list any course you have had\")' id='more_options'>Add</button>" +
        "<br><br>" +
        "<button class=\"next\" onclick=\"showNext()\"><div><span>Next</span></div></button>\n" +
        "<button class=\"previous\" onclick=\"showPrevious()\"><div><span>Previous</span></div></button>";

}

function projects() {
    informationCollectorDiv.innerHTML = "<h2 style='margin-left: 0;'>Project Links :</h2>" +
        "<p style='color: gray;font-size: 16px; max-width: 400px;'>Surly being an amazing guy like you are you have made allot of project it would be really nice to have the links of those project on your resume</p>" +
        "<ul id='input_list'>" +
        "<li><div class=\"input-field col s5 tooltipped\" data-position=\"right\" data-tooltip=\"have you ever made any project\">\n" +
        "<input class=\"validate custom_input\" id=\"projects\" type=\"text\">\n" +
        "<label for=\"projects\">Project Link</label>\n" +
        "</div></li>" +
        "</ul>" +
        "<button onclick='getList1(\"Project Link\" , \"projects\")' id='more_options'>Add</button>" +
        "<h2 style='margin-left:0;'>Experiences :</h2>" +
        "<p style='color: gray;font-size: 16px; max-width: 400px;'>We cannot talk about projects without mentioning the experiences of a person they are always linkd so now let's talk about some of your astonishing experiences</p>" +
        "<ul id='input_list2'>" +
        "<li><div class=\"input-field col s5 tooltipped\" data-position=\"right\" data-tooltip=\"do you have any kind of experiences\">\n" +
        "<input class=\"validate custom_input\" id=\"experiences\" type=\"text\">\n" +
        "<label for=\"experiences\">Experience</label>\n" +
        "</div></li>" +
        "</ul>" + "" +
        "<button onclick='getList2(\"Experiences\",\"Experiences\")' id='more_options'>Add</button>" +
        "<br><br>" +
        "<button class=\"next\" onclick=\"showNext()\"><div><span>Next</span></div></button>\n" +
        "<button class=\"previous\" onclick=\"showPrevious()\"><div><span>Previous</span></div></button>";
}

function othersAndSummary() {
    informationCollectorDiv.innerHTML =
        "<h2 style='margin-left: 0;'>Other:</h2>" +
        "<p style='color: gray;font-size: 16px; max-width: 400px;'>would you like to add new titles we may have missed to your resume</p>" +
        "<ul id='input_list'>" +
        "<li><div class=\"input-field col s5 tooltipped\" data-position=\"right\" data-tooltip=\"Got anything else you would like to put\">\n" +
        "<textarea id='others' style='height: 180px; background: white; width: 90%;'></textarea>\n" +
        "<label for=\"others\">New Title</label></li>" +
        "</ul>" + "" +
        "<h2 style='margin-left: 0;'>Summary :</h2>" +
        "<p style='color: gray;font-size: 16px; max-width: 400px;'>In short try to summaries your resume</p>" +
        "<div class=\"input-field col s5 tooltipped\" data-position=\"right\" data-tooltip=\"summrize your resume\">\n" +
        "<textarea id='summary' style='height: 180px; background: white; width: 90%'></textarea>\n" +
        "<label for=\"summary\">Summary</label>\n" +
        "</div>\n" +
        "<br><br>" +
        "<button class=\"next\" onclick=\"saveEveryThingAndPush()\"><div><span>Finish</span></div></button>\n" +
        "<button class=\"previous\" onclick=\"showPrevious()\"><div><span>Previous</span></div></button>";
}

//dumb variables just to help create the lists when clicking
var myId = 1;
var myList;

function getList2(massage, hint) {
    myList = document.getElementById('input_list2');
    addInput(massage, hint);
}

function getList1(massage, hint) {
    myList = document.getElementById('input_list');
    addInput(massage, hint);
}

function addInput(massage, hint) {
    if (myList == null) myList = document.getElementById('input_list');
    const node = document.createElement("li");
    node.innerHTML = "<div class=\"input-field col s5\">\n" +
        "<input class=\"validate custom_input\" type=\"text\" >\n" +
        "<label></label>\n" +
        "</div>";

    const f = node.firstChild;
    const children = f.children;
    //how to add the data_tooltip using javascript
    f.title = hint;
    children[0].id = myId;
    children[1].for = myId;
    children[1].style.pointerEvents = "none";
    children[1].innerHTML = massage;

    myId++;
    myList.appendChild(node);
}

function inilization() {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems);
}


function logOut() {
    firebase.auth().signOut().then(function () {
        window.open('home.html', "_self");
    }).catch(function (error) {
    });
}

//learn some JQuery
//Real time changing affect for tomorrow
//when clicking on next first this save all the data in that page and when you reload it show that data again
//----------------------------------------------------------------------------------------------------------------------

//real time changing
//title changing
//get the resume title input reference
const resumeTitle = document.getElementById('resume_title');
//get the portfolio-resume-title reference
const portfolioResumeTitle = document.getElementById('portfolio-resume-title');
//triggering real time changing the resume title
resumeTitle.oninput = changeTitle;

function changeTitle() {
    let newText = resumeTitle.value;
    if (newText.length == 0) {
        portfolioResumeTitle.innerText = 'Resume Title';
        portfolioResumeTitle.style.color = 'grey';

    } else {
        portfolioResumeTitle.innerText = newText;
        portfolioResumeTitle.style.color = '#000';
        myUser.resumeTitle = newText;
    }

}

//----------------------------------------------------------------------------------------------------------------------
const resumeDive = document.getElementById('personal_info');
const resumeChildren = resumeDive.children;

function inputsMap(id) {
    let ans = {
        index: 0,
        defualt: '',
    };
    if (id == 'first_name') {
        ans.index = 1;
        ans.defualt = 'First Name  : ';
    } else if (id == 'last_name') {
        ans.index = 2;
        ans.defualt = 'Last Name   : ';
    } else if (id == 'address') {
        ans.index = 3;
        ans.defualt = 'Address     : ';
    } else if (id == 'nationality') {
        ans.index = 4;
        ans.defualt = 'Nationality : ';
    } else if (id == 'date') {
        ans.index = 5;
        ans.defualt = 'Birth Date  : ';
    }
    if (id == 'phone') {
        ans.index = 8;
        ans.defualt = 'Phone Number  : ';
    } else if (id == 'email') {
        ans.index = 9;
        ans.defualt = 'Email address : ';
    } else if (id == 'website') {
        ans.index = 10;
        ans.defualt = 'Social media  : ';
    } else if (id == 'linkedIn') {
        ans.index = 11;
        ans.defualt = 'Linked In     : ';
    } else if (id == 'gitHub') {
        ans.index = 12;
        ans.defualt = 'GitHub        : ';
    }


    return ans;
}

function realTimeChanging(id) {
    const inputField = document.getElementById(id);
    let myMap = inputsMap(id);
    const myField = resumeChildren[myMap.index];
    if (inputField != null)
        myField.innerText = myMap.defualt + inputField.value;
}

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems);
});


function reloadDoc() {
    location.reload();
}

function showCVs() {
    window.open('cv_viewer.html', '_self');

}

//create Java Script object and store things in it
function addPersonalInfoToMyUser() {
    let myInput = document.getElementById('first_name');
    if (myInput == null) return;
    myUser.firstName = myInput.value;
    myInput = document.getElementById('last_name');
    myUser.lastName = myInput.value;
    myInput = document.getElementById('nationality');
    myUser.nationality = myInput.value;
    myInput = document.getElementById('address');
    myUser.address = myInput.value;
    myInput = document.getElementById('date');
    myUser.birthDay = myInput.value;
    console.log(myUser);

}

function addContactsToMyUser() {
    let myInput = document.getElementById('phone');
    if (myInput == null) return;
    myUser.phoneNumber = myInput.value;
    myInput = document.getElementById('email');
    myUser.email = myInput.value;
    myInput = document.getElementById('website');
    myUser.website = myInput.value;
    myInput = document.getElementById('linkedIn');
    myUser.linkedIn = myInput.value;
    myInput = document.getElementById('gitHub');
    myUser.gitHub = myInput.value;
}

function saveIntroductionToMyUser() {
    let myInput = document.getElementById('introduction');
    if (myInput == null) return;
    myUser.introduction = myInput.value;

}

function savingSkillsAndLanguagesToMyUser() {
    const skillsList = document.getElementById('input_list');
    if (skillsList == null) return;
    const skillsInputs = skillsList.getElementsByTagName('input');
    for (let i = 0; i < skillsInputs.length; i++) {
        myUser.skills.push(skillsInputs[i].value);
    }
    const LanguagesList = document.getElementById('input_list2');
    if (LanguagesList == null) return;
    const languagesInputs = LanguagesList.getElementsByTagName('input');
    for (let i = 0; i < languagesInputs.length; i++) {
        myUser.languages.push(languagesInputs[i].value);
    }
}

function savingEduAndCoursesToMyUser() {
    const eduList = document.getElementById('input_list');
    if (eduList == null) return;
    const eduInputs = eduList.getElementsByTagName('input');
    for (let i = 0; i < eduInputs.length; i++) {
        myUser.education.push(eduInputs[i].value);
    }
    const coursesList = document.getElementById('input_list2');
    if (coursesList == null) return;
    const coursesInputs = coursesList.getElementsByTagName('input');
    for (let i = 0; i < coursesInputs.length; i++) {
        myUser.courses.push(coursesInputs[i].value);
    }
}

function savingprojectsAndExperiencesToMyUser() {
    let projectsList = document.getElementById('input_list');
    if (projectsList == null) return;
    const projectInputs = projectsList.getElementsByTagName('input');
    for (let i = 0; i < projectInputs.length; i++) {
        myUser.projectLinks.push(projectInputs[i].value);
    }
    const expList = document.getElementById('input_list2');
    if (expList == null) return;
    const expInputs = expList.getElementsByTagName('input');
    for (let i = 0; i < expInputs.length; i++) {
        myUser.experiences.push(expInputs[i].value);
    }
}

var firestore = firebase.firestore();

function saveEveryThingAndPush() {
    const other = document.getElementById('others');
    const summary = document.getElementById('summary');
    if (other != null) {
        myUser.other = other.value;
        myUser.summary = summary.value;
        saveNameAndEmail();
    }

    const docRef = firestore.doc('users/' + myUser.uid + '/CVs/' + myUser.resumeTitle);
    docRef.set({
        myUser,
    }).then(function () {
        swal({
            title: 'Saved',
            icon: "success",
            text: 'your CV \"' + myUser.resumeTitle + '\" had been saved',
        });
        console.log('hi');
    }).catch(function (error) {
    });
}

function saveNameAndEmail() {
    const docRef = firestore.doc('users/' + myUser.uid);
    docRef.set({
        name: myUser.firstName,
        email: myUser.email,
    }).then(function () {
        console.log('user had been saved');
    }).catch(function (error) {
        console.log('user saving error = ' + error);
    });

}

function saveAll() {
    console.log('am in');
    addPersonalInfoToMyUser();
    addContactsToMyUser();
    saveIntroductionToMyUser();
    savingEduAndCoursesToMyUser();
    savingprojectsAndExperiencesToMyUser();
    saveEveryThingAndPush();
}







