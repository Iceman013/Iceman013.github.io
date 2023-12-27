export function randomDigits() {
    let chars = "1234567890-=qwertyuiop[]asdfghjkl;zxcvbnm,.!@#$%^&*()_+QWERTYUIOP{}ASDFGHJKL:ZXCVBNM<>?";
    let out = "";
    for (let i = 0; i < 20; i++) {
        let a = Math.floor(chars.length*Math.random());
        out += chars.substring(a, a + 1);
    }
    return out;
}