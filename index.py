#!/usr/bin/python
#file version 21
import cgi
form = cgi.FieldStorage()
import random

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
"p{"
"color:white;"
"background-color:gray;"
"padding:20px;"
"display:table;"
"margin: 0 auto;"
"}"
"table, td, tr {"
"border: 2px solid black;"
"border-collapse: collapse;"
"padding: 5px;"
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
stringg=form.getvalue("string")
fuc=form.getvalue("fuc")

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


i = 0
j = 0
print "<table>"
for i in range(5):
	print "<tr>"
	for j in range(5):
		print "<td>"
		print(round(random.random()*100))
		print "</td>"
	print "</tr>"
print "</table>"


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

for i in stringg:
	if(i=='a'):
		print ' lolka '

print(
"<p>ok so now you have to enter a string which contains 1 4 and 8 8 on nechotnye places</p>"
)


def countthis(test):
    counter={}
    counter['4']=0
    counter['8']=0
    i=0
    for i in range(len(test)):
        if i%2==0:
            if test[i] =='4':
                counter['4']+=1
            if test[i] =='8':
                counter['8']+=1
    if (counter['4']==1) and (counter['8']==8):
	print(
	"<div style='color:red;'> YOU DID IT </div>"
	)
	
countthis(fuc)

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
