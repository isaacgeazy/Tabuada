function tabuada() {
    let txtn = window.document.getElementById('txtn')
    let res = window.document.getElementById('res')
    if (txtn.value.length == 0) {
        alert('ERRO')
    } else {
        let n = Number(txtn.value)
        let c = 1
        res.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            res.appendChild(item)
            c++
        }

    }
}