
module.exports = {
  name: 'قائمة',
  description: 'عرض قائمة الأوامر',
  execute: async (m, conn) => {
    await conn.sendMessage(m.chat, { text: '📋 الأوامر:
.ملصق - تحويل صورة إلى ملصق
.تشغيل - تحميل أغنية
.ذكاء - اسأل الذكاء الاصطناعي' });
  }
};
