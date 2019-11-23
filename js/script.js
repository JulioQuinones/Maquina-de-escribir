const caja = document.getElementById('text')
let write = srt =>{
    let array = srt.split('')
    let i = 0
    let print = setInterval(()=>{
        if (array[i] === ' '){
            caja.innerHTML+= array[i]
            caja.innerHTML+= array[i + 1]
            i  += 2
        }else{
            caja.innerHTML += array[i]
            i++
        }
        if(i === array.length) 
        clearInterval(print) 
        caja.style.textShadow = "0 0 10px #00b7f"  
        caja.style.opacity = "1"
    },120)
}
write('efecto de maquina de escribir con javascript')