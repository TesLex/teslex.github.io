export default {
  page(file, async = false) {
    let rawFile = new XMLHttpRequest();
    let s;
    rawFile.open("GET", file, async);
    rawFile.onreadystatechange = function () {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status === 0) {
          s = rawFile.responseText;
        }
      }
    };
    rawFile.send(null);
    return s;
  }
}
