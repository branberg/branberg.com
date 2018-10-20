/**
 * modalEffects.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var ModalEffects = (function() {

  function closeModal(modal, triggerElem) {
    classie.remove(modal, 'md-show');
  }

  function init() {
    var overlay = document.querySelector('.md-overlay');

    [].slice.call(document.querySelectorAll('.md-trigger')).forEach( function( el, i ) {
      var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) )

      el.addEventListener( 'click', function() {
        classie.add( modal, 'md-show' );
      });

      overlay.addEventListener('click', function() {
        closeModal(modal, el);
      });

      document.onkeydown = function(event) {
        event = event || window.event;

        if (event.keyCode == 27) {
          closeModal(modal, el);
        }
      }

    });
  }

  init();

})();
