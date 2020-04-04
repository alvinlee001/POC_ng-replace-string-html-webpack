import { Component, OnInit, ElementRef, Renderer } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "t",
  templateUrl: "./translate-tag.component.html",
  styleUrls: ["./translate-tag.component.scss"]
})
export class TranslateTagComponent implements OnInit {
  constructor(
    private elt: ElementRef,
    private renderer: Renderer,
    private translate: TranslateService
  ) {}

  ngAfterViewInit() {
    const textNode = this.elt.nativeElement.childNodes[0];
    const textInput = textNode.nodeValue;
    console.log("translate", this.translate);
    console.log("textInput", textInput, this.translate.instant(textInput));
    this.translate.get(textInput).subscribe(value => {
      this.renderer.setText(textNode, value);
    });
  }

  ngOnInit() {}
}
