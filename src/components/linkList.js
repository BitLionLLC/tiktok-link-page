import React from 'react';
import SingleLink from './singleLink';

const links = [
  {link: "https://open.spotify.com/album/0z5iCoiO5WL9s6Ehi1cLzQ?si=QSvjuT3oQQGGrF5ZOBXIHA", title: "Music (Spotify)", icon: ["fab", "spotify"]},
  {link: "https://music.apple.com/us/album/breezy-single/1567558647", title: "Music (Apple Music)", icon: ["fab", "apple"]},
  {link: "https://www.twitch.tv/keefler_elf", title: "Twitch", icon: ["fab", "twitch"]},
  {link: "https://twitter.com/keefler_elf", title: "Twitter", icon: ["fab", "twitter"]},
  {link: "https://www.instagram.com/keefler_elf/", title: "Instagram", icon: ["fab", "instagram"]},
  {link: "https://www.bonfire.com/store/braydens-very-diverse-store/", title: "Merch", icon: ["fas", "shopping-cart"]},
  {link: "https://www.yasglass.com/not-high-pipes.html", title: "Pipes", icon: ["fas", "cart-plus"]},
  {link: "https://onlyfans.com/keefler_elf", title: "OnlyFans", icon: ["fas", "lock"]},
]

const LinkList = (isLive) => {
  return links.map(link => {
    return <SingleLink link={link.link} title={link.title} icon={link.icon} altText={link.altText} isLive={isLive} />
  })
}

export default LinkList;