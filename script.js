// ==UserScript==
// @name     YouTube Watch later - No playlist query params
// @description Remove extra query parameters from video playlist links
// @version  1
// @grant    none
// @include https://www.youtube.com/playlist*
// ==/UserScript==

const updateLinks = () => {
    const videoLinks = document.querySelectorAll('.ytd-playlist-video-renderer > #video-title');

    for (const videoLink of videoLinks) {
        const url = videoLink.attributes['href']?.value;
        const andIdx = (url || '').indexOf('&');

        if (url == null || andIdx === -1) {
            continue;
      }

        // Update url
        videoLink.attributes['href'].value = url.substr(0, andIdx);
    }
};

setInterval(updateLinks, 100);