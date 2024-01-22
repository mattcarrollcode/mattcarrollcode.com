---
title: Transcribing audio with Open AI's Whisper
date: April 20, 2023
---

In the past, transcribing audio into text has been a surprisingly difficult task for a programmer, given that nearly every smart phone has access to an assistant that can transcribe your voice in seconds. You had to find a free trail of a service or cloud API figure out how it works and send the audio. Even then the results were mixed at best. OpenAI's Whisper actually lives up to its parent's companies name, a free open source model that makes it easy to get high quality text transcriptions of audio. It even works with languages other than English (although I haven't tried it)! Here is what I did to transcribe and summarize a four hour interview:

## **Installing and using ffmpeg**

First I downloaded the video of the interview I wanted to transcribe. While the download was going I installed [ffmpeg](https://ffmpeg.org/) which Whisper needs to work. I also needed ffmpeg to convert the video I was downloading into a audio file:

| Operating System | Installation Instructions |
| --- | --- |
| macOS | [Install Homebrew](https://brew.sh/#install) then run: `brew install ffmpeg` in a terminal |
| Linux (Debian) | Run `sudo apt update && sudo apt install ffmpeg` in a terminal |
| Windows | [Install Chocolatey](https://chocolatey.org/install) then run: `choco install ffmpeg` in a terminal |

If you don't know already, ffmpeg is a incredibly powerful tool for transforming video and audio files between different formats, codecs, containers, and settings (it can even make GIFs!) [among many other things](https://ffmpeg.org/ffmpeg.html). I used ffmpeg to convert the `mp4` video file into a `wav` audio file which Whisper takes as an input:

```sh
ffmpeg -i video.mp4 -ac 2 -f wav audio.wav
```

## **Installing Python and Whisper**

Next up is setting up Python and the Whisper library. The Whisper library only supports up to Python 3.10. I used pyenv to install the latest version of Python Whisper supports (3.10.9 as of April 1, 2023). pyenv is a tool used to manage and install different version of Python. You can see [the documentation for installing pyenv here](https://github.com/pyenv/pyenv#installation). To make pyenv play nice with Python's virtual enviornment I'm using the pyenv-virtualenv pyenv plugin. pyenv-virtualenv makes it easier to tie a project to a specific Python version and virtual enviornment. You can see [the documentation for installing pyenv-virtualenv here](https://github.com/pyenv/pyenv-virtualenv#installation).

Next up is using pyenv to install the latest version of Python version 3.10. As of April 1st that is version 3.10.9:

```sh
pyenv install 3.10.9
```

Next up is creating a Python 3.10.9 virtual enviornment for our project that I will call `whisper`:

```sh
pyenv virtualenv 3.10.9 whisper
```

Now I'm going to `cd` to my project folder and set the project folder to use the virtual enviornment I just created:

```sh
pyenv local whisper
```

you should now see the name of your virtual environment in parethesis (`(whisper)`) before your command prompt. Finally I install the Whisper library straight from GitHub:

```sh
pip install git+https://github.com/openai/whisper.git
```

This installed the Whisper library using our virtual enviorment and enabled us to use the `whisper` command line program to process audio files.


## **Running Whisper and analyzing the output**

Running whisper is as easy as:

```
whisper audio.wav
```

I wanted to try out the largest model so I used the `--model large` flag to tell Whisper to use the largest model. The first few mintues of my audio were instrumental music which caused Whisper to think the audio was Finnish, when it was actually English. I used the `--language English` flag to tell Whisper my audio was in English. Together the new command is:

```sh
whisper --model large --language English audio.wav
```

The large model is slow and processes in about realtime (e.g. 1x speed) which means that my 4 hours of audio took about 4 hours to process. At the end of it Whisper spit out 5 files:

* **audio.txt** ([example](https://github.com/mattcarrollcode/whisper/blob/main/audio.txt)): A file with the text of the transcript with no additional data. It provides line breaks for easier reading
* **audio.srt** ([example](https://github.com/mattcarrollcode/whisper/blob/main/audio.srt)): This is a subtitles file, and includes timestamp information so that the relevant transcribed audio is presented visually at the correct time
* **audio.tsv** ([example](https://github.com/mattcarrollcode/whisper/blob/main/audio.tsv)): This provides similar information to the subtitles track with the transcribed text and a start and stop time for when the transcribed text was said
* **audio.vtt** ([example](https://github.com/mattcarrollcode/whisper/blob/main/audio.vtt)): This is a Video Text Tracks, a video metadata format that is sometimes used for subtitles.
* **audio.json** ([example](https://github.com/mattcarrollcode/whisper/blob/main/audio.json)): This is some structure data that includes all the transcribed text and some information on how confident the model is in its transcription for a selection of token inputs.

## **Results of transcribing a video**

I performed the above on [Ben Holmes' livestreamed Twitch interview with Dan Abramov about React Server components](https://www.twitch.tv/videos/1779925131) because the [Ben's YouTube upload of the Twitch stream](https://www.youtube.com/watch?v=Fctw7WjmxpU) was [taking a while to update with closed captioning](https://www.youtube.com/watch?v=Fctw7WjmxpU&lc=UgwjEnfLxeAOOTald0x4AaABAg.9nv9Dkd6ass9nvk_egRFCZ). I was hoping to provide the transcription to those that were asking for it in comments on Ben's video but by the time I finished YouTube had already added closed captioning to the video on its own. I also took the text from audio.txt and ran it through ChatGPT in chunks to get a [ChatGPT3.5](https://github.com/mattcarrollcode/whisper/blob/main/summary-gpt3.txt) and [ChatGPT4](https://github.com/mattcarrollcode/whisper/blob/main/summary-gpt4.txt) summary of Ben's interview with Dan.

## **Acknowledgments**

I figure out how to do this from [OpenAI's Whisper GitHub repo](https://github.com/openai/whisper) and [Assembly AI's blog post](https://www.assemblyai.com/blog/how-to-run-openais-whisper-speech-recognition-model/)
