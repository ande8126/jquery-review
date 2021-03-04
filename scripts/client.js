$( document ).ready( onReady );

function onReady(){
    console.log( 'JQ ');
    //do a few click handles
    $( '#firstPTag' ).on('click', pTagClick );
    $('.otherPTags' ).on('click', otherTagClick );
}//end onReady

function pTagClick(){
    console.log( 'clicked on 1st pTag');
}
function otherTagClick(){
    console.log( 'clicked on a classy element ');
}//end otherTagClick




 