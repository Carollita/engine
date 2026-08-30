/* MÓDULOS */

const modules = [
/* 01 */
{
 id:1,
 title:"Greetings",
 icon:"👋🏿",
 description:"Cumprimentos básicos.",
 content:"Aprenda formas de cumprimentar, despedir-se e iniciar uma conversa em inglês.",
 example:"Hello! Good morning! How are you?",
 words:[
  ["Hello","Olá"],["Hi","Oi"],["Good morning","Bom dia"],
  ["Good afternoon","Boa tarde"],["Good evening","Boa noite"],
  ["Goodbye","Tchau"],["Welcome","Bem-vindo"],["See you","Até mais"]
 ],
 questions:[
  ["Hello significa:",["Olá","Tchau","Obrigado","Desculpe"],0],
  ["Good morning significa:",["Boa noite","Bom dia","Boa tarde","Até logo"],1],
  ["Goodbye significa:",["Olá","Tchau","Obrigado","Bem-vindo"],1],
  ["Hi significa:",["Oi","Obrigado","Desculpe","Até amanhã"],0],
  ["Welcome significa:",["Tchau","Bem-vindo","Boa noite","Por favor"],1],
  ["Good afternoon significa:",["Boa tarde","Boa noite","Bom dia","Até mais"],0],
  ["See you significa:",["Obrigado","Até mais","Olá","Desculpe"],1],
  ["Qual é uma despedida?",["Hello","Welcome","Goodbye","Hi"],2],
  ["Qual expressão é usada pela manhã?",["Good morning","Good evening","Goodbye","See you"],0],
  ["Qual expressão significa 'Oi'?",["Hi","Bye","Thanks","Sorry"],0]
 ]
},

/* 02 */
{
 id:2,
 title:"Introductions",
 icon:"👫",
 description:"Apresentação pessoal.",
 content:"Aprenda a dizer seu nome, perguntar o nome de alguém e falar informações pessoais simples.",
 example:"My name is Ana. I am a student. Nice to meet you!",
 words:[
  ["My name is...","Meu nome é..."],["What is your name?","Qual é o seu nome?"],
  ["I am...","Eu sou..."],["How are you?","Como você está?"],
  ["I am fine","Eu estou bem"],["Nice to meet you","Prazer em conhecer você"],
  ["Student","Estudante"],["Teacher","Professor(a)"]
 ],
 questions:[
  ["My name is... significa:",["Meu nome é...","Eu estou bem","Até mais","Obrigado"],0],
  ["What is your name? significa:",["Como você está?","Qual é o seu nome?","Onde você mora?","Quem é você?"],1],
  ["I am fine significa:",["Eu sou professor","Eu estou bem","Meu nome é","Até amanhã"],1],
  ["Nice to meet you significa:",["Prazer em conhecer você","Boa noite","Até logo","Com licença"],0],
  ["Como perguntar o nome?",["What is your name?","How are you?","Goodbye","I am fine"],0],
  ["Student significa:",["Professor","Estudante","Amigo","Médico"],1],
  ["Teacher significa:",["Professor","Estudante","Pai","Irmão"],0],
  ["Como dizer 'Eu sou Ana'?",["I am Ana","My name Ana","Ana is","I fine Ana"],0],
  ["How are you? pergunta:",["Nome","Idade","Como você está","Endereço"],2],
  ["Qual frase é uma apresentação?",["My name is Pedro","Goodbye","See you","Thank you"],0]
 ]
},

/* 03 */
{
  id: 3,
  title: "Alphabet",
  icon: "🔡",
  description: "Alfabeto e soletração.",
  content: "Conheça as 26 letras do alfabeto inglês e pratique a soletração de nomes e palavras.",
  example: "My name is Ana. A-N-A.",

  words: [
    ["A", "Apple 🍎"],
    ["B", "Book 📖"],
    ["C", "Cat 🐱"],
    ["D", "Dog 🐶"],
    ["E", "Elephant 🐘"],
    ["F", "Fish 🐟"],
    ["G", "Giraffe 🦒"],
    ["H", "House 🏠"],
    ["I", "Ice cream 🍦"],
    ["J", "Juice 🧃"],
    ["K", "Key 🔑"],
    ["L", "Lion 🦁"],
    ["M", "Monkey 🐒"],
    ["N", "Nose 👃"],
    ["O", "Orange 🍊"],
    ["P", "Pencil ✏️"],
    ["Q", "Queen 👑"],
    ["R", "Rabbit 🐰"],
    ["S", "Sun ☀️"],
    ["T", "Tree 🌳"],
    ["U", "Umbrella ☂️"],
    ["V", "Violin 🎻"],
    ["W", "Water 💧"],
    ["X", "X-ray 🩻"],
    ["Y", "Yellow 💛"],
    ["Z", "Zebra 🦓"]
  ],

  questions: [
    ["Qual é a primeira letra do alfabeto?", ["A", "B", "C", "D"], 0],
    ["Qual letra vem depois de A?", ["C", "B", "D", "E"], 1],
    ["Qual letra vem depois de B?", ["D", "C", "A", "E"], 1],
    ["Qual letra vem depois de C?", ["E", "D", "B", "F"], 1],
    ["Qual letra vem depois de D?", ["F", "E", "G", "C"], 1],
    ["Qual letra vem depois de E?", ["G", "F", "D", "H"], 1],
    ["Qual é a última letra do alfabeto?", ["X", "Y", "Z", "W"], 2],
    ["Como dizemos 'soletrar' em inglês?", ["Spell", "Read", "Listen", "Write"], 0],
    ["A palavra 'cat' começa com:", ["B", "C", "D", "T"], 1],
    ["A palavra 'dog' começa com:", ["D", "G", "O", "B"], 0]
  ]
},

/* 04 */
{
 id:4,
 title:"Numbers",
 icon:"1️⃣",
 description:"Números de 1 a 10.",
 content:"Aprenda números básicos e utilize-os para falar sobre idade, quantidades e informações simples.",
 example:"I am twelve years old.",
 words:[
  ["One","1"],["Two","2"],["Three","3"],["Four","4"],
  ["Five","5"],["Six","6"],["Seven","7"],["Eight","8"],
  ["Nine","9"],["Ten","10"]
 ],
 questions:[
  ["One é:",["1","2","3","4"],0],
  ["Two é:",["1","2","3","4"],1],
  ["Three é:",["2","3","4","5"],1],
  ["Five é:",["3","4","5","6"],2],
  ["Seven é:",["6","7","8","9"],1],
  ["Ten é:",["8","9","10","11"],2],
  ["Four é:",["4","5","6","7"],0],
  ["Six é:",["5","6","7","8"],1],
  ["Eight é:",["7","8","9","10"],1],
  ["Nine é:",["8","9","10","11"],1]
 ]
},

/* 05 */
{
 id:5,
 title:"Colors",
 icon:"🎨",
 description:"Principais cores.",
 content:"Aprenda cores básicas e utilize-as para descrever objetos e pessoas.",
 example:"The apple is red. The sky is blue.",
 words:[
  ["Red","Vermelho"],["Blue","Azul"],["Green","Verde"],
  ["Yellow","Amarelo"],["Orange","Laranja"],["Purple","Roxo"],
  ["Pink","Rosa"],["Black","Preto"],["White","Branco"],["Brown","Marrom"]
 ],
 questions:[
  ["Red é:",["Azul","Vermelho","Verde","Rosa"],1],
  ["Blue é:",["Azul","Amarelo","Preto","Roxo"],0],
  ["Green é:",["Verde","Rosa","Laranja","Branco"],0],
  ["Yellow é:",["Vermelho","Amarelo","Azul","Roxo"],1],
  ["Orange é:",["Laranja","Rosa","Marrom","Verde"],0],
  ["Purple é:",["Roxo","Preto","Branco","Amarelo"],0],
  ["Pink é:",["Rosa","Azul","Verde","Marrom"],0],
  ["Black é:",["Branco","Preto","Roxo","Cinza"],1],
  ["White é:",["Branco","Preto","Rosa","Verde"],0],
  ["Brown é:",["Marrom","Laranja","Azul","Amarelo"],0]
 ]
},

/* 06 */
{
 id:6,
 title:"Family",
 icon:"👨‍👩‍👧",
 description:"Membros da família.",
 content:"Aprenda a falar sobre familiares e relações de parentesco.",
 example:"This is my mother. Her name is Maria.",
 words:[
  ["Mother","Mãe"],["Father","Pai"],["Brother","Irmão"],
  ["Sister","Irmã"],["Grandmother","Avó"],["Grandfather","Avô"],
  ["Son","Filho"],["Daughter","Filha"],["Parents","Pais"],["Family","Família"]
 ],
 questions:[
  ["Mother é:",["Mãe","Pai","Irmã","Avó"],0],
  ["Father é:",["Pai","Avô","Filho","Irmão"],0],
  ["Brother é:",["Irmão","Irmã","Pai","Filho"],0],
  ["Sister é:",["Mãe","Irmã","Avó","Filha"],1],
  ["Grandmother é:",["Avó","Mãe","Irmã","Filha"],0],
  ["Grandfather é:",["Avô","Pai","Filho","Irmão"],0],
  ["Son é:",["Filho","Filha","Irmão","Pai"],0],
  ["Daughter é:",["Filha","Mãe","Irmã","Avó"],0],
  ["Parents significa:",["Pais","Filhos","Irmãos","Avós"],0],
  ["Family significa:",["Família","Amigo","Casa","Escola"],0]
 ]
},

/* 07 */
{
 id:7,
 title:"School",
 icon:"🏫",
 description:"Vocabulário escolar.",
 content:"Conheça palavras utilizadas na escola e expressões de sala de aula.",
 example:"Open your book, please. Listen and repeat.",
 words:[
  ["School","Escola"],["Teacher","Professor"],["Student","Estudante"],
  ["Book","Livro"],["Notebook","Caderno"],["Pencil","Lápis"],
  ["Pen","Caneta"],["Eraser","Borracha"],["Chair","Cadeira"],["Table","Mesa"]
 ],
 questions:[
  ["School significa:",["Escola","Casa","Biblioteca","Sala"],0],
  ["Teacher é:",["Professor","Aluno","Diretor","Amigo"],0],
  ["Student é:",["Estudante","Professor","Pai","Mãe"],0],
  ["Book é:",["Livro","Caderno","Lápis","Caneta"],0],
  ["Notebook é:",["Caderno","Livro","Mesa","Cadeira"],0],
  ["Pencil é:",["Lápis","Caneta","Borracha","Livro"],0],
  ["Pen é:",["Caneta","Lápis","Mesa","Caderno"],0],
  ["Eraser é:",["Borracha","Caneta","Livro","Mochila"],0],
  ["Chair é:",["Cadeira","Mesa","Livro","Porta"],0],
  ["Table é:",["Mesa","Cadeira","Escola","Livro"],0]
 ]
},

/* 08 */
{
 id:8,
 title:"Animals",
 icon:"🐾",
 description:"Animais comuns.",
 content:"Aprenda nomes de animais e utilize-os em frases simples.",
 example:"The dog is big. I like cats.",
 words:[
  ["Dog","Cachorro"],["Cat","Gato"],["Bird","Pássaro"],
  ["Fish","Peixe"],["Horse","Cavalo"],["Rabbit","Coelho"],
  ["Lion","Leão"],["Tiger","Tigre"],["Elephant","Elefante"],["Monkey","Macaco"]
 ],
 questions:[
  ["Dog é:",["Cachorro","Gato","Cavalo","Peixe"],0],
  ["Cat é:",["Gato","Cachorro","Coelho","Pássaro"],0],
  ["Bird é:",["Pássaro","Peixe","Cavalo","Tigre"],0],
  ["Fish é:",["Peixe","Leão","Gato","Macaco"],0],
  ["Horse é:",["Cavalo","Coelho","Cachorro","Tigre"],0],
  ["Rabbit é:",["Coelho","Gato","Leão","Pássaro"],0],
  ["Lion é:",["Leão","Tigre","Cavalo","Macaco"],0],
  ["Tiger é:",["Tigre","Elefante","Peixe","Leão"],0],
  ["Elephant é:",["Elefante","Coelho","Cavalo","Pássaro"],0],
  ["Monkey é:",["Macaco","Cachorro","Gato","Peixe"],0]
 ]
},

/* 09 */
{
 id:9,
 title:"Food and Drinks",
 icon:"🍎",
 description:"Alimentos e bebidas.",
 content:"Aprenda alimentos e bebidas e pratique preferências.",
 example:"I like apples. I don't like milk.",
 words:[
  ["Apple","Maçã"],["Banana","Banana"],["Bread","Pão"],
  ["Rice","Arroz"],["Egg","Ovo"],["Cheese","Queijo"],
  ["Milk","Leite"],["Water","Água"],["Juice","Suco"],["Cake","Bolo"]
 ],
 questions:[
  ["Apple é:",["Maçã","Banana","Pão","Bolo"],0],
  ["Banana é:",["Banana","Maçã","Laranja","Arroz"],0],
  ["Bread é:",["Pão","Arroz","Queijo","Ovo"],0],
  ["Rice é:",["Arroz","Pão","Leite","Bolo"],0],
  ["Egg é:",["Ovo","Queijo","Pão","Banana"],0],
  ["Cheese é:",["Queijo","Leite","Arroz","Ovo"],0],
  ["Milk é:",["Leite","Água","Suco","Bolo"],0],
  ["Water é:",["Água","Leite","Suco","Pão"],0],
  ["Juice é:",["Suco","Água","Leite","Bolo"],0],
  ["Cake é:",["Bolo","Pão","Ovo","Arroz"],0]
 ]
},

/* 10 */
{
 id:10,
 title:"House",
 icon:"🏠",
 description:"Casa e cômodos.",
 content:"Aprenda cômodos e objetos da casa para descrever onde as coisas estão.",
 example:"The book is in the bedroom.",
 words:[
  ["House","Casa"],["Bedroom","Quarto"],["Bathroom","Banheiro"],
  ["Kitchen","Cozinha"],["Living room","Sala"],["Door","Porta"],
  ["Window","Janela"],["Bed","Cama"],["Chair","Cadeira"],["Table","Mesa"]
 ],
 questions:[
  ["House é:",["Casa","Escola","Rua","Quarto"],0],
  ["Bedroom é:",["Quarto","Banheiro","Cozinha","Sala"],0],
  ["Bathroom é:",["Banheiro","Quarto","Sala","Cozinha"],0],
  ["Kitchen é:",["Cozinha","Sala","Quarto","Casa"],0],
  ["Living room é:",["Sala","Quarto","Cozinha","Banheiro"],0],
  ["Door é:",["Porta","Janela","Mesa","Cama"],0],
  ["Window é:",["Janela","Porta","Cadeira","Mesa"],0],
  ["Bed é:",["Cama","Mesa","Janela","Porta"],0],
  ["Chair é:",["Cadeira","Mesa","Cama","Janela"],0],
  ["Table é:",["Mesa","Cadeira","Cama","Porta"],0]
 ]
},

/* 11 */
{
 id:11,
 title:"Body",
 icon:"🧍",
 description:"Partes do corpo.",
 content:"Aprenda vocabulário básico do corpo humano.",
 example:"My eyes are brown.",
 words:[
  ["Head","Cabeça"],["Eyes","Olhos"],["Nose","Nariz"],
  ["Mouth","Boca"],["Ears","Orelhas"],["Hand","Mão"],
  ["Arm","Braço"],["Leg","Perna"],["Foot","Pé"],["Hair","Cabelo"]
 ],
 questions:[
  ["Head é:",["Cabeça","Mão","Braço","Pé"],0],
  ["Eyes são:",["Olhos","Orelhas","Mãos","Pernas"],0],
  ["Nose é:",["Nariz","Boca","Olho","Orelha"],0],
  ["Mouth é:",["Boca","Nariz","Mão","Cabeça"],0],
  ["Ears são:",["Orelhas","Olhos","Pés","Mãos"],0],
  ["Hand é:",["Mão","Braço","Perna","Pé"],0],
  ["Arm é:",["Braço","Mão","Perna","Cabeça"],0],
  ["Leg é:",["Perna","Braço","Pé","Mão"],0],
  ["Foot é:",["Pé","Mão","Perna","Braço"],0],
  ["Hair é:",["Cabelo","Cabeça","Olhos","Boca"],0]
 ]
},

/* 12 */
{
 id:12,
 title:"Clothes",
 icon:"🩳",
 description:"Roupas e acessórios.",
 content:"Aprenda nomes de roupas e acessórios e utilize cores e adjetivos para descrevê-los.",
 example:"My shirt is blue.",
 words:[
  ["Shirt","Camisa"],["Pants","Calça"],["Dress","Vestido"],
  ["Skirt","Saia"],["Shoes","Sapatos"],["Socks","Meias"],
  ["Jacket","Jaqueta"],["Hat","Chapéu"],["T-shirt","Camiseta"],["Jeans","Jeans"]
 ],
 questions:[
  ["Shirt é:",["Camisa","Calça","Vestido","Saia"],0],
  ["Pants é:",["Calça","Camisa","Sapato","Chapéu"],0],
  ["Dress é:",["Vestido","Saia","Camisa","Jaqueta"],0],
  ["Skirt é:",["Saia","Vestido","Calça","Camiseta"],0],
  ["Shoes são:",["Sapatos","Meias","Calças","Chapéus"],0],
  ["Socks são:",["Meias","Sapatos","Camisas","Jaquetas"],0],
  ["Jacket é:",["Jaqueta","Camisa","Vestido","Saia"],0],
  ["Hat é:",["Chapéu","Sapato","Cinto","Meia"],0],
  ["T-shirt é:",["Camiseta","Calça","Vestido","Jaqueta"],0],
  ["Jeans é:",["Jeans","Chapéu","Meia","Camisa"],0]
 ]
},

/* 13 */
{
 id:13,
 title:"Personal Pronouns",
 icon:"🕴",
 description:"Pronomes pessoais.",
 content:"Aprenda I, you, he, she, it, we e they e entenda como substituem pessoas e coisas.",
 example:"I am a student. She is my sister. They are friends.",
 words:[
  ["I","Eu"],["You","Você/Vocês"],["He","Ele"],["She","Ela"],
  ["It","Ele/Ela para coisa ou animal"],["We","Nós"],["They","Eles/Elas"],["Who","Quem"]
 ],
 questions:[
  ["I significa:",["Eu","Você","Ele","Nós"],0],
  ["You significa:",["Você/Vocês","Eu","Ela","Eles"],0],
  ["He significa:",["Ele","Ela","Nós","Eles"],0],
  ["She significa:",["Ela","Ele","Nós","Eu"],0],
  ["It é usado principalmente para:",["Coisas/animais","Apenas pessoas","Apenas professores","Apenas crianças"],0],
  ["We significa:",["Nós","Eles","Você","Ele"],0],
  ["They significa:",["Eles/Elas","Nós","Ela","Eu"],0],
  ["Qual pronome significa 'ela'?",["She","He","They","We"],0],
  ["Qual significa 'nós'?",["We","They","You","I"],0],
  ["Qual significa 'eles/elas'?",["They","We","She","He"],0]
 ]
},

/* 14 */
{
 id:14,
 title:"Verb To Be",
 icon:"📖",
 description:"Am, is e are.",
 content:"Estude o verbo to be nas formas afirmativa, negativa, interrogativa e contraída.",
 example:"I am a student. She is happy. They are friends.",
 words:[
  ["I am","Eu sou/estou"],["You are","Você é/está"],
  ["He is","Ele é/está"],["She is","Ela é/está"],
  ["It is","Isso é/está"],["We are","Nós somos/estamos"],
  ["They are","Eles são/estão"],["Is","É/está"],["Are","São/estão"],["Am","Sou/estou"]
 ],
 questions:[
  ["I ___ a student.",["am","is","are","be"],0],
  ["She ___ happy.",["am","is","are","be"],1],
  ["They ___ friends.",["am","is","are","be"],2],
  ["We ___ students.",["am","is","are","be"],2],
  ["He ___ my brother.",["am","is","are","be"],1],
  ["You ___ nice.",["am","is","are","be"],2],
  ["I am not significa:",["Eu não sou/estou","Eu sou","Ele não é","Nós somos"],0],
  ["Are you a student? é:",["Pergunta","Negação","Comando","Despedida"],0],
  ["She's é contração de:",["She is","She are","She am","She be"],0],
  ["They're é contração de:",["They are","They is","They am","They be"],0]
 ]
},

/* 15 */
{
 id:15,
 title:"This and That",
 icon:"👉",
 description:"Demonstrativos.",
 content:"Aprenda this, that, these e those para indicar objetos próximos e distantes.",
 example:"This is my book. Those are my shoes.",
 words:[
  ["This","Este/Esta"],["That","Aquele/Aquela"],
  ["These","Estes/Estas"],["Those","Aqueles/Aquelas"],
  ["Here","Aqui"],["There","Ali/Lá"],["Near","Perto"],["Far","Longe"]
 ],
 questions:[
  ["This indica algo:",["Perto","Longe","Ontem","Amanhã"],0],
  ["That indica algo:",["Mais distante","Sempre perto","No passado","No futuro"],0],
  ["These é usado para:",["Plural próximo","Singular distante","Plural distante","Singular próximo"],0],
  ["Those é usado para:",["Plural distante","Plural próximo","Singular","Verbos"],0],
  ["This is:",["Singular","Plural","Verbo","Pergunta"],0],
  ["These are:",["Plural","Singular","Passado","Negação"],0],
  ["___ is my book.",["This","These","Those","They"],0],
  ["___ are my shoes.",["These","This","That","It"],0],
  ["___ is your house over there.",["That","These","This","Those"],0],
  ["Those are:",["Aqueles/Aquelas","Este","Esta","Aqui"],0]
 ]
},

/* 16 */
{
 id:16,
 title:"There Is / There Are",
 icon:"📦",
 description:"Existência e quantidade.",
 content:"Aprenda a dizer que algo existe usando there is e there are.",
 example:"There is a book on the table / There are two chairs.",
 words:[
  ["There is","Há/Existe — singular"],["There are","Há/Existem — plural"],
  ["One","Um"],["Two","Dois"],["Room","Cômodo"],
  ["Table","Mesa"],["Chair","Cadeira"],["Book","Livro"]
 ],
 questions:[
  ["There is é usado com:",["Singular","Plural","Passado","Pessoas apenas"],0],
  ["There are é usado com:",["Plural","Singular","Passado","Verbos"],0],
  ["There ___ a book.",["is","are","am","be"],0],
  ["There ___ two chairs.",["are","is","am","be"],0],
  ["There is a cat significa:",["Há um gato","Há dois gatos","O gato está","Eu tenho um gato"],0],
  ["There are three books significa:",["Há três livros","Há um livro","Os livros são","Eu tenho livros"],0],
  ["Qual é singular?",["There is","There are","They are","We are"],0],
  ["Qual é plural?",["There are","There is","It is","He is"],0],
  ["There is a table significa:",["Há uma mesa","A mesa é grande","Eu tenho uma mesa","Mesa está aqui"],0],
  ["There are two students significa:",["Há dois estudantes","Há um estudante","Os estudantes são","Eu sou estudante"],0]
 ]
},

/* 17 */
{
 id:17,
 title:"Everyday English",
 icon:"💬",
 description:"Expressões do cotidiano.",
 content:"Aprenda expressões úteis para situações comuns e conversas rápidas.",
 example:"Excuse me. Can you help me, please? Thank you!",
 words:[
  ["Please","Por favor"],["Thank you","Obrigado(a)"],
  ["You're welcome","De nada"],["Sorry","Desculpe"],
  ["Excuse me","Com licença"],["Yes","Sim"],["No","Não"],
  ["Help","Ajuda"],["Good luck","Boa sorte"],["Take care","Cuide-se"]
 ],
 questions:[
  ["Please significa:",["Por favor","Obrigado","Desculpe","Ajuda"],0],
  ["Thank you significa:",["Obrigado","Por favor","De nada","Boa sorte"],0],
  ["You're welcome significa:",["De nada","Obrigado","Desculpe","Com licença"],0],
  ["Sorry significa:",["Desculpe","Obrigado","Sim","Ajuda"],0],
  ["Excuse me significa:",["Com licença","Boa sorte","De nada","Obrigado"],0],
  ["Yes significa:",["Sim","Não","Talvez","Nunca"],0],
  ["No significa:",["Não","Sim","Sempre","Talvez"],0],
  ["Help significa:",["Ajuda","Obrigado","Comida","Casa"],0],
  ["Good luck significa:",["Boa sorte","Boa noite","Até mais","Bom dia"],0],
  ["Take care significa:",["Cuide-se","Obrigado","Com licença","Boa tarde"],0]
 ]
},
];

const imageMap = {

 "Hello":"https://images.unsplash.com/photo-1616428362406-4ffd9fcbf023?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG9sJUMzJUExfGVufDB8fDB8fHwy",
 "Hi":"https://images.unsplash.com/photo-1595013008294-506e8f306d3c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG9sJUMzJUExfGVufDB8fDB8fHwy",
 "Good morning": "https://images.unsplash.com/photo-1552650272-b8a34e21bc4b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z29vZCUyMG1vcm5pbmd8ZW58MHx8MHx8fDI%3D",
 "Good evening": 'https://images.unsplash.com/photo-1765383830578-bfdab0991aa8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODV8fEdvb2QlMjBldmVuaW5nfGVufDB8fDB8fHwy',
 "Welcome": 'https://images.unsplash.com/photo-1533745848184-3db07256e163?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8V2VsY29tZXxlbnwwfHwwfHx8Mg%3D%3D',
 "Good afternoon": 'https://images.unsplash.com/flagged/photo-1560873199-2769fae341b9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8R29vZCUyMGFmdGVybm9vbnxlbnwwfHwwfHx8Mg%3D%3D',
 "Goodbye": 'https://images.unsplash.com/photo-1473625247510-8ceb1760943f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R29vZGJ5ZXxlbnwwfHwwfHx8Mg%3D%3D',
 "See you": 'https://images.unsplash.com/photo-1640976044256-07918794f735?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEdvb2RieWV8ZW58MHx8MHx8fDI%3D',
 "My name is...": 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwdGFsa2luZ3xlbnwwfHwwfHx8Mg%3D%3D',
 "What is your name?": 'https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlJTIwdGFsa2luZ3xlbnwwfHwwfHx8Mg%3D%3D',
 "I am...": 'https://images.unsplash.com/photo-1631885627891-19651751251f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBlb3BsZSUyMHRhbGtpbmd8ZW58MHx8MHx8fDI%3D',
 "How are you?": 'https://images.unsplash.com/photo-1573497491208-6b1acb260507?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cGVvcGxlJTIwdGFsa2luZ3xlbnwwfHwwfHx8Mg%3D%3D',
 "I am fine": 'https://images.unsplash.com/photo-1573496546038-82f9c39f6365?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlJTIwdGFsa2luZ3xlbnwwfHwwfHx8Mg%3D%3D',
 "Nice to meet you": 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlb3BsZSUyMHRhbGtpbmd8ZW58MHx8MHx8fDI%3D',
 "Student": 'https://images.unsplash.com/photo-1503676382389-4809596d5290?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fFN0dWRlbnR8ZW58MHx8MHx8fDI%3D',
 "Teacher": 'https://images.unsplash.com/photo-1664382953518-4a664ab8a8c9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFRlYWNoZXJ8ZW58MHx8MHx8fDI%3D',
 "A": 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXBwbGV8ZW58MHx8MHx8fDI%3D',
 "B": 'https://images.unsplash.com/photo-1550399105-c4db5fb85c18?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEJvb2t8ZW58MHx8MHx8fDI%3D',
"C": 'https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q2F0fGVufDB8fDB8fHwy',
"D": 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RG9nfGVufDB8fDB8fHwy',
"E": 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RWxlcGhhbnR8ZW58MHx8MHx8fDI%3D',
"F": 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RmlzaHxlbnwwfHwwfHx8Mg%3D%3D',
"G": 'https://images.unsplash.com/photo-1547721064-da6cfb341d50?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R2lyYWZmZXxlbnwwfHwwfHx8Mg%3D%3D',
"H": 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SG91c2V8ZW58MHx8MHx8fDI%3D',
"I": 'https://images.unsplash.com/photo-1718810125230-e8e2271354f5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SWNlJTIwY3JlYW18ZW58MHx8MHx8fDI%3D',
"J": 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SnVpY2V8ZW58MHx8MHx8fDI%3',
"K": 'https://images.unsplash.com/photo-1722487631997-cf1e0f92c2c4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEtleXxlbnwwfHwwfHx8Mg%3D%3D',
"L": 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TGlvbnxlbnwwfHwwfHx8Mg%3D%3D',
"M": 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TW9ua2V5fGVufDB8fDB8fHwy',
"N": 'https://images.unsplash.com/photo-1567516364473-233c4b6fcfbe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fE5vc2V8ZW58MHx8MHx8fDI%3D',
"O": 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8T3JhbmdlfGVufDB8fDB8fHwy',
"P": 'https://images.unsplash.com/photo-1593435221502-c5d7bfc26cab?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGVuY2lsJTIwfGVufDB8fDB8fHwy',
"Q": 'https://images.unsplash.com/photo-1643113231846-65fbe62ee7ab?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fFF1ZWVufGVufDB8fDB8fHwy',
"R": 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmFiYml0fGVufDB8fDB8fHwy',
"S": 'https://images.unsplash.com/photo-1594315590298-329f49c8dcb9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3VufGVufDB8fDB8fHwy',
"T": 'https://images.unsplash.com/photo-1528183429752-a97d0bf99b5a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VHJlZSUyMHxlbnwwfHwwfHx8Mg%3D%3D',
"U": 'https://images.unsplash.com/photo-1580051235428-f88ae8a2d53b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFVtYnJlbGxhfGVufDB8fDB8fHwy',
"V": 'https://images.unsplash.com/photo-1472312656035-eeef4726de6c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFZpb2xpbiUyMCUyMHxlbnwwfHwwfHx8Mg%3D%3D',
"W": 'https://images.unsplash.com/photo-1545897398-2aba891843b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFdhdGVyJTIwJTIwfGVufDB8fDB8fHwy',
"X": 'https://images.unsplash.com/photo-1616012481039-5de1dcb42934?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8WC1yYXklMjAlMjB8ZW58MHx8MHx8fDI%3D',
"Y": 'https://images.unsplash.com/flagged/photo-1593005510329-8a4035a7238f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8WWVsbG93fGVufDB8fDB8fHwy',
"Z": 'https://images.unsplash.com/photo-1526095179574-86e545346ae6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8WmVicmF8ZW58MHx8MHx8fDI%3D',
"One": 'https://images.unsplash.com/photo-1621440318464-72633426377b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T25lfGVufDB8fDB8fHwy',
"Two": 'https://images.unsplash.com/photo-1567254790685-6b6d6abe4689?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VHdvfGVufDB8fDB8fHwy',
"Three": 'https://images.unsplash.com/photo-1655272190720-858f8e77fe92?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFRocmVlfGVufDB8fDB8fHwy',
"Four": 'https://images.unsplash.com/photo-1678466645497-bd8cce48bd83?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Rm91cnxlbnwwfHwwfHx8Mg%3D%3D',
"Five": 'https://images.unsplash.com/photo-1583506573326-f44ad9661e45?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Rml2ZXxlbnwwfHwwfHx8Mg%3D%3D',
"Six": 'https://images.unsplash.com/photo-1484335629320-0e089b87a106?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2l4fGVufDB8fDB8fHwy',
"Seven": 'https://images.unsplash.com/photo-1571577275698-54f36820ee9b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2V2ZW58ZW58MHx8MHx8fDI%3D',
"Eight": 'https://images.unsplash.com/photo-1571664638276-b3e6b70499e6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RWlnaHR8ZW58MHx8MHx8fDI%3D',
"Nine": 'https://images.unsplash.com/photo-1588942411963-f40f321ea7d5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TmluZXxlbnwwfHwwfHx8Mg%3D%3D',
"Ten": 'https://images.unsplash.com/photo-1631453494181-f762d692583a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGVufGVufDB8fDB8fHwy',
"Red": 'https://images.unsplash.com/photo-1598476543599-72c8a60894d7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fFJlZHxlbnwwfHwwfHx8Mg%3D%3D',
"Blue": 'https://images.unsplash.com/photo-1578070181910-f1e514afdd08?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fEJsdWV8ZW58MHx8MHx8fDI%3D',
"Green": 'https://images.unsplash.com/photo-1708549566274-638eb2d2108b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fEdyZWVufGVufDB8fDB8fHwy',
"Yellow": 'https://images.unsplash.com/flagged/photo-1593005510329-8a4035a7238f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8WWVsbG93fGVufDB8fDB8fHwy',
"Orange": 'https://images.unsplash.com/photo-1530982011887-3cc11cc85693?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE9yYW5nZXxlbnwwfHwwfHx8Mg%3D%3D',
"Purple": 'https://images.unsplash.com/photo-1575318080244-dd217d9db1e2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fFB1cnBsZXxlbnwwfHwwfHx8Mg%3D%3D',
 "Pink": 'https://images.unsplash.com/photo-1570475735025-6cd1cd5c779d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fFBpbmt8ZW58MHx8MHx8fDI%3D',
 "Black": 'https://images.unsplash.com/photo-1651173859954-76c635fb2a0e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fEJsYWNrfGVufDB8fDB8fHwy',
 "White": 'https://images.unsplash.com/photo-1638132035918-90a22beaab3b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFdoaXRlfGVufDB8fDB8fHwy',
 "Brown": 'https://images.unsplash.com/photo-1629197520776-26a23457ec4c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIwfHxCcm93bnxlbnwwfHwwfHx8Mg%3D%3D',
 "Mother": 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TW90aGVyfGVufDB8fDB8fHwy',
  "Father": 'https://images.unsplash.com/photo-1605812830455-2fadc55bc4ba?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RmF0aGVyfGVufDB8fDB8fHwy',
 "Brother": 'https://images.unsplash.com/photo-1502143135356-dcdb8a9a3da6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QnJvdGhlcnxlbnwwfHwwfHx8Mg%3D%3D',
 "Sister": 'https://images.unsplash.com/photo-1697476638050-3fce4ad3ab44?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFNpc3RlcnxlbnwwfHwwfHx8Mg%3D%3D',
  "Grandmother": 'https://images.unsplash.com/photo-1663429122432-c2769373768f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R3JhbmRtb3RoZXJ8ZW58MHx8MHx8fDI%3D',
 "Grandfather": 'https://images.unsplash.com/photo-1496464749978-589a1f20b1e3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEdyYW5kZmF0aGVyfGVufDB8fDB8fHwy',
 "Son": 'https://images.unsplash.com/photo-1459200486184-972dac90bfc3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Ym95JTIwY2hpbGR8ZW58MHx8MHx8fDI%3D',
 "Daughter": 'https://images.unsplash.com/photo-1630864972901-052dfdc7fba4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z2l0bCUyMGNoaWxkfGVufDB8fDB8fHwy',
 "Parents": 'https://images.unsplash.com/photo-1629360021730-3d258452c425?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGFyZW50c3xlbnwwfHwwfHx8Mg%3D%3D',
 "Family": 'https://images.unsplash.com/photo-1529180979161-06b8b6d6f2be?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RmFtaWx5fGVufDB8fDB8fHwy',
 "School": 'https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U2Nob29sfGVufDB8fDB8fHwy',
 "Book": 'https://images.unsplash.com/photo-1550399105-c4db5fb85c18?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEJvb2t8ZW58MHx8MHx8fDI%3D',
  "Notebook": 'https://images.unsplash.com/photo-1612367980327-7454a7276aa7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Tm90ZWJvb2t8ZW58MHx8MHx8fDI%3D',
 "Pencil": 'https://images.unsplash.com/photo-1593435221502-c5d7bfc26cab?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UGVuY2lsfGVufDB8fDB8fHwy',
 "Pen": 'https://images.unsplash.com/photo-1601321268954-22646044f7d0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFBlbnxlbnwwfHwwfHx8Mg%3D%3D',
  "Eraser": 'https://images.unsplash.com/photo-1591456343293-8115760e73b7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RXJhc2VyfGVufDB8fDB8fHwy',
 "Chair": 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2hhaXJ8ZW58MHx8MHx8fDI%3D',
 "Table": 'https://images.unsplash.com/photo-1594125674956-61a9b49c8ecc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VGFibGV8ZW58MHx8MHx8fDI%3D',
 "": 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RG9nfGVufDB8fDB8fHwy',
 "Dog": 'https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8RG9nfGVufDB8fDB8fHwy',
 "Cat": 'https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2F0fGVufDB8fDB8fHwy',
 "Bird": 'https://images.unsplash.com/photo-1606567595334-d39972c85dbe?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmlyZHxlbnwwfHwwfHx8Mg%3D%3D',
 "Fish": 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RmlzaHxlbnwwfHwwfHx8Mg%3D%3D',
  "Horse": 'https://images.unsplash.com/photo-1553284965-83fd3e82fa5a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SG9yc2V8ZW58MHx8MHx8fDI%3D',
 "Rabbit": 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UmFiYml0fGVufDB8fDB8fHwy',
 "Lion": 'https://images.unsplash.com/photo-1516642499105-492ff3ac521b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fExpb258ZW58MHx8MHx8fDI%3D',
 "Tiger": 'https://images.unsplash.com/photo-1615963244664-5b845b2025ee?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VGlnZXJ8ZW58MHx8MHx8fDI%3D',
 "Elephant": 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RWxlcGhhbnR8ZW58MHx8MHx8fDI%3D',
  "Monkey": 'https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TW9ua2V5fGVufDB8fDB8fHwy',
 "Apple": 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QXBwbGV8ZW58MHx8MHx8fDI%3D',
 "Banana": 'https://images.unsplash.com/photo-1587132137056-bfbf0166836e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmFuYW5hfGVufDB8fDB8fHwy',
 "Bread": 'https://images.unsplash.com/photo-1598373182133-52452f7691ef?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QnJlYWR8ZW58MHx8MHx8fDI%3D',
 "Rice": 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UmljZXxlbnwwfHwwfHx8Mg%3D%3D',
  "Egg": 'https://images.unsplash.com/photo-1617611647086-bccca8c2cf84?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEVnZ3xlbnwwfHwwfHx8Mg%3D%3D',
 "Cheese": 'https://images.unsplash.com/photo-1683314573422-649a3c6ad784?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hlZXNlfGVufDB8fDB8fHwy',
 "Milk": 'https://images.unsplash.com/photo-1588710929895-6ee7a0a4d155?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TWlsa3xlbnwwfHwwfHx8Mg%3D%3D',
 "Water": 'https://images.unsplash.com/photo-1545897398-2aba891843b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fFdhdGVyfGVufDB8fDB8fHwy',
 "Juice": 'https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8SnVpY2V8ZW58MHx8MHx8fDI%3D',
  "Cake": 'https://images.unsplash.com/photo-1622621746668-59fb299bc4d7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fENha2V8ZW58MHx8MHx8fDI%3D',
 "House": 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SG91c2V8ZW58MHx8MHx8fDI%3D',
 "Bedroom": 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QmVkcm9vbXxlbnwwfHwwfHx8Mg%3D%3D',
 "Bathroom": 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmF0aHJvb218ZW58MHx8MHx8fDI%3D',
  "Kitchen": 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S2l0Y2hlbnxlbnwwfHwwfHx8Mg%3D%3D',
 "Living room": 'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TGl2aW5nJTIwcm9vbXxlbnwwfHwwfHx8Mg%3D%3D',
 "Door": 'https://images.unsplash.com/photo-1544641724-73f0d1bee38b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RG9vcnxlbnwwfHwwfHx8Mg%3D%3D',
 "Window": 'https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8V2luZG93fGVufDB8fDB8fHwy',
 "Bed": 'https://images.unsplash.com/photo-1617325247661-675ab4b64ae2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QmVkfGVufDB8fDB8fHwy',
  "Head": 'https://images.unsplash.com/photo-1570158268183-d296b2892211?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fEhlYWR8ZW58MHx8MHx8fDI%3D',
 "Eyes": 'https://images.unsplash.com/photo-1486649567693-aaa9b2e59385?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RXllc3xlbnwwfHwwfHx8Mg%3D%3D',
 "Nose": 'https://images.unsplash.com/photo-1531399975357-08f7f873bac3?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fE5vc2V8ZW58MHx8MHx8fDI%3D',
 "Mouth": 'https://images.unsplash.com/photo-1654373535457-383a0a4d00f9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TW91dGh8ZW58MHx8MHx8fDI%3D',
  "Ears": 'https://images.unsplash.com/photo-1596088869451-491e167efabb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RWFyc3xlbnwwfHwwfHx8Mg%3D%3D',
 "Hand": 'https://images.unsplash.com/photo-1617069897015-7d27a76232ed?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SGFuZHxlbnwwfHwwfHx8Mg%3D%3D',
 "Arm": 'https://images.unsplash.com/photo-1585571290034-3f59a2568563?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEFybXxlbnwwfHwwfHx8Mg%3D%3D',
 "Leg": 'https://images.unsplash.com/photo-1537094082840-dcbbfa99385f?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGVnfGVufDB8fDB8fHwy',
 "Foot": 'https://images.unsplash.com/photo-1507070491081-c86dc15d6e12?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Rm9vdHxlbnwwfHwwfHx8Mg%3D%3D',
  "Hair": 'https://images.unsplash.com/photo-1564141696939-9eb6e957ccfc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SGFpcnxlbnwwfHwwfHx8Mg%3D%3D',
 "There is": 'https://images.unsplash.com/photo-1519658422992-0c8495f08389?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b25lfGVufDB8fDB8fHwy',
 "There are": 'https://images.unsplash.com/photo-1491439833076-514a03b24a15?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHdvfGVufDB8fDB8fHwy',
 "Room": 'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFJvb218ZW58MHx8MHx8fDI%3D',
 "You": 'https://images.unsplash.com/photo-1547429213-3178de3bd3b8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8WW91fGVufDB8fDB8fHwy',
 "He": 'https://images.unsplash.com/photo-1650627404628-5d0eca0d9f19?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SGV8ZW58MHx8MHx8fDI%3D',
 "She": 'https://images.unsplash.com/photo-1713947506536-2edbac14d3bb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFNoZXxlbnwwfHwwfHx8Mg%3D%3D',
 "It": 'https://images.unsplash.com/photo-1573496799175-606e47a7d4f6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fEl0fGVufDB8fDB8fHwy',
  "We": 'https://images.unsplash.com/photo-1622037022824-0c71d511ef3c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V2V8ZW58MHx8MHx8fDI%3D',
 "They": 'https://images.unsplash.com/photo-1687360441027-27e70655b27e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fFRoZXl8ZW58MHx8MHx8fDI%3D',
 "Who": 'https://images.unsplash.com/photo-1617704716344-8d987ac681a4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8V2hvfGVufDB8fDB8fHwy'
};

modules.forEach(module => {

 module.words = module.words.map(word => {

  return {
   english:word[0],
   portuguese:word[1],
   image:imageMap[word[0]] || ""
  };

 });

});


/* DADOS DO ESTUDANTE */

let savedData =
 JSON.parse(localStorage.getItem("englishBloomData"));

if(!savedData){

 savedData={
  xp:0,
  stars:0,
  streak:0,
  completedModules:[],
  answeredQuestions:0,
  correctAnswers:0,
  matchesCompleted:0,
  wordsHeard:0,
  unlockedAchievements:[]
 };

}

savedData.completedModules ||= [];
savedData.answeredQuestions ||= 0;
savedData.correctAnswers ||= 0;
savedData.matchesCompleted ||= 0;
savedData.wordsHeard ||= 0;
savedData.unlockedAchievements ||= [];


/* SALVAR */

function saveData(){

 localStorage.setItem(
  "englishBloomData",
  JSON.stringify(savedData)
 );

}


/* ESTATISTICAS */

function updateStats(){

 document.getElementById("xpText").textContent=
  savedData.xp;

 document.getElementById("stars").textContent=
  savedData.stars;

 const level=
  Math.floor(savedData.xp/300)+1;

 document.getElementById("level").textContent=
  level;

 const xpLevel=
  savedData.xp%300;

 document.getElementById("xpBar").style.width=
  ((xpLevel/300)*100)+"%";

 document.getElementById("streak").textContent=
  savedData.streak;

}


/* RECOMPENSA */

function reward(xp,stars,title){

 savedData.xp+=xp;
 savedData.stars+=stars;

 saveData();
 updateStats();
 renderAchievements();

 const box=
  document.getElementById("reward");

 document.getElementById("rewardTitle").textContent=
  "✨ "+title;

 document.getElementById("rewardText").textContent=
  "+"+xp+" XP • +"+stars+" 🥇";

 box.style.display="block";

 setTimeout(()=>{
  box.style.display="none";
 },2500);

}


/* NAVEGAÇÃO */

function goHome(){

 document.getElementById("home").style.display="block";
 document.getElementById("moduleScreen").style.display="none";
 document.getElementById("achievementScreen").style.display="none";

 renderModules();
 renderAchievements();
 updateStats();

 window.scrollTo({
  top:0,
  behavior:"smooth"
 });

}


function showModules(){

 goHome();

 setTimeout(()=>{
  document.getElementById("moduleList")
   .scrollIntoView({behavior:"smooth"});
 },100);

}


function showAchievements(){

 document.getElementById("home").style.display="none";
 document.getElementById("moduleScreen").style.display="none";
 document.getElementById("achievementScreen").style.display="block";

 renderAchievements();

 window.scrollTo({
  top:0,
  behavior:"smooth"
 });

}


/* MODULOS */

function renderModules(){

 const list=
  document.getElementById("moduleList");

 list.innerHTML="";

 modules.forEach(module=>{

  const completed=
   savedData.completedModules.includes(module.id);

  const card=
   document.createElement("div");

  card.className="module";

  card.onclick=()=>{
   openModule(module.id);
  };

  card.innerHTML=`

   <div class="module-icon ${module.color}">
    ${module.icon}
   </div>

   <h3>
    ${module.id.toString().padStart(2,"0")}.
    ${module.title}
   </h3>

   <p>
    ${module.description}
   </p>

   <div class="module-bottom">

    <span class="badge">
     ${completed?"✓ CONCLUÍDO":"+100 XP"}
    </span>

   </div>

  `;

  list.appendChild(card);

 });

}


/* MODULO ATUAL */

let currentModule=null;
let currentQuestion=0;
let currentFlash=0;
let flashRevealed=false;


/* ABRIR MODULO */

function openModule(id){

 currentModule=
  modules.find(module=>module.id===id);

 document.getElementById("home").style.display="none";
 document.getElementById("achievementScreen").style.display="none";
 document.getElementById("moduleScreen").style.display="block";

 document.getElementById("moduleTitle").textContent=
  currentModule.icon+" "+currentModule.title;

 document.getElementById("moduleDescription").textContent=
  currentModule.description;

 document.getElementById("moduleBNCC").textContent=
  currentModule.bncc;

 document.getElementById("moduleContent").textContent=
  currentModule.content;

 document.getElementById("moduleExample").innerHTML=
  "<strong>💡 Exemplo:</strong><br>"+
  currentModule.example;

 renderWords();
 setupFlashcard();
 setupMatchGame();

 currentQuestion=0;

 renderQuiz();

 window.scrollTo({
  top:0,
  behavior:"smooth"
 });

 setTimeout(()=>{
  speak(currentModule.words[0].english);
 },600);

}


/* VOCABULARIO */

function renderWords(){

 const list=
  document.getElementById("wordList");

 list.innerHTML="";

 currentModule.words.forEach(word=>{

  const card=
   document.createElement("div");

  card.className="word-card";

  let imageHTML="";

  if(word.image){

   imageHTML=`
    <img
     src="${word.image}"
     alt="${word.english}"
     onerror="
      this.style.display='none';
      this.parentElement.innerHTML=
      '<div class=&quot;image-placeholder&quot;>⚠️ Imagem não encontrada</div>'
     "
    >
   `;

  }else{

   imageHTML=`
   `;

  }

  card.innerHTML=`

   <div class="word-image">
    ${imageHTML}
   </div>

   <div class="word-content">
    <strong>${word.english}</strong>
    <span>${word.portuguese}</span>
   </div>

   <button class="audio">
    🔊
   </button>

  `;

  card.querySelector(".audio").onclick=()=>{

   speak(word.english);

   savedData.wordsHeard++;

   saveData();
   renderAchievements();

  };

  list.appendChild(card);

 });

}


/* AUDIO */

function speak(text){

 if(!window.speechSynthesis){

  alert("Seu navegador não suporta reprodução de voz.");

  return;
 }

 speechSynthesis.cancel();

 const utterance=
  new SpeechSynthesisUtterance(text);

 utterance.lang="en-US";
 utterance.rate=.82;

 speechSynthesis.speak(utterance);

}


/* FLASHCARDS */

function setupFlashcard(){

 currentFlash=0;
 flashRevealed=false;

 updateFlashcard();

}


function updateFlashcard(){

 const word=
  currentModule.words[currentFlash];

 document.getElementById("flashWord").textContent=
  word.english;

 document.getElementById("flashMeaning").textContent=
  flashRevealed
  ? word.portuguese
  : "Clique para revelar";

}


function flipFlashcard(){

 flashRevealed=!flashRevealed;

 updateFlashcard();

}


function nextFlashcard(){

 currentFlash++;

 if(currentFlash>=currentModule.words.length){
  currentFlash=0;
 }

 flashRevealed=false;

 updateFlashcard();

 speak(
  currentModule.words[currentFlash].english
 );

}


/* JOGO DE ASSOCIACAO */

let firstMatch=null;
let secondMatch=null;
let lockMatch=false;
let matchPairs=0;


function setupMatchGame(){

 const container=
  document.getElementById("matchGame");

 container.innerHTML="";

 firstMatch=null;
 secondMatch=null;
 lockMatch=false;
 matchPairs=0;

 const selectedWords=
  currentModule.words.slice(0,4);

 let cards=[];

 selectedWords.forEach(word=>{

  cards.push({
   text:word.english,
   pair:word.portuguese
  });

  cards.push({
   text:word.portuguese,
   pair:word.english
  });

 });

 cards.sort(()=>Math.random()-.5);

 cards.forEach(data=>{

  const button=
   document.createElement("button");

  button.className="match-card";

  button.textContent=data.text;

  button.dataset.text=data.text;
  button.dataset.pair=data.pair;

  button.onclick=()=>{
   selectMatch(button);
  };

  container.appendChild(button);

 });

}


function selectMatch(card){

 if(lockMatch)return;

 if(card.classList.contains("done"))return;

 if(card===firstMatch)return;

 card.classList.add("selected");

 if(!firstMatch){

  firstMatch=card;
  return;

 }

 secondMatch=card;

 lockMatch=true;

 const correct=
  firstMatch.dataset.pair===
  secondMatch.dataset.text
  &&
  secondMatch.dataset.pair===
  firstMatch.dataset.text;

 if(correct){

  firstMatch.classList.remove("selected");
  secondMatch.classList.remove("selected");

  firstMatch.classList.add("done");
  secondMatch.classList.add("done");

  matchPairs++;

  reward(
   10,
   2,
   1,
   "Par encontrado!"
  );

  firstMatch=null;
  secondMatch=null;
  lockMatch=false;

  if(matchPairs===4){

   savedData.matchesCompleted++;

   saveData();

   reward(
    30,
    5,
    2,
    "Jogo completo!"
   );

  }

 }else{

  setTimeout(()=>{

   firstMatch.classList.remove("selected");
   secondMatch.classList.remove("selected");

   firstMatch=null;
   secondMatch=null;
   lockMatch=false;

  },800);

 }

}


/* QUIZ */

function renderQuiz(){

 const area=
  document.getElementById("quizArea");

 area.innerHTML="";

 if(currentQuestion>=currentModule.questions.length){

  area.innerHTML=`

   <div style="
    background:var(--green);
    padding:25px;
    border-radius:18px;
    text-align:center;
   ">

    <h2>🎉 Desafio concluído!</h2>

    <p style="margin-top:8px">
     Você respondeu às 10 questões.
    </p>

    <button
     class="btn btn-green"
     style="margin-top:18px"
     onclick="finishModule()">

     🚀 Concluir módulo

    </button>

   </div>
  `;

  return;
 }

 const data=
  currentModule.questions[currentQuestion];

 area.innerHTML=`

  <div class="question-counter">
   Questão ${currentQuestion+1}
   de ${currentModule.questions.length}
  </div>

  <div class="question">
   ${data[0]}
  </div>

  <div id="answers" class="answers"></div>

  <div id="quizFeedback" class="quiz-feedback"></div>

  <div class="quiz-actions">

   <span>
   Ganhe +20 XP por acerto
   </span>

   <button
    id="nextQuestion"
    class="btn btn-primary"
    style="display:none"
    onclick="nextQuestion()">

    Próxima →

   </button>

  </div>

 `;

 const answerContainer=
  document.getElementById("answers");

 data[1].forEach((option,index)=>{

  const button=
   document.createElement("button");

  button.className="answer";

  button.textContent=option;

  button.onclick=()=>{
   answerQuiz(
    button,
    index===data[2]
   );
  };

  answerContainer.appendChild(button);

 });

}


/* RESPONDER QUIZ */

function answerQuiz(button,correct){

 const buttons=
  document.querySelectorAll(
   "#answers .answer"
  );

 buttons.forEach(b=>{
  b.disabled=true;
 });

 savedData.answeredQuestions++;

 const feedback=
  document.getElementById("quizFeedback");

 if(correct){

  button.classList.add("correct");

  savedData.correctAnswers++;

  saveData();

  reward(
   20,
   5,
   1,
   "Resposta correta!"
  );

  feedback.textContent=
   "🎉 Muito bem! Você acertou!";

 }else{

  button.classList.add("wrong");

  saveData();

  feedback.textContent=
   "🌱 Quase! Revise o conteúdo e tente novamente.";

 }

 document.getElementById("nextQuestion")
  .style.display="inline-block";

}


/* =========================================================
   PROXIMA QUESTAO
========================================================= */

function nextQuestion(){

 currentQuestion++;

 renderQuiz();

}


/* =========================================================
   CONCLUIR MODULO
========================================================= */

function finishModule(){

 if(!currentModule)return;

 if(
  !savedData.completedModules.includes(
   currentModule.id
  )
 ){

  savedData.completedModules.push(
   currentModule.id
  );

  savedData.streak++;

  saveData();

  reward(
   50,
   10,
   3,
   "Módulo concluído!"
  );

  renderModules();
  renderAchievements();

 }else{

  alert(
   "Você já concluiu este módulo."
  );

 }

}


/* =========================================================
   CONQUISTAS
========================================================= */

const achievements=[

 {
  id:"first-step",
  icon:"🌱",
  title:"Primeiro passo",
  description:"Complete seu primeiro módulo.",
  unlocked:()=>savedData.completedModules.length>=1
 },

 {
  id:"three-modules",
  icon:"🔥",
  title:"Em movimento",
  description:"Complete 3 módulos.",
  unlocked:()=>savedData.completedModules.length>=3
 },

 {
  id:"five-modules",
  icon:"📚",
  title:"Estudioso",
  description:"Complete 5 módulos.",
  unlocked:()=>savedData.completedModules.length>=5
 },

 {
  id:"ten-modules",
  icon:"🎖",
  title:"Dedicação",
  description:"Complete 10 módulos.",
  unlocked:()=>savedData.completedModules.length>=10
 },

 {
  id:"twenty-modules",
  icon:"🚀",
  title:"Em jornada",
  description:"Complete 20 módulos.",
  unlocked:()=>savedData.completedModules.length>=20
 },

 {
  id:"all-modules",
  icon:"👑",
  title:"Experiente no inglês",
  description:"Complete todos os módulos.",
  unlocked:()=>savedData.completedModules.length===modules.length
 },

 {
  id:"first-correct",
  icon:"🎯",
  title:"Primeiro acerto",
  description:"Acerte sua primeira questão.",
  unlocked:()=>savedData.correctAnswers>=1
 },

 {
  id:"ten-correct",
  icon:"🔍",
  title:"Estudioso",
  description:"Acerte 10 questões.",
  unlocked:()=>savedData.correctAnswers>=10
 },

 {
  id:"fifty-correct",
  icon:"📃",
  title:"Especialista",
  description:"Acerte 50 questões.",
  unlocked:()=>savedData.correctAnswers>=50
 },

 {
  id:"hundred-correct",
  icon:"🏆",
  title:"Mestre",
  description:"Acerte 100 questões.",
  unlocked:()=>savedData.correctAnswers>=100
 },

 {
  id:"first-match",
  icon:"🧩",
  title:"Primeiro par",
  description:"Encontre seu primeiro par no jogo de associação.",
  unlocked:()=>savedData.matchesCompleted>=1
 },

 {
  id:"match-master",
  icon:"🧠",
  title:"Mestre da associação",
  description:"Complete 5 jogos de associação.",
  unlocked:()=>savedData.matchesCompleted>=5
 },

 {
  id:"listener",
  icon:"🔊",
  title:"Ouvido de ferro",
  description:"Ouça 10 palavras.",
  unlocked:()=>savedData.wordsHeard>=10
 },

 {
  id:"listener-master",
  icon:"🎧",
  title:"Ouvido de ouro",
  description:"Ouça 50 palavras.",
  unlocked:()=>savedData.wordsHeard>=50
 },

 {
  id:"ten-stars",
  icon:"🌠",
  title:"Caçador de medalhas",
  description:"Acumule 10 medalhas.",
  unlocked:()=>savedData.stars>=10
 },

 {
  id:"fifty-stars",
  icon:"🚀",
  title:"Colecionador de medalhas",
  description:"Acumule 50 medalhas.",
  unlocked:()=>savedData.stars>=50
 },

 {
  id:"level-five",
  icon:"📈",
  title:"Nível 5",
  description:"Chegue ao nível 5.",
  unlocked:()=>Math.floor(savedData.xp/300)+1>=5
 },

 {
  id:"level-ten",
  icon:"🏅",
  title:"Nível 10",
  description:"Chegue ao nível 10.",
  unlocked:()=>Math.floor(savedData.xp/300)+1>=10
 }

];


/* RENDERIZAR CONQUISTAS */

function renderAchievements(){

 const home=
  document.getElementById("homeAchievements");

 const page=
  document.getElementById("achievementList");

 if(home)home.innerHTML="";
 if(page)page.innerHTML="";

 achievements.forEach(achievement=>{

  const unlocked=
   achievement.unlocked();

  const html=`

   <div class="
    achievement
    ${unlocked?"unlocked":"locked"}
   ">

    <div class="lock">🔒</div>

    <div class="check">✓</div>

    <div class="achievement-icon">
     ${achievement.icon}
    </div>

    <strong>
     ${achievement.title}
    </strong>

    <p>
     ${achievement.description}
    </p>

    <div class="achievement-status">
     ${unlocked
       ?"✓ DESBLOQUEADA"
       :"🔒 BLOQUEADA"}
    </div>

   </div>

  `;

  if(home)
   home.insertAdjacentHTML(
    "beforeend",
    html
   );

  if(page)
   page.insertAdjacentHTML(
    "beforeend",
    html
   );

 });

}


/* INICIALIZACAO */

renderModules();
renderAchievements();
updateStats();
goHome();