import { useState } from "react";
import angry from "../../assets/angry.jpg";
import boobies from "../../assets/boobies.gif";
import "./Container.css";

const jokes = [
    "Chuck Norris não lê livros. Ele os encara fixamente até obter a informação que deseja.",
    "O tempo não espera por ninguém. A menos que esse alguém seja Chuck Norris.",
    "Se você escrever Chuck Norris no Scrabble, você ganha. Para sempre.",
    "Chuck Norris respira ar… cinco vezes por dia.",
    "A gripe recebe uma injeção de Chuck Norris todos os anos.",
    "No princípio não havia nada... então Chuck Norris deu um chute giratório no nada e mandou-o arranjar um emprego.",
    "Quando Deus disse: Haja luz!, Chuck Norris respondeu: Diga por favor.",
    "Chuck Norris toma uma caneca de pregos em vez de café pela manhã.",
    "Se Chuck Norris viajasse para uma dimensão alternativa onde existisse outro Chuck Norris e se ambos lutassem, ambos venceriam.",
    "Os dinossauros olharam para Chuck Norris de um jeito errado uma vez. Você sabe o que aconteceu com eles.",
    "As lágrimas de Chuck Norris curam o câncer. Uma pena que ele nunca tenha chorado.",
    "Chuck Norris certa vez deu um chute giratório tão forte em alguém que o pé da pessoa ultrapassou a velocidade da luz.",
    "Se você perguntar a Chuck Norris que horas são, ele sempre responde: Dois segundos para. Depois que você pergunta: Dois segundos para o quê?, ele te dá um chute giratório na cara.",
    "Chuck Norris apareceu no videogame Street Fighter II, mas foi removido pelos testadores beta porque todos os botões pressionados faziam com que ele desse um chute giratório. Quando questionado sobre esse bug, Chuck Norris respondeu: Isso não é um bug.",
    "Desde 1940, ano em que Chuck Norris nasceu, as mortes relacionadas a chutes giratórios aumentaram 13.000%.",
    "Chuck Norris não possui fogão, forno ou micro-ondas, porque vingança é um prato que se serve frio.",
    "Chuck Norris não dorme. Ele espera.",
    "Não há queixo por trás da barba de Chuck Norris. Há apenas outro punho.",
    "A principal exportação de Chuck Norris é a dor.",
    "Chuck Norris teve recentemente a ideia de vender seu xixi como uma bebida enlatada. Agora se chama Red Bull.",
    "Se papel vence pedra, pedra vence tesoura e tesoura vence papel, o que vence os três ao mesmo tempo? Chuck Norris.",
    "No sétimo dia, Deus descansou... Chuck Norris assumiu o controle.",
    "Chuck Norris consegue driblar uma bola de boliche.",
    "Chuck Norris bebe napalm para combater a azia .",
    "O chute giratório de Chuck Norris é tão poderoso que pode ser visto do espaço a olho nu.",
    "Se você quiser uma lista dos inimigos de Chuck Norris, basta consultar a lista de espécies extintas.",
    "Chuck Norris nunca piscou em toda a sua vida. Nunca.",
    "Chuck Norris certa vez derrubou um avião inimigo com o dedo, gritando Bang!.",
    "Chuck Norris não usa corretor ortográfico. Se por acaso ele escrever uma palavra errada, o Oxford corrigirá a grafia.",
    "Algumas crianças urinam seus nomes na neve. Chuck Norris consegue urinar seu nome no concreto.",
    "O calendário de Chuck Norris vai direto de 31 de março a 2 de abril, porque ninguém engana Chuck Norris.",
    "Chuck Norris contou até o infinito… duas vezes.",
    "Chuck Norris sabe falar Braille.",
    "Chuck Norris consegue manter os dois pés no chão e dar uma surra em todo mundo ao mesmo tempo.",
    "Chuck Norris consegue empinar um monociclo.",
    "Chuck Norris fica em pé mais rápido do que qualquer um consegue correr.",
    "Certa vez, uma cobra mordeu a perna de Chuck Norris. Após cinco dias de dor excruciante, a cobra morreu.",
    "Chuck Norris venceu uma partida de Connect Four em três jogadas.",
    "Os campeões são o café da manhã de Chuck Norris.",
    "Todas as noites, quando o Bicho-Papão vai dormir, ele verifica se Chuck Norris está no seu armário.",
    "Chuck Norris consegue bater portas giratórias.",
    "Chuck Norris não caça porque a palavra caçar implica a possibilidade de fracasso. Chuck Norris mata.",
    "A escuridão tem medo de Chuck Norris.",
    "Chuck Norris consegue matar dois coelhos com uma cajadada só .",
    "Chuck Norris consegue tocar violino com um piano.",
    "Chuck Norris faz as cebolas chorarem.",
    "​​A Morte já teve uma experiência quase como a de Chuck Norris.",
    "Quando Chuck Norris escreve, ele faz o papel sangrar.",
    "Chuck Norris pode te estrangular com um telefone sem fio.",
    "Chuck Norris nunca recua; ele simplesmente ataca na direção oposta.",
    "Chuck Norris consegue construir um boneco de neve com água da chuva.",
    "Chuck Norris consegue afogar um peixe.",
    "Chuck Norris já teve um ataque cardíaco. Seu coração parou de funcionar.",
    "Quando Chuck Norris se olha no espelho, o espelho se estilhaça. Porque nem mesmo o vidro é burro o suficiente para ficar entre Chuck Norris e Chuck Norris.",
    "Quando Chuck Norris entra em uma sala, ele não acende as luzes, ele apaga a escuridão.",
    "A única vez que Chuck Norris esteve errado foi quando pensou que tinha cometido um erro.",
    "Chuck Norris consegue amarrar os sapatos com os pés.",
    "O caminho mais rápido para o coração de um homem é com o punho de Chuck Norris.",
    "Chuck Norris é a única pessoa capaz de dar um soco em um ciclope entre os olhos.",
    "Chuck Norris costumava bater na própria sombra porque ela o seguia muito de perto. Agora, a sombra fica a 4,5 metros atrás dele.",
    "Nunca houve um furacão chamado Chuck porque ele teria destruído tudo.",
    "O espaço sideral existe porque tem medo de estar no mesmo planeta que Chuck Norris.",
    "Quando Chuck Norris faz uma flexão, ele está empurrando a Terra para baixo.",
    "Chuck Norris é o motivo pelo qual Waldo está se escondendo.",
    "Chuck Norris não usa relógio. Ele decide que horas são.",
    "Chuck Norris não sofre de congelamento. Chuck Norris morde o gelo.",
    "Em Pamplona, ​​na Espanha, as pessoas podem estar fugindo dos touros, mas os touros estão fugindo de Chuck Norris.",
    "Chuck Norris tempera seus bifes com spray de pimenta.",
    "A Grande Muralha da China foi originalmente criada para manter Chuck Norris afastado. Não funcionou.",
    "Chuck Norris consegue entrar num balde e levantá-lo com ele dentro.",
    "A maioria das pessoas tem 23 pares de cromossomos. Chuck Norris tem 72… e todos eles são letais.",
    "Chuck Norris é o único homem a ter conseguido derrotar uma parede de tijolos em uma partida de tênis.",
    "Chuck Norris não toma banho de chuveiro, ele só toma banhos de sangue.",
    "Chuck Norris consegue dividir por zero.",
    "O show Sobrevivente A premissa original era colocar pessoas em uma ilha com Chuck Norris. Não houve sobreviventes.",
    "Chuck Norris destruiu a tabela periódica, porque Chuck Norris só reconhece o elemento surpresa.",
    "Chuck Norris certa vez chutou um cavalo no queixo. Seus descendentes são hoje conhecidos como girafas.",
    "Quando Chuck Norris nasceu, a única pessoa que chorou foi o médico. Nunca dê um tapa em Chuck Norris.",
    "Quando Chuck Norris faz uma divisão, não sobram restos.",
    "Chuck Norris leva 20 minutos para assistir ao programa 60 Minutes .",
    "Chuck Norris provou que estamos sozinhos no universo. Não estávamos antes de sua primeira expedição espacial.",
    "Chuck Norris saltou de paraquedas uma vez, mas prometeu nunca mais fazê-lo. Um Grand Canyon já basta.",
    "Certa vez, Chuck Norris pediu um bife em um restaurante. O bife fez exatamente o que lhe foi pedido.",
    "Vivemos em um universo em expansão. Tudo está tentando escapar de Chuck Norris.",
    "Chuck Norris teve que parar de lavar roupa no oceano . Tsunamis demais.",
    "Chuck Norris consegue espirrar de olhos abertos.",
    "Chuck Norris consegue cozinhar arroz instantâneo em 30 segundos.",
    "Chuck Norris venceu o sol em uma competição de encarada.",
    "O Superman possui uma cueca do Chuck Norris.",
    "Chuck Norris não respira, ele mantém o ar como refém.",
    "Chuck Norris consegue bater palmas com uma só mão.",
    "Chuck Norris não precisa se barbear. Sua barba tem medo de crescer.",
    "Antes de esquecer um presente para Chuck Norris, o Papai Noel já existia de verdade.",
    "Em uma sala de estar comum, existem mil objetos que Chuck Norris poderia usar para te matar, incluindo a própria sala.",
    "Chuck Norris inventou aviões porque estava cansado de ser a única pessoa que conseguia voar.",
    "O umbigo de Chuck Norris é, na verdade, uma tomada elétrica.",
    "Freddy Krueger tem pesadelos com Chuck Norris.",
    "Chuck Norris é o único homem que pode lutar contra si mesmo e vencer.",
    "As botas de cowboy de Chuck Norris são feitas com couro de cowboys de verdade.",
    "Chuck Norris consegue acender uma fogueira com um cubo de gelo.",
    "Certa vez, Chuck Norris chutou uma mina de carvão e a transformou em uma mina de diamantes.",
    "Quando Chuck Norris joga queimada, a bola desvia dele.",
    "Chuck Norris foi exposto ao Coronavírus. O vírus agora está em quarentena por um mês."
];

const Container = () => {
    const [joke, setJoke] = useState("");
    const [showBoobies, setShowBoobies] = useState(false);

    const showRandomJoke = () => {
        const randomIndex = Math.floor(Math.random() * jokes.length);
        setJoke(jokes[randomIndex]);
        setShowBoobies(true);
    };

    return (
        <div className="container">
            <div className="image">
                <img src={showBoobies ? boobies : angry} alt="Imagem do Chuck Norris" />
            </div>
            <div className="joke">
                <h2>{joke}</h2>
                <button className="submit" type="button" onClick={showRandomJoke}>
                    Clique aqui para ver uma piada sem graça
                </button>
            </div>
        </div>
    )
}
export default Container