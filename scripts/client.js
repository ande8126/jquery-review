$( document ).ready( onReady );
//create a cohort array
let emirp = [];

function onReady(){
    console.log( 'JQ ');
    //do a few click handles
    $( '#firstPTag' ).on('click', pTagClick );
    $('.otherPTags' ).on('click', otherTagClick );
    $( '#submitButton' ).on('click', getInfo );
}//end onReady


function getInfo(){
    console.log( 'in getInfo' );
    //get value from nameIn
    const name = $( '#nameIn' ).val(); //gets value from the input element
    //create a user object
    //get favorite color
    const color = $( '#favoriteColorIn' ).val();
    //create user object
    const user = {
        name: name,
        color: color
    }//end user object
    //push user
    emirp.push( user );
    //put cohort list on the DOM
    //target a ul element by id
    let el = $( '#cohortOut' );
    //empty ul
    el.empty();
    //loop thru the cohort array
    for ( let i=0; i<emirp.length; i++ ) {
        //append each user to the ul/DOM
        el.append( '<li class="' + emirp[i].color + '">' + emirp[i].name + '</li>' );
    }//end for
    //update cohort count
    //target element
    let count = $( '#cohortCount' );
    //empty
    count.empty();
    //append
    count.append( emirp.length );
    //empty the nameIn element
    $( '#nameIn' ).val( '' ); //set the value for this element
}//end getInfo

function pTagClick(){
    console.log( 'clicked on 1st pTag');
}

function otherTagClick(){
    console.log( 'clicked on a classy element ');
}//end otherTagClick








 