import React from "react";
import avatar from "../../assets/avatar.jpeg";
import "./style.css";

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
        <div class="links">
          <a
            href="https://www.twitch.tv/jevyanj"
            target="_blank"
            class="link-items"
          >
            <i class="fa-brands fa-twitch"></i>
            <div>Twitch</div>
          </a>
          <a
            href="https://www.tiktok.com/@jevyanj"
            target="_blank"
            class="link-items"
          >
            <i class="fab fa-tiktok"></i>
            <div>TikTok</div>
          </a>
          <a
            href="https://twitter.com/JevyanJ"
            target="_blank"
            class="link-items"
          >
            <i class="fab fa-twitter"></i>
            <div>Twitter</div>
          </a>
          <a
            href="https://www.youtube.com/channel/UCAiSqHx1xu5IHcz7M4GJGDg"
            target="_blank"
            class="link-items"
          >
            <i class="fab fa-youtube"></i>
            <div>YouTube</div>
          </a>
          <a
            href="https://www.instagram.com/jevyanj/"
            target="_blank"
            class="link-items"
          >
            <i class="fab fa-instagram"></i>
            <div>Instagram</div>
          </a>
        </div>
      </div>
    </div>
  );
}
