function isEmailValid(email) {

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return (emailRegex.test(email));
}

function errorStateField(fieldElement) {

    fieldElement.classList.add("newsletter__form__input-error");
    fieldElement.classList.remove("newsletter__form__input");
}

function removeErrorStateField(fieldElement) {

    fieldElement.classList.remove("newsletter__form__input-error");
    fieldElement.classList.add("newsletter__form__input");
}

document.addEventListener("DOMContentLoaded", function() {

    const newsletterForm = document.querySelector(".newsletter__form");
    const newsletterFormEmailInput = newsletterForm.querySelector("input");

    newsletterForm.addEventListener("submit", function(event) {

        // Prevent form submitting for debugging reasons
        event.preventDefault();

        if (isEmailValid(newsletterFormEmailInput.value)) {
            removeErrorStateField(newsletterFormEmailInput);
        }
        else {
            errorStateField(newsletterFormEmailInput);
        }
    });
});