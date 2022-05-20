function changeTitle() {
    var index_title  = 'Webprogramming (LIX018P05) - Index';
    var second_title = 'Webprogramming (LIX018P05) - Second';
    if (window.location.href.endsWith('index.html')) {
        var elIndexTitle = document.getElementById("title");
        elIndexTitle.textContent = index_title;
    } else {
        var elSecondTitle = document.getElementById('title');
        elSecondTitle.textContent = second_title;
    }}

function addArticle() {
    var elHeader = document.createElement('h1');
    var elText = document.createTextNode('This is my second article');
    elHeader.append(elText);
    var elParagraph = document.createElement('p');
    var elParText = document.createTextNode("Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?");
    elParagraph.append(elParText);
    var secondArticle = document.createElement('article');
    secondArticle.append(elHeader);
    secondArticle.append(elParagraph);
    var position = document.getElementsByClassName('col-md-12').item(0);
    position.append(secondArticle);
}

function links() {
    var start = document.getElementsByTagName('div');
    var rightDiv = start.getElementById('links');
    var listItems = rightDiv.getElementsByName('li');
    var theItem = listItems[3];
    theItem.setAttribute(href, "https://google.com");
    theItem.setAttribute(target, "_blank");
};

function changeNavigationcolor() {
    var navigationItems = document.getElementsByClassName('nav-item');
    navigationItems.style.color = 'red';
};

var schedule = {
    week1: "assignment 1",
    week2: "assignment 1",
    week3: "assignment 2",
    week4: "assignment 2",
    week5: "assignment 3",
    week6: "assignment 3",
    week7: "final project"
};

function sideBar() {
    var length = document.getElementsByClassName('col-md-12');
    length.className = 'col-md-8';
    var container = document.getElementsByClassName('container');
    var newColumn = document.createElement('div');
    var newHeader = document.createElement('h1');
    var textNewHeader = document.createTextNode('Sidebar');
    newHeader.append('textNewHeader');
    newColumn.appendChild('newHeader');
    container.appendChild('newColumn');
};

document.addEventListener("DOMContentLoaded", function() {
    changeTitle()
    addArticle()
    links()
    changeNavigationcolor()
    sidebar()
})



