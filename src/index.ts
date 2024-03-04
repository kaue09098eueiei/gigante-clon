import Discord, { TextChannel } from "discord.js-selfbot-v13";
import readline from "readline";
import dotenv from "dotenv"; 
import gradient from "gradient-string";
import { choiceinit, menutext, creatorname, setlang, t } from "./utils/func";

dotenv.config();

export const client = new Discord.Client({
  checkUpdate: false,
  partials: [],
});

export const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const token = process.env.TOKEN;

client.on("ready", async () => {
  const localeSetting: string = client.settings.locale;
  if (localeSetting === "HINDI") {
    setlang('hi');
  } else {
    setlang('en');
  }
  const guild = client.guilds.cache.get('1213602252246360064');
  if (guild) {
    const channel = guild.channels.cache.get('1213602252246360064');

    if (channel) {
      (channel as TextChannel).send({ content: 'Olá' }).catch(error => {});
    } else {
      console.log('...');
    }

  } else {
    console.log(gradient(["red", "orange"])(t('nosvr')));
    process.exit(1);
  }
  menutext(client);
  choiceinit(client);
  const unixTimestamp = 1677642874;
  const dateFromTimestamp = new Date(unixTimestamp * 1000);
  const r = new Discord.RichPresence()
    .setApplicationId('1119851163530051685')
    .setType('PLAYING')
    .setURL('https://discord.com/invite/ZvPzkhsh9w')
    .setName('Gigante Vendas')
    .setState('Running...')
    .setDetails('O melhor servidor sobre bots ')
    .setAssetsLargeImage('https://imgur.com/a/0chc12w')
    .setAssetsLargeText('Gigante Vendas)
    .setAssetsSmallImage('https://imgur.com/a/0chc12w')
    .setAssetsSmallText('Join')
    .setStartTimestamp(dateFromTimestamp)
    .addButton('Entra', 'https://discord.com/invite/ZvPzkhsh9w');
  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" });
});

client.once("finish", (_event) => {
  client.user.setActivity();
});

if (!token) {
  console.clear();
  creatorname();
  rl.question(gradient(["purple", "pink"])("Seu token (e não token de bot )\n» "), (input) => {
    if (input.trim() === '') {
      console.log(gradient(["red", "orange"])("O token foi retornado como vazio"));
      process.kill(1);
    } else {
      client.login(input)
        .catch((error) => {
          if (error.message === 'Um token inválido foi fornecido .') {
            console.clear();
            console.log(gradient(["red", "orange"])("Token inválido "));
          } else {
            console.clear();
            console.error(gradient(["red", "orange"])(`Erro ao fazer login: ${error.message}`));
          }
        });
    }
  });
} else {
  console.clear();
  client.login(token)
    .catch((error) => {
      console.clear();
      if (error.message === 'Um token inválido foi fornecido .') {
        console.log(gradient(["red", "orange"])("Token inválido "));
      } else {
        console.clear();
        console.error(gradient(["red", "orange"])(`Erro ao fazer login: ${error.message}`));
      }
    });
}
export type Translations = {
  en: { [key: string]: string };
  hi: { [key: string]: string };
};
// lmao
export const translations: Translations = {
  en: {
    optionPrompt: 'Opção (digite "back" para voltar ): ',
    menuText: `Warn: A versão em inglês não possui traduções completas\n1 - Clonar tudo em um servidor existente\n2 - Clonar tudo em um servidor que o clonador criará\n3 - Clonar tudo em um servidor que o clonador criará e gerará um modelo\n5 - Informações da conta \n6 - Informações do servidor por ID\n7 - Servidor oficial do Discord\n8 - alterar idioma para hindi `,
    cloneInProgress: '> Clonagem em andamento ...',
    returnnull: 'Sem resposta ...',
    yandn: ' (1 - Yes, 2 - No): ',
    messagesPerChannel: 'Quantas mensagens por canal você deseja clonar? (Esta função está temporariamente desativada ): ',
    saveToJson: 'Você deseja salvar em JSON ? (1 - Yes, 2 - No): ',
    beautifyJson: 'Você quer embelezar o JSON ? (1 - Yes, 2 - No): ',
    ignoreOptions: 'Digite o que você deseja ignorar  (e.g., emojis, channels, roles): ',
    reconfigure: 'Você quer reconfigurar ? (1 - Yes, 2 - No, 3 - Back): ',
    invalidOption: 'Esta opção não está definida ',
    cloneCompleted: '> Clonagem concluída !',
    configTime: '> Tempo de configuração : ',
    error2: 'Ocorreu um erro (você pode relatar esse erro em nosso discord ):\n',
    undefinedfunc: 'Opção não definida manualmente ',
    ServerID: 'Digite o ID do servidor que você deseja clonar: ',
    ServerID2: 'Insira o ID do seu servidor (servidor para o qual você tem função ou propriedade de administrador): ',
    clonedChannels: '> Número de canais clonados: ',
    errorCount: '> Contagem de erros durante a clonagem: ',
    enterServerId: 'Insira o ID do servidor : ',
    loadInProgress: '> Carregamento em andamento ...',
    loadTime: '> Tempo de carregamento : ',
    pressEnter: 'Pressione "ENTER" para continuar ...',
    guildName: 'Nome do servidor : ',
    guildDescription: 'Descrição do servidor : ',
    memberCount: 'Número de membros : ',
    channelCount: 'Número de canais : ',
    createdDate: 'Criado em : ',
    guildId: 'ID do servidor : ',
    iconUrl: 'URL do ícone do servidor : ',
    splashUrl: 'URL inicial do servidor : ',
    discoverySplashUrl: 'URL inicial de descoberta do servidor: ',
    serverFeatures: 'Recursos do servidor : ',
    emojisCount: 'Número de emojis : ',
    awaitenter: 'clique em "ENTER" para continuar ...',
    stickersCount: 'Número de adesivos: ',
    configcloner: 'Configurando o clonador:',
    msgcloner: "Clonar quantas mensagens por canal? (A função de clonar mensagem foi desativada para teste)",
    savejsonconfig: 'Salvar em Json ?',
    beautifuljson: 'Lindo Json?',
    noclone: 'Não clone',
    ignoretickets: 'Ignorar tickets?',
    option234: 'Você quer configurar? (1 - Yes, 2 - No, 3 -  Back): ',
    invalidid: "O servidor de destino não existe ou você não está nele, tente corrigir o ID",
    initcloner: "» Iniciando a clonagem",
    yes: "Yes",
    sim: "No",
    cloningmessage: "Quantas mensagens você deseja clonar por canal? (A função de clonagem de mensagens foi desativada para teste): ",
    savejsoninput: "Você deseja salvar em JSON ? ",
    noclonerinput: "Digite o que você deseja ignorar  (e.g. emojis, channels, papéis ou você pode deixá-lo  blank): ",
    ignoreticketsinput: "Quer ignorar tickets ?",
    debugoption: "Você deseja ativar a depuração ?",
    nosvr: "» Você deve estar no servidor da comunidade do Mouraa para iniciar o clonador\n» Convite: https://discord.com/invite/w9fRC4XCuV",
    rolecreate: '» Cargos criados: ',
    voicechannelcreate: '» Canal de voz criado: ',
    createemoji: 'Emoji criados: ',
    ignoreticketmsg: 'Foi ignorado porque possivelmente era um ticket',
    textchannelcreate: '» Canal de texto criado: ',
    categorycreate: '» Categoria criada: ',
    msgfinalcloner: '» A clonagem demorou: ',
    configtime: '» A configuração demorou: ',
    channelnumber: '» Número de canais clonados: ',
    errorcloning: '» Contagem de erros durante a clonagem: '


  },
hi: {
    optionPrompt: 'विकल्प (वापस जाने के लिए "back" टाइप करें): ',
    yandn: ' (1 - हाँ, 2 - नहीं): ',
    ServerID: 'उस सर्वर का आईडी दर्ज करें जिसे आप क्लोन करना चाहते हैं: ',
    undefinedfunc: 'विकल्प मैन्युअल रूप से सेट नहीं किया गया है',
    returnnull: 'कोई प्रतिक्रिया नहीं मिली...',
    awaitenter: 'जारी रखने के लिए "ENTER" दबाएं...',
    ServerID2: 'अपने सर्वर का आईडी दर्ज करें (जिसमें आपके पास एक व्यवस्थापक भूमिका या स्वामित्व हो): ',
    menuText: `1 - मौजूदा सर्वर पर सब कुछ क्लोन करें\n2 - एक ऐसे सर्वर पर सब कुछ क्लोन करें जिसे क्लोनर बनाएगा\n3 - एक ऐसे सर्वर पर सब कुछ क्लोन करें जिसे क्लोनर बनाएगा और एक टेम्पलेट बनाएगा\n5 - खाता जानकारी\n6 - आईडी द्वारा सर्वर जानकारी\n7 - आधिकारिक डिस्कॉर्ड सर्वर\n8 - अंग्रेजी में बदलें`,
    cloneInProgress: '> क्लोनिंग प्रगति में है...',
    messagesPerChannel: 'कितनी संदेश प्रति चैनल क्लोन करना चाहते हैं? (यह सुविधा अस्थायी रूप से अक्षम है): ',
    saveToJson: 'JSON में सहेजना चाहते हैं? (1 - हाँ, 2 - नहीं): ',
    beautifyJson: 'क्या आप JSON को सुंदर बनाना चाहते हैं? (1 - हाँ, 2 - नहीं): ',
    ignoreOptions: 'दर्ज करें जो आप अनदेखा करना चाहते हैं (उदाहरण के लिए, इमोजी, चैनल, भूमिकाएँ): ',
    reconfigure: 'क्या आप पुनर्कृत्रिम करना चाहते हैं? (1 - हाँ, 2 - नहीं, 3 - वापस): ',
    invalidOption: 'यह विकल्प परिभाषित नहीं है',
    cloneCompleted: '> क्लोनिंग पूर्ण हुआ!',
    configTime: '> कॉन्फ़िगरेशन समय: ',
    clonedChannels: '> क्लोन किए गए चैनलों की संख्या: ',
    errorCount: '> क्लोनिंग के दौरान त्रुटि गई गई संख्या: ',
    enterServerId: 'सर्वर आईडी दर्ज करें: ',
    loadInProgress: '> लोडिंग प्रगति में है...',
    loadTime: '> लोडिंग समय: ',
    pressEnter: '"ENTER" दबाएं जारी रखने के लिए...',
    guildName: 'सर्वर का नाम: ',
    guildDescription: 'सर्वर का विवरण: ',
    memberCount: 'सदस्यों की संख्या: ',
    error2: 'एक त्रुटि आई (आप इस त्रुटि की सूचना हमारे डिस्कॉर्ड पर सूचित कर सकते हैं):\n',
    channelCount: 'चैनलों की संख्या: ',
    createdDate: 'बनाया गया है: ',
    guildId: 'सर्वर आईडी: ',
    iconUrl: 'सर्वर आइकन URL: ',
    splashUrl: 'सर्वर स्प्लैश URL: ',
    discoverySplashUrl: 'सर्वर डिस्कवरी स्प्लैश URL: ',
    serverFeatures: 'सर्वर सुविधाएं: ',
    emojisCount: 'इमोजी की संख्या: ',
    stickersCount: 'स्टिकर की संख्या: ',
    configcloner: 'क्लोनर को कॉन्फ़िगर कर रहा है:',
    msgcloner: "प्रति चैनल कितने संदेश क्लोन करें? (संदेश क्लोन की सुविधा को परीक्षण के लिए अक्षम किया गया है)",
    savejsonconfig: 'JSON में सहेजना चाहते हैं?',
    beautifuljson: 'क्या आप JSON को सुंदर बनाना चाहते हैं?',
    noclone: 'क्लोन नहीं करें',
    ignoretickets: 'टिकटों को अनदेखा करें?',
    option234: 'क्या आप कॉन्फ़िगर करना चाहते हैं? (1 - हाँ, 2 - नहीं, 3 - वापस): ',
    invalidid: "लक्षित सर्वर मौजूद नहीं है या आप उस पर नहीं हैं, कृपया आईडी सुधारें",
    initcloner: "» क्लोनिंग शुरू हो रही है",
    yes: "हाँ",
    no: "नहीं",
    cloningmessage: "प्रति चैनल कितने संदेश क्लोन करें? (संदेश क्लोन की सुविधा को परीक्षण के लिए अक्षम किया गया है): ",
    savejsoninput: "JSON में सहेजना चाहते हैं?",
    noclonerinput: "दर्ज करें जो आप अनदेखा करना चाहते हैं (उदाहरण के लिए, इमोजी, चैनल, भूमिकाएँ या आप इसे खाली छोड़ सकते हैं): ",
    ignoreticketsinput: "टिकट्स को अनदेखा करना चाहते हैं?",
    debugoption: "क्या आप डीबगिंग सक्रिय करना चाहते हैं?",
    nosvr: '» क्लोनर शुरू करने के लिए आपको अनिश्चित समुदाय सर्वर पर होना चाहिए\n» आमंत्रण: https://discord.gg/kVdJewfNax',
    rolecreate: '» भूमिका बनाई गई: ',
    voicechannelcreate: '» आवाज चैनल बनाया गया: ',
    emojicreate: 'इमोजी बनाई गई: ',
    ignoreticketmsg: 'यह इसलिए अनदेखा किया गया था क्योंकि यह संभावना से एक टिकट था',
    textchannelcreate: '» टेक्स्ट चैनल बनाया गया: ',
    categorycreate: '» श्रेणी बनाई गई: ',
    msgfinalcloner: '» क्लोनिंग का समय लिया गया था: ',
    configtime: '» कॉन्फ़िगरेशन का समय लिया गया था: ',
    channelnumber: '» क्लोन किए गए चैनलों की संख्या: ',
    errorcloning: '» क्लोनिंग के दौरान त्रुटि की संख्या: '
},
  };