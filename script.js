
function selectOption(optionId, price) {
    document.querySelectorAll('.option-details').forEach(detail => {
        detail.classList.remove('active');
    });
    document.querySelectorAll('.bundle-option').forEach(option => {
        option.classList.remove('active');
        const radioButton = option.querySelector('input[type="radio"]');
        if (radioButton && radioButton.checked) {
            option.classList.add('active');
        }
    });
    
    const selectedDetails = document.getElementById(`${optionId}-details`);
    selectedDetails.classList.add('active');
    document.getElementById("total-price").innerText = "Total: DKK " + price.toFixed(2);
    const priceOriginal = document.querySelector(`#${optionId} ~ label .price-original`);
    priceOriginal.classList.add('active');
}

  