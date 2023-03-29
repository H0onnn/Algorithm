function solution(id_pw, db) {
    let id = false;
    let pw = false;
    
    db.map(v => {
        if (v[0] === id_pw[0] && v[1] === id_pw[1]) {
            id = true;
            pw = true;
            return;
        }
        if (v[0] === id_pw[0] && v[1] !== id_pw[1]) {
            id = true;
        }
    });
    
    if (id && pw) {
        return 'login';
    } else if (id && pw === false) {
        return 'wrong pw';
    } else {
        return 'fail';
    }
}