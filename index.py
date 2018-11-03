#!/usr/bin/python
#file version 6
import cgi
form = cgi.FieldStorage()

print "Content-type: text/html; charset=utf-8\n"
print "\n\n"
print "<html>" 
print "<head>"
print '<link href="http://ex.nvg-team.com/bootstrap2.css" rel="stylesheet" type="text/css" media="all"/>\n'
print '<meta name="viewport" content="width=device-width, initial-scale=1">\n'
print "<title>Test</title>"
print "</head>"
print "<body>"
print (
"<div class='my-5 container-fluid'>"
  "<div class='row'>"
    "<div class='col-md-2'></div>"
    "<div class='col-md-8 text-center'>"
      "<h1>Hello world!<h1>"
      "<h5>Type your id in p=</h5><br>"
      "<b> and now... <ins>IMPORTANT QUESTION</ins></b><br><br><br>"
      "<em style='color:white'>Putin top?</em>" #politota
)

p=form.getvalue("p")

#lol :)
if p!=None: #suka!
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
  "</div>"
"</div>"
)
print (
"<footer>"
"<script src='http://ex.nvg-team.com/jquery-3.3.1.js'></script>"
"<script src='http://ex.nvg-team.com/bootstrap2.js'></script>"
"</footer>"
)
print "</body>"
print "</html>"
