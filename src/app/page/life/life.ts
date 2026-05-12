/* Angular */
import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
/* Service */
import { Screen } from '../../app.screen';

@Component({
  selector: 'app-life',
  imports: [],
  templateUrl: './life.html',
  styleUrl: './life.css',
})
export class Life implements AfterViewInit {
  constructor(
    /* Angular */ private el: ElementRef, private router: Router,
    /* Service */ public screen: Screen,
  ) {}

  ngAfterViewInit() {
    const notes = this.el.nativeElement.querySelectorAll('.sticky-note');
    notes.forEach((note: HTMLElement) => {
      const rotation = (Math.random() - 0.5) * 15;
      note.style.transform = `rotate(${rotation}deg)`;
    });
  }
  
  notes = [
    {
      heading: "2025-07-01",
      content: "취직했어요.",
    },
    {
      heading: "2025-12-19",
      content: "자취 시작!",
    },
    {
      heading: "2026-01-01",
      content: "2025년을 살아남으신 여러분,+수고하셨습니다.",
    },
    {
      heading: "2026-01-08",
      content: "가장 차가운 사람을 위한+가장 차가운 생일.",
    },
    {
      heading: "2026-01-29",
      content: "WinRAR 라이선스를 구매했어요.",
    },
    {
      heading: "2026-01-14",
      content: "세인트마틴 섬에 가고싶어서+비용을 계산해봤는데, 약 천만 원이었다+내 연봉의 30%를 1 년의 1.4% 기간에 쓰는 건데+그래도 가고싶다",
    },
    {
      heading: "2026-02-20",
      content: "오랜만에 DDLC를 하다가 늦잠을 잤다",
    },{
      heading: "2026-05-12",
      content: "언제쯤 차를 살 수 있을까.",
    },
  ];
}
