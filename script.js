const M = [
  // FUNDAMENTOS
  {section:'Fundamentos da matéria', level:'Básico', t:'Símbolos dos elementos', d:'Reconheça os símbolos químicos mais comuns.', q:'Selecione H, O e C.', type:'el', goal:['H','O','C'], elements:['H','O','C','Na','Cl','N','Fe'], explanation:'Todo elemento químico possui um símbolo. Alguns têm uma letra e outros duas; quando há duas, a primeira é maiúscula e a segunda minúscula. Use o nome do elemento como pista, sem decorar tudo de uma vez.', hint:'Procure os símbolos correspondentes a hidrogênio, oxigênio e carbono.'},
  {section:'Fundamentos da matéria', level:'Básico', t:'Elemento ou composto?', d:'Diferencie substâncias simples e compostas.', q:'Qual opção é uma substância composta?', type:'choice', goal:'H2O', choices:[{v:'O2',title:'O₂',sub:'Apenas um tipo de elemento.'},{v:'H2O',title:'H₂O',sub:'Mais de um tipo de elemento.'},{v:'Fe',title:'Fe',sub:'Apenas um tipo de elemento.'},{v:'N2',title:'N₂',sub:'Apenas um tipo de elemento.'}], explanation:'Uma substância simples possui apenas um tipo de elemento. Uma substância composta possui dois ou mais elementos diferentes. O número de átomos não é o que define a classificação; o que importa é a variedade de elementos.', hint:'Conte quantos símbolos de elementos diferentes aparecem em cada opção.'},
  {section:'Fundamentos da matéria', level:'Básico', t:'Índices químicos I', d:'Entenda o número pequeno das fórmulas.', q:'Digite o total de átomos de cada fórmula.', type:'indices', goal:[3,3,4], inputs:[{formula:'H₂O',answer:3,label:'H₂O → total de átomos'},{formula:'CO₂',answer:3,label:'CO₂ → total de átomos'},{formula:'NH₃',answer:4,label:'NH₃ → total de átomos'}], explanation:'O índice informa quantos átomos daquele elemento aparecem na fórmula. Quando não existe índice, considere 1. Depois, some as quantidades dos diferentes elementos.', hint:'Transforme cada índice em quantidade de átomos e some.'},
  {section:'Fundamentos da matéria', level:'Intermediário', t:'Índices químicos II', d:'Leia fórmulas com mais elementos.', q:'Calcule o total de átomos em cada fórmula.', type:'indices', goal:[3,5,7], inputs:[{formula:'CaCl₂',answer:3,label:'CaCl₂ → total de átomos'},{formula:'Al₂O₃',answer:5,label:'Al₂O₃ → total de átomos'},{formula:'H₂SO₄',answer:7,label:'H₂SO₄ → total de átomos'}], explanation:'A mesma regra continua valendo quando aparecem três ou mais elementos: cada símbolo sem índice vale 1 e cada índice indica a quantidade daquele elemento.', hint:'Some os números ligados a cada símbolo, lembrando que símbolo sem índice vale 1.'},
  {section:'Fundamentos da matéria', level:'Desafio', t:'Símbolos dos elementos II', d:'Reconheça símbolos menos óbvios.', q:'Selecione Na, Cl, Mg e Fe.', type:'el', goal:['Na','Cl','Mg','Fe'], elements:['Na','Cl','Mg','Fe','Ca','K','N','O'], explanation:'Nem todos os símbolos seguem exatamente o início do nome em português. Alguns vêm de nomes históricos ou latinos. Nesta etapa, o objetivo é começar a reconhecer esses símbolos pelo uso frequente.', hint:'Na é usado para sódio; Cl para cloro; Mg para magnésio; Fe para ferro.'},

  // FORMULAS E MOLECULAS
  {section:'Fórmulas e moléculas', level:'Básico', t:'Monte a água', d:'Transforme uma fórmula em blocos.', q:'Monte H₂O.', type:'mol', goal:['H','H','O'], elements:['H','O','C','N','Cl'], explanation:'Agora a fórmula vira uma construção. Cada clique representa um átomo. O desafio é interpretar os índices e escolher apenas os átomos necessários para formar a molécula pedida.', hint:'Use o índice do hidrogênio para descobrir quantos H você precisa. O oxigênio aparece sem índice.'},
  {section:'Fórmulas e moléculas', level:'Básico', t:'Monte o gás carbônico', d:'Pratique a leitura de índices.', q:'Monte CO₂.', type:'mol', goal:['C','O','O'], elements:['C','O','H','N','Cl'], explanation:'O símbolo sem índice vale uma unidade. Um índice 2 indica duas unidades daquele elemento. Leia a fórmula antes de clicar para evitar colocar blocos a mais.', hint:'Um elemento aparece uma vez e o outro aparece duas vezes. Descubra qual é qual.'},
  {section:'Fórmulas e moléculas', level:'Intermediário', t:'Monte a amônia', d:'Leia uma fórmula com três átomos.', q:'Monte NH₃.', type:'mol', goal:['N','H','H','H'], elements:['H','N','O','C','Cl'], explanation:'Quando o índice aumenta, a construção também aumenta. O importante é converter a escrita da fórmula em uma quantidade exata de blocos.', hint:'O nitrogênio aparece uma vez. O índice do hidrogênio determina quantos H devem ser adicionados.'},
  {section:'Fórmulas e moléculas', level:'Intermediário', t:'Monte o metano', d:'Monte uma molécula de hidrocarboneto.', q:'Monte CH₄.', type:'mol', goal:['C','H','H','H','H'], elements:['C','H','O','N','Cl'], explanation:'Hidrocarbonetos são formados apenas por carbono e hidrogênio. Leia cada elemento e seu índice separadamente e só então monte o conjunto.', hint:'Comece pelo C, que não tem índice. Depois observe o índice do H.'},
  {section:'Fórmulas e moléculas', level:'Desafio', t:'Monte o cloreto de cálcio', d:'Interprete uma fórmula iônica com dois elementos.', q:'Monte CaCl₂.', type:'mol', goal:['Ca','Cl','Cl'], elements:['Ca','Cl','Na','Mg','O','H'], explanation:'Nem toda fórmula representa uma molécula isolada; muitas fórmulas representam a proporção entre íons em um composto. Para o exercício, pense apenas na quantidade indicada para cada elemento.', hint:'O cálcio aparece sem índice. O cloro aparece com índice 2.'},

  // REAÇÕES E CONSERVACAO
  {section:'Reações e conservação', level:'Básico', t:'Reagentes e produtos', d:'Separe os participantes de uma reação.', q:'Monte H₂ + O₂ → H₂O.', type:'reaction', goal:['H₂','O₂','H₂O'], reactionBlocks:['H₂','O₂','H₂O'], explanation:'Uma equação química tem uma estrutura: reagentes à esquerda e produtos à direita. A seta indica a transformação. Primeiro identifique os participantes; depois monte a ordem.', hint:'Pergunte: quais substâncias estão reagindo? Qual substância está sendo formada?'},
  {section:'Reações e conservação', level:'Básico', t:'Quem é reagente?', d:'Identifique o lado dos reagentes.', q:'Qual alternativa contém apenas reagentes?', type:'choice', goal:'r', choices:[{v:'r',title:'H₂ + O₂',sub:'Estão antes da seta.'},{v:'p',title:'H₂O',sub:'Está depois da seta.'},{v:'mist',title:'H₂ + H₂O',sub:'Mistura os dois lados.'}], explanation:'Os reagentes são as substâncias presentes no início da transformação. Em uma equação convencional, eles aparecem antes da seta.', hint:'Olhe apenas para o que aparece antes de →.'},
  {section:'Reações e conservação', level:'Intermediário', t:'Conservação dos átomos', d:'Descubra se uma reação está balanceada.', q:'H₂ + O₂ → H₂O está balanceada?', type:'choice', goal:'nao', choices:[{v:'sim',title:'SIM',sub:'Os átomos são iguais nos dois lados.'},{v:'nao',title:'NÃO',sub:'Existe diferença na quantidade de algum elemento.'}], explanation:'Na conservação da matéria, os átomos permanecem presentes; eles apenas mudam de organização. Compare elemento por elemento nos dois lados da seta.', hint:'Conte H de um lado e depois do outro. Faça o mesmo com O.'},
  {section:'Reações e conservação', level:'Intermediário', t:'Contagem na reação', d:'Compare a quantidade de átomos dos dois lados.', q:'Digite quantos átomos existem no total em cada lado de H₂ + O₂ → H₂O.', type:'indices', goal:[4,3], inputs:[{formula:'Reagentes',answer:4,label:'H₂ + O₂ → total de átomos à esquerda'},{formula:'Produto',answer:3,label:'H₂O → total de átomos à direita'}], explanation:'Você pode analisar uma reação como um problema de contagem. Some os átomos de todas as fórmulas de um lado e compare com o outro. Esse é um primeiro passo; depois, o mais importante é comparar cada elemento separadamente.', hint:'No lado esquerdo há duas fórmulas. Some os átomos de cada uma antes de comparar.'},
  {section:'Reações e conservação', level:'Desafio', t:'Onde está o erro?', d:'Use conservação para encontrar o problema.', q:'Qual elemento NÃO está conservado em H₂ + O₂ → H₂O?', type:'choice', goal:'O', choices:[{v:'H',title:'Hidrogênio (H)',sub:'Compare os dois lados.'},{v:'O',title:'Oxigênio (O)',sub:'Compare os dois lados.'},{v:'nenhum',title:'Nenhum',sub:'Todos são iguais.'}], explanation:'Uma equação só respeita a conservação quando cada elemento tem a mesma quantidade nos dois lados. Basta encontrar um elemento que quebre essa igualdade para perceber que há algo a corrigir.', hint:'Conte apenas o oxigênio nos reagentes e depois no produto.'},

  // TIPOS DE REACAO
  {section:'Tipos de reações', level:'Básico', t:'Síntese I', d:'Reconheça uma formação.', q:'Qual opção representa uma síntese?', type:'choice', goal:'sintese', choices:[{v:'sintese',title:'A + B → AB',sub:'Vários reagentes formam um produto.'},{v:'decomp',title:'AB → A + B',sub:'Um reagente forma vários produtos.'},{v:'troca',title:'AB + CD → AD + CB',sub:'Há troca de componentes.'}], explanation:'Síntese é a combinação de duas ou mais substâncias para formar uma substância principal. Observe o número de substâncias antes e depois da seta.', hint:'Procure a alternativa em que os reagentes se juntam para formar um único produto.'},
  {section:'Tipos de reações', level:'Intermediário', t:'Síntese II', d:'Aplique o padrão a uma reação real.', q:'Qual reação abaixo é uma síntese?', type:'choice', goal:'sintese2', choices:[{v:'sintese2',title:'2H₂ + O₂ → 2H₂O',sub:'Duas substâncias formam uma.'},{v:'decomp2',title:'2H₂O → 2H₂ + O₂',sub:'Uma substância é separada.'},{v:'troca2',title:'HCl + NaOH → NaCl + H₂O',sub:'Há reorganização de componentes.'}], explanation:'Agora a identificação não depende apenas das letras A e B. Olhe para a quantidade de substâncias de cada lado e perceba qual padrão está acontecendo.', hint:'Ignore os coeficientes por enquanto e observe quantas fórmulas diferentes existem antes e depois da seta.'},
  {section:'Tipos de reações', level:'Básico', t:'Decomposição I', d:'Reconheça quando uma substância se separa.', q:'Qual opção representa uma decomposição?', type:'choice', goal:'decomp', choices:[{v:'sintese',title:'A + B → AB',sub:'Duas substâncias se combinam.'},{v:'decomp',title:'AB → A + B',sub:'Uma substância origina duas.'},{v:'troca',title:'AB + CD → AD + CB',sub:'Dois compostos trocam partes.'}], explanation:'Decomposição é o inverso do padrão de síntese: uma substância reagente se transforma em duas ou mais substâncias.', hint:'Conte primeiro quantas substâncias existem antes da seta.'},
  {section:'Tipos de reações', level:'Intermediário', t:'Decomposição II', d:'Identifique o padrão em uma equação real.', q:'Qual reação é uma decomposição?', type:'choice', goal:'decomp2', choices:[{v:'sintese2',title:'2Mg + O₂ → 2MgO',sub:'Combinação.'},{v:'decomp2',title:'CaCO₃ → CaO + CO₂',sub:'Uma substância forma duas.'},{v:'troca2',title:'AgNO₃ + NaCl → AgCl + NaNO₃',sub:'Troca de componentes.'}], explanation:'Em uma decomposição real, o lado dos reagentes apresenta uma fórmula que se separa em mais de um produto. Os coeficientes não mudam esse padrão.', hint:'Veja qual alternativa tem uma única fórmula reagente e várias fórmulas produto.'},
  {section:'Tipos de reações', level:'Intermediário', t:'Simples troca', d:'Reconheça a troca entre elemento e composto.', q:'Qual opção representa uma simples troca?', type:'choice', goal:'simples', choices:[{v:'simples',title:'A + BC → AC + B',sub:'Um elemento substitui outro.'},{v:'dupla',title:'AB + CD → AD + CB',sub:'Dois compostos trocam partes.'},{v:'decomp',title:'AB → A + B',sub:'Uma substância se separa.'}], explanation:'Na simples troca, um elemento livre reage com um composto e substitui um dos seus componentes. O padrão visual ajuda a reconhecer a reação.', hint:'Procure um elemento sozinho entre os reagentes.'},
  {section:'Tipos de reações', level:'Intermediário', t:'Dupla troca', d:'Reconheça a troca entre dois compostos.', q:'Qual opção representa uma dupla troca?', type:'choice', goal:'dupla', choices:[{v:'simples',title:'A + BC → AC + B',sub:'Elemento + composto.'},{v:'dupla',title:'AB + CD → AD + CB',sub:'Dois compostos trocam componentes.'},{v:'sintese',title:'A + B → AB',sub:'Formação de um produto.'}], explanation:'Na dupla troca, dois compostos participam e seus componentes trocam de parceiro. Pense como uma reorganização em pares.', hint:'Procure dois compostos antes e dois compostos depois da seta.'},
  {section:'Tipos de reações', level:'Intermediário', t:'Neutralização', d:'Relacione ácido, base, sal e água.', q:'Qual alternativa representa uma neutralização?', type:'choice', goal:'neut', choices:[{v:'neut',title:'HCl + NaOH → NaCl + H₂O',sub:'Ácido + base → sal + água.'},{v:'comb',title:'CH₄ + O₂ → CO₂ + H₂O',sub:'Combustão.'},{v:'decomp',title:'CaCO₃ → CaO + CO₂',sub:'Decomposição.'}], explanation:'Neutralização é um caso muito comum de reação entre ácido e base. Em exercícios escolares, o padrão mais conhecido é a formação de sal e água.', hint:'Procure um ácido reagindo com uma base e formando sal e água.'},
  {section:'Tipos de reações', level:'Desafio', t:'Combustão', d:'Reconheça o padrão de uma combustão.', q:'Qual alternativa é uma combustão de hidrocarboneto?', type:'choice', goal:'comb', choices:[{v:'comb',title:'C₃H₈ + O₂ → CO₂ + H₂O',sub:'Hidrocarboneto reagindo com oxigênio.'},{v:'dupla',title:'HCl + NaOH → NaCl + H₂O',sub:'Neutralização.'},{v:'decomp',title:'CaCO₃ → CaO + CO₂',sub:'Decomposição.'}], explanation:'Na combustão de um hidrocarboneto, um composto formado por C e H reage com O₂. Os produtos mais comuns nesses exercícios são CO₂ e H₂O.', hint:'Procure um composto com C e H reagindo com O₂.'},

  // BALANCEAMENTO
  {section:'Balanceamento', level:'Básico', t:'Balanceie a água', d:'Aprenda a usar coeficientes.', q:'Balanceie H₂ + O₂ → H₂O.', type:'bal', goal:[2,1,2], ns:['H₂','O₂','H₂O'], arrowAt:2, explanation:'Balancear significa deixar a quantidade de cada elemento igual nos dois lados. Você pode alterar coeficientes na frente das fórmulas, mas não os índices dentro delas.', hint:'Escolha um elemento que esteja desequilibrado e ajuste primeiro os coeficientes. Depois reconte tudo.'},
  {section:'Balanceamento', level:'Básico', t:'Balanceie o ácido clorídrico', d:'Pratique uma reação simples.', q:'Balanceie H₂ + Cl₂ → HCl.', type:'bal', goal:[1,1,2], ns:['H₂','Cl₂','HCl'], arrowAt:2, explanation:'A melhor estratégia é comparar um elemento por vez e usar os coeficientes para reproduzir as quantidades encontradas no lado oposto.', hint:'Há dois H e dois Cl no lado esquerdo. Pense em quantas moléculas de HCl seriam necessárias para atingir essas quantidades.'},
  {section:'Balanceamento', level:'Intermediário', t:'Neutralização balanceada', d:'Balanceie uma reação ácido-base.', q:'Balanceie NaOH + HCl → NaCl + H₂O.', type:'bal', goal:[1,1,1,1], ns:['NaOH','HCl','NaCl','H₂O'], arrowAt:2, explanation:'Conte Na, Cl, O e H nos dois lados. Neste caso, todos precisam continuar representados na mesma proporção total.', hint:'Conte os quatro elementos antes de mexer nos coeficientes.'},
  {section:'Balanceamento', level:'Intermediário', t:'Combustão do metano', d:'Use a estratégia C → H → O.', q:'Balanceie CH₄ + O₂ → CO₂ + H₂O.', type:'bal', goal:[1,2,1,2], ns:['CH₄','O₂','CO₂','H₂O'], arrowAt:2, explanation:'Para muitas combustões de hidrocarbonetos, uma ordem útil é carbono, depois hidrogênio e por último oxigênio. A ordem reduz a quantidade de tentativas.', hint:'Primeiro iguale C. Depois iguale H. Só então descubra o coeficiente do O₂.'},
  {section:'Balanceamento', level:'Intermediário', t:'Formação do óxido de ferro', d:'Trabalhe com índices diferentes nos lados.', q:'Balanceie Fe + O₂ → Fe₂O₃.', type:'bal', goal:[4,3,2], ns:['Fe','O₂','Fe₂O₃'], arrowAt:2, explanation:'Quando os índices são diferentes, pode ser útil procurar um número que torne as contagens compatíveis. Depois ajuste os coeficientes dos reagentes.', hint:'Comece pelo ferro: o produto possui dois Fe por fórmula. Depois use a contagem de oxigênio para fechar a equação.'},
  {section:'Balanceamento', level:'Desafio', t:'Combustão do propano', d:'Balanceie uma combustão maior.', q:'Balanceie C₃H₈ + O₂ → CO₂ + H₂O.', type:'bal', goal:[1,5,3,4], ns:['C₃H₈','O₂','CO₂','H₂O'], arrowAt:2, explanation:'Use novamente C → H → O. O maior cuidado está no oxigênio, porque ele aparece nos dois produtos indireta ou diretamente pelo total necessário.', hint:'Use o índice do carbono para definir o CO₂ e o índice do hidrogênio para definir a água. Deixe o O₂ por último.'},
  {section:'Balanceamento', level:'Desafio final', t:'Desafio final', d:'Junte conservação e balanceamento.', q:'Balanceie Fe₂O₃ + CO → Fe + CO₂.', type:'bal', goal:[1,3,2,3], ns:['Fe₂O₃','CO','Fe','CO₂'], arrowAt:2, explanation:'Aqui vale combinar tudo: leia índices, escolha uma ordem de elementos e altere somente coeficientes. Depois confira cada elemento independentemente.', hint:'Comece pelo ferro e depois passe para o carbono. Use o oxigênio para confirmar o resultado no final.'}
];

/* ==========================================================
   MOTOR DO SITE — aprendizagem, progresso e modos extras
   ========================================================== */
const SECTION_INFO={
  'Fundamentos da matéria':{concept:'Você vai aprender a ler símbolos, reconhecer substâncias e interpretar índices.',how:'Leia a fórmula por partes: símbolos primeiro, números pequenos depois. O objetivo é transformar uma escrita em uma contagem que faça sentido.',try:'Antes de responder, tente explicar com suas próprias palavras o que cada símbolo e cada número pequeno representam.'},
  'Fórmulas e moléculas':{concept:'Aqui você transforma fórmulas em blocos e aprende a conferir se escolheu os elementos e quantidades certos.',how:'Leia a fórmula da esquerda para a direita e converta cada índice em quantidade de átomos. Depois confira se não entrou nenhum elemento extra.',try:'Monte mentalmente a lista de átomos antes de clicar. Isso ajuda a perceber erros antes da verificação.'},
  'Reações e conservação':{concept:'Uma reação mostra substâncias iniciais, uma transformação e os produtos formados. Os átomos precisam ser conservados.',how:'Observe os dois lados da seta e compare elemento por elemento. Não confunda a soma total de átomos com a quantidade de cada elemento.',try:'Faça uma pequena tabela mental: H de um lado e do outro; depois O; depois os outros elementos.'},
  'Tipos de reações':{concept:'As reações podem ser reconhecidas por padrões de organização dos reagentes e produtos.',how:'Ignore detalhes que não mudam o tipo e observe quantas substâncias entram e saem, além de como os componentes se reorganizam.',try:'Tente identificar o padrão antes de pensar em nomes. O nome vem depois da estrutura.'},
  'Balanceamento':{concept:'Balancear é ajustar quantidades de fórmulas para que cada elemento tenha a mesma contagem nos dois lados.',how:'Altere apenas coeficientes. Trabalhe com um elemento por vez e reconte tudo depois de cada mudança importante.',try:'Evite tentar acertar todos os elementos de uma vez. Escolha uma ordem e confirme o resultado no final.'}
};

const MIXED=[
  {t:'Mistério da fórmula',d:'Descubra quantos átomos existem na fórmula apresentada.',q:'Quantos átomos existem ao todo em Al₂(SO₄)₃?',type:'manual',answer:17,explanation:'Quando aparecem parênteses, o índice de fora multiplica tudo que está dentro. Primeiro conte o que há no grupo e depois aplique o multiplicador.',hint:'Calcule a quantidade de Al. Depois calcule a quantidade total de S e O separadamente e some.'},
  {t:'Classificação surpresa',d:'Identifique o padrão sem receber o nome da matéria.',q:'Qual estrutura representa uma dupla troca?',type:'choice',goal:'dupla',choices:[{v:'dupla',title:'AB + CD → AD + CB',sub:'Dois compostos reorganizam seus parceiros.'},{v:'decomp',title:'AB → A + B',sub:'Uma substância se separa.'},{v:'sintese',title:'A + B → AB',sub:'Duas substâncias se unem.'}],explanation:'Aqui a dica está na estrutura: compare quantos reagentes e produtos aparecem e como os componentes mudam de parceiro.',hint:'Procure dois compostos em cada lado e uma reorganização entre eles.'},
  {t:'Blocos sob pressão',d:'Monte a fórmula correta a partir de uma descrição.',q:'Monte Ca(OH)₂ com os blocos disponíveis.',type:'mol',goal:['Ca','O','H','O','H'],elements:['Ca','O','H','Na','Cl'],explanation:'Parênteses indicam que o grupo interno aparece mais de uma vez. Transforme a fórmula em uma sequência de átomos antes de montar.',hint:'Leia Ca separadamente e depois veja quantas vezes o grupo OH aparece.'},
  {t:'Equação escondida',d:'Balanceie sem receber a ordem de qual elemento começar.',q:'Balanceie Al + O₂ → Al₂O₃.',type:'bal',goal:[4,3,2],ns:['Al','O₂','Al₂O₃'],arrowAt:2,explanation:'O desafio é escolher uma boa ordem de contagem. Procure tornar iguais as quantidades de um elemento e depois confira o outro.',hint:'Observe os índices do produto e procure uma quantidade que funcione para os dois elementos.'},
  {t:'Desafio do laboratório',d:'Use a lógica de conservação para conferir uma reação.',q:'A reação 2Na + Cl₂ → 2NaCl está balanceada?',type:'choice',goal:'sim',choices:[{v:'sim',title:'SIM',sub:'Cada elemento tem a mesma quantidade nos dois lados.'},{v:'nao',title:'NÃO',sub:'Existe um elemento com quantidades diferentes.'}],explanation:'Não aceite uma equação só porque ela parece simétrica. Conte os átomos de cada elemento nos dois lados.',hint:'Conte Na. Depois conte Cl. Faça a comparação antes de decidir.'}
];

const ACHIEVEMENTS=[
  {id:'first',icon:'🌱',title:'Primeiro passo',desc:'Conclua a primeira missão.',test:s=>s.done.length>=1},
  {id:'ten',icon:'⚛️',title:'Construtor de moléculas',desc:'Conclua 10 missões.',test:s=>s.done.length>=10},
  {id:'section',icon:'📚',title:'Seção concluída',desc:'Conclua todos os exercícios de uma seção.',test:s=>Object.values(sectionProgress()).some(x=>x.done===x.total&&x.total>0)},
  {id:'balance',icon:'⚖️',title:'Balanceador',desc:'Conclua 5 exercícios de balanceamento.',test:s=>M.map((m,i)=>[m,i]).filter(([m,i])=>m.type==='bal'&&s.done.includes(i)).length>=5},
  {id:'hintless',icon:'🧠',title:'Pensamento próprio',desc:'Acerte 5 exercícios sem usar dicas.',test:s=>s.hintless>=5},
  {id:'mixed',icon:'🧩',title:'Mente flexível',desc:'Conclua 3 desafios mistos.',test:s=>s.mixedDone?.length>=3},
  {id:'lab',icon:'⚗️',title:'Explorador do laboratório',desc:'Monte 10 combinações no laboratório.',test:s=>s.labBuilds>=10},
  {id:'perfect',icon:'💎',title:'Mão firme',desc:'Conclua uma missão sem errar nenhuma vez.',test:s=>Object.values(s.attempts||{}).some(v=>v===1)}
];

const DEFAULT_STATE={i:0,done:[],xp:0,mistakes:{},attempts:{},hintsUsed:{},hintless:0,mixedDone:[],labBuilds:0,sectionLessonOpen:true,view:'trail',streak:0,lastDoneAt:null,weakCleared:{}};
let legacy={};try{legacy=JSON.parse(localStorage.getItem('quimicaBlocosV3')||'null')||{};}catch(e){legacy={};}
let S={...DEFAULT_STATE,...legacy};
S.done=Array.isArray(S.done)?S.done:[];S.mistakes=S.mistakes||{};S.attempts=S.attempts||{};S.hintsUsed=S.hintsUsed||{};S.mixedDone=Array.isArray(S.mixedDone)?S.mixedDone:[];S.weakCleared=S.weakCleared||{};
let mode=S.view||'trail';let reviewMission=null;let mixedIndex=0;let currentHintLevel=0;let currentAttempts=0;let currentAnswered=false;let currentBuilder=[];let labBuilder=[];let labMode='free';
const $=id=>document.getElementById(id);
function save(){S.view=mode;localStorage.setItem('quimicaBlocosV4',JSON.stringify(S));localStorage.setItem('quimicaBlocosV3',JSON.stringify(S));}
function normalize(v){return String(v??'').trim().replace(/\s+/g,'').toLowerCase();}
function escapeHTML(v){return String(v).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));}
function isFinalMission(i){const m=M[i], next=M[i+1];return !next||next.section!==m.section;}
function currentSection(){const m=M[S.i];return m?.section||M[0].section;}
function sectionProgress(){const groups={};M.forEach((m,i)=>{groups[m.section]??={done:0,total:0};groups[m.section].total++;if(S.done.includes(i))groups[m.section].done++;});return groups;}
function completedLevel(m){return m.level||'Básico';}
function levelClass(level){return level.toLowerCase().includes('desafio')?'challenge':level.toLowerCase().includes('intermedi')?'intermediate':'basic';}
function showToast(msg){const t=$('toast');t.textContent=msg;t.classList.add('show');clearTimeout(showToast.timer);showToast.timer=setTimeout(()=>t.classList.remove('show'),2200);}

function missions(){
  const groups={};M.forEach((m,i)=>(groups[m.section]??=[]).push({m,i}));
  $('missions').innerHTML=Object.entries(groups).map(([section,items])=>{
    const completed=items.filter(x=>S.done.includes(x.i)).length;
    return `<div class="section-group"><div class="section-title"><span>${section}</span><small>${completed}/${items.length}</small></div>${items.map(({m,i})=>{
      const locked=i>0&&!S.done.includes(i-1);const done=S.done.includes(i);const final=isFinalMission(i);
      return `<button class="mission ${i===S.i&&mode==='trail'?'active':''} ${done?'done':''} ${locked?'locked':''} ${final?'final':''}" data-i="${i}" ${locked?'disabled':''} aria-label="${escapeHTML(m.t)}"><span class="num">${done?'✓':final?'★':i+1}</span><span class="mission-text"><strong>${escapeHTML(m.t)}</strong><em>${escapeHTML(m.level)}${final?' · Final':''}</em></span></button>`;
    }).join('')}</div>`;
  }).join('');
  document.querySelectorAll('.mission').forEach(b=>b.onclick=()=>{const i=+b.dataset.i;if(b.disabled)return;S.i=i;mode='trail';save();render();closeMobileDrawers();});
  $('xp').textContent=S.xp;const p=Math.round(S.done.length/M.length*100);$('pctMini').textContent=p+'%';const miniBar=$('pctMiniBar');if(miniBar)miniBar.style.width=p+'%';$('streak').textContent='🔥 '+(S.streak||0);
}

function setActiveNav(){document.querySelectorAll('.view-btn').forEach(b=>b.classList.toggle('active',b.dataset.view===mode));}

function updateRightPanel(){
  const title=$('sideNowTitle'), text=$('sideNowText'), meta=$('sideNowMeta'), lesson=$('sideLesson'), pct=$('sideProgressPct'), bar=$('sideProgressBar'), ptext=$('sideProgressText'), lessonBtn=$('sideLessonToggle'), hintBtn=$('sideHint'), trailBtn=$('sideBackTrail');
  if(!title) return;
  const total=M.length, done=S.done.length, percent=Math.round(done/total*100);
  pct.textContent=percent+'%'; bar.style.width=percent+'%'; ptext.textContent=`${done} de ${total} missões concluídas`;
  meta.innerHTML='';
  if(mode==='trail'){
    const m=M[S.i], info=SECTION_INFO[m.section]||{}; title.textContent=m.t; text.textContent=m.d;
    meta.innerHTML=`<span>${escapeHTML(m.section)}</span><span>${escapeHTML(m.level)}</span><span>Ex. ${M.map(x=>x.section).filter(x=>x===m.section).length?M.slice(0,S.i+1).filter(x=>x.section===m.section).length:1}</span>`;
    lesson.innerHTML=`<b>Como pensar</b><br>${escapeHTML(info.how||'Quebre o problema em partes menores e compare cada etapa.')}`;
    lessonBtn.hidden=false; hintBtn.hidden=false; trailBtn.hidden=true; lessonBtn.textContent=S.sectionLessonOpen?'📖 Ocultar aula':'📖 Mostrar aula';
  }else if(mode==='lab'){
    title.textContent='Laboratório'; text.textContent='Teste ideias livremente e observe o que suas construções representam.'; meta.innerHTML='<span>Modo livre</span><span>Sem resposta certa</span>';
    lesson.innerHTML='<b>Experimente</b><br>Monte combinações, apague blocos e compare como a fórmula muda. Use isso para formular hipóteses antes de voltar à trilha.';
    lessonBtn.hidden=true; hintBtn.hidden=true; trailBtn.hidden=false;
  }else if(mode==='mixed'){
    const m=MIXED[mixedIndex]; title.textContent=m.t; text.textContent=m.d; meta.innerHTML='<span>Desafio misto</span><span>Aplicação</span>';
    lesson.innerHTML='<b>Estratégia</b><br>Primeiro descubra qual conceito o exercício está pedindo. Só depois escolha a ferramenta ou o método que vai usar.';
    lessonBtn.hidden=true; hintBtn.hidden=false; trailBtn.hidden=false;
  }else if(mode==='review'){
    if(reviewMission===null){title.textContent='Revisão inteligente'; text.textContent='Conteúdos que merecem uma segunda tentativa.'; meta.innerHTML='<span>Recuperação</span>'; lesson.innerHTML='<b>Reveja sem pressão</b><br>Os erros servem para localizar pontos de dificuldade. Revise o conceito e tente novamente.';}
    else{const m=M[reviewMission]; title.textContent=m.t; text.textContent=m.d; meta.innerHTML='<span>Revisão</span><span>'+escapeHTML(m.level)+'</span>'; lesson.innerHTML='<b>Recupere o raciocínio</b><br>'+escapeHTML(m.explanation);}
    lessonBtn.hidden=true; hintBtn.hidden=reviewMission===null; trailBtn.hidden=false;
  }else{
    title.textContent='Conquistas e progresso'; text.textContent='Acompanhe seu caminho e seus desafios concluídos.'; meta.innerHTML='<span>Perfil</span><span>'+S.xp+' XP</span>'; lesson.innerHTML='<b>Continue explorando</b><br>Use as conquistas e o progresso das seções para decidir o que estudar em seguida.'; lessonBtn.hidden=true; hintBtn.hidden=true; trailBtn.hidden=false;
  }
}

function setDrawer(drawer, open){
  if(drawer!=='left') return;
  const el=$('sidebar'); if(!el)return;
  const desktop=window.matchMedia('(min-width:1201px)').matches;
  if(desktop){
    document.body.classList.toggle('left-closed',!open);
  }else{
    el.classList.toggle('drawer-open',open);
    document.body.classList.toggle('drawering',open);
    const scrim=$('drawerScrim');
    if(scrim) scrim.setAttribute('aria-hidden',String(!open));
  }
  const btn=$('leftToggle'); if(btn)btn.setAttribute('aria-expanded',String(open));
}
function toggleDrawer(drawer){
  if(drawer!=='left') return;
  const desktop=window.matchMedia('(min-width:1201px)').matches;
  const el=$('sidebar'); if(!el)return;
  const open=desktop ? !document.body.classList.contains('left-closed') : el.classList.contains('drawer-open');
  setDrawer('left',!open);
}
function closeMobileDrawers(){
  if(window.matchMedia('(max-width:1200px)').matches) setDrawer('left',false);
}

function render(){setActiveNav();missions();if(mode==='trail')renderTrail();else if(mode==='lab')renderLab();else if(mode==='mixed')renderMixed();else if(mode==='review')renderReview();else renderAchievements();}

function renderTrail(){
  const m=M[S.i], sp=sectionProgress(), info=SECTION_INFO[m.section]||{}; currentHintLevel=0;currentAttempts=S.attempts[S.i]||0;currentAnswered=false;
  const sectionItems=M.map((x,i)=>[x,i]).filter(([x])=>x.section===m.section);const sectionNum=sectionItems.findIndex(([,i])=>i===S.i)+1;const sec=sp[m.section];
  $('app').innerHTML=`<div class="page">
    <div class="hero"><div class="hero-copy"><span class="eyebrow">APRENDA FAZENDO · ${escapeHTML(m.section.toUpperCase())}</span><h1>${escapeHTML(m.t)}</h1><p>${escapeHTML(m.d)}</p></div><div class="progress-card"><div class="row"><span>Progresso da trilha</span><b>${Math.round(S.done.length/M.length*100)}%</b></div><div class="progress-track"><i style="width:${S.done.length/M.length*100}%"></i></div><div class="row"><span>${S.done.length}/${M.length} missões</span><span>${S.xp} XP</span></div></div></div>
    <div class="section-lesson"><div class="lesson-head"><div><span class="section-kicker">📚 AULA RÁPIDA · ${sectionNum}/${sectionItems.length}</span><h3>${escapeHTML(m.section)}</h3><p>${escapeHTML(info.concept||'Aprenda o conceito e depois coloque a ideia em prática.')}</p></div><button class="lesson-toggle" id="lessonToggle">${S.sectionLessonOpen?'Ocultar aula':'Mostrar aula'}</button></div>${S.sectionLessonOpen?`<div class="lesson-body"><div class="lesson-box"><strong>🧭 Como pensar</strong><span>${escapeHTML(info.how||'Quebre o problema em partes menores e confira cada etapa.')}</span></div><div class="lesson-box"><strong>🧪 Antes de responder</strong><span>${escapeHTML(info.try||'Tente prever o caminho antes de usar uma dica.')}</span></div></div>`:''}</div>
    <div class="progress-panel"><h3>📊 Progresso da seção</h3><div class="progress-line"><span>${escapeHTML(m.section)}</span><div class="bar"><i style="width:${sec.done/sec.total*100}%"></i></div><b>${sec.done}/${sec.total}</b></div></div>
    <article class="card"><div class="step"><small>${escapeHTML(m.section.toUpperCase())} · EXERCÍCIO ${sectionNum}</small><span class="level-badge ${levelClass(m.level)}">${escapeHTML(m.level)}</span>${isFinalMission(S.i)?'<span class="final-badge">🏁 Desafio final</span>':''}<span class="tries" id="tries">❤️❤️❤️</span></div><h2>${escapeHTML(m.q)}</h2><p class="prompt">Pense primeiro. Use uma dica apenas quando realmente precisar.</p><div id="explanation" class="explanation">📘 <b>Como pensar:</b> ${escapeHTML(m.explanation)}</div><div class="thinking-note">🧠 <b>Seu objetivo:</b> encontrar o caminho até a resposta, não apenas acertar.</div><div id="workspace"></div><div id="feedback" class="feedback"></div><div id="hintPanel" class="hint-panel hidden"></div><div class="actions"><button class="primary" id="check">Verificar</button><button class="secondary" id="hint">💡 Dica (1/3)</button><button class="primary hidden" id="next">${S.i<M.length-1?'Próxima missão →':'🏆 Finalizar trilha'}</button></div></article></div>`;
  $('lessonToggle').onclick=()=>{S.sectionLessonOpen=!S.sectionLessonOpen;save();renderTrail();};
  mountExercise(m);
  $('check').onclick=()=>checkCurrent('trail');$('hint').onclick=showHint;
  $('next').onclick=()=>{if(S.i<M.length-1){S.i++;save();render();}else{mode='achievements';save();render();}};
}

function renderExerciseShell(m,contextLabel){
  currentHintLevel=0;currentAttempts=contextLabel==='review'?0:(S.attempts[S.i]||0);currentAnswered=false;
  return `<div class="page"><div class="page-head"><div><span class="section-kicker">${escapeHTML(contextLabel==='review'?'REVISÃO INTELIGENTE':'DESAFIO MISTO')}</span><h1>${escapeHTML(m.t)}</h1><p>${escapeHTML(m.d)}</p></div><button class="back-mini" id="backView">← Voltar</button></div><article class="card"><div class="step"><small>${escapeHTML(contextLabel==='review'?(m.section||'REVISÃO').toUpperCase():'DESAFIO')}</small><span class="level-badge">${escapeHTML(m.level||'Aplicação')}</span></div><h2>${escapeHTML(m.q)}</h2><p class="prompt">Aqui a intenção é recuperar o raciocínio e aplicar a ideia.</p><div class="explanation">📘 <b>Relembre:</b> ${escapeHTML(m.explanation)}</div><div id="workspace"></div><div id="feedback" class="feedback"></div><div id="hintPanel" class="hint-panel hidden"></div><div class="actions"><button class="primary" id="check">Verificar</button><button class="secondary" id="hint">💡 Dica (1/3)</button></div></article></div>`;
}

function mountExercise(m){
  const w=$('workspace');currentBuilder=[];w.get=()=>[];
  if(m.type==='el'){
    let a=[];w.innerHTML=`<div class="blocks">${m.elements.map(x=>`<button class="block" data-x="${x}">${x}</button>`).join('')}</div><div class="builder-tools"><button type="button" class="delete-btn" id="deleteLast">⌫ Apagar último</button><button type="button" class="clear-btn" id="clearBuild">🗑 Limpar</button></div><p>Selecionados: <b id="sel">nenhum</b></p>`;
    const blocks=[...w.querySelectorAll('[data-x]')],update=()=>{blocks.forEach(b=>b.classList.toggle('selected',a.includes(b.dataset.x)));$('sel').textContent=a.length?a.join(', '):'nenhum';};blocks.forEach(b=>b.onclick=()=>{if(!a.includes(b.dataset.x)){a.push(b.dataset.x);update();}});$('deleteLast').onclick=()=>{a.pop();update();};$('clearBuild').onclick=()=>{a=[];update();};w.get=()=>a;
  }
  if(m.type==='choice'){
    let selected='';w.innerHTML=`<div class="choice-grid">${m.choices.map(c=>`<button class="choice-btn" data-choice="${escapeHTML(c.v)}"><span class="choice-title">${escapeHTML(c.title)}</span><span class="choice-sub">${escapeHTML(c.sub)}</span></button>`).join('')}</div>`;w.querySelectorAll('.choice-btn').forEach(b=>b.onclick=()=>{selected=b.dataset.choice;w.querySelectorAll('.choice-btn').forEach(x=>x.classList.remove('selected'));b.classList.add('selected');});w.get=()=>selected;
  }
  if(m.type==='indices'){
    w.innerHTML=`<div class="input-grid">${m.inputs.map((x,i)=>`<div class="input-card"><div class="formula">${escapeHTML(x.formula)}</div><div class="choice-sub">${escapeHTML(x.label)}</div><input class="atom-input" data-index="${i}" inputmode="numeric" type="number" min="0" step="1" placeholder="Digite a quantidade"></div>`).join('')}</div>`;w.get=()=>[...w.querySelectorAll('.atom-input')].map(x=>Number(x.value));
  }
  if(m.type==='manual'){
    w.innerHTML=`<div class="input-card"><div class="formula">?</div><p class="choice-sub">Digite apenas o número total de átomos.</p><input class="atom-input" id="manualAnswer" inputmode="numeric" type="number" min="0" step="1" placeholder="Sua resposta"></div>`;w.get=()=>Number($('manualAnswer').value);
  }
  if(m.type==='mol') {
    let a=[];
    w.innerHTML=`<div class="blocks">${m.elements.map(x=>`<button class="block" data-x="${x}">${x}</button>`).join('')}</div>
      <div class="builder-tools"><button type="button" class="delete-btn" id="deleteLast">⌫ Apagar último átomo</button><button type="button" class="clear-btn" id="clearBuild">🗑 Limpar tudo</button></div>
      <div class="drop" id="drop">Sua construção aparecerá aqui</div>`;
    const blocks=[...w.querySelectorAll('[data-x]')];
    const update=()=>{
      const c={};
      a.forEach(x=>{c[x]=(c[x]||0)+1;});
      const parts=Object.entries(c).map(([x,n])=>escapeHTML(x)+(n>1?`<sub>${n}</sub>`:'')).join('');
      $('drop').innerHTML=a.length?parts:'Sua construção aparecerá aqui';
      blocks.forEach(b=>b.classList.toggle('selected',a.includes(b.dataset.x)));
    };
    blocks.forEach(b=>b.onclick=()=>{a.push(b.dataset.x);update();});
    $('deleteLast').onclick=()=>{a.pop();update();};
    $('clearBuild').onclick=()=>{a=[];update();};
    w.get=()=>a;
  }
  if(m.type==='reaction'){
    let a=[];w.innerHTML=`<div class="blocks">${m.reactionBlocks.map(x=>`<button class="block" data-x="${x}">${x}</button>`).join('')}</div><div class="builder-tools"><button type="button" class="delete-btn" id="deleteLast">⌫ Apagar último bloco</button><button type="button" class="clear-btn" id="clearBuild">🗑 Limpar reação</button></div><div class="drop" id="drop">Clique nos blocos na ordem da reação</div>`;const blocks=[...w.querySelectorAll('[data-x]')],update=()=>{$('drop').innerHTML=a.length?a.slice(0,2).join(' + ')+(a.length>=3?' → '+a[2]:''):'Clique nos blocos na ordem da reação';blocks.forEach(b=>b.classList.toggle('selected',a.includes(b.dataset.x)));};blocks.forEach(b=>b.onclick=()=>{if(a.length<3)a.push(b.dataset.x);update();});$('deleteLast').onclick=()=>{a.pop();update();};$('clearBuild').onclick=()=>{a=[];update();};w.get=()=>a;
  }
  if(m.type==='bal'){
    w.innerHTML='<div class="equation">'+m.ns.map((n,i)=>{const sign=i===0?'':(i===m.arrowAt?' → ':' + ');return sign+`<span><input class="coef" type="number" min="1" step="1" value="1" aria-label="Coeficiente de ${escapeHTML(n)}"><span class="compound">${escapeHTML(n)}</span></span>`;}).join('')+'</div><div class="tip">⚗️ Altere somente os números grandes na frente das fórmulas. Os índices dentro das fórmulas fazem parte da substância.</div>';w.get=()=>[...w.querySelectorAll('.coef')].map(x=>Number(x.value));
  }
}

function hintsFor(m){
  const h1=m.hint||'Quebre o problema em partes menores e compare o que foi pedido com o que você montou.';
  const h2={choice:'Elimine primeiro as opções que quebram o padrão do conceito. Compare a estrutura, não apenas o nome.',indices:'Faça uma conta por fórmula e trate símbolo sem índice como 1. Só depois some.',el:'Separe o nome de cada elemento do símbolo e confira maiúsculas e minúsculas.',mol:'Escreva mentalmente a quantidade de cada símbolo antes de clicar. Depois confira se não sobrou nenhum elemento extra.',reaction:'Identifique o que está antes da seta e o que está depois. Monte os reagentes antes de pensar no produto.',bal:'Conte um elemento por vez. Use coeficientes para corrigir quantidades e deixe os índices intocados.',manual:'Escreva a fórmula em etapas. Parênteses, quando existirem, afetam todo o grupo dentro deles.'}[m.type]||'Compare cada parte do problema antes de decidir.';
  const h3={choice:'Agora compare as alternativas por dois critérios: quantidade de substâncias e posição em relação à seta.',indices:'Escreva as quantidades de cada elemento separadamente e faça a soma final só no último passo.',el:'Leia cada símbolo letra por letra. Se houver duas letras, apenas a primeira é maiúscula.',mol:'Transforme a fórmula em uma lista de símbolos. Só então use os blocos; qualquer bloco fora dessa lista precisa ser removido.',reaction:'Imagine a seta dividindo o exercício em dois lados. A ordem dos blocos precisa respeitar essa divisão.',bal:'Escolha um elemento para começar, ajuste os coeficientes e reconte todos os elementos antes de finalizar.',manual:'Se houver um grupo entre parênteses, pense nele como um pacote que será repetido pela quantidade indicada fora dele.'}[m.type]||'Faça uma segunda conferência antes de verificar.';
  return [h1,h2,h3];
}
function showHint(){
  const m=mode==='trail'?M[S.i]:(mode==='review'?M[reviewMission]:MIXED[mixedIndex]);const hs=hintsFor(m);currentHintLevel=Math.min(currentHintLevel+1,3);S.hintsUsed[S.i]=(S.hintsUsed[S.i]||0)+1;save();$('hintPanel').classList.remove('hidden');$('hintPanel').innerHTML=`<div class="hint-level">💡 Dica ${currentHintLevel}/3</div><strong>${currentHintLevel===1?'Pista':currentHintLevel===2?'Caminho':'Quase lá'}:</strong> ${escapeHTML(hs[currentHintLevel-1])}`;const b=$('hint');if(b)b.textContent=currentHintLevel<3?`💡 Dica (${currentHintLevel+1}/3)`:'💡 Dica (3/3)';}

function getAttemptsMessage(){const left=Math.max(0,3-currentAttempts);return '❤️'.repeat(left)+'🖤'.repeat(3-left);}
function setFeedback(kind,msg){const f=$('feedback');if(f){f.className='feedback '+kind;f.innerHTML=msg;}}
function wrongExplanation(m){
  const base={choice:'Compare as alternativas pela estrutura do conceito antes de pensar no resultado.',indices:'Revise os índices e faça a contagem com calma. Símbolo sem índice representa 1.',el:'Confira se selecionou exatamente os símbolos pedidos, sem elementos extras.',mol:'Confira a quantidade de cada elemento e remova qualquer bloco que não pertença à fórmula.',reaction:'Releia a seta: reagentes ficam de um lado e produtos do outro.',bal:'Reconte cada elemento nos dois lados. Os índices das fórmulas não devem ser alterados.',manual:'Refaça a contagem em pequenas etapas e confira especialmente multiplicadores de grupos.'}[m.type]||'Volte ao conceito e tente novamente.';
  return `💭 <b>Ainda não.</b> ${base}<br><span>Tentativas nesta rodada: ${currentAttempts}/3 · ${getAttemptsMessage()}</span>`;
}
function validate(m,a){let ok=false;
  if(m.type==='el')ok=m.goal.every(x=>a.includes(x))&&a.length===m.goal.length;
  if(m.type==='choice')ok=normalize(a)===normalize(m.goal);
  if(m.type==='indices')ok=Array.isArray(a)&&a.length===m.goal.length&&a.every((v,i)=>Number.isInteger(v)&&v===m.goal[i]);
  if(m.type==='manual')ok=Number(a)===Number(m.answer);
  if(m.type==='mol'){const c={};a.forEach(x=>c[x]=(c[x]||0)+1);const g={};m.goal.forEach(x=>g[x]=(g[x]||0)+1);const keys=new Set([...Object.keys(c),...Object.keys(g)]);ok=a.length===m.goal.length&&[...keys].every(k=>(c[k]||0)===(g[k]||0));}
  if(m.type==='reaction')ok=JSON.stringify(a.slice(0,3))===JSON.stringify(m.goal);
  if(m.type==='bal')ok=Array.isArray(a)&&a.length===m.goal.length&&a.every((v,i)=>Number.isInteger(v)&&v===m.goal[i]);
  return ok;
}
function recordMistake(i){S.mistakes[i]=(S.mistakes[i]||0)+1;if(S.mistakes[i]>=2)showToast('📌 Este conteúdo entrou na sua revisão.');}
function checkCurrent(context){
  const m=context==='trail'?M[S.i]:(context==='review'?M[reviewMission]:MIXED[mixedIndex]);const a=$('workspace').get();const ok=validate(m,a);
  if(ok){currentAnswered=true;if(context==='trail'){if(!S.done.includes(S.i)){S.done.push(S.i);S.xp+=100;}S.attempts[S.i]=(S.attempts[S.i]||0)+1;if(currentHintLevel===0){S.hintless=(S.hintless||0)+1;}if(S.mistakes[S.i]>=2){S.weakCleared[S.i]=true;}updateStreak();save();missions();setFeedback('ok',`🎉 <b>Correto!</b> +100 XP<br><span>Você resolveu usando o conceito desta etapa. Repare no que funcionou para repetir o raciocínio no próximo exercício.</span>`);$('next')?.classList.remove('hidden');}else if(context==='review'){const old=S.mistakes[reviewMission]||0;if(old>0)S.weakCleared[reviewMission]=true;save();setFeedback('ok','✅ <b>Revisão concluída.</b> Você recuperou o conceito sem alterar sua pontuação da trilha.');}else{if(!S.mixedDone.includes(mixedIndex)){S.mixedDone.push(mixedIndex);S.xp+=150;}save();setFeedback('ok','🧩 <b>Desafio concluído!</b> +150 XP. Você precisou decidir qual ideia usar sem receber o nome do conteúdo.');}}
  else{
    if(context==='trail'){currentAttempts++;S.attempts[S.i]=currentAttempts;recordMistake(S.i);save();}setFeedback('error',wrongExplanation(m));if(currentAttempts>=3&&context!=='review'){const b=$('check');if(b)b.disabled=true;setFeedback('warn',`❤️ <b>Rodada encerrada.</b> Não é um bloqueio: use a aula e as dicas para descobrir o caminho, depois clique em <b>Tentar novamente</b>.`);const actions=document.querySelector('.actions');if(actions&&!$('retryBtn')){const rb=document.createElement('button');rb.id='retryBtn';rb.className='secondary';rb.textContent='↻ Tentar novamente';rb.onclick=()=>{currentAttempts=0;const cb=$('check');if(cb)cb.disabled=false;rb.remove();setFeedback('info','🔄 Nova rodada. Comece pelo conceito, não pelo chute.');updateTries();};actions.appendChild(rb);}}updateTries();}
  checkAchievements();
}
function updateTries(){const t=$('tries');if(t)t.textContent=getAttemptsMessage();}
function updateStreak(){const today=new Date().toISOString().slice(0,10);if(S.lastDoneAt===today)return;const prev=S.lastDoneAt?new Date(S.lastDoneAt+'T12:00:00'):null;const now=new Date();const diff=prev?Math.floor((new Date(today+'T12:00:00')-prev)/86400000):null;S.streak=diff===1?(S.streak||0)+1:1;S.lastDoneAt=today;}
function checkAchievements(){const unlocked=ACHIEVEMENTS.filter(a=>a.test(S)).map(a=>a.id);const old=S.achievements||[];const fresh=unlocked.filter(id=>!old.includes(id));S.achievements=unlocked;save();fresh.forEach(id=>{const a=ACHIEVEMENTS.find(x=>x.id===id);setTimeout(()=>showToast(`${a.icon} Conquista: ${a.title}`),50);});}

function renderLab(){
  $('app').innerHTML=`<div class="page"><div class="page-head"><div><span class="section-kicker">⚗️ MODO LIVRE</span><h1>Laboratório</h1><p>Monte combinações sem pressão e observe o que a sua construção representa.</p></div></div><div class="lab-grid"><div class="lab-panel"><h3>🧩 Monte com blocos</h3><p>Escolha os elementos que quiser. Aqui não existe resposta certa ou errada.</p><div class="lab-elements">${['H','O','C','N','Na','Cl','Ca','Mg','S','Fe'].map(x=>`<button class="block" data-lab="${x}">${x}</button>`).join('')}</div><div class="builder-tools"><button class="delete-btn" id="labDelete">⌫ Apagar último</button><button class="clear-btn" id="labClear">🗑 Limpar</button></div><div class="lab-result"><div class="lab-formula" id="labFormula">Sua construção</div><div class="analysis-grid"><div class="analysis-stat"><span>Tipos de elementos</span><b id="labTypes">0</b></div><div class="analysis-stat"><span>Total de átomos</span><b id="labAtoms">0</b></div><div class="analysis-stat"><span>Classificação</span><b id="labClass">—</b></div></div></div></div><div class="lab-panel"><h3>🔎 O que observar</h3><p>Use o laboratório para testar hipóteses e depois volte para as missões quando sentir que entendeu o padrão.</p><div class="tip">💡 Um símbolo sem índice vale 1. Quando você montar a mesma espécie de átomo mais de uma vez, o resultado mostra essa quantidade como índice.</div><div class="tip">🧠 Tente fazer 3 construções e descreva para si mesmo o que mudou entre elas.</div></div></div></div>`;
  const update=()=>{const c={};labBuilder.forEach(x=>c[x]=(c[x]||0)+1);const formula=Object.entries(c).map(([x,n])=>x+(n>1?`<sub>${n}</sub>`:'')).join('')||'Sua construção';$('labFormula').innerHTML=formula;$('labTypes').textContent=Object.keys(c).length;$('labAtoms').textContent=labBuilder.length;const types=Object.keys(c).length;$('labClass').textContent=!labBuilder.length?'—':types===1?'Substância simples':'Substância composta';S.labBuilds=Math.max(S.labBuilds||0,Number(localStorage.getItem('qebLabBuilds')||0));localStorage.setItem('qebLabBuilds',String(Math.max(Number(localStorage.getItem('qebLabBuilds')||0),labBuilder.length?1:0)));};
  document.querySelectorAll('[data-lab]').forEach(b=>b.onclick=()=>{labBuilder.push(b.dataset.lab);S.labBuilds=(S.labBuilds||0)+1;save();update();checkAchievements();});$('labDelete').onclick=()=>{labBuilder.pop();update();};$('labClear').onclick=()=>{labBuilder=[];update();};update();
}

function renderMixed(){
  const total=MIXED.length,done=S.mixedDone.length;const m=MIXED[mixedIndex];
  $('app').innerHTML=renderExerciseShell(m,'mixed');const dots=MIXED.map((_,i)=>`<span class="mixed-dot ${S.mixedDone.includes(i)?'done':''} ${i===mixedIndex?'current':''}"></span>`).join('');const article=document.querySelector('article.card');article.insertAdjacentHTML('afterbegin',`<div class="mixed-progress">${dots}</div>`);mountExercise(m);$('check').onclick=()=>checkCurrent('mixed');$('hint').onclick=showHint;$('backView').onclick=()=>{mode='trail';save();render();};
  const actions=document.querySelector('.actions');const n=document.createElement('button');n.className='secondary';n.textContent=done===total?'🏆 Todos concluídos':'Próximo desafio →';n.onclick=()=>{if(mixedIndex<total-1){mixedIndex++;renderMixed();}else{mixedIndex=0;renderMixed();}};actions.appendChild(n);
}

function renderReview(){
  if(reviewMission===null){
    const candidates=M.map((m,i)=>({m,i,score:(S.mistakes[i]||0)-(S.weakCleared[i]?1:0)})).filter(x=>x.score>0&&S.done.includes(x.i)).sort((a,b)=>b.score-a.score);
    $('app').innerHTML=`<div class="page"><div class="page-head"><div><span class="section-kicker">🔄 RECUPERAÇÃO</span><h1>Revisão inteligente</h1><p>O site usa seus erros anteriores para apontar os conteúdos que merecem uma segunda tentativa.</p></div></div>${candidates.length?`<div class="review-list">${candidates.map(x=>`<div class="review-item"><div><strong>${escapeHTML(x.m.t)}</strong><small>${escapeHTML(x.m.section)} · ${x.score} sinal${x.score===1?'':'is'} de revisão</small></div><button data-review="${x.i}">Revisar</button></div>`).join('')}</div>`:`<div class="empty-state"><div class="big">🧠</div><h3>Nada urgente para revisar</h3><p>Continue avançando. Quando um conteúdo começar a aparecer como dificuldade, ele será sugerido aqui.</p></div>`}<div class="review-card" style="margin-top:15px"><h3>Como funciona</h3><p>Um erro não reduz seu XP nem bloqueia a trilha. Ele apenas ajuda a criar um lembrete para revisar o conceito depois.</p></div></div>`;
    document.querySelectorAll('[data-review]').forEach(b=>b.onclick=()=>{reviewMission=+b.dataset.review;renderReview();});return;
  }
  const m=M[reviewMission];$('app').innerHTML=renderExerciseShell(m,'review');mountExercise(m);$('check').onclick=()=>checkCurrent('review');$('hint').onclick=showHint;$('backView').onclick=()=>{reviewMission=null;renderReview();};
}

function renderAchievements(){
  checkAchievements();const unlocked=S.achievements||[];const cards=ACHIEVEMENTS.map(a=>{const on=unlocked.includes(a.id);return `<div class="achievement-card ${on?'unlocked':''}"><div class="achievement-icon">${a.icon}</div><h3>${escapeHTML(a.title)}</h3><p>${escapeHTML(a.desc)}</p>${on?'<span class="unlock-tag">Conquistada</span>':''}</div>`;}).join('');
  const sp=sectionProgress();const rows=Object.entries(sp).map(([name,x])=>`<div class="dashboard-card"><h3>${escapeHTML(name)}</h3><p>${x.done}/${x.total} exercícios concluídos</p><div class="section-progress"><span>Progresso</span><b>${Math.round(x.done/x.total*100)}%</b></div><div class="section-progress-bar"><i style="width:${x.done/x.total*100}%"></i></div></div>`).join('');
  $('app').innerHTML=`<div class="page"><div class="page-head"><div><span class="section-kicker">🏆 SEU PERFIL</span><h1>Conquistas e progresso</h1><p>Veja o caminho que você já percorreu e quais desafios ainda estão disponíveis.</p></div></div><div class="dashboard-grid" style="margin-bottom:15px"><div class="dashboard-card"><h3>⭐ XP</h3><p>${S.xp} pontos conquistados</p></div><div class="dashboard-card"><h3>🔥 Sequência</h3><p>${S.streak||0} dia${S.streak===1?'':'s'} de estudo registrado</p></div></div><h2 style="font-size:20px;margin:0 0 10px">📚 Progresso por seção</h2><div class="dashboard-grid" style="margin-bottom:18px">${rows}</div><h2 style="font-size:20px;margin:0 0 10px">🏅 Conquistas</h2><div class="achievements-grid">${cards}</div></div>`;
}

// O laboratório deve contar ações de construção, não apenas o tamanho da última fórmula.
const originalLabBuilds=()=>{};

document.querySelectorAll('.view-btn').forEach(btn=>btn.onclick=()=>{mode=btn.dataset.view;reviewMission=null;save();render();closeMobileDrawers();});
const leftToggle=$('leftToggle'); if(leftToggle) leftToggle.onclick=()=>toggleDrawer('left');
const leftClose=$('leftClose'); if(leftClose) leftClose.onclick=()=>setDrawer('left',false);
const drawerScrim=$('drawerScrim'); if(drawerScrim) drawerScrim.onclick=closeMobileDrawers;
window.addEventListener('resize',()=>{ if(window.matchMedia('(min-width:1201px)').matches){$('sidebar')?.classList.remove('drawer-open');document.body.classList.remove('drawering');} });
$('reset').onclick=()=>{if(confirm('Apagar todo o progresso, XP, conquistas e histórico de revisão?')){localStorage.removeItem('quimicaBlocosV4');localStorage.removeItem('quimicaBlocosV3');localStorage.removeItem('qebLabBuilds');S={...DEFAULT_STATE};mode='trail';labBuilder=[];save();render();showToast('Progresso reiniciado.');}};
checkAchievements();render();
