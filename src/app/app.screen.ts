/* Angular */
import { Injectable, signal, OnDestroy, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
/* RxJS */
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class Screen implements OnDestroy {
    constructor() {
        inject(BreakpointObserver)
        .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge
        ])
        .pipe(takeUntil(this.destroyed))
        .subscribe(result => {
            this.currentScreenSize.set(
            result.breakpoints[Breakpoints.XSmall] ? "xs" :
            result.breakpoints[Breakpoints.Small] ? "sm" :
            result.breakpoints[Breakpoints.Medium] ? "md" :
            result.breakpoints[Breakpoints.Large] ? "lg" :
            result.breakpoints[Breakpoints.XLarge] ? "xl" :
            "unknown");
        });
    }

    destroyed = new Subject<void>();
    currentScreenSize = signal("unknown");
    ngOnDestroy() {
        this.destroyed.next();
        this.destroyed.complete();
    }

    /* If certain criteria are met, just wait 300ms before execute anything. */
    /* Because Button Animations trigger on Hover on PC, */
    /* But on Click on Touchscreens. */
    async addButtonDelayForTouchscreens() {
        const isTouchScreen = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
        if (isTouchScreen && (this.currentScreenSize() === 'xs' || this.currentScreenSize() === 'sm')) {
            return new Promise(resolve => setTimeout(resolve, 300));
        } else {
            return Promise.resolve();
        }
    }
}