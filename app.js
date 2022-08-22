

function getPassword() {

    let valueLength = document.getElementById('valueLength').value;

    if (valueLength > 60) {
        alert("karakter sayısı 60'dan fazla olamaz.")
    } else{
        const chars ="ABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZabcçdefgğhıijklmnoöprsştuüvyz!'^+%&/()=?_1234567890*-é#${[]}\|~¨€<|>.,;:"
        let passwordLenght = valueLength;
        let password='';

        for (let i = 0; i < passwordLenght; i++) {
            
            let randomNumber = Math.floor(Math.random()*chars.length);

            password += chars.substring(randomNumber , randomNumber + 1);
            document.getElementById('password').value = password;
        }
    }
}
