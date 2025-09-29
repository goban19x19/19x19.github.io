// js/config.js
// Choisir le mode d�affichage:
// - "uploads": affiche automatiquement la playlist des mises en ligne de la cha�ne (� partir du channelId)
// - "playlist": affiche une playlist que tu choisis (playlistId)
// - "grid": affiche une grille de vid�os d�termin�es (videoIds)
window.CHANNEL_CONFIG = {

    // Lien vers Notion publique
    sgfUrl: "https://flint-aurora-a1d.notion.site/19x19-27bd390ee9f1806e993cf963a26fd993?source=copy_link",

    // Largeur max du lecteur (en px)
    playerMaxWidth: "30%",  // 60% de la largeur de la fen�tre
    playerAspect: "4:3", // "16:9" | "4:3""

    // Le channelId (commence par "UC...")
    channelId: "UCf0Tgec4on1fa8CzDhfLgzA",

    // Le handle de la cha�ne (le @handle). Ce sera utilis� comme fallback si aucune mention n'est trouv�e dans la traduction.
    // Mettre le @ devant : ex: "@goban19x19"
    channelHandle: "@goban19x19",

    // Choix: "uploads" | "playlist" | "grid"
    use: "uploads",

    // Si use = "playlist", renseigne l'ID de la playlist (ex: PLxxxx...)
    playlistId: "",

    // Si use = "grid", liste d'IDs vid�o � afficher
    videoIds: [
        // "dQw4w9WgXcQ",
        // "xxxxxxxxxxx",
    ]

};