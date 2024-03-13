const fortunes = [
    "Tudo posso naquele que me fortalece.Filipenses 4:13",
    "Ele fortalece o cansado e dá grande vigor ao que está sem forças.Isaías 40:29-31",
    "Mil poderão cair ao seu lado; dez mil, à sua direita, mas nada o atingirá. Salmos 91:7",
    "Sejam fortes e corajosos. Não tenham medo nem fiquem apavorados por causa delas, pois o Senhor, o seu Deus, vai com vocês; nunca os deixará, nunca os abandonará. Deuteronômio 31:6",
    "Alegrem-se sempre no Senhor. Novamente direi: Alegrem-se! Filipenses 4:4",
    "Sim, coisas grandiosas fez o Senhor por nós, por isso estamos alegres. Salmos 126:3",
    "Josué 1:9 “Não to mandei eu? Esforça-te, e tem bom ânimo; não pasmes, nem te espantes; porque o Senhor, teu Deus, é contigo, por onde quer que andares.”",
    "Mateus 6:33 “Mas buscai primeiro o Reino de Deus, e a sua justiça, e todas estas coisas vos serão acrescentadas.”",
    "Provérbios 16:3 “Confia ao Senhor as tuas obras, e teus pensamentos serão estabelecidos.”",
    "Romanos 8:31 “Que diremos, pois, à vista destas coisas? Se Deus é por nós, quem será contra nós?”",
    "Provérbios 16:9 “O coração do homem traça o seu caminho, mas o Senhor lhe dirige os passos.”",
    "1 Coríntios 15:58 “Portanto, meus amados irmãos, sede firmes e constantes, sempre abundantes na obra do Senhor, sabendo que, no Senhor, o vosso trabalho não é vão.”",
    "Salmos 46:1 “Deus é o nosso refúgio e fortaleza, socorro bem presente nas tribulações.”",
  ]
  const randomIndex = Math.floor(Math.random() * fortunes.length)
  
  const closedCookie = document.querySelector("#cookie")
  const openedCookie = document.querySelector
  const screen1 = document.querySelector(".screen1")
  const screen2 = document.querySelector(".screen2")
  
  closedCookie.addEventListener('click', openFortune)
  screen2.querySelector('button').addEventListener('click', handleResetFortune)
  
  
  
  
  function openFortune(e) {
    screen2.querySelector('p').innerText = fortunes[randomIndex]
    toggleScreen()
  }
  
  function handleResetFortune(){
    window.location.reload(true)
  }
  
  function toggleScreen(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
  }