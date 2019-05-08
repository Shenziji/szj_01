function music(isplay = true) {
  let cv = document.querySelector("canvas");
  let cxt = cv.getContext("2d");

  // let w = (cv.width = window.innerWidth);
  let w = cv.width = 1190;
  // let h = (cv.height = window.innerHeight);
  let h = cv.height = 500;

  // 颜色渐变
  const bg = cxt.createLinearGradient(w / 2, h / 2 - 100, w / 2, h / 2 + 100);
  bg.addColorStop(0, "#00f");
  bg.addColorStop(0.5, "#f00");
  bg.addColorStop(1, "#0f0");

  window.addEventListener("resize", function () {
    w = cv.width = 1190;
    h = cv.height = 500;
    // w = cv.width = window.innerWidth;
    // h = cv.height = window.innerHeight;
  });

  document.addEventListener("dragover", function (e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  });
  document.addEventListener("drop", function (e) {
    let dataTransfer = e.dataTransfer;
    if (dataTransfer.files.length == 1) {
      let dataAudio = dataTransfer.files[0];
      let blob = new Blob([dataAudio]);
      let url = window.URL.createObjectURL(blob);
      let el = document.createElement("audio");
      el.src = url;
      el.volume = 0.3;
      el.autoplay = "autoplay";
      if (isplay) {
        console.log('播放');
        
        el.play();
      } else {
        console.log('暂停');
        el.pause()
      }

      audioCanvas(el);
    }
    e.preventDefault();
    e.stopPropagation();
    return false;
  });

  // 通过音频API 去监听 audio标签 播放时可以得到数据
  // 在canvas上绘制音频图
  function audioCanvas(el) {
    // 创建音频对象
    let audioCxt = new AudioContext();
    // 创建分析机
    let analyser = audioCxt.createAnalyser();

    // 分析多媒体
    let audioSrc = audioCxt.createMediaElementSource(el);

    // 把媒体源 和分析连接进来
    audioSrc.connect(analyser);

    // mp3 -> 分析机 -> 扬声器
    audioSrc.connect(audioCxt.destination);

    // 在canvas绘制
    const count = 100;
    // 获取音频的频率  数组1024长度
    let data = new Uint8Array(analyser.frequencyBinCount);
    // console.log(data);
    // 最开始是没有数据 音频播放后 不断获取 就能够得到播放时数据
    // 绘制的就是播放时的音频数据
    (function draw() {
      cxt.clearRect(0, 0, w, h);
      analyser.getByteFrequencyData(data);
      // 抽样 不需要把数组里1024个音频数据 都绘制出来
      let step = Math.round(data.length / count);
      for (let i = 0; i < count; i++) {
        let lineH = data[step * i];
        cxt.fillStyle = bg;
        cxt.fillRect(w / 3 + i * 5, h / 2, 2, -lineH);
      }
      requestAnimationFrame(draw);
    })();
  }
}

export {
  music
}
