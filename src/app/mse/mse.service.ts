import { Injectable } from '@angular/core';

interface Window {
  MediaSource?: any;
  WebKitMediaSource?: any;
  SourceBuffer?: any;
  WebKitSourceBuffer?: any;
}

declare const window: Window;

interface MimeTypeInfo {
  desc: string;
  mimeType: string;
  supported?: boolean;
}

@Injectable()
export class MseService {

  mimeTypes: MimeTypeInfo[] = [
    // MP4 types
    { 'desc': 'MP4 - H.264 AVC1 Baseline profile', 'mimeType': 'video/mp4; codecs="avc1.42E01E"' },
    { 'desc': 'MP4 - H.264 AVC1 Main profile', 'mimeType': 'video/mp4; codecs="avc1.4D401F"' },
    { 'desc': 'MP4 - H.264 AVC1 High profile', 'mimeType': 'video/mp4; codecs="avc1.64000a"' },
    { 'desc': 'MP4 - H.264 AVC3', 'mimeType': 'video/mp4; codecs="avc3.42E01E"' },
    { 'desc': 'MP4 - HEVC HEV1', 'mimeType': 'video/mp4; codecs="hev1.1.6.L93.90"' },
    { 'desc': 'MP4 - HEVC HVC1', 'mimeType': 'video/mp4; codecs="hvc1.1.6.L93.90"' },
    { 'desc': 'MP4 - HEVC HDR HEV1', 'mimeType': 'video/mp4; codecs="hev1.2.4.L153.B0"; eotf="smpte2084"' },  // HDR HEVC
    { 'desc': 'MP4 - HEVC HDR HVC1', 'mimeType': 'video/mp4; codecs="hvc1.2.4.L153.B0"; eotf="smpte2084"' },  // HDR HEVC
    { 'desc': 'MP4 - VP9', 'mimeType': 'video/mp4; codecs="vp09.00.10.08"' },
    { 'desc': 'MP4 - AAC', 'mimeType': 'audio/mp4; codecs="mp4a.40.2"' },
    { 'desc': 'MP4 - AC3', 'mimeType': 'audio/mp4; codecs="ac-3"' },
    { 'desc': 'MP4 - EC3', 'mimeType': 'audio/mp4; codecs="ec-3"' },
    { 'desc': 'MP4 - OPUS', 'mimeType': 'audio/mp4; codecs="opus"' },
    { 'desc': 'MP4 - FLAC', 'mimeType': 'audio/mp4; codecs="flac"' },

    // WebM types
    { 'desc': 'WEBM - VP8', 'mimeType': 'video/webm; codecs="vp8"' },
    { 'desc': 'WEBM - VP9', 'mimeType': 'video/webm; codecs="vp9"' },
    { 'desc': 'WEBM - AV1', 'mimeType': 'video/webm; codecs="av1"' },
    { 'desc': 'WEBM - VORBIS', 'mimeType': 'audio/webm; codecs="vorbis"' },
    { 'desc': 'WEBM - OPUS', 'mimeType': 'audio/webm; codecs="opus"' },

    // MPEG2 TS types (video/ is also used for audio: http://goo.gl/tYHXiS)
    { 'desc': 'MPEG2 TS - H.264 AVC1', 'mimeType': 'video/mp2t; codecs="avc1.42E01E"' },
    { 'desc': 'MPEG2 TS - H.264 AVC3', 'mimeType': 'video/mp2t; codecs="avc3.42E01E"' },
    { 'desc': 'MPEG2 TS - HEVC HVC1', 'mimeType': 'video/mp2t; codecs="hvc1.1.6.L93.90"' },
    { 'desc': 'MPEG2 TS - AAC', 'mimeType': 'video/mp2t; codecs="mp4a.40.2"' },
    { 'desc': 'MPEG2 TS - AC3', 'mimeType': 'video/mp2t; codecs="ac-3"' },
    { 'desc': 'MPEG2 TS - EC3', 'mimeType': 'video/mp2t; codecs="ec-3"' }
  ];

  constructor() {
    if (this.isMseSupported()) {
      this.mimeTypes.forEach((t: MimeTypeInfo) => {
        t.supported = this.isMimeTypeSupported(t.mimeType);
      });
    }
  }

  public isMseSupported(): boolean {
    const mediaSource = window.MediaSource = window.MediaSource || window.WebKitMediaSource;
    const sourceBuffer = window.SourceBuffer = window.SourceBuffer || window.WebKitSourceBuffer;
    return mediaSource && typeof mediaSource.isTypeSupported === 'function';
  }

  public getMimeTypesInfo(): MimeTypeInfo[] {
    return this.mimeTypes;
  }

  private isMimeTypeSupported(mimeType): boolean {
    return window.MediaSource.isTypeSupported(mimeType);
  }

}
