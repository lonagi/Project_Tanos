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
print(
"<style>"
"em{"
"color:white;"
"}"
"em:hover{"
"color:green;"
"}"
"</style>"
)
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
      "<em>Putin top?</em>" #politota
)

p=form.getvalue("p")
quest=form.getvalue("quest")

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


print '<div><a class="btn btn-success" href="?quest=1">Click me :)</a></div><br/>'

#V pythone net switch case :(
if(quest=='1'):
	print('Hi there! Do u want to pass my quest? 2 - Yes, 3 - No')
elif(quest=='2'):
	print('Ok. Are u woman? 4 - Yes, 5 - No')
elif(quest=='4'):
	print('Tanya, tell me. Do u like Sasha? 6 - Yes, 7 - No')
elif(quest=='5'):
	print('Sasha, tell me. Do u like Varenyki? 8 - Yes, 7 - No')
elif(quest=='6'):
	print('I consider, that u are wonderful. Am I right? 9 - Yes, 7 - No')
elif(quest=='8'):
	print('Do u like Tanya? Nya-nya. 9 - Yes, 3 - No')
elif(quest=='9'):
	print('Great!')
elif(quest=='3' or quest=='7'):
	print('You are dead!')
elif(quest!=None):
	print('Ti kuda idesh? aaaa????')

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
