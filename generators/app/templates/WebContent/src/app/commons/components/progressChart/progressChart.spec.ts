import {
    addProviders,
    inject
} from '@angular/core/testing';
import {BaseRequestOptions} from '@angular/http';
import {MockBackend} from '@angular/http/testing';
import {TranslateService} from "ng2-translate/ng2-translate";
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {I18n} from "../../../i18n/i18n.service";
import {ProgressChart} from "./progressChart.component";
import {ElementRef} from '@angular/core';


class MockTranslateService extends TranslateService {
    constructor() {
        super(null, null);
    }

    public instant(text:string) {
        return text;
    }
}

class MockActivatedRoute {
    private params = Observable.of({
        param1: 'test1',
        param2: 'test2'
    });
}
class MockElementRef {
    public nativeElement='test';
}

describe('ProgressChart', () => {
    // provide our implementations or mocks to the dependency injector
    beforeEach(() => {
        addProviders([
            BaseRequestOptions,
            MockBackend,
            {provide: ElementRef, useClass: MockElementRef},
            {provide: ActivatedRoute, useClass: MockActivatedRoute},
            {provide: TranslateService, useClass: MockTranslateService},
            I18n,
            ProgressChart
        ])
    });
    let progressChart:ProgressChart;

    it('should be defined', inject([ProgressChart], (_progressChart) => {
        progressChart = _progressChart;
        expect(progressChart).toBeDefined();
    }));


});
