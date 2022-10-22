/*
  Downloads an MP4 Youtube video
*/
const fs = require('fs');
const ytdl = require('ytdl-core');

chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
    // TODO: change the URL to the video URL provided by the tab
    //       using tabs[0].url
    ytdl('https://www.youtube.com/watch?v=ZU0f8_C5Pm0')
        .pipe(fs.createWriteStream('video.mp4'));
});