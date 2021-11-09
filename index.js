const fetchIssues = () => {
    var issues = JSON.parse(localStorage.getItem('issues'));
    var issuesList = document.querySelector('.issuesList');

    issuesList.innerHTML = '';

    for(var i = 0; i < issues.length; i++) {
        var id = issues[i].id;
        var desc = issues[i].description;
        var severity = issues[i].severity;
        var assignedTo = issues[i].assignedTo;
        var status = issues[i].status;

        issuesList.innerHTML += "<div class = issue>" + "Id: " + id + " Description: " + desc + " Severity: " + severity + " Assigned to: " + assignedTo + " Status: " + status + 
        "<button class=close>Close</button><button class=remove>Remove</button></div>";

    }

}

const desc = document.querySelector('.desc');
const severity = document.querySelector('.severity');
const assign = document.querySelector('.assign');
const submit = document.querySelector('.add');

const uploadIssue = () => {

    var issue = {

        id: "brak",
        description: desc.value,
        severity: severity.value,
        assignedTo: assign.value,
        status: "Open"

    }

    if(localStorage.getItem('issues') == null) {
        var issues = [];
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues));
    } else {
        var issues = JSON.parse(localStorage.getItem('issues'));
        issues.push(issue);
        localStorage.setItem('issues', JSON.stringify(issues));
    }

}

submit.addEventListener('click', (e) => {
    e.preventDefault();
    uploadIssue();
    submit.parentNode.reset();
    fetchIssues();
});