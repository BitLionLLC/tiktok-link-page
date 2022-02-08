import React from 'react';
import SingleLink from './singleLink';

const links = [
  {link: "https://open.spotify.com/artist/3t3zKVdiWERcdDHg6ei89c?si=Tv792WlMSoKoQuVKl9kZdw", title: "Music (Spotify)", icon: ["fab", "spotify"], color: "#1DB954"},
  {link: "https://music.apple.com/us/artist/keefler/1567547480", title: "Music (Apple Music)", icon: ["fab", "apple"], color: "#fc3c44"},
  {link: "https://www.twitch.tv/keefler_elf", title: "Twitch", icon: ["fab", "twitch"], color: "#6441a5"},
  {link: "https://discord.gg/MsEwjY2", title: "Join the Discord!", icon: ["fab", "discord"], color: "#5865F2"},
  {link: "https://twitter.com/keefler_elf", title: "Twitter", icon: ["fab", "twitter"], color:"#00acee"},
  {link: "https://www.instagram.com/keefler_elf/", title: "Instagram", icon: ["fab", "instagram"], color: "#3f729b"},
  {link: "https://commonscannabis.com/?sld=20", title: "Weed (delta-8 THC)", icon: ["fas", "cannabis"], color: "green"}, 
  {link: "https://www.bonfire.com/store/braydens-very-diverse-store/", title: "Merch", icon: ["fas", "shopping-cart"]},
  {link: "https://www.yasglass.com/not-high-pipes.html", title: "Pipes", icon: ["fas", "joint"]},
  {link: "https://onlyfans.com/keefler_elf", title: "OnlyFans", icon: ["fas", "lock"], color: "#00AFF0"},
  {link: "https://www.amazon.com/hz/wishlist/ls/2NDKMZL4ULQ61", title: "Amazon Wishlist", icon: ["fab", "amazon"], color: "#b16501"},
]

const LinkList = ({isLive}) => {
  return links.map(link => {
    return <SingleLink link={link.link} title={link.title} icon={link.icon} altText={link.altText} color={link.color} isLive={isLive} />
  })
}

export default LinkList;