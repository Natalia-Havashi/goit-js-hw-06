const pozitionEl = document.querySelector(`#font-size-control`);
const abracadabra = document.querySelector(`#text`);
pozitionEl.addEventListener(`input`, (event) => {
    console.log(event.currentTarget.value);
    const size = event.currentTarget.value;

    console.log(size);

    abracadabra.style.fontSize = `${size}px`;
});
