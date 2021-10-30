proc ReverseString {String} {

  set lst [split "$String" " "];#we split the string to list of strings on white spaces
  set res {};#use a reserved empty list
  for {set i [expr [llength $lst]-1]} {$i>=0} {incr i -1} {
      lappend res [lindex $lst $i]
      
  };#loop from back and append it to the res list then return the Flipped list (res)
  return $res
}

set My_String "Welcome to you";#demo 
puts "[ReverseString $My_String]"