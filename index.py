#!/usr/bin/python
#file version 5
import cgi #Vstavlaem module
form = cgi.FieldStorage() #Take vars from browser url ($_GET and $_POST) (What is Post and Get? We'll talk later)

print "Content-type: text/html; charset=utf-8\n" #it is html
print "\n\n" #breaking without html
print "<html>" 
print "<head>"
print '<link href="http://ex.nvg-team.com/bootstrap2.css" rel="stylesheet" type="text/css" media="all"/>\n' #Connect bootstrap css
print '<meta name="viewport" content="width=device-width, initial-scale=1">\n' #set size display 100%
print "<title>Test</title>" #title , ok, you know. html
print "</head>"
print "<body>"
print (
"<div class='my-5 container-fluid'>" #good margin, do not pay attention, Tanya )
  "<div class='row'>"
    "<div class='col-md-2'></div>"
    "<div class='col-md-8 text-center'>"
      "<h1>Hello world!<h1>"
      "<h5>Type your id in p=</h5><br>"
      "<b>А теперь <ins>важный вопрос</ins></b><br><br><br>
      "<em style="color:white">Путин топ?</em>" #politota
)

p=form.getvalue("p") #TAKE ?p= from browser url

#lol :)
if p!='':
	if p=='173':
		print 'Sasha :)'
	elif p=='1488':
		print 'Tanya :)'
	elif p=='yes':
		print 'KREMLEBOT ALERT'
	else:
		print 'za toboi uzhe viehali'
print (
  "</div>"
    "<div class='col-md-2'></div>"
  "</div>" #it is too margining
"</div>"
)
print (
"<footer>"
"<script src='http://ex.nvg-team.com/jquery-3.3.1.js'></script>" #connect jquery
"<script src='http://ex.nvg-team.com/bootstrap2.js'></script>" #connect bootstrap js framework
"</footer>"
)
print "</body>"
print "</html>"
