function timeConversion(s) {
  if (!s.startsWith("12") && s.endsWith("PM")) {
    return parseInt(s.slice(0, 2)) + 12 + s.slice(2, -2);
  } else if (s.startsWith("12") && s.endsWith("AM")) {
    return "00" + s.slice(2, -2);
  } else {
    return s.slice(0, -2);
  }
}
