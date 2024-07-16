document.addEventListener('DOMContentLoaded', function(){ 

    MicroModal.init({
        onShow: modal => console.info(`${modal.id} is shown`), // [1]
        onClose: modal => console.info(`${modal.id} is hidden`), // [2]
        openTrigger: 'data-micromodal-trigger', // [3]
        closeTrigger: 'data-micromodal-close', // [4]
        openClass: 'is-open', // [5]
        disableScroll: true, // [6]
        disableFocus: false, // [7]
        awaitOpenAnimation: false, // [8]
        awaitCloseAnimation: false, // [9]
        debugMode: true // [10]
    });

});




//MicroModal.show('modal-1'); // [1]
//MicroModal.close('modal-1'); // [2]