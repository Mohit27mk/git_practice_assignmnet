 let bool="true";
let j = str.length -1;
    for( let i = 0 ; i < j/2 ;i++)
    {
      let x = str[i] ;
      let y = str[j-i];
      if( x != y)
      {
        bool=false;
continue;
      }
    }
  if(bool){
console.log("Is a palindrome");
}else{
console.log("Not a palindrome");

}
  
     
  