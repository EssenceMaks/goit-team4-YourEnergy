import { addRatingRequest } from './api-service';

export class ModalWindowRating {
  static instance = null;

  constructor() {
    if (ModalWindowRating.instance) {
      return ModalWindowRating.instance;
    }

    this.ratingBackdrop = document.querySelector('[data-rating-modal]');
    this.ratingCloseBtn = document.querySelector('[data-rating-close]');
    this.ratingForm = document.querySelector('.rating-form');
    this.backdrop = document.querySelector('[data-modal]');
    this.ratingCounter = document.querySelector('.rating-form-value');
    this.currentExerciseId = null;

    this.bindEvents();
    ModalWindowRating.instance = this;
  }

  bindEvents() {
    if (this.ratingCloseBtn) {
      this.ratingCloseBtn.addEventListener('click', () =>
        this.closeRatingModal()
      );
    }

    if (this.ratingBackdrop) {
      this.ratingBackdrop.addEventListener('click', e => {
        if (e.target === this.ratingBackdrop) {
          this.closeRatingModal();
        }
      });
    }

    // Додаємо обробники для радіокнопок
    const radioButtons = document.querySelectorAll('.rating-form-radio');
    radioButtons.forEach(radio => {
      radio.addEventListener('mouseover', () => {
        this.updateRatingDisplay(radio.value);
      });

      radio.addEventListener('mouseout', () => {
        const selectedRadio = document.querySelector(
          '.rating-form-radio:checked'
        );
        this.updateRatingDisplay(selectedRadio ? selectedRadio.value : '0.0');
      });

      radio.addEventListener('change', () => {
        this.updateRatingDisplay(radio.value);
      });
    });

    if (this.ratingForm) {
      this.ratingForm.addEventListener('submit', e =>
        this.handleRatingSubmit(e)
      );
    }
  }

  updateRatingDisplay(value) {
    if (this.ratingCounter) {
      this.ratingCounter.textContent = parseFloat(value).toFixed(1);
    }
  }

  openRatingModal(exerciseId) {
    if (this.ratingBackdrop && this.backdrop) {
      this.currentExerciseId = exerciseId;
      this.backdrop.classList.add('is-hidden');
      this.ratingBackdrop.classList.remove('is-hidden');
      this.updateRatingDisplay('0.0');
      this.lastSelectedRating = null; // Скидаємо збережене значення рейтингу

      // Скидаємо вибір радіокнопок
      const radioButtons = document.querySelectorAll('.rating-form-radio');
      radioButtons.forEach(radio => (radio.checked = false));
    }
  }

  closeRatingModal() {
    if (this.ratingBackdrop && this.backdrop) {
      this.ratingBackdrop.classList.add('is-hidden');
      this.backdrop.classList.remove('is-hidden');
      if (this.ratingForm) {
        this.ratingForm.reset();
        this.updateRatingDisplay('0.0');
      }
    }
  }

  async handleRatingSubmit(e) {
    e.preventDefault();

    const email = this.ratingForm.querySelector('#rating-email').value.trim();
    const comment = this.ratingForm
      .querySelector('#rating-comment')
      .value.trim();
    const selectedRating = document.querySelector('.rating-form-radio:checked');

    if (!email || !comment || !selectedRating) {
      this.showNotification('Please fill in all fields', 'error');
      return;
    }

    const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!emailPattern.test(email)) {
      this.showNotification('Please enter a valid email', 'error');
      return;
    }

    try {
      const response = await addRatingRequest(this.currentExerciseId, {
        rate: parseFloat(selectedRating.value),
        email,
        review: comment,
      });

      if (response.ok) {
        this.closeRatingModal();
        this.showNotification('Rating added successfully', 'success');
      } else {
        const error = await response.json();
        throw new Error(error.message || 'Failed to add rating');
      }
    } catch (error) {
      this.showNotification(error.message, 'error');
    }
  }

  showNotification(message, type) {
    // Тут можна використовувати будь-яку бібліотеку для нотифікацій
    // Наприклад, Notiflix або iziToast
    console.log(`${type}: ${message}`);
  }
}

// Ініціалізація при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  window.modalWindowRating = new ModalWindowRating();
});
