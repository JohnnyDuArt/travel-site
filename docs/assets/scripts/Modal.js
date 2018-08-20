$(document).ready(function () {
	$('.open-modal').on('click', function () {
    
    $('.modal').css('opacity', '1');
    $('.modal').css('visibility', 'visible');
    
    return false;
	});
  
  $('.modal__close').on('click', function () {
    $('.modal').css('opacity', '0').css('visibility', 'hidden');
    
    return false;
  });
});

    $(document).on('keyup', function (event) {
  	if (event.keyCode == 27) {
        $('.modal').css('opacity', '0').css('visibility', 'hidden');
  };
});

/*
import $ from 'jquery';

class Modal {
    constructor() {
        this.openModalButton = $('.open-modal');
        this.modal = $('.modal');
        this.closeModalButton = $('.modal__close');
        this.events();
    }

    events() {
        //clicar no botao open-model
        this.openModalButton.click(this.openModal.bind(this));
        // clicar no botao X modal-close
        this.closeModalButton.click(this.closeModal.bind(this));
        // pressionar qualquer tecla
        $(document).keyup(this.keyPressHandler.bind(this));
    }

    keyPressHandler(e) {
        if (e.keyCode == 27) {
            this.closeModal();
        }
    }

    openModal() {
        this.modal.addClass('modal--is-visible');
        return false;
    }

    closeModal() {
        this.modal.removeClass('modal--is-visible');
    }
}

export default Modal;
*/