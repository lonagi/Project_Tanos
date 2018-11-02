#!/usr/bin/python
#file version 4
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
"<div>"
  "Hello world!" #my text
  "<br>" #html breaking
  "sos" #your text
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
