import React from "react";
import avatar from "../../assets/avatar.jpeg";
import "./style.css";

const rrss = [
  {
    name: "Twitch",
    link: "https://www.twitch.tv/jevyanj",
    icon: "fa-brands fa-twitch"
  },
  {
    name: "TikTok",
    link: "https://www.tiktok.com/@jevyanj",
    icon: "fab fa-tiktok"
  },
  {
    name: "Twitter",
    link: "https://twitter.com/JevyanJ",
    icon: "fab fa-twitter"
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCAiSqHx1xu5IHcz7M4GJGDg",
    icon: "fab fa-youtube"
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/jevyanj/",
    icon: "fab fa-instagram"
  }
];

function rrss_button(element) {
  return (
    <a href={element["link"]} target="_blank" class="link-items">
      <i class={element["icon"]}></i>
      <div>{element["name"]}</div>
    </a>
  );
}

export default function LinkTree() {
  return (
    <div>
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <div class="content">
        <img src={avatar} class="profile-pic" alt="profile pic" />
        <a
          href="https://www.twitch.tv/jevyanj"
          target="_blank"
          class="username"
        >
          @JevyanJ
        </a>
        <div class="links">{rrss.map(rrss_button)}</div>
      </div>
    </div>
  );
}
