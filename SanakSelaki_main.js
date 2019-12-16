require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '684811070:AAEKrxl_APwjg7vUerhLXBoMTrSoiOPSDhs';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});




bot.onText(/\/start/, (msg) => {
   bot.sendMessage(msg.chat.id, "Pagi <b>" + msg.from.first_name + "</b>, apa de bau tu bantu?", { parse_mode: 'HTML',
       'reply_markup': {
           'inline_keyboard': [[
		   {
			   text: 'Tutorial',
			   callback_data: 'tutorial'
		   },
		   {
			   text: 'Bank Solusi',
			   callback_data: 'solusi'
		   }],[{
				text: 'Contact Support',
			   callback_data: 'support'
		   }
		   ],
		   
		   ],
           resize_keyboard: true,
           one_time_keyboard: true,
		   
		  
       }
   });
});

bot.on("callback_query", (callbackQuery) => {
	const rsp = callbackQuery.message;
	
	const rmv2_keyboard = {
					'reply_markup' :{
						'inline_keyboard': [],
						remove_keyboard: true
					}
				};
	
	switch (callbackQuery.data) {
		
		case 'tutorial':
			bot.sendMessage(rsp.chat.id, 'Berikut tutorial yang bisa naki/nakwai akses: ', {
				'reply_markup': {
					'inline_keyboard': [[
					{
						text: 'Tutorial PDA',
						callback_data: 'tut_pda'
					}, 
					
					{
						text: 'Tutorial LPB PDA',
						callback_data: 'tut_lpb'
					},
					], [
					{
						text: 'Tutorial Konek Wifi Tablet',
						callback_data: 'tut_tab'
					},
					], [
					{
						text: 'Tutorial kirim EOD via WA',
						callback_data: 'tut_eod_wa'
					},
					], [
					{
						text: 'Tutorial pasang UPS',
						callback_data: 'tut_ups'
					},
					], [
					{
						text: 'Tutorial transaksi LinkAja',
						callback_data: 'tut_link'
					},
					],[
					{
						text: 'Tutorial transaksi DANA',
						callback_data: 'tut_dana'
					},
					], [{
						text: 'Tutorial Test',
						callback_data: 'tut_tst'
					}]
					
					
					],

					resize_keyboard: true,
					one_time_keyboard: true
				}
			});
			
			bot.on("callback_query", (callbackQuery) => {
				const rsp2 = callbackQuery.message;
				const image_url = 'https://miro.medium.com/max/592/1*snVu_xkwhI3Bdvl-t4tzAA.png';
				const wifi_tab_url='https://ibb.co/FbBPYw6';
				const eod_wa_url = 'https://ibb.co/DMSwT21';
				
				const rmv_keyboard = {
					'reply_markup' :{
						'inline_keyboard': [],
						remove_keyboard: true
					}
				};
				
				if (callbackQuery.data == 'tut_tst'){
					bot.sendPhoto(rsp2.chat.id, 'https://ibb.co/GQjx5y3', rmv_keyboard);
				};
				switch (callbackQuery.data){
					case 'tut_pda': 
						bot.sendMessage(rsp2.chat.id, 'bit.ly/pda45');
						break;
					case 'tut_tab': 
						bot.sendPhoto(rsp2.chat.id, wifi_tab_url,{caption : "Tutorial konek wifi tablet\n Semoga membantu."});
						break;
					case 'tut_eod_wa': 
						bot.sendPhoto(rsp2.chat.id, eod_wa_url);
						break;
					case 'tut_ups': 
						bot.sendPhoto(rsp2.chat.id, image_url);
						break;
					case 'tut_link': 
						bot.sendMessage(rsp2.chat.id, 'bit.ly/t-cash45');
						break;
					case 'tut_lpb': 
						bot.sendMessage(rsp2.chat.id, 'bit.ly/lpbpda45');
						break;
					case 'tut_dana': 
						bot.sendPhoto(rsp2.chat.id, 'https://ibb.co/jZj4fQW',{caption : "<b>Tutorial transaksi DANA\n Semoga membantu naki&nakwai sekalian.</b>", parse_mode: "HTML"});
						break;
				}
			});
			
		break;
		case 'solusi':
		bot.sendMessage(rsp.chat.id, 'Temukan masalah dan solusinya disni:\n<b>Masalah Audio Promo:\n</b>/audio1 - Muncul error (A Problem occured in initializing MCI.)', {parse_mode : "HTML"});
		
		bot.onText(/\/audio1/, (msg) => {
			bot.sendPhoto(msg.chat.id, 'https://ibb.co/rmfn221',{caption : "<b>Semoga membantu naki&nakwai sekalian.</b>", parse_mode: "HTML"});
		});
		break;
		case 'support':
		bot.sendMessage(rsp.chat.id, 'Hubungi @iqbalsuzetta jika naki/nakwai menemukan error atau punya request tutorial yang ingin di buatkan.', rmv2_keyboard);
		bot.sendSticker(rsp.chat.id, 'CAADAgADggAD9wLID7K_fJLPlMUzFgQ');
		break;
	}
});
