const list = document.getElementById('CVs_cards');


var getParams = function (url) {
    var params = {};
    var parser = document.createElement('a');
    parser.href = url;
    var query = parser.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        params[pair[0]] = decodeURIComponent(pair[1]);
    }
    return params;
};
let url = getParams(window.location.href);
let userId = '';
console.log(url);
console.log('my id = ' + url['uid']);

function viewCard(doc, massage) {

    let li = document.createElement('li');
    li.innerHTML = "<a href='#'><div><img src='imgs/cv_background.gif'><h5></h5></div></a>";
    let title = li.getElementsByTagName('h5');
    let anqour = li.getElementsByTagName('a');
    anqour[0].addEventListener('click', function () {
        showData(doc, massage);
    });
    title[0].innerText = doc.id;
    list.appendChild(li);
}

function showData(doc, massage) {
    let user = doc.data();
    Swal.fire({
        html: "<div style=' max-height: 400px; overflow-y: scroll; margin-left: 0'>" +
            "<h4></h4>" +
            "  <ul class=\"collapsible\">\n" +
            "    <li >\n" +
            "      <div class=\"collapsible-header\" ><i class=\"material-icons\" style='width: 100%'>Personal Info</i></div>\n" +
            "      <div class=\"collapsible-body\"id='personal_info_div'><span></span></div>\n" +
            "    </li>\n" +
            "    <li>\n" +
            "      <div class=\"collapsible-header\" ><i class=\"material-icons\" style='width: 100%'>Contacts</i></div>\n" +
            "      <div class=\"collapsible-body\" id='contacts_div'><span></span></div>\n" +
            "    </li>\n" +
            "    <li>\n" +
            "      <div class=\"collapsible-header\" ><i class=\"material-icons\" style='width: 100%'>Introduction</i></div>\n" +
            "      <div class=\"collapsible-body\" id='introduction_div'><span></span></div>\n" +
            "    </li>\n" +
            "    <li>\n" +
            "      <div class=\"collapsible-header\" ><i class=\"material-icons\" style='width: 100%'>Skills</i></div>\n" +
            "      <div class=\"collapsible-body\" id='skills_div'><span></span></div>\n" +
            "    </li>\n" +
            "    <li>\n" +
            "      <div class=\"collapsible-header\" ><i class=\"material-icons\" style='width: 100%'>Languages</i></div>\n" +
            "      <div class=\"collapsible-body\" id='language_div'><span></span></div>\n" +
            "    </li>\n" +
            "    <li>\n" +
            "      <div class=\"collapsible-header\" ><i class=\"material-icons\" style='width: 100%'>Education</i></div>\n" +
            "      <div class=\"collapsible-body\" id='education_div'><span></span></div>\n" +
            "    </li>\n" +
            "    <li>\n" +
            "      <div class=\"collapsible-header\" ><i class=\"material-icons\" style='width: 100%'>Courses</i></div>\n" +
            "      <div class=\"collapsible-body\" id='courses_div'><span></span></div>\n" +
            "    </li>\n" +
            "    <li>\n" +
            "      <div class=\"collapsible-header\" ><i class=\"material-icons\" style='width: 100%'>Project Links</i></div>\n" +
            "      <div class=\"collapsible-body\" id='projects_div'><span></span></div>\n" +
            "    </li>\n" +
            "    <li>\n" +
            "      <div class=\"collapsible-header\"><i class=\"material-icons\" style='width: 100%'>Experiences</i></div>\n" +
            "      <div class=\"collapsible-body\"  id='experiences_div'><span></span></div>\n" +
            "    </li>\n" +
            "    <li>\n" +
            "      <div class=\"collapsible-header\" ><i class=\"material-icons\" style='width: 100%'>Other</i></div>\n" +
            "      <div class=\"collapsible-body\" id='others_div'><span></span></div>\n" +
            "    </li>\n" +
            "    <li>\n" +
            "      <div class=\"collapsible-header\" ><i class=\"material-icons\" style='width: 100%'>Summary</i></div>\n" +
            "      <div class=\"collapsible-body\" id='summary_div'><span></span></div>\n" +
            "    </li>\n" +
            "  </ul>" +

            "</div>",
    });
    const h4Tag = document.getElementsByTagName('h4');
    h4Tag[0].innerText = doc.id;
    h4Tag[0].style.marginTop = '0px';
    init();
    const list = document.querySelector('.collapsible');
    const children = list.children;
    const personalInfoSpan = children[0].getElementsByTagName('span')[0];
    const contactsSpan = children[1].getElementsByTagName('span')[0];
    const introductionSpan = children[2].getElementsByTagName('span')[0];
    const skillsSpan = children[3].getElementsByTagName('span')[0];
    const languagesSpan = children[4].getElementsByTagName('span')[0];
    const educationSpan = children[5].getElementsByTagName('span')[0];
    const coursesSpan = children[6].getElementsByTagName('span')[0];
    const projectSpan = children[7].getElementsByTagName('span')[0];
    const experiencesSpan = children[8].getElementsByTagName('span')[0];
    const othersSpan = children[9].getElementsByTagName('span')[0];
    const summarySpan = children[10].getElementsByTagName('span')[0];

    setPersonalInfo(personalInfoSpan, user);
    setContactsSpan(contactsSpan, user);
    setParagraph(introductionSpan, 'introduction_div', user.myUser.introduction);
    setLists(skillsSpan, 'skills_div', user.myUser.skills);
    setLists(languagesSpan, 'language_div', user.myUser.languages);
    setLists(educationSpan, 'education_div', user.myUser.education);
    setLists(coursesSpan, 'courses_div', user.myUser.courses);
    setLists(projectSpan, 'projects_div', user.myUser.projectLinks);
    setLists(experiencesSpan, 'experiences_div', user.myUser.experiences);
    setParagraph(othersSpan, 'others_div', user.myUser.other);
    setParagraph(summarySpan, 'summary_div', user.myUser.summary);
    settingMassage(massage, doc.id);

}

function settingMassage(massage, cvID) {
    let button = document.querySelector('.swal2-confirm');

    button.innerText = massage;
    if (massage === 'share') {

        let sharableLink = window.location['href'];
        if (sharableLink.includes('?')) {
            sharableLink += '&uid=' + userId;
        } else {
            sharableLink += '?uid=' + userId;
        }
        sharableLink += '&docId=' + cvID;
        console.log(sharableLink);
        button.addEventListener('click', function () {
            swal({
                title: 'Sharable Link',
                icon: "success",
                text: sharableLink,
            })
            ;
        });

        let div = document.querySelector('.swal2-actions');
        div.innerHTML = '<div style="width: 100%;height: 50px; text-align: center" id="innerDiv"></div>'
        let inner = document.getElementById('innerDiv');
        let trash = document.createElement('a')
        trash.href = '#';
        trash.innerHTML = '<img src="imgs/trash.png" style="width: 25px;height: 30px;float: right">';
        trash.addEventListener('click', function () {
            //here we are going to delete the doc
            deleting(cvID);
        });
        inner.appendChild(button);
        inner.appendChild(trash);
    }
}

function deleting(cvID) {
    var dbRef = firebase.firestore();
    try {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {

                if (willDelete) {
                    swal("Poof! Your CV has been deleted!", {
                        icon: "success",
                    });
                    dbRef.collection('users').doc(userId).collection('CVs').doc(cvID).delete().then(function () {
                        location.reload();
                    });
                } else {
                    swal("Your CV is safe!", {
                        icon: "success",
                    });
                }
            });
        console.log('worked!');
    } catch (e) {
        console.log(e);
    }
    // location.reload();
}

function setPersonalInfo(personalInfoSpan, user) {
    personalInfoSpan.innerText =
        'First Name : ' + user.myUser.firstName + '\n\n' +
        'Last Name : ' + user.myUser.lastName + '\n\n' +
        'Address : ' + user.myUser.address + '\n\n' +
        'Nationality : ' + user.myUser.nationality + '\n\n' +
        'Birth Day : ' + user.myUser.birthDay;
    let div = document.getElementById('personal_info_div');
    div.style.textAlign = 'left';


}

function setContactsSpan(contactsSpan, user) {
    contactsSpan.innerText =
        'Phone Number : ' + user.myUser.phoneNumber + '\n\n' +
        'Email : ' + user.myUser.email + '\n\n' +
        'website : ' + user.myUser.website + '\n\n' +
        'LinkedIn : ' + user.myUser.linkedIn + '\n\n' +
        'GitHub : ' + user.myUser.gitHub;
    let div = document.getElementById('contacts_div');
    div.style.textAlign = 'left';
}

function setLists(span, id, list) {
    console.log('length = ' + list.length)
    let div = document.getElementById(id);
    div.style.textAlign = 'left';
    let newText = '';
    for (let i = 0; i < list.length; i++) {
        if (i == 0) {
            newText = list[i];
        } else
            newText += '\n\n' + list[i];
    }
    span.innerText = newText;
}

function setParagraph(span, id, paragraph) {
    span.innerText = paragraph;
    let div = document.getElementById(id);
    div.style.textAlign = 'left';
}

function init() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);
}


function checkIfSharable(users) {
    let uid = url['uid'];
    console.log('my url is = ' + url);
    console.log('the id am reading from the url is = ' + uid);
    let usersIDs = [];
    users.forEach(user => {
        usersIDs.push(user.id);
    });
    console.log(usersIDs.includes(uid));
    console.log(usersIDs);
    return (uid != undefined);
}


function getDataFromSharableLink(docRef) {
    let uid = url['uid'];
    let docId = url['docId'];
    docRef.collection('users').doc(uid).collection('CVs').doc(docId).get().then((snapshote) => {
        console.log(snapshote.data());
        viewCard(snapshote, 'done');
        let img = document.querySelector('#loading');
        console.log(window.location['href']);
        img.remove();
    }).catch((error) => {

        console.log('some shit happened = ' + error);
    });

}

