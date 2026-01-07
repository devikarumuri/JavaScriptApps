document.querySelectorAll(".floating").forEach((el, i) => {
  el.animate(
    [
      { transform: "translateY(0px)" },
      { transform: "translateY(12px)" },
      { transform: "translateY(0px)" },
    ],
    {
      duration: 5000 + i * 1000,
      iterations: Infinity,
    }
  );
});
