let bag1: any = []
let bag2: any = []

bag1.push('faca', 'fita adesiva', 'alicate');
console.log('Mochila 1 ', bag1);
bag2.push('linha de nylon', 'martelo', 'isqueiro');
console.log('Mochila 2 ', bag2);
console.log('Vamos juntar essas mochilas numa nova mochila?')
const bag3 = bag1.concat(bag2, 'chapéu bonus por misturar as 2 ');

console.log('Essa é a mochila 3 juntando tudo:  ', bag3);
bag1.push(bag3)
console.log('A mochila 1 é maior e cabe duplicado o conteúdo dela + o conteúdo da mochila 3 ! Aqui está ela: ', bag1.join('-'))
console.log(bag2.indexOf('martelo'))

