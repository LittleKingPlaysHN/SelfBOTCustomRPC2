const { Client, RichPresence, CustomStatus, SpotifyRPC } = require('discord.js-selfbot-v13');
const client = new Client();

client.on('ready', async () => {
  console.log(`${client.user.username} Iniciado Correctamente Gracias A @LittleKingPlays`); // NO ELIMINAR LOS CREDITOS NI EDITAR NADA QUE NO ENTIENDAS! // https://github.com/LittleKingPlaysHN/SelfBOTCustomRPC2

  // GIF/Imagen grande
  const largeAsset = await RichPresence.getExternal(
    client,
    '1439771227043659806',
    'https://lynobot.wordpress.com/wp-content/uploads/2025/11/giphy.gif'
  );

  // GIF/Imagen pequeño
  const smallAsset = await RichPresence.getExternal(
    client,
    '1439771227043659806',
    'https://lynobot.wordpress.com/wp-content/uploads/2025/10/giphy-3.gif'
  );

// ---------------- STATUS JUGANDO ---------------- // NO ELIMINAR LOS CREDITOS NI EDITAR NADA QUE NO ENTIENDAS! // https://github.com/LittleKingPlaysHN/SelfBOTCustomRPC2

  const status = new RichPresence(client)
    .setApplicationId('1439771227043659806')
    .setType('PLAYING') // COMPETING = COMPITIENDO // WATCHING = VIENDO // STREAMING = TRASMITIENDO
    .setURL('https://www.youtube.com/@LittleKingPlaysHN') // Editar Por Lo Que Quieras
    .setState('LittleKingPlays') // Editar Por Lo Que Quieras
    .setName('@Clarents') // Editar Por Lo Que Quieras
    .setDetails('La Realeza - Studio') // Editar Por Lo Que Quieras
    .setParty({
      max: 777,
      current: 444,
    })
    .setStartTimestamp(Date.now() - 52 * 60 * 1000) // 5 minutos antes
    .setAssetsLargeImage(largeAsset[0].external_asset_path)  // GIF grande
    .setAssetsLargeText('@404') // Texto Imagen Grande
    .setAssetsSmallImage(smallAsset[0].external_asset_path)  // GIF pequeño
    .setAssetsSmallText('@Overclock') // Texto Imagen Pequeña
    .setPlatform('desktop') 
    .addButton('Discord', 'https://discord.gg/AEq3U5hpFB') // Link Boton Uno
    .addButton('My User', 'https://myuser.gg/clarents'); // Link Boton Dos


// ---------------- STATUS SIMPLE ---------------- // NO ELIMINAR LOS CREDITOS NI EDITAR NADA QUE NO ENTIENDAS! // https://github.com/LittleKingPlaysHN/SelfBOTCustomRPC2

  const custom = new CustomStatus(client).setEmoji('💬').setState('myuser.gg/clarents'); // Status Simple Con Emoji

// ---------------- STATUS SPOTIFY ---------------- // NO ELIMINAR LOS CREDITOS NI EDITAR NADA QUE NO ENTIENDAS! // https://github.com/LittleKingPlaysHN/SelfBOTCustomRPC2

  const spotify = new SpotifyRPC(client)
  .setAssetsLargeImage('spotify:ab67616d0000b2738863bc11d2aa12b54f5aeb36') // icon álbum
.setAssetsSmallImage('spotify:ab67616d0000b2738863bc11d2aa12b54f5aeb36') // Icon artista
  .setAssetsLargeText('After Hours') // Nombre del álbum
  .setState('The Weeknd') // Artista
  .setDetails('Blinding Lights') // Canción
  .setStartTimestamp(Date.now())
  .setEndTimestamp(Date.now() + 1_000 * (3 * 60 + 22)) // 3 minutos 22 segundos
  .setSongId('5wANPM4fQCJwkGd4rN57mH') // ID de la canción
  .setAlbumId('4yP0hdKOZPNshxUOjY0cZj') // ID del álbum
  .setArtistIds('1Xyo4u8uXC1ZmMpatF05PJ'); // ID del artista
 

  client.user.setPresence({ activities: [status, custom, spotify] });
});

// ---------------- AQUI PON TU TOKEN ---------------- // NO ELIMINAR LOS CREDITOS NI EDITAR NADA QUE NO ENTIENDAS! // https://github.com/LittleKingPlaysHN/SelfBOTCustomRPC2
client.login('TOKEN AQUI'); // Tu Token Aqui
