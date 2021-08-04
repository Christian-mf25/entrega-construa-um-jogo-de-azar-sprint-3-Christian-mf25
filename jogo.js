const imgFinal = document.getElementById("imgFinal")
const resultado = document.getElementById("resultado")
const body = document.querySelector("body")

const btnPedra = document.getElementById("pedra")
const imgPedra = document.createElement("img")
imgPedra.src = "./imagens/pedra.png"
const botPedra = document.createElement("img")
botPedra.src = "./imagens/botPedra.png"

const btnPapel = document.getElementById("papel")
const imgPapel = document.createElement("img")
imgPapel.src = "./imagens/papel.png"
const botPapel = document.createElement("img")
botPapel.src = "./imagens/botPapel.png"

const btnTesoura = document.getElementById("tesoura")
const imgTesoura = document.createElement("img")
imgTesoura.src = "./imagens/tesoura.png"
const botTesoura = document.createElement("img")
botTesoura.src = "./imagens/botTesoura.png"

const jogarDeNovo = document.getElementById("jogarDeNovo")
jogarDeNovo.classList.add("esconder")

const jogadaBot = x => {
	let arr = ["pedra", "papel", "tesoura"]
	let escolha = Math.floor(Math.random() * 3)
	return arr[escolha]
}

const ganhador = (player, bot) => {
	let result = "Você perdeu, tente novamente."
	let pedraTesoura = player === "pedra" && bot === "tesoura"
	let papelPedra = player === "papel" && bot === "pedra"
	let tesouraPapel = player === "tesoura" && bot === "papel"
	let empate = player === bot
	if(pedraTesoura || papelPedra || tesouraPapel){
		result = "Parabéns, você ganhou!!"
	}
	if(empate){
		result = "Você empatou!!"
	}
	return result
}

btnPedra.addEventListener("click", function(){
	
	const msg = document.createElement("h3")
	let bot =  jogadaBot()
	let winner = ganhador("pedra",bot)
	let botImg = bot === "papel" ? botPapel : (bot === "pedra" ? botPedra : botTesoura)

	bot === "papel" ? body.style.backgroundColor = "#da8b86" : (bot === "tesoura" ? body.style.backgroundColor = "#cbf3f0" : body.style.backgroundColor = "#adb5bd")
	
	msg.innerText = winner
	resultado.appendChild(msg)
	imgFinal.appendChild(imgPedra)
	imgFinal.appendChild(botImg)

	
	btnTesoura.classList.add("esconder")
	btnPedra.classList.add("esconder")
	btnPapel.classList.add("esconder")
	jogarDeNovo.classList.remove("esconder")
})

btnPapel.addEventListener("click", function(){
	
	const msg = document.createElement("h3")
	let bot = jogadaBot()
	let winner = ganhador("papel", bot)
	let botImg = bot === "papel" ? botPapel : (bot === "pedra" ? botPedra : botTesoura)
	
	bot === "tesoura" ? body.style.backgroundColor = "#da8b86" : (bot === "pedra" ? body.style.backgroundColor = "#cbf3f0" : body.style.backgroundColor = "#adb5bd")

	msg.innerText = winner
	resultado.appendChild(msg)
	imgFinal.appendChild(imgPapel)
	imgFinal.appendChild(botImg)

	btnTesoura.classList.add("esconder")
	btnPedra.classList.add("esconder")
	btnPapel.classList.add("esconder")
	jogarDeNovo.classList.remove("esconder")
})

btnTesoura.addEventListener("click", function(){
	
	const msg = document.createElement("h3")
	let bot = jogadaBot()
	let winner = ganhador("tesoura", bot)
	let botImg = bot === "tesoura" ? botTesoura : (bot === "papel" ? botPapel : botPedra)

	bot === "pedra" ? body.style.backgroundColor = "#da8b86" : (bot === "papel" ? body.style.backgroundColor = "#cbf3f0" : body.style.backgroundColor = "#adb5bd")

	msg.innerText = winner
	resultado.appendChild(msg)
	imgFinal.appendChild(imgTesoura)
	imgFinal.appendChild(botImg)

	btnTesoura.classList.add("esconder")
	btnPedra.classList.add("esconder")
	btnPapel.classList.add("esconder")
	jogarDeNovo.classList.remove("esconder")
})

jogarDeNovo.addEventListener("click", function(){
	location.reload()
})