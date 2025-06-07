const matrix = () => {
  const chars = "010101001010101010011010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010";
  const columns = process.stdout.columns || 80;
  const drops = Array(columns).fill(1);

  const colorGreen = (text) => `\x1b[32m${text}\x1b[0m`;
  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  const draw = () => {
    let output = '';
    for (let i = 0; i < columns; i++) {
      const char = chars[Math.floor(Math.random() * chars.length)];
      output += Math.random() > 0.975 ? colorGreen(char) : ' ';
    }
    console.log(output);
  };

  return new Promise(resolve => {
    const interval = setInterval(draw, 50);
    setTimeout(() => {
      clearInterval(interval);
      console.clear();

      console.log('          \x1b[36m');
      console.log('                                         ██╗    ██╗ █████╗ ██████╗  ██████╗ ████████╗');
      console.log('                                         ██║    ██║██╔══██╗██╔══██╗██╔═══██╗╚══██╔══╝');
      console.log('                                         ██║ █╗ ██║███████║██║  ██║██║   ██║   ██║   ');
      console.log('                                         ██║███╗██║██╔══██║██║  ██║██║   ██║   ██║   ');
      console.log('                                         ╚███╔███╔╝██║  ██║██████╔╝╚██████╔╝   ██║   ');
      console.log('                                          ╚══╝╚══╝ ╚═╝  ╚═╝╚═════╝  ╚═════╝    ╚═╝   ');
      console.log('                                           Desarrollado por Studio Server developer');
      console.log('\x1b[0m');

      // TQTO
      console.log('\n\x1b[1m\x1b[35m==== CONECTADO A SERVICIOS ====\x1b[0m');
      console.log('\x1b[32m✔\x1b[0m Conectado a servidor de Studio Server');
      console.log('\x1b[32m✔\x1b[0m Conexion a Internet');
      console.log('\x1b[32m✔\x1b[0m Conectado a base de datos');
      console.log('\x1b[32m✔\x1b[0m Conectado a repositorio de datos');
      console.log('\x1b[32m✔\x1b[0m Conectado a servico de datos');
      console.log('\x1b[32m✔\x1b[0m Conectado a servicios de terceros');
      console.log('\x1b[32m✔\x1b[0m Conectado a servicio API');

      // Kontak Developer
      console.log('\n\x1b[1m\x1b[36m==== CONTACTO CON EL DESARROLLADOR ====\x1b[0m');
      console.log('\x1b[33m• YouTube:\x1b[0m https://www.youtube.com/@Studio_server');
      console.log('\x1b[33m• WhatsApp:\x1b[0m wa.me/51932019718');
      console.log('\x1b[33m• Canal:\x1b[0m https://whatsapp.com/channel/0029VaKaIemKQuJHXZF6XO0W');
      console.log('\x1b[33m• Sitio Web:\x1b[0m https://www.studioserver.org');

      console.log('\n\x1b[36m[ Studio Server (usando servidor) ]\x1b[0m Iniciando servidor...\n');
      resolve(); // Resolve promise setelah animasi selesai
    }, 3000); // Efek jalan selama 3 detik
  });
};
module.exports = matrix;