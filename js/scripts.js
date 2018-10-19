let digito1
let digito2
let statusDigitio = false

let quantVotos = 0

let votosDeadPool = 0
let votosCyborg = 0
let votosEstrelar = 0
let votosMutano = 0
let votosRavena = 0
let votosRobin = 0
let votosBrancos = 0
let votosNulos = 0

function digitado(tecla){
	console.log(tecla)
	console.log(digito1)
	if((digito1 === undefined) && (digito2 === undefined)){
		if(tecla === 'tecla-1'){
			digito1 = 1
			console.log('D1: ', digito1)
			statusDigitio = true
			document.getElementById('digito1').value = digito1
		}else if(tecla === 'tecla-2'){
			digito1 = 2
			console.log('D1: ', digito1)
			statusDigitio = true
			document.getElementById('digito1').value = digito1
		}else if(tecla === 'tecla-3'){
			digito1 = 3
			console.log('D1: ', digito1)
			statusDigitio = true
			document.getElementById('digito1').value = digito1
		}else if(tecla === 'tecla-4'){
			digito1 = 4
			console.log('D1: ', digito1)
			statusDigitio = true
			document.getElementById('digito1').value = digito1
		}else if(tecla === 'tecla-5'){
			digito1 = 5
			console.log('D1: ', digito1)
			statusDigitio = true
			document.getElementById('digito1').value = digito1
		}else if(tecla === 'tecla-6'){
			digito1 = 6
			console.log('D1: ', digito1)
			statusDigitio = true
			document.getElementById('digito1').value = digito1
		}else if(tecla === 'tecla-7'){
			digito1 = 7
			console.log('D1: ', digito1)
			statusDigitio = true
			document.getElementById('digito1').value = digito1
		}else if(tecla === 'tecla-8'){
			digito1 = 8
			console.log('D1: ', digito1)
			statusDigitio = true
			document.getElementById('digito1').value = digito1
		}else if(tecla === 'tecla-9'){
			digito1 = 9
			console.log('D1: ', digito1)
			statusDigitio = true
			document.getElementById('digito1').value = digito1
		}else if(tecla === 'tecla-0'){
			digito1 = 0
			console.log('D1: ', digito1)
			statusDigitio = true
			document.getElementById('digito1').value = digito1
		}
	}else{
		if((statusDigitio) && (digito2 === undefined)){
			if(tecla === 'tecla-1'){
				digito2 = 1
				console.log('D2: ', digito2)
				document.getElementById('digito2').value = digito2
			}else if(tecla === 'tecla-2'){
				digito2 = 2
				console.log('D2: ', digito2)
				document.getElementById('digito2').value = digito2
			}else if(tecla === 'tecla-3'){
				digito2 = 3
				console.log('D2: ', digito2)
				document.getElementById('digito2').value = digito2
			}else if(tecla === 'tecla-4'){
				digito2 = 4
				console.log('D2: ', digito2)
				document.getElementById('digito2').value = digito2
			}else if(tecla === 'tecla-5'){
				digito2 = 5
				console.log('D2: ', digito2)
				document.getElementById('digito2').value = digito2
			}else if(tecla === 'tecla-6'){
				digito2 = 6
				console.log('D2: ', digito2)
				document.getElementById('digito2').value = digito2
			}else if(tecla === 'tecla-7'){
				digito2 = 7
				console.log('D2: ', digito2)
				document.getElementById('digito2').value = digito2
			}else if(tecla === 'tecla-8'){
				digito2 = 8
				console.log('D2: ', digito2)
				document.getElementById('digito2').value = digito2
			}else if(tecla === 'tecla-9'){
				digito2 = 9
				console.log('D2: ', digito2)
				document.getElementById('digito2').value = digito2
			}else if(tecla === 'tecla-0'){
				digito2 = 0
				console.log('D2: ', digito2)
				document.getElementById('digito2').value = digito2
			}
		}
	}

	candidato(digito1, digito2)
}

function corrigir(){
	document.getElementById('digito1').value = ''
	document.getElementById('digito2').value = ''

	digito1 = undefined
	digito2 = undefined
	statusDigitio = false

	document.getElementById('imgPresidente').src = 'img/branco.jpg'
	document.getElementById('nome').innerHTML = ''
	document.getElementById('partido').innerHTML = ''
}


function candidato(num1, num2){
	if((num1 === 1) && (num2 === 0)){
		document.getElementById('imgPresidente').src = 'img/deadpool.jpg'
		document.getElementById('nome').innerHTML = 'Deadpool'
		document.getElementById('partido').innerHTML = 'Fuck'
	}else if((num1 === 1) && (num2 === 5)){
		document.getElementById('imgPresidente').src = 'img/cyborg.jpg'
		document.getElementById('nome').innerHTML = 'Cyborg'
		document.getElementById('partido').innerHTML = 'Jovens Titãs'
	}else if((num1 === 2) && (num2 === 0)){
		document.getElementById('imgPresidente').src = 'img/estrelar.jpg'
		document.getElementById('nome').innerHTML = 'Estrelar'
		document.getElementById('partido').innerHTML = 'Jovens Titãs'
	}else if((num1 === 2) && (num2 === 5)){
		document.getElementById('imgPresidente').src = 'img/robin.jpg'
		document.getElementById('nome').innerHTML = 'Robin'
		document.getElementById('partido').innerHTML = 'Jovens Titãs'
	}else if((num1 === 3) && (num2 === 0)){
		document.getElementById('imgPresidente').src = 'img/ravena.jpg'
		document.getElementById('nome').innerHTML = 'Rabena'
		document.getElementById('partido').innerHTML = 'Jovens Titãs'
	}else if((num1 === 3) && (num2 === 5)){
		document.getElementById('imgPresidente').src = 'img/mutano.jpg'
		document.getElementById('nome').innerHTML = 'Mutano'
		document.getElementById('partido').innerHTML = 'Jovens Titãs'
	}
}

function votoBranco(){
	votosBrancos++
	quantVotos++
	setTimeout(finalizar, 3000)
	console.log('Votos Brancos: ', votosBrancos)
}

function reiniciar(){
	document.getElementById('fim-voto').style.display = 'none'
	
	if(quantVotos < 10){
		document.getElementById('container-hidden').style.display = 'block'
	}

	corrigir()
}

function inicio(){
	document.getElementById('container-hidden').style.display = 'block'
	document.getElementById('container-resultado').style.display = 'none'
	
	quantVotos = 0
	
	votosDeadPool = 0
	votosCyborg = 0
	votosEstrelar = 0
	votosMutano = 0
	votosRavena = 0
	votosRobin = 0
	votosBrancos = 0
	votosNulos = 0
	
	corrigir()
}

function finalizar(){
	document.getElementById('container-hidden').style.display = 'none'
	
	if(quantVotos < 10){
		document.getElementById('fim-voto').style.display = 'block'
		setTimeout(reiniciar, 3000)
	}

	terminarVotacao()
}

function confirmar(){
	if((digito1 === 0) && (digito2 === 0)){
		votosNulos++
		quantVotos++
		console.log('Votos Nulos: ', votosNulos)
		setTimeout(finalizar, 3000)
	}else if((digito1 === 1) && (digito2 === 0)){
		votosDeadPool++
		quantVotos++
		console.log('Votos Deadpool: ', votosDeadPool)
		setTimeout(finalizar, 3000)
	}else if((digito1 === 1) && (digito2 === 5)){
		votosCyborg++
		quantVotos++
		console.log('Votos Cyborg: ', votosCyborg)
		setTimeout(finalizar, 3000)
	}else if((digito1 === 2) && (digito2 === 0)){
		votosEstrelar++
		quantVotos++
		console.log('Votos Estrelar: ', votosEstrelar)
		setTimeout(finalizar, 3000)
	}else if((digito1 === 2) && (digito2 === 5)){
		votosRobin++
		quantVotos++
		console.log('Votos Robin: ', votosRobin)
		setTimeout(finalizar, 3000)
	}else if((digito1 === 3) && (digito2 === 0)){
		votosRavena++
		quantVotos++
		console.log('Votos Rabena: ', votosRavena)
		setTimeout(finalizar, 3000)
	}else if((digito1 === 3) && (digito2 === 5)){
		votosMutano++
		quantVotos++
		console.log('Votos Mutano: ', votosMutano)
		setTimeout(finalizar, 3000)
	}else{
		votosNulos++
		quantVotos++
		console.log('Votos Nulos: ', votosNulos)
		setTimeout(finalizar, 3000)
	}

}

console.log('Votos: ', quantVotos)

function terminarVotacao(){
	if(quantVotos === 10){
		document.getElementById('container-hidden').style.display = 'none'
		document.getElementById('fim-voto').style.display = 'none'
		document.getElementById('container-resultado').style.display = 'block'

		document.getElementById('deapool').innerHTML = votosDeadPool
		document.getElementById('cyborg').innerHTML = votosCyborg
		document.getElementById('robin').innerHTML = votosRobin
		document.getElementById('ravena').innerHTML = votosRavena
		document.getElementById('estrelar').innerHTML = votosEstrelar
		document.getElementById('mutano').innerHTML = votosMutano
		document.getElementById('brancos').innerHTML = votosBrancos
		document.getElementById('nulos').innerHTML = votosNulos
	}
}