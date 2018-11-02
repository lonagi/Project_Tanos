#!/usr/bin/python
#file version 3
print "Content-type: text/html\n" #it is html
print "\n\n" #breaking without html
print "<html>" 
print "<head>" 
print "<title>Test</title>" #title , ok, you know. html
print "</head>"
print "<body>"
print (
"<div>"
  "Hello world!" #my text
  "<br>" #html breaking
  "sos" #your text
"</div>"
)
print "</body>"
print "</html>"
