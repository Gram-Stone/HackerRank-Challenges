function flippingBits(n) {
  return Number(
    "0b" +
      Uint32Array.from(n.toString(2).padStart(32, "0"), (n) => (n == 0 ? 1 : 0))
        .toString()
        .replace(/,/g, "")
  );
}
