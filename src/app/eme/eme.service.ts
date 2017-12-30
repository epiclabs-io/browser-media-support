import { Injectable } from '@angular/core';

interface Window {
  MediaKeys?: any;
  navigator?: any;
  MediaKeySystemAccess?: any;
  webkitSetMediaKeys?: any;
  WebKitMediaKeys?: any;
}

declare const window: Window;

interface DRMCompatibilityInfo {
  id: string;
  keysystems: string[];
  supported?: boolean;
}

@Injectable()
export class EmeService {

  drmMechanisms: DRMCompatibilityInfo[] = [
    { 'id': 'Widevine', 'keysystems': ['com.widevine.alpha'] },
    { 'id': 'PlayReady', 'keysystems': ['com.microsoft.playready', 'com.youtube.playready'] },
    { 'id': 'Primetime', 'keysystems': ['com.adobe.primetime', 'com.adobe.access'] },
    { 'id': 'Fairplay', 'keysystems': ['com.apple.fairplay', 'com.apple.fps.1_0', 'com.apple.fps', 'com.apple.fps_2_0'] },
    { 'id': 'ClearKey', 'keysystems': ['webkit-org.w3.clearkey', 'org.w3.clearkey'] }
  ];

  pendingJobs: number;
  videoElement: HTMLVideoElement;

  constructor() {
    this.videoElement = document.createElement('video');
  }

  public isEmeSupported(): boolean {
    return (window.MediaKeys && window.navigator
      && window.navigator.requestMediaKeySystemAccess
      && window.MediaKeySystemAccess && window.MediaKeySystemAccess.prototype.getConfiguration)
      || typeof (this.videoElement as any).webkitSetMediaKeys === 'function';
  }

  public findOutSupportedKeySystems() {
    const that = this;
    const promise = new Promise((resolve, reject) => {
      this.pendingJobs = 0;
      this.drmMechanisms.forEach((drm: DRMCompatibilityInfo) => {
        drm.supported = false;
        this.pendingJobs += drm.keysystems.length;
      });

      if (!this.isEmeSupported()) {
        resolve(this.drmMechanisms);
        return;
      }

      if (typeof window.navigator.requestMediaKeySystemAccess === 'function') {
        const isKeySystemSupported = (drm: DRMCompatibilityInfo, keySystem: string) => {
          const config = [{
            initDataTypes: ['cenc'],
            audioCapabilities: [{
              contentType: 'audio/mp4;codecs="mp4a.40.2"'
            }],
            videoCapabilities: [{
              'contentType': 'video/mp4;codecs="avc1.42E01E"'
            }]
          }];
          try {
            window.navigator.requestMediaKeySystemAccess(keySystem, config).then((keySystemAccess) => {
              that.completeJob(drm, true, resolve);
            }).catch(function (err) {
              that.completeJob(drm, false, resolve);
            });
          } catch (e) {
            that.completeJob(drm, false, resolve);
          }
        };

        this.drmMechanisms.forEach((drm: DRMCompatibilityInfo) => {
          drm.keysystems.forEach((ks: string) => {
            isKeySystemSupported(drm, ks);
          });
        });
      } else if (typeof (this.videoElement as any).webkitGenerateKeyRequest === 'function') {
        this.drmMechanisms.forEach((drm: DRMCompatibilityInfo) => {
          drm.keysystems.forEach((ks: string) => {
            that.completeJob(drm, (this.videoElement as any).canPlayType('video/mp4', ks), resolve);
          });
        });
        // Safari
      } else if (typeof (this.videoElement as any).webkitSetMediaKeys === 'function') {
        this.drmMechanisms.forEach((drm: DRMCompatibilityInfo) => {
          drm.keysystems.forEach((ks: string) => {
            try {
              (this.videoElement as any).webkitSetMediaKeys(new window.WebKitMediaKeys(ks));
              that.completeJob(drm, !!(this.videoElement as any).webkitKeys, resolve);
            } catch (e) {
              that.completeJob(drm, false, resolve);
            }
          });
        });
      }
    });
    return promise;
  }

  private completeJob(drm: DRMCompatibilityInfo, result: boolean, resolve) {
    console.log('Done: ' + drm.id + ', result: ' + result);
    drm.supported = drm.supported || result;
    this.pendingJobs--;
    if (this.pendingJobs === 0) {
      resolve(this.drmMechanisms);
    }
  }
}
