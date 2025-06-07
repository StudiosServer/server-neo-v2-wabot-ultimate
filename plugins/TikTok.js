const fetchJson = require('../library/myfunc').fetchJson;

module.exports = {
    name: "tiktok",
    execute: async (neo, m, text) => {
        if (!text) return neo.sendMessage(m.chat, { text: "❌ Debes proporcionar un enlace de TikTok." });

        await neo.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

        try {
            const res = await fetchJson(`https://api.studioserver.org/download/tiktok?query=${encodeURIComponent(text)}`);
            if (!res?.status || !res?.data) throw new Error('❌ La API no devolvió los archivos esperados.');

            const videoUrl = res.data.video;
            const audioUrl = res.data.audio;
            const description = res.data.information.description || 'Sin descripción';
            const creator = res.data.information.tiktokId || 'Desconocido';

            if (!videoUrl || !audioUrl) throw new Error('❌ No se encontraron los archivos necesarios.');

            await neo.sendMessage(m.chat, {
                video: { url: videoUrl },
                caption: `✅ ¡Descarga exitosa!\n\n📝 Descripción: ${description}\n👤 Creador: ${creator}`
            }, { quoted: m });

            setTimeout(async () => {
                const audioBuffer = await fetch(audioUrl).then(res => res.buffer());
                await neo.sendMessage(m.chat, { 
                    audio: audioBuffer, 
                    mimetype: 'audio/mpeg', 
                    ptt: true 
                }, { quoted: m });
            }, 1000);

        } catch (err) {
            console.error("🔴 Error en TikTok.js:", err.message);
            neo.sendMessage(m.chat, { text: '❌ Error al obtener el vídeo de TikTok.' });
        }
    }
};