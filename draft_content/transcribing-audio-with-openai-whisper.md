---
title: Transcribing audio with Open AI's Whisper
date: April 1, 2023
---

In the past, transcribing audio into text has been a suprisingly difficult task for a programmer, given that nearly every smart phone has access to an assistant that can transcribe your voice in seconds. You had to find a free trail of a service or cloud API figure out how it works and send the audio. Even then the results were mixed at best. OpenAI's Whisper actually lives up to its parent's companies name, a free open source model that makes it easy to get high quality text transcriptions of audio. It even works with languages outside of english (alough I haven't tried it)! Here is what I did to transcribe a four hour interview:

## Setup

First I downloaded the video of the interview I wanted to transcribe. Then I converted the `mp4` file into the `wav` file Whisper expects:

```sh
```

WHile I was waiting for ffmpeg to finish creating the wave file I setup a new enviornemnt to run whisper in. I used pyenv to install the latest version of Python Whisper supports (3.10.9 as of April 1, 20203). pyenv is a tool used to 


