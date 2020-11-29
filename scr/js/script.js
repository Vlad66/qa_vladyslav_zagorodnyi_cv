// Reference the parent element
var main = document.getElementById('main');

/* Register main to the click event
|| when clicked ANYWHERE within main
|| toggle() is called
*/
main.addEventListener('click', toggle, false);

function toggle(e) {
  /* Determine if the current element in the
  || event chain is the anchor that was
  || clicked.
  */
  if (e.target !== e.currentTarget && e.target.nodeName === "A") {
    /* tgt is the clicked link
    || txt is the div that follows tgt
    */
    var tgt = e.target;
    var txt = tgt.nextElementSibling;
    // Toggle classes .on and .off
    txt.classList.toggle('on');
    txt.classList.toggle('off');
  }

}