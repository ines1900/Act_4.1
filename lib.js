let sections = ['Java', 'PHP', 'Test et validation'];
var loc = "https://talan.com";


document.write("<H1>Talan Academy</H1> est une �cole de reconverion interne � ");
 document.write('<a href="' + loc + '">Talan</a>');

document.write(" , qui propose une formation professionnalisante bas�e sur une p�dagogie innovante.<br/>" );
document.write("<p>Les cursus propos�s :</p>");
document.write("<ul>");
sections.forEach(function(item, index, array) {
  document.write("<li>");
  document.write(item);
  document.write("<br/>");
});
  document.write("</ul>");



