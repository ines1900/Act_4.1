let sections = ['Java', 'PHP', 'Test et validation'];
var loc = "https://talan.com";


document.write("<H1>Talan Academy</H1> est une école de reconverion interne à ");
 document.write('<a href="' + loc + '">Talan</a>');

document.write(" , qui propose une formation professionnalisante basée sur une pédagogie innovante.<br/>" );
document.write("<p>Les cursus proposés :</p>");
document.write("<ul>");
sections.forEach(function(item, index, array) {
  document.write("<li>");
  document.write(item);
  document.write("<br/>");
});
  document.write("</ul>");



