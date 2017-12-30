import { Component } from '@angular/core';

import { MseService } from './mse/mse.service';
import { EmeService } from './eme/eme.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    colorYes = '#94bf1e';
    colorNo = '#000000';

    mseSupported = false;
    emeSupported = false;

    mimeTypes = [];

    drmMechanisms = [];

    constructor(private mseService: MseService, private emeService: EmeService) {
        this.mseSupported = mseService.isMseSupported();
        this.mimeTypes = mseService.getMimeTypesInfo();

        this.emeSupported = emeService.isEmeSupported();
        emeService.findOutSupportedKeySystems()
        .then((result: any[]) => {
            this.drmMechanisms = result;
        });
    }

}
