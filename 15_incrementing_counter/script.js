const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const actualValue = +counter.innerText;

    const increment = target / 200;

    if (actualValue < target) {
      counter.innerText = `${Math.ceil(actualValue + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
