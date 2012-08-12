 select * from User as A, Event, User as B 
 where 
   A.uID = "0001" 
   and eHostID=B.uID 
   and B.uID and 
   (69.1*(A.uLocation_a - B.uLocation_a)*69.1*(A.uLocation_a-B.uLocation_a)+
   53.0*(A.uLocation_b - B.uLocation_b)*53.0*(A.uLocation_b-B.uLocation_b)) < 100;
