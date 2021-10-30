proc sortList {lst} {
set temp 0; #temp to save the big number in temporarly
for {set i 0} {$i < [expr {[llength "$lst"]}]} {incr i} { 
    for {set j [expr $i+1]} {$j < [llength "$lst"] } {incr j} {
        if {[lindex $lst $i] > [lindex $lst $j]} { 
            lset temp [lindex $lst $i]
            lset lst $i [lindex $lst $j]
            lset lst $j $temp
        };#compare between numbers if the big is before the small we but the big in temp and switch postion 
    }; #second loop (fast one)
};#first loop (slow one)
return $lst ;#return the sorted list
}
set my_list {3 6 8 7 0 1 4 2 9 5 } ; #list to be tested 
puts "[sortList $my_list]"; #output the sorted list




