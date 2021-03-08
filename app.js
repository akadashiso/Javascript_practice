const form_input = document.getElementById("form_input")
const submit_button = document.getElementById("submit_button")
const display = document.getElementById("display")
const mail_regexp = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/

submit_button.addEventListener("click", () => {
    if (form_input.value.match(mail_regexp) == null) {
        alert("メールアドレスが正しくありません")
    } else {
        display.innerHTML = form_input.value.match(mail_regexp) + "に送信済み"
    }
})

var genzai = new Date();
document.write(genzai.toUTCString());