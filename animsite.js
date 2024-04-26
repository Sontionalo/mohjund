async function uploadMultiple() {
  let textinput = document.getElementById("textinput");
  let inp = textinput.value
    const formData = new FormData();
    formData.append(inp, inp);
    const response = await fetch("https://www.pythonanywhere.com/user/MJ24/files/home/MJ24/transl.py?edit", {
      method: "POST",
      body: formData,
    });
    const result = await response.json();
}