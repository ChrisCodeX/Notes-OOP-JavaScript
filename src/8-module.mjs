/* eslint-disable */
function videoPlay(id) {
  const url = `https://google.com/class/`
  console.log(`Se está reproduciendo desde la url: ${id}`);
}

function videoStop() {
  const url = `https://google.com/class/`
  console.log(`Se ha detenido desde la url: ${id}`);
}

export class EducationClass {
  constructor({
    name,
    videoId
  }) {
    this.name = name;
    this.videoId = videoId;
  }

  reproducir() {
    videoPlay(this.videoId);
  }

  detener() {
    videoStop(this.videoId);
  }
}