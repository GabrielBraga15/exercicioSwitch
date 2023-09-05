const opcao =prompt ("Escolha um dos players \na)Braga \nb)Pedro \nc)João")

let Braga="a"
let Pedro="b"
let João="c"

switch (opcao) {
  case "a":
    alert ("Você escolheu o palyer Braga!")
    break
     case "b":
      alert ("Você escolheu o palyer Pedro!")
      break
       case "c":
        alert ("Você escolheu o palyer João!")
        break
        default: alert ("Finalizando")
}