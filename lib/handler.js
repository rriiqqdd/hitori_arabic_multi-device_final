
const makeWASocket = require('@whiskeysockets/baileys').default;
const { useMultiFileAuthState } = require('@whiskeysockets/baileys');

async function connectToWhatsApp() {
  const { state, saveCreds } = await useMultiFileAuthState('auth_info');
  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: true
  });

  sock.ev.on('creds.update', saveCreds);

  sock.ev.on('messages.upsert', async ({ messages }) => {
    const m = messages[0];
    if (!m.message) return;
    const text = m.message.conversation || m.message.extendedTextMessage?.text || '';

    if (text === '.قائمة') {
      await sock.sendMessage(m.key.remoteJid, { text: '📋 الأوامر:
.ملصق
.تشغيل
.ذكاء' });
    }
  });
}

connectToWhatsApp();
