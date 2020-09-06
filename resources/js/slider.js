/**
 * @author Tliabo
 */

const sliders = document.querySelectorAll('.slider');

for (let i = 0; i < sliders.length; i++) {
    let slider = sliders[i];
    let sliderControls = slider.querySelectorAll('.slider-control');
    let sliderInner = slider.querySelector('.slider-inner');
    let sliderItems = slider.querySelectorAll('.slider-item');
    let sliderId = `slider-${i}`;

    addIdToSlider(slider, sliderId);
    addSlideCounter(i);

    for (let j = 0; j < sliderControls.length; j++) {
        let control = sliderControls[j];
        addSliderIdToControl(control, sliderId);
        addEventListenerToControl(slider, control, sliderItems);
    }
}

function addIdToSlider(slider, sliderId) {
    slider.id = sliderId;
}

function addSlideCounter(index) {
    let object = {
        slider: index,
        activeItem: 1
    }
}

function addSliderIdToControl(control, sliderId) {
    control.href = `#${sliderId}`;
}

function addEventListenerToControl(slider, control, sliderItems) {

    control.addEventListener('click', e => {
        let activeItem = slider.getAttribute('data-active-slide');
        if (control.className.includes('next')) {
            if (activeItem < sliderItems.length) {
                activeItem++;
                updateActiveSlideData(slider, activeItem)
                sliderItems.forEach(item => {
                    item.style.transform = `translateX(-${(activeItem - 1) * 100}%)`;
                })
            } else {
                activeItem = 1;
                updateActiveSlideData(slider, activeItem)
                sliderItems.forEach(item => {
                    item.style.transform = `translateX(${0}%)`;
                })
            }
        } else if (control.className.includes('prev')) {
            if (activeItem > 1) {
                activeItem--;
                updateActiveSlideData(slider, activeItem)
                sliderItems.forEach(item => {
                    item.style.transform = `translateX(-${(activeItem - 1) * 100}%)`;
                })
            } else {
                activeItem = sliderItems.length;
                updateActiveSlideData(slider, activeItem)
                sliderItems.forEach(item => {
                    item.style.transform = `translateX(-${(sliderItems.length - 1) * 100}%)`;
                })
            }
        }
    })

}

function updateActiveSlideData(slider, number) {
    slider.setAttribute('data-active-slide', number)
}
