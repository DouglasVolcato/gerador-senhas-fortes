function gerarSenha(){

    const letrasLowerCase = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','ç','z','x','c','v','b','n','m']
    const letrasUpperCase = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Ç','Z','X','C','V','B','N','M']
    const numeros = ['1','2','3','4','5','6','7','8','9','0']
    const caractaresEspeciais = ['!','@','#','$','%','&','*','£','¢','§','/','?','+']
    let senha = []

    while(true) {
        comeco: while(true) {
            senha = []
            let numeroTipo = 0
            let numero = 0
            let contadorLetrasLow = 0
            let contadorLetrasUpper = 0
            let contadorNumeros = 0
            let contadorEspeciais = 0
            let repetidos = 0
            for (let i = 1; i <= 10; i++) {
                numeroTipo = Math.floor(Math.random() * 3 + 1)
                if (numeroTipo == 1) {
                    numero = Math.floor(Math.random() * 2 + 1)
                    if (numero == 1) {
                        senha.push(letrasUpperCase[Math.floor(Math.random() * letrasUpperCase.length - 1)])
                        contadorLetrasUpper++
                    } else {
                        senha.push(letrasLowerCase[Math.floor(Math.random() * letrasLowerCase.length - 1)])
                        contadorLetrasLow++
                    }
                } else if (numeroTipo == 2) {
                    senha.push(numeros[Math.floor(Math.random() * numeros.length - 1)])
                    contadorNumeros++
                } if (numeroTipo == 3) {
                    senha.push(caractaresEspeciais[Math.floor(Math.random() * caractaresEspeciais.length - 1)])
                    contadorEspeciais++
                }
            }
            for (let i of senha) {
                for (let n of senha){
                    if (i == n){
                        repetidos++
                    }
                }
            }
            if (repetidos > senha.length) {continue comeco}
            for (let n of senha) {
                if (n == undefined) {continue comeco}
            }
            if (contadorLetrasLow >= 2 && contadorLetrasUpper >= 2 && contadorNumeros >= 2 && contadorEspeciais >= 2) {
                break
            } else {continue comeco}
        }

        const senhaFinal = (senha[0] + senha[1] + senha[2] + senha[3] + senha[4] + senha[5] + senha[6] + senha[7] + senha[8] + senha[9]);

        document.querySelector("p").innerText = senhaFinal;

        console.log(senhaFinal);
        break
    }
}

gerarSenha();