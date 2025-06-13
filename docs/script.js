function isEmailValid(email) {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return (emailRegex.test(email));
}

function errorStateField(fieldElement) {

    fieldElement.classList.add("newsletter__form__input-error");
    fieldElement.classList.remove("newsletter__form__input");

    fieldElement.closest("label").querySelector(".error-state-msg").classList.remove("hidden");
}

function removeErrorStateField(fieldElement) {

    fieldElement.classList.remove("newsletter__form__input-error");
    fieldElement.classList.add("newsletter__form__input");

    fieldElement.closest("label").querySelector(".error-state-msg").classList.add("hidden");
}

function notifyUserSuccess(email) {
    const successBoxTemplate = `
        <div class="newsletter__success">
          <div>
            <div class="newsletter__success-img">
            <img src="assets/images/icon-success.svg">
            </div>
            <div class="newsletter__success-text">
            <h2 class="newsletter__text-header">Thanks for subscribing!</h2>
            <p>
                A confirmation email has been sent to <strong>${email}</strong>.
                Please open it and click the button inside to confirm your subscription.
            </p>
            </div>
          </div>
            <button class="newsletter__success-btn newsletter-btn" type="submit">
            <div class="newsletter-btn__bg"></div>
            <div class="newsletter-btn__text">Dismiss Message</div>
            </button>
         </div>
    `;

    const newsletterComponent = document.querySelector(".newsletter-component");
    const newsletterContent = newsletterComponent.querySelector(".newsletter");

    newsletterContent.classList.add("invisible");
    newsletterComponent.insertAdjacentHTML("beforeend", successBoxTemplate);

    const newsletterSuccessBox = newsletterComponent.querySelector(".newsletter__success");
    const newsletterSuccessBoxDismissBtn = newsletterSuccessBox.querySelector(".newsletter__success-btn");

    newsletterSuccessBoxDismissBtn.addEventListener("click", function() {
        newsletterContent.classList.remove("invisible");
        newsletterSuccessBox.remove();
    });
}

document.addEventListener("DOMContentLoaded", function() {

    const newsletterForm = document.querySelector(".newsletter__form");
    const newsletterFormEmailInput = newsletterForm.querySelector("input");

    newsletterForm.addEventListener("submit", function(event) {

        // Prevent form submitting for debugging reasons
        event.preventDefault();
        if (isEmailValid(newsletterFormEmailInput.value)) {
            removeErrorStateField(newsletterFormEmailInput);
            notifyUserSuccess(newsletterFormEmailInput.value);   
        }
        else {
            errorStateField(newsletterFormEmailInput);
        }
    });
});