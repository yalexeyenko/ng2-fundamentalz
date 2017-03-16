import { Directive, Inject, OnInit, ElementRef } from '@angular/core'
import { JQ_TOKEN } from "./jQuery.service";

@Directive({
    selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit {
    private element: HTMLElement

    constructor(
        elementReference: ElementRef,
        @Inject(JQ_TOKEN) private $: any
    ) {
        this.element = elementReference.nativeElement;
    }

    ngOnInit(): void {
        this.element.addEventListener('click', e => {
            this.$('#simple-modal').model({});
        })
    }
}