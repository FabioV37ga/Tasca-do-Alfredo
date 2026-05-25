import html from "nanohtml";

interface itemDoCardapio {
    key: number;
    title: string;
    text: string;
    price: number;
}

interface secao {
    key: number;
    title: string;
}

type menuItem = itemDoCardapio | secao

export function sectionModel(section: secao) {
    return html`
    <li class="cardapio-page-section">
        <div class="section-title">${section.title}</div>
        <div class="section-title-hbar"></div>
    </li>
    `
}

export function elementModel(item: menuItem) {
    if ('price' in item && 'text' in item) {
        return html`
        <li class="cardapio-page-foodItem" value="${item.key}">
            <div class="foodItem-marker-container">
                <img src="cardapio-marker.png" alt="">
            </div>
            <div class="foodItem-text-container">
                <h2 class="foodItem-title">
                    ${item.title}
                </h2>
                <p>
                    ${item.text}
                </p>
                <span>R$ ${item.price}</span>
            </div>
        </li>
        `
    }

    return sectionModel(item)
}

const entradas: menuItem[] = [
    {
        key: 0,
        title: 'Grão-de-Bico com Bacalhau',
        text: 'Receita da minha avó, Grão-de-bico, lascas de bacalhau, cebola roxa, ovos cozidos e azeite português servidos do jeito que reuni a família aos domingos.',
        price: 42,
    },
    {
        key: 1,
        title: 'Bolinho de Bacalhau',
        text: 'Crocantes por fora, macios por dentro, como nas antigas casas portuguesas.',
        price: 39,
    },
    {
        key: 2,
        title: 'Caldo Verde',
        text: 'Tem cheiro de noite fria e família chegando. Batata, couve fininha e chouriço preparados lentamente, como em casa.',
        price: 28,
    },
    {
        key: 3,
        title: 'Sardinha na Grelha',
        text: 'Em Portugal, o cheiro da sardinha na brasa toma ruas inteiras nas festas de verão. Aqui, ela chega simples e honesta: grelhada, com arroz, e batatas portuguesas.',
        price: 44,
    },
    {
        key: 4,
        title: 'Linguiça Portuguesa na Chapa',
        text: 'Servida chiando na mesa, cercada de gente esperando o primeiro pedaço. Porque comida boa quase nunca vem sozinha.',
        price: 46,
    },
    {
        key: 5,
        title: 'Bolinho de Alheira',
        text: 'Inspirado nas tascas portuguesas onde os petiscos chegam antes da bebida terminar. Crocante por fora, intenso por dentro e feito para dividir.',
        price: 37,
    },
    {
        key: 6,
        title: 'Pica-Pau Português',
        text: 'Crocantes por fora, macios por dentro, como nas antigas casas portuguesas.',
        price: 52,
    },
    {
        key: 7,
        title: 'Batatas Portuguesas ao Alho e Ervas',
        text: 'Tem cheiro de noite fria e família chegando. Batata, couve fininha e chouriço preparados lentamente, como em casa.',
        price: 32,
    },
    {
        key: 8,
        title: 'Croquetes de Carne',
        text: 'Pequenos, simples e cheios de memória. Receita clássica de bar português, feita para acompanhar cerveja gelada e conversa longa.',
        price: 37,
    },
    {
        key: 9,
        title: 'Tábua Portuguesa',
        text: 'Queijos, presunto, pão, azeitonas e azeite servidos sem pressa. Porque algumas das melhores noites começam beliscando alguma coisa antes mesmo do pedido principal.',
        price: 79,
    },
]

const sobremesas: menuItem[] = [
    {
        key: 0,
        title: 'Sobremesas',
    },
    {
        key: 1,
        title: 'Pastel de Belém',
        text: 'Crocante por fora, cremoso por dentro e melhor ainda acompanhado de café passado na hora e conversa sem pressa.',
        price: 15,
    },
    {
        key: 2,
        title: 'Serradura',
        text: 'Sobremesa simples, antiga e impossível de esquecer. Creme leve e bolacha triturada, como era servido depois dos almoços de domingo.',
        price: 24,
    },
    {
        key: 3,
        title: 'Pudim de Abade de Priscos',
        text: 'Receita conventual portuguesa feita lentamente, daquelas sobremesas que atravessam gerações sem perder a importância na mesa.',
        price: 28,
    },
    {
        key: 4,
        title: 'Arroz Doce Português',
        text: 'Finalizado com canela desenhada à mão, porque alguns costumes merecem continuar existindo.',
        price: 20,
    },
    {
        key: 5,
        title: 'Toucinho do Céu',
        text: 'Cremoso, gratinado e servido fumegando à mesa, como aqueles pratos que confortam antes mesmo da primeira garfada.',
        price: 27,
    },
    {
        key: 6,
        title: 'Creme de Nona',
        text: 'Inspirado na fruta tão presente nas lembranças da família. Creme leve de atemoia servido gelado, finalizado delicadamente para lembrar os sabores da Ilha da Madeira.',
        price: 26,
    },
    {
        key: 7,
        title: 'Doce de Tabaibos',
        text: 'Sobremesa inspirada no figo-da-índia madeirense, trazendo o lado mais tropical da herança portuguesa da família.',
        price: 28,
    },
    {
        key: 8,
        title: 'Cafés',
    },
    {
        key: 9,
        title: 'Café Coado',
        text: 'Passado na hora, como o café que sempre aparecia depois do almoço de família.',
        price: 9,
    },
    {
        key: 10,
        title: 'Café com Licor',
        text: 'Daqueles finais de mesa em que a conversa muda de tom e ninguém percebe a hora passar.',
        price: 18,
    },
    {
        key: 11,
        title: 'Café Expresso',
        text: 'Curto, forte e servido sem pressa.',
        price: 7,
    }]

const pratos: menuItem[] = [
    {
        key: 0,
        title: 'Bacalhau à Lagareiro',
        text: 'Um clássico que atravessou gerações quase sem mudar. Bacalhau assado lentamente, alho dourado e batatas ao murro mergulhadas em azeite português.',
        price: 119,
    },
    {
        key: 1,
        title: 'Polenta Branca com Ragu de Linguiça',
        text: 'Quando chegou ao Brasil, meu avô procurou a polenta branca que cresceu comendo em Portugal. Quando encontrou, se tornou sua marca registrada.',
        price: 58,
    },
    {
        key: 2,
        title: 'Sardinhas na Grelha com Batatas',
        text: 'Poucos pratos têm tanto cheiro de Portugal quanto sardinhas na brasa. Servidas com batatas portuguesas, azeite e pão para acompanhar até o último pedaço.',
        price: 68,
    },
    {
        key: 3,
        title: 'Arroz de Pato',
        text: 'Receita feita devagar, como os almoços que duravam a tarde inteira. Arroz assado com pato desfiado e chouriço crocante.',
        price: 72,
    },
    {
        key: 4,
        title: 'Bacalhau com Natas',
        text: 'Cremoso, gratinado e servido fumegando à mesa, como aqueles pratos que confortam antes mesmo da primeira garfada.',
        price: 84,
    },
    {
        key: 5,
        title: 'Bacalhau à Brás',
        text: 'Bacalhau desfiado, ovos cremosos e batata palha preparados como nas tavernas portuguesas, onde sempre cabia mais um à mesa.',
        price: 74,
    },
    {
        key: 6,
        title: 'Frango Assado à Portuguesa',
        text: 'Assado lentamente com alho, vinho branco e ervas, servido com batatas douradas, como os almoços de família que terminavam tarde.',
        price: 64,
    },
    {
        key: 7,
        title: 'Bife à Portuguesa',
        text: 'Bife alto servido com molho de vinho, presunto e batatas portuguesas — daqueles pratos clássicos que nunca precisaram seguir moda para continuar sendo lembrados.',
        price: 78,
    },
    {
        key: 8,
        title: 'Leitão à Bairrada',
        text: 'Casquinha crocante, carne macia e batatas douradas acompanhando um dos pratos mais tradicionais de Portugal.',
        price: 89,
    },
    {
        key: 9,
        title: 'Arroz de Mariscos',
        text: 'Um prato que carrega o mar inteiro. Camarões, mexilhões e polvo cozidos lentamente em arroz caldoso cheio de sabor e afeto.',
        price: 98,
    }
]

const bebidas: menuItem[] = [
    {
        key: 0,
        title: 'Chopps & Cervejas',
    },
    {
        key: 1,
        title: 'Chopp Brahma Claro',
        text: '',
        price: 16,
    },
    {
        key: 2,
        title: 'Chopp Brahma Black',
        text: '',
        price: 18,
    },
    {
        key: 3,
        title: 'Original',
        text: '',
        price: 18,
    },
    {
        key: 4,
        title: 'Heineken',
        text: '',
        price: 15,
    },
    {
        key: 5,
        title: 'Stella Artois',
        text: '',
        price: 16,
    },
    {
        key: 6,
        title: 'Corona',
        text: '',
        price: 17,
    },
    {
        key: 7,
        title: 'Vinhos',
    },
    {
        key: 8,
        title: 'Vinho Verde Português',
        text: 'Leve, refrescante e feito para acompanhar frutos do mar e petiscos.',
        price: 28,
    },
    {
        key: 9,
        title: 'Douro Tinto',
        text: 'Vinho encorpado e intenso, tradicional da região do Douro.',
        price: 32,
    },
    {
        key: 10,
        title: 'Alentejo Branco',
        text: 'Aromático e equilibrado, perfeito para pratos à base de peixe.',
        price: 30,
    },
    {
        key: 11,
        title: 'Vinho do Porto',
        text: 'Servido lentamente, como os finais de noite que ninguém quer encerrar.',
        price: 26,
    },
    {
        key: 12,
        title: 'Vinho Madeira da Casa',
        text: 'Em homenagem à terra do meu avô. Assim como as histórias da ilha que atravessaram o oceano junto com a família.',
        price: 28,
    },
    {
        key: 13,
        title: 'Drinks da Casa',
    },
    {
        key: 14,
        title: 'Porto Tônica',
        text: 'Um clássico português que encontrou seu lugar no balcão brasileiro. Refrescante, leve e feito para acompanhar petiscos, risadas e mesas cheias.',
        price: 34,
    },
    {
        key: 15,
        title: 'Gin Tônica Portuguesa',
        text: 'Gin, alecrim e laranja servidos numa mistura entre o balcão brasileiro e as noites portuguesas.',
        price: 38,
    },
    {
        key: 16,
        title: 'Clericot da Casa',
        text: 'Feito para compartilhar. Frutas frescas, vinho gelado e tardes que não têm hora para acabar.',
        price: 42,
    },
    {
        key: 17,
        title: 'Tônica de Tabaibos (Figo-da-Índia)',
        text: 'Refrescante e levemente adocicada, inspirada nos tabaibos da Ilha da Madeira e nas frutas que cresciam entre pedra, vento e mar.',
        price: 36,
    },
    {
        key: 18,
        title: 'Poncha Tradicional Madeirense',
        text: 'Bebida típica da Ilha da Madeira, preparada com aguardente, mel e limão espremido na hora. Forte, cítrica e servida como tantas conversas começavam na ilha.',
        price: 34,
    },
    {
        key: 19,
        title: 'Doses e Licores',
    },
    {
        key: 20,
        title: 'Licor Beirão',
        text: 'Tradicional em Portugal há gerações.',
        price: 24,
    },
    {
        key: 21,
        title: 'Cachaça Premium',
        text: 'Brasileira, servida gelada.',
        price: 18,
    },
    {
        key: 22,
        title: 'Whisky',
        text: 'Dose tradicional servida simples ou com gelo.',
        price: 28,
    },
]

const refrescos: menuItem[] = [
    {
        key: 0,
        title: 'Limonada Portuguesa',
        text: 'Refrescante e cítrica, preparada com limão fresco e inspirada nas tardes quentes entre Portugal e Brasil.',
        price: 16,
    },
    {
        key: 1,
        title: 'Limonada com Hortelã',
        text: 'Leve, aromática e gelada na medida certa, feita para acompanhar o almoço ou refrescar conversas demoradas.',
        price: 17,
    },
    {
        key: 2,
        title: 'Chá Gelado da Casa',
        text: 'Preparado artesanalmente e servido bem gelado, simples como as bebidas que sempre fizeram parte das mesas cheias.',
        price: 15,
    },
    {
        key: 3,
        title: 'Sucos da Casa',
        text: 'Abacaxi, Uva, Laranja e Maçã. Sabores naturais e refrescantes preparados na hora.',
        price: 15,
    },
    {
        key: 4,
        title: 'Água Mineral',
        text: '',
        price: 6,
    },
    {
        key: 5,
        title: 'Água com Gás',
        text: '',
        price: 7,
    },
    {
        key: 6,
        title: 'Refrigerante (lata)',
        text: 'Coca-Cola, Guaraná, Sprite e Pepsi.',
        price: 9,
    },
]

const itensDoCardapio: menuItem[][] = [entradas, pratos, sobremesas, bebidas, refrescos];

export { itensDoCardapio };