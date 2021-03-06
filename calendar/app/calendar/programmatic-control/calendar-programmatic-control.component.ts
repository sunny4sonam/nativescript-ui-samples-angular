import { Component, Injectable, ViewChild } from "@angular/core";
import { Page } from "tns-core-modules/ui/page";
import { RadCalendar } from "nativescript-ui-calendar";
import { RadCalendarComponent } from "nativescript-ui-calendar/angular";

@Component({
    moduleId: module.id,
    selector: "tk-calendar-programmatic-control",
    templateUrl: "calendar-programmatic-control.component.html"
})
@Injectable()
export class CalendarProgrammaticControlComponent {
    constructor() {
    }

    @ViewChild("myCalendar", { static: false }) _calendar: RadCalendarComponent;

    onNavigateForwardTap() {
        this._calendar.nativeElement.navigateForward();
    }

    onNavigateBackTap() {
        this._calendar.nativeElement.navigateBack();
    }

    onGoToDateTap() {
        const date = new Date();
        this._calendar.nativeElement.goToDate(date);
    }
}
